import React, { useState } from "react";
import { Platform } from "react-native";
import {
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
  KeyboardAvoidingContainer,
} from "./ResetPassword.styles";
import BackArrow from "../../../components/BackArrow.component";
import { resetEmail } from "../../../infrastructure/Authentication/authentication.service";

// eslint-disable-next-line react/prop-types
function Login({ navigation }) {
  const [emailState, setEmailState] = useState("");
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
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

      <KeyboardAvoidingContainer
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
        contentContainerStyle={{ flex: 1 }}
      >
        <ImageContainer />

        <FormContainer>
          <Input
            label="Password"
            onChangeText={(text) => setEmailState(text)}
            secureTextEntry
            textContentType="password"
          />
          <Button onPress={handleReset}>
            <ButtonText>Request verification email</ButtonText>
            <RightArrow color="white" />
          </Button>
        </FormContainer>
      </KeyboardAvoidingContainer>
    </SignUpScreenContainer>
  );
}

export default Login;
