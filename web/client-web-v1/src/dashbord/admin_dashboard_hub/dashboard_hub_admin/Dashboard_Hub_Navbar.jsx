import { NavLink } from "react-router-dom";
import { FaHome, FaUserShield, FaCrown } from "react-icons/fa";

const DashboardHubNavbar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition ${
      isActive ? "bg-gray-800 text-white" : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
      <div className="text-xl font-bold text-gray-800">Admin Dashboard Hub</div>
      <div className="flex gap-3">
        <NavLink to="/dashboard" className={linkClass}>
          <FaHome /> Dashboards
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

export default DashboardHubNavbar;
