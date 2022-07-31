import React from "react";
import BarComponent from "../../../PetScreen/Bar/Bar.component";
import {
  ActivitiesPageContainer,
  ProgressText,
  BarContainer,
  TasksContainer,
} from "./Activities.styles";
import SavedTask from "../../../Home/SavedTasksComponent/SavedTask.component";
import background from "../../../../../assets/images/building.jpeg";

function Activities() {
  return (
    <ActivitiesPageContainer>
      <ProgressText>0/10 activities completed</ProgressText>
      <BarContainer>
        <BarComponent color="#0FA958" percentage={20} />
      </BarContainer>
      <TasksContainer>
        <SavedTask title="Hehe" xp={320} isCompleted={false} image={background} />
        <SavedTask title="Hehe" xp={320} isCompleted={false} image={background} />
        <SavedTask title="Hehe" xp={320} isCompleted={false} image={background} />
        <SavedTask title="Hehe" xp={320} isCompleted={false} image={background} />
      </TasksContainer>
    </ActivitiesPageContainer>
  );
}

export default Activities;
