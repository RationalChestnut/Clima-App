import React from "react";
import { ItemContainer, CourseTypeText, Title, XPLabelContainer, XPLabelText } from "./Item.styled";
import IconComponent from "../Icon/Icon.component";
import background from "../../../../../../assets/images/lightswitch.jpeg";

function Item() {
  return (
    <ItemContainer>
      <IconComponent image={background} />
      <CourseTypeText>Course</CourseTypeText>
      <Title>Discover plant-based food</Title>
      <XPLabelContainer>
        <XPLabelText>+323 EXP</XPLabelText>
      </XPLabelContainer>
    </ItemContainer>
  );
}
export default Item;
