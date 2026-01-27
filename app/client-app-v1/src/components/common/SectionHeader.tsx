import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface SectionHeaderProps {
  title: string;
  actionText?: string;
  onActionPress?: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  actionText, 
  onActionPress 
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {actionText && (
        <TouchableOpacity onPress={onActionPress}>
          <Text style={styles.actionText}>{actionText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
  },
  actionText: {
    fontSize: 14,
    color: '#0ea5e9',
    fontWeight: '500',
  },
});

export default SectionHeader;