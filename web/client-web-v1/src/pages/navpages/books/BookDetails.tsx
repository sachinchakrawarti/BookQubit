import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  FaShare, 
  FaHeart, 
  FaRegHeart, 
  FaBook, 
  FaBookOpen, 
  FaHeadphones, 
  FaComments,
  FaCheck,
  FaBookmark,
  FaPlus
} from 'react-icons/fa';
import books from './data/BooksData';
import { theme } from '../../../config/theme';

interface Book {
  id: string | number;
  slug?: string;
  title: string;
  author: string;
  description?: string;
  imageUrl: string;
  rating?: number;
  tags?: string[];
  category?: string;
  price?: string;
  format?: string;
  pageCount?: string | number;
  published?: string;
  isbn?: string;
  publisher?: string;
  language?: string;
  originalPublished?: string;
  genres?: string[];
  keyPoints?: string[];
  subjects?: string[];
  summary?: string;
  originaltitle?: string;
  country?: string;
  buttons?: {
    getBook?: string;
    readSummary?: string;
    listenAudiobook?: string;
  };
  otherEditions?: Array<{
    edition: string;
    publisher: string;
    year: string | number;
    isbn: string;
    link: string;
  }>;
  authorId?: string | number;
  badge?: string;
}

interface RelatedBookCardProps {
  book: Book;
}

