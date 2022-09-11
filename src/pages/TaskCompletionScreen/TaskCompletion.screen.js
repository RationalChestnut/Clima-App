import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import AnimateNumber from "react-native-animate-number";

import {
  AddText,
  Cannon,
  CompletionText,
  Container,
  LifeTimeStats,
  StatContainer,
  StatText,
  TaskCompletionScreenContainer,
  ValueNumber,
} from "./TaskCompletion.styles";

function TaskCompletionScreen({ navigation, route }) {
  const { exp, userExp } = route.params;
  const [userEXP, setUserEXP] = useState(userExp);
  const [EXP, setEXP] = useState(exp);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setUserEXP(exp + userExp);
      setEXP(exp);
      setShow(true);
    }, 3000);
  }, []);

  // Current exp and amount increased
  return (
    <TaskCompletionScreenContainer>
      <CompletionText>Awesome job! {"\n"}One step closer to a better world</CompletionText>
      <Cannon origin={{ x: Dimensions.get("window").width - 10, y: 0 }} autoStartDelay={200} />
      <Cannon origin={{ x: 0, y: 0 }} fadeOut />
      <Container>
        <LifeTimeStats>Lifetime Stats</LifeTimeStats>
        <StatContainer>
          <StatText>EXP:</StatText>
          {show ? (
            <ValueNumber>
              <AnimateNumber value={userEXP} formatter={(val) => `${parseFloat(val).toFixed(0)}`} />
            </ValueNumber>
          ) : (
            <ValueNumber>{userExp}</ValueNumber>
          )}
          {show ? (
            <AddText>
              +
              <AnimateNumber value={EXP} formatter={(val) => `${parseFloat(val).toFixed(0)}`} />
            </AddText>
          ) : (
            <AddText>+{exp}</AddText>
          )}
        </StatContainer>
      </Container>
    </TaskCompletionScreenContainer>
  );
}

export default TaskCompletionScreen;
