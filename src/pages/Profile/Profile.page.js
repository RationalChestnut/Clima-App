import React, { useEffect } from "react";
import { LogBox } from "react-native";

import {
  CalendarTitle,
  GraphTitle,
  ProfilePageContainer,
  Separator,
  StatsList,
  StatsListContainer,
  StatsTitle,
} from "./Profile.styled";
import ProfileCard from "./ProfileCard";
import StatCard from "./StatCard";
import Graph from "./Graph";
import Calendar from "./Calendar";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// eslint-disable-next-line react/prop-types
function Profile({ profile = {} }) {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists"]);
  }, []);

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
    currentMonth = [
      { date: 1, tasks: 10 },
      { date: 2, tasks: 1 },
      { date: 3, tasks: 0 },
      { date: 4, tasks: 5 },
      { date: 5, tasks: 8 },
      { date: 6, tasks: 2 },
      { date: 7, tasks: 5 },
      { date: 8, tasks: 15 },
      { date: 9, tasks: 1 },
      { date: 10, tasks: 2 },
      { date: 11, tasks: 16 },
      { date: 12, tasks: 0 },
      { date: 13, tasks: 2 },
      { date: 14, tasks: 10 },
      { date: 15, tasks: 8 },
      { date: 16, tasks: 5 },
      { date: 17, tasks: 2 },
      { date: 18, tasks: 0 },
      { date: 19, tasks: 9 },
    ],
  } = profile;

  const today = new Date();

  const stat = ({ item }) => (
    <StatCard
      negative={item.negative}
      number={item.number}
      unit={item.unit}
      description={item.description}
      percent={item.percent}
    />
  );

  const beforeCalendar = () => (
    <>
      <ProfileCard name={name} picture={picture} exp={exp} level={level} />
      <StatsTitle>Lifetime Stats</StatsTitle>
      <StatsListContainer>
        <StatsList data={stats} renderItem={stat} horizontal ItemSeparatorComponent={Separator} />
      </StatsListContainer>
      <GraphTitle>CO2 removed over time</GraphTitle>
      <Graph />
      <CalendarTitle>{`${monthNames[today.getMonth()]} ${today.getFullYear()}`}</CalendarTitle>
    </>
  );

  return (
    <ProfilePageContainer>
      <Calendar currentMonth={currentMonth} before={beforeCalendar} />
    </ProfilePageContainer>
  );
}

export default Profile;
