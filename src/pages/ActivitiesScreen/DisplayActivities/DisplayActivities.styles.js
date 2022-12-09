import { FlatList, Text, View } from "react-native";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

export const DisplayActivitiesPage = styled(View)``;

export const TopBar = styled(View)`
  padding: ${hp("2%")}px ${wp("4%")}px;
  padding-bottom: ${hp("1%")}px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: ${RFPercentage(2.75)}px;
  margin-left: ${wp("3%")}px;
`;

export const ActivitiesList = styled(FlatList)`
  flex: 1;
`;
