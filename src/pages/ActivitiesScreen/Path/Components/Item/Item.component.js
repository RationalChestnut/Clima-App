/* eslint-disable react/prop-types */
import React from "react";
import { ItemContainer, CourseTypeText, Title } from "./Item.styled";
import IconComponent from "../Icon/Icon.component";

function Item({ course, navigation, pathNumber, sectionNumber }) {
  return (
    <ItemContainer
      onPress={() =>
        navigation.navigate("DisplayActivityInfoScreen", {
          pathItem: course,
          navigation,
          pathNumber,
          sectionNumber,
        })
      }
    >
      <IconComponent image={course.image} />
      <CourseTypeText>{course.type}</CourseTypeText>
      <Title>{course.title}</Title>
    </ItemContainer>
  );
}
export default Item;
