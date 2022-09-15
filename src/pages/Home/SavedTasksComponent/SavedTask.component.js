import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
<<<<<<< HEAD
=======
import "firebase/storage";
// import { getDownloadURL, ref } from "firebase/storage";
>>>>>>> 8052843c554bb73dceac9341fe1b30172ee0ed1f
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
      const res = await axios.post(`http://localhost:5000/user/completeTask/${user}/${task.id}`);
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
