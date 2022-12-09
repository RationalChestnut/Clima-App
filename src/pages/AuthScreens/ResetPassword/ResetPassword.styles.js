import { View, Image, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
import reset from "../../../../assets/images/reset.png";

export const SignUpScreenContainer = styled(View)`
  flex: 1;
  align-items: center;
  background-color: ${(props) => props.theme.colors.defaultGreen};
`;

export const UpperBar = styled(View)`
  background-color: ${(props) => props.theme.colors.defaultGreen};
  padding-left: ${wp("5%")}px;
`;

export const BrandText = styled(Text)`
  color: white;
  font-size: ${RFPercentage(4)}px;
  font-family: ${(props) => props.theme.fonts.heading};
  margin-top: 8px;
`;

export const SubBrandText = styled(Text)`
  color: white;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${RFPercentage(2.5)}px;
  margin-top: ${hp("1%")}px;
  padding-right: ${wp("2%")}px;
`;

export const ImageContainer = styled(Image).attrs({
  source: reset,
})`
  background-color: ${(props) => props.theme.colors.defaultGreen};
  height: ${hp("30%")}px;
  width: 100%;
  margin-bottom: ${hp("4%")}px;
  margin-top: ${hp("4%")}px;
`;

export const KeyboardAvoidingContainer = styled(KeyboardAvoidingView)`
  width: 100%;
  flex: 1;
  height: ${hp("20%")}px;
  background-color: ${(props) => props.theme.colors.defaultGreen};
  margin-top: ${hp("4%")}px;
`;

export const FormContainer = styled(View)`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: white;
`;

export const Input = styled(TextInput).attrs({
  selectionColor: "#0FA958",
  activeUnderlineColor: "#3A887C",
})`
  width: 90%;
  background-color: white;
  margin-top: ${hp("2%")}px;
`;

export const Button = styled(TouchableOpacity)`
  width: 90%;
  background-color: ${(props) => props.theme.colors.highlightGreen};
  padding: ${hp("1%")}px;
  height: ${hp("6%")}px;
  flex-direction: row;
  align-items: center;
  border-radius: ${hp("1.5%")}px;
  margin-top: ${hp("4%")}px;
`;

export const ButtonText = styled(Text).attrs({ includeFontPadding: false })`
  color: white;
  font-size: ${RFPercentage(2.5)}px;
  font-family: ${(props) => props.theme.fonts.heading};
  padding-left: ${wp("4%")}px;
`;

export const RightArrow = styled(AntDesign).attrs((props) => ({
  name: "arrowright",
  size: wp("6%"),
  color: props.color,
}))`
  margin-left: auto;
  padding-right: ${wp("4%")}px;
`;

export const Message = styled(Text)`
  color: #ff0033;
  font-size: ${RFPercentage(2)}px;
  margin-top: ${hp("2%")}px;
  text-align: center;
  max-width: 95%;
`;
