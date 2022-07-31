import styled from "styled-components/native";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const TabBar = styled(View)`
  height: 45px;
  background-color: white;
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Tab = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 195px;
`;

export const TabTitle = styled(Text)`
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.heading};
`;
