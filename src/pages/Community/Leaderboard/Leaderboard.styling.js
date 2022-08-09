import styled from "styled-components/native";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";

export const LeaderboardPageContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.sizes.md}px 0px;
`;

export const TopPlayersContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: ${(props) => props.theme.sizes.md}px;
`;

export const LeaderboardContainer = styled(View)`
  flex: 1;
  margin-top: ${(props) => props.theme.sizes.lg}px;
  align-items: center;
`;

export const LeaderBoardBar = styled(View)`
  width: 90%;
  background-color: #5479e1;
  padding: ${(props) => props.theme.sizes.sm}px 5%;
  border-radius: 5px;
  flex-direction: row;
`;

export const Label = styled(Text)`
  color: white;
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const RankSection = styled(View)``;
export const UserSection = styled(View)`
  padding-left: 15%;
`;
export const PointsSection = styled(View)`
  padding-left: 25%;
`;
export const LevelSection = styled(View)`
  padding-left: 10%;
`;

export const ListContainer = styled(View)`
  width: 90%;
  height: 320px;
`;

export const Circle = styled(View)`
  border-radius: 1000px;
  background-color: #5479e1;
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
  color: #5479e1;
  font-size: 20px;
`;
