import { Outlet } from "react-router-dom";
import { Navbar } from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;
