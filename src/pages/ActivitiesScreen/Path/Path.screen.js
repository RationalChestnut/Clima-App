import React from "react";
import Item from "./Components/Item/Item.component";
import {
  CourseDescription,
  PathContainer,
  SectionContainer,
  TitleText,
} from "./Path.screen.styles";

function PathScreen() {
  const mockData = [
    [
      {
        name: "At home activities",
        icon: "",
        totalCarbonRemoved: 0,
        totalWasteRemoved: 0,
        totalWaterSaved: 0,
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
      {},
    ],
    [],
  ];
  return (
    <PathContainer>
      <TitleText>Your sustainability plan</TitleText>
      <CourseDescription>
        This plan will help you get started on your carbon-zero journey!
      </CourseDescription>
      <SectionContainer>
        <Item />
      </SectionContainer>
      <SectionContainer>
        <Item />
        <Item />
      </SectionContainer>
      <SectionContainer>
        <Item />
        <Item />
      </SectionContainer>
    </PathContainer>
  );
}

export default PathScreen;
