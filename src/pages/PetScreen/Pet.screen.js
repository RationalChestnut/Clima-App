import React from "react";
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

function PetScreen() {
  return (
    <PetScreenContainer>
      <PetImage source={habitat}>
        <Pet source={petImage} />
      </PetImage>
      <NameInput value="Barky" />
      <BarContainer>
        <InfoContainer>
          <LevelText>Lvl. 2</LevelText>
          <QuestionMarkComponent />
          <StatusText>
            270 / <Green>300EXP</Green>
          </StatusText>
        </InfoContainer>
        <BarComponent percentage={40} color="#0FA958" />
      </BarContainer>
      <BarContainer>
        <InfoContainer>
          <MoodText>Your Pets Mood</MoodText>
          <QuestionMarkComponent />
          <Mood color="#1494DC">Sad</Mood>
        </InfoContainer>
        <BarComponent percentage={60} color="#FFA800" />
      </BarContainer>
    </PetScreenContainer>
  );
}

export default PetScreen;
