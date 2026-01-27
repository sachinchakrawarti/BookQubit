import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { useRouter, DrawerActions, useDrawerStatus } from "expo-router";
import { theme } from "@/src/constants/theme";

export default function Navbar({ title }: { title: string }) {
  const router = useRouter();
  const drawerStatus = useDrawerStatus(); // "open", "closed", or undefined on web

  const toggleDrawer = () => {
    if (Platform.OS !== "web") {
      // only dispatch drawer on mobile
      router.dispatch(DrawerActions.toggleDrawer());
    } else {
      console.log("Drawer toggle clicked on web (not supported automatically)");
      // You can implement a web sidebar toggle here if needed
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDrawer} style={styles.hamburger}>
        <Text style={styles.hamburgerText}>☰</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: theme.colors.primary,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  hamburger: {
    marginRight: 16,
  },
  hamburgerText: {
    fontSize: 24,
    color: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
