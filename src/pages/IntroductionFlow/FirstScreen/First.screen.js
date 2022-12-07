import React from "react";
import { FirstScreenContainer, MainImage } from "./FirstScreen.styles";
import firstIntroScreen from "../../../../assets/images/firstIntroScreen.png";

function FirstScreen() {
  return (
    <FirstScreenContainer>
      <MainImage source={firstIntroScreen} />
    </FirstScreenContainer>
  );
}

export default FirstScreen;
