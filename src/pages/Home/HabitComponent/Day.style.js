import { Text, View } from "react-native";
import styled from "styled-components/native";

export const DayContainer = styled(View)`
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.theme.sizes.sm}px 5px;
  shadow-color: black;
  shadow-radius: 2px;
  border: ${(props) => (props.active ? "1px solid #0fa958" : "none")};
  border-radius: 200px;
  padding: 8px;
`;

export const DayText = styled(Text)``;

export const DayOuterCircle = styled(View)`
  border: 1px solid #0fa958;
  width: 20px;
  height: 20px;
  border-radius: 400px;
  background-color: ${(props) => (props.completed ? "#0fa958" : "transparent")};
  margin-top: ${(props) => props.theme.sizes.sm}px;
`;
