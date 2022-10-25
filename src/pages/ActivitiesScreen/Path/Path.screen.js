import React from "react";
import Item from "./Components/Item/Item.component";
import {
  CourseDescription,
  PathContainer,
  SectionContainer,
  TitleText,
} from "./Path.screen.styles";

import paths from "../../../data/paths.data";

function PathScreen({ navigation }) {
  return (
    <PathContainer>
      <TitleText>Your sustainability plan</TitleText>
      <CourseDescription>
        This plan will help you get started on your carbon-zero journey!
      </CourseDescription>
      {paths.map((section, index) => (
        <SectionContainer key={index}>
          {section.map((course) => (
            <Item
              course={course}
              navigation={navigation}
              key={course.id}
              pathNumber={index + 1}
              sectionNumber={section.number}
            />
          ))}
        </SectionContainer>
      ))}
    </PathContainer>
  );
}

export default PathScreen;
