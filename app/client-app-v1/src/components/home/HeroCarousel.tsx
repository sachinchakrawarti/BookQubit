import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import books, { Book } from '../../data/BooksData';

const { width } = Dimensions.get('window');

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Get first 4 books for carousel
  const featuredBooks = books.slice(0, 4);

  const renderHeroCard = ({ item, index }: { item: Book; index: number }) => {
    // Determine color based on category
    const getBookColor = (category: string) => {
      const colorMap: { [key: string]: string } = {
        'Self-Help': '#0ea5e9',
        'Productivity': '#8b5cf6',
        'Finance': '#10b981',
        'Psychology': '#f59e0b',
        'Atheism & Religion': '#ef4444',
        'History & Anthropology': '#8b5cf6',
        'default': '#0ea5e9'
      };
      return colorMap[category] || colorMap.default;
    };

    const bookColor = getBookColor(item.category);
    const progress = Math.floor(Math.random() * 30) + 40; // Random progress between 40-70%

    return (
      <View style={styles.heroCard}>
        {/* Background Pattern */}
        <View style={styles.patternOverlay}>
          <View style={[styles.circlePattern, { backgroundColor: `${bookColor}20` }]} />
        </View>
        
        <LinearGradient
          colors={[bookColor, `${bookColor}DD`]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientBackground}
        >
          <View style={styles.heroContent}>
            {/* Left Side: Book Info */}
            <View style={styles.bookInfoSection}>
              <View style={[styles.categoryBadge, { backgroundColor: 'rgba(255, 255, 255, 0.2)' }]}>
                <Text style={styles.categoryText}>{item.category}</Text>
              </View>
              
              <Text style={styles.bookTitle} numberOfLines={2}>
                {item.title}
              </Text>
              
              <Text style={styles.bookAuthor}>by {item.author}</Text>
              
              <View style={styles.metaContainer}>
                <View style={styles.ratingContainer}>
                  <View style={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <Ionicons 
                        key={i} 
                        name="star" 
                        size={14} 
                        color={i < Math.floor(item.rating) ? '#FFD700' : 'rgba(255, 255, 255, 0.3)'} 
                      />
                    ))}
                  </View>
                  <Text style={styles.ratingText}>{item.rating}/5.0</Text>
                </View>
              </View>
              
              <Text style={styles.tagline} numberOfLines={2}>
                {item.description}
              </Text>
              
              {/* Progress Section */}
              <View style={styles.progressSection}>
                <View style={styles.progressHeader}>
                  <Text style={styles.progressLabel}>Reading Progress</Text>
                  <Text style={styles.progressPercentage}>{progress}%</Text>
                </View>
                <View style={styles.progressBar}>
                  <View 
                    style={[
                      styles.progressFill,
                      { width: `${progress}%` }
                    ]} 
                  />
                </View>
                <Text style={styles.pagesText}>{item.pageCount || 'N/A'} pages</Text>
              </View>
            </View>
            
            {/* Right Side: Book Cover Image */}
            <View style={styles.rightSection}>
              {/* Book Cover with Image */}
              <View style={styles.bookCoverContainer}>
                <View style={styles.bookCoverWrapper}>
                  <Image
                    source={{ uri: item.imageUrl }}
                    style={styles.bookCoverImage}
                    resizeMode="cover"
                    onError={(error) => console.log('Image loading error:', error.nativeEvent.error)}
                  />
                  <View style={styles.bookCoverOverlay} />
                  <View style={styles.pageCountBadge}>
                    <Text style={styles.pageCountText}>{item.pageCount || 'N/A'}</Text>
                  </View>
                </View>
              </View>
              
              {/* Action Buttons */}
              <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.primaryButton}>
                  <FontAwesome5 name="book-open" size={16} color="#ffffff" />
                  <Text style={styles.primaryButtonText}>Read Now</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.secondaryButton}>
                  <Ionicons name="bookmark-outline" size={20} color="#ffffff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Featured Books</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={featuredBooks}
        renderItem={renderHeroCard}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={width - 40}
        decelerationRate="fast"
        onScroll={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / (width - 40));
          setActiveIndex(index);
        }}
        contentContainerStyle={styles.heroList}
      />
      
      {/* Pagination */}
      <View style={styles.paginationContainer}>
        <View style={styles.paginationDots}>
          {featuredBooks.map((_, index) => (
            <View 
              key={index} 
              style={[
                styles.dot,
                index === activeIndex && styles.activeDot
              ]} 
            />
          ))}
        </View>
        
        <View style={styles.paginationInfo}>
          <Text style={styles.paginationText}>
            {activeIndex + 1} of {featuredBooks.length}
          </Text>
          <Text style={styles.paginationSubtext}>Featured Books</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0f172a',
  },
  viewAllText: {
    fontSize: 14,
    color: '#0ea5e9',
    fontWeight: '600',
  },
  heroList: {
    paddingHorizontal: 20,
  },
  heroCard: {
    width: width - 40,
    height: 280,
    borderRadius: 28,
    marginRight: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 10,
  },
  patternOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  circlePattern: {
    position: 'absolute',
    top: -50,
    left: -50,
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  gradientBackground: {
    flex: 1,
    padding: 24,
    zIndex: 2,
  },
  heroContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bookInfoSection: {
    flex: 1,
    marginRight: 16,
    justifyContent: 'space-between',
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 16,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  bookTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: 30,
    marginBottom: 8,
  },
  bookAuthor: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 16,
    fontStyle: 'italic',
  },
  metaContainer: {
    marginBottom: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stars: {
    flexDirection: 'row',
    marginRight: 8,
  },
  ratingText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '600',
  },
  tagline: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.85)',
    lineHeight: 20,
    marginBottom: 24,
  },
  progressSection: {
    marginTop: 8,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  progressPercentage: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
  progressBar: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 3,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 3,
  },
  pagesText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  rightSection: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bookCoverContainer: {
    alignItems: 'center',
  },
  bookCoverWrapper: {
    width: 90,
    height: 120,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
    position: 'relative',
  },
  bookCoverImage: {
    width: '100%',
    height: '100%',
  },
  bookCoverOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  pageCountBadge: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  pageCountText: {
    fontSize: 10,
    color: '#ffffff',
    fontWeight: '600',
  },
  actionButtons: {
    alignItems: 'center',
    gap: 12,
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    gap: 8,
  },
  primaryButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
  secondaryButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  paginationDots: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e2e8f0',
  },
  activeDot: {
    backgroundColor: '#0ea5e9',
    width: 32,
    height: 8,
  },
  paginationInfo: {
    alignItems: 'flex-end',
  },
  paginationText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0f172a',
  },
  paginationSubtext: {
    fontSize: 12,
    color: '#64748b',
  },
});

export default HeroCarousel;