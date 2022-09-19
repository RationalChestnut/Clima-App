import styled from "styled-components/native";
import { View, Text } from "react-native";

export const LeaderBoardBar = styled(View)`
  width: 90%;
  background-color: ${(props) => props.theme.colors.highlightGreen};
  padding: ${(props) => props.theme.sizes.sm}px 5%;
  border-radius: 5px;
  flex-direction: row;
`;

export const Label = styled(Text)`
  color: white;
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const RankSection = styled(View)``;

export const UserSection = styled(View)`
  padding-left: 15%;
`;
export const PointsSection = styled(View)`
  padding-left: 25%;
`;
export const LevelSection = styled(View)`
  padding-left: 10%;
`;
