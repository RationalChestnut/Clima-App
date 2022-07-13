import React from "react";
import { View, Text } from "react-native";

import Tasks from "../../components/Tasks/Tasks";

function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Tasks />
      <Text>Content</Text>
    </View>
  );
}

export default Home;
