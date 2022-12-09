import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

export const AddFriendScreenContainer = styled(View)`
  flex: 1;
  align-items: center;
  background-color: white;
`;

export const ProfileComponent = styled(View)`
  width: 95%;
  background-color: white;
  margin-top: ${hp("2%")}px;
  padding: ${hp("1.75%")}px ${wp("4%")}px;
  border-radius: ${wp("4%")}px;
  border: 5px solid ${(props) => props.theme.colors.lightGray};
  position: relative;
`;

export const Username = styled(Text)`
  font-size: ${RFPercentage(3.5)}px;
  color: ${(props) => props.theme.colors.lightGreen};
`;

export const ProfileText = styled(Text)`
  margin-top: ${hp("2%")}px;
  font-size: ${RFPercentage(2.5)}px;
  color: ${(props) => props.theme.colors.gray};
`;

export const ProfileCode = styled(Text)`
  font-size: ${RFPercentage(3)}px;
  color: ${(props) => props.theme.colors.lightGreen};
  margin-top: ${hp("1%")}px;
`;

export const CopyCodeButton = styled(TouchableOpacity)``;

export const CodeText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${RFPercentage(3.5)}px;
  color: ${(props) => props.theme.colors.gray};
  margin: 0px 15px;
`;

export const CodeContainer = styled(LinearGradient).attrs({
  colors: ["#2A9B60", "#3A887C"],
  start: { x: 0.7, y: 0.1 },
})`
  width: 95%;
  border-radius: ${wp("4%")}px;
  align-items: center;
  padding: ${hp("1.75%")}px ${wp("4%")}px;
  margin-top: ${hp("2%")}px;
`;
export const Code = styled(Text)`
  color: ${(props) => props.theme.colors.highlightGreen};
  font-size: ${RFPercentage(3.5)}px;
`;

export const ShareCodeButton = styled(TouchableOpacity)`
  margin-top: ${hp("2%")}px;
  width: 95%;
  background-color: ${(props) => props.theme.colors.highlightGreen};
  align-self: center;
  align-items: center;
  justify-content: center;
  padding: ${hp("1.5%")}px ${wp("2%")}px;
  border-radius: ${wp("400%")}px;
`;

export const Copy = styled(TouchableOpacity)`
  margin-top: ${hp("2%")}px;
`;

export const StyledText = styled(Text)`
  color: white;
  font-size: ${RFPercentage(2.75)}px;
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const CopyStyledText = styled(Text)`
  color: ${(props) => props.theme.colors.highlightGreen};
  font-size: ${RFPercentage(2.75)}px;
  font-family: ${(props) => props.theme.fonts.heading};
  text-align: center;
`;

export const CodeInputWrapper = styled(View)`
  background-color: white;
  width: 90%;
  border-radius: ${wp("2%")}px;
  padding: ${hp("1.5%")}px ${wp("2%")}px;
  margin-top: ${hp("2%")}px;
`;

export const CodeInput = styled(TextInput).attrs({
  placeholder: "Code goes here",
  maxLength: 28,
  selectionColor: "#527462",
  autoCapitalize: "none",
})`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${RFPercentage(2.75)}px;
  color: ${(props) => props.theme.colors.muteGreen};
`;

export const SendButton = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.highlightGreen};
  width: 90%;
  height: ${hp("6%")}px;
  border-radius: 400px;
  align-items: center;
  justify-content: center;
  margin-top: ${hp("2%")}px;
  margin-bottom: ${hp("2%")}px;
`;

export const SendText = styled(Text)`
  color: white;
  font-size: ${RFPercentage(2.75)}px;
`;

export const Border = styled(View)`
  background-color: ${(props) => props.theme.colors.gray};
  width: 25%;
  height: ${hp("0.15%")}px;
`;

export const Row = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-top: ${hp("2%")}px;
`;

export const Instruction = styled(Text)`
  text-align: center;
  font-size: ${RFPercentage(2.5)}px;
  font-family: ${(props) => props.theme.fonts.body}
  color: white;
`;
