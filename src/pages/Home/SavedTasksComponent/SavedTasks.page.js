import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import SavedTask from "./SavedTask.component";
import {
  SavedTasksText,
  FlatListContainer,
  PageContainer,
  AddMoreButton,
  AddMoreText,
  TasksToBeSavedContainer,
  TasksToBeSavedText,
  Description,
} from "./SavedTasks.style";

import { tasks } from "../../../data/tasks.data";

function SavedTasksPage({
  navigation,
  userData,
  isIntroScreen,
  canClickOnTask,
  setDidClickOnTask,
  setIndex,
  index,
}) {
  const [data, setData] = useState([]);
  const getTaskData = async () => {
    if (!isIntroScreen) {
      try {
        const userSavedTaskList = userData.savedTasks;
        const dataToAppend = [];
        const userTotalData = userData.totalData;
        const date_ob = new Date();
        const currentMonth = date_ob.getMonth() + 1;
        const currentYear = date_ob.getFullYear();
        const day = date_ob.getDate();
        const currentWeek = Math.ceil(day / 7);
        const completedTasks =
          userTotalData?.[currentYear]?.[currentMonth]?.[currentWeek]?.[day]?.tasksCompleted
            ?.tasksCompletedIDs;
        for (let i = 0; i < userSavedTaskList.length; i += 1) {
          const correspondingTask = tasks.filter((task) => task.id === userSavedTaskList[i]);
          if (completedTasks?.includes(correspondingTask[0].id)) {
            correspondingTask[0].isCompleted = true;
          }
          dataToAppend.push(correspondingTask[0]);
        }
        setData(dataToAppend);
      } catch (err) {
        setData(null);
      }
    } else {
      setData(tasks.slice(0, 5));
    }
  };

  useFocusEffect(
    useCallback(() => {
      getTaskData();
    }, [])
  );

  const renderSavedTask = ({ item }) => (
    <SavedTask
      task={item}
      key={item.id}
      navigation={navigation}
      isTaskCompleted={item.isCompleted || false}
      isIntroScreen={isIntroScreen}
      canClickOnTask={canClickOnTask}
      setDidClickOnTask={setDidClickOnTask}
      setIndex={setIndex}
      index={index}
    />
  );
  return (
    <PageContainer>
      <SavedTasksText>Habits</SavedTasksText>

      {data && data !== [] ? (
        <FlatListContainer data={data} renderItem={renderSavedTask} />
      ) : (
        <TasksToBeSavedContainer>
          <Description>Add a task to get started!</Description>
          <Description>
            Completed tasks reward you with EXP and also are added to your stats page
          </Description>
          <TasksToBeSavedText>Click Explore More to get started</TasksToBeSavedText>
        </TasksToBeSavedContainer>
      )}

      <AddMoreButton
        onPress={() =>
          !isIntroScreen
            ? navigation.navigate("Activities", {
                screen: "Path",
              })
            : null
        }
      >
        <AddMoreText>Explore More</AddMoreText>
      </AddMoreButton>
    </PageContainer>
  );
}

export default SavedTasksPage;
