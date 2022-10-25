import React from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

const BackArrowComponent = styled(AntDesign).attrs({
  name: "arrowleft",
  size: 28,
})``;

function BackArrow({
  color,
  navigation,
  style,
  icon,
  iconStyle,
  destination,
  pathNumber,
  sectionNumber,
  pathItem,
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        if (destination === "HomeScreen") {
          navigation.navigate("All Activities Screen");
          navigation.navigate("Home");
        } else if (destination === "Path") {
          navigation.goBack();
          navigation.navigate("All Activities Screen");
          navigation.navigate("DisplayActivityInfoScreen", {
            pathNumber,
            sectionNumber,
            pathItem,
            navigation,
          });
        } else if (destination === "PathScreen") {
          navigation.navigate("PathScreen");
        } else if (destination) {
          navigation.navigate("DisplayListOfActivities", { type: destination });
        } else {
          navigation.goBack();
        }
      }}
      style={style}
    >
      {icon ? <Text style={iconStyle}>{icon}</Text> : <BackArrowComponent color={color} />}
    </TouchableOpacity>
  );
}

export default BackArrow;
