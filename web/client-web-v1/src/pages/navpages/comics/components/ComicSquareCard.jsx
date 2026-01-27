// frontend/src/components/ui/ComicSquareCard.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { theme } from "../../../../config/theme";

const ComicSquareCard = ({ comic, onTagClick, onWishlistToggle }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Function to render star rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating / 2); // Convert 10-point to 5-star
    const hasHalfStar = (rating / 2) % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <svg
            key={`full-${i}`}
            className={`w-3 h-3 ${theme.iconColors.starFilled}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg
            key="half"
            className={`w-3 h-3 ${theme.iconColors.starFilled}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <defs>
              <linearGradient id="half-star">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              fill="url(#half-star)"
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg
            key={`empty-${i}`}
            className={`w-3 h-3 ${theme.iconColors.starEmpty}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className={`text-xs ${theme.textColors.highlight} ml-1`}>
          {comic.rating}
        </span>
      </div>
    );
  };

  const handleWishlistClick = () => {
    const newWishlistState = !isWishlisted;
    setIsWishlisted(newWishlistState);
    if (onWishlistToggle) {
      onWishlistToggle(comic.id, newWishlistState);
    }
  };

  return (
    <div
      className={`w-full max-w-sm mx-auto ${theme.border.default} ${theme.shadow.book} bg-white overflow-hidden transition-transform duration-300 hover:scale-105`}
    >
      {/* Comic Cover Image with Overlays */}
      <div className="relative">
        <div
          className={`h-64 ${theme.background.bookCoverSide} flex items-center justify-center p-4 overflow-hidden`}
        >
          <img
            src={comic.image}
            alt={comic.title}
            className="h-full w-full object-contain max-h-full max-w-full"
          />
        </div>

        {/* Category Badge */}
        <div
          className={`absolute top-3 left-3 ${theme.background.navigationDots} ${theme.textColors.badge} px-2 py-1 ${theme.border.button} ${theme.shadow.navigationDotContainer} font-semibold text-xs`}
        >
          {comic.category}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          className={`absolute top-3 right-3 p-2 ${theme.border.button} ${theme.shadow.button} transition-all duration-300 ${
            isWishlisted
              ? `${theme.buttonColors.wishlistButton.savedBackground} ${theme.textColors.wishlistSaved}`
              : `${theme.buttonColors.wishlistButton.defaultBackground} ${theme.textColors.wishlistDefault}`
          }`}
        >
          <svg
            className="w-4 h-4"
            fill={isWishlisted ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        {/* Value Badge */}
        {comic.valueToday && (
          <div
            className={`absolute bottom-3 left-3 ${theme.background.navigationDots} ${theme.textColors.highlight} px-2 py-1 ${theme.border.button} ${theme.shadow.navigationDotContainer} font-bold text-xs`}
          >
            💎 {comic.valueToday.split(" ")[0]}
          </div>
        )}
      </div>

      {/* Comic Details */}
      <div className="p-4">
        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-2">
          <h3
            className={`text-lg font-bold ${theme.textColors.primary} pr-2 line-clamp-2 flex-1`}
          >
            {comic.title}
          </h3>
          {renderStars(comic.rating)}
        </div>

        {/* Publisher and Date */}
        <div className="mb-3">
          <p className={`text-sm ${theme.textColors.secondary} mb-1`}>
            {comic.publisher}
          </p>
          <div className="flex items-center gap-2">
            <span className={`text-xs ${theme.textColors.secondary}`}>
              {comic.publicationDate}
            </span>
            {comic.coverPrice && (
              <>
                <span className={`text-xs ${theme.textColors.secondary}`}>
                  •
                </span>
                <span
                  className={`text-xs ${theme.textColors.highlight} font-semibold`}
                >
                  {comic.coverPrice}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Description */}
        <p
          className={`text-sm ${theme.textColors.secondary} mb-3 line-clamp-2`}
        >
          {comic.description}
        </p>

        {/* Key Characters */}
        {comic.charactersIntroduced &&
          comic.charactersIntroduced.length > 0 && (
            <div className="mb-3">
              <div className="flex flex-wrap gap-1">
                {comic.charactersIntroduced
                  .slice(0, 2)
                  .map((character, index) => (
                    <button
                      key={index}
                      onClick={() => onTagClick && onTagClick(character)}
                      className={`text-xs px-2 py-1 ${theme.border.default} ${theme.textColors.badge} bg-sky-50 hover:bg-sky-100 transition-colors`}
                    >
                      {character}
                    </button>
                  ))}
                {comic.charactersIntroduced.length > 2 && (
                  <span className={`text-xs ${theme.textColors.secondary}`}>
                    +{comic.charactersIntroduced.length - 2} more
                  </span>
                )}
              </div>
            </div>
          )}

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          <Link
            to={`/comics/${comic.id}`}
            className={`w-full py-2 text-center font-semibold ${theme.buttonColors.primaryButton.background} ${theme.buttonColors.primaryButton.textColor} ${theme.border.button} ${theme.shadow.button} transition-all duration-300 ${theme.buttonColors.primaryButton.hoverBackground}`}
          >
            View Details
          </Link>

          <div className="flex gap-2">
            <button
              className={`flex-1 py-2 text-center font-semibold ${theme.buttonColors.secondaryButton.background} ${theme.buttonColors.secondaryButton.textColor} ${theme.border.button} ${theme.shadow.button} transition-all duration-300 ${theme.buttonColors.secondaryButton.hoverBackground} text-xs`}
            >
              Read
            </button>
            <button
              className={`flex-1 py-2 text-center font-semibold ${theme.buttonColors.secondaryButton.background} ${theme.buttonColors.secondaryButton.textColor} ${theme.border.button} ${theme.shadow.button} transition-all duration-300 ${theme.buttonColors.secondaryButton.hoverBackground} text-xs`}
            >
              Collect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicSquareCard;
