import React, { useContext } from "react";
import { View, Image, Text } from "react-native";
import styled, { ThemeContext } from "styled-components/native";
import * as Progress from "react-native-progress";

const ProfileCardContainer = styled(View)`
  height: 100px;
  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: ${(props) => props.theme.sizes.sm}px;
  flex-direction: row;
  padding: ${(props) => props.theme.sizes.md}px;
`;

const ProfilePicture = styled(Image)`
  height: 100%;
  aspect-ratio: 1;
  resize-mode: cover;
  border-radius: ${(props) => props.theme.sizes.xxl}px;
`;

const ProfileInfo = styled(View)`
  flex: 1;
  margin-left: ${(props) => props.theme.sizes.md}px;
`;

const NameContainer = styled(View)`
  flex: 2;
  flex-direction: row;
  align-items: center;
`;

const Name = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const Level = styled(Text)`
  margin-left: ${(props) => props.theme.sizes.sm}px;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.highlightGreen};
`;

const ExpContainer = styled(View)`
  flex: 1;
  flex-direction: row;
`;

const CurrentExp = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const TotalExp = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.highlightGreen};
`;

const ExpBar = styled(Progress.Bar)``;

// eslint-disable-next-line react/prop-types
function ProfileCard({ picture, name, level, exp }) {
  const theme = useContext(ThemeContext);

  return (
    <ProfileCardContainer>
      <ProfilePicture source={{ uri: picture }} />
      <ProfileInfo>
        <NameContainer>
          <Name>{name}</Name>
          <Level>Lvl. {level}</Level>
        </NameContainer>
        <ExpContainer>
          <CurrentExp>{exp} / </CurrentExp>
          <TotalExp>{150 * level} EXP</TotalExp>
        </ExpContainer>
        <ExpBar
          progress={exp / (level * 150)}
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
