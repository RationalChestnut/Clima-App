import { View } from "react-native";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const HomePageContainer = styled(View)`
  flex: 1;
  background-color: white;
`;

export const PaddingAdder = styled(View)`
  padding: ${hp("1%")}px ${wp("2%")}px;
`;
