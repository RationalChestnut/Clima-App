import { View, Image, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const SavedTaskContainer = styled(TouchableOpacity)`
  flex-direction: row;
  height: 100px;
  border-radius: 20px;
  padding: 10px;
  background-color: #cbecff;
  margin-top: 10px;
  position: relative;
`;

export const ImageContainer = styled(Image).attrs((props) => ({
  source: props.source,
}))`
  width: 40%;
  height: 100%;
  margin-left: auto;
  border-radius: 10px;
`;

export const TextContainer = styled(View)``;

export const TaskTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family" ${(props) => props.theme.fonts.heading};
  color: #485E6B;
`;

export const TaskXP = styled(Text)`
  margin-top: auto;
  padding-left: 5px;
  font-size: ${(props) => props.theme.fontSizes.body};
  color: green;
`;

export const CheckMark = styled(TouchableOpacity)`
  position: absolute;
  z-index: 999;
  border-radius: 400px;
  height: 40px;
  width: 40px;
  background-color: white;
  border: 3px solid ${(props) => props.theme.colors.highlightGreen};
  right: 20px;
  align-self: center;
`;

export const InnerCheckMark = styled(View)`
  background-color: ${(props) => props.theme.colors.highlightGreen};
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Check = styled(Ionicons).attrs({ name: "checkmark", size: 24, color: "white" })``;
