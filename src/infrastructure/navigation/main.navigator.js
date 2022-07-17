import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import Home from "../../pages/Home/Home.page";
import Learn from "../../pages/Learn/Learn.page";
import Profile from "../../pages/Profile/Profile.page";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home",
  "Your Tree": "tree",
  Community: "group",
  Learn: "book",
  Profile: "user",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => <FontAwesome name={iconName} color={color} size={size} />,
    tabBarActiveTintColor: "#3B887C",
    tabBarInactiveTintColor: "#AEAEAE",
    headerShown: false,
  };
};

function MainNavigator() {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Your Tree" component={Home} />
      <Tab.Screen name="Community" component={Home} />
      <Tab.Screen name="Learn" component={Learn} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default MainNavigator;
