import { useState, useEffect, useRef } from 'react';
import { FaHeart, FaShoppingCart, FaBookOpen, FaStar, FaChevronLeft, FaChevronRight, FaBook, FaHeadphones, FaEye, FaDownload } from 'react-icons/fa';
import books from '../../../../data/BooksData';

const HeroSection = () => {
  const [currentBookIndex, setCurrentBookIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const scrollInterval = useRef(null);
  const containerRef = useRef(null);

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

  // Pause auto-scroll on hover
  useEffect(() => {
    const container = containerRef.current;
    
    const pauseAutoScroll = () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }
    };
    
    const resumeAutoScroll = () => {
      if (!scrollInterval.current) {
        scrollInterval.current = setInterval(() => {
          setCurrentBookIndex((prevIndex) => (prevIndex + 1) % books.length);
          setIsWishlisted(false);
        }, 5000);
      }
    };

    if (container) {
      container.addEventListener('mouseenter', pauseAutoScroll);
      container.addEventListener('mouseleave', resumeAutoScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('mouseenter', pauseAutoScroll);
        container.removeEventListener('mouseleave', resumeAutoScroll);
      }
    };
  }, []);

  const handleManualSelect = (index) => {
    setCurrentBookIndex(index);
    setIsWishlisted(false);
    clearInterval(scrollInterval.current);
    scrollInterval.current = setInterval(() => {
      setCurrentBookIndex((prevIndex) => (prevIndex + 1) % books.length);
      setIsWishlisted(false);
    }, 5000);
  };

  const navigateBook = (direction) => {
    const newIndex = direction === 'prev' 
      ? (currentBookIndex - 1 + books.length) % books.length
      : (currentBookIndex + 1) % books.length;
    handleManualSelect(newIndex);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') navigateBook('prev');
      if (e.key === 'ArrowRight') navigateBook('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentBookIndex]);

  return (
    <section 
      ref={containerRef}
      className="bg-gradient-to-b from-sky-50 via-white to-sky-50/50 py-12 px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Book Display */}
        <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl border border-sky-100/50">
          {/* Navigation Arrows - Enhanced for desktop */}
          <button 
            onClick={() => navigateBook('prev')}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm p-4 rounded-full shadow-xl text-sky-600 hover:text-sky-800 hover:bg-white hover:scale-110 transition-all duration-300 group"
            aria-label="Previous book"
          >
            <FaChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          
          <button 
            onClick={() => navigateBook('next')}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/95 backdrop-blur-sm p-4 rounded-full shadow-xl text-sky-600 hover:text-sky-800 hover:bg-white hover:scale-110 transition-all duration-300 group"
            aria-label="Next book"
          >
            <FaChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <div className="flex">
            {/* Book Cover - Left Side - Enhanced for desktop */}
            <div className="w-2/5 p-12 flex items-center justify-center bg-gradient-to-br from-sky-100/80 to-white relative group">
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
              
              {/* Wishlist button */}
              <button
                onClick={toggleWishlist}
                className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <FaHeart 
                  className={`w-5 h-5 ${isWishlisted ? 'text-red-500 fill-red-500' : 'text-gray-400 hover:text-red-400'} transition-all`} 
                />
              </button>

              {/* Book Cover with enhanced styling */}
              <div className="relative max-w-md w-full">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-sky-400/20 to-blue-400/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative aspect-[2/3] shadow-2xl rounded-xl overflow-hidden transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
                    <img 
                      src={currentBook.imageUrl} 
                      alt={currentBook.title}
                      className="w-full h-full object-cover"
                      loading="eager"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/400x600?text=Book+Cover";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent p-4">
                      <div className="text-center">
                        <span className="text-xs font-semibold text-sky-700 uppercase tracking-wider">Featured Book</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative corner accents */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-sky-400/50 rounded-tl-lg"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-sky-400/50 rounded-tr-lg"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-sky-400/50 rounded-bl-lg"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-sky-400/50 rounded-br-lg"></div>
              </div>
            </div>
            
            {/* Book Details - Right Side - Enhanced for desktop */}
            <div className="w-3/5 p-12 flex flex-col justify-center">
              <div className="max-w-2xl">
                {/* Category and Quick Stats */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block bg-gradient-to-r from-sky-100 to-blue-100 text-sky-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                    {currentBook.category}
                  </span>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-sky-700">{currentBook.rating.toFixed(1)}</div>
                      <div className="text-xs text-gray-500 mt-1">Rating</div>
                    </div>
                    <div className="h-8 w-px bg-gray-200"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-sky-700">{currentBook.pageCount}</div>
                      <div className="text-xs text-gray-500 mt-1">Pages</div>
                    </div>
                  </div>
                </div>
                
                {/* Title and Author */}
                <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4 leading-tight tracking-tight">
                  {currentBook.title}
                </h1>
                <div className="flex items-center mb-8">
                  <div className="w-10 h-px bg-sky-300 mr-4"></div>
                  <p className="text-xl text-sky-700 font-medium">by {currentBook.author}</p>
                  <div className="w-10 h-px bg-sky-300 ml-4"></div>
                </div>
                
                {/* Enhanced Rating */}
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="flex mr-4">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`${i < Math.floor(currentBook.rating) ? 'text-amber-500 fill-amber-500' : 'text-gray-300'} ${i > 0 ? 'ml-2' : ''} w-6 h-6`} 
                        />
                      ))}
                    </div>
                    <span className="text-lg text-gray-600">
                      {currentBook.rating.toFixed(1)} out of 5 ({currentBook.reviewCount}+ reviews)
                    </span>
                  </div>
                  
                  {/* Meta Info Grid */}
                  <div className="grid grid-cols-3 gap-6 bg-sky-50/50 p-4 rounded-xl">
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">Language</div>
                      <div className="font-semibold text-gray-800">{currentBook.language}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">Published</div>
                      <div className="font-semibold text-gray-800">{currentBook.published}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">Format</div>
                      <div className="font-semibold text-gray-800">Paperback</div>
                    </div>
                  </div>
                </div>
                
                {/* Key Features with enhanced styling */}
                <div className="mb-10">
                  <div className="flex items-center mb-6">
                    <FaBookOpen className="w-5 h-5 text-sky-600 mr-3" />
                    <h3 className="text-2xl font-semibold text-gray-800">What You'll Discover</h3>
                  </div>
                  <ul className="space-y-4">
                    {currentBook.keyPoints.map((point, index) => (
                      <li 
                        key={index} 
                        className="flex items-start group hover:bg-sky-50/50 p-3 rounded-lg transition-all"
                      >
                        <span className="text-sky-500 mr-4 mt-1 text-xl">•</span>
                        <span className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Enhanced Action Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <div className="flex gap-4">
                      <a 
                        href={currentBook.buttons.knowMore}
                        className="flex-1 bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white py-4 px-8 rounded-xl flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                      >
                        <FaEye className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                        <span className="font-semibold text-lg">View Details</span>
                      </a>
                      
                      <a 
                        href={currentBook.buttons.getBook}
                        className="flex-1 border-2 border-sky-500 text-sky-600 hover:bg-sky-50 py-4 px-8 rounded-xl flex items-center justify-center transition-all hover:border-sky-600 hover:-translate-y-1 group"
                      >
                        <FaDownload className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                        <span className="font-semibold text-lg">Download PDF</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="col-span-2 flex gap-4 mt-4">
                    <a 
                      href={currentBook.buttons.readSummary}
                      className="flex-1 border border-sky-200 bg-sky-50/50 text-sky-700 hover:bg-sky-100 py-3 px-6 rounded-xl flex items-center justify-center transition-all hover:border-sky-300 group"
                    >
                      <FaBook className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Read Summary</span>
                    </a>
                    
                    <a 
                      href={currentBook.buttons.listenAudiobook}
                      className="flex-1 border border-sky-200 bg-sky-50/50 text-sky-700 hover:bg-sky-100 py-3 px-6 rounded-xl flex items-center justify-center transition-all hover:border-sky-300 group"
                    >
                      <FaHeadphones className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Audiobook</span>
                    </a>
                    
                    <button
                      className="flex-1 border border-sky-200 bg-sky-50/50 text-sky-700 hover:bg-sky-100 py-3 px-6 rounded-xl flex items-center justify-center transition-all hover:border-sky-300 group"
                      onClick={() => {/* Add to cart logic */}}
                    >
                      <FaShoppingCart className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Navigation Dots */}
        <div className="mt-10">
          <div className="flex flex-col items-center">
            <div className="flex space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-sky-100">
              <div className="flex items-center space-x-4">
                {books.slice(0, 8).map((book, index) => (
                  <button
                    key={index}
                    onClick={() => handleManualSelect(index)}
                    className={`flex flex-col items-center p-3 rounded-xl transition-all duration-300 ${
                      index === currentBookIndex 
                        ? 'bg-gradient-to-b from-sky-50 to-white shadow-md border border-sky-200' 
                        : 'hover:bg-sky-50/50'
                    }`}
                    aria-label={`Go to ${book.title}`}
                  >
                    <div className={`w-2 h-2 rounded-full mb-2 ${
                      index === currentBookIndex ? 'bg-sky-600 w-3 h-3' : 'bg-sky-300'
                    }`}></div>
                    <span className={`text-xs font-medium ${
                      index === currentBookIndex ? 'text-sky-700' : 'text-gray-500'
                    }`}>
                      {index + 1}
                    </span>
                  </button>
                ))}
                {books.length > 8 && (
                  <div className="pl-4 border-l border-gray-200">
                    <span className="text-sm text-gray-400">
                      +{books.length - 8} more
                    </span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Book Counter and Progress */}
            <div className="flex items-center space-x-8 mt-6">
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">Current Selection</div>
                <div className="text-2xl font-bold text-sky-700">
                  {currentBookIndex + 1} <span className="text-gray-400 text-lg font-normal">/ {books.length}</span>
                </div>
              </div>
              
              <div className="flex-1 max-w-md">
                <div className="h-2 bg-sky-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${((currentBookIndex + 1) / books.length) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>1</span>
                  <span>{books.length}</span>
                </div>
              </div>
              
              <div className="text-sm text-gray-600">
                Auto-scroll: <span className="font-semibold text-sky-600">5s</span> interval
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;