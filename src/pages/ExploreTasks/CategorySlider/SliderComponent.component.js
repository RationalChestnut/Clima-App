import React from "react";
import { Gradient } from "../ExploreTasks.styles";
import {
  SliderComponentContainer,
  TitleText,
  Banner,
  BannerText,
  BannerContainer,
} from "./SliderComponent.styles";

// eslint-disable-next-line react/prop-types
function SliderComponent({ image, title }) {
  return (
    <SliderComponentContainer source={image}>
      <Gradient>
        <TitleText>{title}</TitleText>
        <BannerContainer>
          <Banner>
            <BannerText>165 actions</BannerText>
          </Banner>
          <Banner>
            <BannerText>+200XP</BannerText>
          </Banner>
        </BannerContainer>
      </Gradient>
    </SliderComponentContainer>
  );
}

export default SliderComponent;
