import { View } from "react-native";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const BarContainer = styled(View)`
  height: ${hp("3%")}px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: ${wp("400%")}px;
`;

export const Bar = styled(View)`
  height: ${hp("3%")}px;
  width: ${(props) => props.percentage}%;
  background-color: ${(props) => props.color};
  border-radius: 2000px;
`;
