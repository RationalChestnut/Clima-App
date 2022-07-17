import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import styled from "styled-components/native";
import { TextInput } from "react-native-paper";

export const PetScreenContainer = styled(ScrollView).attrs({
  contentContainerStyle: { alignItems: "center" },
})`
  flex: 1;
`;

export const InfoContainer = styled(View)`
  width: 100%;
  padding: 4px 10px;
  align-items: center;
  flex-direction: row;
`;

export const LevelText = styled(Text)`
  color: ${(props) => props.theme.colors.highlightGreen};
  font-size: 16px;
`;

export const BarContainer = styled(View)`
  width: 80%;
  margin-top: 5px;
`;

export const Green = styled(Text)`
  color: ${(props) => props.theme.colors.highlightGreen}; ;
`;

export const StatusText = styled(Text)`
  font-size: 16px;
  margin-left: auto;
`;

export const MoodText = styled(Text)`
  color: ${(props) => props.theme.colors.orange};
  font-size: 16px;
`;

export const Mood = styled(Text)`
  color: ${(props) => props.color};
  font-size: 16px;
  margin-left: auto;
`;

export const PetImage = styled(ImageBackground).attrs({ resizeMode: "cover" })`
  width: 100%;
  height: 300px;
  opacity: 1;
  align-items: center;
  justify-content: center;
`;

export const Pet = styled(Image)`
  margin-top: 80px;
`;

export const NameInput = styled(TextInput).attrs({
  underlineColor: "transparent",
  activeOutlineColor: "none",
  activeUnderlineColor: "transparent",
})`
  width: 80%;
  height: 40px;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-family: ${(props) => props.theme.fonts.heading};
  background-color: transparent;
  margin-top: 5px;
  margin-bottom: -7px;
`;

export const FlatListContainer = styled(View)``;

export const TaskContainer = styled(View)`
  width: 100%;
  padding: 0px 10px;
  margin-top: ${(props) => props.theme.sizes.lg}px;
`;