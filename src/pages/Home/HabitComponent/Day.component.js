import React from "react";
import { DayContainer, DayText, DayOuterCircle, Check, X } from "./Day.style";

function Day({ day, completed, active, failed }) {
  return (
    <DayContainer active={active}>
      <DayText>{day}</DayText>
      <DayOuterCircle completed={completed} failed={failed}>
        {completed && <Check />}
        {failed && <X />}
      </DayOuterCircle>
    </DayContainer>
  );
}

export default Day;
