/* eslint-disable react/prop-types */
import React from "react";
import { ItemContainer, CourseTypeText, Title, XPLabelContainer, XPLabelText } from "./Item.styled";
import IconComponent from "../Icon/Icon.component";

function Item({ course, navigation }) {
  return (
    <ItemContainer
      onPress={() =>
        navigation.navigate("DisplayActivityInfoScreen", { pathItem: course, navigation })
      }
    >
      <IconComponent image={course.icon} />
      <CourseTypeText>{course.type}</CourseTypeText>
      <Title>{course.name}</Title>
      <XPLabelContainer>
        <XPLabelText>+{course.exp} EXP</XPLabelText>
      </XPLabelContainer>
    </ItemContainer>
  );
}
export default Item;
