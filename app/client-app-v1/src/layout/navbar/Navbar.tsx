// src/layout/navbar/Navbar.tsx
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { useRouter, DrawerActions } from "expo-router";
import { theme } from "@/src/constants/theme";
import DrawerMenu from "./DrawerMenu";

export default function Navbar({ title }: { title: string }) {
  const router = useRouter();
  const [webDrawerOpen, setWebDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    if (Platform.OS === "web") {
      setWebDrawerOpen(!webDrawerOpen);
    } else {
      router.dispatch(DrawerActions.toggleDrawer());
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleDrawer} style={styles.hamburger}>
        <Text style={styles.hamburgerText}>☰</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>

      {/* Web Drawer Overlay */}
      {Platform.OS === "web" && webDrawerOpen && (
        <View style={styles.webDrawer}>
          <DrawerMenu closeDrawer={() => setWebDrawerOpen(false)} />
        </View>
      )}
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
    position: "relative",
    zIndex: 10,
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
  webDrawer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "80%",        // 80% of screen width
    height: "100vh",
    backgroundColor: theme.colors.surface, // solid color
    zIndex: 1000,
    paddingTop: 60,       // below navbar
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
});
