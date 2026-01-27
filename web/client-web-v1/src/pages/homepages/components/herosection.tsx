import { useState, useEffect, useRef } from 'react';
import { FaHeart, FaShoppingCart, FaBookOpen, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import books from '../../navpages/books/data/BooksData';

const HeroSection = () => {
  const [currentBookIndex, setCurrentBookIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const scrollInterval = useRef(null);

  const currentBook = books[currentBookIndex];

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  // Auto-scroll functionality
  useEffect(() => {
    scrollInterval.current = setInterval(() => {
      setCurrentBookIndex((prevIndex) => (prevIndex + 1) % books.length);
      setIsWishlisted(false);
    }, 5000);

    return () => clearInterval(scrollInterval.current);
  }, []);

  const handleManualSelect = (index) => {
    setCurrentBookIndex(index);
    setIsWishlisted(false);
    clearInterval(scrollInterval.current);
    scrollInterval.current = setInterval(() => {
      setCurrentBookIndex((prevIndex) => (currentBookIndex + 1) % books.length);
      setIsWishlisted(false);
    }, 5000);
  };

  const navigateBook = (direction) => {
    const newIndex = direction === 'prev' 
      ? (currentBookIndex - 1 + books.length) % books.length
      : (currentBookIndex + 1) % books.length;
    handleManualSelect(newIndex);
  };

  return (
    <section className="bg-gradient-to-b from-sky-50 to-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Book Display */}
        <div className="relative bg-white rounded-lg md:rounded-xl shadow-lg md:shadow-xl overflow-hidden">
          {/* Navigation Arrows - Hidden on mobile */}
          <button 
            onClick={() => navigateBook('prev')}
            className="hidden sm:flex absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 md:p-3 rounded-full shadow-md text-sky-600 hover:text-sky-800 hover:bg-white transition-all"
            aria-label="Previous book"
          >
            <FaChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button 
            onClick={() => navigateBook('next')}
            className="hidden sm:flex absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 md:p-3 rounded-full shadow-md text-sky-600 hover:text-sky-800 hover:bg-white transition-all"
            aria-label="Next book"
          >
            <FaChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div className="flex flex-col lg:flex-row">
            {/* Book Cover - Left Side */}
            <div className="lg:w-2/5 p-6 sm:p-8 md:p-10 flex items-center justify-center bg-gradient-to-br from-sky-100 to-white relative">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/soft-circle-scales.png')]"></div>
              <div className="relative max-w-xs w-full aspect-[2/3] shadow-lg md:shadow-2xl rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <img 
                  src={currentBook.imageUrl} 
                  alt={currentBook.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10"></div>
              </div>
            </div>
            
            {/* Book Details - Right Side */}
            <div className="lg:w-3/5 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              <div className="max-w-2xl">
                {/* Category Badge */}
                <span className="inline-block bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 shadow-sm">
                  {currentBook.category}
                </span>
                
                {/* Title and Author */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
                  {currentBook.title}
                </h1>
                <p className="text-base sm:text-lg text-sky-700 mb-4 sm:mb-6 font-medium">by {currentBook.author}</p>
                
                {/* Rating and Meta */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`${i < Math.floor(currentBook.rating) ? 'text-amber-400' : 'text-gray-300'} ${i > 0 ? 'ml-1' : ''}`} 
                          size={16}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 sm:gap-4">
                    <div className="text-xs sm:text-sm">
                      <span className="block text-gray-500">Pages</span>
                      <span className="font-medium text-gray-700">{currentBook.pageCount}</span>
                    </div>
                    <div className="text-xs sm:text-sm">
                      <span className="block text-gray-500">Language</span>
                      <span className="font-medium text-gray-700">{currentBook.language}</span>
                    </div>
                    <div className="text-xs sm:text-sm">
                      <span className="block text-gray-500">Year</span>
                      <span className="font-medium text-gray-700">{currentBook.published}</span>
                    </div>
                  </div>
                </div>
                
                {/* Key Features */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Key Features</h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {currentBook.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-sky-500 mr-2 sm:mr-3 mt-0.5">•</span>
                        <span className="text-gray-700 text-sm sm:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  <a 
                    href={currentBook.buttons.knowMore}
                    className="flex-1 min-w-[120px] sm:min-w-[160px] md:min-w-[200px] bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg flex items-center justify-center transition-all shadow-md hover:shadow-lg text-sm sm:text-base"
                  >
                    <span className="font-medium">Know More</span>
                  </a>
                  <a 
                    href={currentBook.buttons.getBook}
                    className="flex-1 min-w-[100px] sm:min-w-[160px] border-2 border-sky-500 text-sky-600 hover:bg-sky-50 py-2 sm:py-3 px-4 sm:px-6 rounded-lg flex items-center justify-center transition-all text-sm sm:text-base"
                  >
                    <span className="font-medium">Get Book</span>
                  </a>
                  <a 
                    href={currentBook.buttons.readSummary}
                    className="flex-1 min-w-[100px] sm:min-w-[160px] border-2 border-sky-500 text-sky-600 hover:bg-sky-50 py-2 sm:py-3 px-4 sm:px-6 rounded-lg flex items-center justify-center transition-all text-sm sm:text-base"
                  >
                    <span className="font-medium">Summary</span>
                  </a>
                  <a 
                    href={currentBook.buttons.listenAudiobook}
                    className="flex-1 min-w-[100px] sm:min-w-[160px] border-2 border-sky-500 text-sky-600 hover:bg-sky-50 py-2 sm:py-3 px-4 sm:px-6 rounded-lg flex items-center justify-center transition-all text-sm sm:text-base"
                  >
                    <span className="font-medium">Audiobook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 sm:mt-8">
          <div className="inline-flex space-x-1 sm:space-x-2 p-2 bg-white rounded-full shadow-sm hidden md:inline-flex">
            {books.slice(0, 10).map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualSelect(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${index === currentBookIndex ? 'bg-sky-600 md:w-6' : 'bg-sky-200 hover:bg-sky-300'}`}
                aria-label={`Go to book ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;