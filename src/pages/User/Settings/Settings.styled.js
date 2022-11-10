import { View, Text, TouchableOpacity, ImageBackground, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";

export const SettingsPageContainer = styled(View)`
  flex: 1;
  background-color: white;
`;

export const BackArrowButton = styled(TouchableOpacity)`
  z-index: 1;
`;

export const BackArrowComponent = styled(AntDesign).attrs({
  name: "arrowleft",
  size: 28,
})``;

export const NavBar = styled(View)`
  flex-direction: row;
  padding: ${(props) => props.theme.sizes.md}px;
  align-items: center;
  justify-content: center;
`;

export const NavText = styled(Text)`
  flex: 1;
  font-size: ${(props) => props.theme.fontSizes.title};
  text-align: center;
`;

export const ProfilePictureButton = styled(TouchableOpacity)`
  width: 30%;
  margin: ${(props) => props.theme.sizes.md}px auto;
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
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const SaveButton = styled(TouchableOpacity)`
  margin-top: ${(props) => props.theme.sizes.md}px;
`;

export const ButtonText = styled(Text)`
  font-size: 18px;
  text-align: center;
`;

export const DeleteButtonContainer = styled(TouchableOpacity)`
  background-color: #dc3444;
  width: 150px;
  margin: 0 auto;
  padding: 6px;
  border-radius: 12px;
  margin-top: ${(props) => props.theme.sizes.md}px;
`;

export const DeleteButtonText = styled(Text)`
  font-size: 18px;
  text-align: center;
  color: white;
`;

export const Warning = styled(Text)`
  color: ${(props) => props.theme.colors.orange};
  font-size: ${(props) => props.theme.fontSizes.body};
  text-align: center;
`;

export const InputContainer = styled(View)`
  flex-direction: column;
  width: 90%;
  margin: ${(props) => props.theme.sizes.md}px auto;
  margin-top: 0;
  align-self: stretch;
  align-items: stretch;
`;

export const TextboxLabel = styled(Text)`
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: 2px;
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Textbox = styled(TextInput)`
  height: ${(props) => props.theme.sizes.lg}px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.gray};
`;

export const EmailContainer = styled(TouchableOpacity).attrs({})`
  margin-top: 75px;
`;

export const Email = styled(Text)`
  text-align: center;
`;

export const ErrorText = styled(Text)`
  color: #ff0033;
  font-size: 14px;
  margin-bottom: 14px;
  text-align: center;
`;
