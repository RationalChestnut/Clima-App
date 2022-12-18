import React, { useEffect, useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import {
  useFonts as useNunito,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { useFonts as useHind, Hind_400Regular } from "@expo-google-fonts/hind";
import { ThemeProvider } from "styled-components/native";
import Toast from "react-native-toast-message";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Navigation from "./src/infrastructure/navigation";
import theme from "./src/infrastructure/theme";
import { AuthenticationContextProvider } from "./src/infrastructure/Authentication/AuthenticationContext";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [safeAreaBackgroundColor, setSafeAreaBackgroundColor] = useState("white");
  const [nunitoLoaded] = useNunito({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  const [hindLoaded] = useHind({
    Hind_400Regular,
  });
  async function requestPermissionsAsync() {
    const reqNotifications = await Notifications.requestPermissionsAsync({
      ios: { allowAlert: true, allowBadge: true, allowSound: true, allowAnnouncements: true },
    });

    return reqNotifications.granted;
  }

  const allowsNotificationsAsync = async () => {
    const settings = await Notifications.getPermissionsAsync();
    if (!settings.granted) {
      requestPermissionsAsync();
    }
    return (
      settings.granted || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
    );
  };

  const scheduleNotification = async () => {
    const hasPushNotificationPermissionGranted = await allowsNotificationsAsync();
    if (hasPushNotificationPermissionGranted) {
      Notifications.cancelAllScheduledNotificationsAsync();
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Time to make the planet cleaner!🌎",
          body: "Let's make a difference🤗",
        },
        trigger: {
          repeats: true,
          hour: 13,
          minute: 20,
        },
      });
    }
  };

  useEffect(() => {
    scheduleNotification();
  }, []);

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
