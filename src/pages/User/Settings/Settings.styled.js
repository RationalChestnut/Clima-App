import { View, Text, TouchableOpacity, Button, ImageBackground, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";

export const SettingsPageContainer = styled(View)`
  flex: 1;
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

export const SaveButton = styled(Button)``;

export const NameEmptyWarning = styled(Text)`
  color: ${(props) => props.theme.colors.orange};
  font-size: ${(props) => props.theme.fontSizes.body};
  text-align: center;
`;

export const NameEditContainer = styled(View)`
  flex-direction: row;
  width: undefined;
  margin: 0 auto;
  align-items: center;
`;

export const NameEditLabel = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const NameEditTextBox = styled(TextInput)`
  width: 30%;
  margin: ${(props) => props.theme.sizes.md}px auto;
  height: ${(props) => props.theme.sizes.lg}px;
  padding: ${(props) => props.theme.sizes.xs}px;
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: ${(props) => props.theme.sizes.xs}px;
`;
