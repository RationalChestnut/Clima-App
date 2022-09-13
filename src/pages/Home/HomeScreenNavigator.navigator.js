import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home.page";
import TaskCompletionScreen from "../TaskCompletionScreen/TaskCompletion.screen";

const PathStack = createStackNavigator();

function HomeScreen() {
  return (
    <PathStack.Navigator screenOptions={{ headerShown: false }}>
      <PathStack.Screen name="HomeScreen" component={Home} />
      <PathStack.Screen name="Completion" component={TaskCompletionScreen} />
    </PathStack.Navigator>
  );
}

export default HomeScreen;
