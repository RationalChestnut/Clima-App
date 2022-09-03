/* eslint-disable no-nested-ternary */
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  HabitsContainer,
  TasksTitle,
  UpperHabitBar,
  AddActivityIcon,
  HabitText,
  HabitBar,
  ProgressHabitText,
} from "./Habit.style";
import Day from "./Day.component";
import { AuthenticationContext } from "../../../infrastructure/Authentication/AuthenticationContext";

function Habit({ navigation }) {
  const [days, setDays] = useState([]);
  const { user } = useContext(AuthenticationContext);
  const getWeekData = async () => {
    try {
      axios.get(`http://localhost:5000/user/getUser/${user}`).then((res) => {
        const userTotalData = res.data.totalData;
        const date_ob = new Date();
        const currentMonth = date_ob.getMonth() + 1;
        const currentYear = date_ob.getFullYear();
        const currentDay = date_ob.getDay();
        const currentWeek = Math.ceil(currentDay / 7);
        const dataToAppend = [];

        if (
          userTotalData[currentYear] &&
          userTotalData[currentYear][currentMonth] &&
          userTotalData[currentYear][currentMonth][currentWeek]
        ) {
          const thisWeekData = userTotalData[currentYear][currentMonth][currentWeek];
          for (let i = 1; i <= 7; i += 1) {
            const dayName =
              i === 1
                ? "Mon"
                : i === 2
                ? "Tue"
                : i === 3
                ? "Wed"
                : i === 4
                ? "Thu"
                : i === 5
                ? "Fri"
                : i === 6
                ? "Sat"
                : "Sun";
            const objectToPush = {};
            if (i === date_ob.getDay()) {
              objectToPush.currentDay = true;
            }

            const assignedDayValue = thisWeekData[i + (currentWeek - 1) * 7];

            if (!assignedDayValue) {
              if (i < currentDay % 7) {
                dataToAppend.push({ ...objectToPush, day: dayName, completed: false });
              } else {
                dataToAppend.push({ ...objectToPush, day: dayName });
              }
            } else {
              dataToAppend.push({ ...objectToPush, day: dayName, completed: true });
            }
          }
        } else {
          for (let i = 1; i <= 7; i += 1) {
            const dayName =
              i === 1
                ? "Mon"
                : i === 2
                ? "Tue"
                : i === 3
                ? "Wed"
                : i === 4
                ? "Thu"
                : i === 5
                ? "Fri"
                : i === 6
                ? "Sat"
                : "Sun";
            const objectToPush = {};
            if (i === date_ob.getDay()) {
              objectToPush.currentDay = true;
            }
            if (i < date_ob.getDay()) {
              dataToAppend.push({ ...objectToPush, day: dayName, completed: false });
            } else {
              dataToAppend.push({ ...objectToPush, day: dayName });
            }
          }
        }
        setDays(dataToAppend);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWeekData();
  }, []);

  return (
    <HabitsContainer>
      <AddActivityIcon
        onPress={() => {
          navigation.navigate("Activities", {
            screen: "All Activities",
            params: {
              screen: "All Activities Screen",
            },
          });
        }}
      />
      <UpperHabitBar>
        <TasksTitle>Tasks Completed</TasksTitle>
      </UpperHabitBar>
      <HabitText>Log an action each day to earn extra EXP!</HabitText>
      <HabitBar>
        {days.map((day) => (
          <Day
            day={day.day}
            active={day.currentDay}
            completed={day.completed === true}
            failed={day.completed === false}
            key={`habit:${day.day}`}
          />
        ))}
      </HabitBar>
      <ProgressHabitText>You have 10 actions saved, 0 logged today</ProgressHabitText>
    </HabitsContainer>
  );
}

export default Habit;
