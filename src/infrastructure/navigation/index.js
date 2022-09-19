import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";

import MainNavigator from "./main.navigator";
import { AuthenticationContext } from "../Authentication/AuthenticationContext";
import UnAuthNavigator from "./unauth.navigator";
import SplashScreen from "../../pages/SplashScreen/SplashScreen.page";

function Navigation() {
  const { isAuthenticated, isLoading } = useContext(AuthenticationContext);
  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <MainNavigator styles={{ backgroundColor: "white" }} />
      ) : (
        <UnAuthNavigator />
      )}
    </NavigationContainer>
  );
}

export default Navigation;
