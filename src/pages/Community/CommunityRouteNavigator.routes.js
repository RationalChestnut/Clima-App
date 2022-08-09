import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import LeaderboardPage from "./Leaderboard/Leaderboard.page";
import AddFriendScreen from "../AddFriendScreen/AddFriend.screen";

const Stack = createStackNavigator();

function Community() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LeaderboardPage" component={LeaderboardPage} />
      <Stack.Screen name="AddFriend" component={AddFriendScreen} />
    </Stack.Navigator>
  );
}

export default Community;
