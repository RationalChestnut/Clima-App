import React, { useState, useContext } from "react";
import { Platform } from "react-native";
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
  KeyboardAvoidingContainer,
  ErrorText,
} from "./Login.style";
import { AuthenticationContext } from "../../../infrastructure/Authentication/AuthenticationContext";

// eslint-disable-next-line react/prop-types
function Login({ navigation, email }) {
  const { onLogin } = useContext(AuthenticationContext);
  const [emailState, setEmailState] = useState(email || "");
  const [passwordState, setPasswordState] = useState();
  const [errorText, setErrorText] = useState("");
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;

  const validateEmail = (userEmail) =>
    String(userEmail)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

  const onHandleLogin = async () => {
    if (!validateEmail(email) && passwordState && passwordState.trim() !== "") {
      const login = await onLogin(emailState.trim(), passwordState.trim());
      if (login.type === "Error") {
        setErrorText(login.message);
      }
    } else {
      setErrorText("Please fill in all fields");
    }
  };

  return (
    <SignUpScreenContainer>
      <UpperBar>
        <Logo />
        <BrandText>Clima</BrandText>
      </UpperBar>
      <KeyboardAvoidingContainer
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
        contentContainerStyle={{ flex: 1 }}
      >
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
          {errorText !== "" && <ErrorText>{errorText}</ErrorText>}
          <Button onPress={onHandleLogin}>
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
      </KeyboardAvoidingContainer>
    </SignUpScreenContainer>
  );
}

export default Login;
