import styled from "styled-components/native";
import { View } from "react-native";

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

export const ListContainer = styled(View)`
  width: 90%;
  height: 320px;
`;
