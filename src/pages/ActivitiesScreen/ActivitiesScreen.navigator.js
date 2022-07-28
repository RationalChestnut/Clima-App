import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ExploreTasks from "./ExploreTasks/ExploreTasks.page";
import PathScreen from "./Path/Path.screen";

const Tab = createMaterialTopTabNavigator();

function ActivitiesScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Path" component={PathScreen} />
      <Tab.Screen name="All Activities" component={ExploreTasks} />
    </Tab.Navigator>
  );
}

export default ActivitiesScreen;
