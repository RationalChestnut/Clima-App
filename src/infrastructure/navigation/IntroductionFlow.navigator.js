import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import FirstScreen from "../../pages/IntroductionFlow/FirstScreen/First.screen";
import ActivitiesScreen from "../../pages/ActivitiesScreen/ActivitiesScreen.navigator";
import PetScreen from "../../pages/PetScreen/Pet.screen";
import User from "../../pages/User/UserRouteNavigator";
import Community from "../../pages/Community/CommunityRouteNavigator.routes";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => <FontAwesome name={iconName} color={color} size={size} />,
    tabBarActiveTintColor: "#3B887C",
    tabBarInactiveTintColor: "rgba(0,0,0,0.25))",
    headerShown: false,
    tabBarStyle: { backgroundColor: "transparent" },
  };
};
const TAB_ICON = {
  Home: "home",
  "Your Tree": "tree",
  Activities: "flag",
  Leaderboard: "trophy",
  Learn: "book",
  User: "user",
};

function IntroNavigator({ setDoIntroFlow }) {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Home" component={FirstScreen} initialParams={{ setDoIntroFlow }} />
      <Tab.Screen name="Activities" component={ActivitiesScreen} />
      <Tab.Screen name="Your Tree" component={PetScreen} />
      <Tab.Screen name="Leaderboard" component={Community} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
}

export default IntroNavigator;
