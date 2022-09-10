import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

export const DisplayActivityDescriptionContainer = styled(TouchableOpacity)`
  flex: 1;
  margin-top: 12px;
  padding: 0px 14px;
`;

export const ActivityImage = styled(ImageBackground)`
  height: 160px;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  align-self: center;
`;

export const DescriptionContainer = styled(View)`
  flex-direction: row;
  margin-top: 8px;
  align-items: center;
`;

export const Title = styled(Text)`
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const ExpText = styled(Text)`
  margin-left: auto;
  color: ${(props) => props.theme.colors.highlightGreen};
  font-size: 17px;
`;

export const AddButton = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.highlightGreen};
  width: 30px;
  height: 30px;
  margin-left: auto;
  margin-top: 12px;
  margin-right: 12px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

export const SaveText = styled(Text)`
  font-size: 22px;
  color: white;
  font-weight: bold;
  text-align: center;
`;
