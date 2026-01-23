// app/index.tsx
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.title}>📚 BookQubit</Text>
        <Text style={styles.subtitle}>Welcome to Your Digital Library</Text>
        <Text style={styles.description}>
          Discover, read, and organize your favorite books all in one place.
        </Text>
      </View>

      <View style={styles.features}>
        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>📖</Text>
          <Text style={styles.featureTitle}>Browse Books</Text>
          <Text style={styles.featureText}>
            Explore thousands of books across all genres
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>📚</Text>
          <Text style={styles.featureTitle}>My Library</Text>
          <Text style={styles.featureText}>
            Organize your personal book collection
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>🔍</Text>
          <Text style={styles.featureTitle}>Search</Text>
          <Text style={styles.featureText}>
            Find exactly what you're looking for
          </Text>
        </View>
      </View>

      <View style={styles.cta}>
        <Link href="/books" style={styles.ctaButton}>
          <Text style={styles.ctaText}>Get Started</Text>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  hero: {
    padding: 32,
    backgroundColor: "#e0f2fe",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#0369a1",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 22,
    color: "#0c4a6e",
    marginBottom: 16,
    textAlign: "center",
    fontWeight: "600",
  },
  description: {
    fontSize: 16,
    color: "#0c4a6e",
    textAlign: "center",
    lineHeight: 24,
    maxWidth: 600,
  },
  features: {
    padding: 24,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 16,
  },
  featureCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    width: 300,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  featureIcon: {
    fontSize: 40,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#0f172a",
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
    lineHeight: 20,
  },
  cta: {
    padding: 32,
    alignItems: "center",
  },
  ctaButton: {
    backgroundColor: "#0369a1",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 6,
  },
  ctaText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});