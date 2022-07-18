import React from "react";
import { BarContainer, Bar } from "./Bar.style";

// eslint-disable-next-line react/prop-types
function BarComponent({ color, percentage }) {
  return (
    <BarContainer>
      <Bar percentage={percentage} color={color} />
    </BarContainer>
  );
}

export default BarComponent;
