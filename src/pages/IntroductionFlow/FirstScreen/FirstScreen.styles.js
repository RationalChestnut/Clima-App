import { Image, View, TouchableWithoutFeedback } from "react-native";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
import TypeWriter from "react-native-typewriter";
import seed from "../../../../assets/images/seed.png";

export const WithoutFeedback = styled(TouchableWithoutFeedback)``;

export const FirstScreenContainer = styled(View)`
  flex: 1;
`;

const DefaultMascot = styled(Image).attrs({ source: seed })`
  position: absolute;
  z-index: 2;
  height: 17.5%;
  width: 35%;
`;

export const Mascot = styled(DefaultMascot)`
  top: 10%;
  left: 5%;
`;

export const MascotTwo = styled(DefaultMascot)`
  bottom: 20%;
  left: 5%;
`;

export const MascotThree = styled(DefaultMascot)`
  top: 20%;
  left: 5%;
`;

const DefaultDialogue = styled(View).attrs({ borderBottomLeftRadius: 0 })`
  position: absolute;
  z-index: 3;
  background-color: white;
  width: 50%;
  border-radius: ${wp("17.5%")}px;
  padding: ${hp("3%")}px ${wp("5%")}px;
`;

const DefaultCover = styled(View)`
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.33);
`;

export const Cover = styled(DefaultCover)`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const CoverTwo = styled(DefaultCover)`
  top: 0;
  left: 0;
  right: 0;
  height: 22.5%;
`;

export const CoverThree = styled(DefaultCover)`
  bottom: 0;
  left: 0;
  right: 0;
  height: 12.5%;
`;

export const CoverFour = styled(DefaultCover)`
  bottom: 0;
  left: 0;
  right: 0;
  height: 54.5%;
`;

export const UpperCoverFour = styled(DefaultCover)`
  top: 0;
  left: 0;
  right: 0;
  height: 31%;
`;

export const Dialogue = styled(DefaultDialogue)`
  left: 42.5%;
  top: 7.5%;
`;

export const DialogueTwo = styled(DefaultDialogue)`
  left: 42.5%;
  bottom: 30%;
`;

export const Typer = styled(TypeWriter).attrs({ typing: 1 })`
  font-size: ${RFPercentage(2.5)}px;
`;
