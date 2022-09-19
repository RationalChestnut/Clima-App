import styled from "styled-components/native";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";

export const Circle = styled(View)`
  border-radius: 1000px;
  background-color: ${(props) => props.theme.colors.highlightGreen};
  position: absolute;
  z-index: -100;
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").width}px;
  bottom: -35%;
`;

export const InviteFriendsContainer = styled(View)`
  margin-bottom: 10px;
`;

export const InviteFriendsText = styled(Text)`
  color: white;
  text-align: center;
  margin-top: 10%;
  font-size: 24px;
`;

export const ButtonView = styled(TouchableOpacity)`
  width: 150px;
  height: 40px;
  background-color: white;
  margin-top: 3%;
  align-self: center;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ShareText = styled(Text)`
  color: ${(props) => props.theme.colors.highlightGreen};
  font-size: 20px;
`;
