/* eslint-disable react/prop-types */
import React from "react";
import { ItemContainer, CourseTypeText, Title, XPLabelContainer, XPLabelText } from "./Item.styled";
import IconComponent from "../Icon/Icon.component";

function Item({ course }) {
  return (
    <ItemContainer>
      <IconComponent image={course.image} />
      <CourseTypeText>{course.type}</CourseTypeText>
      <Title>{course.title}</Title>
      <XPLabelContainer>
        <XPLabelText>+{course.exp} EXP</XPLabelText>
      </XPLabelContainer>
    </ItemContainer>
  );
}
export default Item;
