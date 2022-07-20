import React from "react";
import { HomePageContainer, PaddingAdder } from "./Home.styled";
import Tasks from "../../components/Tasks/Tasks";
import Habit from "./HabitComponent/Habit.component";
import SavedTasksPage from "./SavedTasksComponent/SavedTasks.page";

function Home() {
  return (
    <HomePageContainer>
      <PaddingAdder>
        <Habit />
        <SavedTasksPage />
        <Tasks />
      </PaddingAdder>
    </HomePageContainer>
  );
}

export default Home;
