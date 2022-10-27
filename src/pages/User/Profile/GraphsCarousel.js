import React, { useState } from "react";
import styled from "styled-components";
import { View, Text, FlatList } from "react-native";
import moment from "moment";

import Graph from "./Graph";

const Container = styled(View)`
  width: 100%;
  margin-top: 10px;
`;

const CarouselScrollView = styled(FlatList)``;

export function GraphsCarousel(props) {
  const { totalData } = props;

  const generateData = () => {
    const carouselData = [
      { title: "CO2 removed over time", units: "kg", data: [] },
      { title: "Waste removed over time", units: "kg", data: [] },
      { title: "Water saved over time", units: "L", data: [] },
    ];
    const date = new Date();
    const currentYear = date.getFullYear();
    let currentMonth = date.getMonth() + 1;

    for (let i = 5; i >= 0; i -= 1) {
      carouselData[0].data.unshift({
        month: moment(new Date(null, currentMonth - 1)).format("MMM"),
        data:
          totalData &&
          totalData[currentYear] &&
          totalData[currentYear][currentMonth] &&
          totalData[currentYear][currentMonth].monthlyCO2Removed
            ? totalData[currentYear][currentMonth]?.monthlyCO2Removed
            : 0,
      });

      carouselData[1].data.unshift({
        month: moment(new Date(null, currentMonth - 1)).format("MMM"),
        data:
          totalData &&
          totalData[currentYear] &&
          totalData[currentYear][currentMonth] &&
          totalData[currentYear][currentMonth].monthlyWasteRemoved
            ? totalData[currentYear][currentMonth]?.monthlyWasteRemoved
            : 0,
      });

      carouselData[2].data.unshift({
        month: moment(new Date(null, currentMonth - 1)).format("MMM"),
        data:
          totalData &&
          totalData[currentYear] &&
          totalData[currentYear][currentMonth] &&
          totalData[currentYear][currentMonth].monthlyWaterSaved
            ? totalData[currentYear][currentMonth]?.monthlyWaterSaved
            : 0,
      });

      currentMonth -= 1;
    }

    for (let i = 0; i < carouselData.length; i += 1) {
      carouselData[i].data.sort((a, b) => {
        if (
          new Date(Date.parse(`${a.month} 1, 2022`)).getMonth() >
          new Date(Date.parse(`${b.month} 1, 2022`)).getMonth()
        ) {
          return 1;
        }

        return -1;
      });
    }

    return carouselData;
  };

  const handleRender = ({ item, index }) => <Graph data={item} key={index} />;
  return (
    <Container>
      <CarouselScrollView horizontal data={generateData()} renderItem={handleRender} />
    </Container>
  );
}

export default GraphsCarousel;
