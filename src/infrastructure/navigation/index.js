import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import MainNavigator from "./main.navigator";
import { AuthenticationContext } from "../Authentication/AuthenticationContext";
import UnAuthNavigator from "./unauth.navigator";

function Navigation() {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <MainNavigator /> : <UnAuthNavigator />}
    </NavigationContainer>
  );
}

export default Navigation;
