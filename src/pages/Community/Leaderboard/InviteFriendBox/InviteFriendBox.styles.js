import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

export const InviteFriendBoxContainer = styled(View)`
  margin-top: 12px;
  width: 90%;
  height: 200px;
  background-color: ${(props) => props.theme.colors.lightGrey};
  border-radius: 20px;
  padding: 18px;
`;

export const InviteFriendsText = styled(Text)`
  font-size: 26px;
  text-align: center;
`;

export const SubTitle = styled(Text)`
  text-align: center;
  margin-top: 12px;
  font-size: 18px;
`;

export const InviteNowButton = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.highlightGreen};
  width: 200px;
  align-self: center;
  padding: 12px;
  border-radius: 12px;
  margin-top: 30px;
`;

export const InviteText = styled(Text)`
  color: white;
  text-align: center;
  font-size: 22px;
`;
