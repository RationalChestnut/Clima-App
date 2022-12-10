import React, { useContext } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styled, { ThemeContext } from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
import anonymous from "../../../../assets/images/anonymousimage.jpeg";

const ProfileCardContainer = styled(View)`
  height: ${hp("12.5%")}px;
  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: ${wp("2%")}px;
  flex-direction: row;
  padding: ${hp("2%")}px ${wp("2%")}px;
`;

const ProfilePicture = styled(Image)`
  width: undefined;
  height: undefined;
  resize-mode: contain;
  aspect-ratio: 1;
  border-radius: ${wp("400%")}px;
`;

const ProfileInfo = styled(View)`
  flex: 2;
  margin-left: ${wp("4%")}px;
`;

const NameContainer = styled(View)`
  flex: 2;
  flex-direction: row;
  align-items: center;
`;

const Name = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${RFPercentage(2.5)}px;
`;

const Level = styled(Text)`
  margin-left: ${wp("2%")}px;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${RFPercentage(2)}px;
  color: ${(props) => props.theme.colors.highlightGreen};
`;

const SettingsButton = styled(TouchableOpacity)`
  margin-left: auto;
`;

const ExpContainer = styled(View)`
  flex: 1;
  flex-direction: row;
`;

const CurrentExp = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${RFPercentage(2)}px;
`;

const TotalExp = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${RFPercentage(2)}px;
  color: ${(props) => props.theme.colors.highlightGreen};
`;

const ExpBar = styled(Progress.Bar)``;

// eslint-disable-next-line react/prop-types
function ProfileCard({ picture, name, level, levelTotalExp, expOverLevel, navigation }) {
  const theme = useContext(ThemeContext);

  return (
    <ProfileCardContainer>
      {typeof picture === "string" ? (
        <ProfilePicture source={{ uri: picture }} />
      ) : (
        <ProfilePicture source={anonymous} />
      )}

      <ProfileInfo>
        <NameContainer>
          <Name>{name}</Name>
          <Level>Lvl. {level}</Level>
          <SettingsButton
            onPress={() => navigation.navigate("Settings", { profilePicture: picture, name })}
          >
            <FontAwesome name="gear" size={20} />
          </SettingsButton>
        </NameContainer>
        <ExpContainer>
          <CurrentExp>{Math.round(expOverLevel)} / </CurrentExp>
          <TotalExp>{levelTotalExp} EXP</TotalExp>
        </ExpContainer>
        <ExpBar
          progress={expOverLevel / levelTotalExp}
          width={null}
          unfilledColor={theme.colors.gray}
          color={theme.colors.highlightGreen}
          height={4}
          borderColor={theme.colors.lightGray}
        />
      </ProfileInfo>
    </ProfileCardContainer>
  );
}

export default ProfileCard;
