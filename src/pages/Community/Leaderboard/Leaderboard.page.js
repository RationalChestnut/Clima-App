import React from "react";
import {
  LeaderboardPageContainer,
  TopPlayersContainer,
  LeaderboardContainer,
  LeaderBoardBar,
  Label,
  Section,
} from "./Leaderboard.styling";
import TopPlayerCard from "./TopPlayerCard/TopPlayerCard";

function LeaderboardPage() {
  return (
    <LeaderboardPageContainer>
      <TopPlayersContainer>
        <TopPlayerCard />
        <TopPlayerCard style={[{ transform: [{ scale: 1.1 }] }]} />
        <TopPlayerCard />
      </TopPlayersContainer>
      <LeaderboardContainer>
        <LeaderBoardBar>
          <Section>
            <Label>Rank</Label>
            <Label>User</Label>
          </Section>
          <Section>
            <Label>Points</Label>
            <Label>Level</Label>
          </Section>
        </LeaderBoardBar>
      </LeaderboardContainer>
    </LeaderboardPageContainer>
  );
}

export default LeaderboardPage;
