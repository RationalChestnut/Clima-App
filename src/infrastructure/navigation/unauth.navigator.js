import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "../../pages/AuthScreens/Login/Login.page";
import Signup from "../../pages/AuthScreens/Signup/Signup.page";
import OnboardingPage from "../../pages/Onboarding/Onboarding.page";
import SplashScreen from "../../pages/SplashScreen/SplashScreen.page";

const Stack = createNativeStackNavigator();

function UnAuthNavigator() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("clima-already-launched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("clima-already-launched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch == null) {
    return <SplashScreen />;
  }
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isFirstLaunch ? <Stack.Screen name="Onboard" component={OnboardingPage} /> : null}
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default UnAuthNavigator;
