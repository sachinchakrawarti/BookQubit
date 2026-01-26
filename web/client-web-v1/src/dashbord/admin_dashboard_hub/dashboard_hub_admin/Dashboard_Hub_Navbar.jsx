import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaTachometerAlt,
  FaBell,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaSearch,
  FaQuestionCircle,
  FaEnvelope,
  FaShieldAlt,
  FaMoon,
  FaSun,
  FaBook,
  FaChartBar,
} from "react-icons/fa";

const Dashboard_Hub_Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      title: "System Update",
      message: "Dashboard v2.1 is now available",
      time: "10 min ago",
      read: false,
      type: "info",
    },
    {
      id: 2,
      title: "New User",
      message: "John Doe registered as new admin",
      time: "1 hour ago",
      read: false,
      type: "success",
    },
    {
      id: 3,
      title: "Performance Alert",
      message: "Server load above 80%",
      time: "2 hours ago",
      read: true,
      type: "warning",
    },
    {
      id: 4,
      title: "Support Ticket",
      message: "New ticket #4578 received",
      time: "5 hours ago",
      read: true,
      type: "info",
    },
  ];

  const unreadNotifications = notifications.filter((n) => !n.read).length;

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome size={18} /> },
    {
      name: "Dashboard Hub",
      path: "/dashboard-hub",
      icon: <FaTachometerAlt size={18} />,
    },
    { name: "Analytics", path: "/analytics", icon: <FaChartBar size={18} /> },
    { name: "Books", path: "/books", icon: <FaBook size={18} /> },
    { name: "Settings", path: "/settings", icon: <FaCog size={18} /> },
  ];

  const profileMenuItems = [
    { name: "My Profile", icon: <FaUserCircle size={16} />, path: "/profile" },
    {
      name: "Account Settings",
      icon: <FaCog size={16} />,
      path: "/account-settings",
    },
    {
      name: "Help & Support",
      icon: <FaQuestionCircle size={16} />,
      path: "/help",
    },
    { name: "Contact", icon: <FaEnvelope size={16} />, path: "/contact" },
    { separator: true },
    {
      name: "Logout",
      icon: <FaSignOutAlt size={16} />,
      action: () => handleLogout(),
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const handleLogout = () => {
    console.log("Logging out...");
    // Add your logout logic here
    navigate("/login");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const markAllAsRead = () => {
    // In a real app, this would update the backend
    setIsNotificationsOpen(false);
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 ${darkMode ? "dark bg-gray-900" : "bg-gradient-to-r from-blue-600 to-indigo-700"} text-white shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Left side - Logo and Navigation */}
            <div className="flex items-center">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <Link
                  to="/dashboard-hub"
                  className="flex items-center space-x-3"
                >
                  <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                    <FaShieldAlt size={24} className="text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold tracking-tight">
                      BookQubit
                    </h1>
                    <p className="text-xs text-blue-100 opacity-80">
                      Admin Portal
                    </p>
                  </div>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:ml-8 md:flex md:space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      location.pathname === item.path
                        ? "bg-white/20 backdrop-blur-sm"
                        : "hover:bg-white/10"
                    }`}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side - Search, Icons, Profile */}
            <div className="flex items-center space-x-4">
              {/* Search Bar - Desktop */}
              <form
                onSubmit={handleSearch}
                className="hidden lg:block relative"
              >
                <div className="relative">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200" />
                  <input
                    type="text"
                    placeholder="Search dashboards..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 w-64 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm"
                  />
                </div>
              </form>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>

              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIsNotificationsOpen(!isNotificationsOpen);
                    setIsProfileDropdownOpen(false);
                  }}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors relative"
                  aria-label="Notifications"
                >
                  <FaBell size={20} />
                  {unreadNotifications > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                      {unreadNotifications}
                    </span>
                  )}
                </button>

                {/* Notifications Dropdown */}
                {isNotificationsOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsNotificationsOpen(false)}
                    ></div>
                    <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden">
                      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between items-center">
                          <h3 className="font-bold text-gray-900 dark:text-white">
                            Notifications
                          </h3>
                          <button
                            onClick={markAllAsRead}
                            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            Mark all as read
                          </button>
                        </div>
                      </div>
                      <div className="max-h-96 overflow-y-auto">
                        {notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 cursor-pointer ${
                              !notification.read
                                ? "bg-blue-50 dark:bg-blue-900/20"
                                : ""
                            }`}
                            onClick={() => setIsNotificationsOpen(false)}
                          >
                            <div className="flex items-start">
                              <div
                                className={`flex-shrink-0 w-2 h-2 mt-2 rounded-full mr-3 ${
                                  notification.type === "success"
                                    ? "bg-green-500"
                                    : notification.type === "warning"
                                      ? "bg-yellow-500"
                                      : "bg-blue-500"
                                }`}
                              ></div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 dark:text-white">
                                  {notification.title}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                                  {notification.message}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                  {notification.time}
                                </p>
                              </div>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="p-3 border-t border-gray-200 dark:border-gray-700">
                        <Link
                          to="/notifications"
                          className="block text-center text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                          onClick={() => setIsNotificationsOpen(false)}
                        >
                          View all notifications
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIsProfileDropdownOpen(!isProfileDropdownOpen);
                    setIsNotificationsOpen(false);
                  }}
                  className="flex items-center space-x-2 p-1 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="User menu"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                    <span className="font-bold">A</span>
                  </div>
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium">Admin User</p>
                    <p className="text-xs text-blue-200">Super Admin</p>
                  </div>
                </button>

                {/* Profile Dropdown Menu */}
                {isProfileDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsProfileDropdownOpen(false)}
                    ></div>
                    <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden">
                      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                            <span className="font-bold text-white">A</span>
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 dark:text-white">
                              Admin User
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                              admin@bookqubit.com
                            </p>
                            <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                              Super Admin
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="py-2">
                        {profileMenuItems.map((item, index) => (
                          <React.Fragment key={index}>
                            {item.separator ? (
                              <div className="my-2 border-t border-gray-200 dark:border-gray-700"></div>
                            ) : item.action ? (
                              <button
                                onClick={item.action}
                                className="w-full flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                              >
                                <span className="mr-3">{item.icon}</span>
                                {item.name}
                              </button>
                            ) : (
                              <Link
                                to={item.path}
                                onClick={() => setIsProfileDropdownOpen(false)}
                                className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                              >
                                <span className="mr-3">{item.icon}</span>
                                {item.name}
                              </Link>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="lg:hidden pb-3">
            <form onSubmit={handleSearch} className="px-2">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-200" />
                <input
                  type="text"
                  placeholder="Search dashboards..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-blue-700 to-indigo-800 border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center px-3 py-3 rounded-lg text-base font-medium transition-all ${
                    location.pathname === item.path
                      ? "bg-white/20 backdrop-blur-sm"
                      : "hover:bg-white/10"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </Link>
              ))}

              {/* Mobile profile menu items */}
              <div className="pt-4 mt-4 border-t border-white/10">
                {profileMenuItems
                  .filter((item) => !item.separator && item.path)
                  .map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center px-3 py-3 rounded-lg text-base font-medium hover:bg-white/10 transition-all"
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Add custom styles for dark mode */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dark .bg-gray-750 {
          background-color: #374151;
        }

        .shadow-2xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </>
  );
};

export default Dashboard_Hub_Navbar;
