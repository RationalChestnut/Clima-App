import React, { useState, useEffect } from "react";
import {
  ActivityImage,
  DescriptionContainer,
  DisplayActivityDescriptionContainer,
  ExpText,
  Title,
} from "./DisplayActivityDescription.styles";
import { storage } from "../../../../infrastructure/Storage/storage.service";

function DisplayActivityDescription({ item, navigation }) {
  const [imageURL, setImageURL] = useState("");
  const getImage = async () => {
    try {
      const imageRef = storage.ref();
      const imageRefImage = imageRef.child(`/${item.image}`);
      const validImage = await imageRefImage.getDownloadURL();
      setImageURL(validImage);
    } catch (err) {
      console.log(err);
    }
  };

  const handleNavigation = () => {
    navigation.navigate("Activity", { item, imageURL });
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <DisplayActivityDescriptionContainer onPress={handleNavigation}>
      <ActivityImage source={{ uri: imageURL || null }} />
      <DescriptionContainer>
        <Title>{item.title}</Title>
        <ExpText>+{item.exp} exp</ExpText>
      </DescriptionContainer>
    </DisplayActivityDescriptionContainer>
  );
}

export default DisplayActivityDescription;
