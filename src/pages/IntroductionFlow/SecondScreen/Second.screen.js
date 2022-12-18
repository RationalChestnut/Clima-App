import React, { useEffect, useContext, useState } from "react";
import { AuthenticationContext } from "../../../infrastructure/Authentication/AuthenticationContext";
import ActivitiesScreen from "../../ActivitiesScreen/ActivitiesScreen.navigator";
import {
  Container,
  PathCover,
  PathDialogue,
  PathMascot,
  Typer,
  WithoutFeedback,
} from "./SecondScreen.styles";

function SecondScreen({ route, navigation }) {
  const introText = [
    "This is the paths page! I have put in a few suggested paths for you to follow!",
    "These paths can help you target specific areas you want to reduce carbon emissions in!",
    "You can also swipe right to see tasks currently available!",
    "When your done checking things out, hit the your tree button to continue!",
  ];
  const [index, setIndex] = useState(0);
  const [swipeEnabled, setSwipeEnabled] = useState(false);
  const { setSafeAreaBackgroundColor } = useContext(AuthenticationContext);
  useEffect(() => {
    setSafeAreaBackgroundColor("rgba(0,0,0,0.33))");
    route.params.setAllowActivitiesNavigation(false);
  }, []);

  useEffect(() => {
    if (index === 4) {
      setSwipeEnabled(true);
      setSafeAreaBackgroundColor("white");
      route.params.setAllowTreeNavigation(true);
    }
  }, [index]);

  return (
    <WithoutFeedback
      onPress={() => {
        setIndex(index + 1);
      }}
    >
      <Container>
        <ActivitiesScreen swipeEnabled={swipeEnabled} />
        {index < 4 && (
          <>
            <PathCover />
            <PathMascot />
            <PathDialogue>
              <Typer>{introText[index]}</Typer>
            </PathDialogue>
          </>
        )}
      </Container>
    </WithoutFeedback>
  );
}

export default SecondScreen;
