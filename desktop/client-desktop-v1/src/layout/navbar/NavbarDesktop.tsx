import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaUser } from "react-icons/fa";

import { navItems } from "./NavItem";
import "./navbar.css";

const NavbarDesktop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    setSearchQuery("");
  };

  return (
    <nav className="navbar">
      {/* Top bar */}
      <div className="navbar-top">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-text">📚 BookQubit</span>
        </Link>

        {/* Search */}
        <form className="navbar-search" onSubmit={handleSearch}>
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
        <div className="navbar-actions">
          <Link to="/profile" className="icon-btn">
            <FaUser />
          </Link>
          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>
        </div>
      </div>

      {/* Navigation links */}
      <div className="navbar-links">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.name} to={item.path} className="navitem-desktop">
              <Icon />
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavbarDesktop;
