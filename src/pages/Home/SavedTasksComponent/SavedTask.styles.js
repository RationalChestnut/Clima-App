import { View, Image, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

export const SavedTaskContainer = styled(TouchableOpacity)`
  flex-direction: row;
  height: 100px;
  border-radius: ${wp("5%")}px;
  padding: ${wp("3%")}px;
  background-color: #cbecff;
  margin-top: ${hp("1.5%")}px;
  position: relative;
`;

export const ImageContainer = styled(Image).attrs((props) => ({
  source: props.source,
}))`
  width: 40%;
  height: 100%;
  margin-left: auto;
  border-radius: ${wp("2%")}px;
`;

export const TextContainer = styled(View)`
  flex: 1;
`;

export const TaskTitle = styled(Text)`
  font-size: ${RFPercentage(2.75)}px;
  color: #485e6b;
`;

export const TaskXP = styled(Text)`
  margin-top: auto;
  padding-left: ${wp("1%")}px;
  font-size: ${RFPercentage(2.25)}px;
  color: green;
`;

export const CheckMark = styled(TouchableOpacity)`
  position: absolute;
  z-index: 999;
  border-radius: 4000px;
  height: 40px;
  width: 40px;
  background-color: white;
  border: 3px solid ${(props) => props.theme.colors.highlightGreen};
  right: ${wp("5%")}px;
  align-self: center;
`;

export const InnerCheckMark = styled(View)`
  background-color: ${(props) => props.theme.colors.highlightGreen};
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 4000px;
`;

export const Check = styled(Ionicons).attrs({ name: "checkmark", size: 24, color: "white" })``;
