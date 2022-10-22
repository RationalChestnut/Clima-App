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
  Message,
} from "./ResetPassword.styles";
import BackArrow from "../../../components/BackArrow.component";
import { resetEmail } from "../../../infrastructure/Authentication/authentication.service";

// eslint-disable-next-line react/prop-types
function Login({ navigation }) {
  const [emailState, setEmailState] = useState("");
  const [message, setMessage] = useState({ type: "error", message: "" });
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;

  const handleReset = () => {
    resetEmail(emailState.trim())
      .then(() => {
        setMessage({ type: "success", message: "Email sent, please check your spam folder" });
      })
      .catch((err) => {
        setMessage({ type: "error", message: err.message });
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
            label="Email"
            onChangeText={(text) => setEmailState(text)}
            textContentType="emailAddress"
          />
          {message.message !== "" && (
            <Message style={{ color: message.type === "success" ? "#4BB543" : "#ff0033" }}>
              {message.message}
            </Message>
          )}
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
