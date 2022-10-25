import React, { useCallback, useState, useContext } from "react";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import BarComponent from "../../../PetScreen/Bar/Bar.component";
import {
  ActivitiesPageContainer,
  ProgressText,
  BarContainer,
  TasksContainer,
} from "./Activities.styles";
import SavedTask from "../../../Home/SavedTasksComponent/SavedTask.component";
import { AuthenticationContext } from "../../../../infrastructure/Authentication/AuthenticationContext";
import { tasks } from "../../../../data/tasks.data";

function Activities({ tasksList, navigation, pathNumber, sectionNumber, pathItem }) {
  const [tasksData, setTasksData] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const { user } = useContext(AuthenticationContext);

  const getAllTasks = () => {
    const taskData = [];
    for (let i = 0; i < tasksList.length; i += 1) {
      const correspondingTask = tasks.filter((task) => task.id === tasksList[i]);
      taskData.push(correspondingTask[0]);
    }
    setTasksData(taskData);
  };
  const getCompletedTasks = async () => {
    try {
      const res = await axios.get(`https://clima-backend.herokuapp.com/user/getUser/${user}`);
      const intersection = tasksList.filter((element) => res.data.uniqueTasks.includes(element));
      setCompletedTasks(intersection);
    } catch (err) {
      console.log(err);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getAllTasks();
      getCompletedTasks();
    }, [])
  );

  const renderSavedTask = ({ item }) => (
    <SavedTask
      task={item}
      key={item.id}
      navigation={navigation}
      isTaskCompleted={completedTasks.includes(item.id)}
      isPathTask
      sectionNumber={sectionNumber}
      pathNumber={pathNumber}
      isPathPage
      pathItem={pathItem}
    />
  );
  return (
    <ActivitiesPageContainer>
      <ProgressText>
        {completedTasks?.length || 0}/{tasksList?.length} activities completed
      </ProgressText>
      <BarContainer>
        <BarComponent
          color="#0FA958"
          percentage={(completedTasks?.length / tasksList?.length) * 100}
        />
      </BarContainer>
      <TasksContainer data={tasksData} renderItem={renderSavedTask} />
    </ActivitiesPageContainer>
  );
}

export default Activities;
