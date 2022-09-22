import { Text, View, ImageBackground, TextInput, Image } from "react-native";
import styled from "styled-components/native";
import ConfettiCannon from "react-native-confetti-cannon";

export const TaskCompletionScreenContainer = styled(View)`
  flex: 1;
  background-color: white;
`;

export const CompletionText = styled(Text)`
  color: ${(props) => props.theme.colors.highlightGreen};
  font-size: 24px;
  text-align: center;
  margin-top: 12px;
`;

export const Cannon = styled(ConfettiCannon).attrs({
  count: 100,
  autoStart: true,
  explosionSpeed: 1500,
  fallSpeed: 4000,
  fadeOut: true,
})``;

export const LifeTimeStats = styled(Text)`
  font-size: 28px;
  margin-top: 20px;
  margin-bottom: 12px;
`;

export const Container = styled(View)`
  padding: 20px;
`;

export const StatContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const StatText = styled(Text)`
  font-size: 18px;
`;

export const ValueNumber = styled(Text)`
  color: ${(props) => props.theme.colors.defaultGreen};
  font-weight: bold;
  margin-left: 8px;
  margin-right: 4px;
  font-size: 18px;
`;

export const AddText = styled(Text)`
  font-size: 16px;
  color: grey;
`;

export const UpperSectionContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  padding: 10px 20px 0px 20px;
`;

export const TitleText = styled(Text)`
  margin-left: auto;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.colors.highlightGreen};
`;

export const PetContainer = styled(View)`
  width: 90%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

export const PetImage = styled(ImageBackground).attrs({ resizeMode: "cover" })`
  position: relative;
  width: 100%;
  height: 250px;
  opacity: 1;
`;

export const Pet = styled(Image)`
  position: absolute;
  bottom: 3%;
  left: 27%;
  ${"" /* transform: translate(50%, -50%); */}
  background-color: rgba(0, 240, 64, 0.1);
`;
