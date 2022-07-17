import React from "react";
import { HomePageContainer } from "./Home.styled";
import Tasks from "../../components/Tasks/Tasks";
import Habit from "./HabitComponent/Habit.component";
import SavedTasksPage from "./SavedTasksComponent/SavedTasks.page";

function Home() {
  return (
    <HomePageContainer>
      <Habit />
      <SavedTasksPage />
      <Tasks />
    </HomePageContainer>
  );
}

export default Home;
