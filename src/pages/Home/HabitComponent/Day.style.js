import { Text, View } from "react-native";
import styled from "styled-components/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

export const DayContainer = styled(View)`
  align-items: center;
  justify-content: center;
  margin: ${hp("1%")}px ${wp("1.25%")}px;
  border: ${(props) => (props.active ? "1px solid #0fa958" : "none")};
  border-radius: 200px;
  padding: ${wp("2%")}px;
`;

export const DayText = styled(Text)``;

export const DayOuterCircle = styled(View)`
  border: 1px solid ${(props) => (props.failed ? "#ff2424" : "#0fa958")};
  width: ${hp("3.25%")}px;
  height: ${hp("3.25%")}px;
  border-radius: 400px;
  background-color: ${(props) =>
    props.completed ? "#0fa958" : props.failed ? "#ff2424" : "transparent"};
  margin-top: ${hp("1%")}px;
  align-items: center;
  justify-content: center;
`;

export const Check = styled(Ionicons).attrs({
  name: "checkmark",
  size: wp("5%"),
  color: "white",
})``;

export const X = styled(AntDesign).attrs({ name: "close", size: wp("5%"), color: "white" })``;
