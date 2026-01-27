import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  FaHome, 
  FaBook, 
  FaBoxes, 
  FaUser, 
  FaRobot, 
  FaInfoCircle, 
  FaChevronDown, 
  FaChevronUp,
  FaStar,
  FaFire,
  FaNewspaper,
  FaGamepad,
  FaFilm,
  FaMusic
} from "react-icons/fa";

// Types
export interface DropdownItemType {
  name: string;
  path: string;
  icon?: React.ReactNode;
  description?: string;
}

export interface NavItemType {
  name: string;
  path?: string;
  icon: React.ReactNode;
  dropdown?: DropdownItemType[];
}

export interface NavItemProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

// Navigation Configuration
export const NAVIGATION_CONFIG = {
  items: [
    { 
      name: "Home", 
      icon: <FaHome />, 
      path: "/" 
    },
    { 
      name: "Books", 
      icon: <FaBook />,
      path: "/books", // Main path for Books
      dropdown: [
     
        { name: "Best Sellers", path: "/books/bestsellers", icon: <FaStar /> },
        { name: "New Releases", path: "/books/new", icon: <FaFire /> },
        { name: "Top Rated", path: "/books/top-rated", icon: <FaStar /> },
        { name: "Free Books", path: "/books/free", icon: <FaBook /> },
      ]
    },
    { 
      name: "Comics", 
      icon: <FaBook />,
      path: "/comics", // Main path for Comics
      dropdown: [
     
        { name: "Marvel", path: "/comics/marvel", icon: <FaFire /> },
        { name: "DC", path: "/comics/dc", icon: <FaStar /> },
        { name: "Manga", path: "/comics/manga", icon: <FaBook /> },
        { name: "Graphic Novels", path: "/comics/graphic-novels", icon: <FaBook /> },
      ]
    },
    { 
      name: "Collections", 
      icon: <FaBoxes />,
      path: "/collections", // Main path for Collections
      dropdown: [
        { name: "All Collections", path: "/collections", icon: <FaBoxes /> },
        { name: "Featured", path: "/collections/featured", icon: <FaStar /> },
        { name: "Summer Reads", path: "/collections/summer", icon: <FaFire /> },
        { name: "Award Winners", path: "/collections/awards", icon: <FaStar /> },
      ]
    },
    { 
      name: "Category", 
      icon: <FaBoxes />,
      path: "/category", // Main path for Category
      dropdown: [
        { name: "Fiction", path: "/category/fiction" },
        { name: "Non-Fiction", path: "/category/non-fiction" },
        { name: "Science Fiction", path: "/category/sci-fi" },
        { name: "Fantasy", path: "/category/fantasy" },
        { name: "Mystery", path: "/category/mystery" },
        { name: "Romance", path: "/category/romance" },
        { name: "Biography", path: "/category/biography" },
      ]
    },
    { 
      name: "Genre", 
      icon: <FaUser />,
      path: "/genre", // Main path for Genre
      dropdown: [
        { name: "Action", path: "/genre/action", icon: <FaFire /> },
        { name: "Adventure", path: "/genre/adventure", icon: <FaGamepad /> },
        { name: "Drama", path: "/genre/drama", icon: <FaFilm /> },
        { name: "Horror", path: "/genre/horror", icon: <FaFire /> },
        { name: "Comedy", path: "/genre/comedy", icon: <FaMusic /> },
      ]
    },
    { 
      name: "Authors", 
      icon: <FaUser />,
      path: "/authors", // Main path for Authors
      dropdown: [
        { name: "All Authors", path: "/authors", icon: <FaUser /> },
        { name: "Popular Authors", path: "/authors/popular", icon: <FaStar /> },
        { name: "New Authors", path: "/authors/new", icon: <FaFire /> },
        { name: "Featured Authors", path: "/authors/featured", icon: <FaStar /> },
      ]
    },
    { 
      name: "Publications", 
      icon: <FaBook />,
      path: "/publications", // Main path for Publications
      dropdown: [
        { name: "All Publications", path: "/publications", icon: <FaBook /> },
        { name: "Magazines", path: "/publications/magazines", icon: <FaNewspaper /> },
        { name: "Journals", path: "/publications/journals", icon: <FaBook /> },
        { name: "Newspapers", path: "/publications/newspapers", icon: <FaNewspaper /> },
      ]
    },
    { 
      name: "AI Tools", 
      icon: <FaRobot />,
      path: "/ai-tools", // Main path for AI Tools
      dropdown: [
        { name: "AI Assistant", path: "/ai-assistant", icon: <FaRobot /> },
        { name: "Book Summarizer", path: "/book-summarizer", icon: <FaBook /> },
        { name: "Recommendations", path: "/ai/recommendations", icon: <FaStar /> },
        { name: "Reading Assistant", path: "/ai/reading", icon: <FaBook /> },
      ]
    },
    { 
      name: "About", 
      icon: <FaInfoCircle />, 
      path: "/about-us" 
    },
  ]
} as const;

