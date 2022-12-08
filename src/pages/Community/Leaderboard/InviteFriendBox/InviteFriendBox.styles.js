import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

export const InviteFriendBoxContainer = styled(View)`
  margin-top: ${hp("2%")}px;
  width: 90%;
  height: ${hp("27.5%")}px;
  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: ${wp("4%")}px;
  padding: ${hp("2%")}px ${wp("2%")}px;
`;

export const InviteFriendsText = styled(Text)`
  font-size: ${RFPercentage(3.5)}px;
  text-align: center;
`;

export const SubTitle = styled(Text)`
  text-align: center;
  margin-top: ${hp("2.5%")}px;
  font-size: ${RFPercentage(2.25)}px;
`;

export const InviteNowButton = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.highlightGreen};
  width: ${wp("50%")}px;
  align-self: center;
  padding: ${hp("1.5%")}px;
  border-radius: ${wp("3%")}px;
  margin-top: ${hp("4%")}px;
`;

export const InviteText = styled(Text)`
  color: white;
  text-align: center;
  font-size: ${RFPercentage(3)}px;
`;
