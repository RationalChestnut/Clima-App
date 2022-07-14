import { View } from "react-native";
import styled from "styled-components/native";

export const HomePageContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.sizes.sm}px;
`;
