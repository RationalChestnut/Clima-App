import React from "react";
import { Gradient } from "../ExploreTasks.styles";
import { SliderComponentContainer, SliderTouchable, TitleText } from "./SliderComponent.styles";

// eslint-disable-next-line react/prop-types
function SliderComponent({ image, title, navigation }) {
  return (
    <SliderTouchable
      onPress={() => navigation.navigate("DisplayListOfActivities", { type: title })}
    >
      <SliderComponentContainer source={image}>
        <Gradient>
          <TitleText>{title}</TitleText>
        </Gradient>
      </SliderComponentContainer>
    </SliderTouchable>
  );
}

export default SliderComponent;
