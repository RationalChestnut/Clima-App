import { View } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const QuestionMarkContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.lightGray};
  align-items: center;
  justify-content: center;
  border-radius: 200px;
  margin-left: ${(props) => props.theme.sizes.sm}px;
`;

export const QuestionMark = styled(AntDesign).attrs({
  name: "question",
  size: 18,
  color: "black",
})``;
