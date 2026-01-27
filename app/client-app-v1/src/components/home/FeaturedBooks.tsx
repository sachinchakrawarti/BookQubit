import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import SectionHeader from '../common/SectionHeader';

const { width } = Dimensions.get('window');

const featuredBooks = [
  {
    id: '1',
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self-Help',
    rating: 4.8,
    pages: 320,
    description: 'Tiny Changes, Remarkable Results',
    color: '#0ea5e9',
  },
  {
    id: '2',
    title: 'Deep Work',
    author: 'Cal Newport',
    category: 'Productivity',
    rating: 4.7,
    pages: 304,
    description: 'Rules for Focused Success',
    color: '#8b5cf6',
  },
  {
    id: '3',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    category: 'Finance',
    rating: 4.6,
    pages: 256,
    description: 'Timeless lessons on wealth',
    color: '#10b981',
  },
];

const FeaturedBooks = () => {
  const renderBookCard = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.bookCard}>
      <LinearGradient
        colors={[`${item.color}15`, `${item.color}08`]}
        style={styles.bookGradient}
      >
        <View style={styles.bookHeader}>
          <View style={[styles.bookIconContainer, { backgroundColor: `${item.color}20` }]}>
            <FontAwesome5 name="book-open" size={24} color={item.color} />
          </View>
          <View style={styles.bookStats}>
            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={14} color="#f59e0b" />
              <Text style={styles.ratingText}>{item.rating}</Text>
            </View>
            <Text style={styles.pagesText}>{item.pages} pages</Text>
          </View>
        </View>
        
        <View style={styles.bookContent}>
          <Text style={styles.bookTitle} numberOfLines={2}>{item.title}</Text>
          <Text style={styles.bookAuthor}>by {item.author}</Text>
          <Text style={styles.bookCategory}>{item.category}</Text>
          <Text style={styles.bookDescription} numberOfLines={2}>{item.description}</Text>
        </View>
        
        <View style={styles.bookActions}>
          <TouchableOpacity style={styles.readButton}>
            <Text style={[styles.readButtonText, { color: item.color }]}>Read Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.wishlistButton, { borderColor: item.color }]}>
            <Ionicons name="heart-outline" size={18} color={item.color} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SectionHeader 
        title="Featured Books" 
        actionText="View All"
        onActionPress={() => console.log('View All Books')}
      />
      <FlatList
        data={featuredBooks}
        renderItem={renderBookCard}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.booksList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 32,
  },
  booksList: {
    gap: 16,
    paddingRight: 20,
  },
  bookCard: {
    width: 280,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#f1f5f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  bookGradient: {
    padding: 20,
  },
  bookHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  bookIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookStats: {
    alignItems: 'flex-end',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0f172a',
  },
  pagesText: {
    fontSize: 12,
    color: '#64748b',
  },
  bookContent: {
    marginBottom: 20,
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
    lineHeight: 28,
  },
  bookAuthor: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  bookCategory: {
    fontSize: 12,
    fontWeight: '500',
    color: '#0ea5e9',
    marginBottom: 12,
  },
  bookDescription: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },
  bookActions: {
    flexDirection: 'row',
    gap: 12,
  },
  readButton: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    alignItems: 'center',
  },
  readButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  wishlistButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FeaturedBooks;