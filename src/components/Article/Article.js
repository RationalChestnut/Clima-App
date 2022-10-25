import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";

const ArticleLink = styled(TouchableOpacity)`
  flex: 1;
`;

const ArticleContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

const ArticleImage = styled(Image)`
  flex: 1;
  max-height: 80px;
  border-radius: 15px;
  resize-mode: cover;
  align-self: stretch;
`;

const Content = styled(View)`
  flex: 1.6;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin-left: ${(props) => props.theme.sizes.sm}px;
  margin-right: ${(props) => props.theme.sizes.sm}px;
`;

const Type = styled(Text)`
  ${"" /* flex: 1; */}
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.muteGreen}
  font-weight: 700;
  line-height: 20px;
`;

const Title = styled(Text)`
  ${"" /* flex: 1; */}
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  line-height: 20px;
  margin-top: ${(props) => props.theme.sizes.xs}px;
`;

const Icon = styled(AntDesign)`
  flex: 0.3;
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
        <Icon name="right" size={24} color="black" />
      </ArticleContainer>
    </ArticleLink>
  );
}

export default Article;
