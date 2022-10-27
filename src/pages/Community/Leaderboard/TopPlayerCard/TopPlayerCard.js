/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from "react";
import "firebase/storage";
import { StyleSheet, Image, Platform } from "react-native";
import axios from "axios";
import {
  CardContainer,
  PlayerName,
  Points,
  Level,
  Rank,
  RankBackground,
} from "./TopPlayerCard.style";
import { storage } from "../../../../infrastructure/Storage/storage.service";
import anonymousimage from "../../../../../assets/images/anonymousimage.jpeg";
import { totalExpToLevel } from "../../../../utils/utils";

function TopPlayerCard({ style, rank, user }) {
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(0);

  const getUserData = async () => {
    try {
      const res = await axios.get(`https://clima-backend.herokuapp.com/user/getUser/${user}`);
      const allData = res.data;

      const storageRef = storage.ref();
      const imageRef = storageRef.child(`users/${user}`);

      let image;
      try {
        image = await imageRef.getDownloadURL();
      } catch (err) {
        switch (err.code) {
          case "storage/object-not-found":
            image = null;
            break;
          case "storage/unknown":
            break;
          default:
            break;
        }
      }

      setName(allData.name);
      setPoints(allData.exp);
      setProfilePicture(image);
      setLevel(totalExpToLevel(allData.exp).lvl);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <CardContainer
      style={[styles.card, [rank === 1 ? { transform: [{ scale: 1.15 }] } : null, styles.card]]}
    >
      {profilePicture ? (
        <Image style={styles.image} source={{ uri: profilePicture }} />
      ) : (
        <Image style={styles.image} source={anonymousimage} />
      )}

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
      <PlayerName>{name}</PlayerName>
      <Points>{Math.round(points)} EXP</Points>
      <Level>Level {level}</Level>
    </CardContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: Platform.OS === "android" && 1,
    borderColor: "#0FA958",
    borderStyle: Platform.OS === "android" ? "solid" : null,
  },
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
  image: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
});

export default TopPlayerCard;
