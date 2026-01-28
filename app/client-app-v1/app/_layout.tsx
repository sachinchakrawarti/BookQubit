// app/_layout.tsx
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import AnimatedSplash from "@/src/components/splash/AnimatedSplash";

export default function RootLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Example: show splash for 3 seconds
    const timer = setTimeout(() => setLoading(false), 12000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Show animated splash while loading
    return <AnimatedSplash />;
  }

  // Main app stack
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
