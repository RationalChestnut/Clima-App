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
  SubBrandText,
} from "./ResetPassword.styles";
import { AuthenticationContext } from "../../../infrastructure/Authentication/AuthenticationContext";
import BackArrow from "../../../components/BackArrow.component";
import { resetEmail } from "../../../infrastructure/Authentication/authentication.service";

// eslint-disable-next-line react/prop-types
function Login({ navigation }) {
  const [emailState, setEmailState] = useState("");

  const handleReset = () => {
    resetEmail(emailState.trim())
      .then(() => {
        console.log("Request email sent");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SignUpScreenContainer>
      <UpperBar>
        <BackArrow navigation={navigation} color="white" />
        <BrandText>Forgot Password?</BrandText>
        <SubBrandText>Enter your email address to reset your password</SubBrandText>
      </UpperBar>
      <ImageContainer />
      <FormContainer>
        <Input
          label="Email"
          onChangeText={(text) => setEmailState(text)}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <Button onPress={handleReset}>
          <ButtonText>Request verification email</ButtonText>
          <RightArrow color="white" />
        </Button>
      </FormContainer>
    </SignUpScreenContainer>
  );
}

export default Login;
