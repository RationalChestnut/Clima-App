import { View, Image, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import logo from "../../../../assets/images/white_icon.png";
import loginImage from "../../../../assets/images/loginImage.png";

export const SignUpScreenContainer = styled(View)`
  flex: 1;
  align-items: center;
  background-color: white;
`;

export const LogoView = styled(View)`
  flex-direction: row;
  align-items: center;
  padding-top: 40px;
`;

export const UpperBar = styled(View)`
  align-items: center;
  background-color: ${(props) => props.theme.colors.defaultGreen};
`;

export const BrandText = styled(Text)`
  color: white;
  font-size: 42px;
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const ImageContainer = styled(Image).attrs({ source: loginImage })`
  height: 310px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.defaultGreen};
`;

export const FormContainer = styled(View)`
  align-items: center;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  flex: 1;
`;

export const KeyboardAvoidingContainer = styled(KeyboardAvoidingView)`
  width: 100%;
  flex: 1;
  height: 100px;
`;

export const Input = styled(TextInput).attrs({
  selectionColor: "#0FA958",
  activeUnderlineColor: "#3A887C",
})`
  width: 90%;
  background-color: white;
  margin-top: 5px;
`;

export const Button = styled(TouchableOpacity)`
  width: 90%;
  background-color: ${(props) => props.theme.colors.highlightGreen};
  padding: 10px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  margin-top: ${(props) => props.theme.sizes.md}px;
`;

export const ButtonSecondary = styled(TouchableOpacity)`
  width: 90%;
  padding: 10px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.highlightGreen};
  border-radius: 10px;
  margin-top: ${(props) => props.theme.sizes.md}px;
`;

export const ButtonText = styled(Text).attrs({ includeFontPadding: false })`
  color: white;
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.heading};
  padding-left: 20px;
`;

export const ButtonTextSecondary = styled(Text).attrs({ includeFontPadding: false })`
  color: ${(props) => props.theme.colors.highlightGreen};
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
  width: 55px;
  height: 55px;
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

export const ErrorText = styled(Text)`
  margin-top: 12px;
  color: #ff0033;
  font-size: 14px;
  max-width: 95%;
`;
