import React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components/native";

const Container = styled(View)`
  flex: 1;
  width: 200px;
  height: 165px;
  background-color: ${(props) => props.theme.colors.defaultGreen};
  border-radius: ${(props) => props.theme.sizes.sm}px;
`;

const TaskImageContainer = styled(View)`
  flex: 1;
  width: 100%;
  align-items: stretch;
`;

const TaskImage = styled(Image)`
  flex: 1;
  border-top-left-radius: ${(props) => props.theme.sizes.sm}px;
  border-top-right-radius: ${(props) => props.theme.sizes.sm}px;
  resize-mode: cover;
`;

const TextContainer = styled(View)`
  margin: ${(props) => props.theme.sizes.sm}px;
  align-items: center;
`;

const Title = styled(Text)`
  color: white;
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const ExpText = styled(Text)`
  color: white;
  font-family: ${(props) => props.theme.fonts.monospace};
  font-size: ${(props) => props.theme.fontSizes.caption};
  margin-top: ${(props) => props.theme.sizes.xs}px;
`;

function TaskCard({ task = {} }) {
  const { title, exp, image } = task;

  return (
    <Container>
      <TaskImageContainer>
        <TaskImage source={{ uri: image }} />
      </TaskImageContainer>
      <TextContainer>
        <Title>{title}</Title>
        <ExpText>+ {exp} EXP</ExpText>
      </TextContainer>
    </Container>
  );
}

export default TaskCard;
