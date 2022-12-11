/* eslint-disable no-nested-ternary */
import React, { useContext, useEffect, useState } from "react";
import {
  Cover,
  CoverThree,
  CoverTwo,
  Dialogue,
  DialogueTwo,
  FirstScreenContainer,
  Mascot,
  MascotThree,
  MascotTwo,
  Typer,
  WithoutFeedback,
} from "./FirstScreen.styles";
import Home from "../../Home/Home.page";
import { AuthenticationContext } from "../../../infrastructure/Authentication/AuthenticationContext";
import ActivityScreen from "../../ActivityScreen/ActivityScreen.page";
import { tasks } from "../../../data/tasks.data";
import PathScreen from "../../ActivitiesScreen/Path/Path.screen";
import PetScreen from "../../PetScreen/Pet.screen";
import LeaderboardPage from "../../Community/Leaderboard/Leaderboard.page";
import Profile from "../../User/Profile/Profile.page";

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
    "Here is the paths screen! This page helps you plan out your activities!",
    "Here is the pet's page! You can level me up by completing activities!",
    "Here is the leaderboard page! You can see how you compare to your friends!",
    "Finally, we have the profile page! Here you can see your stats and change your profile picture!",
    "Anyways, that's the gist of it! Have fun reducing emissions!",
  ];

  useEffect(() => {
    setSafeAreaBackgroundColor("rgba(0,0,0,0.33))");
  }, []);

  return (
    <WithoutFeedback
      onPress={() => {
        if (index === introText.length - 1) {
          route.params.setDoIntroFlow(false);
        } else {
          if (index + 1 === 3) {
            setCanClickOnTask(true);
          }
          setIndex(index + 1);
        }
      }}
    >
      <FirstScreenContainer>
        {index < 2 ? (
          <>
            <Mascot />
            <Dialogue>
              <Typer>{introText[index]}</Typer>
            </Dialogue>
          </>
        ) : index < 4 ? (
          <>
            <MascotTwo />
            <DialogueTwo>
              <Typer>{introText[index]}</Typer>
            </DialogueTwo>
          </>
        ) : index < 5 ? (
          <>
            <MascotThree />
            <Dialogue>
              <Typer>{introText[index]}</Typer>
            </Dialogue>
          </>
        ) : index < 7 ? (
          <>
            <Mascot />
            <Dialogue>
              <Typer>{introText[index]}</Typer>
            </Dialogue>
          </>
        ) : index === 7 ? (
          <>
            <MascotThree />
            <Dialogue>
              <Typer>{introText[index]}</Typer>
            </Dialogue>
          </>
        ) : index === 8 ? (
          <>
            <MascotThree />
            <Dialogue>
              <Typer>{introText[index]}</Typer>
            </Dialogue>
          </>
        ) : index === 9 ? (
          <>
            <MascotThree />
            <Dialogue>
              <Typer>{introText[index]}</Typer>
            </Dialogue>
          </>
        ) : null}

        {index < 2 ? (
          <Cover />
        ) : index < 4 ? (
          <>
            <CoverThree />
            <CoverTwo />
          </>
        ) : index < 6 ? (
          <Cover />
        ) : index < 7 ? (
          <Cover />
        ) : index === 7 ? (
          <Cover />
        ) : index === 8 ? (
          <Cover />
        ) : index === 9 ? (
          <Cover />
        ) : null}

        {index === 9 ? (
          <Profile />
        ) : index === 8 ? (
          <Profile />
        ) : index === 7 ? (
          <LeaderboardPage navigation={navigation} />
        ) : index === 6 ? (
          <PetScreen />
        ) : index === 5 ? (
          <PathScreen navigation={navigation} />
        ) : index === 4 ? (
          <ActivityScreen navigation={navigation} item={tasks[0]} isIntroScreen />
        ) : !didClickOnTask ? (
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
      </FirstScreenContainer>
    </WithoutFeedback>
  );
}

export default FirstScreen;
