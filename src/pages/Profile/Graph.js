import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

function generateMonths() {
  const months = [];

  for (let i = 5; i > 0; i -= 1) {
    months.push(
      new Date(null, new Date().getMonth() - i + 1).toLocaleDateString("en", { month: "long" })
    );
  }
  return months;
}

function Graph() {
  const theme = useContext(ThemeContext);

  return (
    <LineChart
      data={{
        labels: generateMonths(),
        datasets: [
          {
            data: [
              Math.ceil(Math.random() * 200),
              Math.ceil(Math.random() * 200),
              Math.ceil(Math.random() * 200),
              Math.ceil(Math.random() * 200),
              Math.ceil(Math.random() * 200),
              180,
            ],
          },
        ],
      }}
      width={Dimensions.get("window").width - theme.sizes.sm * 2} // from react-native
      height={220}
      yAxisLabel=""
      yAxisSuffix="kg"
      yAxisInterval={10} // optional, defaults to 1
      chartConfig={{
        backgroundColor: theme.colors.defaultGreen,
        backgroundGradientFrom: theme.colors.lightGreen,
        backgroundGradientTo: theme.colors.defaultGreen,
        decimalPlaces: 0, // optional, defaults to 2dp
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
  );
}

export default Graph;
