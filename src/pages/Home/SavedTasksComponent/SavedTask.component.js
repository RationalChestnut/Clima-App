import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import "firebase/storage";
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

function SavedTask({ task, navigation, id, isTaskCompleted }) {
  const [image, setImage] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const { user } = useContext(AuthenticationContext);
  const imageCollector = async () => {
    try {
      if (task) {
        const imageRef = storage.ref();
        const imageRefImage = imageRef.child(`/${task.image}`);
        const validImage = await imageRefImage.getDownloadURL();
        setImage(validImage);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const completeTask = async () => {
    try {
      const res = await axios.post(`http://localhost:5000/user/completeTask/${user}/${id}`);
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
    imageCollector();
  }, []);

  return (
    <SavedTaskContainer
      onPress={() =>
        navigation.navigate("Activities", {
          screen: "All Activities",
          params: {
            screen: "Activity",
            params: {
              item: task,
              imageURL: image,
              destination: "HomeScreen",
            },
          },
        })
      }
    >
      <TextContainer>
        <TaskTitle>{task.title}</TaskTitle>
        <TaskXP>+{task.exp} EXP</TaskXP>
      </TextContainer>
      <ImageContainer source={{ uri: image || null }} />
      <CheckMark onPress={completeTask}>
        {isTaskCompleted || isCompleted ? (
          <InnerCheckMark>
            <Check />
          </InnerCheckMark>
        ) : null}
      </CheckMark>
    </SavedTaskContainer>
  );
}

export default SavedTask;
