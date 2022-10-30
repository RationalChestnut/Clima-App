import React, { useState, useContext, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
import { ThemeContext } from "styled-components";
import { Dimensions } from "react-native";
import AnimateNumber from "react-native-animate-number-renewed";
import { AuthenticationContext } from "../../infrastructure/Authentication/AuthenticationContext";
import BackArrow from "../../components/BackArrow.component";
import Loading from "../../components/Loading/Loading";
import seed from "../../../assets/images/seed.png";
import sapling from "../../../assets/images/sapling.png";
import babyTree from "../../../assets/images/babyTree.png";
import bigTree from "../../../assets/images/bigTree.png";
import biggestTree from "../../../assets/images/biggestTree.png";
import { totalExpToLevel } from "../../utils/utils";

import {
  AddText,
  Cannon,
  CompletionText,
  Container,
  LifeTimeStats,
  StatContainer,
  StatText,
  TaskCompletionScreenContainer,
  TitleText,
  UpperSectionContainer,
  ValueNumber,
  PetImage,
  Pet,
  PetContainer,
  Label,
} from "./TaskCompletion.styles";

function TaskCompletionScreen({ navigation, route }) {
  const theme = useContext(ThemeContext);
  const user = useContext(AuthenticationContext);
  const [pet, setPet] = useState({
    name: "",
    type: "",
    image: null,
  });
  const [loading, setLoading] = useState(true);

  const {
    userExp,
    exp,
    carbonRemoved,
    wasteRemoved,
    waterSaved,
    userCarbonReduced,
    userWasteRemoved,
    userWaterSaved,
    sectionNumber,
    pathItem,
    pathNumber,
    isPathPage = false,
  } = route.params;

  const getPet = async () => {
    try {
      const res = await axios.get(`https://clima-backend.herokuapp.com/user/${user.user}/pet`);
      const { data } = res;

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

  useFocusEffect(
    useCallback(() => {
      getPet();
    }, [])
  );

  return (
    <TaskCompletionScreenContainer>
      <UpperSectionContainer>
        <TitleText>Awesome job!</TitleText>
        <BackArrow
          navigation={navigation}
          style={{
            marginLeft: "auto",
          }}
          icon="X"
          iconStyle={{ fontWeight: "bold", fontSize: 24 }}
          destination={isPathPage ? "Path" : null}
          pathNumber={pathNumber}
          sectionNumber={sectionNumber}
          pathItem={pathItem}
        />
      </UpperSectionContainer>

      <CompletionText>One step closer to a better world</CompletionText>

      <PetContainer>
        {!loading ? (
          <PetImage>{pet.image ? <Pet source={pet.image} resizeMode="contain" /> : null}</PetImage>
        ) : (
          <Loading color={theme.colors.lightGreen} />
        )}
      </PetContainer>
      <Container>
        <LifeTimeStats>Lifetime Stats</LifeTimeStats>
        <StatContainer>
          <StatText>EXP:</StatText>
          <ValueNumber>
            <AnimateNumber
              initialValue={userExp}
              value={userExp + exp}
              startAt={1000}
              formatter={(val) => `${parseFloat(val).toFixed(0)}`}
            />
          </ValueNumber>
          <AddText>+{exp.toFixed(2)}</AddText>
        </StatContainer>
        <StatContainer>
          <StatText>Total CO2 Removed:</StatText>
          <ValueNumber>
            <AnimateNumber
              initialValue={userCarbonReduced}
              value={userCarbonReduced + carbonRemoved}
              startAt={1000}
              formatter={(val) => `${parseFloat(val).toFixed(0)}`}
            />
            <Label>kg</Label>
          </ValueNumber>
          <AddText>+{carbonRemoved.toFixed(2)}</AddText>
        </StatContainer>
        <StatContainer>
          <StatText>Total Waste Removed:</StatText>
          <ValueNumber>
            <AnimateNumber
              initialValue={userWasteRemoved}
              value={userWasteRemoved + wasteRemoved}
              startAt={1000}
              formatter={(val) => `${parseFloat(val).toFixed(0)}`}
            />
            <Label>kg</Label>
          </ValueNumber>
          <AddText>+{wasteRemoved}</AddText>
        </StatContainer>
        <StatContainer>
          <StatText>Total Water Saved:</StatText>
          <ValueNumber>
            <AnimateNumber
              initialValue={userWaterSaved}
              value={userWaterSaved + (waterSaved || 0)}
              startAt={1000}
              formatter={(val) => `${parseFloat(val).toFixed(0)}`}
            />
            <Label>L</Label>
          </ValueNumber>
          <AddText>+{waterSaved}</AddText>
        </StatContainer>
      </Container>
      <Cannon origin={{ x: Dimensions.get("window").width - 10, y: 0 }} autoStartDelay={200} />
      <Cannon origin={{ x: 0, y: 0 }} fadeOut />
    </TaskCompletionScreenContainer>
  );
}

export default TaskCompletionScreen;
