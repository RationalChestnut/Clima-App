import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

const CardContainer = styled(View)`
  padding: ${(props) => props.theme.sizes.md}px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

const Title = styled(Text)`
  color: white;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const Content = styled(Text)`
  color: white;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  text-align: center;
  line-height: 20px;
  margin-top: ${(props) => props.theme.sizes.sm}px;
`;

// eslint-disable-next-line react/prop-types
function FullWidthCard({ title, content, bgColor }) {
  return (
    <CardContainer style={{ backgroundColor: bgColor }}>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </CardContainer>
  );
}

export default FullWidthCard;
