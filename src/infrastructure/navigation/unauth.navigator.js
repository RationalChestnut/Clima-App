import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../pages/AuthScreens/Login/Login.page";
import Signup from "../../pages/AuthScreens/Signup/Signup.page";

const Stack = createNativeStackNavigator();

function UnAuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default UnAuthNavigator;
