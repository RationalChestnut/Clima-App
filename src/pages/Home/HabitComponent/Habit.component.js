import React from "react";
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

function Habit() {
  return (
    <HabitsContainer>
      <AddActivityIcon />
      <UpperHabitBar>
        <TasksTitle>Tasks Completed</TasksTitle>
      </UpperHabitBar>
      <HabitText>Log an action each day to earn extra EXP!</HabitText>
      <HabitBar>
        <Day completed day="Mon" active />
        <Day day="Tue" failed />
        <Day day="Wed" failed />
        <Day completed day="Thu" />
        <Day day="Fri" />
        <Day day="Sat" />
        <Day day="Sun" />
      </HabitBar>
      <ProgressHabitText>You have 10 actions saved, 0 logged today</ProgressHabitText>
    </HabitsContainer>
  );
}

export default Habit;
