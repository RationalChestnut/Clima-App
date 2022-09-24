import React, { useState, useContext, useEffect } from "react";
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

function SavedTasksPage({ navigation }) {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthenticationContext);

  const getTaskData = async () => {
    try {
      const savedRed = await axios.get(`http://localhost:5000/user/savedTasks/${user}`);
      const userSavedTaskList = savedRed.data;
      const res = await axios.post(`http://localhost:5000/tasks/getMultipleTasks`, {
        listOfTaskIds: userSavedTaskList,
      });

      await axios.get(`http://localhost:5000/user/getUser/${user}`).then((response) => {
        const userTotalData = response.data.totalData;
        const date_ob = new Date();
        const currentMonth = date_ob.getMonth() + 1;
        const currentYear = date_ob.getFullYear();
        const day = date_ob.getDate();
        const currentWeek = Math.ceil(day / 7);
        if (userTotalData[currentYear][currentMonth][currentWeek][day]) {
          const completedTasks =
            userTotalData[currentYear][currentMonth][currentWeek][day].tasksCompleted
              .tasksCompletedIDs;
          completedTasks?.forEach((completedTask) => {
            const resultingData = res.data.listOfTasks.filter((task) => task.id === completedTask);
            resultingData?.forEach((task) => {
              // eslint-disable-next-line no-param-reassign
              task.isCompleted = true;
            });
          });

          setData(res.data.listOfTasks || []);
        } else {
          setData(res.data.listOfTasks || []);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTaskData();
  }, []);

  return (
    <PageContainer>
      <SavedTasksText>Habits</SavedTasksText>
      <FlatListContainer>
        {data?.map((task) => (
          <SavedTask
            task={task.data}
            key={task.id}
            navigation={navigation}
            id={task.id}
            isTaskCompleted={task.isCompleted || false}
          />
        ))}
      </FlatListContainer>
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
