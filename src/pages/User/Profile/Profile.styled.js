import { View, Text, FlatList, ScrollView } from "react-native";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

export const ProfilePageContainer = styled(View)`
  flex: 1;
  padding: ${hp("0%")}px ${wp("2%")}px;
  background-color: white;
`;

export const ProfilePageScrollView = styled(ScrollView)``;

export const StatsTitle = styled(Text)`
  font-size: ${RFPercentage(2.5)}px;
  color: ${(props) => props.theme.colors.defaultGreen};
  font-weight: 400;
  margin-top: ${hp("2%")}px;
  text-align: center;
`;

export const StatsListContainer = styled(View)`
  flex-direction: row;
`;

export const StatsList = styled(FlatList)`
  flex: 1;
  padding-bottom: ${hp("2%")}px;
  margin-top: ${hp("1%")}px;
`;

export const Separator = styled(View)`
  margin: ${hp("1%")}px ${wp("1%")}px;
`;

export const CalendarTitle = styled(Text)`
  text-align: center;
  margin-top: ${hp("2%")}px;
  margin-bottom: ${hp("1%")}px;
  color: ${(props) => props.theme.colors.defaultGreen};
  font-size: ${RFPercentage(2.75)}px;
  font-family: ${(props) => props.theme.fonts.heading};
`;
