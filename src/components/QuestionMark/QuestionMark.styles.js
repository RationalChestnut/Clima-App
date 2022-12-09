import { View } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

export const QuestionMarkContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.lightGray};
  align-items: center;
  justify-content: center;
  border-radius: 200px;
  margin-left: ${wp("2%")}px;
  padding: ${hp("0.25%")}px;
`;

export const QuestionMark = styled(AntDesign).attrs({
  name: "question",
  size: RFPercentage(2.33),
  color: "black",
})``;
