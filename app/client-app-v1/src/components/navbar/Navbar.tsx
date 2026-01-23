// src/components/navbar/Navbar.tsx
import React, { useState } from 'react';
import {
  View,
  Text as RNText, // Rename import
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, usePathname } from 'expo-router';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigateTo = (route: string) => {
    router.push(route);
    setMenuOpen(false);
  };

  const isActive = (route: string) => pathname === route;

  return (
    <View style={[styles.navbar, Platform.OS === 'web' && styles.webShadow]}>
      <TouchableOpacity onPress={() => navigateTo('/')}>
        <RNText style={styles.logo}>📚 BookQubit</RNText>
      </TouchableOpacity>

      {Platform.OS === 'web' && (
        <View style={styles.desktopNav}>
          <TouchableOpacity 
            onPress={() => navigateTo('/')}
            style={[styles.navItem, isActive('/') && styles.activeNavItem]}
          >
            <RNText style={[styles.navText, isActive('/') && styles.activeNavText]}>
              Home
            </RNText>
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={() => navigateTo('/books')}
            style={[styles.navItem, isActive('/books') && styles.activeNavItem]}
          >
            <RNText style={[styles.navText, isActive('/books') && styles.activeNavText]}>
              Books
            </RNText>
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={() => navigateTo('/library')}
            style={[styles.navItem, isActive('/library') && styles.activeNavItem]}
          >
            <RNText style={[styles.navText, isActive('/library') && styles.activeNavText]}>
              Library
            </RNText>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity 
        onPress={toggleMenu}
        style={styles.menuButton}
        activeOpacity={0.7}
      >
        <Ionicons 
          name={menuOpen ? "close" : "menu"} 
          size={28} 
          color="#0284c7" 
        />
      </TouchableOpacity>

      {menuOpen && Platform.OS !== 'web' && (
        <View style={styles.mobileMenu}>
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigateTo('/')}
          >
            <Ionicons name="home" size={22} color="#475569" />
            <RNText style={styles.menuText}>Home</RNText>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigateTo('/books')}
          >
            <Ionicons name="library" size={22} color="#475569" />
            <RNText style={styles.menuText}>Books</RNText>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => navigateTo('/library')}
          >
            <Ionicons name="bookmark" size={22} color="#475569" />
            <RNText style={styles.menuText}>Library</RNText>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
    position: 'relative',
  },
  webShadow: {
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0369a1",
    letterSpacing: 0.5,
  },
  menuButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#f8fafc",
  },
  desktopNav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  navItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  activeNavItem: {
    backgroundColor: '#f0f9ff',
  },
  navText: {
    fontSize: 16,
    color: '#64748b',
    fontWeight: '500',
  },
  activeNavText: {
    color: '#0369a1',
    fontWeight: '600',
  },
  mobileMenu: {
    position: 'absolute',
    top: 60,
    right: 20,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    minWidth: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    zIndex: 1000,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 12,
  },
  menuText: {
    fontSize: 16,
    color: '#334155',
    fontWeight: '500',
  },
});

export default Navbar;