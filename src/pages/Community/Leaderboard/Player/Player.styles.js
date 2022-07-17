import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const PlayerContainer = styled(TouchableOpacity)`
  background-color: white;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  padding: 2% 5%;
  margin-top: 3%;
  flex: 1;
`;

export const RankText = styled(Text)`
  padding-left: 9.5px;
  color: #5479e1;
  font-size: 18px;
`;

export const PlayerPersonalInfoContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  padding-left: 4.9%;
`;

export const UserNameText = styled(Text)`
  padding-left: 4.9%;
`;

export const PointText = styled(Text).attrs({ includeFontPadding: false })`
  padding-left: 11%;
`;

export const LevelText = styled(Text)`
  padding-left: 14%;
  text-align: center;s
`;
