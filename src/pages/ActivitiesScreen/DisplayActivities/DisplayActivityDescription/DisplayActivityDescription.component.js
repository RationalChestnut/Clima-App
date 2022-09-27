import React, { useState, useEffect } from "react";
import "firebase/storage";
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
      const storageRef = storage.ref();
      const imageRef = storageRef.child(`${item.image}`);
      const validImage = await imageRef.getDownloadURL(imageRef);
      setImageURL(validImage);
    } catch (err) {
      console.log(err);
    }
  };

  const handleNavigation = () => {
    navigation.navigate("Activity", { item, imageURL, destination: "All Activities Screen" });
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
