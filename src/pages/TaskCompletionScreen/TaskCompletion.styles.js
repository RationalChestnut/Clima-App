import { Text, View, Image, ScrollView } from "react-native";
import styled from "styled-components/native";
import ConfettiCannon from "react-native-confetti-cannon";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

export const TaskCompletionScreenContainer = styled(ScrollView)`
  flex: 1;
  background-color: white;
`;

export const CompletionText = styled(Text)`
  color: ${(props) => props.theme.colors.highlightGreen};
  font-size: ${RFPercentage(3)}px;
  text-align: center;
  margin-top: ${hp("2%")}px;
`;

export const Cannon = styled(ConfettiCannon).attrs({
  count: 100,
  autoStart: true,
  explosionSpeed: 1500,
  fallSpeed: 4000,
  fadeOut: true,
})``;

export const LifeTimeStats = styled(Text)`
  font-size: ${RFPercentage(4)}px;
  margin-bottom: ${hp("1%")}px;
  text-align: center;
`;

export const Container = styled(View)`
  padding: ${hp("2%")}px;
`;

export const StatContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-top: ${hp("1%")}px;
  justify-content: center;
`;

export const StatText = styled(Text)`
  font-size: ${RFPercentage(2.5)}px;
  text-align: center;
`;

export const Label = styled(Text)`
  color: ${(props) => props.theme.colors.defaultGreen};
  font-weight: bold;
  font-size: ${RFPercentage(2.5)}px;
  text-align: center;
`;

export const ValueNumber = styled(Text)`
  color: ${(props) => props.theme.colors.defaultGreen};
  font-weight: bold;
  margin-left: ${wp("2%")}px;
  margin-right: ${wp("2%")}px;
  font-size: ${RFPercentage(2.5)}px;
  text-align: center;
`;

export const AddText = styled(Text)`
  font-size: ${RFPercentage(2.5)}px;
  color: grey;
`;

export const UpperSectionContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${hp("2%")}px ${wp("4%")}px;
  padding-bottom: 0px;
`;

export const TitleText = styled(Text)`
  font-size: ${RFPercentage(4)}px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.highlightGreen};
`;

export const PetContainer = styled(View)`
  width: 100%;
  margin-bottom: 0px;
  margin-top: ${hp("2%")}px;
`;

export const PetImage = styled(View)`
  height: ${hp("40%")}px;
  width: 100%;
`;

export const Pet = styled(Image)`
  width: 95%;
  height: 100%;
  margin: 0 auto;
`;
