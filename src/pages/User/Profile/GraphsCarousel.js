import React, { useState } from "react";
import styled from "styled-components";
import { View, ScrollView, Text } from "react-native";

import Graph from "./Graph";

const Container = styled(View)`
  width: 100%;
  margin-top: 10px;
`;

const CarouselScrollView = styled(ScrollView)`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const Bullets = styled(View)`
  position: absolute;
  top: 10px;
  right: 0;

  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
`;

const Bullet = styled(Text)`
  padding-left: 5px;
  padding-right: 5px;
  font-size: 20px;
`;

export function GraphsCarousel(props) {
  const { totalData, itemsPerInterval } = props;
  const itemsPerInt = itemsPerInterval === undefined ? 1 : itemsPerInterval;

  const [interval, setInterval] = useState(1);
  const [intervals, setIntervals] = useState(3);
  const [width, setWidth] = useState(0);

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
        month: new Date(null, currentMonth - 1).toLocaleDateString("en", { month: "long" }),
        data:
          totalData &&
          totalData[currentYear] &&
          totalData[currentYear][currentMonth] &&
          totalData[currentYear][currentMonth].monthlyCO2Removed
            ? totalData[currentYear][currentMonth]?.monthlyCO2Removed
            : 0,
      });

      carouselData[1].data.unshift({
        month: new Date(null, currentMonth - 1).toLocaleDateString("en", { month: "long" }),
        data:
          totalData &&
          totalData[currentYear] &&
          totalData[currentYear][currentMonth] &&
          totalData[currentYear][currentMonth].monthlyWasteRemoved
            ? totalData[currentYear][currentMonth]?.monthlyWasteRemoved
            : 0,
      });

      carouselData[2].data.unshift({
        month: new Date(null, currentMonth - 1).toLocaleDateString("en", { month: "long" }),
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

  const init = (w) => {
    // initialise width
    setWidth(w);
    // initialise total intervals
    const totalItems = generateData().length;
    setIntervals(Math.ceil(totalItems / itemsPerInt));
  };

  const getInterval = (offset) => {
    for (let i = 1; i <= intervals; i += 1) {
      if (offset + 1 < (width / intervals) * i) {
        return i;
      }
      if (i === intervals) {
        return i;
      }
    }
  };

  const bullets = [];
  for (let i = 1; i <= intervals; i += 1) {
    bullets.push(
      <Bullet
        key={i}
        style={{
          opacity: interval === i ? 0.5 : 0.1,
        }}
      >
        &bull;
      </Bullet>
    );
  }

  return (
    <Container>
      <CarouselScrollView
        horizontal
        contentContainerStyle={{ width: `${100 * intervals}%` }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
        onScroll={(data) => {
          setWidth(data.nativeEvent.contentSize.width);
          setInterval(getInterval(data.nativeEvent.contentOffset.x));
        }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast"
      >
        {generateData().map((item, index) => (
          <Graph data={item} key={index} />
        ))}
      </CarouselScrollView>
      <Bullets>{bullets}</Bullets>
    </Container>
  );
}

export default GraphsCarousel;
