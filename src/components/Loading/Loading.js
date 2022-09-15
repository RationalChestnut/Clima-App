import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator, View } from "react-native";

const Container = styled(View)`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.gray};
  align-items: center;
  justify-content: center;
`;

function Loading({ color, style }) {
  return (
    <Container style={style}>
      <ActivityIndicator color={color} size="large" />
    </Container>
  );
}

export default Loading;
