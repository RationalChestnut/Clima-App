import styled from "styled-components/native";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const HabitsContainer = styled(View)`
  align-items: center;
  margin-bottom: ${(props) => props.theme.sizes.md}px;
`;

export const UpperHabitBar = styled(View)`
  align-items: center;
  flex-direction: row;
`;

export const TasksTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-family: ${(props) => props.theme.fonts.heading};
  padding-bottom: ${(props) => props.theme.sizes.md}px;
`;

export const HabitText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const HabitBar = styled(View)`
  width: 80%;
  flex-direction: row;
  justify-content: center;
`;

export const ProgressHabitText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const AddActivityIcon = styled(Ionicons).attrs({
  name: "add-circle-sharp",
  size: 32,
  color: "#0FA958",
})`
  position: absolute;
  top: -1px;
  right: 0px;
`;
