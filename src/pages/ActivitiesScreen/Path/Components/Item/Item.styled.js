import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const ItemContainer = styled(TouchableOpacity)`
  align-items: center;
  flex: 1;
`;

export const CourseTypeText = styled(Text)`
  margin-top: ${(props) => props.theme.sizes.sm}px;
  color: ${(props) => props.theme.colors.muteGreen};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.button};
`;

export const Title = styled(Text)`
  margin-top: ${(props) => props.theme.sizes.xs}px;
  font-size: 18px;
  text-align: center;
  color: #36384c;
`;

export const XPLabelContainer = styled(View)`
  width: 85px;
  height: 27px;
  background-color: ${(props) => props.theme.colors.defaultGreen};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) => props.theme.sizes.sm}px;
`;

export const XPLabelText = styled(Text)`
  color: white;
  font-size: ${(props) => props.theme.fontSizes.button};
  font-family: ${(props) => props.theme.fonts.heading};
`;
