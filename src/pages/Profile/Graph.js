import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

function Graph({ data }) {
  const theme = useContext(ThemeContext);

  const generateMonths = () => {
    const graphData = [];
    const date = new Date();
    const currentYear = date.getFullYear();
    let currentMonth = date.getMonth() + 1;

    for (let i = 5; i >= 0; i -= 1) {
      graphData.unshift({
        month: new Date(null, currentMonth - 1).toLocaleDateString("en", { month: "long" }),
        CO2Removed: data[currentYear][`${currentMonth}`]?.monthlyCO2Removed || 0,
      });

      currentMonth -= 1;
    }

    graphData.sort((a, b) => {
      if (
        new Date(Date.parse(`${a.month} 1, 2022`)).getMonth() >
        new Date(Date.parse(`${b.month} 1, 2022`)).getMonth()
      ) {
        return 1;
      }

      return -1;
    });

    return graphData;
  };

  return (
    <LineChart
      data={{
        labels: generateMonths().map((month) => month.month),
        datasets: [
          {
            data: generateMonths().map((month) => month.CO2Removed),
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
