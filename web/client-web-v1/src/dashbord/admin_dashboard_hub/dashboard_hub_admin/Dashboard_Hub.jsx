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
  FaHeadset,
  FaFileAlt,
  FaUsers,
  FaChartPie,
  FaBullhorn,
  FaServer,
  FaBook,
  FaCode,
  FaQuestionCircle,
  FaLifeRing,
  FaComments,
  FaVideo,
  FaBookOpen,
  FaCog,
  FaShieldAlt,
  FaDatabase,
} from "react-icons/fa";
import DashboardHubNavbar from "./Dashboard_Hub_Navbar";
import dashboardData from "../data/dashboard.json";

const DashboardHub = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedDashboard, setSelectedDashboard] = useState(null);
  const [helpResources] = useState([
    {
      id: 1,
      title: "Documentation",
      description: "Complete guides and API documentation",
      icon: <FaBookOpen size={24} />,
      link: "/docs",
      color: "text-blue-600",
    },
    {
      id: 2,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      icon: <FaVideo size={24} />,
      link: "/tutorials",
      color: "text-purple-600",
    },
    {
      id: 3,
      title: "Community Forum",
      description: "Get help from other users",
      icon: <FaComments size={24} />,
      link: "/community",
      color: "text-green-600",
    },
    {
      id: 4,
      title: "Live Support",
      description: "24/7 chat with our support team",
      icon: <FaHeadset size={24} />,
      link: "/live-support",
      color: "text-red-600",
    },
  ]);

  // Map icon strings to components
  const iconMap = {
    FaUserShield: FaUserShield,
    FaCrown: FaCrown,
    FaChartLine: FaChartLine,
    FaDollarSign: FaDollarSign,
    FaTachometerAlt: FaTachometerAlt,
    FaHeadset: FaHeadset,
    FaFileAlt: FaFileAlt,
    FaUsers: FaUsers,
    FaChartPie: FaChartPie,
    FaBullhorn: FaBullhorn,
    FaServer: FaServer,
    FaBook: FaBook,
    FaCode: FaCode,
    FaQuestionCircle: FaQuestionCircle,
    FaLifeRing: FaLifeRing,
    FaComments: FaComments,
    FaVideo: FaVideo,
    FaBookOpen: FaBookOpen,
    FaCog: FaCog,
    FaShieldAlt: FaShieldAlt,
    FaDatabase: FaDatabase,
  };

  const dashboards = dashboardData.dashboards.map((dashboard) => ({
    ...dashboard,
    icon: iconMap[dashboard.icon] ? (
      React.createElement(iconMap[dashboard.icon], { size: 36 })
    ) : (
      <FaTachometerAlt size={36} />
    ),
  }));

  const filters = dashboardData.filters;
  const recentActivity = dashboardData.recentActivity;
  const quickStats = dashboardData.quickStats;

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

  const handleDashboardClick = (dashboard) => {
    setSelectedDashboard(dashboard);
    setTimeout(() => {
      navigate(dashboard.path);
    }, 300);
  };

  const handleHelpResourceClick = (resource) => {
    window.open(resource.link, "_blank");
  };

  useEffect(() => {
    if (selectedDashboard) {
      const timer = setTimeout(() => {
        setSelectedDashboard(null);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selectedDashboard]);

  // Activity type icons
  const activityIcons = {
    update: "🔄",
    success: "✅",
    warning: "⚠️",
    info: "ℹ️",
  };

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

              <button className="p-2.5 rounded-xl bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition relative">
                <FaBell size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
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
          <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2.5 rounded-xl font-medium transition-all flex-shrink-0 ${
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
                    {quickStats.totalDashboards}
                  </p>
                </div>
                <FaTachometerAlt size={24} className="text-blue-500" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600 text-sm">System Health</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {quickStats.systemHealth}
                  </p>
                </div>
                <FaServer size={24} className="text-emerald-500" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600 text-sm">Pending Tasks</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {quickStats.pendingTasks}
                  </p>
                </div>
                <FaChartLine size={24} className="text-purple-500" />
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-xl p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600 text-sm">Active Sessions</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {quickStats.activeSessions}
                  </p>
                </div>
                <FaUsers size={24} className="text-amber-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Dashboard Cards */}
          <div className="lg:w-2/3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Your Dashboards ({filteredDashboards.length})
              </h2>
              <span className="text-sm text-gray-500">
                Showing {filteredDashboards.length} of {dashboards.length}{" "}
                dashboards
              </span>
            </div>

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

                    {/* Badge */}
                    {dashboard.badge && (
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-2 py-1 text-xs font-bold rounded-full ${
                            dashboard.badge === "updated"
                              ? "bg-blue-100 text-blue-800"
                              : dashboard.badge === "premium"
                                ? "bg-purple-100 text-purple-800"
                                : dashboard.badge === "popular"
                                  ? "bg-red-100 text-red-800"
                                  : "bg-green-100 text-green-800"
                          }`}
                        >
                          {dashboard.badge}
                        </span>
                      </div>
                    )}

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
                                    : dashboard.accessLevel === "support"
                                      ? "bg-teal-500"
                                      : dashboard.accessLevel === "finance"
                                        ? "bg-green-500"
                                        : dashboard.accessLevel === "marketing"
                                          ? "bg-red-500"
                                          : dashboard.accessLevel === "editor"
                                            ? "bg-amber-500"
                                            : dashboard.accessLevel ===
                                                "developer"
                                              ? "bg-yellow-500"
                                              : "bg-gray-500"
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

            {/* Help & Support Resources */}
            <div className="mt-12">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaHeadset className="text-teal-600" />
                Help & Support Resources
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {helpResources.map((resource) => (
                  <div
                    key={resource.id}
                    onClick={() => handleHelpResourceClick(resource)}
                    className="cursor-pointer bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow hover:border-teal-300"
                  >
                    <div className={`mb-4 ${resource.color}`}>
                      {resource.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {resource.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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
                      <div className="flex items-start gap-3">
                        <span className="text-lg">
                          {activityIcons[activity.type]}
                        </span>
                        <div>
                          <p className="text-gray-800">{activity.text}</p>
                          <p className="text-sm text-gray-500 mt-1">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Quick Stats
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Most Accessed</span>
                    <span className="font-bold text-gray-900">
                      {quickStats.mostAccessed}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Last Login</span>
                    <span className="font-bold text-gray-900">
                      {quickStats.lastLogin}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Active Sessions</span>
                    <span className="font-bold text-gray-900">
                      {quickStats.activeSessions}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Pending Tasks</span>
                    <span className="font-bold text-gray-900">
                      {quickStats.pendingTasks}
                    </span>
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

              {/* Support Card */}
              <div className="bg-gradient-to-br from-teal-50 to-green-50 border border-teal-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <FaHeadset className="text-teal-600" />
                  Need Immediate Help?
                </h3>
                <p className="text-gray-700 mb-4">
                  Get instant support from our team
                </p>

                <div className="space-y-3 mb-4">
                  <button className="w-full py-3 bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    <FaComments />
                    Chat with Support
                  </button>

                  <button className="w-full py-3 bg-white border border-teal-300 text-teal-700 rounded-xl font-medium hover:bg-teal-50 transition flex items-center justify-center gap-2">
                    <FaQuestionCircle />
                    Submit a Ticket
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Support available 24/7 • Average response time: 5 min
                  </p>
                </div>
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
          <p className="mt-1">
            Need assistance? Contact support at{" "}
            <a
              href="mailto:support@bookqubit.com"
              className="text-blue-600 hover:underline"
            >
              support@bookqubit.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHub;
