import React from "react";
import { DayContainer, DayText, DayOuterCircle } from "./Day.style";

function Day({ day, completed, active }) {
  return (
    <DayContainer active={active}>
      <DayText>{day}</DayText>
      <DayOuterCircle completed={completed} />
    </DayContainer>
  );
}

export default Day;
