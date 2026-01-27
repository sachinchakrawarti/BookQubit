import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { NavItem } from "./NavItem";
import "./Navbar.css";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Top Row - Logo, Search, User Actions */}
      <div className="navbar-top-row">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-icon">📚</span>
          <span className="navbar-logo-text">BookQubit</span>
        </Link>

        {/* Search Bar - Desktop */}
        <form onSubmit={handleSearch} className="navbar-search-desktop">
          <div className="navbar-search-container">
            <input
              type="text"
              placeholder="Search books, authors..."
              className="navbar-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="navbar-search-button"
              aria-label="Search"
            >
              <FaSearch />
            </button>
          </div>
        </form>

        {/* User Actions */}
        <div className="navbar-user-actions">
          <Link
            to="/profile"
            className="navbar-profile-button"
            aria-label="User Profile"
          >
            <FaUser />
          </Link>

          <Link
            to="/signup"
            className="navbar-signup-button"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="navbar-mobile-actions">
          <Link
            to="/profile"
            className="navbar-mobile-profile"
            aria-label="Profile"
          >
            <FaUser />
          </Link>

          <button
            onClick={() => {
              setIsMobileMenuOpen(true);
              setTimeout(() => document.getElementById("mobile-search")?.focus(), 100);
            }}
            className="navbar-mobile-search-button"
            aria-label="Search"
          >
            <FaSearch />
          </button>

          <button
            onClick={toggleMobileMenu}
            className="navbar-mobile-menu-button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Navigation Links - Desktop */}
      <div className="navbar-desktop-links">
        <div className="navbar-links-container">
          <NavItem onItemClick={handleNavItemClick} />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-content">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="navbar-mobile-search">
              <div className="navbar-mobile-search-container">
                <input
                  id="mobile-search"
                  type="text"
                  placeholder="Search books, authors..."
                  className="navbar-mobile-search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="navbar-mobile-search-submit"
                  aria-label="Search"
                >
                  <FaSearch />
                </button>
              </div>
            </form>

            {/* Mobile Nav Items */}
            <div className="navbar-mobile-items">
              <NavItem mobile={true} onItemClick={handleNavItemClick} />
            </div>

            {/* Mobile Auth Buttons */}
            <div className="navbar-mobile-auth">
              <Link
                to="/signup"
                className="navbar-mobile-signup"
                onClick={toggleMobileMenu}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};