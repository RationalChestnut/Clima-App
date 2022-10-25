import { Image, ImageBackground, Text, View } from "react-native";
import styled from "styled-components/native";
import { TextInput } from "react-native-paper";

export const PetScreenContainer = styled(View)`
  flex: 1;
  align-items: center;
  padding-bottom: 35px;
  background-color: white;
`;

export const PetInfoContainer = styled(View)`
  width: 100%;
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
  margin-top: 10px;
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

export const PetImage = styled(View)`
  height: 525px;
  align-items: center;
  justify-content: center;
  flex: 6;
  width: 95%;
`;

export const Pet = styled(Image)`
  height: 400px;
  width: 400px;
`;

export const NameInput = styled(TextInput).attrs({
  underlineColor: "transparent",
  activeOutlineColor: "none",
  activeUnderlineColor: "transparent",
})`
  height: 40px;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-family: ${(props) => props.theme.fonts.heading};
  background-color: transparent;
`;

export const PetType = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-family: ${(props) => props.theme.fonts.heading};
  background-color: transparent;
  margin-left: -8px;
`;

export const FlatListContainer = styled(View)``;

export const TaskContainer = styled(View)`
  width: 100%;
  padding: 0px 10px;
  margin-top: ${(props) => props.theme.sizes.lg}px;
`;

export const PetNameContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
