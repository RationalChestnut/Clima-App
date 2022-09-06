import React, { useState, useEffect } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { MaterialCommunityIcons, Ionicons, FontAwesome } from "@expo/vector-icons";
import {
  ActivityImage,
  DescriptionContainer,
  DisplayActivityDescriptionContainer,
  IconsContainer,
  ReducedText,
  Title,
  Reduced,
} from "./DisplayActivityDescription.styles";
import { storage } from "../../../../infrastructure/Storage/storage.service";

function DisplayActivityDescription({ item }) {
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

  useEffect(() => {
    getImage();
  }, []);

  return (
    <DisplayActivityDescriptionContainer>
      <ActivityImage source={{ uri: imageURL || null }} />
      <DescriptionContainer>
        <Title>{item.title}</Title>
        <IconsContainer>
          <Reduced>
            <MaterialCommunityIcons name="molecule-co2" size={26} color="#6b6b6b" />
            <ReducedText>-{item.carbonReduced}kg</ReducedText>
          </Reduced>
          <Reduced>
            <Ionicons name="ios-water" size={24} color="#477eed" />
            <ReducedText>-{item.waterSaved}L</ReducedText>
          </Reduced>
          <Reduced>
            <FontAwesome name="trash-o" size={20} color="black" />
            <ReducedText>-{item.wasteRemoved}kg</ReducedText>
          </Reduced>
        </IconsContainer>
      </DescriptionContainer>
    </DisplayActivityDescriptionContainer>
  );
}

export default DisplayActivityDescription;
