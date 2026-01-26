import React from "react";
import SuperAdminDashboardNavbar from "./components/super_admin_dashbord_navbar";
import {
  FaUsers,
  FaBookOpen,
  FaServer,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

const SuperAdminDashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: 12840,
      icon: <FaUsers size={26} />,
    },
    {
      title: "Total Books",
      value: 2890,
      icon: <FaBookOpen size={26} />,
    },
    {
      title: "Server Status",
      value: "Online",
      icon: <FaServer size={26} />,
    },
    {
      title: "Security Alerts",
      value: 2,
      icon: <FaShieldAlt size={26} />,
    },
    {
      title: "Monthly Growth",
      value: "+21%",
      icon: <FaChartLine size={26} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Super Admin Navbar */}
      <SuperAdminDashboardNavbar />

      {/* Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Super Admin Dashboard
        </h1>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4"
            >
              <div className="text-purple-700">{item.icon}</div>
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <p className="text-xl font-semibold text-gray-900">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* System Overview */}
        <div className="mt-10 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">
            System Overview
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Monitor platform health</li>
            <li>Manage admins & permissions</li>
            <li>Review security logs</li>
            <li>View global analytics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
