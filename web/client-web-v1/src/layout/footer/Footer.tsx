// src/layout/footer/Footer.tsx

import { FC, useState, useEffect } from "react";
import FooterMain from "./components/FooterMain";
import ExplorePage from "./components/ExplorePage";
import SocialFooter from "./components/SocialFooter";
import NewsletterFooter from "./components/NewsletterFooter";
import CopyrightFooter from "./components/CopyrightFooter";
import LegalFooter from "./components/LegalFooter";
import DownloadFooter from "./components/DownloadFooter";
import { FaArrowUp, FaRobot } from "react-icons/fa";

const Footer: FC = () => {
  const [showGoUp, setShowGoUp] = useState(false);
  const [aiPosition, setAiPosition] = useState({ x: 20, y: 200 });
  const [isDragging, setIsDragging] = useState(false);

  // Show "Go Up" button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowGoUp(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Drag handlers for AI button
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setAiPosition({ x: e.clientX - 30, y: e.clientY - 30 });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <>
      {/* Footer Sections */}
      <FooterMain />
      <ExplorePage />
      <SocialFooter />
      <NewsletterFooter />
      <CopyrightFooter />
      <LegalFooter />
      <DownloadFooter />

      {/* Floating "Go Up" Button */}
      {showGoUp && (
        <button
          onClick={goToTop}
          className="fixed bottom-20 right-5 z-50 p-3 bg-sky-600 text-white rounded-full shadow-lg hover:bg-sky-700 transition"
          title="Go to top"
        >
          <FaArrowUp />
        </button>
      )}

      {/* Movable AI Assistant Button */}
      <div
        style={{
          position: "fixed",
          left: aiPosition.x,
          top: aiPosition.y,
          zIndex: 50,
          cursor: "grab",
        }}
        onMouseDown={handleMouseDown}
        title="AI Assistant"
      >
        <div className="p-4 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-full shadow-lg hover:shadow-xl transition">
          <FaRobot size={24} />
        </div>
      </div>
    </>
  );
};

export default Footer;
