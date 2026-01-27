import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Import Home Components
import HeroCarousel from './home/HeroCarousel';
import WelcomeSection from './home/WelcomeSection';
import StatsGrid from './home/StatsGrid';
import CategoriesSection from './home/CategoriesSection';
import FeaturedBooks from './home/FeaturedBooks';
import TrendingBooks from './home/TrendingBooks';
import ReadingGoals from './home/ReadingGoals';
import QuickActions from './home/QuickActions';
import FooterSection from './home/FooterSection';

const Homepage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        {/* Hero Sections Carousel */}
        <HeroCarousel />
        
        {/* Welcome Message */}
        <WelcomeSection />
        
        {/* Stats Overview */}
        <StatsGrid />
        
        {/* Categories Filter */}
        <CategoriesSection />
        
        {/* Featured Books */}
        <FeaturedBooks />
        
        {/* Trending Books */}
        <TrendingBooks />
        
        {/* Reading Goals */}
        <ReadingGoals />
        
        {/* Quick Actions */}
        <QuickActions />
        
        {/* Footer CTA */}
        <FooterSection />
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
});

export default Homepage;