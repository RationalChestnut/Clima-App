import { View, Image, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import logo from "../../../../assets/images/white_icon.png";
import authImage from "../../../../assets/images/auth.png";

export const SignUpScreenContainer = styled(View)`
  flex: 1;
  align-items: center;
  background-color: ${(props) => props.theme.colors.defaultGreen};
`;

export const UpperBar = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-top: 75px;
`;

export const BrandText = styled(Text)`
  color: white;
  font-size: 42px;
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const PrivacyPolicy = styled(Text)`
  font-size: 12px;
  font-family: ${(props) => props.theme.fonts.body};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const ImageContainer = styled(Image).attrs({ source: authImage })`
  margin-top: 40px;
  width: 100%;
  height: 150px;
`;

export const FormContainer = styled(View)`
  align-items: center;
  flex: 1;
  background-color: white;
  padding-top: 10px;
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

export const AuthContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const Logo = styled(Image).attrs({
  source: logo,
})`
  width: 55px;
  height: 55px;
`;

export const BrowserLink = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BrowserLinkText = styled(Text)`
  font-size: 12px;
  margin-bottom: 0.8px;
`;

export const ErrorText = styled(Text)`
  margin-top: 12px;
  color: #ff0033;
  font-size: 14px;
  max-width: 95%;
`;
