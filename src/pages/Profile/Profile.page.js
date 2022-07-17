import React, { useContext } from "react";
import { Dimensions } from "react-native";
import { ThemeContext } from "styled-components/native";
import { LineChart } from "react-native-chart-kit";

import {
  GraphTitle,
  ProfilePageContainer,
  Separator,
  StatsList,
  StatsListContainer,
  StatsTitle,
} from "./Profile.styled";
import ProfileCard from "./ProfileCard";
import StatCard from "./StatCard";

function generateMonths() {
  const months = [];

  for (let i = 5; i > 0; i -= 1) {
    months.push(
      new Date(null, new Date().getMonth() - i + 1).toLocaleDateString("en", { month: "long" })
    );
  }
  return months;
}

// eslint-disable-next-line react/prop-types
function Profile({ profile = {} }) {
  const {
    name = "Yixuan Li",
    picture = "https://www.howtogeek.com/wp-content/uploads/2021/07/Discord-Logo-Lede.png?width=398&trim=1,1&bg-color=000&pad=1,1",
    exp = 270,
    level = 2,
    stats = [
      { negative: false, number: 180, unit: "kg", description: "CO2 removed", percent: 20 },
      { negative: true, number: 250, unit: "kg", description: "Waste removed", percent: 14 },
      { negative: true, number: 123, unit: "L", description: "Water saved", percent: 11 },
      { negative: false, number: 150, unit: "", description: "Trees planted", percent: 5 },
    ],
  } = profile;

  const theme = useContext(ThemeContext);

  const stat = ({ item }) => (
    <StatCard
      negative={item.negative}
      number={item.number}
      unit={item.unit}
      description={item.description}
      percent={item.percent}
    />
  );

  return (
    <ProfilePageContainer>
      <ProfileCard name={name} picture={picture} exp={exp} level={level} />
      <StatsTitle>Lifetime Stats</StatsTitle>
      <StatsListContainer>
        <StatsList data={stats} renderItem={stat} horizontal ItemSeparatorComponent={Separator} />
      </StatsListContainer>
      <GraphTitle>CO2 removed overtime</GraphTitle>
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
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </ProfilePageContainer>
  );
}

export default Profile;
