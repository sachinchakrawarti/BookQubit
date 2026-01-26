import React from "react";
import AdminDashboardNavbar from "./components/admin_dashbord_Navbar";
import { FaBook, FaUsers, FaChartLine, FaCrown } from "react-icons/fa";

const AdminDashboard = () => {
  const stats = [
    {
      title: "Total Books",
      value: 342,
      icon: <FaBook size={26} />,
    },
    {
      title: "Total Users",
      value: 5120,
      icon: <FaUsers size={26} />,
    },
    {
      title: "Premium Users",
      value: 430,
      icon: <FaCrown size={26} />,
    },
    {
      title: "Monthly Growth",
      value: "+12%",
      icon: <FaChartLine size={26} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin-only Navbar */}
      <AdminDashboardNavbar />

      {/* Dashboard Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Admin Dashboard
        </h1>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4"
            >
              <div className="text-sky-600">{item.icon}</div>
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder section */}
        <div className="mt-10 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Admin Actions
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Approve or reject books</li>
            <li>Manage users</li>
            <li>Monitor activity</li>
            <li>View reports</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
