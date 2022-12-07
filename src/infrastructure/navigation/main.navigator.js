import React, { useContext, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import ActivitiesScreen from "../../pages/ActivitiesScreen/ActivitiesScreen.navigator";
import PetScreen from "../../pages/PetScreen/Pet.screen";
import User from "../../pages/User/UserRouteNavigator";
import Community from "../../pages/Community/CommunityRouteNavigator.routes";
import HomeScreen from "../../pages/Home/HomeScreenNavigator.navigator";
import { AuthenticationContext } from "../Authentication/AuthenticationContext";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home",
  "Your Tree": "tree",
  Activities: "flag",
  Leaderboard: "trophy",
  Learn: "book",
  User: "user",
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
  const { setSafeAreaBackgroundColor } = useContext(AuthenticationContext);

  useEffect(() => {
    setSafeAreaBackgroundColor("white");
  }, []);

  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Activities" component={ActivitiesScreen} />
      <Tab.Screen name="Your Tree" component={PetScreen} />
      <Tab.Screen name="Leaderboard" component={Community} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
}
export default MainNavigator;
