import React, { useContext, useState, useEffect } from "react";
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
  ErrorText,
  PrivacyContainer,
  LogoView,
} from "./Signup.style";
import { AuthenticationContext } from "../../../infrastructure/Authentication/AuthenticationContext";

// eslint-disable-next-line react/prop-types
function Signup({ email, navigation }) {
  const { onRegister } = useContext(AuthenticationContext);
  const [errorText, setErrorText] = useState("");
  const [nameState, setNameState] = useState("");
  const [emailState, setEmailState] = useState(email || "");
  const [passwordState, setPasswordState] = useState(null);
  const { setSafeAreaBackgroundColor } = useContext(AuthenticationContext);
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;

  const validateEmail = (userEmail) =>
    String(userEmail)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

  const onHandleRegister = async () => {
    if (
      nameState &&
      nameState.trim() !== "" &&
      !validateEmail(email) &&
      passwordState &&
      passwordState.trim() !== ""
    ) {
      const signup = await onRegister(nameState.trim(), emailState.trim(), passwordState.trim());
      if (signup.type === "Error") {
        setErrorText(signup.message);
      }
    } else {
      setErrorText("Please fill in all fields");
    }
  };

  useEffect(() => {
    setSafeAreaBackgroundColor("#3A887C");
  }, []);

  return (
    <SignUpScreenContainer>
      <KeyboardAvoidingContainer
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
        contentContainerStyle={{ flex: 1 }}
      >
        <UpperBar>
          <LogoView>
            <Logo />
            <BrandText>Clima</BrandText>
          </LogoView>

          <ImageContainer />
        </UpperBar>
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
          {errorText !== "" && <ErrorText>{errorText}</ErrorText>}

          <Button onPress={onHandleRegister}>
            <ButtonText>Signup</ButtonText>
            <RightArrow color="white" />
          </Button>
          <ButtonSecondary onPress={() => navigation.navigate("Login", { email: emailState })}>
            <ButtonTextSecondary>Login</ButtonTextSecondary>
            <RightArrow color="#0FA958" />
          </ButtonSecondary>
          <PrivacyContainer>
            <PrivacyPolicy>By signing up, I agree to the</PrivacyPolicy>
            <BrowserLink
              onPress={() => {
                WebBrowser.openBrowserAsync("https://clima-privacy-policy.netlify.app/");
              }}
            >
              <BrowserLinkText> privacy policy</BrowserLinkText>
            </BrowserLink>
          </PrivacyContainer>
        </FormContainer>
      </KeyboardAvoidingContainer>
    </SignUpScreenContainer>
  );
}

export default Signup;
