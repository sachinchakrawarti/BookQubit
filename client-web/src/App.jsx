// frontend/src/App.jsx

import "./App.css";
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
