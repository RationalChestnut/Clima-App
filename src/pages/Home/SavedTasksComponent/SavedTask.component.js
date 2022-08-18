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

function SavedTask({ task }) {
  const [title, setTitle] = useState("");
  const [EXP, setEXP] = useState(0);
  const [image, setImage] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const { user } = useContext(AuthenticationContext);
  const taskData = async () => {
    try {
      // console.log(task);
      const res = await axios.get(`http://localhost:5000/tasks/getTask/${task}`);
      const thisTaskData = res.data;
      setTitle(thisTaskData.title);
      setEXP(thisTaskData.exp);
      const imageRef = ref(storage, `/${thisTaskData.image}`);
      const validImage = await getDownloadURL(imageRef);
      setImage(validImage);
      // Get image Id and then get image from database
    } catch (err) {
      console.log(err);
    }
  };

  const completeTask = async () => {
    try {
      const res = await axios.post(`http://localhost:5000/user/completeTask/${user}/${task}`);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    taskData();
  }, []);

  return (
    <SavedTaskContainer>
      <TextContainer>
        <TaskTitle>{title}</TaskTitle>
        <TaskXP>+{EXP} EXP</TaskXP>
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
