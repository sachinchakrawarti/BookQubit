import React from "react";
import { Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "../Outlet/PublicLayout";
import DashboardLayout from "../Outlet/DashboardLayout";

// Public / Client pages
import Home from "../pages/homepages/homepages";

// Client dashboards (public navbar)
import UserDashboard from "../dashbord/client_dashboard_hub/user_dashboard/user_dashboard";
import AuthorDashboard from "../dashbord/client_dashboard_hub/author_dashboard/author_dashboard";

// Admin dashboards (own navbar)
import AdminDashboard from "../dashbord/admin_dashboard_hub/admin_dashbord/admin_dashbord";
import SuperAdminDashboard from "../dashbord/admin_dashboard_hub/super_admin_dashbord/super_admin_dashbord";
import DashboardHub from "../dashbord/admin_dashboard_hub/dashboard_hub_admin/Dashboard_Hub";

import AnalyticsDashboard from "../dashbord/admin_dashboard_hub/analytics_dashboard/AnalyticsDashboard";
import AdsDashboard from "../dashbord/admin_dashboard_hub/ads_dashboard/AdsDashboard";

import Books from "../pages/navpages/books/Books";
import BookDetails from "../pages/navpages/books/BookDetails";

import Comics from "../pages/navpages/comics/Comics";
import ComicsDetails from "../pages/navpages/comics/ComicsDetails";

import Authors from "../pages/navpages/authors/authors";
import AuthorDetails from "../pages/navpages/authors/authors_details";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* =================== */}
      {/* Public Pages + Client Dashboards (Public Navbar) */}
      {/* =================== */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/author/dashboard" element={<AuthorDashboard />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
         <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:id" element={<ComicsDetails />} />
           <Route path="/authors" element={<Authors />} />
        <Route path="/authors/:slug" element={<AuthorDetails />} />
     
      </Route>

      {/* =================== */}
      {/* Admin Dashboard Hub (Own Navbar) */}
      {/* =================== */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardHub />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/super-admin" element={<SuperAdminDashboard />} />
          <Route path="/analytics-dashboard" element={<AnalyticsDashboard />} />
  <Route path="/ads-dashboard" element={<AdsDashboard />} />

      </Route>

      {/* =================== */}
      {/* Fallback Route */}
      {/* =================== */}
      <Route path="*" element={<div className="p-10 text-center text-xl">Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
