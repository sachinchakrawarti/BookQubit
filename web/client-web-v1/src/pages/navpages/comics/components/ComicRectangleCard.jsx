// frontend/src/components/ui/ComicRectangleCard.jsx
import React from "react";
import {
  ComicButton,
  ComicActionButtons,
  ComicButtonGroup,
} from "./ComicButton"; // Fixed import
import { theme } from "../../../../config/theme";

const ComicRectangleCard = ({ comic, onWishlistToggle, isWishlisted }) => {
  return (
    <div
      className={`hidden md:flex h-[500px] mx-auto w-[90%] max-w-6xl ${theme.border.default} ${theme.shadow.book} bg-white overflow-hidden rounded-xl`}
    >
      {/* Image section */}
      <div
        className={`w-[40%] h-full ${theme.background.bookCoverSide} flex items-center justify-center p-6`}
      >
        <img
          src={comic.image}
          alt={comic.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Details section */}
      <div className="w-[60%] p-6 flex flex-col">
        <div className="flex-1">
          {/* Your content here */}
          <h2 className={`text-2xl font-bold ${theme.textColors.primary} mb-3`}>
            {comic.title}
          </h2>
          <p
            className={`text-sm ${theme.textColors.secondary} mb-4 line-clamp-3`}
          >
            {comic.description}
          </p>
          {/* Add other comic details */}
        </div>

        {/* Perfectly aligned buttons */}
        <div className="flex-shrink-0 pt-4 border-t border-gray-200">
          <ComicButtonGroup direction="vertical" className="space-y-3">
            {/* First row - 3 equal buttons */}
            <ComicButtonGroup direction="horizontal" className="flex-1">
              <ComicActionButtons.ViewDetails
                comicId={comic.id}
                size="md"
                className="min-w-0"
              />
              <ComicActionButtons.ReadDigital
                comicId={comic.id}
                size="md"
                className="min-w-0"
              />
              <ComicActionButtons.QuickSummary
                comicId={comic.id}
                size="md"
                className="min-w-0"
              />
            </ComicButtonGroup>

            {/* Second row - 3 equal buttons */}
            <ComicButtonGroup direction="horizontal" className="flex-1">
              <ComicActionButtons.CollectorGuide
                comicId={comic.id}
                size="md"
                className="min-w-0"
              />
              <ComicActionButtons.AddWishlist
                comicId={comic.id}
                isWishlisted={isWishlisted}
                onToggle={onWishlistToggle}
                size="md"
                className="min-w-0"
              />
              <ComicActionButtons.ShareComic
                comicId={comic.id}
                size="md"
                className="min-w-0"
              />
            </ComicButtonGroup>
          </ComicButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default ComicRectangleCard;
