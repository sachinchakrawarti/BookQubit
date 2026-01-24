// src/layout/navbar/Navbar.tsx

/* =========================
   React & Router
========================= */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/* =========================
   Icons
========================= */
import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";

/* =========================
   Styles & Data
========================= */
import "./Navbar.css";
import { navItems } from "./NavItems";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    setSearchQuery("");
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Top bar */}
      <div className="navbar-top">
        <Link to="/" className="logo">
          📚 <span>BookQubit</span>
        </Link>

        {/* Desktop Search */}
        <form onSubmit={handleSearch} className="search desktop-only">
          <input
            type="text"
            placeholder="Search books, authors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>

        {/* Actions */}
        <div className="actions desktop-only">
          <Link to="/profile">
            <FaUser />
          </Link>
          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>
        </div>

        {/* Mobile buttons */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Nav */}
      <div className="navbar-links desktop-only">
        {navItems.map((item) => (
          <Link key={item.name} to={item.path}>
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <form onSubmit={handleSearch} className="search">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>

          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={toggleMobileMenu}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
