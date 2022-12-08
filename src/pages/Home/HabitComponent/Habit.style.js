import styled from "styled-components/native";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

export const HabitsContainer = styled(View)`
  align-items: center;
  margin-bottom: ${hp("2%")}px;
`;

export const UpperHabitBar = styled(View)`
  align-items: center;
  flex-direction: row;
`;

export const TasksTitle = styled(Text)`
  font-size: ${RFPercentage(3)}px;
  font-family: ${(props) => props.theme.fonts.heading};
  padding-bottom: ${hp("1%")}px;
`;

export const HabitBar = styled(View)`
  width: 80%;
  flex-direction: row;
  justify-content: center;
`;

export const ProgressHabitText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${RFPercentage(2.2)}px;
`;

export const AddActivityIcon = styled(Ionicons).attrs({
  name: "add-circle-sharp",
  size: wp("10%"),
  color: "#0FA958",
})`
  position: absolute;
  top: ${hp("-0.5%")}px;
  right: ${wp("2%")}px;
`;
