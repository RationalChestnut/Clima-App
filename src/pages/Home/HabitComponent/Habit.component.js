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

function Habit({ navigation, userData }) {
  const [days, setDays] = useState([]);
  const [actionsLogged, setActionsLogged] = useState(0);
  const weekCount = (year, month_number) => {
    const firstOfMonth = new Date(year, month_number - 1, 1);
    const lastOfMonth = new Date(year, month_number - 1, 0);

    const used = firstOfMonth.getDay() + 6 + lastOfMonth.getDate();

    return Math.floor(used / 7);
  };

  const getWeekData = () => {
    const date_ob = new Date();
    const currentMonth = date_ob.getMonth() + 1;
    const currentYear = date_ob.getFullYear();
    const currentDay = date_ob.getDay() === 0 ? 7 : date_ob.getDay();
    const day = date_ob.getDate();
    const currentWeek = Math.ceil(day / 7);
    if (userData?.exp === 0) {
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
            : i === 7 && "Sun";
        const objectToPush = {};
        if (i === currentDay) {
          objectToPush.currentDay = true;
        }
        data.push({ ...objectToPush, day: dayName });
      }
      setDays(data);
      return;
    }
    if (userData?.totalData?.[currentYear]?.[currentMonth]?.[currentWeek]?.[day]) {
      setActionsLogged(
        userData?.totalData?.[currentYear][currentMonth][currentWeek][day].tasksCompleted
          .numTasksCompleted
      );
    }

    const dataToAppend = [];

    const data = [];
    if (
      userData?.totalData?.[currentYear] &&
      userData?.totalData?.[currentYear]?.[currentMonth] &&
      userData?.totalData?.[currentYear]?.[currentMonth]?.[currentWeek]
    ) {
      let year = currentYear;
      let month = currentMonth;
      let week = currentWeek;
      let thisDay = day;

      for (let i = currentDay; i > 0; i -= 1) {
        if (userData?.totalData?.[year]?.[month]?.[week]?.[thisDay]) {
          dataToAppend.push({
            completed:
              userData?.totalData?.[year][month][week][thisDay].tasksCompleted.numTasksCompleted,
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
          : i === 7 && "Sun";
      const objectToPush = {};
      if (i === currentDay) {
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
