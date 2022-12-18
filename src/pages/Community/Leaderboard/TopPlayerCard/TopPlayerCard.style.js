import { View, Image, Text } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

export const CardContainer = styled(View)`
  padding: ${hp("1.5%")}px ${wp("1.5%")}px;
  align-items: center;
  box-shadow: 0px 3px 4px #bebebe;
  background-color: white;
  width: 25%;
  border-radius: ${wp("2%")}px;
  position: relative;
`;

export const ProfilePhoto = styled(Image)``;

export const PlayerName = styled(Text).attrs({ numberOfLines: 2 })`
  color: ${(props) => props.theme.colors.highlightGreen};
  font-size: ${RFPercentage(2.25)}px;
  font-family: ${(props) => props.theme.fonts.heading};
  margin-top: ${hp("0.5%")}px;
  text-align: center;
`;

export const Points = styled(Text)`
  color: #aeaeae;
  font-size: ${RFPercentage(2)}px;
  font-family: ${(props) => props.theme.fonts.body};
  margin-top: ${hp("0.5%")}px;
`;

export const Level = styled(Text)`
  color: black;
  font-size: ${RFPercentage(2)}px;
  font-family: ${(props) => props.theme.fonts.body};
  margin-top: ${hp("0.5%")}px;
`;

export const DefaultImage = styled(Ionicons).attrs({
  name: "person-outline",
  color: "#aeaeae",
})``;

export const Rank = styled(Text)``;

export const RankBackground = styled(View)`
  position: absolute;
  top: -${hp("1%")}px;
  right: -${wp("1.25%")}px;
  justify-content: center;
  align-items: center;
  border-radius: 400px;
`;
