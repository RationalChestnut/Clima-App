/* eslint-disable radix */
/* eslint-disable no-nested-ternary */
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  HabitsContainer,
  TasksTitle,
  UpperHabitBar,
  AddActivityIcon,
  HabitBar,
  ProgressHabitText,
} from "./Habit.style";
import Day from "./Day.component";
import { AuthenticationContext } from "../../../infrastructure/Authentication/AuthenticationContext";

function Habit({ navigation }) {
  const [days, setDays] = useState([]);
  const { user } = useContext(AuthenticationContext);
  const [actionsLogged, setActionsLogged] = useState(0);

  const getWeekData = async () => {
    try {
      axios.get(`http://localhost:5000/user/getUser/${user}`).then((res) => {
        const userTotalData = res.data.totalData;
        const date_ob = new Date();
        const currentMonth = date_ob.getMonth() + 1;
        const currentYear = date_ob.getFullYear();
        const currentDay = date_ob.getDay();
        const day = date_ob.getDate();
        const currentWeek = Math.ceil(day / 7);
        const dataToAppend = [];

        if (userTotalData[currentYear][currentMonth][currentWeek][day]) {
          setActionsLogged(
            userTotalData[currentYear][currentMonth][currentWeek][day].tasksCompleted
              .numTasksCompleted
          );
        }

        if (
          userTotalData[currentYear] &&
          userTotalData[currentYear][currentMonth] &&
          userTotalData[currentYear][currentMonth][currentWeek]
        ) {
          const thisWeekData = userTotalData[currentYear][currentMonth][currentWeek];
          const daysOfTheWeek = Object.keys(thisWeekData);
          let monthCounter = currentMonth;
          let dayCounter;
          const dateDataToAppend = [];
          for (let i = daysOfTheWeek.length - 1; i >= 0; i -= 1) {
            if (parseInt(daysOfTheWeek[i]) < 1) {
              monthCounter -= 1;
              // Year is broken
              dayCounter = new Date(currentYear, monthCounter, 0).getDate();
              dateDataToAppend.push(userTotalData[currentYear][monthCounter][4][dayCounter] || "");
            } else {
              dateDataToAppend.push(
                userTotalData[currentYear][currentMonth][currentWeek][daysOfTheWeek[i]] || ""
              );
            }
          }
          // Issue is when it is the start of the month and it is not a monday
          // We need to map the current day in terms of the month to the current day in terms of week and get the prior days of the week's data

          // check if theres a 1 in this weekdata thats not monday, figure out how many days we need to fill in the week
          // if there is we get the last week of last month's data
          // the last [number] of days from that week

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
            if (i === currentDay % 7) {
              objectToPush.currentDay = true;
            }

            // const assignedDayValue = thisWeekData[]; // ERROR THIS PROBABLY WILL NOT WORK
            if (dateDataToAppend[i] && dateDataToAppend[i] !== "") {
              dataToAppend.push({ ...objectToPush, day: dayName, completed: true });
            } else {
              dataToAppend.push({ ...objectToPush, day: dayName });
            }

            // if (!assignedDayValue) {
            //   if (i < currentDay % 7) {
            //     dataToAppend.push({ ...objectToPush, day: dayName, completed: false });
            //   } else {
            //     dataToAppend.push({ ...objectToPush, day: dayName });
            //   }
            // } else {
            //   dataToAppend.push({ ...objectToPush, day: dayName, completed: true });
            // }
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
            if (i === currentDay % 7) {
              objectToPush.currentDay = true;
            }
            if (i < currentDay % 7) {
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
      <ProgressHabitText>You have {actionsLogged} actions logged today</ProgressHabitText>
    </HabitsContainer>
  );
}

export default Habit;
