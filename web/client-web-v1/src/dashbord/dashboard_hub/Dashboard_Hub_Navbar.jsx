import { NavLink } from "react-router-dom";
import { FaHome, FaUserShield, FaCrown } from "react-icons/fa";

const DashboardNavbar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition
     ${isActive ? "bg-gray-800 text-white" : "text-gray-700 hover:bg-gray-200"}`;

  return (
    <div className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Left: Title */}
      <div className="text-xl font-bold text-gray-800">
        BookQubit Dashboards
      </div>

      {/* Right: Links */}
      <div className="flex gap-3">
        <NavLink to="/dashboard" className={linkClass}>
          <FaHome /> All Dashboards
        </NavLink>

        <NavLink to="/admin" className={linkClass}>
          <FaUserShield /> Admin
        </NavLink>

        <NavLink to="/super-admin" className={linkClass}>
          <FaCrown /> Super Admin
        </NavLink>
      </div>
    </div>
  );
};

export default DashboardNavbar;
