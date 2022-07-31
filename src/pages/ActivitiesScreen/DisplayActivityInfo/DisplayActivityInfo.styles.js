import { ImageBackground, View, Text } from "react-native";
import styled from "styled-components/native";

export const DisplayActivityInfoPageContainer = styled(View)`
  flex: 1;
`;

export const ActivityPageBackground = styled(ImageBackground).attrs({ resizeMode: "cover" })`
  width: 100%;
  height: 150px;
`;

export const ActivityTitle = styled(Text)`
  font-size: 28px;
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const Spacer = styled(View)`
  margin-left: 20px;
  margin-top: 20px;
`;

export const Description = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  margin-bottom: 10px;
`;
