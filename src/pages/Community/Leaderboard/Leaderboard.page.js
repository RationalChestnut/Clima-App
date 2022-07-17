import React from "react";
import { FlatList } from "react-native";
import {
  LeaderboardPageContainer,
  TopPlayersContainer,
  LeaderboardContainer,
  LeaderBoardBar,
  Label,
  RankSection,
  UserSection,
  PointsSection,
  LevelSection,
  ListContainer,
  Circle,
  InviteFriendsContainer,
  InviteFriendsText,
  ButtonView,
  ShareText,
} from "./Leaderboard.styling";
import Player from "./Player/Player";
import TopPlayerCard from "./TopPlayerCard/TopPlayerCard";

function LeaderboardPage({ users = [1, 2, 3, 4, 5] }) {
  return (
    <LeaderboardPageContainer>
      <TopPlayersContainer>
        <TopPlayerCard rank={2} />
        <TopPlayerCard rank={1} />
        <TopPlayerCard rank={3} />
      </TopPlayersContainer>
      <LeaderboardContainer>
        <LeaderBoardBar>
          <RankSection>
            <Label>Rank</Label>
          </RankSection>
          <UserSection>
            <Label>User</Label>
          </UserSection>
          <PointsSection>
            <Label>Points</Label>
          </PointsSection>
          <LevelSection>
            <Label>Level</Label>
          </LevelSection>
        </LeaderBoardBar>
        <ListContainer>
          <FlatList data={users} renderItem={Player} key={(item) => item} />
        </ListContainer>
      </LeaderboardContainer>
      <Circle>
        <InviteFriendsContainer>
          <InviteFriendsText>Add More Friends!</InviteFriendsText>
          <ButtonView>
            <ShareText>Share!</ShareText>
          </ButtonView>
        </InviteFriendsContainer>
      </Circle>
    </LeaderboardPageContainer>
  );
}

export default LeaderboardPage;
