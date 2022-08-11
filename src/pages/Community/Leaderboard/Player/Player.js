import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";
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
      const res = await axios.get(`http://localhost:5000/user/getUser/${user}`);
      const allData = res.data.data;
      setName(allData.name);
      setPoints(allData.exp);
      setProfilePicture(allData.profilePicture || anonymousimage);
      setLevel(totalExpToLevel(allData.exp).lvl);
    } catch (err) {
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
        <Image style={styles.image} source={profilePicture} />
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
