import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserShield,
  FaCrown,
  FaTachometerAlt,
  FaChartLine,
  FaDollarSign,
  FaChevronRight,
  FaSearch,
  FaBell,
  FaUserCircle,
  FaInfoCircle,
} from "react-icons/fa";
import DashboardHubNavbar from "./Dashboard_Hub_Navbar";

const DashboardHub = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedDashboard, setSelectedDashboard] = useState(null);

  const dashboards = [
    {
      id: 1,
      title: "Admin Dashboard",
      description:
        "Manage books, users & content with full administrative controls",
      icon: <FaUserShield size={36} />,
      path: "/admin",
      color: "from-sky-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-sky-50 to-blue-100",
      borderColor: "border-sky-200",
      tags: ["management", "users", "content"],
      accessLevel: "admin",
      stats: "12 new requests",
    },
    {
      id: 2,
      title: "Super Admin Dashboard",
      description: "Platform-wide control, analytics and system configuration",
      icon: <FaCrown size={36} />,
      path: "/super-admin",
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-indigo-100",
      borderColor: "border-purple-200",
      tags: ["administration", "analytics", "system"],
      accessLevel: "super-admin",
      stats: "3 critical alerts",
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description:
        "View platform-wide statistics, trends and performance metrics",
      icon: <FaChartLine size={36} />,
      path: "/analytics-dashboard",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-100",
      borderColor: "border-blue-200",
      tags: ["analytics", "statistics", "reports"],
      accessLevel: "analyst",
      stats: "↑ 24% engagement",
    },
    {
      id: 4,
      title: "Ads / AdSense Dashboard",
      description:
        "Monitor ad revenue, performance metrics and campaign analytics",
      icon: <FaDollarSign size={36} />,
      path: "/ads-dashboard",
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-100",
      borderColor: "border-emerald-200",
      tags: ["revenue", "ads", "monetization"],
      accessLevel: "ad-manager",
      stats: "$2.4K revenue",
    },
    {
      id: 5,
      title: "Content Dashboard",
      description: "Manage and publish content across all platforms",
      icon: <FaTachometerAlt size={36} />,
      path: "/content-dashboard",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-100",
      borderColor: "border-amber-200",
      tags: ["content", "publishing", "management"],
      accessLevel: "editor",
      stats: "15 pending reviews",
    },
    {
      id: 6,
      title: "User Analytics Dashboard",
      description: "Track user behavior, engagement and retention metrics",
      icon: <FaChartLine size={36} />,
      path: "/user-analytics",
      color: "from-rose-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-rose-50 to-pink-100",
      borderColor: "border-rose-200",
      tags: ["users", "analytics", "engagement"],
      accessLevel: "analyst",
      stats: "8.2K active users",
    },
  ];

  const filters = [
    { id: "all", label: "All Dashboards" },
    { id: "management", label: "Management" },
    { id: "analytics", label: "Analytics" },
    { id: "revenue", label: "Revenue" },
  ];

  const filteredDashboards = dashboards.filter((dashboard) => {
    const matchesSearch =
      dashboard.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dashboard.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dashboard.tags.some((tag) => tag.includes(searchTerm.toLowerCase()));

    const matchesFilter =
      activeFilter === "all" ||
      dashboard.tags.includes(activeFilter) ||
      dashboard.accessLevel === activeFilter;

    return matchesSearch && matchesFilter;
  });

  const recentActivity = [
    {
      id: 1,
      text: "Admin dashboard updated with new user metrics",
      time: "10 min ago",
    },
    { id: 2, text: "Revenue increased by 15% this week", time: "1 hour ago" },
    {
      id: 3,
      text: "System maintenance scheduled for tonight",
      time: "3 hours ago",
    },
  ];

  const handleDashboardClick = (dashboard) => {
    setSelectedDashboard(dashboard);
    // Add a slight delay before navigation for animation
    setTimeout(() => {
      navigate(dashboard.path);
    }, 300);
  };

  // Clear selection after animation
  useEffect(() => {
    if (selectedDashboard) {
      const timer = setTimeout(() => {
        setSelectedDashboard(null);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selectedDashboard]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <DashboardHubNavbar />

      {/* Main Content */}
      <div className="p-4 md:p-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg">
                <FaTachometerAlt size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Dashboard Hub
                </h1>
                <p className="text-gray-600 mt-1">
                  Access all your management tools in one place
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search dashboards..."
                  className="pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <button className="p-2.5 rounded-xl bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition">
                <FaBell size={20} />
              </button>

              <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-gray-300">
                <FaUserCircle size={28} className="text-blue-600" />
                <span className="hidden md:inline font-medium text-gray-700">
                  Admin User
                </span>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2.5 rounded-xl font-medium transition-all ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600 text-sm">Total Dashboards</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {dashboards.length}
                  </p>
                </div>
                <FaTachometerAlt size={24} className="text-blue-500" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600 text-sm">Available to you</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {filteredDashboards.length}
                  </p>
                </div>
                <FaUserShield size={24} className="text-emerald-500" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600 text-sm">Recent Activity</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {recentActivity.length}
                  </p>
                </div>
                <FaChartLine size={24} className="text-purple-500" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600 text-sm">Last Accessed</p>
                  <p className="text-2xl font-bold text-gray-900">Today</p>
                </div>
                <FaInfoCircle size={24} className="text-amber-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Dashboard Cards */}
          <div className="lg:w-2/3">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Your Dashboards
            </h2>

            {filteredDashboards.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
                <FaSearch size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  No dashboards found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter to find what you're
                  looking for.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredDashboards.map((dashboard) => (
                  <div
                    key={dashboard.id}
                    onClick={() => handleDashboardClick(dashboard)}
                    className={`cursor-pointer transform transition-all duration-300 hover:-translate-y-2 ${selectedDashboard?.id === dashboard.id ? "scale-95 opacity-80" : "hover:shadow-2xl"} 
                      ${dashboard.bgColor} border ${dashboard.borderColor} rounded-2xl p-6 shadow-lg relative overflow-hidden group`}
                  >
                    {/* Animated overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-white/5 transition-all duration-300"></div>

                    {/* Icon with gradient background */}
                    <div
                      className={`mb-6 p-4 rounded-xl bg-gradient-to-r ${dashboard.color} w-fit text-white shadow-md`}
                    >
                      {dashboard.icon}
                    </div>

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-3">
                        <h2 className="text-xl font-bold text-gray-900">
                          {dashboard.title}
                        </h2>
                        <FaChevronRight
                          className={`text-gray-400 group-hover:translate-x-1 transition-transform ${dashboard.color.split(" ")[1].replace("to-", "text-")}`}
                        />
                      </div>

                      <p className="text-gray-600 mb-4">
                        {dashboard.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {dashboard.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/70 text-gray-700 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              dashboard.accessLevel === "super-admin"
                                ? "bg-purple-500"
                                : dashboard.accessLevel === "admin"
                                  ? "bg-blue-500"
                                  : dashboard.accessLevel === "analyst"
                                    ? "bg-cyan-500"
                                    : "bg-emerald-500"
                            }`}
                          ></div>
                          <span className="text-sm font-medium text-gray-700 capitalize">
                            {dashboard.accessLevel.replace("-", " ")}
                          </span>
                        </div>

                        <div className="text-sm font-semibold text-gray-900">
                          {dashboard.stats}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              {/* Recent Activity */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FaBell className="text-blue-500" />
                  Recent Activity
                </h3>

                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                    >
                      <p className="text-gray-800">{activity.text}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Quick Stats
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Most Accessed</span>
                    <span className="font-bold text-gray-900">
                      Admin Dashboard
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Last Login</span>
                    <span className="font-bold text-gray-900">
                      Today, 09:42 AM
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Active Sessions</span>
                    <span className="font-bold text-gray-900">3</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate("/analytics-dashboard")}
                  className="mt-6 w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <FaChartLine />
                  View Full Analytics
                </button>
              </div>

              {/* Help Card */}
              <div className="mt-6 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-300 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <FaInfoCircle className="text-gray-600" />
                  Need Help?
                </h3>
                <p className="text-gray-700 mb-4">
                  If you can't find the dashboard you need or have access
                  issues, contact support.
                </p>
                <button className="w-full py-2.5 bg-white border border-gray-300 text-gray-800 rounded-xl font-medium hover:bg-gray-50 transition">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 pt-6 border-t border-gray-300 text-center text-gray-600 text-sm">
          <p>
            Dashboard Hub v2.1 • Access controlled by user permissions • Last
            updated: Today, 10:30 AM
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHub;
