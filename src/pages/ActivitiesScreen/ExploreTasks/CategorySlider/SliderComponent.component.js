import React, { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { Gradient } from "../ExploreTasks.styles";
import { SliderComponentContainer, TitleText } from "./SliderComponent.styles";
import { storage } from "../../../../infrastructure/Storage/storage.service";
// eslint-disable-next-line react/prop-types
function SliderComponent({ image, title }) {
  const [imageURL, setImageURL] = useState("");
  console.log("Loaded", title);
  const getImage = async () => {
    try {
      const imageRef = ref(storage, `/${image}`);
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
    <SliderComponentContainer source={{ uri: imageURL || null }}>
      <Gradient>
        <TitleText>{title}</TitleText>
      </Gradient>
    </SliderComponentContainer>
  );
}

export default SliderComponent;
