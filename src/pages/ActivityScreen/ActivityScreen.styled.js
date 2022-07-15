import { View, Text, Image, ScrollView } from "react-native";
import styled from "styled-components/native";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import MarkedList from "@jsamr/react-native-li";
import disc from "@jsamr/counter-style/presets/disc";

export const ActivityScreenContainer = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 10px;
`;

export const UpperBar = styled(View)`
  padding: 0px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  color: #4e4e4e;
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const SubText = styled(Text)`
  padding-top: ${(props) => props.theme.sizes.xs}px;
  color: #4e4e4e;
  font-family: ${(props) => props.theme.fonts.body};
`;

export const ImageContainer = styled(View)`
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
  font-size: ${(props) => props.theme.sizes.md}px;
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

export const Option = styled(View)`
  align-items: center;
  justify-content: center;
  margin: 0px 12px;
  border-radius: 40px;
`;

export const OptionText = styled(Text)`
  font-size: 14px;
  margin-top: 2px;
`;

export const AntOptionIcon = styled(AntDesign).attrs({ size: 24, color: "black" })`
  background-color: ${(props) => props.theme.colors.defaultGreen};
  padding: 8px;
  border-radius: 20px;
  color: white;
`;

export const IonOptionIcon = styled(Ionicons).attrs({ size: 24, color: "black" })`
  background-color: ${(props) => props.theme.colors.defaultGreen};
  padding: 8px;
  border-radius: 100px;
  color: white;
`;
export const EntypoOptionIcon = styled(Entypo).attrs({ size: 24, color: "black" })`
  background-color: ${(props) => props.theme.colors.defaultGreen};
  padding: 8px;
  border-radius: 100px;
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
  font-size: 14px;
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
`;
