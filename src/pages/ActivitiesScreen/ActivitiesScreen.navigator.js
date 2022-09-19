import React from "react";
import { Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PathScreen from "./Path/Path.screen";
import DisplayActivityInfo from "./DisplayActivityInfo/DisplayActivityInfo.page";
import AllActivitiesScreenNavigator from "./AllActivitiesScreen.navigator";
import TaskCompletionScreen from "../TaskCompletionScreen/TaskCompletion.screen";

const Tab = createMaterialTopTabNavigator();
const PathStack = createNativeStackNavigator();

function PathStackScreen() {
  return (
    <PathStack.Navigator
      initialLayout={{ width: Dimensions.get("window").width }}
      screenOptions={{ headerShown: false }}
    >
      <PathStack.Screen name="PathScreen" component={PathScreen} />
      <PathStack.Screen name="DisplayActivityInfoScreen" component={DisplayActivityInfo} />
      <PathStack.Screen name="CompletionScreen" component={TaskCompletionScreen} />
    </PathStack.Navigator>
  );
}

function ActivitiesScreen() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarIndicatorStyle: { backgroundColor: "#0FA958" } }}
    >
      <Tab.Screen name="Path" component={PathStackScreen} />
      <Tab.Screen name="All Activities" component={AllActivitiesScreenNavigator} />
    </Tab.Navigator>
  );
}

export default ActivitiesScreen;
