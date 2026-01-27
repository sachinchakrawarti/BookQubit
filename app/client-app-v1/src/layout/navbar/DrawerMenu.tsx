import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Modal,
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

interface DrawerMenuProps {
  isVisible: boolean;
  onClose: () => void;
}

const { width } = Dimensions.get('window');
const DRAWER_WIDTH = width * 0.8;

const DrawerMenu: React.FC<DrawerMenuProps> = ({ isVisible, onClose }) => {
  const menuItems = [
    { icon: 'home-outline', label: 'Home', color: '#0ea5e9' },
    { icon: 'book-outline', label: 'My Library', color: '#8b5cf6' },
    { icon: 'grid-outline', label: 'Categories', color: '#10b981' },
    { icon: 'star-outline', label: 'Bestsellers', color: '#f59e0b' },
    { icon: 'heart-outline', label: 'Wishlist', color: '#ef4444' },
    { icon: 'time-outline', label: 'History', color: '#64748b' },
    { icon: 'person-outline', label: 'Profile', color: '#3b82f6' },
    { icon: 'settings-outline', label: 'Settings', color: '#94a3b8' },
  ];

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      statusBarTranslucent={true}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity 
          style={styles.backdrop} 
          activeOpacity={1} 
          onPress={onClose}
        />
        
        <View style={[styles.drawerContainer, { width: DRAWER_WIDTH }]}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.userInfo}>
              <View style={styles.avatar}>
                <FontAwesome5 name="user" size={24} color="#0ea5e9" />
              </View>
              <View style={styles.userDetails}>
                <Text style={styles.userName}>Welcome Back</Text>
                <Text style={styles.userStatus}>Reader</Text>
              </View>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#64748b" />
            </TouchableOpacity>
          </View>

          {/* Menu Items */}
          <ScrollView style={styles.menuContent}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={() => {
                  onClose();
                  // Handle navigation here
                }}
              >
                <View style={[styles.iconContainer, { backgroundColor: `${item.color}15` }]}>
                  <Ionicons name={item.icon as any} size={22} color={item.color} />
                </View>
                <Text style={styles.menuLabel}>{item.label}</Text>
                <Ionicons name="chevron-forward" size={18} color="#cbd5e1" />
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Footer */}
          <View style={styles.footer}>
            <TouchableOpacity style={styles.logoutButton}>
              <Ionicons name="log-out-outline" size={22} color="#ef4444" />
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: 'row',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawerContainer: {
    height: '100%',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f0f9ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 4,
  },
  userStatus: {
    fontSize: 14,
    color: '#64748b',
  },
  closeButton: {
    padding: 5,
  },
  menuContent: {
    flex: 1,
    paddingVertical: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  menuLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#334155',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#fef2f2',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ef4444',
    marginLeft: 10,
  },
});

export default DrawerMenu;