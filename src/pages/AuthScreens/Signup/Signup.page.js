import React, { useContext, useState } from "react";
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
  ContinueWithText,
  ThirdPartySignInTextFacebook,
  FacebookSignIn,
  GoogleSignIn,
  AuthContainer,
  ThirdPartySignInTextGoogle,
  Facebook,
  Google,
} from "./Signup.style";
import { AuthenticationContext } from "../../../infrastructure/Authentication/AuthenticationContext";

// eslint-disable-next-line react/prop-types
function Signup({ email, navigation }) {
  const { onRegister, googleSignIn } = useContext(AuthenticationContext);
  const [nameState, setNameState] = useState("");
  const [emailState, setEmailState] = useState(email || "");
  const [passwordState, setPasswordState] = useState(null);
  return (
    <SignUpScreenContainer>
      <UpperBar>
        <Logo />
        <BrandText>Clima</BrandText>
      </UpperBar>
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
        <Button onPress={() => onRegister(emailState, passwordState)}>
          <ButtonText>Signup</ButtonText>
          <RightArrow color="white" />
        </Button>
        <ButtonSecondary onPress={() => navigation.navigate("Login", { email: emailState })}>
          <ButtonTextSecondary>Login</ButtonTextSecondary>
          <RightArrow color="#0FA958" />
        </ButtonSecondary>
        <ContinueWithText>or continue with</ContinueWithText>
        <AuthContainer>
          <FacebookSignIn>
            <Facebook />
            <ThirdPartySignInTextFacebook>Facebook</ThirdPartySignInTextFacebook>
          </FacebookSignIn>
          <GoogleSignIn onPress={() => googleSignIn()}>
            <Google />
            <ThirdPartySignInTextGoogle>Google</ThirdPartySignInTextGoogle>
          </GoogleSignIn>
        </AuthContainer>
      </FormContainer>
    </SignUpScreenContainer>
  );
}

export default Signup;
