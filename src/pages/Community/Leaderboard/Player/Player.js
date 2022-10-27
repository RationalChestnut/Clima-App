import axios from "axios";
import "firebase/storage";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";
import { storage } from "../../../../infrastructure/Storage/storage.service";
import anonymousimage from "../../../../../assets/images/anonymousimage.jpeg";
import { RankSection } from "../LeaderboardBar/LeaderboardBar.styles";
import { totalExpToLevel } from "../../../../utils/utils";

import {
  PlayerContainer,
  RankText,
  PlayerPersonalInfoContainer,
  UserNameText,
  PointText,
  LevelText,
} from "./Player.styles";

function Player({ user, rank }) {
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
      setLevel(Math.round(totalExpToLevel(allData.exp).lvl));
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
      console.log(err);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <PlayerContainer>
      <RankSection>
        <RankText>{rank}</RankText>
      </RankSection>
      <PlayerPersonalInfoContainer>
        {profilePicture ? (
          <Image style={styles.image} source={{ uri: profilePicture }} />
        ) : (
          <Image style={styles.image} source={anonymousimage} />
        )}
        <UserNameText>{name}</UserNameText>
      </PlayerPersonalInfoContainer>
      <PointText>{points}</PointText>
      <LevelText>{level}</LevelText>
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
