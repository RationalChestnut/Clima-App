/* eslint-disable radix */
/* eslint-disable no-nested-ternary */
import React, { useContext, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
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

  const weekCount = (year, month_number) => {
    // month_number is in the range 1..12
    const firstOfMonth = new Date(year, month_number - 1, 1);
    const lastOfMonth = new Date(year, month_number - 1, 0);

    const used = firstOfMonth.getDay() + 6 + lastOfMonth.getDate();

    return Math.floor(used / 7);
  };

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

        if (res.data.exp === 0) {
          const data = [];
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
            data.push({ ...objectToPush, day: dayName });
          }
          setDays(data);
          return;
        }

        if (userTotalData?.[currentYear]?.[currentMonth]?.[currentWeek]?.[day]) {
          setActionsLogged(
            userTotalData[currentYear][currentMonth][currentWeek][day].tasksCompleted
              .numTasksCompleted
          );
        } // works

        const dataToAppend = [];

        const data = [];
        if (
          userTotalData?.[currentYear] &&
          userTotalData?.[currentYear]?.[currentMonth] &&
          userTotalData?.[currentYear]?.[currentMonth]?.[currentWeek]
        ) {
          let year = currentYear;
          let month = currentMonth;
          let week = currentWeek;
          let thisDay = day;

          for (let i = currentDay; i > 0; i -= 1) {
            if (userTotalData[year]?.[month]?.[week]?.[thisDay]) {
              dataToAppend.push({
                completed:
                  userTotalData[year][month][week][thisDay].tasksCompleted.numTasksCompleted,
                dayOfTheWeek: new Date(year, month - 1, thisDay).getDay(),
              });
            } else {
              dataToAppend.push(null);
            }

            if (thisDay - 1 >= 1) {
              thisDay -= 1;
            } else {
              const now = new Date();
              const daysInMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
              thisDay = daysInMonth;

              if (month - 1 >= 1) {
                month -= 1;

                week = weekCount(year, month);
              } else {
                year -= 1;
                month = 12;
                week = weekCount(year, month);
              }
            }

            if (thisDay % 7 === 0) {
              if (week === 1) {
                month -= 1;
                week = weekCount(year, month);
              } else {
                week -= 1;
              }
            }
          }
        }

        dataToAppend.sort((a, b) => {
          if (a?.dayOfTheWeek >= b?.dayOfTheWeek) {
            return 1;
          }
          return -1;
        });

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
          if (dataToAppend[i - 1]) {
            data.push({ ...objectToPush, day: dayName, completed: true });
          } else if (i < currentDay) {
            data.push({ ...objectToPush, day: dayName, completed: false });
          } else {
            data.push({ ...objectToPush, day: dayName });
          }
        }
        setDays(data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getWeekData();
    }, [])
  );

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
