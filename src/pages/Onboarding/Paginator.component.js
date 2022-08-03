import React from "react";
import { Animated, useWindowDimensions, StyleSheet } from "react-native";
import { PaginatorContainer, DotContainer } from "./Paginator.styles";

function Paginator({ data, scrollX }) {
  const { width } = useWindowDimensions();
  return (
    <PaginatorContainer>
      <DotContainer>
        {data.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10, 30, 10],
            extrapolate: "clamp",
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          return (
            <Animated.View key={i.toString()} style={[styles.dot, { width: dotWidth, opacity }]} />
          );
        })}
      </DotContainer>
    </PaginatorContainer>
  );
}

const styles = StyleSheet.create({
  dot: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: "white",
    marginHorizontal: 8,
  },
});

export default Paginator;
