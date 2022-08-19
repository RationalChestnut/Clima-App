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
      const res = await axios.get(`http://localhost:5000/user/savedTasks/${user}`);
      setData(res.data || []);
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
        {data?.map((item) => (
          <SavedTask task={item} key={item.id} />
        ))}
      </FlatListContainer>
      <AddMoreButton
        onPress={() => navigation.navigate("Activities", { screen: "All Activities" })}
      >
        <AddMoreText>Explore More</AddMoreText>
      </AddMoreButton>
    </PageContainer>
  );
}

export default SavedTasksPage;
