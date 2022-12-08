import styled from "styled-components/native";
import { View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export const LeaderboardPageContainer = styled(View)`
  flex: 1;
  padding: ${hp("2%")}px 0px;
  background-color: white;
`;

export const TopPlayersContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: ${hp("2%")}px;
`;

export const LeaderboardContainer = styled(View)`
  flex: 1;
  margin-top: ${hp("4%")}px;
  align-items: center;
`;

export const ListContainer = styled(View)`
  width: 90%;
  height: ${hp("32.5%")}px;
  margin-top: ${hp("1%")}px;
`;
