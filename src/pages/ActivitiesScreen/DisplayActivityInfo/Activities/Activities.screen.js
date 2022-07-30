import React from "react";
import BarComponent from "../../../PetScreen/Bar/Bar.component";
import { ActivitiesPageContainer, ProgressText, BarContainer } from "./Activities.styles";

function Activities() {
  return (
    <ActivitiesPageContainer>
      <ProgressText>0/10 activities completed</ProgressText>
      <BarContainer>
        <BarComponent color="#0FA958" percentage={20} />
      </BarContainer>
    </ActivitiesPageContainer>
  );
}

export default Activities;
