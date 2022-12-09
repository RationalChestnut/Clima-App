import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../pages/AuthScreens/Login/Login.page";
import Signup from "../../pages/AuthScreens/Signup/Signup.page";
import ResetPassword from "../../pages/AuthScreens/ResetPassword/ResetPassword.page";
import IntroNavigator from "./IntroductionFlow.navigator";

const Stack = createNativeStackNavigator();

function UnAuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Reset" component={ResetPassword} />
      <Stack.Screen name="IntroFlow" component={IntroNavigator} />
    </Stack.Navigator>
  );
}

export default UnAuthNavigator;
