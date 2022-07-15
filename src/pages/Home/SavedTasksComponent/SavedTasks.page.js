import React from "react";
import SavedTask from "./SavedTask.component";
import { SavedTasksText, FlatListContainer, PageContainer } from "./SavedTasks.style";
import lightswitch from "../../../../assets/images/lightswitch.jpeg";
import building from "../../../../assets/images/building.jpeg";

function SavedTasksPage() {
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
      <SavedTasksText>Saved Tasks</SavedTasksText>
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
    </PageContainer>
  );
}

export default SavedTasksPage;
