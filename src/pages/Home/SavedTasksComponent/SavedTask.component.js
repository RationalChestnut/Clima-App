import React from "react";
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

function SavedTask({ title, xp, image, isCompleted }) {
  return (
    <SavedTaskContainer>
      <TextContainer>
        <TaskTitle>{title}</TaskTitle>
        <TaskXP>+{xp} EXP</TaskXP>
      </TextContainer>
      <ImageContainer source={image} />
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
