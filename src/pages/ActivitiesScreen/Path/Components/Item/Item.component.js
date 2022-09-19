/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { ItemContainer, CourseTypeText, Title } from "./Item.styled";
import IconComponent from "../Icon/Icon.component";
import { storage } from "../../../../../infrastructure/Storage/storage.service";

function Item({ course, navigation, pathNumber, sectionNumber }) {
  const [image, setImage] = useState("");

  const loadImage = async () => {
    try {
      const imageRef = storage.ref();
      const imageRefImage = imageRef.child(`/${course.image}`);
      const validImage = await imageRefImage.getDownloadURL();
      setImage(validImage);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadImage();
  }, []);

  return (
    <ItemContainer
      onPress={() =>
        navigation.navigate("DisplayActivityInfoScreen", {
          pathItem: course,
          navigation,
          image,
          pathNumber,
          sectionNumber,
        })
      }
    >
      <IconComponent image={image || null} />
      <CourseTypeText>{course.type}</CourseTypeText>
      <Title>{course.title}</Title>
    </ItemContainer>
  );
}
export default Item;
