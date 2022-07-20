import React, { useContext } from "react";
import { View, Text } from "react-native";
import styled, { ThemeContext } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

const StatCardContainer = styled(View)`
  width: 120px;
  aspect-ratio: 1;
  border-radius: ${(props) => props.theme.sizes.sm}px;
  padding: ${(props) => props.theme.sizes.md}px;
  align-items: center;
`;

const Data = styled(Text)`
  color: white;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.h5};
`;

const Description = styled(Text)`
  color: white;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Separator = styled(Text)`
  flex: 1;
`;

const IndicatorContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const IndicatorText = styled(Text)`
  color: white;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

// eslint-disable-next-line react/prop-types
function StatCard({ negative, number, unit, description, percent }) {
  const theme = useContext(ThemeContext);

  return (
    <StatCardContainer
      style={{ backgroundColor: negative ? theme.colors.red : theme.colors.lightGreen }}
    >
      <Data>
        {number}
        {unit}
      </Data>
      <Description>{description}</Description>
      <Separator />
      <IndicatorContainer>
        <AntDesign name={negative ? "arrowdown" : "arrowup"} size={20} color="white" />
        <IndicatorText>{percent}% MoM</IndicatorText>
      </IndicatorContainer>
    </StatCardContainer>
  );
}

export default StatCard;