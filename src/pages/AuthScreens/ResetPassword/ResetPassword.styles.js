import { View, Image, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import logo from "../../../../assets/images/white_icon.png";
import reset from "../../../../assets/images/reset.png";

export const SignUpScreenContainer = styled(View)`
  flex: 1;
  align-items: center;
  background-color: ${(props) => props.theme.colors.defaultGreen};
`;

export const UpperBar = styled(View)`
  margin-top: 20px;
  margin-left: -20px;
`;

export const BrandText = styled(Text)`
  color: white;
  font-size: 36px;
  font-family: ${(props) => props.theme.fonts.heading};
  margin-top: 8px;
`;

export const SubBrandText = styled(Text)`
  color: white;
  font-family: ${(props) => props.theme.fonts.heading};
  margin-top: 8px;
`;

export const ImageContainer = styled(Image).attrs({
  source: reset,
})`
  height: 325px;
  background-color: ${(props) => props.theme.colors.defaultGreen};
  width: 100%;
`;

export const KeyboardAvoidingContainer = styled(KeyboardAvoidingView)`
  width: 100%;
  flex: 1;
  height: 100px;
  background-color: white;
`;

export const FormContainer = styled(View)`
  background-color: white;
  width: 100%;
  align-items: center;
  padding-top: 10px;
`;

export const Input = styled(TextInput).attrs({
  selectionColor: "#0FA958",
  activeUnderlineColor: "#3A887C",
})`
  width: 90%;
  background-color: white;
  margin-top: 25px;
`;

export const Button = styled(TouchableOpacity)`
  width: 90%;
  background-color: ${(props) => props.theme.colors.highlightGreen};
  padding: 10px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  margin-top: 75px;
`;

export const ButtonText = styled(Text).attrs({ includeFontPadding: false })`
  color: white;
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.heading};
  padding-left: 20px;
`;

export const RightArrow = styled(AntDesign).attrs((props) => ({
  name: "arrowright",
  size: 24,
  color: props.color,
}))`
  margin-left: auto;
  padding-right: 20px;
`;

export const HorizontalLine = styled(View)`
  border-bottom: 1px solid black;
  width: 50%;
  height: 1px;
`;

export const Logo = styled(Image).attrs({
  source: logo,
})`
  width: 70px;
  height: 70px;
`;

export const ForgotPassword = styled(TouchableOpacity)`
  margin-top: 16px;
  margin-left: 22px;
  align-self: flex-start;
`;

export const ForgotPasswordText = styled(Text)`
  color: #6e6e6e;
  text-decoration: underline;
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.heading};
`;
