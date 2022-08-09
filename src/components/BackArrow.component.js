import React from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const BackArrowComponent = styled(AntDesign).attrs({
  name: "arrowleft",
  size: 28,
})``;

function BackArrow({ color, navigation, style }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      style={style}
    >
      <BackArrowComponent color={color} />
    </TouchableOpacity>
  );
}

export default BackArrow;
