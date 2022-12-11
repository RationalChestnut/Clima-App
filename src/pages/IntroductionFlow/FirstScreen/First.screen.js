import React, { useContext, useEffect, useState } from "react";
import {
  Cover,
  Dialogue,
  FirstScreenContainer,
  Mascot,
  Typer,
  WithoutFeedback,
} from "./FirstScreen.styles";
import Home from "../../Home/Home.page";
import { AuthenticationContext } from "../../../infrastructure/Authentication/AuthenticationContext";

function FirstScreen({ route }) {
  const { setSafeAreaBackgroundColor } = useContext(AuthenticationContext);

  const [index, setIndex] = useState(0);
  const introText = [
    "Hello! Welcome to Clima!",
    "Clima is an app to help you reduce carbon emissions!",
    "Well, let's get this show on the road!",
    "I suggest you play around with the app a bit to get a feel for it!",
    "Hope you enjoy!!!",
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
          setIndex(index + 1);
        }
      }}
    >
      <FirstScreenContainer>
        <Mascot />
        <Dialogue>
          <Typer>{introText[index]}</Typer>
        </Dialogue>

        <Cover />
        <Home />
      </FirstScreenContainer>
    </WithoutFeedback>
  );
}

export default FirstScreen;
