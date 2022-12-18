import React, { useEffect, useContext, useState } from "react";
import { AuthenticationContext } from "../../../infrastructure/Authentication/AuthenticationContext";
import LeaderboardPage from "../../Community/Leaderboard/Leaderboard.page";
import { Container, Cover, Dialogue, Mascot, Typer, WithoutFeedback } from "./FourthScreen.styles";

function FourthScreen({ route }) {
  const introText = [
    "Finally, we have the leaderboard page!",
    "Here, you can invite friends and compete with them!",
    "Anyways, hope you enjoyed our little tour :)",
    "See you around!!!!",
  ];
  const [index, setIndex] = useState(0);
  const { setSafeAreaBackgroundColor } = useContext(AuthenticationContext);
  useEffect(() => {
    setSafeAreaBackgroundColor("rgba(0,0,0,0.33))");
    route.params.setAllowLeaderboardNavigation(false);
  }, []);

  useEffect(() => {
    if (index === 4) {
      route.params.setDoIntroFlow(false);
    }
  }, [index]);

  return (
    <WithoutFeedback
      onPress={() => {
        setIndex(index + 1);
      }}
    >
      <Container>
        <LeaderboardPage />
        <Cover />
        {index < 4 && (
          <>
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

export default FourthScreen;
