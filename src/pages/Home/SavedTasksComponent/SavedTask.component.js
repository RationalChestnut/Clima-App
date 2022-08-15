import axios from "axios";
import React, { useEffect, useState } from "react";
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

function SavedTask({ task }) {
  const [title, setTitle] = useState("");
  const [EXP, setEXP] = useState(0);
  const [image, setImage] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const taskData = async () => {
    try {
      // console.log(task);
      const res = await axios.get(`http://localhost:5000/tasks/getTask/${task}`);
      const thisTaskData = res.data;
      setTitle(thisTaskData.title);
      setEXP(thisTaskData.exp);
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
      <ImageContainer source={image || null} />
      <CheckMark>
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
