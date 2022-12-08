import { ImageBackground, View, Text } from "react-native";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

export const DisplayActivityInfoPageContainer = styled(View)`
  flex: 1;
  background-color: white;
`;

export const ActivityPageBackground = styled(ImageBackground).attrs({ resizeMode: "cover" })`
  width: 100%;
  height: ${hp("20%")}px;
`;

export const ActivityTitle = styled(Text)`
  font-size: ${RFPercentage(3.75)}px;
  font-family: ${(props) => props.theme.fonts.heading};
  color: white;
  margin-top: ${hp("1%")}px;
`;

export const Spacer = styled(View)`
  background-color: rgba(0, 0, 0, 0.4);
  flex: 1;
  padding: ${hp("2%")}px 0px 0px ${wp("6%")}px;
`;

export const Description = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: white;
`;
