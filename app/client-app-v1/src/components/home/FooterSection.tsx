import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FooterSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Keep Reading, Keep Growing 🌱</Text>
      <Text style={styles.text}>
        Every book you read is a step towards becoming a better version of yourself.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Explore More Books</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 20,
  },
  button: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: '#0ea5e9',
    borderRadius: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default FooterSection;