import React, { useContext, useState, useCallback } from "react";
import "firebase/storage";
import axios from "axios";
import { ThemeContext } from "styled-components";
import { useFocusEffect } from "@react-navigation/native";
import { storage } from "../../../infrastructure/Storage/storage.service";

import { AuthenticationContext } from "../../../infrastructure/Authentication/AuthenticationContext";

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
import { totalExpToLevel } from "../../../utils/utils";
import { GraphsCarousel } from "./GraphsCarousel";
import Loading from "../../../components/Loading/Loading";

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
function Profile({ navigation }) {
  const theme = useContext(ThemeContext);
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
      let thisMonthCO2Removed = 0;
      let thisMonthWasteRemoved = 0;
      let thisMonthWaterSaved = 0;
      let lastMonthCO2RemovedPerDay = 0;
      let lastMonthWasteRemovedPerDay = 0;
      let lastMonthWaterSavedPerDay = 0;

      if (data.totalData[currentYear]) {
        thisMonthCO2Removed = data.totalData[currentYear][currentMonth]?.monthlyCO2Removed || 0;
        thisMonthWasteRemoved = data.totalData[currentYear][currentMonth]?.monthlyWasteRemoved || 0;
        thisMonthWaterSaved = data.totalData[currentYear][currentMonth]?.monthlyWaterSaved || 0;

        lastMonthCO2RemovedPerDay =
          (data.totalData[currentYear][previousMonth]?.monthlyCO2Removed
            ? data.totalData[currentYear][previousMonth].monthlyCO2Removed
            : 0) / daysInPreviousMonth;
        lastMonthWasteRemovedPerDay =
          (data.totalData[currentYear][previousMonth]?.monthlyWasteRemoved
            ? data.totalData[currentYear][previousMonth].monthlyWasteRemoved
            : 0) / daysInPreviousMonth;
        lastMonthWaterSavedPerDay =
          (data.totalData[currentYear][previousMonth]?.monthlyWaterSaved
            ? data.totalData[currentYear][previousMonth].monthlyWaterSaved
            : 0) / daysInPreviousMonth;
      }

      const CO2RemovedDiff = thisMonthCO2Removed - lastMonthCO2RemovedPerDay * currentDay;
      const wasteRemovedDiff = thisMonthWasteRemoved - lastMonthWasteRemovedPerDay * currentDay;
      const waterSavedDiff = thisMonthWaterSaved - lastMonthWaterSavedPerDay * currentDay;

      const storageRef = storage.ref();
      const imageRef = storageRef.child(`users/${userContext.user}`);

      let profilePicture;
      try {
        profilePicture = await imageRef.getDownloadURL();
      } catch (err) {
        switch (err.code) {
          case "storage/object-not-found":
            console.log("not found");
            profilePicture = null;
            break;
          case "storage/unknown":
            break;
          default:
            break;
        }
      }
      setUser({
        ...data,
        ...totalExpToLevel(data.exp),
        profilePicture,
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

  useFocusEffect(
    useCallback(() => {
      getUser();
    }, [])
  );

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
        navigation={navigation}
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
      {!loading ? (
        <Calendar data={user.totalData} before={beforeCalendar} />
      ) : (
        <Loading color={theme.colors.lightGreen} />
      )}
    </ProfilePageContainer>
  );
}

export default Profile;
