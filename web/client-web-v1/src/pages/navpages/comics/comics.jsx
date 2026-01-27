// frontend/src/pages/navpages/comics/comics.jsx
import React, { useState, useMemo } from "react";
import { theme } from "../../../config/theme";
import { ComicsData } from "./data/ComicsData";
import ComicRectangleCard from "./components/ComicRectangleCard";
import ComicSquareCard from "./components/ComicSquareCard";

const Comics = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPublisher, setSelectedPublisher] = useState("All");
  const [wishlist, setWishlist] = useState([]);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'

  // Extract unique categories and publishers using useMemo for optimization
  const { categories, publishers } = useMemo(() => {
    const uniqueCategories = [
      "All",
      ...new Set(ComicsData.map((comic) => comic.category)),
    ];
    const uniquePublishers = [
      "All",
      ...new Set(ComicsData.map((comic) => comic.publisher)),
    ];
    return { categories: uniqueCategories, publishers: uniquePublishers };
  }, []);

  // Filter comics based on selected category and publisher
  const filteredComics = useMemo(() => {
    return ComicsData.filter((comic) => {
      const categoryMatch =
        selectedCategory === "All" || comic.category === selectedCategory;
      const publisherMatch =
        selectedPublisher === "All" || comic.publisher === selectedPublisher;
      return categoryMatch && publisherMatch;
    });
  }, [selectedCategory, selectedPublisher]);

  // Handle tag clicks for filtering
  const handleTagClick = (tag) => {
    if (categories.includes(tag)) {
      setSelectedCategory(tag);
    } else if (publishers.includes(tag)) {
      setSelectedPublisher(tag);
    }
    console.log("Tag clicked:", tag);
  };

  // Handle wishlist toggle
  const handleWishlistToggle = (comicId, isWishlisted) => {
    setWishlist((prev) =>
      isWishlisted ? [...prev, comicId] : prev.filter((id) => id !== comicId),
    );
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSelectedCategory("All");
    setSelectedPublisher("All");
  };

  return (
    <div className={`${theme.background.section} min-h-screen`}>
      <div className={`${theme.layout.sectionPadding}`}>
        <div className={`${theme.layout.containerWidth} mx-auto`}>
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1
              className={`text-4xl md:text-5xl font-bold ${theme.textColors.primary} mb-4`}
            >
              Comics Collection
            </h1>
            <p
              className={`text-xl ${theme.textColors.secondary} max-w-3xl mx-auto mb-8`}
            >
              Explore the legendary comics that started it all
            </p>

            {/* View Mode Toggle and Active Filters */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
              {/* View Mode Toggle */}
              <div className="hidden sm:block flex items-center gap-2">
                <span className={`text-sm ${theme.textColors.secondary}`}>
                  View:
                </span>
                <div
                  className={`flex ${theme.background.navigationDots} ${theme.border.button} ${theme.shadow.navigationDotContainer} p-1`}
                >
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`px-3 py-1 text-sm font-medium transition-all duration-300 ${
                      viewMode === "grid"
                        ? `${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.textColor} ${theme.border.button}`
                        : `${theme.textColors.secondary} hover:${theme.textColors.highlight}`
                    }`}
                  >
                    Grid
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`px-3 py-1 text-sm font-medium transition-all duration-300 ${
                      viewMode === "list"
                        ? `${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.textColor} ${theme.border.button}`
                        : `${theme.textColors.secondary} hover:${theme.textColors.highlight}`
                    }`}
                  >
                    List
                  </button>
                </div>
              </div>

              {/* Active Filters Display */}
              {(selectedCategory !== "All" || selectedPublisher !== "All") && (
                <div className="flex items-center gap-2">
                  <span className={`text-sm ${theme.textColors.secondary}`}>
                    Active filters:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory !== "All" && (
                      <span
                        className={`px-3 py-1 text-sm ${theme.background.navigationDots} ${theme.textColors.primary} ${theme.border.button} rounded-full`}
                      >
                        Category: {selectedCategory}
                      </span>
                    )}
                    {selectedPublisher !== "All" && (
                      <span
                        className={`px-3 py-1 text-sm ${theme.background.navigationDots} ${theme.textColors.primary} ${theme.border.button} rounded-full`}
                      >
                        Publisher: {selectedPublisher}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={handleResetFilters}
                    className={`px-3 py-1 text-sm ${theme.buttonColors.secondaryButton.background} ${theme.buttonColors.secondaryButton.textColor} hover:${theme.buttonColors.secondaryButton.hoverBackground} ${theme.border.button} rounded-full transition-all duration-300`}
                  >
                    Clear All
                  </button>
                </div>
              )}
            </div>

            {/* Filter Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Category Filter */}
              <div className="text-center">
                <h3
                  className={`text-lg font-semibold ${theme.textColors.primary} mb-3`}
                >
                  Filter by Category
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                        selectedCategory === category
                          ? `${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.textColor} ${theme.shadow.button}`
                          : `${theme.buttonColors.secondaryButton.background} ${theme.buttonColors.secondaryButton.textColor} hover:${theme.buttonColors.secondaryButton.hoverBackground}`
                      } ${theme.border.button} rounded-full`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Publisher Filter */}
              <div className="text-center">
                <h3
                  className={`text-lg font-semibold ${theme.textColors.primary} mb-3`}
                >
                  Filter by Publisher
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {publishers.map((publisher) => (
                    <button
                      key={publisher}
                      onClick={() => setSelectedPublisher(publisher)}
                      className={`px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                        selectedPublisher === publisher
                          ? `${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.textColor} ${theme.shadow.button}`
                          : `${theme.buttonColors.secondaryButton.background} ${theme.buttonColors.secondaryButton.textColor} hover:${theme.buttonColors.secondaryButton.hoverBackground}`
                      } ${theme.border.button} rounded-full`}
                    >
                      {publisher}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div
              className={`text-center ${theme.textColors.secondary} text-sm mb-4`}
            >
              Showing {filteredComics.length} of {ComicsData.length} comics
            </div>
          </div>

          {/* Comics Display */}
          {viewMode === "grid" ? (
            // Grid View with Square Cards
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredComics.map((comic) => (
                <ComicSquareCard
                  key={comic.id}
                  comic={comic}
                  onTagClick={handleTagClick}
                  onWishlistToggle={handleWishlistToggle}
                />
              ))}
            </div>
          ) : (
            // List View with Rectangle Cards
            <div className="space-y-6">
              {filteredComics.map((comic) => (
                <ComicRectangleCard
                  key={comic.id}
                  comic={comic}
                  onTagClick={handleTagClick}
                />
              ))}
            </div>
          )}

          {/* Empty State */}
          {filteredComics.length === 0 && (
            <div className="text-center py-12">
              <div className={`text-6xl ${theme.textColors.secondary} mb-4`}>
                📚
              </div>
              <h3
                className={`text-2xl font-bold ${theme.textColors.primary} mb-2`}
              >
                No comics found
              </h3>
              <p className={`${theme.textColors.secondary} mb-4`}>
                Try selecting different categories or publishers to see more
                comics.
              </p>
              <button
                onClick={handleResetFilters}
                className={`px-6 py-2 ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.textColor} ${theme.border.button} ${theme.shadow.button} rounded-full transition-all duration-300 hover:scale-105`}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comics;
