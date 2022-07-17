import { ScrollView } from "react-native";
import styled from "styled-components/native";

export const HomePageContainer = styled(ScrollView)`
  flex: 1;
  padding: 0px ${(props) => props.theme.sizes.sm}px;
`;
