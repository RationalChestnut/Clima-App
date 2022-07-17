import { View, Text, FlatList } from "react-native";
import styled from "styled-components/native";

export const ProfilePageContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.sizes.sm}px;
`;

export const StatsTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.defaultGreen};
  font-weight: 400;
  margin-top: ${(props) => props.theme.sizes.md}px;
  text-align: center;
`;

export const StatsListContainer = styled(View)`
  flex-direction: row;
`;

export const StatsList = styled(FlatList)`
  flex: 1;
  padding-bottom: ${(props) => props.theme.sizes.sm}px;
  margin-top: ${(props) => props.theme.sizes.md}px;
`;

export const Separator = styled(View)`
  margin: ${(props) => props.theme.sizes.sm}px;
`;

export const GraphTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.defaultGreen};
  text-align: center;
  margin-top: ${(props) => props.theme.sizes.md}px;
`;
