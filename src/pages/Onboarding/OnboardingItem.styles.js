import { Text, View, Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const OnboardingItemContainer = styled(View)`
  align-items: center;
  padding: 20px;
`;

export const SubTitleText = styled(Text)`
  color: white;
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.heading};
  margin-top: 32px;
`;

export const TitleText = styled(Text)`
  color: white;
  font-size: ${(props) => (props.main ? props.theme.fontSizes.h2 : "32px")}
  font-family: ${(props) => props.theme.fonts.heading};
  text-align: center;
  margin-top: ${(props) => (props.main ? "-5px" : "10px")};
`;

export const DescriptionText = styled(Text)`
  text-align: center;
  color: white;
  font-size: ${(props) => props.theme.fontSizes.title};
  line-height: 40px;
  margin-top: 30px;
`;

export const SkipButton = styled(TouchableOpacity)`
  margin-left: auto;
`;

export const SkipButtonText = styled(Text)`
  color: white;
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const OnboardImage = styled(Image).attrs({ resizeMode: "contain" })`
  width: 80%;
  max-height: 300px;
  margin-top: ${(props) => (props.nospacing === true ? "20px" : "70px")};
`;

export const BeginButton = styled(TouchableOpacity)`
  margin-top: 20px;
`;

export const BeginText = styled(Text)`
  color: white;
  font-size: ${(props) => props.theme.fontSizes.h4};
  font-family: ${(props) => props.theme.fonts.heading};
`;
