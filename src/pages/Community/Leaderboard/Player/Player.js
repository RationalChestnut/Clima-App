import React from "react";
import { Image, StyleSheet } from "react-native";
import anonymousimage from "../../../../../assets/images/anonymousimage.jpeg";
import { RankSection } from "../Leaderboard.styling";
import {
  PlayerContainer,
  RankText,
  PlayerPersonalInfoContainer,
  UserNameText,
  PointText,
  LevelText,
} from "./Player.styles";

function Player() {
  return (
    <PlayerContainer>
      <RankSection>
        <RankText>4</RankText>
      </RankSection>

      <PlayerPersonalInfoContainer>
        <Image style={styles.image} source={anonymousimage} />
        <UserNameText>Alex Ensina</UserNameText>
      </PlayerPersonalInfoContainer>
      <PointText>42,123</PointText>
      <LevelText>9</LevelText>
    </PlayerContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    borderRadius: 40,
  },
});

export default Player;
