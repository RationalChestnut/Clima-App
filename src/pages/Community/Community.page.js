import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LeaderboardPage from "./Leaderboard/Leaderboard.page";
import PostsPage from "./Posts/Posts.page";

const Tab = createMaterialTopTabNavigator();

const createScreenOptions = () => ({
  tabBarActiveTintColor: "#3876C4",
  tabBarInactiveTintColor: "#AEAEAE",
});

function CommunityPage() {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Posts" component={PostsPage} />
      <Tab.Screen name="Leaderboard" component={LeaderboardPage} />
    </Tab.Navigator>
  );
}

export default CommunityPage;
