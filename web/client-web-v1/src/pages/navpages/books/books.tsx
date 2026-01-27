import React, { useState, useEffect } from 'react';
import booksData from './data/BooksData';
import BookSquareCard from './components/BookSquareCard';
import { Link } from 'react-router-dom';
import BookRectangleCard from './components/BookRectangleCard';
import { theme } from '../../../config/theme';

interface Book {
  id: string | number;
  title: string;
  author: string;
  description?: string;
  tags?: string[];
  category?: string;
  collection?: string;
  subjects?: string[];
  [key: string]: any; // For additional properties
}

interface FilterSectionProps {
  title: string;
  items: string[];
  selectedItems: string[];
  toggleItem: (item: string) => void;
}

const Books: React.FC = () => {
  // State for search and display
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [cardType, setCardType] = useState<'square' | 'rectangle'>('rectangle');
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  // State for filters
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCollections, setSelectedCollections] = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Toggle between card types (only for desktop)
  const handleToggleCardType = () => {
    setCardType(cardType === 'rectangle' ? 'square' : 'rectangle');
  };

  // Extract all filter options from books data
  const allTags = Array.from(new Set(booksData.flatMap((book: Book) => book.tags || [])));
  const allAuthors = Array.from(new Set(booksData.map((book: Book) => book.author)));
  const allCategories = Array.from(new Set(booksData.map((book: Book) => book.category).filter(Boolean)));
  const allCollections = Array.from(new Set(booksData.map((book: Book) => book.collection).filter(Boolean)));
  const allSubjects = Array.from(new Set(booksData.flatMap((book: Book) => book.subjects || [])));

  // Toggle filters in each category
  const toggleFilter = (filter: string, category: string[], setCategory: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (category.includes(filter)) {
      setCategory(category.filter(item => item !== filter));
    } else {
      setCategory([...category, filter]);
    }
  };

  // Filter books based on all criteria
  const filteredBooks = booksData.filter((book: Book) => {
    // Search term matching
    const matchesSearch = searchTerm === '' || 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (book.description && book.description.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Filter category matching
    const matchesTags = selectedTags.length === 0 || 
      (book.tags && selectedTags.some(tag => book.tags?.includes(tag)));
    
    const matchesAuthors = selectedAuthors.length === 0 || 
      selectedAuthors.includes(book.author);
    
    const matchesCategories = selectedCategories.length === 0 || 
      (book.category && selectedCategories.includes(book.category));
    
    const matchesCollections = selectedCollections.length === 0 || 
      (book.collection && selectedCollections.includes(book.collection));
    
    const matchesSubjects = selectedSubjects.length === 0 || 
      (book.subjects && selectedSubjects.some(sub => book.subjects?.includes(sub)));
    
    return matchesSearch && matchesTags && matchesAuthors && 
           matchesCategories && matchesCollections && matchesSubjects;
  });

  // Reset all filters
  const resetFilters = () => {
    setSelectedTags([]);
    setSelectedAuthors([]);
    setSelectedCategories([]);
    setSelectedCollections([]);
    setSelectedSubjects([]);
    setSearchTerm('');
  };

  // Determine which card type to display based on screen size
  const displayCardType = isMobile ? 'square' : cardType;

  return (
    <div className={`container mx-auto p-4 space-y-6 ${theme.background.section}`}>
      {/* Search & Controls Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 sticky top-0 bg-white p-4 rounded-lg shadow-md z-10">
        <div className="relative w-full md:w-1/2">
          <input
            type="search"
            placeholder="Search books by title, author, or description..."
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            className={`w-full p-3 pl-10 border ${theme.border.default} focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          <svg 
            className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`px-4 py-2 ${theme.buttonColors.secondaryButton.background} ${theme.buttonColors.secondaryButton.hoverBackground} ${theme.buttonColors.secondaryButton.textColor} ${theme.border.button} ${theme.shadow.button} flex items-center gap-2`}
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>

          {!isMobile && (
            <button
              onClick={handleToggleCardType}
              className={`px-4 py-2 ${theme.buttonColors.secondaryButton.background} ${theme.buttonColors.secondaryButton.hoverBackground} ${theme.buttonColors.secondaryButton.textColor} ${theme.border.button} ${theme.shadow.button} flex items-center gap-2`}
            >
              {cardType === 'rectangle' ? 'Grid View' : 'List View'}
            </button>
          )}
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className={`p-4 ${theme.border.default} ${theme.shadow.container} bg-white`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Filter Books</h3>
            <button 
              onClick={resetFilters}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Reset All Filters
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Tags Filter */}
            <FilterSection 
              title="Tags"
              items={allTags}
              selectedItems={selectedTags}
              toggleItem={(tag: string) => toggleFilter(tag, selectedTags, setSelectedTags)}
            />

            {/* Authors Filter */}
            <FilterSection 
              title="Authors"
              items={allAuthors}
              selectedItems={selectedAuthors}
              toggleItem={(author: string) => toggleFilter(author, selectedAuthors, setSelectedAuthors)}
            />

            {/* Category Filter */}
            <FilterSection 
              title="Categories"
              items={allCategories}
              selectedItems={selectedCategories}
              toggleItem={(category: string) => toggleFilter(category, selectedCategories, setSelectedCategories)}
            />

            {/* Collection Filter */}
            <FilterSection 
              title="Collections"
              items={allCollections}
              selectedItems={selectedCollections}
              toggleItem={(collection: string) => toggleFilter(collection, selectedCollections, setSelectedCollections)}
            />

            {/* Subjects Filter */}
            <FilterSection 
              title="Subjects"
              items={allSubjects}
              selectedItems={selectedSubjects}
              toggleItem={(subject: string) => toggleFilter(subject, selectedSubjects, setSelectedSubjects)}
            />
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="text-sm text-gray-600">
        Found {filteredBooks.length} {filteredBooks.length === 1 ? 'book' : 'books'}
        {(selectedTags.length > 0 || selectedAuthors.length > 0 || selectedCategories.length > 0 || 
          selectedCollections.length > 0 || selectedSubjects.length > 0) && (
          <span> matching your filters</span>
        )}
      </div>

      {/* Book Cards Grid */}
      {filteredBooks.length > 0 ? (
        <div className="w-full">
          {displayCardType === 'rectangle' ? (
            <div className="space-y-6">
              {filteredBooks.map((book: Book) => (
                <BookRectangleCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.map((book: Book) => (
                <BookSquareCard key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-12">
          <svg 
            className="mx-auto h-12 w-12 text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-900">No books found</h3>
          <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
          <div className="mt-6">
            <button
              onClick={resetFilters}
              className={`px-4 py-2 ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.hoverBackground} ${theme.buttonColors.primaryButton.textColor} ${theme.border.button} ${theme.shadow.button}`}
            >
              Reset all filters
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-center gap-4 py-8 border-t border-gray-200">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`px-6 py-3 text-base font-medium ${theme.buttonColors.secondaryButton.background} ${theme.buttonColors.secondaryButton.hoverBackground} ${theme.buttonColors.secondaryButton.textColor} ${theme.border.button} ${theme.shadow.button} rounded-md`}
        >
          Go to Top
        </button>
      </div>
    </div>
  );
};

// Reusable filter section component
const FilterSection: React.FC<FilterSectionProps> = ({ title, items, selectedItems, toggleItem }) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const displayedItems = showAll ? items : items.slice(0, 5);

  return (
    <div>
      <h4 className="font-medium text-gray-900 mb-2">{title}</h4>
      <div className="space-y-2">
        {displayedItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <input
              id={`${title}-${index}`}
              type="checkbox"
              checked={selectedItems.includes(item)}
              onChange={() => toggleItem(item)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor={`${title}-${index}`} className="ml-2 text-sm text-gray-700">
              {item || 'Unknown'}
            </label>
          </div>
        ))}
        {items.length > 5 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs text-blue-600 hover:text-blue-800"
          >
            {showAll ? 'Show less' : `Show all (${items.length})`}
          </button>
        )}
      </div>
    </div>
  );
};

export default Books;