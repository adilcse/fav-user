import { Provider, useSelector } from "react-redux";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import React from "react";
import { PersistGate } from 'redux-persist/integration/react';
import { PaperProvider } from 'react-native-paper';
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import store, {persistor} from "../redux/store";
import LoginScreen from "./login";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {!loaded && <SplashScreen />}
      {loaded && (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
          <PaperProvider>
          <RootLayoutNav />
          </PaperProvider>
          </PersistGate>
        </Provider>
      )}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const isLoggedIn = useSelector((state: any) => state?.login?.isLoggedIn);
  if (!isLoggedIn) {
  return (
    <LoginScreen />
    )
  }
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="home" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
