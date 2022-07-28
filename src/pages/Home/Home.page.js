import React from "react";
import { HomePageContainer, PaddingAdder } from "./Home.styled";
import Habit from "./HabitComponent/Habit.component";
import SavedTasksPage from "./SavedTasksComponent/SavedTasks.page";

function Home() {
  return (
    <HomePageContainer>
      <PaddingAdder>
        <Habit />
        <SavedTasksPage />
      </PaddingAdder>
    </HomePageContainer>
  );
}

export default Home;
