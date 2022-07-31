import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const ActivitiesPageContainer = styled(ScrollView)`
  width: 100%;
  padding: 20px 10px;
`;

export const ProgressText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const BarContainer = styled(View)`
  width: 200px;
  margin-top: 8px;
`;

export const TasksContainer = styled(View)`
  padding-bottom: 40px;
`;
