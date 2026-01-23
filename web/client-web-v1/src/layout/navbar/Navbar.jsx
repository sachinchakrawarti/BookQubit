import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";

import { navItems } from "./NavItem";
import { theme } from "../../config/theme"; // adjust path if needed

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`sticky top-0 z-50 bg-white ${theme.shadow.container}`}>
      {/* Top Row */}
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">📚</span>
          <span className={`text-xl font-bold ${theme.textColors.highlight}`}>
            BookQubit
          </span>
        </Link>

        {/* Search (Desktop) */}
        <form
          onSubmit={handleSearch}
          className="hidden sm:flex flex-1 mx-6 max-w-md relative"
        >
          <input
            type="text"
            placeholder="Search books, authors..."
            className={`w-full py-2 px-4 pr-10 rounded-full border ${theme.ringEffect}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2">
            <FaSearch className={theme.iconColors.navigationArrow} />
          </button>
        </form>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <Link to="/profile" className={theme.iconColors.navigationArrow}>
            <FaUser />
          </Link>
          <Link
            to="/signup"
            className={`${theme.buttonColors.primaryButton.background}
                        ${theme.buttonColors.primaryButton.hoverBackground}
                        ${theme.buttonColors.primaryButton.textColor}
                        px-4 py-2 ${theme.border.button} ${theme.shadow.button}`}
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Buttons */}
        <div className="sm:hidden flex items-center gap-3">
          <Link to="/profile" className={theme.iconColors.navigationArrow}>
            <FaUser />
          </Link>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden sm:flex justify-center gap-4 bg-sky-50 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-2 px-3 py-1 ${theme.textColors.highlight} hover:text-sky-800`}
            >
              <Icon />
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[72px] bottom-0 bg-white p-4">
          <form onSubmit={handleSearch} className="relative mb-3">
            <input
              type="text"
              placeholder="Search..."
              className={`w-full py-2 px-4 pr-10 rounded-full border ${theme.ringEffect}`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <FaSearch />
            </button>
          </form>

          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-sky-50"
                >
                  <Icon />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
