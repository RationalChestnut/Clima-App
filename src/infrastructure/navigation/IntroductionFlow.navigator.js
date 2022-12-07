import React, { useContext, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "../../pages/IntroductionFlow/FirstScreen/First.screen";
import { AuthenticationContext } from "../Authentication/AuthenticationContext";

const Stack = createNativeStackNavigator();

function IntroNavigator() {
  const { setSafeAreaBackgroundColor } = useContext(AuthenticationContext);

  useEffect(() => {
    setSafeAreaBackgroundColor("#3A887C");
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen title="First" component={FirstScreen} />
    </Stack.Navigator>
  );
}

export default IntroNavigator;
