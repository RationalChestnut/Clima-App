import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import ActivityScreen from "../../pages/ActivityScreen/ActivityScreen.page";
import CommunityPage from "../../pages/Community/Community.page";
import Signup from "../../pages/AuthScreens/Signup/Signup.page";
import Home from "../../pages/Home/Home.page";

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
      <Tab.Screen name="Your Tree" component={ActivityScreen} />
      <Tab.Screen name="Community" component={CommunityPage} />
      <Tab.Screen name="Learn" component={Home} />
      <Tab.Screen name="Profile" component={Signup} />
    </Tab.Navigator>
  );
}

export default MainNavigator;
