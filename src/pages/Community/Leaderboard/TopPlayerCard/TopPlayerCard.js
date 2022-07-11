import React from "react";
import { StyleSheet } from "react-native";
import {
  CardContainer,
  PlayerName,
  Points,
  Level,
  DefaultImage,
  Rank,
  RankBackground,
} from "./TopPlayerCard.style";

function TopPlayerCard({ style }) {
  return (
    <CardContainer style={style}>
      <DefaultImage />
      <RankBackground style={styles.backgroundFirst}>
        <Rank style={styles.first}>1</Rank>
      </RankBackground>
      <PlayerName>Kalam Suresh</PlayerName>
      <Points>97,235 EXP</Points>
      <Level>Level 10</Level>
    </CardContainer>
  );
}

const styles = StyleSheet.create({
  backgroundFirst: {
    width: 30,
    height: 30,
    backgroundColor: "#F8E69F",
  },
  first: {
    fontSize: 22,
    color: "#E9C162",
    textAlign: "center",
  },
});

export default TopPlayerCard;
