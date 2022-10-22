import { Image, View } from "react-native";
import styled from "styled-components/native";
import icon from "../../../assets/images/white_icon.png";

export const SplashScreenPage = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.defaultGreen};
`;

export const SplashImage = styled(Image).attrs({
  source: icon,
})`
  width: 65px;
  height: 65px;
`;
