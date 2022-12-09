import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

export const DisplayActivityDescriptionContainer = styled(TouchableOpacity)`
  flex: 1;
  padding: 0px ${wp("3.5%")}px;
  margin: ${hp("1%")}px 0px;
`;

export const ActivityImage = styled(ImageBackground)`
  height: ${hp("20%")}px;
  width: 100%;
  border-radius: ${wp("4%")}px;
  overflow: hidden;
  align-self: center;
`;

export const DescriptionContainer = styled(View)`
  flex-direction: row;
  margin-top: ${hp("1%")}px;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: ${RFPercentage(3)}px;
  width: ${wp("70%")}px;
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const ExpText = styled(Text)`
  margin-left: auto;
  color: ${(props) => props.theme.colors.highlightGreen};
  font-size: ${RFPercentage(2.5)}px;
`;
