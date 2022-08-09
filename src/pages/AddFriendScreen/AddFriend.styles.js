import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import pet from "../../../assets/images/pet.png";

export const AddFriendScreenContainer = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.muteGreen};
  align-items: center;
`;

export const ProfileComponent = styled(View)`
  width: 95%;
  background-color: white;
  margin-top: ${(props) => props.theme.sizes.md}px;
  padding: ${(props) => props.theme.sizes.md}px;
  border-radius: 10px;
  border: 5px solid ${(props) => props.theme.colors.defaultGreen};
  position: relative;
`;

export const Username = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.lightGreen};
`;

export const ProfileText = styled(Text)`
  margin-top: ${(props) => props.theme.sizes.md}px;
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.gray};
`;

export const ProfileCode = styled(Text)`
  font-size: 30px;
  color: ${(props) => props.theme.colors.lightGreen};
`;

export const CopyCodeButton = styled(TouchableOpacity)``;

export const ProfileImage = styled(Image).attrs({ source: pet })`
  width: 100px;
  height: 100px;
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const CodeText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
  color: #2f2f2f;
  margin: 0px 15px;
`;

export const CodeContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.defaultGreen};
  width: 95%;
  border-radius: 10px;
  align-items: center;
  padding: ${(props) => props.theme.sizes.md}px;
  margin-top: ${(props) => props.theme.sizes.md}px;
`;
export const Code = styled(Text)`
  color: ${(props) => props.theme.colors.highlightGreen};
  font-size: ${(props) => props.theme.fontSizes.h5};
`;

export const ShareCodeButton = styled(TouchableOpacity)`
  margin-top: ${(props) => props.theme.sizes.md}px;
  width: 250px;
  background-color: ${(props) => props.theme.colors.highlightGreen};
  align-self: center;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  border-radius: 40px;
`;

export const Copy = styled(TouchableOpacity)`
  margin-top: ${(props) => props.theme.sizes.md}px;
`;

export const StyledText = styled(Text)`
  color: white;
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.heading};
`;
export const CopyStyledText = styled(Text)`
  color: ${(props) => props.theme.colors.highlightGreen};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.heading};
  text-align: center;
`;

export const CodeInputWrapper = styled(View)`
  background-color: white;
  width: 80%;
  border-radius: 5px;
  border: 3px solid ${(props) => props.theme.colors.highlightGreen};
  padding: ${(props) => props.theme.sizes.sm}px;
  margin-top: ${(props) => props.theme.sizes.md}px;
`;

export const CodeInput = styled(TextInput).attrs({
  placeholder: "Code goes here",
  maxLength: 28,
  selectionColor: "#527462",
  autoCapitalize: "none",
})`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.h5};
  color: ${(props) => props.theme.colors.muteGreen};
`;

export const SendButton = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.highlightGreen};
  width: 150px;
  height: 50px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => props.theme.sizes.md}px;
  margin-bottom: ${(props) => props.theme.sizes.md}px;
`;

export const SendText = styled(Text)`
  color: white;
  font-size: ${(props) => props.theme.fontSizes.title};
`;

export const Border = styled(View)`
  background-color: black;
  width: 100px;
  height: 1px;
`;

export const Row = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-top: ${(props) => props.theme.sizes.lg}px;
`;

export const Instruction = styled(Text)`
  text-align: center;
  font-size:18px;
  font-family: ${(props) => props.theme.fonts.body}
  color: white;
`;
