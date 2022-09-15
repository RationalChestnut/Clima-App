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
      setData(res.data.listOfTasks || []);
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
          <SavedTask task={task.data} key={task.id} navigation={navigation} />
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
