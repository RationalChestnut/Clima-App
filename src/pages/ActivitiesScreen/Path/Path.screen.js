import React from "react";
import Item from "./Components/Item/Item.component";
import {
  CourseDescription,
  PathContainer,
  SectionContainer,
  TitleText,
} from "./Path.screen.styles";

import background from "../../../../assets/images/background.jpeg";

function PathScreen() {
  const mockData = [
    [
      {
        name: "At home activities",
        type: "Course",
        icon: background,
        totalCarbonRemoved: 0,
        totalWasteRemoved: 0,
        totalWaterSaved: 0,
        exp: 430,
        tasks: ["Qxs2THMxMiavcZhnwwZS", "Qxs2THMxMiavcZhnwwZS"],
        resources: [
          {
            type: "video",
            link: "alskfajs",
          },
          {
            type: "article",
            link: "artjalskfj",
          },
        ],
      },
    ],
  ];
  return (
    <PathContainer>
      <TitleText>Your sustainability plan</TitleText>
      <CourseDescription>
        This plan will help you get started on your carbon-zero journey!
      </CourseDescription>
      {mockData.map((course) => (
        <SectionContainer>
          {course.map((section) => (
            <Item
              course={{
                image: section.icon,
                title: section.name,
                type: section.type,
                exp: section.exp,
              }}
            />
          ))}
        </SectionContainer>
      ))}
    </PathContainer>
  );
}

export default PathScreen;
