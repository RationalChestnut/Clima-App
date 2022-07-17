import React from "react";
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
} from "./Login.style";

function Login() {
  return (
    <SignUpScreenContainer>
      <UpperBar>
        <Logo />
        <BrandText>Clima</BrandText>
      </UpperBar>
      <ImageContainer />
      <FormContainer>
        <Input label="Email" />
        <Input label="Password" />
        <Button>
          <ButtonText>Login</ButtonText>
          <RightArrow color="white" />
        </Button>
        <ButtonSecondary>
          <ButtonTextSecondary>Signup</ButtonTextSecondary>
          <RightArrow color="#0FA958" />
        </ButtonSecondary>
        <ContinueWithText>or continue with</ContinueWithText>
        <AuthContainer>
          <FacebookSignIn>
            <Facebook />
            <ThirdPartySignInTextFacebook>Facebook</ThirdPartySignInTextFacebook>
          </FacebookSignIn>
          <GoogleSignIn>
            <Google />
            <ThirdPartySignInTextGoogle>Google</ThirdPartySignInTextGoogle>
          </GoogleSignIn>
        </AuthContainer>
      </FormContainer>
    </SignUpScreenContainer>
  );
}

export default Login;
