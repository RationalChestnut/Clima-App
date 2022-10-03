import { FlatList, Text, View } from "react-native";
import styled from "styled-components/native";

export const DisplayActivitiesPage = styled(View)``;

export const TopBar = styled(View)`
  padding: 12px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: 18px;
  margin-left: 8px;
`;

export const ActivitiesList = styled(FlatList)`
  flex: 1;
`;
