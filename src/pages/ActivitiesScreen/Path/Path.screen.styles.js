import { ScrollView, Text, View } from "react-native";
import styled from "styled-components/native";

export const PathContainer = styled(ScrollView)`
  flex: 1;
  background-color: white;
`;

export const SectionContainer = styled(View)`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 30px 0px;
  border: 0.3px solid ${(props) => props.theme.colors.gray};
  border-left: none;
  border-right: none;
`;

export const TitleText = styled(Text)`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.h4};
  font-family: ${(props) => props.theme.fonts.heading};
  padding: 20px 0px;
  color: ${(props) => props.theme.colors.highlightGreen};
`;

export const CourseDescription = styled(Text)`
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.body};
  font-family: ${(props) => props.theme.fonts.body};
  max-width: 70%;
  align-self: center;
  padding-bottom: 20px;
`;
