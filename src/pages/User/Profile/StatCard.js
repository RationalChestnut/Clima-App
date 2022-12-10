import React, { useContext } from "react";
import { View, Text } from "react-native";
import styled, { ThemeContext } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import numbro from "numbro";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

const StatCardContainer = styled(View)`
  width: ${wp("30%")}px;
  aspect-ratio: 1;
  border-radius: ${wp("2%")}px;
  padding: ${hp("2%")}px ${wp("4%")}px;
  align-items: center;
`;

const Data = styled(Text)`
  color: white;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${RFPercentage(2.5)}px;
`;

const Description = styled(Text)`
  color: white;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${RFPercentage(1.6)}px;
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
  font-size: ${RFPercentage(2)}px;
`;

// eslint-disable-next-line react/prop-types
function StatCard({ negative, number, unit, description, percent, valid }) {
  const theme = useContext(ThemeContext);

  numbro.setLanguage("en-US");

  numbro.registerLanguage({
    languageTag: "xx-XX",
    delimiters: {
      thousands: ",",
      decimal: ".",
    },
    abbreviations: {
      thousand: "k",
      million: "m",
      billion: "b",
      trillion: "t",
    },
    ordinal: () => "",
    currency: {
      symbol: "$",
      position: "postfix",
      code: "USD",
    },
    formats: {
      fourDigits: {
        totalLength: 4,
        spaceSeparated: true,
        average: true,
      },
      fullWithTwoDecimals: {
        output: "currency",
        mantissa: 2,
        spaceSeparated: true,
        thousandSeparated: true,
      },
      fullWithTwoDecimalsNoCurrency: {
        mantissa: 2,
        thousandSeparated: true,
      },
      fullWithNoDecimals: {
        output: "currency",
        spaceSeparated: true,
        thousandSeparated: true,
        mantissa: 0,
      },
    },
  });

  return (
    <StatCardContainer
      style={{ backgroundColor: negative ? theme.colors.red : theme.colors.lightGreen }}
    >
      <Data>
        {`${numbro(number).format({
          thousandSeparated: true,
          mantissa: 1, // number of decimals displayed
          spaceSeparatedAbbreviation: true,
          average: true,
        })} `}
        {unit}
      </Data>
      <Description>{description}</Description>
      <Separator />
      <IndicatorContainer>
        {valid ? (
          <>
            <AntDesign name={negative ? "arrowdown" : "arrowup"} size={20} color="white" />
            <IndicatorText>{percent}% MoM</IndicatorText>
          </>
        ) : (
          <IndicatorText>Good job!</IndicatorText>
        )}
      </IndicatorContainer>
    </StatCardContainer>
  );
}

export default StatCard;