// Dropdown Component for Desktop
const DesktopDropdown = ({ item, onItemClick }: { item: NavItemType; onItemClick?: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleParentClick = () => {
    if (item.path) {
      navigate(item.path);
      onItemClick?.();
    }
  };

  return (
    <div 
      className="navbar-dropdown-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Clickable parent item */}
      <Link
        to={item.path || "#"}
        className="navbar-dropdown-button"
        onClick={(e) => {
          e.stopPropagation();
          handleParentClick();
        }}
      >
        <span className="navbar-dropdown-icon">{item.icon}</span>
        <span>{item.name}</span>
        <span className="navbar-dropdown-chevron">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </Link>
      
      {isOpen && item.dropdown && (
        <div 
          className="navbar-dropdown-menu"
          onClick={(e) => e.stopPropagation()}
        >
          {item.dropdown.map((dropdownItem) => (
            <Link
              key={`${item.name}-${dropdownItem.path}`}
              to={dropdownItem.path}
              className="navbar-dropdown-item"
              onClick={(e) => {
                e.stopPropagation();
                onItemClick?.();
              }}
            >
              {dropdownItem.icon && (
                <span className="navbar-dropdown-item-icon">{dropdownItem.icon}</span>
              )}
              <div className="navbar-dropdown-item-content">
                <span className="navbar-dropdown-item-title">{dropdownItem.name}</span>
                {dropdownItem.description && (
                  <span className="navbar-dropdown-item-description">
                    {dropdownItem.description}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

// Dropdown Component for Mobile
const MobileDropdown = ({ 
  item, 
  onItemClick 
}: { 
  item: NavItemType;
  onItemClick?: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleParentClick = () => {
    if (item.path && !isOpen) {
      navigate(item.path);
      onItemClick?.();
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="navbar-mobile-dropdown">
      <Link
        to={item.path || "#"}
        className="navbar-mobile-dropdown-button"
        onClick={(e) => {
          e.preventDefault();
          handleParentClick();
        }}
      >
        <span className="navbar-mobile-dropdown-icon">{item.icon}</span>
        <span className="navbar-mobile-dropdown-text">{item.name}</span>
        {item.dropdown && (
          <span className="navbar-mobile-dropdown-chevron">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        )}
      </Link>
      
      {isOpen && item.dropdown && (
        <div className="navbar-mobile-dropdown-content">
          {item.dropdown.map((dropdownItem) => (
            <Link
              key={`${item.name}-${dropdownItem.path}`}
              to={dropdownItem.path}
              className="navbar-mobile-dropdown-item"
              onClick={(e) => {
                e.stopPropagation();
                onItemClick?.();
              }}
            >
              {dropdownItem.icon && (
                <span className="navbar-mobile-dropdown-item-icon">
                  {dropdownItem.icon}
                </span>
              )}
              <span>{dropdownItem.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export const NavItem = ({ mobile = false, onItemClick }: NavItemProps) => {
  if (mobile) {
    return (
      <>
        {NAVIGATION_CONFIG.items.map((item) => (
          <div key={item.name}>
            {item.dropdown ? (
              <MobileDropdown item={item} onItemClick={onItemClick} />
            ) : (
              <Link
                to={item.path || "#"}
                className="navbar-mobile-item"
                onClick={(e) => {
                  e.stopPropagation();
                  onItemClick?.();
                }}
              >
                <span className="navbar-mobile-item-icon">{item.icon}</span>
                <span className="navbar-mobile-item-text">{item.name}</span>
              </Link>
            )}
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      {NAVIGATION_CONFIG.items.map((item) => (
        <div key={item.name}>
          {item.dropdown ? (
            <DesktopDropdown item={item} onItemClick={onItemClick} />
          ) : (
            <Link
              to={item.path || "#"}
              className="navbar-desktop-item"
              onClick={(e) => {
                e.stopPropagation();
                onItemClick?.();
              }}
            >
              <span className="navbar-desktop-item-icon">{item.icon}</span>
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </>
  );
};

// Helper functions (unchanged)
export const addDropdownItem = (
  parentName: string,
  newItem: DropdownItemType
) => {
  const parent = (NAVIGATION_CONFIG.items as NavItemType[]).find(item => item.name === parentName);
  if (parent && parent.dropdown) {
    parent.dropdown.push(newItem);
  }
};

export const removeDropdownItem = (
  parentName: string,
  itemPath: string
) => {
  const parent = (NAVIGATION_CONFIG.items as NavItemType[]).find(item => item.name === parentName);
  if (parent && parent.dropdown) {
    parent.dropdown = parent.dropdown.filter(item => item.path !== itemPath);
  }
};

export const addNavItem = (newItem: NavItemType) => {
  (NAVIGATION_CONFIG.items as NavItemType[]).push(newItem);
};

export const removeNavItem = (itemName: string) => {
  (NAVIGATION_CONFIG.items as NavItemType[]).filter(
    item => item.name !== itemName
  );
};