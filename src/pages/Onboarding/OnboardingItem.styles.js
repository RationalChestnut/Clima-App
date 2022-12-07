import { Text, View, Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

export const OnboardingItemContainer = styled(View)`
  align-items: center;
  padding: ${hp("3%")}px ${wp("4%")}px;
`;

export const SubTitleText = styled(Text)`
  color: white;
  font-size: ${RFPercentage(3)}px;
  font-family: ${(props) => props.theme.fonts.heading};
  margin-top: ${hp("2%")}px;
`;

export const TitleText = styled(Text)`
  color: white;
  font-size: ${(props) => (props.main ? RFPercentage(8) : RFPercentage(5))}px;
  font-family: ${(props) => props.theme.fonts.heading};
  text-align: center;
`;

export const DescriptionText = styled(Text)`
  text-align: center;
  color: white;
  font-size: ${RFPercentage(2.8)}px;
  line-height: ${RFPercentage(5)}px;
  margin-top: ${hp("3.5%")}px;
`;

export const OnboardImage = styled(Image).attrs({ resizeMode: "contain" })`
  width: 80%;
  max-height: ${hp("40%")}px;
  margin-top: ${hp("2.5%")}px;
`;

export const BeginButton = styled(TouchableOpacity)`
  margin-top: ${hp("3%")}px;
  padding: ${hp("1.5%")}px ${wp("5%")}px;
  border: 2px solid white;
  border-radius: 1000px;
`;

export const BeginText = styled(Text)`
  color: white;
  font-size: ${RFPercentage(5)}px;
  font-family: ${(props) => props.theme.fonts.heading};
`;
