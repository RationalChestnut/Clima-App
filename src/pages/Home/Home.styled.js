import { View } from "react-native";
import styled from "styled-components/native";

export const HomePageContainer = styled(View)`
  flex: 1;
`;

export const PaddingAdder = styled(View)`
  padding: ${(props) => props.theme.sizes.md}px ${(props) => props.theme.sizes.sm}px;
`;
