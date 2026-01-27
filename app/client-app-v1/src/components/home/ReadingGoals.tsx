import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const ReadingGoals = () => {
  return (
    <LinearGradient
      colors={['#0ea5e9', '#38bdf8']}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.icon}>
            <Ionicons name="trophy" size={28} color="#ffffff" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Daily Reading Goal</Text>
            <Text style={styles.subtitle}>You're 75% closer to your goal</Text>
          </View>
        </View>
        
        <View style={styles.progress}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '75%' }]} />
          </View>
          <View style={styles.progressTextContainer}>
            <Text style={styles.progressText}>45/60 minutes</Text>
            <Text style={styles.progressPercentage}>75%</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue Reading</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 32,
    borderRadius: 24,
    padding: 24,
  },
  content: {
    gap: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  icon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  progress: {
    gap: 12,
  },
  progressBar: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 4,
  },
  progressTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  progressPercentage: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },
  button: {
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0ea5e9',
  },
});

export default ReadingGoals;