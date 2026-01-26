import React from "react";
import { FaChartLine, FaUsers, FaBook } from "react-icons/fa";
import DashboardHubNavbar from "../dashboard_hub_admin/Dashboard_Hub_Navbar";

const AnalyticsDashboard = () => {
  const stats = [
    { title: "Total Users", value: 5120, icon: <FaUsers size={26} /> },
    { title: "Total Books", value: 342, icon: <FaBook size={26} /> },
    { title: "Monthly Growth", value: "+12%", icon: <FaChartLine size={26} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHubNavbar />

      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Analytics Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4"
            >
              <div className="text-blue-600">{item.icon}</div>
              <div>
                <p className="text-gray-500">{item.title}</p>
                <p className="text-xl font-semibold text-gray-900">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
