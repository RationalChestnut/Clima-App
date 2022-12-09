import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

const ArticleLink = styled(TouchableOpacity)`
  flex: 1;
`;

const ArticleContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${hp("1%")}px ${wp("1%")}px;
`;

const ArticleImage = styled(Image)`
  flex: 1;
  max-height: ${hp("10%")}px;
  border-radius: ${wp("4%")}px;
  resize-mode: cover;
  align-self: stretch;
`;

const Content = styled(View)`
  flex: 1.6;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin-left: ${wp("2%")}px;
  margin-right: ${wp("2%")}px;
`;

const Type = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${RFPercentage(2)}px;
  color: ${(props) => props.theme.colors.muteGreen}
  font-weight: 700;
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${RFPercentage(2.5)}px;
`;

const Icon = styled(AntDesign)`
  flex: 0.3;
  margin-left: ${wp("2%")}px;
`;
// eslint-disable-next-line react/prop-types
function Article({ title, image, link, type }) {
  return (
    <ArticleLink
      onPress={() => {
        WebBrowser.openBrowserAsync(link);
      }}
    >
      <ArticleContainer>
        <ArticleImage source={image} />
        <Content>
          <Type>{type}</Type>
          <Title>{title}</Title>
        </Content>
        <Icon name="right" size={wp("6%")} color="black" />
      </ArticleContainer>
    </ArticleLink>
  );
}

export default Article;
