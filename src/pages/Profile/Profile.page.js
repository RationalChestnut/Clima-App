import React, { useEffect, useContext, useState } from "react";
import axios from "axios";

import { AuthenticationContext } from "../../infrastructure/Authentication/AuthenticationContext";

import {
  CalendarTitle,
  ProfilePageContainer,
  Separator,
  StatsList,
  StatsListContainer,
  StatsTitle,
} from "./Profile.styled";
import ProfileCard from "./ProfileCard";
import StatCard from "./StatCard";
import Calendar from "./Calendar";
import { totalExpToLevel } from "../../utils/utils";
import { GraphsCarousel } from "./GraphsCarousel";

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
function Profile() {
  const userContext = useContext(AuthenticationContext);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    profilePicture: "",
    name: "",
    email: "",
    exp: 0,
    totalCO2Removed: 0,
    totalWasteRemoved: 0,
    totalWaterSaved: 0,
    totalData: null,
  });

  const getUser = async () => {
    const date_ob = new Date();
    const previousMonth = date_ob.getMonth();
    const currentDay = date_ob.getDate();
    const currentMonth = date_ob.getMonth() + 1;
    const currentYear = date_ob.getFullYear();
    const daysInPreviousMonth = new Date(currentYear, previousMonth, 0).getDate();
    
    try {
      const { data } = await axios.get(`http://localhost:5000/user/getUser/${userContext.user}`);

      const { totalCO2Removed, totalWasteRemoved, totalWaterSaved } = data;
      const thisMonthCO2Removed = data.totalData[currentYear][currentMonth]?.monthlyCO2Removed || 0;
      const thisMonthWasteRemoved =
        data.totalData[currentYear][currentMonth]?.monthlyWasteRemoved || 0;
      const thisMonthWaterSaved = data.totalData[currentYear][currentMonth]?.monthlyWaterSaved || 0;

      const lastMonthCO2RemovedPerDay =
        (data.totalData[currentYear][previousMonth]?.monthlyCO2Removed
          ? data.totalData[currentYear][previousMonth].monthlyCO2Removed
          : 0) / daysInPreviousMonth;
      const lastMonthWasteRemovedPerDay =
        (data.totalData[currentYear][previousMonth]?.monthlyWasteRemoved
          ? data.totalData[currentYear][previousMonth].monthlyWasteRemoved
          : 0) / daysInPreviousMonth;
      const lastMonthWaterSavedPerDay =
        (data.totalData[currentYear][previousMonth]?.monthlyWaterSaved
          ? data.totalData[currentYear][previousMonth].monthlyWaterSaved
          : 0) / daysInPreviousMonth;

      const CO2RemovedDiff = thisMonthCO2Removed - lastMonthCO2RemovedPerDay * currentDay;
      const wasteRemovedDiff = thisMonthWasteRemoved - lastMonthWasteRemovedPerDay * currentDay;
      const waterSavedDiff = thisMonthWaterSaved - lastMonthWaterSavedPerDay * currentDay;

      setUser({
        ...data,
        ...totalExpToLevel(data.exp),
        stats: [
          {
            description: "CO2 removed",
            number: totalCO2Removed,
            unit: "kg",
            negative: CO2RemovedDiff < 0,
            percent: Math.round(
              (Math.abs(CO2RemovedDiff) / lastMonthCO2RemovedPerDay) * currentDay
            ),
            valid:
              lastMonthCO2RemovedPerDay &&
              lastMonthCO2RemovedPerDay !== 0 &&
              lastMonthCO2RemovedPerDay !== Infinity,
          },
          {
            description: "Waste removed",
            number: totalWasteRemoved,
            unit: "kg",
            negative: wasteRemovedDiff < 0,
            percent: Math.round(
              (Math.abs(wasteRemovedDiff) / lastMonthWasteRemovedPerDay) * currentDay
            ),
            valid:
              lastMonthWasteRemovedPerDay &&
              lastMonthWasteRemovedPerDay !== 0 &&
              lastMonthWasteRemovedPerDay !== Infinity,
          },
          {
            description: "Water saved",
            number: totalWaterSaved,
            unit: "L",
            negative: waterSavedDiff < 0,
            percent: Math.round(
              (Math.abs(waterSavedDiff) / lastMonthWaterSavedPerDay) * currentDay
            ),
            valid:
              lastMonthWaterSavedPerDay &&
              lastMonthWaterSavedPerDay !== 0 &&
              lastMonthWaterSavedPerDay !== Infinity,
          },
        ],
      });
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const today = new Date();

  const stat = ({ item }) => (
    <StatCard
      negative={item.negative}
      number={item.number}
      unit={item.unit}
      description={item.description}
      percent={item.percent}
      valid={item.valid}
    />
  );

  const beforeCalendar = () => (
    <>
      <ProfileCard
        name={user.name}
        picture={user.profilePicture}
        level={user.lvl}
        levelTotalExp={user.lvlTotalExp}
        expOverLevel={user.expOverLevel}
      />
      <StatsTitle>Lifetime Stats</StatsTitle>
      <StatsListContainer>
        <StatsList
          data={user.stats}
          renderItem={stat}
          horizontal
          ItemSeparatorComponent={Separator}
        />
      </StatsListContainer>
      <GraphsCarousel totalData={user.totalData} />
      <CalendarTitle>{`${monthNames[today.getMonth()]} ${today.getFullYear()}`}</CalendarTitle>
    </>
  );

  return (
    <ProfilePageContainer>
      {!loading ? <Calendar data={user.totalData} before={beforeCalendar} /> : null}
    </ProfilePageContainer>
  );
}

export default Profile;
