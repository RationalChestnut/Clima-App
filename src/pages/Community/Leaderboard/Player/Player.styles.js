import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

export const PlayerContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  padding: ${hp("0.5%")}px ${wp("4%")}px;
  margin-top: ${hp("1.5%")}px;
  flex: 1;
`;

export const RankText = styled(Text)`
  padding-left: ${wp("2%")}px;
  color: #5479e1;
  font-size: ${RFPercentage(2.25)}px;
`;

export const PlayerPersonalInfoContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  padding-left: ${wp("4%")}px;
`;

export const UserNameText = styled(Text).attrs({ numberOfLines: 1 })`
  padding-left: ${wp("4.5%")}px;
  text-align: center;
`;

export const PointText = styled(Text).attrs({ includeFontPadding: false })`
  position: absolute;
  right: ${wp("32%")}px;
`;

export const LevelText = styled(Text)`
  position: absolute;
  right: ${wp("12.5%")}px;
`;
