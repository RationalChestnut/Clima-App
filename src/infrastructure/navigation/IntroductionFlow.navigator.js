import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import FirstScreen from "../../pages/IntroductionFlow/FirstScreen/First.screen";
import User from "../../pages/User/UserRouteNavigator";
import SecondScreen from "../../pages/IntroductionFlow/SecondScreen/Second.screen";
import ThirdScreen from "../../pages/IntroductionFlow/ThirdScreen/ThirdScreen.page";
import FourthScreen from "../../pages/IntroductionFlow/FourthScreen/FourthScreen.page";

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
  const [allowHomeNavigation, setAllowHomeNavigation] = useState(true);
  const [allowActivitiesNavigation, setAllowActivitiesNavigation] = useState(false);
  const [allowTreeNavigation, setAllowTreeNavigation] = useState(false);
  const [allowLeaderboardNavigation, setAllowLeaderboardNavigation] = useState(false);

  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen
        name="Home"
        component={FirstScreen}
        initialParams={{
          setDoIntroFlow,
          setAllowHomeNavigation,
          setAllowActivitiesNavigation,
        }}
        listeners={
          !allowHomeNavigation && {
            tabPress: (e) => {
              e.preventDefault();
            },
          }
        }
      />
      <Tab.Screen
        name="Activities"
        component={SecondScreen}
        listeners={
          !allowActivitiesNavigation && {
            tabPress: (e) => {
              e.preventDefault();
            },
          }
        }
        initialParams={{
          setDoIntroFlow,
          setAllowTreeNavigation,
          setAllowActivitiesNavigation,
        }}
        options={
          allowActivitiesNavigation && {
            tabBarBadge: "",
            tabBarBadgeStyle: {
              minWidth: 14,
              minHeight: 14,
              maxWidth: 14,
              maxHeight: 14,
              borderRadius: 7,
            },
          }
        }
      />
      <Tab.Screen
        name="Your Tree"
        component={ThirdScreen}
        listeners={
          !allowTreeNavigation && {
            tabPress: (e) => {
              e.preventDefault();
            },
          }
        }
        initialParams={{
          setDoIntroFlow,
          setAllowTreeNavigation,
          setAllowLeaderboardNavigation,
        }}
        options={
          allowTreeNavigation && {
            tabBarBadge: "",
            tabBarBadgeStyle: {
              minWidth: 14,
              minHeight: 14,
              maxWidth: 14,
              maxHeight: 14,
              borderRadius: 7,
            },
          }
        }
      />
      <Tab.Screen
        name="Leaderboard"
        component={FourthScreen}
        listeners={
          !allowLeaderboardNavigation && {
            tabPress: (e) => {
              e.preventDefault();
            },
          }
        }
        initialParams={{
          setDoIntroFlow,
          setAllowLeaderboardNavigation,
        }}
        options={
          allowLeaderboardNavigation && {
            tabBarBadge: "",
            tabBarBadgeStyle: {
              minWidth: 14,
              minHeight: 14,
              maxWidth: 14,
              maxHeight: 14,
              borderRadius: 7,
            },
          }
        }
      />
      <Tab.Screen
        name="User"
        component={User}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default IntroNavigator;
