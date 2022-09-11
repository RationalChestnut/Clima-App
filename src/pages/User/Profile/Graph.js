import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components/native";
import { Dimensions, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

const Container = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GraphTitle = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.defaultGreen};
  text-align: center;
  margin-top: ${(props) => props.theme.sizes.md}px;
`;

function Graph({ data }) {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <GraphTitle>{data.title}</GraphTitle>
      <LineChart
        data={{
          labels: data.data.map((month) => month.month),
          datasets: [
            {
              data: data.data.map((month) => month.data),
            },
          ],
        }}
        width={Dimensions.get("window").width - theme.sizes.sm * 2} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix={data.units}
        yAxisInterval={10} // optional, defaults to 1
        chartConfig={{
          backgroundColor: theme.colors.defaultGreen,
          backgroundGradientFrom: theme.colors.lightGreen,
          backgroundGradientTo: theme.colors.defaultGreen,
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: theme.colors.lightGray,
          },
        }}
        bezier
        style={{
          marginTop: theme.sizes.sm,
          borderRadius: theme.sizes.md,
        }}
      />
    </Container>
  );
}

export default Graph;
