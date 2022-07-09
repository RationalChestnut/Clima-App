import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/infrastructure/navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={["right", "top", "left"]}>
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
