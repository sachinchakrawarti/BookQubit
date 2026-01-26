import { Outlet } from "react-router-dom";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";

const PublicLayout = () => (
  <>
    <Navbar /> {/* Public Navbar */}
    <Outlet /> {/* Client dashboards or public pages */}
    <Footer /> {/* Optional */}
  </>
);

export default PublicLayout;
