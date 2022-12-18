/* eslint-disable no-nested-ternary */
import React, { useContext, useEffect, useState } from "react";
import {
  ActivityDialogue,
  Cover,
  CoverActivities,
  CoverFour,
  CoverThree,
  CoverTwo,
  Dialogue,
  DialogueTwo,
  FirstScreenContainer,
  Mascot,
  MascotActivites,
  MascotThree,
  MascotTwo,
  Typer,
  UpperCoverFour,
  WithoutFeedback,
} from "./FirstScreen.styles";
import Home from "../../Home/Home.page";
import { AuthenticationContext } from "../../../infrastructure/Authentication/AuthenticationContext";
import ActivityScreen from "../../ActivityScreen/ActivityScreen.page";
import { tasks } from "../../../data/tasks.data";

function FirstScreen({ route, navigation }) {
  const { setSafeAreaBackgroundColor } = useContext(AuthenticationContext);
  const [canClickOnTask, setCanClickOnTask] = useState(false);
  const [didClickOnTask, setDidClickOnTask] = useState(false);
  const [index, setIndex] = useState(0);
  const introText = [
    "Hello! Welcome to Clima!",
    "Clima is an app to help you reduce carbon emissions!",
    "Here are your habits, these are the things you do regularly.",
    "Try clicking on one!",
    "This is an activity! You can complete it or save it to your habits!",
    "Let's head over to the activities page next!",
  ];

  useEffect(() => {
    setSafeAreaBackgroundColor("rgba(0,0,0,0.33))");
  }, []);

  useEffect(() => {
    if (index === 5) {
      route.params.setAllowActivitiesNavigation(true);
      route.params.setAllowHomeNavigation(false);
      setSafeAreaBackgroundColor("white");
    }
  }, [index]);

  return (
    <WithoutFeedback
      onPress={() => {
        if (index !== introText.length - 1) {
          if (index + 1 === 3) {
            setCanClickOnTask(true);
          }
          if (index < 5) {
            setIndex(index + 1);
          }
        }
      }}
    >
      <FirstScreenContainer>
        {index < 4 ? (
          <Home
            isIntroScreen
            canClickOnTask={canClickOnTask}
            navigation={navigation}
            setDidClickOnTask={setDidClickOnTask}
            setIndex={setIndex}
            index={index}
          />
        ) : (
          <ActivityScreen navigation={navigation} item={tasks[0]} isIntroScreen />
        )}
        {index < 2 ? (
          <>
            <Cover />
            <Mascot />
            <Dialogue>
              <Typer>{introText[index]}</Typer>
            </Dialogue>
          </>
        ) : index < 3 ? (
          <>
            <CoverThree />
            <CoverTwo />
            <MascotTwo />
            <DialogueTwo>
              <Typer>{introText[index]}</Typer>
            </DialogueTwo>
          </>
        ) : index === 3 ? (
          <>
            <UpperCoverFour />
            <CoverFour />
            <MascotTwo />
            <DialogueTwo>
              <Typer>{introText[index]}</Typer>
            </DialogueTwo>
          </>
        ) : index === 4 ? (
          <>
            <Cover />
            <MascotThree />
            <Dialogue>
              <Typer>{introText[index]}</Typer>
            </Dialogue>
          </>
        ) : (
          <>
            <MascotActivites />
            <CoverActivities />
            <ActivityDialogue>
              <Typer>{introText[index]}</Typer>
            </ActivityDialogue>
          </>
        )}
      </FirstScreenContainer>
    </WithoutFeedback>
  );
}

export default FirstScreen;
