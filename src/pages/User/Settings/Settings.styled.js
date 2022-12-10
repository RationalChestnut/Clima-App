import { View, Text, TouchableOpacity, ImageBackground, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

export const SettingsPageContainer = styled(View)`
  flex: 1;
  background-color: white;
`;

export const BackArrowButton = styled(TouchableOpacity)`
  z-index: 1;
`;

export const BackArrowComponent = styled(AntDesign).attrs({
  name: "arrowleft",
  size: wp("8%"),
})``;

export const NavBar = styled(View)`
  flex-direction: row;
  padding: ${hp("2%")}px ${wp("4%")}px;
  align-items: center;
  justify-content: center;
`;

export const NavText = styled(Text)`
  flex: 1;
  font-size: ${RFPercentage(3)}px;
  text-align: center;
`;

export const ProfilePictureButton = styled(TouchableOpacity)`
  width: 30%;
  margin: ${hp("2%")}px auto;
`;

export const ProfilePicture = styled(ImageBackground)`
  width: undefined;
  height: undefined;
  resize-mode: contain;
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
`;

export const UploadText = styled(Text)`
  color: white;
  font-size: ${RFPercentage(2.25)}px;
`;

export const SaveButton = styled(TouchableOpacity)`
  margin-top: ${hp("2%")}px;
`;

export const ButtonText = styled(Text)`
  font-size: ${RFPercentage(2.25)}px;
  text-align: center;
`;

export const DeleteButtonContainer = styled(TouchableOpacity)`
  background-color: #dc3444;
  width: 50%;
  margin: 0 auto;
  padding: ${hp("1%")}px ${wp("3%")}px;
  border-radius: ${wp("3%")}px;
  margin-top: ${hp("2%")}px;
`;

export const DeleteButtonText = styled(Text)`
  font-size: ${RFPercentage(2.25)}px;
  text-align: center;
  color: white;
`;

export const Warning = styled(Text)`
  color: ${(props) => props.theme.colors.orange};
  font-size: ${RFPercentage(2.25)}px;
  text-align: center;
`;

export const InputContainer = styled(View)`
  flex-direction: column;
  width: 90%;
  margin: ${hp("1%")}px auto;
  margin-top: 0;
  align-self: stretch;
  align-items: stretch;
`;

export const TextboxLabel = styled(Text)`
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: ${hp("1%")}px;
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Textbox = styled(TextInput)`
  height: ${hp("3.5%")}px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.gray};
`;

export const EmailContainer = styled(TouchableOpacity).attrs({})`
  margin-top: ${hp("4%")}px;
`;

export const Email = styled(Text)`
  text-align: center;
`;

export const Underline = styled(Text)`
  text-decoration-line: underline;
`;

export const ErrorText = styled(Text)`
  color: #ff0033;
  font-size: ${RFPercentage(2.5)}px;
  margin-bottom: ${hp("2%")}px;
  text-align: center;
`;
