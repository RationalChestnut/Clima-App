import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { AntDesign, Ionicons, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import MarkedList from "@jsamr/react-native-li";
import disc from "@jsamr/counter-style/presets/disc";
import Slider from "@react-native-community/slider";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

export const ActivityScreenContainer = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: ${hp("2%")}px ${wp("4%")}px;
  background-color: white;
`;

export const UpperBar = styled(View)`
  padding: 0px ${wp("2%")}px;
  flex-direction: row;
  align-items: center;
`;

export const UpperText = styled(Text)`
  text-align: center;
`;

export const TextContainer = styled(View)`
  padding-left: ${wp("2%")}px;
`;

export const TitleText = styled(Text)`
  padding-top: ${hp("2%")}px;
  font-size: ${RFPercentage(4)}px;
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const SubText = styled(Text)`
  padding-top: ${hp("1%")}px;
  color: #4e4e4e;
  font-family: ${(props) => props.theme.fonts.body};
`;

export const ImageContainer = styled(TouchableOpacity)`
  align-items: center;
  margin-top: ${hp("2%")}px;
`;

export const ActivityImage = styled(Image)`
  height: ${hp("25%")}px;
  width: ${wp("90%")}px;
  border-radius: ${wp("4%")}px;
`;

export const StatsContainer = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
  padding: 0px ${wp("4%")}px;
  flex-wrap: wrap;
`;

export const Stat = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  color: #0fa958;
  font-size: ${RFPercentage(2.5)}px;
  margin-left: ${wp("2.5%")}px;
  margin-top: ${hp("1%")}px;
`;

export const OptionsContainer = styled(View)`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Option = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  margin: 0px ${wp("4%")}px;
`;

export const OptionIconContainer = styled(View)`
  background-color: ${(props) => props.theme.colors.defaultGreen};
  border-radius: 800px;
  padding: ${hp("1.25%")}px;
`;

export const OptionText = styled(Text)`
  font-size: ${RFPercentage(2.15)}px;
  margin-top: ${hp("0.5%")}px;
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
  margin: ${hp("2%")}px 0px;
  padding-left: ${wp("2%")}px;
`;

export const SectionTitle = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${RFPercentage(3.75)}px;
`;

export const SectionText = styled(Text)`
  margin-top: ${hp("1%")}px;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${RFPercentage(2.25)}px;
`;

export const SecondSectionTitle = styled(Text)`
  margin-top: ${hp("2%")}px;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${RFPercentage(3.75)}px;
`;

export const ListContainer = styled(MarkedList).attrs({
  counterRenderer: disc,
})``;

export const ListItemsContainer = styled(View)`
  margin-top: ${hp("1.5%")}px;
`;

export const ListItem = styled(Text)`
  flex-shrink: 1;
  font-family: ${(props) => props.theme.fonts.body};
  line-height: ${hp("3%")}px;
  font-size: ${RFPercentage(2.25)}px;
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
  margin: ${hp("1%")}px auto 0px auto;
`;
