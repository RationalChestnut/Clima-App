import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

export const SavedTasksText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.h5};
  padding-left: 5px;
`;

export const FlatListContainer = styled(FlatList)`
  height: 400px;
`;

export const PageContainer = styled(View)`
  margin-bottom: ${(props) => props.theme.sizes.lg}px;
`;

export const AddMoreButton = styled(TouchableOpacity)`
  height: 40px;
  width: 100%;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: #0fa958;
  margin-top: ${(props) => props.theme.sizes.md}px;
`;

export const AddMoreText = styled(Text)`
  color: white;
  font-size: 17px;
`;
