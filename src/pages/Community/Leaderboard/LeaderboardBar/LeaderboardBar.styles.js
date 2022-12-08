import styled from "styled-components/native";
import { View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const LeaderBoardBar = styled(View)`
  width: 90%;
  background-color: ${(props) => props.theme.colors.highlightGreen};
  padding: ${hp("1.25%")}px ${wp("4%")}px;
  border-radius: ${wp("1.5%")}px;
  flex-direction: row;
`;

export const Label = styled(Text)`
  color: white;
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const RankSection = styled(View)``;

export const UserSection = styled(View)`
  padding-left: ${wp("13.5%")}px;
`;
export const PointsSection = styled(View)`
  padding-left: ${wp("19%")}px;
`;
export const LevelSection = styled(View)`
  padding-left: ${wp("10%")}px;
`;
