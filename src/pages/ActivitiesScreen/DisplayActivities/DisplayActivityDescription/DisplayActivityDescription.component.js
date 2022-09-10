import React, { useState, useEffect } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import {
  ActivityImage,
  AddButton,
  DescriptionContainer,
  DisplayActivityDescriptionContainer,
  ExpText,
  SaveText,
  Title,
} from "./DisplayActivityDescription.styles";
import { storage } from "../../../../infrastructure/Storage/storage.service";

function DisplayActivityDescription({ item, navigation }) {
  const [imageURL, setImageURL] = useState("");
  const getImage = async () => {
    try {
      const imageRef = ref(storage, `/${item.image}`);
      const validImage = await getDownloadURL(imageRef);
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
      <ActivityImage source={{ uri: imageURL || null }}>
        <AddButton>
          <SaveText>+</SaveText>
        </AddButton>
      </ActivityImage>
      <DescriptionContainer>
        <Title>{item.title}</Title>
        <ExpText>+{item.exp} exp</ExpText>
      </DescriptionContainer>
    </DisplayActivityDescriptionContainer>
  );
}

export default DisplayActivityDescription;
