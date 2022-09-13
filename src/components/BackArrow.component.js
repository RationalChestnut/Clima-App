import React from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

const BackArrowComponent = styled(AntDesign).attrs({
  name: "arrowleft",
  size: 28,
})``;

function BackArrow({ color, navigation, style, icon, iconStyle }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      style={style}
    >
      {icon ? <Text style={iconStyle}>{icon}</Text> : <BackArrowComponent color={color} />}
    </TouchableOpacity>
  );
}

export default BackArrow;
