import React from "react";
import { View } from "react-native";
import Navbar from "@/src/layout/navbar/Navbar";
import { theme } from "@/src/constants/theme";
import Homepage from "@/src/components/Homepage"; // <-- corrected import

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.surface }}>
      <Navbar title="Home" />

      <View style={{ flex: 1 }}>
        <Homepage />
      </View>
    </View>
  );
}
