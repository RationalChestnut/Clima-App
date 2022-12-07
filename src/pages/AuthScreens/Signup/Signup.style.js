import { View, Image, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";
import { TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
import logo from "../../../../assets/images/white_icon.png";
import authImage from "../../../../assets/images/auth.png";

export const SignUpScreenContainer = styled(View)`
  flex: 1;
  align-items: center;
  background-color: white;
`;

export const UpperBar = styled(View)`
  align-items: center;
  background-color: ${(props) => props.theme.colors.defaultGreen};
`;

export const LogoView = styled(View)`
  flex-direction: row;
  align-items: center;
  padding-top: ${hp("5%")}px;
`;

export const BrandText = styled(Text)`
  color: white;
  font-size: ${RFPercentage(6)}px;
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const PrivacyPolicy = styled(Text)`
  font-size: ${RFPercentage(2)}px;
`;

export const ImageContainer = styled(Image).attrs({ source: authImage })`
  margin-top: ${hp("4%")}px;
  width: 100%;
  height: 150px;
`;

export const FormContainer = styled(View)`
  align-items: center;
  flex: 1;
  background-color: white;
  padding-top: ${hp("1%")}px;
`;

export const KeyboardAvoidingContainer = styled(KeyboardAvoidingView)`
  width: 100%;
  flex: 1;
`;

export const Input = styled(TextInput).attrs({
  selectionColor: "#0FA958",
  activeUnderlineColor: "#3A887C",
})`
  width: 90%;
  background-color: white;
  margin-top: ${hp("1%")}px;
`;

const ButtonStyling = styled(TouchableOpacity)`
  width: 90%;
  padding: ${hp("1%")}px ${wp("3%")}px;
  height: ${hp("6%")}px;
  flex-direction: row;
  align-items: center;
  border-radius: ${wp("2.5%")}px;
  margin-top: ${(props) => props.theme.sizes.md}px;
`;

export const Button = styled(ButtonStyling)`
  background-color: ${(props) => props.theme.colors.highlightGreen};
`;

export const ButtonSecondary = styled(ButtonStyling)`
  border: 1px solid ${(props) => props.theme.colors.highlightGreen};
`;

const ButtonStylingText = styled(Text).attrs({ includeFontPadding: false })`
  font-size: ${RFPercentage(2.75)}px;
  font-family: ${(props) => props.theme.fonts.heading};
  padding-left: ${wp("4%")}px;
`;

export const ButtonText = styled(ButtonStylingText)`
  color: white;
`;

export const ButtonTextSecondary = styled(ButtonStylingText)`
  color: ${(props) => props.theme.colors.highlightGreen};
`;

export const RightArrow = styled(AntDesign).attrs((props) => ({
  name: "arrowright",
  size: wp("6.5%"),
  color: props.color,
}))`
  margin-left: auto;
  padding-right: ${wp("4%")}px;
`;

export const AuthContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-top: ${hp("2%")}px;
`;

export const Logo = styled(Image).attrs({
  source: logo,
})``;

export const PrivacyContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${hp("3%")}px;
`;

export const BrowserLink = styled(TouchableOpacity)``;

export const BrowserLinkText = styled(Text)`
  font-size: ${RFPercentage(2)}px;
`;

export const ErrorText = styled(Text)`
  margin-top: ${hp("2%")}px;
  color: #ff0033;
  font-size: ${RFPercentage(2)}px;
`;
