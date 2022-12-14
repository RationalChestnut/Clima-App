import { Image, KeyboardAvoidingView, Text, View } from "react-native";
import styled from "styled-components/native";
import { TextInput } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

export const PetScreenContainer = styled(View)`
  flex: 1;
  align-items: center;
  padding-bottom: ${hp("4%")}px;
  background-color: white;
`;

export const PetInfoContainer = styled(View)`
  width: 100%;
`;

export const InfoContainer = styled(View)`
  width: 100%;
  padding: ${wp("1%")}px ${wp("5%")}px;
  align-items: center;
  flex-direction: row;
`;

export const LevelText = styled(Text)`
  color: ${(props) => props.theme.colors.highlightGreen};
  font-size: ${RFPercentage(2.5)}px;
`;

export const BarContainer = styled(View)`
  width: 90%;
  margin: 0px auto;
  margin-top: ${hp("2%")}px;
`;

export const Green = styled(Text)`
  color: ${(props) => props.theme.colors.highlightGreen};
`;

export const StatusText = styled(Text)`
  font-size: ${RFPercentage(2.5)}px;
  margin-left: auto;
`;

export const MoodText = styled(Text)`
  color: ${(props) => props.theme.colors.orange};
  font-size: ${RFPercentage(2.5)}px;
`;

export const Mood = styled(Text)`
  color: ${(props) => props.color};
  font-size: ${RFPercentage(2.5)}px;
  margin-left: auto;
`;

export const PetImage = styled(View)`
  align-items: center;
  justify-content: center;
  flex: 1;
  max-width: 100%;
`;

export const KeyboardAvoidingContainer = styled(KeyboardAvoidingView)`
  width: 100%;
  flex: 1;
`;

export const Pet = styled(Image)`
  flex: 1;
  max-width: 90%;
`;

export const NameInput = styled(TextInput).attrs({
  underlineColor: "transparent",
  activeOutlineColor: "none",
  activeUnderlineColor: "transparent",
})`
  height: ${hp("4%")}px;
  text-align: center;
  font-size: ${RFPercentage(3)}px;
  font-family: ${(props) => props.theme.fonts.heading};
  background-color: transparent;
`;

export const PetNameContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
`;
