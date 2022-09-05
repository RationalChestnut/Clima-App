import { Image, ImageBackground, Text, View } from "react-native";
import styled from "styled-components/native";

export const DisplayActivityDescriptionContainer = styled(View)`
  flex: 1;
  margin-top: 10px;
  padding: 0px 14px;
`;

export const ActivityImage = styled(ImageBackground)`
  height: 160px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  align-self: center;
`;

export const DescriptionContainer = styled(View)``;

export const Title = styled(Text)`
  margin-top: 8px;
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const IconsContainer = styled(View)`
  flex-direction: row;
  margin-top: 8px;
`;

export const Reduced = styled(View)`
  flex-direction: row;
  border: 1px solid ${(props) => props.theme.colors.highlightGreen};
  width: 85px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 5px;
  margin-right: 10px;
`;

export const ReducedText = styled(Text)`
  margin-left: 4px;
`;
