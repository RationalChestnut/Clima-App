import React, { useEffect, useState } from "react";
import axios from "axios";
import BarComponent from "../../../PetScreen/Bar/Bar.component";
import {
  ActivitiesPageContainer,
  ProgressText,
  BarContainer,
  TasksContainer,
} from "./Activities.styles";
import SavedTask from "../../../Home/SavedTasksComponent/SavedTask.component";

function Activities({ tasksList, navigation }) {
  const [tasks, setTasks] = useState([]);

  const getAllTasks = async () => {
    try {
      const res = await axios.post(`http://localhost:5000/tasks/getMultipleTasks`, {
        listOfTaskIds: tasksList,
      });
      setTasks(res.data.listOfTasks);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <ActivitiesPageContainer>
      <ProgressText>0/10 activities completed</ProgressText>
      <BarContainer>
        <BarComponent color="#0FA958" percentage={20} />
      </BarContainer>
      <TasksContainer>
        {tasks?.map((task) => (
          <SavedTask task={task.data} navigation={navigation} key={task.id} />
        ))}
      </TasksContainer>
    </ActivitiesPageContainer>
  );
}

export default Activities;
