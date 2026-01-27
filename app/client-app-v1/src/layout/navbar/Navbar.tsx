import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Platform,
  TextInput,
  Modal,
  ScrollView,
} from 'react-native';
import { Ionicons, FontAwesome5, Feather } from '@expo/vector-icons';
import DrawerMenu from './DrawerMenu';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const handleSearch = () => {
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.container}>
        {/* Main Navbar */}
        <View style={styles.navbar}>
          {/* Left: Logo + BookQubit */}
          <View style={styles.leftSection}>
            <View style={styles.logoContainer}>
              <View style={styles.logoIcon}>
                <FontAwesome5 name="book-open" size={20} color="#ffffff" />
              </View>
              <Text style={styles.logoText}>BookQubit</Text>
            </View>
          </View>

          {/* Right: Icons */}
          <View style={styles.rightSection}>
            {/* Search Icon */}
            <TouchableOpacity 
              style={styles.iconButton}
              onPress={toggleSearch}
              accessibilityLabel="Search"
            >
              <Ionicons name="search-outline" size={24} color="#64748b" />
            </TouchableOpacity>
            
            {/* Notification Icon */}
            <TouchableOpacity 
              style={styles.iconButton}
              onPress={toggleNotifications}
              accessibilityLabel="Notifications"
            >
              <Ionicons name="notifications-outline" size={24} color="#64748b" />
              <View style={styles.notificationBadge} />
            </TouchableOpacity>
            
            {/* Hamburger Menu */}
            <TouchableOpacity 
              style={styles.iconButton}
              onPress={toggleDrawer}
              accessibilityLabel="Menu"
            >
              <Ionicons name="menu-outline" size={28} color="#64748b" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Modal */}
        <Modal
          visible={showSearch}
          animationType="slide"
          transparent={true}
          statusBarTranslucent={true}
          onRequestClose={toggleSearch}
        >
          <View style={styles.searchModalOverlay}>
            <View style={styles.searchModalContent}>
              {/* Search Header */}
              <View style={styles.searchHeader}>
                <TouchableOpacity onPress={toggleSearch} style={styles.backButton}>
                  <Ionicons name="arrow-back" size={24} color="#64748b" />
                </TouchableOpacity>
                <View style={styles.searchInputContainer}>
                  <Ionicons name="search-outline" size={20} color="#94a3b8" />
                  <TextInput
                    style={styles.searchModalInput}
                    placeholder="Search books, authors, categories..."
                    placeholderTextColor="#94a3b8"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    autoFocus={true}
                    returnKeyType="search"
                    onSubmitEditing={handleSearch}
                  />
                  {searchQuery.length > 0 && (
                    <TouchableOpacity onPress={() => setSearchQuery('')}>
                      <Ionicons name="close-circle" size={20} color="#94a3b8" />
                    </TouchableOpacity>
                  )}
                </View>
              </View>

              {/* Search Results/Suggestions */}
              <ScrollView style={styles.searchResults}>
                <Text style={styles.recentSearchesTitle}>Recent Searches</Text>
                {['React Native', 'JavaScript', 'TypeScript', 'UI Design'].map((item, index) => (
                  <TouchableOpacity key={index} style={styles.searchSuggestion}>
                    <Ionicons name="time-outline" size={18} color="#94a3b8" />
                    <Text style={styles.searchSuggestionText}>{item}</Text>
                  </TouchableOpacity>
                ))}
                
                <Text style={styles.popularSearchesTitle}>Popular Categories</Text>
                <View style={styles.categoriesGrid}>
                  {['Fiction', 'Technology', 'Business', 'Science', 'Self-Help', 'Biography'].map((category, index) => (
                    <TouchableOpacity key={index} style={styles.categoryChip}>
                      <Text style={styles.categoryChipText}>{category}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>

        {/* Notifications Modal */}
        <Modal
          visible={showNotifications}
          animationType="slide"
          transparent={true}
          statusBarTranslucent={true}
          onRequestClose={toggleNotifications}
        >
          <View style={styles.notificationModalOverlay}>
            <View style={styles.notificationModalContent}>
              {/* Notifications Header */}
              <View style={styles.notificationHeader}>
                <Text style={styles.notificationTitle}>Notifications</Text>
                <TouchableOpacity onPress={toggleNotifications}>
                  <Ionicons name="close" size={24} color="#64748b" />
                </TouchableOpacity>
              </View>

              {/* Notifications List */}
              <ScrollView style={styles.notificationsList}>
                {[
                  { title: 'New Book Added', message: 'The Design of Everyday Things has been added to your wishlist', time: '2 hours ago', unread: true },
                  { title: 'Reading Reminder', message: 'Continue reading Atomic Habits where you left off', time: '1 day ago', unread: true },
                  { title: 'Book Recommendation', message: 'Based on your reading history, you might like "Deep Work"', time: '2 days ago', unread: false },
                  { title: 'Weekly Reading Report', message: 'You read 5 books this week. Keep it up!', time: '3 days ago', unread: false },
                  { title: 'Author Update', message: 'Your favorite author just released a new book', time: '1 week ago', unread: false },
                ].map((notification, index) => (
                  <TouchableOpacity key={index} style={[
                    styles.notificationItem,
                    notification.unread && styles.unreadNotification
                  ]}>
                    <View style={styles.notificationIcon}>
                      <Ionicons 
                        name="notifications" 
                        size={20} 
                        color={notification.unread ? '#0ea5e9' : '#94a3b8'} 
                      />
                    </View>
                    <View style={styles.notificationContent}>
                      <Text style={[
                        styles.notificationItemTitle,
                        notification.unread && styles.unreadTitle
                      ]}>{notification.title}</Text>
                      <Text style={styles.notificationItemMessage}>{notification.message}</Text>
                      <Text style={styles.notificationTime}>{notification.time}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              {/* Mark All as Read */}
              <TouchableOpacity style={styles.markAllReadButton}>
                <Text style={styles.markAllReadText}>Mark all as read</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      {/* Drawer Menu */}
      <DrawerMenu isVisible={isDrawerOpen} onClose={toggleDrawer} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    ...Platform.select({
      ios: {
        paddingTop: 50,
      },
      android: {
        paddingTop: 25,
      },
      default: {
        paddingTop: 0,
      },
    }),
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#0ea5e9',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#0ea5e9',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  logoText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0f172a',
    letterSpacing: 0.5,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  iconButton: {
    padding: 5,
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ef4444',
    borderWidth: 1.5,
    borderColor: '#ffffff',
  },
  // Search Modal Styles
  searchModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  searchModalContent: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: Platform.OS === 'ios' ? 50 : 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  backButton: {
    padding: 5,
    marginRight: 10,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  searchModalInput: {
    flex: 1,
    fontSize: 16,
    color: '#0f172a',
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
  searchResults: {
    flex: 1,
    padding: 20,
  },
  recentSearchesTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748b',
    marginBottom: 15,
  },
  searchSuggestion: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  searchSuggestionText: {
    fontSize: 16,
    color: '#334155',
    marginLeft: 10,
  },
  popularSearchesTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748b',
    marginTop: 25,
    marginBottom: 15,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  categoryChip: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  categoryChipText: {
    fontSize: 14,
    color: '#475569',
  },
  // Notifications Modal Styles
  notificationModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  notificationModalContent: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: Platform.OS === 'ios' ? 50 : 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  notificationTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0f172a',
  },
  notificationsList: {
    flex: 1,
    padding: 20,
  },
  notificationItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  unreadNotification: {
    backgroundColor: '#f0f9ff',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  notificationContent: {
    flex: 1,
  },
  notificationItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#64748b',
    marginBottom: 4,
  },
  unreadTitle: {
    color: '#0f172a',
    fontWeight: '600',
  },
  notificationItemMessage: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 4,
  },
  notificationTime: {
    fontSize: 12,
    color: '#94a3b8',
  },
  markAllReadButton: {
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  markAllReadText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0ea5e9',
  },
});

export default Navbar;