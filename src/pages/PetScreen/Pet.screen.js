import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import { Text } from "react-native";
import Tooltip from "rn-tooltip";
import { AuthenticationContext } from "../../infrastructure/Authentication/AuthenticationContext";
import QuestionMarkComponent from "../../components/QuestionMark/QuestionMark.component";
import BarComponent from "./Bar/Bar.component";
import {
  PetImage,
  PetScreenContainer,
  InfoContainer,
  BarContainer,
  LevelText,
  StatusText,
  Green,
  MoodText,
  Mood,
  NameInput,
  Pet,
} from "./Pet.style";
import habitat from "../../../assets/images/habitat.png";
import seed from "../../../assets/images/seed.png";
import sapling from "../../../assets/images/sapling.png";
import tree from "../../../assets/images/tree.png";

import { totalExpToLevel } from "../../utils/utils";

function PetScreen() {
  const user = useContext(AuthenticationContext);
  const [stats, setStats] = useState({
    lvl: 0,
    lvlTotalExp: 0,
    exp: 0,
    expOverLevel: 0,
    name: "",
    mood: 0,
    moodMessage: "Happy",
  });
  const [pet, setPet] = useState({
    name: "",
    type: "",
    image: null,
  });
  const [loading, setLoading] = useState(true);
  const [moodColor, setMoodColor] = useState("#1494DC");

  const getStats = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/user/${user.user}/pet`);
      const { data } = res;

      if (data.moodMessage === "Gloomy") {
        setMoodColor("#FFA800");
      }

      if (data.moodMessage === "Angry") {
        setMoodColor("#C54F46");
      }

      setStats({ ...data, ...totalExpToLevel(data.exp) });

      const petProperties = { type: "Seed", image: seed, name: data.name, width: 100, height: 100 };
      if (totalExpToLevel(data.exp).lvl >= 15) {
        petProperties.type = "Sapling";
        petProperties.image = sapling;
        petProperties.width = 100;
        petProperties.height = 250;
      }

      if (totalExpToLevel(data.exp).lvl >= 30) {
        petProperties.type = "Tree";
        petProperties.image = tree;
        petProperties.width = 300;
        petProperties.height = 400;
      }

      setPet({ ...petProperties });
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStats();
  }, []);

  const pageContent = (
    <>
      <PetImage source={habitat}>
        {pet.image ? (
          <Pet
            source={pet.image}
            resizeMode="contain"
            style={{ width: pet.width, height: pet.height }}
          />
        ) : null}
      </PetImage>
      <NameInput value={`${pet.name} (${pet.type})`} />
      <BarContainer>
        <InfoContainer>
          <LevelText>Lvl. {stats.lvl}</LevelText>
          <Tooltip
            popover={<Text>Complete tasks in order to gain exp and level up!</Text>}
            backgroundColor="#AEAEAE"
            withOverlay={false}
            containerStyle={{ width: 200, height: 60 }}
          >
            <QuestionMarkComponent />
          </Tooltip>
          <StatusText>
            {stats.expOverLevel} / <Green>{stats.lvlTotalExp}</Green>
          </StatusText>
        </InfoContainer>
        <BarComponent percentage={(stats.expOverLevel / stats.lvlTotalExp) * 100} color="#0FA958" />
      </BarContainer>
      <BarContainer>
        <InfoContainer>
          <MoodText style={moodColor}>Your Pets Mood</MoodText>
          <Tooltip
            popover={
              <Text>
                Your pets mood will get worse over time if you stop taking steps to reduce your
                carbon emmission!
              </Text>
            }
            backgroundColor="#AEAEAE"
            withOverlay={false}
            containerStyle={{ width: 220, height: 90 }}
          >
            <QuestionMarkComponent />
          </Tooltip>
          <Mood color={moodColor}>{stats.moodMessage}</Mood>
        </InfoContainer>
        <BarComponent percentage={stats.mood * 100} color={moodColor} />
      </BarContainer>
    </>
  );

  return <PetScreenContainer>{!loading ? pageContent : null}</PetScreenContainer>;
}

export default PetScreen;
