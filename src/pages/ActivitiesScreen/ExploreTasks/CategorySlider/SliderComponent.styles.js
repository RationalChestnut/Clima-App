import { ImageBackground, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

export const SliderTouchable = styled(TouchableOpacity)``;

export const SliderComponentContainer = styled(ImageBackground)`
  height: ${hp("17.5%")}px;
  width: ${wp("70%")}px;
  margin-right: ${(props) => props.theme.sizes.md}px;
  border-radius: ${wp("4%")}px;
  overflow: hidden;
`;

export const TitleText = styled(Text)`
  color: white;
  font-size: ${RFPercentage(3.25)}px;
  padding-left: ${wp("4%")}px;
  padding-top: ${hp("3%")}px;
`;
