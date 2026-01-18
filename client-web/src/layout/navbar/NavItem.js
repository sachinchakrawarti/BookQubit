import {
  FaBook,
  FaHome,
  FaBoxes,
  FaRobot,
  FaInfoCircle,
  FaUser,
} from "react-icons/fa";

export const navItems = [
  { name: "Home", icon: FaHome, path: "/" },
  { name: "Books", icon: FaBook, path: "/books" },

  { name: "Collections", icon: FaBoxes, path: "/collections" },
  { name: "Category", icon: FaBoxes, path: "/category" },
  { name: "Genre", icon: FaUser, path: "/genre" },
  { name: "Authors", icon: FaUser, path: "/authors" },
  { name: "Publications", icon: FaBook, path: "/publications" },
  { name: "AI Assistant", icon: FaRobot, path: "/ai-assistant" },
  { name: "Book Summarizer", icon: FaBook, path: "/book-summarizer" },
  { name: "About Us", icon: FaInfoCircle, path: "/about-us" },
];
