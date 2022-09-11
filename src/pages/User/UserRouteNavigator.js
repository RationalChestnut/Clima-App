import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./Profile/Profile.page";
import Settings from "./Settings/Settings.page";

const Stack = createStackNavigator();

function Community() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default Community;
