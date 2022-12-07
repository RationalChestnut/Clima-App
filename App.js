import React, { useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import {
  useFonts as useNunito,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { useFonts as useHind, Hind_400Regular } from "@expo-google-fonts/hind";
import { ThemeProvider } from "styled-components/native";
import Toast from "react-native-toast-message";
import Navigation from "./src/infrastructure/navigation";
import theme from "./src/infrastructure/theme";
import { AuthenticationContextProvider } from "./src/infrastructure/Authentication/AuthenticationContext";

export default function App() {
  const [safeAreaBackgroundColor, setSafeAreaBackgroundColor] = useState("white");
  const [nunitoLoaded] = useNunito({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  const [hindLoaded] = useHind({
    Hind_400Regular,
  });

  if (!nunitoLoaded || !hindLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: safeAreaBackgroundColor }}
          edges={["right", "top", "left"]}
        >
          <AuthenticationContextProvider setSafeAreaBackgroundColor={setSafeAreaBackgroundColor}>
            <Navigation />
            <Toast />
          </AuthenticationContextProvider>
        </SafeAreaView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
