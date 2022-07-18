import { View } from "react-native";
import styled from "styled-components/native";

export const BarContainer = styled(View)`
  height: 20px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: 20px;
`;

export const Bar = styled(View)`
  height: 20px;
  width: ${(props) => props.percentage}%;
  background-color: ${(props) => props.color};
  border-radius: 20px;
`;
