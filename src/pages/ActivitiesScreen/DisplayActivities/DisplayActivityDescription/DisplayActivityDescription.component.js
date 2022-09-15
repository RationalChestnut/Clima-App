import React, { useState, useEffect } from "react";
<<<<<<< HEAD
=======
// import { getDownloadURL, ref } from "firebase/storage";
import "firebase/storage";
>>>>>>> 8052843c554bb73dceac9341fe1b30172ee0ed1f
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
<<<<<<< HEAD
      const imageRef = storage.ref();
      const imageRefImage = imageRef.child(`/${item.image}`);
      const validImage = await imageRefImage.getDownloadURL();
=======
      const storageRef = storage.ref();
      const imageRef = storageRef.child(`${item.image}`);
      const validImage = await imageRef.getDownloadURL(imageRef);
>>>>>>> 8052843c554bb73dceac9341fe1b30172ee0ed1f
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
