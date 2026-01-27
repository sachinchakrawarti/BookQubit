// src/screens/LibraryScreen.tsx
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Navbar from "@/src/layout/navbar/Navbar";
import { theme } from "@/src/constants/theme";

export default function LibraryScreen() {
  return (
    <View style={styles.container}>
      {/* Navbar with Hamburger / Drawer button */}
      <Navbar title="Library" />

      {/* Main content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.heading}>Your Library</Text>

        {/* Example library sections */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recently Added</Text>
          <Text style={styles.item}>Book 1</Text>
          <Text style={styles.item}>Book 2</Text>
          <Text style={styles.item}>Book 3</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Favorites</Text>
          <Text style={styles.item}>Book A</Text>
          <Text style={styles.item}>Book B</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Collections</Text>
          <Text style={styles.item}>Sci-Fi Collection</Text>
          <Text style={styles.item}>Mystery Collection</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  scrollContainer: {
    padding: theme.spacing.md,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: theme.spacing.md,
    color: theme.colors.text,
  },
  section: {
    marginBottom: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: theme.spacing.sm,
    color: theme.colors.primary,
  },
  item: {
    fontSize: 16,
    marginBottom: theme.spacing.xs,
    color: theme.colors.text,
  },
});
