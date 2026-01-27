import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const stats = [
  { label: 'Total Books', value: '10,000+', icon: 'library' },
  { label: 'Active Readers', value: '50,000+', icon: 'people' },
  { label: 'Minutes Read', value: '5M+', icon: 'time' },
  { label: 'Categories', value: '50+', icon: 'grid' },
];

const StatsGrid = () => {
  return (
    <View style={styles.container}>
      {stats.map((stat, index) => (
        <View key={index} style={styles.statCard}>
          <View style={styles.iconContainer}>
            <Ionicons name={stat.icon as any} size={24} color="#0ea5e9" />
          </View>
          <Text style={styles.value}>{stat.value}</Text>
          <Text style={styles.label}>{stat.label}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 16,
  },
  statCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#f1f5f9',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f0f9ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  value: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
  },
});

export default StatsGrid;