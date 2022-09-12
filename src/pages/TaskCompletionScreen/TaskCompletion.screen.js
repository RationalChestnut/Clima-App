import React from "react";
import { Dimensions } from "react-native";
import AnimateNumber from "react-native-animate-number-renewed";
import BackArrow from "../../components/BackArrow.component";

import {
  AddText,
  Cannon,
  CompletionText,
  Container,
  LifeTimeStats,
  StatContainer,
  StatText,
  TaskCompletionScreenContainer,
  TitleText,
  UpperSectionContainer,
  ValueNumber,
} from "./TaskCompletion.styles";

function TaskCompletionScreen({ navigation, route }) {
  const {
    userExp,
    exp,
    carbonReduced,
    wasteRemoved,
    waterSaved,
    userCarbonReduced,
    userWasteRemoved,
    userWaterSaved,
  } = route.params;
  return (
    <TaskCompletionScreenContainer>
      <UpperSectionContainer>
        <TitleText>Awesome job!</TitleText>
        <BackArrow
          navigation={navigation}
          style={{
            marginLeft: "auto",
          }}
          icon="X"
          iconStyle={{ fontWeight: "bold", fontSize: 24 }}
        />
      </UpperSectionContainer>

      <CompletionText>One step closer to a better world</CompletionText>
      <Cannon origin={{ x: Dimensions.get("window").width - 10, y: 0 }} autoStartDelay={200} />
      <Cannon origin={{ x: 0, y: 0 }} fadeOut />
      <Container>
        <LifeTimeStats>Lifetime Stats</LifeTimeStats>
        <StatContainer>
          <StatText>EXP:</StatText>
          <ValueNumber>
            <AnimateNumber
              initialValue={userExp}
              value={userExp + exp}
              startAt={1000}
              formatter={(val) => `${parseFloat(val).toFixed(0)}`}
            />
          </ValueNumber>
          <AddText>+{exp}</AddText>
        </StatContainer>
        <StatContainer>
          <StatText>Total CO2 Removed:</StatText>
          <ValueNumber>
            <AnimateNumber
              initialValue={userCarbonReduced}
              value={userCarbonReduced + carbonReduced}
              startAt={1000}
              formatter={(val) => `${parseFloat(val).toFixed(0)}`}
            />
          </ValueNumber>
          <AddText>+{carbonReduced}</AddText>
        </StatContainer>
        <StatContainer>
          <StatText>Total Waste Removed:</StatText>
          <ValueNumber>
            <AnimateNumber
              initialValue={userWasteRemoved}
              value={userWasteRemoved + wasteRemoved}
              startAt={1000}
              formatter={(val) => `${parseFloat(val).toFixed(0)}`}
            />
          </ValueNumber>
          <AddText>+{wasteRemoved}</AddText>
        </StatContainer>
        <StatContainer>
          <StatText>Total Water Saved:</StatText>
          <ValueNumber>
            <AnimateNumber
              initialValue={userWaterSaved}
              value={userWaterSaved + (waterSaved || 0)}
              startAt={1000}
              formatter={(val) => `${parseFloat(val).toFixed(0)}`}
            />
          </ValueNumber>
          <AddText>+{waterSaved}</AddText>
        </StatContainer>
      </Container>
    </TaskCompletionScreenContainer>
  );
}

export default TaskCompletionScreen;
