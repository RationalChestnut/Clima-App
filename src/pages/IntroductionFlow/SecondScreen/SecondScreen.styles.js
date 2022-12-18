import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
import TypeWriter from "react-native-typewriter";
import { TouchableWithoutFeedback, View, Image } from "react-native";
import seed from "../../../../assets/images/seed.png";

export const WithoutFeedback = styled(TouchableWithoutFeedback)``;

export const Container = styled(View)`
  flex: 1;
`;

const DefaultMascot = styled(Image).attrs({ source: seed })`
  position: absolute;
  z-index: 2;
  height: 17.5%;
  width: 35%;
`;

export const PathMascot = styled(DefaultMascot)`
  top: 25%;
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

export const PathDialogue = styled(DefaultDialogue)`
  top: 5%;
  left: 45%;
`;

const DefaultCover = styled(View)`
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.33);
  left: 0;
  right: 0;
`;

export const PathCover = styled(DefaultCover)`
  top: 0;
  bottom: 0;
`;

export const Typer = styled(TypeWriter).attrs({ typing: 2 })`
  font-size: ${RFPercentage(2.5)}px;
`;
