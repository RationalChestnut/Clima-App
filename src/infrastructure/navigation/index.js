/* eslint-disable no-nested-ternary */
import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useState, useEffect } from "react";

// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainNavigator from "./main.navigator";
import { AuthenticationContext } from "../Authentication/AuthenticationContext";
import UnAuthNavigator from "./unauth.navigator";
import SplashScreen from "../../pages/SplashScreen/SplashScreen.page";
import IntroNavigator from "./IntroductionFlow.navigator";

function Navigation() {
  const [doIntroFlow, setDoIntroFlow] = useState(false);
  const { isAuthenticated, isLoading } = useContext(AuthenticationContext);

  const getDoIntroFlowData = async () => {
    try {
      const value = await AsyncStorage.getItem("do-intro-flow");
      if (value !== null) {
        setDoIntroFlow(false);
      } else {
        setDoIntroFlow(true);
        await AsyncStorage.setItem("do-intro-flow", "true");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDoIntroFlowData();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      {isAuthenticated && true ? (
        <IntroNavigator setDoIntroFlow={setDoIntroFlow} />
      ) : isAuthenticated ? (
        <MainNavigator />
      ) : (
        <UnAuthNavigator />
      )}
    </NavigationContainer>
  );
}

export default Navigation;
