// app/library.tsx - Library page
import { View, Text, StyleSheet } from 'react-native';
import Navbar from '@/src/components/navbar/Navbar';

export default function LibraryScreen() {
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.content}>
        <Text style={styles.title}>My Library</Text>
        <Text style={styles.subtitle}>Your personal book collection</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#64748b',
  },
});