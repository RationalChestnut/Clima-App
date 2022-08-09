import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import ActivitiesScreen from "../../pages/ActivitiesScreen/ActivitiesScreen.navigator";
import Home from "../../pages/Home/Home.page";
import PetScreen from "../../pages/PetScreen/Pet.screen";
import Profile from "../../pages/Profile/Profile.page";
import Community from "../../pages/Community/CommunityRouteNavigator.routes";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home",
  "Your Tree": "tree",
  Activities: "flag",
  Leaderboard: "trophy",
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
      <Tab.Screen name="Activities" component={ActivitiesScreen} />
      <Tab.Screen name="Your Tree" component={PetScreen} />
      <Tab.Screen name="Leaderboard" component={Community} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
export default MainNavigator;
