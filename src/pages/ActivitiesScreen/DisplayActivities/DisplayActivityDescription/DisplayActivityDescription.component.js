import React from "react";
import "firebase/storage";
import {
  ActivityImage,
  DescriptionContainer,
  DisplayActivityDescriptionContainer,
  ExpText,
  Title,
} from "./DisplayActivityDescription.styles";

function DisplayActivityDescription({ item, navigation }) {
  const handleNavigation = () => {
    navigation.navigate("Activity", { destination: item.type, item });
  };

  return (
    <DisplayActivityDescriptionContainer onPress={handleNavigation}>
      <ActivityImage source={item.image} />
      <DescriptionContainer>
        <Title>{item.title}</Title>
        <ExpText>+{item.exp} exp</ExpText>
      </DescriptionContainer>
    </DisplayActivityDescriptionContainer>
  );
}

export default DisplayActivityDescription;
