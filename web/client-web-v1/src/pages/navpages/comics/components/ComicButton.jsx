// frontend/src/components/ui/ComicButton.jsx
import React from "react";
import { Link } from "react-router-dom";
import { theme } from "../../../../config/theme";

const ComicButton = ({
  children,
  variant = "primary",
  size = "md",
  href,
  to,
  onClick,
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  className = "",
  fullWidth = false,
  ...props
}) => {
  // Base styles
  const baseStyles = `
    inline-flex items-center justify-center font-semibold transition-all duration-300 
    focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed
    ${theme.border.button} ${theme.shadow.button}
    ${fullWidth ? "w-full" : ""}
  `;

  // Variant styles
  const variantStyles = {
    primary: `
      ${theme.buttonColors.primaryButton.background} 
      ${theme.buttonColors.primaryButton.textColor} 
      ${theme.buttonColors.primaryButton.hoverBackground}
      focus:ring-sky-500
    `,
    secondary: `
      ${theme.buttonColors.secondaryButton.background} 
      ${theme.buttonColors.secondaryButton.textColor} 
      ${theme.buttonColors.secondaryButton.hoverBackground}
      focus:ring-sky-500
    `,
    wishlist: `
      border-2 
      ${theme.buttonColors.wishlistButton.defaultBackground} 
      ${theme.textColors.wishlistDefault}
      hover:bg-rose-50 hover:border-rose-400 hover:text-rose-600
      focus:ring-rose-500
    `,
    wishlistActive: `
      ${theme.buttonColors.wishlistButton.savedBackground} 
      ${theme.textColors.wishlistSaved}
      focus:ring-rose-500
    `,
    collector: `
      bg-gradient-to-r from-amber-500 to-amber-600 
      text-white border-amber-600
      hover:from-amber-600 hover:to-amber-700
      focus:ring-amber-500
    `,
    digital: `
      bg-gradient-to-r from-emerald-500 to-emerald-600 
      text-white border-emerald-600
      hover:from-emerald-600 hover:to-emerald-700
      focus:ring-emerald-500
    `,
    outline: `
      border-2 border-gray-300 text-gray-700 
      hover:bg-gray-50 hover:border-gray-400
      focus:ring-gray-500
    `,
    ghost: `
      border-2 border-transparent text-gray-600 
      hover:bg-gray-100 hover:text-gray-800
      focus:ring-gray-500
    `,
  };

  // Size styles
  const sizeStyles = {
    sm: "px-3 py-2 text-sm min-h-[36px]",
    md: "px-4 py-3 text-sm min-h-[44px]",
    lg: "px-6 py-4 text-base min-h-[52px]",
    xl: "px-8 py-4 text-lg font-bold min-h-[60px]",
  };

  // Comic-specific variant icons
  const comicIcons = {
    read: "📖",
    digital: "💻",
    collect: "💎",
    wishlist: "❤️",
    share: "↗️",
    summary: "📝",
    guide: "🧭",
    buy: "🛒",
    preview: "👁️",
  };

  // Determine the actual icon to use
  const actualIcon = comicIcons[icon] || icon;

  // Combine all styles
  const buttonStyles = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${className}
  `.trim();

  // Loading spinner
  const LoadingSpinner = () => (
    <svg
      className="animate-spin -ml-1 mr-2 h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );

  // Button content
  const buttonContent = (
    <>
      {loading && <LoadingSpinner />}
      {!loading && actualIcon && iconPosition === "left" && (
        <span className="mr-2">{actualIcon}</span>
      )}
      <span className="whitespace-nowrap">{children}</span>
      {!loading && actualIcon && iconPosition === "right" && (
        <span className="ml-2">{actualIcon}</span>
      )}
    </>
  );

  // Render as Link if 'to' prop is provided
  if (to) {
    return (
      <Link to={to} className={buttonStyles} {...props}>
        {buttonContent}
      </Link>
    );
  }

  // Render as anchor if 'href' prop is provided
  if (href) {
    return (
      <a href={href} className={buttonStyles} {...props}>
        {buttonContent}
      </a>
    );
  }

  // Render as button
  return (
    <button
      type="button"
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

// Predefined comic-specific buttons for easy use
const ComicActionButtons = {
  ViewDetails: ({ comicId, size = "md", className = "" }) => (
    <ComicButton
      to={`/comics/${comicId}`}
      variant="primary"
      size={size}
      icon="preview"
      className={`flex-1 ${className}`}
    >
      View Details
    </ComicButton>
  ),

  ReadDigital: ({ comicId, size = "md", className = "" }) => (
    <ComicButton
      to={`/read/comic/${comicId}`}
      variant="digital"
      size={size}
      icon="digital"
      className={`flex-1 ${className}`}
    >
      Read Digital
    </ComicButton>
  ),

  CollectorGuide: ({ comicId, size = "md", className = "" }) => (
    <ComicButton
      to={`/comics/${comicId}/collectors-guide`}
      variant="collector"
      size={size}
      icon="guide"
      className={`flex-1 ${className}`}
    >
      Collector's Guide
    </ComicButton>
  ),

  AddWishlist: ({
    comicId,
    isWishlisted,
    onToggle,
    size = "md",
    className = "",
  }) => (
    <ComicButton
      variant={isWishlisted ? "wishlistActive" : "wishlist"}
      size={size}
      icon="wishlist"
      onClick={onToggle}
      className={`flex-1 ${className}`}
    >
      {isWishlisted ? "In Wishlist" : "Add to Wishlist"}
    </ComicButton>
  ),

  QuickSummary: ({ comicId, size = "md", className = "" }) => (
    <ComicButton
      to={`/comics/${comicId}/summary`}
      variant="secondary"
      size={size}
      icon="summary"
      className={`flex-1 ${className}`}
    >
      Quick Summary
    </ComicButton>
  ),

  BuyPhysical: ({ url, size = "md", className = "" }) => (
    <ComicButton
      href={url}
      variant="primary"
      size={size}
      icon="buy"
      className={`flex-1 ${className}`}
    >
      Buy Physical
    </ComicButton>
  ),

  ShareComic: ({ comicId, size = "md", className = "" }) => (
    <ComicButton
      to={`/share/comic/${comicId}`}
      variant="outline"
      size={size}
      icon="share"
      className={`flex-1 ${className}`}
    >
      Share
    </ComicButton>
  ),
};

// Button group component for perfect alignment
const ComicButtonGroup = ({
  children,
  direction = "horizontal",
  className = "",
}) => {
  const directionStyles = {
    horizontal: "flex flex-row gap-3 items-stretch",
    vertical: "flex flex-col gap-3",
  };

  return (
    <div className={`${directionStyles[direction]} ${className}`}>
      {children}
    </div>
  );
};

// Export everything properly
export { ComicButton, ComicActionButtons, ComicButtonGroup };

// Default export
export default ComicButton;
