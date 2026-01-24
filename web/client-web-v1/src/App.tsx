// Global app styles
import "./App.css";

// Layout components
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";

// Application routes
import AppRoutes from "./routes/AppRoutes";

// Root App component
const App: React.FC = () => {
  return (
    <>
      {/* Top navigation bar */}
      <Navbar />

      {/* Main application routes */}
      <AppRoutes />

      {/* Footer section */}
      <Footer />
    </>
  );
};

export default App;
