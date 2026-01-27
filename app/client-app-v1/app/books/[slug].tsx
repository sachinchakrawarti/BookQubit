import React, { useState } from "react";
import { 
  View, 
  Text, 
  Image, 
  ScrollView, 
  StyleSheet, 
  TouchableOpacity, 
  Linking,
  Dimensions,
  StatusBar,
  Share
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons, FontAwesome5, MaterialIcons, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import books from "@/src/data/BooksData";
import Navbar from "@/src/layout/navbar/Navbar"; // Import Navbar

const { width } = Dimensions.get('window');

export default function BookDetailsScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  const book = books.find((b) => b.slug === slug);

  if (!book) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Book not found!</Text>
      </View>
    );
  }

  const openLink = (url: string) => {
    if (url !== "#") Linking.openURL(url);
  };

  const shareBook = async () => {
    try {
      await Share.share({
        message: `Check out "${book.title}" by ${book.author} on BookQubit!`,
        url: `https://bookqubit.com/books/${book.slug}`,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

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

  const bookColor = getBookColor(book.category);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Navbar */}
      <Navbar />
      
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Book Header with Image */}
        <View style={styles.heroSection}>
          <LinearGradient
            colors={[bookColor, `${bookColor}DD`]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.heroGradient}
          >
            <View style={styles.bookHeader}>
              <View style={styles.bookImageContainer}>
                <Image 
                  source={{ uri: book.imageUrl }} 
                  style={styles.bookImage}
                  resizeMode="cover"
                />
                <View style={styles.imageBadges}>
                  <View style={styles.ratingBadge}>
                    <Ionicons name="star" size={14} color="#FFD700" />
                    <Text style={styles.ratingText}>{book.rating}/5.0</Text>
                  </View>
                  <TouchableOpacity 
                    style={styles.bookmarkButton}
                    onPress={toggleBookmark}
                  >
                    <Ionicons 
                      name={isBookmarked ? "bookmark" : "bookmark-outline"} 
                      size={20} 
                      color="#ffffff" 
                    />
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={styles.bookBasicInfo}>
                <View style={[styles.categoryBadge, { backgroundColor: 'rgba(255, 255, 255, 0.2)' }]}>
                  <Text style={styles.categoryText}>{book.category}</Text>
                </View>
                
                <Text style={styles.bookTitle} numberOfLines={2}>
                  {book.title}
                </Text>
                
                <Text style={styles.bookAuthor}>by {book.author}</Text>
                
                <View style={styles.quickActions}>
                  <TouchableOpacity 
                    style={styles.shareButton}
                    onPress={shareBook}
                  >
                    <Ionicons name="share-social-outline" size={20} color="#ffffff" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.priceButton}>
                    <Text style={styles.priceText}>{book.price}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Book Meta Info */}
        <View style={styles.metaSection}>
          <View style={styles.metaGrid}>
            <View style={styles.metaItem}>
              <Ionicons name="calendar-outline" size={20} color="#64748b" />
              <Text style={styles.metaLabel}>Published</Text>
              <Text style={styles.metaValue}>{book.published}</Text>
            </View>
            <View style={styles.metaItem}>
              <FontAwesome5 name="book-open" size={18} color="#64748b" />
              <Text style={styles.metaLabel}>Pages</Text>
              <Text style={styles.metaValue}>{book.pageCount}</Text>
            </View>
            <View style={styles.metaItem}>
              <Ionicons name="language" size={20} color="#64748b" />
              <Text style={styles.metaLabel}>Language</Text>
              <Text style={styles.metaValue}>{book.language}</Text>
            </View>
            <View style={styles.metaItem}>
              <MaterialIcons name="format-size" size={20} color="#64748b" />
              <Text style={styles.metaLabel}>Format</Text>
              <Text style={styles.metaValue}>{book.format}</Text>
            </View>
          </View>
        </View>

        {/* Tabs Navigation */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === "overview" && styles.activeTab]}
            onPress={() => setActiveTab("overview")}
          >
            <Ionicons 
              name="information-circle-outline" 
              size={20} 
              color={activeTab === "overview" ? bookColor : "#94a3b8"} 
            />
            <Text style={[styles.tabText, activeTab === "overview" && styles.activeTabText]}>
              Overview
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === "details" && styles.activeTab]}
            onPress={() => setActiveTab("details")}
          >
            <Ionicons 
              name="document-text-outline" 
              size={20} 
              color={activeTab === "details" ? bookColor : "#94a3b8"} 
            />
            <Text style={[styles.tabText, activeTab === "details" && styles.activeTabText]}>
              Details
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === "reviews" && styles.activeTab]}
            onPress={() => setActiveTab("reviews")}
          >
            <Ionicons 
              name="star-outline" 
              size={20} 
              color={activeTab === "reviews" ? bookColor : "#94a3b8"} 
            />
            <Text style={[styles.tabText, activeTab === "reviews" && styles.activeTabText]}>
              Reviews
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tab Content */}
        <View style={styles.tabContent}>
          {activeTab === "overview" && (
            <>
              <Text style={styles.description}>{book.description}</Text>
              
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Key Highlights</Text>
                <View style={styles.keyPointsContainer}>
                  {book.keyPoints.map((point, i) => (
                    <View key={i} style={styles.keyPointItem}>
                      <View style={[styles.keyPointIcon, { backgroundColor: `${bookColor}20` }]}>
                        <Ionicons name="checkmark-circle" size={18} color={bookColor} />
                      </View>
                      <Text style={styles.keyPointText}>{point}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </>
          )}

          {activeTab === "details" && (
            <>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Summary</Text>
                <Text style={styles.summaryText}>{book.summary}</Text>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Genres & Subjects</Text>
                <View style={styles.tagsContainer}>
                  {book.genres.map((genre, i) => (
                    <View key={i} style={[styles.tag, { backgroundColor: `${bookColor}15` }]}>
                      <Text style={[styles.tagText, { color: bookColor }]}>{genre}</Text>
                    </View>
                  ))}
                </View>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Book Information</Text>
                <View style={styles.detailsList}>
                  <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>ISBN</Text>
                    <Text style={styles.detailValue}>{book.isbn}</Text>
                  </View>
                  <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Publisher</Text>
                    <Text style={styles.detailValue}>{book.publisher}</Text>
                  </View>
                  <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Country</Text>
                    <Text style={styles.detailValue}>{book.country}</Text>
                  </View>
                  {book.nominations && (
                    <View style={styles.detailItem}>
                      <Text style={styles.detailLabel}>Awards</Text>
                      <Text style={styles.detailValue}>{book.nominations}</Text>
                    </View>
                  )}
                </View>
              </View>
            </>
          )}

          {activeTab === "reviews" && (
            <View style={styles.reviewsSection}>
              <View style={styles.ratingOverview}>
                <View style={styles.ratingNumber}>
                  <Text style={styles.ratingNumberText}>{book.rating}</Text>
                  <Text style={styles.ratingMaxText}>/5.0</Text>
                </View>
                <View style={styles.starsContainer}>
                  {[...Array(5)].map((_, i) => (
                    <Ionicons 
                      key={i} 
                      name="star" 
                      size={24} 
                      color={i < Math.floor(book.rating) ? bookColor : '#e2e8f0'} 
                    />
                  ))}
                </View>
                <Text style={styles.ratingCount}>Based on 1,234 ratings</Text>
              </View>
              
              <Text style={styles.comingSoon}>Reviews coming soon!</Text>
            </View>
          )}
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity 
            style={[styles.actionButton, styles.primaryAction, { backgroundColor: bookColor }]}
            onPress={() => openLink(book.buttons.getBook)}
          >
            <Ionicons name="cart" size={20} color="#ffffff" />
            <Text style={styles.primaryButtonText}>Get This Book</Text>
          </TouchableOpacity>
          
          <View style={styles.secondaryActions}>
            <TouchableOpacity 
              style={[styles.smallActionButton, { borderColor: bookColor }]}
              onPress={() => openLink(book.buttons.listenAudiobook)}
            >
              <Ionicons name="headset" size={20} color={bookColor} />
              <Text style={[styles.smallActionText, { color: bookColor }]}>Audiobook</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.smallActionButton, { borderColor: '#e2e8f0' }]}
              onPress={() => openLink(book.buttons.readSummary)}
            >
              <Feather name="file-text" size={20} color="#64748b" />
              <Text style={[styles.smallActionText, { color: '#64748b' }]}>Summary</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.smallActionButton, { borderColor: '#e2e8f0' }]}
              onPress={() => openLink(book.buttons.knowMore)}
            >
              <Ionicons name="information-circle-outline" size={20} color="#64748b" />
              <Text style={[styles.smallActionText, { color: '#64748b' }]}>More Info</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Related Books */}
        <View style={styles.relatedSection}>
          <Text style={styles.sectionTitle}>Similar Books</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.relatedScroll}>
            {books
              .filter(b => b.id !== book.id && b.category === book.category)
              .slice(0, 4)
              .map(relatedBook => (
                <TouchableOpacity 
                  key={relatedBook.id}
                  style={styles.relatedBook}
                  onPress={() => router.push(`/books/${relatedBook.slug}`)}
                >
                  <Image 
                    source={{ uri: relatedBook.imageUrl }} 
                    style={styles.relatedBookImage}
                  />
                  <View style={styles.relatedBookInfo}>
                    <Text style={styles.relatedBookTitle} numberOfLines={2}>
                      {relatedBook.title}
                    </Text>
                    <Text style={styles.relatedBookAuthor} numberOfLines={1}>
                      {relatedBook.author}
                    </Text>
                    <View style={styles.relatedBookRating}>
                      <Ionicons name="star" size={12} color="#FFD700" />
                      <Text style={styles.relatedRatingText}>{relatedBook.rating}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  content: {
    flex: 1,
  },
  heroSection: {
    height: 240,
  },
  heroGradient: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  bookHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
  },
  bookImageContainer: {
    position: 'relative',
  },
  bookImage: {
    width: 100,
    height: 150,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  imageBadges: {
    position: 'absolute',
    top: 8,
    right: 8,
    left: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
    color: "#ffffff",
    fontWeight: "600",
  },
  bookmarkButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookBasicInfo: {
    flex: 1,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 12,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#ffffff",
    textTransform: "uppercase",
  },
  bookTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#ffffff",
    lineHeight: 28,
    marginBottom: 8,
  },
  bookAuthor: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: 16,
  },
  quickActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  shareButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 12,
  },
  priceText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0f172a",
  },
  metaSection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  metaGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  metaItem: {
    flex: 1,
    minWidth: '45%',
    alignItems: "center",
    padding: 12,
    backgroundColor: "#f8fafc",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#f1f5f9",
  },
  metaLabel: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 8,
    marginBottom: 4,
  },
  metaValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0f172a",
  },
  tabsContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 8,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#0ea5e9",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#94a3b8",
  },
  activeTabText: {
    color: "#0f172a",
    fontWeight: "600",
  },
  tabContent: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#475569",
    marginBottom: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 16,
  },
  keyPointsContainer: {
    gap: 12,
  },
  keyPointItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  keyPointIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
  },
  keyPointText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    color: "#334155",
  },
  summaryText: {
    fontSize: 15,
    lineHeight: 24,
    color: "#475569",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 13,
    fontWeight: "500",
  },
  detailsList: {
    gap: 12,
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  detailLabel: {
    fontSize: 14,
    color: "#64748b",
  },
  detailValue: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0f172a",
  },
  reviewsSection: {
    marginBottom: 32,
  },
  ratingOverview: {
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f8fafc",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#f1f5f9",
  },
  ratingNumber: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 12,
  },
  ratingNumberText: {
    fontSize: 48,
    fontWeight: "800",
    color: "#0f172a",
  },
  ratingMaxText: {
    fontSize: 20,
    color: "#64748b",
    fontWeight: "600",
  },
  starsContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  ratingCount: {
    fontSize: 14,
    color: "#64748b",
  },
  comingSoon: {
    fontSize: 16,
    color: "#94a3b8",
    textAlign: 'center',
    marginTop: 20,
    fontStyle: 'italic',
  },
  actionButtons: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  primaryAction: {
    paddingVertical: 18,
    borderRadius: 16,
    marginBottom: 16,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  primaryButtonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#ffffff",
  },
  secondaryActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  smallActionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    gap: 8,
  },
  smallActionText: {
    fontSize: 14,
    fontWeight: "600",
  },
  relatedSection: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  relatedScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  relatedBook: {
    width: 140,
    marginRight: 16,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#f1f5f9",
  },
  relatedBookImage: {
    width: "100%",
    height: 180,
  },
  relatedBookInfo: {
    padding: 12,
  },
  relatedBookTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#0f172a",
    marginBottom: 4,
    lineHeight: 18,
  },
  relatedBookAuthor: {
    fontSize: 12,
    color: "#64748b",
    marginBottom: 8,
  },
  relatedBookRating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  relatedRatingText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#0f172a",
  },
  error: {
    fontSize: 18,
    color: "#ef4444",
    textAlign: "center",
    marginTop: 50,
  },
});