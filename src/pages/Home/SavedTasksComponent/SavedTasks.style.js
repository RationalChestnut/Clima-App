import { Text, View } from "react-native";
import styled from "styled-components/native";

export const SavedTasksText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.h5};
  padding-left: 5px;
`;

export const FlatListContainer = styled(View)``;

export const PageContainer = styled(View)`
  margin-bottom: ${(props) => props.theme.sizes.lg}px;
`;
