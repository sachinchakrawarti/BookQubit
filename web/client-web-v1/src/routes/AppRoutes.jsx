// client-web/src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import Books from "../pages/Books/Books";
import BookDetails from "../pages/Books/BookDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/books" element={<Books />} />
      <Route path="/book-details/:id" element={<BookDetails />} />
    </Routes>
  );
};

export default AppRoutes;
