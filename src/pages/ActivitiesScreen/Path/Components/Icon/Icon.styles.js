import { View, Image } from "react-native";
import styled from "styled-components/native";

export const IconLayerOne = styled(View)`
  width: 110px;
  height: 110px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.colors.defaultGreen};
  justify-content: center;
  align-items: center;
`;

export const IconLayerTwo = styled(View)`
  width: 95px;
  height: 95px;
  border-radius: 100px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Image)`
  width: 80px;
  height: 80px;
  border-radius: 100px;
`;
