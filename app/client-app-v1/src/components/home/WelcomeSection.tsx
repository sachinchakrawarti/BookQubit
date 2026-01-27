import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to BookQubit! 📚</Text>
      <Text style={styles.subtitle}>
        Your personal library in the digital world. Discover, read, and grow.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 32,
    backgroundColor: '#f8fafc',
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#64748b',
    lineHeight: 24,
  },
});

export default WelcomeSection;