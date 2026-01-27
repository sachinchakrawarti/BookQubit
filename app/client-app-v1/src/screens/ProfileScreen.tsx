import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5, Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const ProfileScreen = () => {
  const userStats = [
    { label: 'Books Read', value: '128', icon: 'book-outline', color: '#0ea5e9' },
    { label: 'Reading Now', value: '5', icon: 'time-outline', color: '#8b5cf6' },
    { label: 'Wishlist', value: '24', icon: 'heart-outline', color: '#ef4444' },
    { label: 'Minutes', value: '5.2k', icon: 'timer-outline', color: '#10b981' },
  ];

  const readingGoals = [
    { label: 'Daily Goal', value: '45', target: '60', unit: 'min', color: '#0ea5e9' },
    { label: 'Weekly Books', value: '3', target: '5', unit: 'books', color: '#8b5cf6' },
    { label: 'Monthly', value: '8', target: '12', unit: 'books', color: '#10b981' },
  ];

  const menuSections = [
    {
      title: 'ACCOUNT',
      items: [
        { icon: 'person-outline', label: 'Edit Profile', color: '#0ea5e9' },
        { icon: 'settings-outline', label: 'Settings', color: '#64748b' },
        { icon: 'notifications-outline', label: 'Notifications', color: '#f59e0b' },
        { icon: 'shield-checkmark-outline', label: 'Privacy & Security', color: '#10b981' },
      ],
    },
    {
      title: 'LIBRARY',
      items: [
        { icon: 'bookmark-outline', label: 'Bookmarks', color: '#8b5cf6' },
        { icon: 'heart-outline', label: 'Wishlist', color: '#ef4444' },
        { icon: 'download-outline', label: 'Downloads', color: '#3b82f6' },
        { icon: 'time-outline', label: 'Reading History', color: '#f59e0b' },
      ],
    },
    {
      title: 'SUPPORT',
      items: [
        { icon: 'help-circle-outline', label: 'Help & Support', color: '#64748b' },
        { icon: 'information-circle-outline', label: 'About BookQubit', color: '#0ea5e9' },
        { icon: 'star-outline', label: 'Rate App', color: '#f59e0b' },
        { icon: 'share-social-outline', label: 'Share App', color: '#10b981' },
      ],
    },
  ];

  const recentBooks = [
    { title: 'Atomic Habits', author: 'James Clear', progress: 85 },
    { title: 'Deep Work', author: 'Cal Newport', progress: 60 },
    { title: 'The Psychology of Money', author: 'Morgan Housel', progress: 45 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Feather name="edit-2" size={20} color="#64748b" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        {/* Profile Card */}
        <LinearGradient
          colors={['#0ea5e9', '#38bdf8']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.profileCard}
        >
          <View style={styles.profileHeader}>
            <View style={styles.avatarContainer}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop' }}
                style={styles.avatar}
              />
              <View style={styles.onlineStatus} />
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.userName}>Alex Johnson</Text>
              <Text style={styles.userEmail}>alex@bookqubit.com</Text>
              <View style={styles.memberSince}>
                <Text style={styles.memberSinceText}>Member since 2023</Text>
                <View style={styles.premiumBadge}>
                  <FontAwesome5 name="crown" size={10} color="#f59e0b" />
                  <Text style={styles.premiumText}>Premium</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Stats Grid */}
          <View style={styles.statsGrid}>
            {userStats.map((stat, index) => (
              <View key={index} style={styles.statCard}>
                <View style={[styles.statIconContainer, { backgroundColor: 'rgba(255, 255, 255, 0.2)' }]}>
                  <Ionicons name={stat.icon as any} size={20} color="#ffffff" />
                </View>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </LinearGradient>

        {/* Reading Goals */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Reading Goals</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.goalsContainer}>
            {readingGoals.map((goal, index) => (
              <View key={index} style={styles.goalCard}>
                <View style={styles.goalHeader}>
                  <View style={[styles.goalIcon, { backgroundColor: `${goal.color}15` }]}>
                    <Ionicons name="trophy-outline" size={18} color={goal.color} />
                  </View>
                  <Text style={styles.goalLabel}>{goal.label}</Text>
                </View>
                <View style={styles.progressContainer}>
                  <View style={styles.progressBar}>
                    <View 
                      style={[
                        styles.progressFill,
                        { 
                          width: `${(parseInt(goal.value) / parseInt(goal.target)) * 100}%`,
                          backgroundColor: goal.color,
                        }
                      ]} 
                    />
                  </View>
                  <View style={styles.progressTextContainer}>
                    <Text style={styles.progressValue}>{goal.value} {goal.unit}</Text>
                    <Text style={styles.progressTarget}>/ {goal.target} {goal.unit}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Currently Reading */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Currently Reading</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.booksContainer}>
            {recentBooks.map((book, index) => (
              <TouchableOpacity key={index} style={styles.bookCard}>
                <View style={styles.bookCover}>
                  <FontAwesome5 name="book-open" size={24} color="#0ea5e9" />
                </View>
                <View style={styles.bookInfo}>
                  <Text style={styles.bookTitle} numberOfLines={1}>{book.title}</Text>
                  <Text style={styles.bookAuthor} numberOfLines={1}>{book.author}</Text>
                  <View style={styles.bookProgress}>
                    <View style={styles.progressBar}>
                      <View 
                        style={[
                          styles.progressFill,
                          { width: `${book.progress}%`, backgroundColor: '#0ea5e9' }
                        ]} 
                      />
                    </View>
                    <Text style={styles.progressPercentage}>{book.progress}%</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Menu Sections */}
        {menuSections.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.menuSection}>
            <Text style={styles.menuSectionTitle}>{section.title}</Text>
            <View style={styles.menuItemsContainer}>
              {section.items.map((item, itemIndex) => (
                <TouchableOpacity key={itemIndex} style={styles.menuItem}>
                  <View style={[styles.menuIconContainer, { backgroundColor: `${item.color}15` }]}>
                    <Ionicons name={item.icon as any} size={20} color={item.color} />
                  </View>
                  <Text style={styles.menuItemText}>{item.label}</Text>
                  <Ionicons name="chevron-forward" size={18} color="#cbd5e1" />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <View style={styles.logoutIcon}>
            <Ionicons name="log-out-outline" size={22} color="#ef4444" />
          </View>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        {/* App Version */}
        <View style={styles.footer}>
          <Text style={styles.versionText}>BookQubit v1.0.0</Text>
          <Text style={styles.copyrightText}>© 2024 BookQubit. All rights reserved.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
  },
  headerButton: {
    padding: 8,
  },
  profileCard: {
    margin: 20,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#0ea5e9',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  onlineStatus: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#10b981',
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#dbeafe',
    marginBottom: 8,
  },
  memberSince: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  memberSinceText: {
    fontSize: 12,
    color: '#dbeafe',
    opacity: 0.9,
  },
  premiumBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(245, 158, 11, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  premiumText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#f59e0b',
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    borderRadius: 16,
    flex: 1,
    minWidth: '22%',
  },
  statIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 12,
    color: '#dbeafe',
    opacity: 0.9,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
  },
  viewAllText: {
    fontSize: 14,
    color: '#0ea5e9',
    fontWeight: '500',
  },
  goalsContainer: {
    gap: 12,
  },
  goalCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  goalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  goalIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  goalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#334155',
  },
  progressContainer: {
    gap: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#f1f5f9',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0f172a',
  },
  progressTarget: {
    fontSize: 14,
    color: '#64748b',
  },
  booksContainer: {
    gap: 12,
  },
  bookCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    alignItems: 'center',
  },
  bookCover: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#f0f9ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 2,
  },
  bookAuthor: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  bookProgress: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  progressPercentage: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0ea5e9',
  },
  menuSection: {
    marginBottom: 20,
  },
  menuSectionTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#94a3b8',
    marginLeft: 20,
    marginBottom: 12,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  menuItemsContainer: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuItemText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#334155',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 24,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: '#fef2f2',
    gap: 12,
  },
  logoutIcon: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ef4444',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  versionText: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 4,
  },
  copyrightText: {
    fontSize: 12,
    color: '#94a3b8',
    textAlign: 'center',
  },
});

export default ProfileScreen;