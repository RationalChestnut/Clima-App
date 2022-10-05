import React, { useState, useContext } from "react";
import {
  Logo,
  SignUpScreenContainer,
  UpperBar,
  BrandText,
  ImageContainer,
  FormContainer,
  Input,
  Button,
  ButtonText,
  RightArrow,
  ButtonSecondary,
  ButtonTextSecondary,
  ForgotPassword,
  ForgotPasswordText,
} from "./Login.style";
import { AuthenticationContext } from "../../../infrastructure/Authentication/AuthenticationContext";

// eslint-disable-next-line react/prop-types
function Login({ navigation, email }) {
  const { onLogin } = useContext(AuthenticationContext);
  const [emailState, setEmailState] = useState(email || "");
  const [passwordState, setPasswordState] = useState();

  return (
    <SignUpScreenContainer>
      <UpperBar>
        <Logo />
        <BrandText>Clima</BrandText>
      </UpperBar>
      <ImageContainer />
      <FormContainer>
        <Input
          label="Email"
          onChangeText={(text) => setEmailState(text)}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <Input
          label="Password"
          onChangeText={(text) => setPasswordState(text)}
          secureTextEntry
          textContentType="password"
        />
        <Button onPress={() => onLogin(emailState, passwordState)}>
          <ButtonText>Login</ButtonText>
          <RightArrow color="white" />
        </Button>
        <ButtonSecondary onPress={() => navigation.navigate("Signup", { email: emailState })}>
          <ButtonTextSecondary>Signup</ButtonTextSecondary>
          <RightArrow color="#0FA958" />
        </ButtonSecondary>
        <ForgotPassword onPress={() => navigation.navigate("Reset")}>
          <ForgotPasswordText>Reset password</ForgotPasswordText>
        </ForgotPassword>
      </FormContainer>
    </SignUpScreenContainer>
  );
}

export default Login;
