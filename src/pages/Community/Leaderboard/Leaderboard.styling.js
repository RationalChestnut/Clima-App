import styled from "styled-components/native";
import { View, Text } from "react-native";

export const LeaderboardPageContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.sizes.sm}px 0px;
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
  padding: ${(props) => props.theme.sizes.sm}px 0px;
  border-radius: 5px;
  justify-content: space-between;
  flex-direction: row;
`;

export const Label = styled(Text)`
  color: white;
  font-family: ${(props) => props.theme.fonts.heading};
  padding-left: ${(props) => props.theme.sizes.lg}px;
`;

export const Section = styled(View)`
  flex-direction: row;
  flex: 1;
`;
