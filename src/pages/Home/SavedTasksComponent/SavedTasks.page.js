import React, { useState, useContext, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import SavedTask from "./SavedTask.component";
import {
  SavedTasksText,
  FlatListContainer,
  PageContainer,
  AddMoreButton,
  AddMoreText,
} from "./SavedTasks.style";
import { AuthenticationContext } from "../../../infrastructure/Authentication/AuthenticationContext";
import { tasks } from "../../../data/tasks.data";

function SavedTasksPage({ navigation }) {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthenticationContext);
  const getTaskData = async () => {
    try {
      const savedRes = await axios.get(`http://localhost:5000/user/savedTasks/${user}`);
      const userSavedTaskList = savedRes.data;
      const res = await axios.post(`http://localhost:5000/tasks/getMultipleTasks`, {
        listOfTaskIds: userSavedTaskList,
      });
      const dataToAppend = [];

      await axios.get(`http://localhost:5000/user/getUser/${user}`).then((response) => {
        const userTotalData = response.data.totalData;
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
      });
    } catch (err) {
      console.log(err);
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
    />
  );

  return (
    <PageContainer>
      <SavedTasksText>Habits</SavedTasksText>
      <FlatListContainer data={data} renderItem={renderSavedTask} />
      <AddMoreButton
        onPress={() =>
          navigation.navigate("Activities", {
            screen: "All Activities",
            params: {
              screen: "All Activities Screen",
            },
          })
        }
      >
        <AddMoreText>Explore More</AddMoreText>
      </AddMoreButton>
    </PageContainer>
  );
}

export default SavedTasksPage;
