// app/books.tsx - Books page
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Navbar from '@/src/components/navbar/Navbar';

export default function BooksScreen() {
  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Browse Books</Text>
        <Text style={styles.subtitle}>Discover your next favorite read</Text>
        {/* Books list would go here */}
      </ScrollView>
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
    marginBottom: 24,
  },
});