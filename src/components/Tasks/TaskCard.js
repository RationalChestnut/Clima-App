import React, { useContext } from "react";
import { View, Text, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { ThemeContext } from "styled-components";

const Container = styled(View)`
  flex: 1;
  width: 200px;
  height: 130px;
  border-radius: ${(props) => props.theme.sizes.sm}px;
`;

const BackgroundImage = styled(ImageBackground)`
  flex: 1;
`;

const TextContainer = styled(View)`
  margin: ${(props) => props.theme.sizes.sm}px;
  align-items: center;
`;

const Title = styled(Text)`
  color: white;
  font-size: ${(props) => props.theme.fontSizes.title};
`;

const ExpText = styled(Text)`
  color: white;
  font-family: ${(props) => props.theme.fonts.monospace};
  font-size: ${(props) => props.theme.fontSizes.body};
  margin-top: ${(props) => props.theme.sizes.xs}px;
  align-self: flex-end;
`;

function TaskCard({ task = {} }) {
  const { title, exp, image } = task;
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <BackgroundImage
        source={{ uri: image }}
        resizeMode="cover"
        imageStyle={{ borderRadius: theme.sizes.sm }}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.7)"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: "100%",
            justifyContent: "flex-end",
            borderRadius: theme.sizes.sm,
          }}
        >
          <TextContainer>
            <Title>{title}</Title>
            <ExpText>+ {exp} EXP</ExpText>
          </TextContainer>
        </LinearGradient>
      </BackgroundImage>
    </Container>
  );
}

export default TaskCard;
