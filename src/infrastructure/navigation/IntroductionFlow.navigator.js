import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "../../pages/IntroductionFlow/FirstScreen/First.screen";

const Stack = createNativeStackNavigator();

function IntroNavigator({ setDoIntroFlow }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="First" component={FirstScreen} initialParams={{ setDoIntroFlow }} />
    </Stack.Navigator>
  );
}

export default IntroNavigator;
