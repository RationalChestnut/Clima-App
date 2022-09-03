import React from "react";
import { DisplayActivityInfoPageContainer } from "../DisplayActivityInfo/DisplayActivityInfo.styles";
import { Title, TopBar } from "./DisplayActivities.styles";

function DisplayActivitiesPage({ navigation }) {
  return (
    <DisplayActivityInfoPageContainer>
      <TopBar>
        <Title>Outdoor Activities</Title>
      </TopBar>
    </DisplayActivityInfoPageContainer>
  );
}

export default DisplayActivitiesPage;
