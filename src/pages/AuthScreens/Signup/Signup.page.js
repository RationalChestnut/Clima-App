import React, { useContext, useState } from "react";
import { Platform } from "react-native";
import * as WebBrowser from "expo-web-browser";
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
  KeyboardAvoidingContainer,
  PrivacyPolicy,
  BrowserLink,
  BrowserLinkText,
} from "./Signup.style";
import { AuthenticationContext } from "../../../infrastructure/Authentication/AuthenticationContext";

// eslint-disable-next-line react/prop-types
function Signup({ email, navigation }) {
  const { onRegister } = useContext(AuthenticationContext);
  const [nameState, setNameState] = useState("");
  const [emailState, setEmailState] = useState(email || "");
  const [passwordState, setPasswordState] = useState(null);
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;

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
          <Input label="Name" onChangeText={(text) => setNameState(text)} />
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
          <Button onPress={() => onRegister(nameState, emailState, passwordState)}>
            <ButtonText>Signup</ButtonText>
            <RightArrow color="white" />
          </Button>
          <ButtonSecondary onPress={() => navigation.navigate("Login", { email: emailState })}>
            <ButtonTextSecondary>Login</ButtonTextSecondary>
            <RightArrow color="#0FA958" />
          </ButtonSecondary>
          <PrivacyPolicy>
            By signing up, I agree to the
            <BrowserLink
              onPress={() => {
                WebBrowser.openBrowserAsync("https://clima-privacy-policy.netlify.app/");
              }}
            >
              <BrowserLinkText> privacy policy</BrowserLinkText>
            </BrowserLink>
          </PrivacyPolicy>
        </FormContainer>
      </KeyboardAvoidingContainer>
    </SignUpScreenContainer>
  );
}

export default Signup;
