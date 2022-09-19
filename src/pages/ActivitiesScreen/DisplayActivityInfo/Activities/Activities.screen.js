import React, { useEffect, useState, useContext } from "react";
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

function Activities({ tasksList, navigation, pathNumber, sectionNumber }) {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const { user } = useContext(AuthenticationContext);

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

  const getCompletedTasks = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/path/getCompletedPathTask/${user}/${pathNumber}/${sectionNumber}/`
      );
      setCompletedTasks(res.data.completedPathTasks);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllTasks();
    getCompletedTasks();
  }, []);

  return (
    <ActivitiesPageContainer>
      <ProgressText>
        {completedTasks?.length}/{tasks?.length} activities completed
      </ProgressText>
      <BarContainer>
        <BarComponent color="#0FA958" percentage={(completedTasks.length / tasks.length) * 100} />
      </BarContainer>
      <TasksContainer>
        {tasks?.map((task) => (
          <SavedTask
            task={task.data}
            navigation={navigation}
            key={task.id}
            id={task.id}
            isTaskCompleted={completedTasks?.includes(task.id)}
          />
        ))}
      </TasksContainer>
    </ActivitiesPageContainer>
  );
}

export default Activities;
