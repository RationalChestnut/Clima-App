import { ScrollView, View, Text, ImageBackground, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const ExploreTasksPage = styled(ScrollView)`
  flex: 1;
`;

export const ExploreTasksPageContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.sizes.md}px;
`;

export const ActionsSearchBar = styled(Searchbar).attrs({
  placeholder: "Search Actions",
})`
  align-self: center;
`;

export const TextContainer = styled(View)`
  margin: ${(props) => props.theme.sizes.lg}px 0px;
`;

export const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h4};
`;

export const Description = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.body};
  margin-top: ${(props) => props.theme.sizes.sm}px;
`;

export const ActionTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h5};
`;

export const LargeBannerImage = styled(ImageBackground).attrs({
  resizeMode: "cover",
  imageStyle: { borderRadius: 15 },
})`
  width: 100%;
  height: 200px;
  margin-top: ${(props) => props.theme.sizes.md}px;
  margin-bottom: ${(props) => props.theme.sizes.lg}px;
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ["rgba(0,0,0,0.4)", "transparent"],
})`
  flex: 1;
  position: absolute;
  left: 0
  right: 0;
  top: 0
  height: 100%
  border-radius: 15px
`;

export const MainCardTextContainer = styled(View)`
  padding: ${(props) => props.theme.sizes.md}px;
  position: relative;
`;

export const MainCardTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h5};
  color: white;
`;

export const MainCardTitleDescription = styled(Text)`
  font-size: 18px;
  color: white;
  margin-top: ${(props) => props.theme.sizes.xs}px;
`;

export const Banner = styled(View)`
  margin-top: auto;
  margin-bottom: 20px;
  margin-left: ${(props) => props.theme.sizes.md}px;
  background-color: #d5dcdc;
  padding: ${(props) => props.theme.sizes.sm}px;
  align-self: flex-start;
  border-radius: 10px;
`;

export const BannerText = styled(Text)`
  color: #527462;
  font-size: 15px;
`;

export const Slider = styled(FlatList).attrs({ horizontal: true })`
  flex: 1;
  margin-top: ${(props) => props.theme.sizes.md}px;
  border-radius: 15px;
`;

export const BannerContainer = styled(View)`
  flex-direction: row;
  margin-top: auto;
`;
