import React, { useContext, useCallback, useState, useRef } from "react";
import axios from "axios";
import { ThemeContext } from "styled-components/native";
import { Keyboard, Text, Platform } from "react-native";
import Tooltip from "rn-tooltip";
import { useFocusEffect } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
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
  PetNameContainer,
  PetType,
  KeyboardAvoidingContainer,
} from "./Pet.style";
import Loading from "../../components/Loading/Loading";
import seed from "../../../assets/images/seed.png";
import sapling from "../../../assets/images/sapling.png";
import babyTree from "../../../assets/images/babyTree.png";
import bigTree from "../../../assets/images/bigTree.png";
import biggestTree from "../../../assets/images/biggestTree.png";

import { totalExpToLevel } from "../../utils/utils";

function PetScreen() {
  const user = useContext(AuthenticationContext);
  const nameInput = useRef();
  const theme = useContext(ThemeContext);
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
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
  const [moodColor, setMoodColor] = useState("#FFA800");

  const getStats = async () => {
    try {
      const res = await axios.get(`https://clima-backend.herokuapp.com/user/${user.user}/pet`);
      const { data } = res;

      if (data.moodMessage === "Gloomy") {
        setMoodColor("#FFA800");
      }

      if (data.moodMessage === "Angry") {
        setMoodColor("#C54F46");
      }

      setStats({ ...data, ...totalExpToLevel(data.exp) });

      const petProperties = { type: "Seed", image: seed, name: data.name };
      if (totalExpToLevel(data.exp).lvl >= 4) {
        petProperties.type = "Sapling";
        petProperties.image = sapling;
      }

      if (totalExpToLevel(data.exp).lvl >= 7) {
        petProperties.type = "Baby Tree";
        petProperties.image = babyTree;
      }

      if (totalExpToLevel(data.exp).lvl >= 11) {
        petProperties.type = "Tree";
        petProperties.image = bigTree;
      }

      if (totalExpToLevel(data.exp).lvl >= 18) {
        petProperties.type = "Big Tree";
        petProperties.image = biggestTree;
      }

      setPet({ ...petProperties });
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEnter = async (e) => {
    if (pet.name.trim() === "") {
      return Toast.show({
        type: "error",
        text1: "STOP",
        text2: "You can't give your pet nothing!",
        position: "top",
        onPress: () => Toast.hide(),
      });
    }

    Keyboard.dismiss();

    try {
      await axios.patch(`https://clima-backend.herokuapp.com/user/${user.user}/pet`, {
        name: pet.name,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getStats();
    }, [])
  );
  const pageContent = (
    <>
      <KeyboardAvoidingContainer
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
        contentContainerStyle={{ flex: 1 }}
      >
        <PetImage>{pet.image ? <Pet source={pet.image} resizeMode="contain" /> : null}</PetImage>
      </KeyboardAvoidingContainer>
      <PetNameContainer>
        <MaterialCommunityIcons
          name="pencil"
          size={24}
          color="black"
          onPress={() => {
            nameInput.current.focus();
          }}
        />
        <NameInput
          ref={nameInput}
          value={pet.name}
          keyboardType="default"
          returnKeyType="done"
          onSubmitEditing={handleEnter}
          onChangeText={(text) => setPet((prevPet) => ({ ...prevPet, name: text }))}
        />
        <PetType>({pet.type})</PetType>
      </PetNameContainer>

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
            {Math.round(stats.expOverLevel)} / <Green>{stats.lvlTotalExp}</Green>
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

  return (
    <PetScreenContainer>
      {!loading ? pageContent : <Loading color={theme.colors.lightGreen} />}
    </PetScreenContainer>
  );
}

export default PetScreen;
