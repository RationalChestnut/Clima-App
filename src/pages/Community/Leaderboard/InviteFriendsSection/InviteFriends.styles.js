import styled from "styled-components/native";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Circle = styled(View)`
  border-radius: 1000px;
  background-color: ${(props) => props.theme.colors.highlightGreen};
  position: absolute;
  z-index: -100;
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").width}px;
  bottom: -${hp("27.5%")}px;
`;

export const InviteFriendsContainer = styled(View)`
  margin-bottom: ${hp("2%")}px;
`;

export const InviteFriendsText = styled(Text)`
  color: white;
  text-align: center;
  font-size: ${RFPercentage(3)}px;
`;

export const ButtonView = styled(TouchableOpacity)`
  width: ${wp("50%")}px;
  height: ${hp("5%")}px;
  background-color: white;
  margin-top: ${hp("1.5%")}px;
  align-self: center;
  border-radius: ${wp("2.5%")}px;
  justify-content: center;
  align-items: center;
`;

export const ShareText = styled(Text)`
  color: ${(props) => props.theme.colors.highlightGreen};
  font-size: ${RFPercentage(2.75)}px;
`;
