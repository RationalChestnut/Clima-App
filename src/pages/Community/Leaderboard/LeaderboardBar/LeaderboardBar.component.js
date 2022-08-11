import React from "react";
import {
  LeaderBoardBar,
  RankSection,
  Label,
  UserSection,
  PointsSection,
  LevelSection,
} from "./LeaderboardBar.styles";

function LeaderboardBarComponent() {
  return (
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
  );
}

export default LeaderboardBarComponent;
