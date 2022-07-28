import { ImageBackground, Text, View } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const SliderComponentContainer = styled(ImageBackground)`
  height: 133px;
  width: 250px;
  margin-right: ${(props) => props.theme.sizes.md}px;
  border-radius: 15px;
  overflow: hidden;
`;

export const TitleText = styled(Text)`
  color: white;
  font-size: ${(props) => props.theme.fontSizes.h5};
  padding-left: 20px;
  padding-top: 20px;
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ["rgba(0,0,0,0.4)", "transparent"],
})`
  flex: 1;
  border-radius: 15px;
`;

export const Banner = styled(View)`
  margin-top: auto;
  margin-bottom: 20px;
  margin-left: ${(props) => props.theme.sizes.md}px;
  background-color: #d5dcdc;
  padding: ${(props) => props.theme.sizes.sm}px;
  align-self: flex-start;
  border-radius: 10px;
`;

export const BannerText = styled(Text)`
  color: #527462;
  font-size: 15px;
`;

export const BannerContainer = styled(View)`
  flex-direction: row;
  margin-top: auto;
`;
