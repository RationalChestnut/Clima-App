import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MainNavigator from "./main.navigator";

function Navigation() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
