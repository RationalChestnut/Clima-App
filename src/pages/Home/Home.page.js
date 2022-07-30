import React from "react";
import { HomePageContainer, PaddingAdder } from "./Home.styled";
import Habit from "./HabitComponent/Habit.component";
import SavedTasksPage from "./SavedTasksComponent/SavedTasks.page";

function Home({ navigation }) {
  return (
    <HomePageContainer>
      <PaddingAdder>
        <Habit navigation={navigation} />
        <SavedTasksPage navigation={navigation} />
      </PaddingAdder>
    </HomePageContainer>
  );
}

export default Home;
