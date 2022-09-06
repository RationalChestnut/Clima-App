import { FlatList, Text, View } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

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

export const ActivitiesList = styled(FlatList)``;

export const FilterIcon = styled(Ionicons).attrs({ name: "filter", size: 24, color: "black" })`
  margin-left: auto;
  margin-right: 12px;
`;
