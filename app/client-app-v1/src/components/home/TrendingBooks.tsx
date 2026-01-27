import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import SectionHeader from '../common/SectionHeader';

const trendingBooks = [
  { title: 'The Alchemist', author: 'Paulo Coelho', trend: '🔥 Trending' },
  { title: '1984', author: 'George Orwell', trend: '📈 Popular' },
  { title: 'Sapiens', author: 'Yuval Noah Harari', trend: '🎯 Top Pick' },
  { title: 'Dune', author: 'Frank Herbert', trend: '🌟 New' },
];

const TrendingBooks = () => {
  return (
    <View style={styles.container}>
      <SectionHeader 
        title="🔥 Trending Now" 
        actionText="View All"
        onActionPress={() => console.log('View All Trending')}
      />
      <View style={styles.trendingContainer}>
        {trendingBooks.map((book, index) => (
          <TouchableOpacity key={index} style={styles.trendingCard}>
            <View style={styles.trendingBookInfo}>
              <View style={styles.bookNumber}>
                <Text style={styles.bookNumberText}>{index + 1}</Text>
              </View>
              <View style={styles.trendingTextContainer}>
                <Text style={styles.trendingBookTitle} numberOfLines={1}>
                  {book.title}
                </Text>
                <Text style={styles.trendingBookAuthor}>{book.author}</Text>
              </View>
            </View>
            <View style={styles.trendingBadge}>
              <Text style={styles.trendingBadgeText}>{book.trend}</Text>
            </View>
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
  trendingContainer: {
    gap: 12,
  },
  trendingCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  trendingBookInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  bookNumber: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  bookNumberText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0ea5e9',
  },
  trendingTextContainer: {
    flex: 1,
  },
  trendingBookTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 2,
  },
  trendingBookAuthor: {
    fontSize: 14,
    color: '#64748b',
  },
  trendingBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: '#fef3c7',
  },
  trendingBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#d97706',
  },
});

export default TrendingBooks;