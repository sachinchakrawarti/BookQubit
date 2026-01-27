import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import { theme } from '../../../../config/theme';

interface BookRectangleCardProps {
  book: {
    id: string | number;
    title: string;
    author: string;
    authorId?: string | number;
    description?: string;
    imageUrl: string;
    published?: string;
    rating?: number;
    category?: string | string[];
    keyPoints?: string[];
    subjects?: string[];
    tags?: string[];
    buttons: {
      getBook: string;
      readSummary: string;
      listenAudiobook: string;
    };
  };
  onTagClick?: (tag: string) => void;
}

const BookRectangleCard: React.FC<BookRectangleCardProps> = ({ book, onTagClick }) => {
  // Function to render star rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className={`${theme.iconColors.starFilled}`}>★</span>
        ))}
        {hasHalfStar && (
          <span key="half" className={`${theme.iconColors.starFilled}`}>½</span>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className={`${theme.iconColors.starEmpty}`}>★</span>
        ))}
        <span className={`text-sm ${theme.textColors.highlight} ml-1`}>
          {rating.toFixed(1)}
        </span>
      </div>
    );
  };

  // Format published year
  const formatPublishedYear = (dateString: string): string => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? dateString : date.getFullYear().toString();
  };

  // Helper to ensure category is always an array
  const getCategoryArray = (): string[] => {
    if (!book.category) return [];
    return Array.isArray(book.category) ? book.category : [book.category];
  };

  return (
    <div className={`hidden md:flex h-[550px] mx-auto w-[80%] max-w-6xl ${theme.border.default} ${theme.shadow.book} bg-white overflow-hidden rounded-xl`}>
      {/* Image section - 40% width with proper containment */}
      <div className={`w-[40%] h-full ${theme.background.bookCoverSide} flex items-center justify-center p-4 flex-shrink-0 overflow-hidden`}>
        <img 
          src={book.imageUrl} 
          alt={book.title} 
          className="h-full w-full object-contain max-h-full max-w-full"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/default-book-cover.jpg';
          }}
        />
      </div>

      {/* Details section - 60% width */}
      <div className="w-[60%] p-6 flex flex-col justify-between">
        <div>
          <h2 className={`text-2xl font-bold ${theme.textColors.primary} mb-2`}>
            {book.title}
          </h2>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <p className="text-sm">
              by{' '}
              {book.authorId ? (
                <Link 
                  to={`/authors/${book.authorId}`} 
                  className={`font-bold ${theme.textColors.link} hover:underline`}
                >
                  {book.author}
                </Link>
              ) : (
                <span className="font-bold">{book.author}</span>
              )}
            </p>
            {book.published && (
              <span className={`text-xs px-2 py-1 ${theme.border.default} ${theme.textColors.secondary} bg-gray-100`}>
                Published: {formatPublishedYear(book.published)}
              </span>
            )}
          </div>

          <p className={`text-sm ${theme.textColors.secondary} mb-4 line-clamp-3`}>
            {book.description}
          </p>

          {/* 5-star Rating - Commented out as per original */}
          {/* <div className="mb-4">
            {book.rating && renderStars(book.rating)}
          </div> */}

          {/* Tags section with clickable tags */}
          <div className="mb-4">
            {book.category && (
              <div className="mb-2">
                <h3 className={`text-xs font-semibold ${theme.textColors.highlight} mb-1`}>Category</h3>
                <div className="flex flex-wrap gap-2">
                  {getCategoryArray().map((cat, index) => (
                    <button
                      key={index}
                      onClick={() => onTagClick && onTagClick(cat)}
                      className={`text-xs px-2 py-1 ${theme.border.default} ${theme.textColors.badge} bg-sky-50 hover:bg-sky-100 transition-colors hover:sky`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {book.keyPoints && book.keyPoints.length > 0 && (
              <div className="mb-2">
                <h3 className={`text-xs font-semibold ${theme.textColors.highlight} mb-1`}>Key Points</h3>
                <div className="flex flex-wrap gap-2">
                  {book.keyPoints.slice(0, 3).map((point, index) => (
                    <button
                      key={index}
                      onClick={() => onTagClick && onTagClick(point)}
                      className={`text-xs px-2 py-1 ${theme.border.default} ${theme.textColors.badge} bg-sky-50 hover:bg-sky-100 transition-colors hover:sky`}
                    >
                      {point}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {book.subjects && book.subjects.length > 0 && (
              <div className="mb-2">
                <h3 className={`text-xs font-semibold ${theme.textColors.highlight} mb-1`}>Subjects</h3>
                <div className="flex flex-wrap gap-2">
                  {book.subjects.slice(0, 3).map((subject, index) => (
                    <button
                      key={index}
                      onClick={() => onTagClick && onTagClick(subject)}
                      className={`text-xs px-2 py-1 ${theme.border.default} ${theme.textColors.badge} bg-sky-50 hover:bg-sky-100 transition-colors hover:sky`}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {book.tags && book.tags.length > 0 && (
              <div className="mb-2">
                <h3 className={`text-xs font-semibold ${theme.textColors.highlight} mb-1`}>Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {book.tags.slice(0, 3).map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => onTagClick && onTagClick(tag)}
                      className={`text-xs px-2 py-1 ${theme.border.default} ${theme.textColors.badge} bg-sky-50 hover:bg-sky-100 transition-colors hover:sky`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Buttons - Reorganized into two rows */}
        <div className="flex flex-col gap-3">
          {/* First row with 3 buttons */}
          <div className="flex flex-wrap gap-3">
            <Link to={`/books/${book.id}`} className="flex-1 min-w-[120px]">
              <Button 
                text="Know More" 
                preset="primaryButton"
                className="w-full"
              />
            </Link>
            <Button 
              text="Get Book" 
              href={book.buttons.getBook}
              preset="secondaryButton"
              className="flex-1 min-w-[120px]"
            />
            <Button 
              text="Summary" 
              href={book.buttons.readSummary}
              preset="secondaryButton"
              className="flex-1 min-w-[120px]"
            />
          </div>
          
          {/* Second row with Audiobook button */}
          <div className="flex flex-wrap gap-3 text-center">
            <Button 
              text="Audiobook" 
              href={book.buttons.listenAudiobook}
              preset="secondaryButton"
              className="flex-1 min-w-[120px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookRectangleCard;