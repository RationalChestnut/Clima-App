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
} from "./Signup.style";

function Signup() {
  return (
    <SignUpScreenContainer>
      <UpperBar>
        <Logo />
        <BrandText>Clima</BrandText>
      </UpperBar>
      <ImageContainer />
      <FormContainer>
        <Input label="Name" />
        <Input label="Email" />
        <Input label="Password" />
        <Button>
          <ButtonText>Signup</ButtonText>
          <RightArrow color="white" />
        </Button>
        <ButtonSecondary>
          <ButtonTextSecondary>Login</ButtonTextSecondary>
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

export default Signup;
