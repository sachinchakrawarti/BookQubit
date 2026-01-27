import React, { useState } from "react";
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  Image, 
  StyleSheet, 
  ScrollView,
  TextInput,
  StatusBar
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import books from "@/src/data/BooksData";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "@/src/layout/navbar/Navbar"; // Import Navbar

export default function BooksScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("popular");

  // Filter and sort books
  const filteredBooks = books.filter(book => {
    if (activeFilter === "All") return true;
    return book.category === activeFilter;
  }).filter(book => {
    if (!searchQuery) return true;
    return book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
           book.category.toLowerCase().includes(searchQuery.toLowerCase());
  }).sort((a, b) => {
    if (sortBy === "popular") return b.rating - a.rating;
    if (sortBy === "newest") return new Date(b.published).getTime() - new Date(a.published).getTime();
    if (sortBy === "title") return a.title.localeCompare(b.title);
    return 0;
  });

  const categories = ["All", "Self-Help", "Productivity", "Finance", "Psychology", "Atheism & Religion", "History & Anthropology"];
  const sortOptions = [
    { id: "popular", label: "Most Popular", icon: "trending-up" },
    { id: "newest", label: "Newest", icon: "newspaper" },
    { id: "title", label: "Title A-Z", icon: "sort-alphabetical" },
  ];

  const renderBookCard = ({ item }: { item: typeof books[0] }) => (
    <TouchableOpacity 
      style={styles.bookCard}
      onPress={() => router.push(`/books/${item.slug}`)}
    >
      {/* Book Cover */}
      <View style={styles.bookImageContainer}>
        <Image 
          source={{ uri: item.imageUrl }} 
          style={styles.bookImage} 
          resizeMode="cover"
        />
        <View style={styles.ratingBadge}>
          <Ionicons name="star" size={12} color="#FFD700" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>

      {/* Book Info */}
      <View style={styles.bookInfo}>
        <View style={styles.categoryTag}>
          <Text style={styles.categoryText}>{item.category}</Text>
        </View>
        
        <Text style={styles.bookTitle} numberOfLines={2}>
          {item.title}
        </Text>
        
        <Text style={styles.bookAuthor} numberOfLines={1}>
          by {item.author}
        </Text>

        <View style={styles.bookMeta}>
          <View style={styles.metaItem}>
            <Ionicons name="calendar-outline" size={14} color="#94a3b8" />
            <Text style={styles.metaText}>{item.published}</Text>
          </View>
          <View style={styles.metaItem}>
            <FontAwesome5 name="book-open" size={12} color="#94a3b8" />
            <Text style={styles.metaText}>{item.pageCount} pages</Text>
          </View>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{item.price}</Text>
          <TouchableOpacity style={styles.knowMoreButton}>
            <Text style={styles.knowMoreText}>Know More</Text>
            <Ionicons name="arrow-forward" size={16} color="#0ea5e9" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Books Library</Text>
            <Text style={styles.headerSubtitle}>
              Discover {books.length}+ books across {new Set(books.map(b => b.category)).size} categories
            </Text>
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="filter" size={24} color="#64748b" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Ionicons name="search-outline" size={20} color="#94a3b8" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search books, authors, categories..."
              placeholderTextColor="#94a3b8"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery('')}>
                <Ionicons name="close-circle" size={20} color="#94a3b8" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Categories Filter */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
          contentContainerStyle={styles.categoriesContent}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryPill,
                activeFilter === category && styles.activeCategoryPill
              ]}
              onPress={() => setActiveFilter(category)}
            >
              <Text style={[
                styles.categoryPillText,
                activeFilter === category && styles.activeCategoryPillText
              ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Sort Options */}
        <View style={styles.sortContainer}>
          <Text style={styles.sortLabel}>Sort by:</Text>
          <View style={styles.sortOptions}>
            {sortOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.sortOption,
                  sortBy === option.id && styles.activeSortOption
                ]}
                onPress={() => setSortBy(option.id)}
              >
                <Ionicons 
                  name={option.icon as any} 
                  size={16} 
                  color={sortBy === option.id ? "#0ea5e9" : "#64748b"} 
                />
                <Text style={[
                  styles.sortOptionText,
                  sortBy === option.id && styles.activeSortOptionText
                ]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Books Grid Header */}
        <View style={styles.booksHeader}>
          <Text style={styles.resultsCount}>
            Showing {filteredBooks.length} of {books.length} books
          </Text>
        </View>

        {/* Books Grid */}
        <View style={styles.booksGridContainer}>
          {filteredBooks.map((item) => (
            <TouchableOpacity 
              key={item.id}
              style={styles.bookCard}
              onPress={() => router.push(`/books/${item.slug}`)}
            >
              {/* Book Cover */}
              <View style={styles.bookImageContainer}>
                <Image 
                  source={{ uri: item.imageUrl }} 
                  style={styles.bookImage} 
                  resizeMode="cover"
                />
                <View style={styles.ratingBadge}>
                  <Ionicons name="star" size={12} color="#FFD700" />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                </View>
              </View>

              {/* Book Info */}
              <View style={styles.bookInfo}>
                <View style={styles.categoryTag}>
                  <Text style={styles.categoryText}>{item.category}</Text>
                </View>
                
                <Text style={styles.bookTitle} numberOfLines={2}>
                  {item.title}
                </Text>
                
                <Text style={styles.bookAuthor} numberOfLines={1}>
                  by {item.author}
                </Text>

                <View style={styles.bookMeta}>
                  <View style={styles.metaItem}>
                    <Ionicons name="calendar-outline" size={14} color="#94a3b8" />
                    <Text style={styles.metaText}>{item.published}</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <FontAwesome5 name="book-open" size={12} color="#94a3b8" />
                    <Text style={styles.metaText}>{item.pageCount} pages</Text>
                  </View>
                </View>

                <View style={styles.priceContainer}>
                  <Text style={styles.priceText}>{item.price}</Text>
                  <TouchableOpacity style={styles.knowMoreButton}>
                    <Text style={styles.knowMoreText}>Know More</Text>
                    <Ionicons name="arrow-forward" size={16} color="#0ea5e9" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Empty State */}
        {filteredBooks.length === 0 && (
          <View style={styles.emptyContainer}>
            <MaterialIcons name="search-off" size={64} color="#e2e8f0" />
            <Text style={styles.emptyTitle}>No books found</Text>
            <Text style={styles.emptyText}>
              Try adjusting your search or filter
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={24} color="#ffffff" />
      </TouchableOpacity>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0f172a",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#64748b",
    marginTop: 4,
  },
  filterButton: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: "#f1f5f9",
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#0f172a",
    marginLeft: 12,
    padding: 0,
  },
  categoriesContainer: {
    marginTop: 8,
  },
  categoriesContent: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    gap: 8,
  },
  categoryPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#f1f5f9",
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  activeCategoryPill: {
    backgroundColor: "#0ea5e9",
    borderColor: "#0ea5e9",
  },
  categoryPillText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#475569",
  },
  activeCategoryPillText: {
    color: "#ffffff",
  },
  sortContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f1f5f9",
  },
  sortLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#64748b",
    marginBottom: 8,
  },
  sortOptions: {
    flexDirection: "row",
    gap: 12,
  },
  sortOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: "#f1f5f9",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    gap: 4,
  },
  activeSortOption: {
    backgroundColor: "#e0f2fe",
    borderColor: "#bae6fd",
  },
  sortOptionText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#64748b",
  },
  activeSortOptionText: {
    color: "#0ea5e9",
    fontWeight: "600",
  },
  booksHeader: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  resultsCount: {
    fontSize: 14,
    color: "#64748b",
    fontWeight: "500",
  },
  booksGridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 100, // Extra space for FAB
  },
  bookCard: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#f1f5f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 16,
  },
  bookImageContainer: {
    position: "relative",
  },
  bookImage: {
    width: "100%",
    height: 180,
  },
  ratingBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
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
  bookInfo: {
    padding: 12,
  },
  categoryTag: {
    alignSelf: "flex-start",
    backgroundColor: "#f0f9ff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#0ea5e9",
    textTransform: "uppercase",
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0f172a",
    lineHeight: 22,
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 13,
    color: "#64748b",
    marginBottom: 8,
  },
  bookMeta: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: "#94a3b8",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#0f172a",
  },
  knowMoreButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  knowMoreText: {
    fontSize: 14,
    color: "#0ea5e9",
    fontWeight: "600",
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 64,
    paddingHorizontal: 20,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#64748b",
    marginTop: 16,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: "#94a3b8",
    textAlign: "center",
  },
  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#0ea5e9",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
});