import { FlatList, View } from "react-native";
import styled from "styled-components";

export const ActivityContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.sizes.sm}px;
`;

export const ArticlesContainer = styled(FlatList)`
  flex: 1;
  margin-top: ${(props) => props.theme.sizes.lg}px;
`;

export const Separator = styled(View)`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.lightGray};
  margin-top: ${(props) => props.theme.sizes.md}px;
  margin-bottom: ${(props) => props.theme.sizes.md}px;
`;
