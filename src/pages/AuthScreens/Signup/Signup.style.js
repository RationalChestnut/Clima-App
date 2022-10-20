import { View, Image, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import { TextInput } from "react-native-paper";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
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
  margin-top: 20px;
  font-size: 12px;
  font-family: ${(props) => props.theme.fonts.body};
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

export const HorizontalLine = styled(View)`
  border-bottom: 1px solid black;
  width: 50%;
  height: 1px;
`;

export const ContinueWithText = styled(Text)`
  margin-top: ${(props) => props.theme.sizes.md}px;
`;

export const GoogleSignIn = styled(TouchableOpacity)`
  width: 45%;
  height: 50px;
  border-radius: 40px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #f7f7f7;
  margin-left: 5px;
`;

export const FacebookSignIn = styled(TouchableOpacity)`
  width: 45%;
  height: 50px;
  border-radius: 40px;
  padding: 5px;
  background-color: #1b76f0;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-right: 5px;
`;

export const Facebook = styled(FontAwesome).attrs({ name: "facebook", size: 24, color: "white" })`
  margin-right: 10px;
`;
export const Google = styled(FontAwesome).attrs({ name: "google", size: 24, color: "red" })`
  margin-right: 10px;
`;

export const AuthContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const ThirdPartySignInTextFacebook = styled(Text)`
  color: white;
  font-size: 16px;
`;
export const ThirdPartySignInTextGoogle = styled(Text)`
  font-size: 16px;
`;

export const Logo = styled(Image).attrs({
  source: logo,
})`
  width: 70px;
  height: 70px;
`;
