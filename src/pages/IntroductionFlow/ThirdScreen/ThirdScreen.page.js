import React, { useEffect, useContext, useState } from "react";
import { AuthenticationContext } from "../../../infrastructure/Authentication/AuthenticationContext";
import PetScreen from "../../PetScreen/Pet.screen";
import { Container, Cover, Dialogue, Mascot, Typer, WithoutFeedback } from "./ThirdScreen.styles";

function ThirdScreen({ route }) {
  const introText = ["Hey! This is where I live!!!", "You can level me up by completing tasks!!"];
  const [index, setIndex] = useState(0);
  const { setSafeAreaBackgroundColor } = useContext(AuthenticationContext);
  useEffect(() => {
    setSafeAreaBackgroundColor("rgba(0,0,0,0.33))");
    route.params.setAllowTreeNavigation(false);
  }, []);

  useEffect(() => {
    if (index === 1) {
      route.params.setAllowLeaderboardNavigation(true);
    }
    if (index === 2) {
      setSafeAreaBackgroundColor("white");
    }
  }, [index]);

  return (
    <WithoutFeedback
      onPress={() => {
        setIndex(index + 1);
      }}
    >
      <Container>
        <PetScreen />
        {index < 2 && (
          <>
            <Cover />
            <Mascot />
            <Dialogue>
              <Typer>{introText[index]}</Typer>
            </Dialogue>
          </>
        )}
      </Container>
    </WithoutFeedback>
  );
}

export default ThirdScreen;
