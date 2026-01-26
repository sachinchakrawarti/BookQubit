import { NavLink } from "react-router-dom";
import {
  FaCrown,
  FaUsersCog,
  FaChartBar,
  FaShieldAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const SuperAdminDashboardNavbar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition
     ${isActive ? "bg-purple-700 text-white" : "text-gray-700 hover:bg-gray-200"}`;

  return (
    <div className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Left: Brand */}
      <div className="flex items-center gap-2 text-xl font-bold text-purple-700">
        <FaCrown />
        BookQubit Super Admin
      </div>

      {/* Center: Links */}
      <div className="flex gap-4">
        <NavLink to="/super-admin" className={linkClass}>
          <FaChartBar /> Dashboard
        </NavLink>

        <NavLink to="/super-admin/admins" className={linkClass}>
          <FaUsersCog /> Admins
        </NavLink>

        <NavLink to="/super-admin/security" className={linkClass}>
          <FaShieldAlt /> Security
        </NavLink>
      </div>

      {/* Right: Logout */}
      <button className="flex items-center gap-2 text-red-600 hover:text-red-700">
        <FaSignOutAlt />
        Logout
      </button>
    </div>
  );
};

export default SuperAdminDashboardNavbar;
