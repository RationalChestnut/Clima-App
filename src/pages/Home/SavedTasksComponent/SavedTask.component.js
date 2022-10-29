import axios from "axios";
import React, { useState, useContext } from "react";
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

import { AuthenticationContext } from "../../../infrastructure/Authentication/AuthenticationContext";

function SavedTask({
  task,
  navigation,
  isTaskCompleted,
  isPathPage = false,
  pathNumber,
  sectionNumber,
  pathItem,
}) {
  const [isCompleted, setIsCompleted] = useState(false);
  const { user } = useContext(AuthenticationContext);

  const completeTask = async () => {
    try {
      const date_ob = new Date();
      const day = date_ob.getDate();
      const month = date_ob.getMonth() + 1;
      const year = date_ob.getFullYear();
      const res = await axios.post(
        `https://clima-backend.herokuapp.com/user/completeTask/${user}`,
        {
          task,
          sliderValue: 1,
          day,
          month,
          year,
        }
      );
      const {
        userExp,
        exp,
        carbonRemoved,
        wasteRemoved,
        waterSaved,
        userCarbonReduced,
        userWasteRemoved,
        userWaterSaved,
      } = res.data;
      navigation.navigate("Completion", {
        userExp,
        exp,
        carbonRemoved,
        wasteRemoved,
        waterSaved,
        userCarbonReduced,
        userWasteRemoved,
        userWaterSaved,
        isPathPage,
        sectionNumber,
        pathItem,
        pathNumber,
      });
      setIsCompleted(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SavedTaskContainer
      onPress={() =>
        navigation.navigate("Activities", {
          screen: "All Activities",
          params: {
            screen: "Activity",
            params: {
              item: task,
              imageURL: task.image,
              pathNumber,
              sectionNumber,
              destination: isPathPage ? "Path" : "HomeScreen",
              pathItem,
            },
          },
        })
      }
    >
      <TextContainer>
        <TaskTitle>{task.title}</TaskTitle>
        <TaskXP>+{task.exp} EXP</TaskXP>
      </TextContainer>
      <ImageContainer source={task.image} />
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
