import React from "react";
import { useWindowDimensions } from "react-native";
import {
  DescriptionText,
  OnboardImage,
  OnboardingItemContainer,
  SkipButton,
  SubTitleText,
  TitleText,
  SkipButtonText,
  BeginButton,
  BeginText,
} from "./OnboardingItem.styles";
import Paginator from "./Paginator.component";

function OnboardingItem({ item, scrollX, navigation }) {
  const { height, width } = useWindowDimensions();

  return (
    <OnboardingItemContainer backgroundColor={item.backgroundColor} height={height} width={width}>
      {item.id !== 3 && (
        <SkipButton onPress={() => navigation.navigate("Signup")}>
          <SkipButtonText>Skip</SkipButtonText>
        </SkipButton>
      )}

      <SubTitleText>{item.subtitle}</SubTitleText>
      <TitleText main={item.main}>{item.title}</TitleText>
      <OnboardImage source={item.image} nospacing={item.nospacing} />
      <DescriptionText>{item.description}</DescriptionText>
      {item.id === 3 && (
        <BeginButton onPress={() => navigation.navigate("Signup")}>
          <BeginText>Ready? Go!</BeginText>
        </BeginButton>
      )}
      <Paginator data={[0, 0, 0]} scrollX={scrollX} />
    </OnboardingItemContainer>
  );
}

export default OnboardingItem;
