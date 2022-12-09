import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

export const ActivitiesPageContainer = styled(View)`
  width: 100%;
  padding: ${hp("2%")}px ${wp("3%")}px;
`;

export const ProgressText = styled(Text)`
  font-size: ${RFPercentage(3)}px;
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const BarContainer = styled(View)`
  width: 100%;
  margin-top: ${hp("1%")}px;
`;

export const TasksContainer = styled(FlatList)`
  padding-bottom: ${hp("5%")}px;
`;
