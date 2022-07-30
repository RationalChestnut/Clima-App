import React from "react";
import SavedTask from "./SavedTask.component";
import {
  SavedTasksText,
  FlatListContainer,
  PageContainer,
  AddMoreButton,
  AddMoreText,
} from "./SavedTasks.style";
import lightswitch from "../../../../assets/images/lightswitch.jpeg";
import building from "../../../../assets/images/building.jpeg";

function SavedTasksPage({ navigation }) {
  const data = [
    {
      id: 1,
      title: "Turn off the lights",
      image: lightswitch,
      xp: 25,
      isCompleted: true,
    },
    {
      id: 2,
      title: "Walk for a day",
      image: building,
      xp: 20,
      isCompleted: false,
    },
    {
      id: 3,
      title: "Walk for a day",
      image: building,
      xp: 20,
      isCompleted: false,
    },
  ];
  return (
    <PageContainer>
      <SavedTasksText>Habits</SavedTasksText>
      <FlatListContainer>
        {data.map((item) => (
          <SavedTask
            title={item.title}
            image={item.image}
            xp={item.xp}
            isCompleted={item.isCompleted}
            key={item.id}
          />
        ))}
      </FlatListContainer>
      <AddMoreButton onPress={() => navigation.navigate("All Activities")}>
        <AddMoreText>Explore More</AddMoreText>
      </AddMoreButton>
    </PageContainer>
  );
}

export default SavedTasksPage;
