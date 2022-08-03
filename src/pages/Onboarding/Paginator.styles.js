import { Platform, View } from "react-native";
import styled from "styled-components/native";

export const PaginatorContainer = styled(View)`
  height: 64px;
  background-color: ${(props) => props.backgroundColor}
  width: 100%;
  position: absolute;
  bottom: ${Platform.OS === "ios" ? "80px" : "20px"};
  justify-content: center;
  flex-direction: column;
`;

export const DotContainer = styled(View)`
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
`;
