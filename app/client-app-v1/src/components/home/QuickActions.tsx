import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const quickActions = [
  { icon: 'search', label: 'Search Books', color: '#0ea5e9', bgColor: '#f0f9ff' },
  { icon: 'bookmark', label: 'Bookmarks', color: '#8b5cf6', bgColor: '#f5f3ff' },
  { icon: 'download', label: 'Downloads', color: '#10b981', bgColor: '#f0fdf4' },
  { icon: 'time', label: 'History', color: '#f59e0b', bgColor: '#fef3c7' },
];

const QuickActions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Actions</Text>
      <View style={styles.grid}>
        {quickActions.map((action, index) => (
          <TouchableOpacity key={index} style={styles.actionCard}>
            <View style={[styles.icon, { backgroundColor: action.bgColor }]}>
              <Ionicons name={action.icon as any} size={24} color={action.color} />
            </View>
            <Text style={styles.label}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  actionCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f1f5f9',
    gap: 12,
  },
  icon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0f172a',
    textAlign: 'center',
  },
});

export default QuickActions;