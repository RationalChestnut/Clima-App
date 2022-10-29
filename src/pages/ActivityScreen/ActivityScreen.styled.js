import { View, Text, Image, ScrollView, TouchableOpacity, Touchable } from "react-native";
import styled from "styled-components/native";
import { AntDesign, Ionicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import MarkedList from "@jsamr/react-native-li";
import disc from "@jsamr/counter-style/presets/disc";
import Slider from "@react-native-community/slider";

export const ActivityScreenContainer = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 12px;
  background-color: white;
`;

export const UpperBar = styled(View)`
  padding: 0px 20px;
  flex-direction: row;
  align-items: center;
`;

export const UpperText = styled(Text)`
  text-align: center;
`;

export const TextContainer = styled(View)`
  padding-left: 20px;
`;

export const TitleText = styled(Text)`
  padding-top: ${(props) => props.theme.fontSizes.title};
  font-size: ${(props) => props.theme.sizes.lg}px;
  color: black;
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const SubText = styled(Text)`
  padding-top: ${(props) => props.theme.sizes.xs}px;
  color: #4e4e4e;
  font-family: ${(props) => props.theme.fonts.body};
`;

export const ImageContainer = styled(TouchableOpacity)`
  align-items: center;
  margin-top: ${(props) => props.theme.sizes.sm}px;
`;

export const ActivityImage = styled(Image)`
  height: 200px;
  width: 350px;
  border-radius: 20px;
`;

export const StatsContainer = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 10px;
`;

export const Stat = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  color: #0fa958;
  font-size: 18px;
  margin-left: ${(props) => props.theme.sizes.md}px;
  margin-top: ${(props) => props.theme.sizes.sm}px;
`;

export const OptionsContainer = styled(View)`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: ${(props) => props.theme.sizes.sm}px;
`;

export const Option = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  margin: 0px 14px;
`;

export const OptionIconContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.defaultGreen};
  border-radius: 800px;
  padding: 9px;
`;

export const OptionText = styled(Text)`
  font-size: 16px;
  margin-top: 2px;
`;

export const AntOptionIcon = styled(AntDesign).attrs({ size: 24, color: "black" })`
  color: white;
`;

export const IonOptionIcon = styled(Ionicons).attrs({ size: 24, color: "black" })`
  color: white;
`;

export const UnsaveIcon = styled(MaterialCommunityIcons).attrs({ size: 24, color: "black" })`
  color: white;
`;

export const EntypoOptionIcon = styled(Entypo).attrs({ size: 24, color: "black" })`
  color: white;
`;

export const InfoContainer = styled(View)`
  margin: 16px 0px;
  padding-left: 10px;
`;

export const SectionTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 28px;
`;

export const SectionText = styled(Text)`
  margin-top: ${(props) => props.theme.sizes.sm}px;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: 18px;
`;

export const SecondSectionTitle = styled(Text)`
  margin-top: 16px;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 28px;
`;

export const ListContainer = styled(MarkedList).attrs({
  counterRenderer: disc,
})``;

export const ListItemsContainer = styled(View)`
  margin-top: ${(props) => props.theme.sizes.sm}px;
`;

export const ListItem = styled(Text)`
  flex-shrink: 1;
  font-family: ${(props) => props.theme.fonts.body};
  line-height: 23px;
  font-size: 18px;
`;

export const RecommendedTasksContainer = styled(View)`
  padding-bottom: ${(props) => props.theme.sizes.lg}px;
  height: 240px;
  margin-right: -12px;
`;

export const LinkToPurchaseContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  margin-top: 14px;
  padding-bottom: 14px;
`;

export const LinkToPurchaseTitle = styled(Text)`
  font-size: 22px;
`;

export const LinkToPurchase = styled(Text)`
  font-size: 18px;
  margin-left: 4px;
`;

export const ValueSlider = styled(Slider).attrs({
  minimumTrackTintColor: "#0FA958",
  maximumTrackTintColor: "#0FA958",
  tapToSeek: true,
})``;

export const SliderDescription = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const SliderDescriptionLeft = styled(Text)``;

export const SliderDescriptionRight = styled(Text)``;

export const SliderValue = styled(Text)`
  margin: 12px auto 0px auto;
`;
