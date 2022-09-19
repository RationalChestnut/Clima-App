import { View, Image, Text } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export const CardContainer = styled(View)`
  padding: 12px;
  align-items: center;
  box-shadow: 0px 3px 4px #bebebe;
  background-color: white;
  height: 150px;
  width: 25%;
  border-radius: 10px;
  position: relative;
`;

export const TopPlayerCardContainer = styled(View)`
  padding: 12px;
  align-items: center;
  box-shadow: 0px 3px 4px #bebebe;
  background-color: white;
  height: 200px;
  width: 33%;
  border-radius: 10px;
  position: relative;
`;

export const ProfilePhoto = styled(Image)``;

export const PlayerName = styled(Text)`
  color: ${(props) => props.theme.colors.highlightGreen};
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.heading};
  margin-top: ${(props) => props.theme.sizes.xs}px;
  text-align: center;
`;

export const Points = styled(Text)`
  color: #aeaeae;
  font-size: 12px;
  font-family: ${(props) => props.theme.fonts.body};
  margin-top: ${(props) => props.theme.sizes.xs}px;
`;

export const Level = styled(Text)`
  color: black;
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.body};
  margin-top: ${(props) => props.theme.sizes.xs}px;
`;

export const DefaultImage = styled(Ionicons).attrs({
  name: "person-outline",
  size: 36,
  color: "#aeaeae",
})``;

export const Rank = styled(Text)``;

export const RankBackground = styled(View)`
  position: absolute;
  top: -5px;
  right: -5px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
`;
