import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaBook, FaUsers, FaSignOutAlt } from "react-icons/fa";

const AdminDashboardNavbar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition ${
      isActive ? "bg-sky-600 text-white" : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* Left: Brand */}
      <div className="text-xl font-bold text-sky-600">BookQubit Admin</div>

      {/* Center: Links */}
      <div className="flex gap-4">
        <NavLink to="/admin" className={linkClass}>
          <FaTachometerAlt /> Dashboard
        </NavLink>
        <NavLink to="/admin/books" className={linkClass}>
          <FaBook /> Books
        </NavLink>
        <NavLink to="/admin/users" className={linkClass}>
          <FaUsers /> Users
        </NavLink>
      </div>

      {/* Right: Logout */}
      <button className="flex items-center gap-2 text-red-600 hover:text-red-700">
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );
};

export default AdminDashboardNavbar;
