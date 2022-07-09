import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import { useFonts as useNunito, Nunito_400Regular } from "@expo-google-fonts/nunito";
import { useFonts as useHind, Hind_400Regular } from "@expo-google-fonts/hind";
import { ThemeProvider } from "styled-components/native";
import Navigation from "./src/infrastructure/navigation";
import theme from "./src/infrastructure/theme";

export default function App() {
  const [nunitoLoaded] = useNunito({
    Nunito_400Regular,
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
        <SafeAreaView style={{ flex: 1 }} edges={["right", "top", "left"]}>
          <Navigation />
        </SafeAreaView>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