const BookDetails: React.FC = () => {
  // Using :id in route but supporting both id and slug
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // State for book status and user interactions
  const [bookStatus, setBookStatus] = useState<'read' | 'unread' | 'reading'>('unread');
  const [isInWishlist, setIsInWishlist] = useState<boolean>(false);
  const [isInCollection, setIsInCollection] = useState<boolean>(false);
  const [showComments, setShowComments] = useState<boolean>(false);
  
  // Scroll to top when component mounts or id changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  console.log('🔍 Debug - Current ID from URL:', id);
  console.log('📚 Debug - Available books:', books.map(b => ({ id: b.id, title: b.title, slug: b.slug })));

  // Enhanced book finding with support for both ID and slug
  const book = books.find((book: Book) => {
    const param = id?.toLowerCase().trim();
    if (!param) return false;
    
    // 1. Try ID match first (since route uses :id)
    if (book.id.toString().toLowerCase() === param) {
      console.log('✅ Found by ID match');
      return true;
    }
    
    // 2. Try slug match
    const bookSlug = book.slug?.toLowerCase().trim();
    if (bookSlug === param) {
      console.log('✅ Found by slug match');
      return true;
    }
    
    // 3. Try generated slug from title
    const generatedSlug = book.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    if (generatedSlug === param) {
      console.log('✅ Found by generated slug');
      return true;
    }
    
    return false;
  });

  // Safe data access helpers
  const safeArray = <T,>(array: T[] | undefined): T[] => Array.isArray(array) ? array : [];
  const safeString = (str: string | undefined): string => str || 'Not specified';

  // Find related books
  const relatedByAuthor = books.filter(
    (b: Book) => b.author === book?.author && b.id !== book?.id
  );
  const relatedByCategory = books.filter(
    (b: Book) => b.category === book?.category && b.id !== book?.id
  );

  // Handler functions for buttons
  const handleWishlist = () => {
    if (!book) return;
    setIsInWishlist(!isInWishlist);
    console.log(`${isInWishlist ? 'Removed from' : 'Added to'} wishlist:`, book.title);
  };

  const handleShare = async () => {
    if (!book) return;
    if (navigator.share) {
      try {
        await navigator.share({
          title: book.title,
          text: `Check out "${book.title}" by ${book.author}`,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (error) {
        console.error('Error copying to clipboard:', error);
      }
    }
  };

  const handleComment = () => {
    setShowComments(!showComments);
    console.log(`${showComments ? 'Closed' : 'Opened'} comments for:`, book?.title);
  };

  const handleReadStatus = (status: 'read' | 'unread' | 'reading') => {
    setBookStatus(status);
    console.log(`Marked as ${status}:`, book?.title);
  };

  const handleAddToLibrary = () => {
    if (!book) return;
    setIsInCollection(!isInCollection);
    console.log(`${isInCollection ? 'Removed from' : 'Added to'} library:`, book.title);
  };

  const handleGetBook = () => {
    if (!book?.buttons?.getBook) return;
    window.open(book.buttons.getBook, '_blank');
    console.log('Getting book:', book.title);
  };

  const handleReadSummary = () => {
    if (!book?.buttons?.readSummary) return;
    window.open(book.buttons.readSummary, '_blank');
    console.log('Reading summary for:', book.title);
  };

  const handleListenAudiobook = () => {
    if (!book?.buttons?.listenAudiobook) return;
    window.open(book.buttons.listenAudiobook, '_blank');
    console.log('Listening to audiobook:', book.title);
  };

  // Handle image error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDIwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04MCAxMjBIMTIwVjE2MEg4MFYxMjBaIiBmaWxsPSIjOEREQ0RGIi8+CjxwYXRoIGQ9Ik02MCA2MEgxNDBWODBINjBWNjBaIiBmaWxsPSIjOEREQ0RGIi8+CjxwYXRoIGQ9Ik00MCAyMjBIMTYwVjI0MEg0MFYyMjBaIiBmaWxsPSIjOEREQ0RGIi8+Cjwvc3ZnPgo=';
    target.alt = 'Book cover not available';
  };

  if (!book) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Book not found</h2>
        <p className="text-gray-600 mb-4">The book you're looking for doesn't exist.</p>
        <p className="text-sm text-gray-500 mb-2">URL parameter: "{id}"</p>
        <p className="text-xs text-gray-400 mb-6">
          Type: {id && isNaN(Number(id)) ? 'Slug' : 'ID'} | 
          Total books: {books.length} | 
          Books with slugs: {books.filter(b => b.slug).length}
        </p>
        
        <div className="space-y-4">
          <Link 
            to="/books" 
            className={`px-6 py-3 ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.hoverBackground} ${theme.buttonColors.primaryButton.textColor} ${theme.border.button} ${theme.shadow.button} font-medium inline-block rounded-lg`}
          >
            Browse All Books
          </Link>
          
          <div className="text-xs text-gray-500 max-h-60 overflow-y-auto">
            <p className="font-semibold mb-2">Available books ({books.length}):</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {books.map((b: Book) => (
                <div key={b.id} className="flex justify-between items-center p-2 border rounded">
                  <span className="truncate flex-1">{b.title}</span>
                  <Link 
                    to={`/books/${b.slug || b.id}`} 
                    className="text-blue-600 hover:underline ml-2 whitespace-nowrap"
                  >
                    {b.slug ? 'View' : 'View (ID)'}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${theme.background.section} min-h-screen`}>
      <div className={`${theme.layout.containerWidth} mx-auto ${theme.layout.sectionPadding}`}>
        {/* Main Book Details */}
        <div className={`flex flex-col lg:flex-row gap-8 mb-16 ${theme.shadow.container} ${theme.border.default} p-6 bg-white rounded-lg`}>
          {/* Book Cover */}
          <div className={`lg:w-1/3 flex justify-center ${theme.background.bookCoverSide} ${theme.border.default} p-6 rounded-lg`}>
            <div className="w-full max-w-xs flex items-center justify-center">
              <img 
                src={book.imageUrl} 
                alt={book.title} 
                className="w-full h-80 object-contain rounded-lg"
                style={{ maxHeight: '600px', minHeight: '500px' }}
                onError={handleImageError}
              />
            </div>
          </div>
          
          {/* Book Info */}
          <div className="lg:w-2/3 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{book.title}</h1>
              <p className="text-xl text-gray-700">
                by{' '}
                <a
                  href={`https://en.wikipedia.org/wiki/${encodeURIComponent(book.author)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 hover:underline"
                >
                  {book.author}
                </a>
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(book.rating || 0) ? theme.iconColors.starFilled : theme.iconColors.starEmpty}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {safeArray(book.tags).map((tag, index) => (
                <span 
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${theme.textColors.badge} bg-sky-100`}
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="py-4 border-t border-b border-gray-200">
              <p className="text-gray-700">{book.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900">Category</h3>
                <p className="text-gray-700">{safeString(book.category)}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Price</h3>
                <p className="text-xl font-bold text-sky-700">{safeString(book.price)}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Format</h3>
                <p className="text-gray-700">{safeString(book.format)}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Pages</h3>
                <p className="text-gray-700">{safeString(book.pageCount?.toString())}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Published</h3>
                <p className="text-gray-700">{safeString(book.published)}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">ISBN</h3>
                <p className="text-gray-700">{safeString(book.isbn)}</p>
              </div>
            </div>
            
            {/* Main Action Buttons */}
            <div className="flex flex-wrap gap-6 pt-4">
              {/* Get Book Button */}
              <button 
                onClick={handleGetBook}
                className={`flex-1 min-w-[140px] px-4 py-3 flex items-center justify-center gap-2 ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.hoverBackground} ${theme.buttonColors.primaryButton.textColor} ${theme.border.button} ${theme.shadow.button} font-medium rounded-lg text-sm transition-colors`}
              >
                <FaBook className="w-4 h-4" />
                Get Book
              </button>

              {/* Summary Button */}
              <button 
                onClick={handleReadSummary}
                className={`flex-1 min-w-[140px] px-4 py-3 flex items-center justify-center gap-2 ${theme.buttonColors.secondaryButton.background} ${theme.buttonColors.secondaryButton.hoverBackground} ${theme.buttonColors.secondaryButton.textColor} ${theme.border.button} ${theme.shadow.button} font-medium rounded-lg text-sm transition-colors`}
              >
                <FaBookOpen className="w-4 h-4" />
                Summary
              </button>

              {/* Audiobook Button */}
              <button 
                onClick={handleListenAudiobook}
                className={`flex-1 min-w-[140px] px-4 py-3 flex items-center justify-center gap-2 ${theme.buttonColors.secondaryButton.background} ${theme.buttonColors.secondaryButton.hoverBackground} ${theme.buttonColors.secondaryButton.textColor} ${theme.border.button} ${theme.shadow.button} font-medium rounded-lg text-sm transition-colors`}
              >
                <FaHeadphones className="w-4 h-4" />
                Audiobook
              </button>

              {/* Wishlist Button */}
              <button 
                onClick={handleWishlist}
                className={`flex-1 min-w-[140px] px-4 py-3 flex items-center justify-center gap-2 ${isInWishlist ? 'bg-pink-600 hover:bg-pink-700 text-white' : theme.buttonColors.secondaryButton.background + ' ' + theme.buttonColors.secondaryButton.hoverBackground + ' ' + theme.buttonColors.secondaryButton.textColor} ${theme.border.button} ${theme.shadow.button} font-medium rounded-lg text-sm transition-colors`}
              >
                {isInWishlist ? <FaHeart className="w-4 h-4" /> : <FaRegHeart className="w-4 h-4" />}
                {isInWishlist ? 'Wishlisted' : 'Wishlist'}
              </button>

              {/* Share Button */}
              <button 
                onClick={handleShare}
                className={`flex-1 min-w-[140px] px-4 py-3 flex items-center justify-center gap-2 ${theme.buttonColors.secondaryButton.background} ${theme.buttonColors.secondaryButton.hoverBackground} ${theme.buttonColors.secondaryButton.textColor} ${theme.border.button} ${theme.shadow.button} font-medium rounded-lg text-sm transition-colors`}
              >
                <FaShare className="w-4 h-4" />
                Share
              </button>

              {/* Add to Library Button */}
              <button 
                onClick={handleAddToLibrary}
                className={`flex-1 min-w-[140px] px-4 py-3 flex items-center justify-center gap-2 ${isInCollection ? 'bg-green-600 hover:bg-green-700 text-white' : theme.buttonColors.secondaryButton.background + ' ' + theme.buttonColors.secondaryButton.hoverBackground + ' ' + theme.buttonColors.secondaryButton.textColor} ${theme.border.button} ${theme.shadow.button} font-medium rounded-lg text-sm transition-colors`}
              >
                {isInCollection ? <FaBookmark className="w-4 h-4" /> : <FaPlus className="w-4 h-4" />}
                {isInCollection ? 'In Library' : 'My Library'}
              </button>

              {/* Read Status Button */}
              <button 
                onClick={() => handleReadStatus(bookStatus === 'read' ? 'unread' : 'read')}
                className={`flex-1 min-w-[140px] px-4 py-3 flex items-center justify-center gap-2 ${bookStatus === 'read' ? 'bg-green-600 hover:bg-green-700 text-white' : theme.buttonColors.secondaryButton.background + ' ' + theme.buttonColors.secondaryButton.hoverBackground + ' ' + theme.buttonColors.secondaryButton.textColor} ${theme.border.button} ${theme.shadow.button} font-medium rounded-lg text-sm transition-colors`}
              >
                {bookStatus === 'read' ? <FaCheck className="w-4 h-4" /> : <FaBookOpen className="w-4 h-4" />}
                {bookStatus === 'read' ? 'Read' : 'Mark Read'}
              </button>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className={`${theme.shadow.container} ${theme.border.default} p-6 bg-white mb-16 rounded-lg`}>
          {/* Comment Button */}
          <button 
            onClick={handleComment}
            className={`flex-1 min-w-[140px] px-4 py-3 flex items-center justify-center gap-2 ${showComments ? 'bg-blue-600 hover:bg-blue-700 text-white' : theme.buttonColors.secondaryButton.background + ' ' + theme.buttonColors.secondaryButton.hoverBackground + ' ' + theme.buttonColors.secondaryButton.textColor} ${theme.border.button} ${theme.shadow.button} font-medium rounded-lg text-sm transition-colors`}
          >
            <FaComments className="w-4 h-4" />
            {showComments ? 'Hide Comments' : 'Comment'}
          </button>

          {showComments && (
            <div className="mt-6 p-4 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Comments</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <input 
                    type="text" 
                    placeholder="Add your comment..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                    Post
                  </button>
                </div>
                <div className="text-gray-500 text-center py-4">
                  No comments yet. Be the first to comment!
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Detailed Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Key Points */}
          <div className={`${theme.shadow.container} ${theme.border.default} p-6 bg-white rounded-lg`}>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Key Highlights</h2>
            <ul className="space-y-3">
              {safeArray(book.keyPoints).map((point, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-sky-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Subjects */}
          <div className={`${theme.shadow.container} ${theme.border.default} p-6 bg-white rounded-lg`}>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Subjects Covered</h2>
            <div className="flex flex-wrap gap-2">
              {safeArray(book.subjects).map((subject, index) => (
                <span 
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${theme.textColors.secondary} bg-gray-100`}
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>
          
          {/* Book Details */}
          <div className={`${theme.shadow.container} ${theme.border.default} p-6 bg-white rounded-lg`}>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Publication Details</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900">Publisher</h3>
                <p className="text-gray-700">{safeString(book.publisher)}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Language</h3>
                <p className="text-gray-700">{safeString(book.language)}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Original Published</h3>
                <p className="text-gray-700">{safeString(book.originalPublished)}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Genres</h3>
                <p className="text-gray-700">{safeArray(book.genres).join(', ')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className={`${theme.shadow.container} ${theme.border.default} p-6 bg-white mb-16 rounded-lg`}>
          <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-gray-900">Publisher</h3>
              <p className="text-gray-700">{safeString(book.publisher)}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">Original Title</h3>
              <p className="text-gray-700">{safeString(book.originaltitle)}</p>
            </div> 

            <div>
              <h3 className="font-semibold text-gray-900">Language</h3>
              <p className="text-gray-700">{safeString(book.language)}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Original Published</h3>
              <p className="text-gray-700">{safeString(book.originalPublished)}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Genres</h3>
              <p className="text-gray-700">{safeArray(book.genres).join(', ')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Country</h3>
              <p className="text-gray-700">{safeString(book.country)}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">ISBN</h3>
              <p className="text-gray-700">{safeString(book.isbn)}</p>
            </div>
          </div>
        </div>
        
        {/* Summary */}
        <div className={`${theme.shadow.container} ${theme.border.default} p-6 bg-white mb-16 rounded-lg`}>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Summary</h2>
          <div className="prose max-w-none text-gray-700">
            {book.summary?.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Other Editions */}
        {book.otherEditions && book.otherEditions.length > 0 && (
          <div className="other-editions mt-5 mb-16">
            <h3 className="text-2xl font-semibold mb-3">Other Editions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {book.otherEditions.map((edition, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition">
                  <h4 className="font-bold">{edition.edition} Edition</h4>
                  <p>Publisher: {edition.publisher}</p>
                  <p>Year: {edition.year}</p>
                  <p>ISBN: {edition.isbn}</p>
                  <a
                    href={edition.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    View
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Book Statistics & Analytics */}
        <div className={`${theme.shadow.container} ${theme.border.default} p-6 bg-white mb-16 rounded-lg`}>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Book Analytics & Performance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Reader Engagement */}
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-600 font-medium">Reader Engagement</p>
                  <p className="text-2xl font-bold text-purple-900">78%</p>
                  <p className="text-xs text-purple-600 mt-1">+5% from last month</p>
                </div>
                <div className="bg-purple-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* BookQubit Ranking */}
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600 font-medium">BookQubit Ranking</p>
                  <p className="text-2xl font-bold text-blue-900">#24</p>
                  <p className="text-xs text-blue-600 mt-1">Top 1% in Category</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Book Relevance */}
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600 font-medium">Book Relevance</p>
                  <p className="text-2xl font-bold text-green-900">92%</p>
                  <p className="text-xs text-green-600 mt-1">Current Trends</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Highest/Lowest Sales */}
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-orange-600 font-medium">Sales Performance</p>
                  <p className="text-lg font-bold text-orange-900">Peak: 2022</p>
                  <p className="text-sm text-orange-600">Low: 2018</p>
                </div>
                <div className="bg-orange-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews & Rating Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Reviews Summary */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Reviews Summary</h3>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-600">4.7</div>
                    <div className="flex justify-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < 4 ? 'text-yellow-500' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Based on 2,458 reviews</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-gray-800">84%</div>
                    <div className="text-sm text-gray-600">Positive Reviews</div>
                    <div className="text-lg font-semibold text-gray-800 mt-2">12%</div>
                    <div className="text-sm text-gray-600">Critical Reviews</div>
                  </div>
                </div>
                
                {/* Review Highlights */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <span className="text-sm font-medium">Engaging Content</span>
                    <span className="text-sm text-green-600">94%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <span className="text-sm font-medium">Writing Quality</span>
                    <span className="text-sm text-green-600">89%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
                    <span className="text-sm font-medium">Story Depth</span>
                    <span className="text-sm text-blue-600">82%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Rating Distribution */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Rating Distribution</h3>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="space-y-4">
                  {/* 5 Stars */}
                  <div className="flex items-center">
                    <div className="flex items-center w-20">
                      <span className="text-sm text-gray-600 mr-2">5 Stars</span>
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-3 mx-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <span className="w-12 text-sm font-medium text-gray-700">1,843</span>
                  </div>
                  
                  {/* 4 Stars */}
                  <div className="flex items-center">
                    <div className="flex items-center w-20">
                      <span className="text-sm text-gray-600 mr-2">4 Stars</span>
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-3 mx-3">
                      <div className="bg-green-400 h-3 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                    <span className="w-12 text-sm font-medium text-gray-700">369</span>
                  </div>
                  
                  {/* 3 Stars */}
                  <div className="flex items-center">
                    <div className="flex items-center w-20">
                      <span className="text-sm text-gray-600 mr-2">3 Stars</span>
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-3 mx-3">
                      <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '6%' }}></div>
                    </div>
                    <span className="w-12 text-sm font-medium text-gray-700">147</span>
                  </div>
                  
                  {/* 2 Stars */}
                  <div className="flex items-center">
                    <div className="flex items-center w-20">
                      <span className="text-sm text-gray-600 mr-2">2 Stars</span>
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-3 mx-3">
                      <div className="bg-orange-400 h-3 rounded-full" style={{ width: '3%' }}></div>
                    </div>
                    <span className="w-12 text-sm font-medium text-gray-700">74</span>
                  </div>
                  
                  {/* 1 Star */}
                  <div className="flex items-center">
                    <div className="flex items-center w-20">
                      <span className="text-sm text-gray-600 mr-2">1 Star</span>
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-3 mx-3">
                      <div className="bg-red-500 h-3 rounded-full" style={{ width: '1%' }}></div>
                    </div>
                    <span className="w-12 text-sm font-medium text-gray-700">25</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Books */}
        {(relatedByAuthor.length > 0 || relatedByCategory.length > 0) && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
            
            {relatedByAuthor.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">More by {book.author}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedByAuthor.map((relatedBook: Book) => (
                    <RelatedBookCard key={relatedBook.id} book={relatedBook} />
                  ))}
                </div>
              </div>
            )}
            
            {relatedByCategory.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Similar in {book.category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {relatedByCategory.map((relatedBook: Book) => (
                    <RelatedBookCard key={relatedBook.id} book={relatedBook} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 py-8 border-t border-gray-200">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`px-6 py-3 text-base font-medium ${theme.buttonColors.secondaryButton.background} ${theme.buttonColors.secondaryButton.hoverBackground} ${theme.buttonColors.secondaryButton.textColor} ${theme.border.button} ${theme.shadow.button} rounded-lg transition-colors`}
          >
            Go to Top
          </button>
          <Link
            to="/books"
            className={`px-6 py-3 text-base font-medium text-center ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.hoverBackground} ${theme.buttonColors.primaryButton.textColor} ${theme.border.button} ${theme.shadow.button} rounded-lg transition-colors`}
          >
            Back to Books
          </Link>
        </div>
      </div>
    </div>
  );
};

// Component for related book cards
const RelatedBookCard: React.FC<RelatedBookCardProps> = ({ book }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDIwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04MCAxMjBIMTIwVjE2MEg4MFYxMjBaIiBmaWxsPSIjOEREQ0RGIi8+CjxwYXRoIGQ9Ik02MCA2MEgxNDBWODBINjBWNjBaIiBmaWxsPSIjOEREQ0RGIi8+CjxwYXRoIGQ9Ik00MCAyMjBIMTYwVjI0MEg0MFYyMjBaIiBmaWxsPSIjOEREQ0RGIi8+Cjwvc3ZnPgo=';
    target.alt = 'Book cover not available';
  };

  return (
    <div className={`${theme.shadow.container} ${theme.border.default} overflow-hidden bg-white hover:translate-y-[-4px] transition-transform rounded-lg`}>
      <div className={`p-4 ${theme.background.bookCoverSide} flex justify-center items-center h-48`}>
        <img 
          src={book.imageUrl} 
          alt={book.title} 
          className="h-full w-full object-contain max-h-40"
          onError={handleImageError}
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 line-clamp-2 mb-1">{book.title}</h3>
        <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
        <div className="flex items-center mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(book.rating || 0) ? theme.iconColors.starFilled : theme.iconColors.starEmpty}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-sky-700">{book.price}</span>
          <Link 
            to={`/books/${book.slug || book.id}`}
            className={`text-sm px-4 py-2 ${theme.buttonColors.secondaryButton.background} ${theme.buttonColors.secondaryButton.hoverBackground} ${theme.buttonColors.secondaryButton.textColor} ${theme.border.button} ${theme.shadow.button} rounded-lg transition-colors`}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;