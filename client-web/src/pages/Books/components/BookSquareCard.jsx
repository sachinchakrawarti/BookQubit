import React from 'react';
import { Link } from 'react-router-dom';

const BookSquareCard = ({ book, onTagClick }) => {
  // Format published year
  const formatPublishedYear = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return isNaN(date) ? dateString : date.getFullYear();
  };

  return (
    <article className="w-full bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      {/* Image with badge */}
      <div className="relative aspect-[3/4] bg-gray-50 flex items-center justify-center">
        <img 
          src={book.imageUrl || '/placeholder-book.jpg'} 
          alt={`Cover of ${book.title}`} 
          className="w-full h-full object-contain p-4"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = '/placeholder-book.jpg';
          }}
        />
        {book.badge && (
          <span className="absolute top-2 right-2 bg-sky-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            {book.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-1" title={book.title}>
            {book.title}
          </h3>

          {/* Author and Published Year */}
          <div className="flex items-center gap-2 text-sm mb-2">
            <span className="text-gray-600">by </span>
            <Link 
              to={`/authors/${book.authorId}`} 
              className="font-medium text-sky-600 hover:underline"
            >
              {book.author}
            </Link>
            {book.published && (
              <span className="text-xs text-gray-500">
                ({formatPublishedYear(book.published)})
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-700 mb-3 line-clamp-2" title={book.description}>
            {book.description}
          </p>

          {/* Category */}
          {book.category && (
            <div className="mb-2">
              <span className="text-xs font-semibold text-gray-500">Category: </span>
              <div className="flex flex-wrap gap-1 mt-1">
                {(Array.isArray(book.category) ? book.category : [book.category]).map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => onTagClick && onTagClick(cat)}
                    className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Subjects */}
          {book.subjects && book.subjects.length > 0 && (
            <div className="mb-2">
              <span className="text-xs font-semibold text-gray-500">Subjects: </span>
              <div className="flex flex-wrap gap-1 mt-1">
                {book.subjects.slice(0, 3).map((subject, i) => (
                  <button
                    key={i}
                    onClick={() => onTagClick && onTagClick(subject)}
                    className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {book.tags && book.tags.length > 0 && (
            <div className="mb-2">
              <span className="text-xs font-semibold text-gray-500">Tags: </span>
              <div className="flex flex-wrap gap-1 mt-1">
                {book.tags.slice(0, 3).map((tag, i) => (
                  <button
                    key={i}
                    onClick={() => onTagClick && onTagClick(tag)}
                    className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-4 space-y-2">
          {/* First row - 50/50 buttons */}
          <div className="grid grid-cols-2 gap-2">
            <Link to={`/books/${book.id}`} className="block">
              <button className="w-full py-2 px-1 sm:px-2 bg-gradient-to-r from-sky-600 to-sky-500 text-white rounded-lg hover:from-sky-700 hover:to-sky-600 shadow-md hover:shadow-lg transition-all duration-200 font-medium text-xs sm:text-sm">
                Know More
              </button>
            </Link>
            
            {book.buttons?.readSummary && (
              <a
                href={book.buttons.readSummary}
                className="block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full py-2 px-1 sm:px-2 border-2 border-sky-500 text-sky-600 rounded-lg hover:bg-sky-50 shadow-md hover:shadow-lg transition-all duration-200 font-medium text-xs sm:text-sm">
                  Summary
                </button>
              </a>
            )}
          </div>
          
          {/* Second row - full width buttons */}
          {book.buttons?.getBook && (
            <a
              href={book.buttons.getBook}
              className="block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full py-2 px-2 sm:px-4 border-2 border-sky-500 text-sky-600 rounded-lg hover:bg-sky-50 shadow-md hover:shadow-lg transition-all duration-200 font-medium text-xs sm:text-sm">
                Get Book
              </button>
            </a>
          )}
          
          {book.buttons?.listenAudiobook && (
            <a
              href={book.buttons.listenAudiobook}
              className="block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full py-2 px-2 sm:px-4 border-2 border-sky-500 text-sky-600 rounded-lg hover:bg-sky-50 shadow-md hover:shadow-lg transition-all duration-200 font-medium text-xs sm:text-sm">
                Audiobook
              </button>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default BookSquareCard;