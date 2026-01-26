import { Routes, Route } from "react-router-dom";

import PublicLayout from "../Outlet/PublicLayout";
import DashboardLayout from "../Outlet/DashboardLayout";

import Homepages from "../pages/homepages/Homepages";
import Dashborad from "../dashbord/dashboard_hub/Dashboard_Hub";
import AdminDashboard from "../dashbord/admin_dashbord/admin_dashbord";
import SuperAdminDashboard from "../dashbord/super_admin_dashbord/super_admin_dashbord";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Homepages />} />
      </Route>

      {/* Dashboards */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashborad />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/super-admin" element={<SuperAdminDashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
