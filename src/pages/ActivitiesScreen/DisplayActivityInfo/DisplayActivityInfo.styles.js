import { ImageBackground, View, Text } from "react-native";
import styled from "styled-components/native";

export const DisplayActivityInfoPageContainer = styled(View)`
  flex: 1;
`;

export const Overlay = styled(View)``;

export const ActivityPageBackground = styled(ImageBackground).attrs({ resizeMode: "cover" })`
  width: 100%;
  height: 150px;
`;

export const ActivityTitle = styled(Text)`
  font-size: 28px;
  font-family: ${(props) => props.theme.fonts.heading};
  color: white;
`;

export const Spacer = styled(View)`
  background-color: rgba(0, 0, 0, 0.4);
  flex: 1;
  padding: 20px 0px 0px 20px;
`;

export const Description = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  margin-bottom: 10px;
  color: white;
`;
