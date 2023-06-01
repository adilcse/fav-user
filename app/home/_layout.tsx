import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { IconButton, Badge } from "react-native-paper";
import React from "react";
import {
  Pressable,
  useColorScheme,
  StyleSheet,
  Image,
  View,
  Text,
} from "react-native";
import Colors from "../../constants/Colors";
import { useSelector } from "react-redux";
const appLogo = require("../../assets/images/app-logo.png");

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return (
    <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const favUsers = useSelector((state: any) => state.favorite?.users);
  const badgeCount = favUsers?.length || 0;
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          header: () => (
            <View style={styles.imageContainer}>
              <Image source={appLogo} style={styles.image} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Favorite",
          tabBarIcon: ({ color }) => (
            <View>
              <IconButton icon={"star"} iconColor={color} size={30} />
              {badgeCount > 0 && (
                <Badge
                  visible={true}
                  size={18}
                  style={{
                    position: "absolute",
                    top: 10,
                    right: -5,
                    backgroundColor: "red",
                  }}
                >
                  {badgeCount}
                </Badge>
              )}
            </View>
          ),
          header: () => (
            <View style={styles.imageContainer}>
              <Image source={appLogo} style={styles.image} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 45,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "white",
  },
  image: {
    width: 50,
    height: 50,
  },
  badge: {
    position: "relative",
    top: -30,
    right: -30,
  },
});
