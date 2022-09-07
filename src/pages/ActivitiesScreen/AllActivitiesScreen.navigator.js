import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ExploreTasks from "./ExploreTasks/ExploreTasks.page";
import DisplayActivitiesPage from "./DisplayActivities/DisplayActivites.page";
import ActivityScreen from "../ActivityScreen/ActivityScreen.page";

const Stack = createStackNavigator();

function AllActivitiesScreenNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="All Activities Screen" component={ExploreTasks} />
      <Stack.Screen name="DisplayListOfActivities" component={DisplayActivitiesPage} />
      <Stack.Screen name="Activity" component={ActivityScreen} />
    </Stack.Navigator>
  );
}

export default AllActivitiesScreenNavigator;
