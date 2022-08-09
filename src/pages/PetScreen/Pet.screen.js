import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

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
import petImage from "../../../assets/images/pet.png";

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
    moodMessage: "Angry",
  });
  const [loading, setLoading] = useState(true);

  const getStats = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/user/${user.user}/pet`);
      const { data } = res;

      setStats({ ...data, ...totalExpToLevel(data.exp) });
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
        <Pet source={petImage} />
      </PetImage>
      <NameInput value="Barky" />
      <BarContainer>
        <InfoContainer>
          <LevelText>Lvl. {stats.lvl}</LevelText>
          <QuestionMarkComponent />
          <StatusText>
            {stats.expOverLevel} / <Green>{stats.lvlTotalExp}</Green>
          </StatusText>
        </InfoContainer>
        <BarComponent percentage={(stats.expOverLevel / stats.lvlTotalExp) * 100} color="#0FA958" />
      </BarContainer>
      <BarContainer>
        <InfoContainer>
          <MoodText>Your Pets Mood</MoodText>
          <QuestionMarkComponent />
          <Mood color="#1494DC">{stats.moodMessage}</Mood>
        </InfoContainer>
        <BarComponent percentage={stats.mood * 100} color="#FFA800" />
      </BarContainer>
    </>
  );

  return <PetScreenContainer>{!loading ? pageContent : null}</PetScreenContainer>;
}

export default PetScreen;
