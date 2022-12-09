import { FlatList, View } from "react-native";
import styled from "styled-components";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const ActivityContainer = styled(View)`
  flex: 1;
  padding: ${hp("2%")}px ${wp("2%")}px;
`;

export const ArticlesContainer = styled(FlatList)`
  flex: 1;
`;

export const Separator = styled(View)`
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.lightGray};
  margin-top: ${hp("1%")}px;
  margin-bottom: ${hp("1%")}px;
`;
