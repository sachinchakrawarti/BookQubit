import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SectionHeader from '../common/SectionHeader';

const categories = [
  'All', 'Fiction', 'Non-Fiction', 'Technology', 'Business', 
  'Self-Help', 'Science', 'Biography', 'History', 'Poetry'
];

const CategoriesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <View style={styles.container}>
      <SectionHeader 
        title="Browse Categories" 
        actionText="View All"
        onActionPress={() => console.log('View All Categories')}
      />
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryPill,
              activeCategory === category && styles.activeCategoryPill,
            ]}
            onPress={() => setActiveCategory(category)}
          >
            <Text style={[
              styles.categoryText,
              activeCategory === category && styles.activeCategoryText,
            ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 32,
  },
  categoriesContainer: {
    gap: 8,
    paddingRight: 20,
  },
  categoryPill: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  activeCategoryPill: {
    backgroundColor: '#0ea5e9',
    borderColor: '#0ea5e9',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#475569',
  },
  activeCategoryText: {
    color: '#ffffff',
  },
});

export default CategoriesSection;