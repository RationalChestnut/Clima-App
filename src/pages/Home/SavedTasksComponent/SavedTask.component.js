import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import {
  ImageContainer,
  SavedTaskContainer,
  TaskTitle,
  TaskXP,
  TextContainer,
  CheckMark,
  InnerCheckMark,
  Check,
} from "./SavedTask.styles";

import { storage } from "../../../infrastructure/Storage/storage.service";
import { AuthenticationContext } from "../../../infrastructure/Authentication/AuthenticationContext";

function SavedTask({ task, navigation }) {
  const [image, setImage] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [taskData, setTaskData] = useState();
  const { user } = useContext(AuthenticationContext);

  const taskDataCollector = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/tasks/getTask/${task}`);
      const thisTaskData = res.data; // We have data here
      setTaskData(thisTaskData);
      const imageRef = ref(storage, `/${thisTaskData.image}`);
      const validImage = await getDownloadURL(imageRef);
      setImage(validImage);
    } catch (err) {
      console.log(err);
    }
  };

  const completeTask = async () => {
    try {
      const res = await axios.post(`http://localhost:5000/user/completeTask/${user}/${task}`);
      const {
        userExp,
        exp,
        carbonReduced,
        wasteRemoved,
        waterSaved,
        userCarbonReduced,
        userWasteRemoved,
        userWaterSaved,
      } = res.data;
      setIsCompleted(true);
      navigation.navigate("Completion", {
        userExp,
        exp,
        carbonReduced,
        wasteRemoved,
        waterSaved,
        userCarbonReduced,
        userWasteRemoved,
        userWaterSaved,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    taskDataCollector();
  }, []);

  return (
    <SavedTaskContainer
      onPress={() =>
        navigation.navigate("Activities", {
          screen: "All Activities",
          params: {
            screen: "Activity",
            params: {
              item: { ...taskData },
              imageURL: image,
            },
          },
        })
      }
    >
      <TextContainer>
        <TaskTitle>{taskData?.title}</TaskTitle>
        <TaskXP>+{taskData?.exp} EXP</TaskXP>
      </TextContainer>
      <ImageContainer source={{ uri: image || null }} />
      <CheckMark onPress={completeTask}>
        {isCompleted ? (
          <InnerCheckMark>
            <Check />
          </InnerCheckMark>
        ) : null}
      </CheckMark>
    </SavedTaskContainer>
  );
}

export default SavedTask;
