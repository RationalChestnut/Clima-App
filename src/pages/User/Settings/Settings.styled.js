import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
  ImageBackground,
} from "react-native";
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
