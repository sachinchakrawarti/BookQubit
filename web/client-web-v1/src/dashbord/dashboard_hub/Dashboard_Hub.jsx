import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserShield, FaCrown, FaTachometerAlt } from "react-icons/fa";
import DashboardNavbar from "./Dashboard_Hub_Navbar";

const Dashborad = () => {
  const navigate = useNavigate();

  const dashboards = [
    {
      title: "Admin Dashboard",
      description: "Manage books, users & content",
      icon: <FaUserShield size={34} />,
      path: "/admin",
      color: "text-sky-600",
    },
    {
      title: "Super Admin Dashboard",
      description: "Platform-wide control & analytics",
      icon: <FaCrown size={34} />,
      path: "/super-admin",
      color: "text-purple-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Dashboard navbar */}
      <DashboardNavbar />

      {/* Content */}
      <div className="p-6">
        <div className="mb-8 flex items-center gap-3">
          <FaTachometerAlt size={28} className="text-gray-800" />
          <h1 className="text-3xl font-bold text-gray-900">All Dashboards</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {dashboards.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="cursor-pointer bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className={`mb-4 ${item.color}`}>{item.icon}</div>

              <h2 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h2>

              <p className="text-gray-600 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashborad;
