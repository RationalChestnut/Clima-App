import { ScrollView, View, Text, ImageBackground, FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

export const ExploreTasksPage = styled(ScrollView)`
  flex: 1;
  background-color: white;
`;

export const ExploreTasksPageContainer = styled(View)`
  flex: 1;
  padding: 0px ${wp("4%")}px;
`;

export const TextContainer = styled(View)`
  margin: ${hp("4%")}px 0px;
`;

export const Title = styled(Text)`
  font-size: ${RFPercentage(4)}px;
`;

export const Description = styled(Text)`
  font-size: ${RFPercentage(2.25)}px;
  margin-top: ${hp("1.5%")}px;
`;

export const ActionTitle = styled(Text)`
  font-size: ${RFPercentage(3)}px;
`;

export const Touchable = styled(TouchableOpacity)``;

export const LargeBannerImage = styled(ImageBackground).attrs({
  resizeMode: "cover",
  imageStyle: { borderRadius: wp("4%") },
})`
  width: 100%;
  height: ${hp("25%")}px;
  margin-top: ${hp("2%")}px;
  margin-bottom: ${hp("4%")}px;
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ["rgba(0,0,0,0.4)", "transparent"],
})`
  flex: 1;
  position: absolute;
  left: 0
  right: 0;
  top: 0
  height: 100%;
  border-radius: ${wp("3%")}px;
`;

export const MainCardTextContainer = styled(View)`
  padding: ${hp("2%")}px ${wp("4%")}px;
  position: relative;
`;

export const MainCardTitle = styled(Text)`
  font-size: ${RFPercentage(3.5)}px;
  color: white;
`;

export const MainCardTitleDescription = styled(Text)`
  font-size: ${RFPercentage(2.5)}px;
  color: white;
  margin-top: ${hp("1%")}px;
`;

export const Slider = styled(FlatList).attrs({ horizontal: true })`
  flex: 1;
  margin-top: ${hp("2%")}px;
  border-radius: ${wp("4%")}px;
`;
