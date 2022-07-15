/* eslint-disable no-nested-ternary */
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

function TopPlayerCard({ style, rank }) {
  return (
    <CardContainer style={[style, rank === 1 ? { transform: [{ scale: 1.15 }] } : null]}>
      <DefaultImage />
      <RankBackground
        style={[
          rank === 1
            ? styles.backgroundFirst
            : rank === 2
            ? styles.backgroundSecond
            : styles.backgroundThird,
          styles.background,
        ]}
      >
        <Rank
          style={[
            rank === 1 ? styles.first : rank === 2 ? styles.second : styles.third,
            styles.rank,
          ]}
        >
          {rank}
        </Rank>
      </RankBackground>
      <PlayerName>Kalam Suresh</PlayerName>
      <Points>97,235 EXP</Points>
      <Level>Level 10</Level>
    </CardContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderStyle: "solid",
  },
  rank: {
    fontSize: 22,
    textAlign: "center",
  },
  backgroundFirst: {
    backgroundColor: "#F8E69F",

    borderColor: "#e9c162",
  },
  first: {
    color: "#E9C162",
  },
  backgroundSecond: {
    backgroundColor: "#D3D2D6",
    borderColor: "#525156",
  },
  second: {
    color: "#525156",
  },
  backgroundThird: {
    backgroundColor: "#DBC199",
    borderColor: "#B99B77",
  },
  third: {
    color: "#B99B77",
  },
});

export default TopPlayerCard;
