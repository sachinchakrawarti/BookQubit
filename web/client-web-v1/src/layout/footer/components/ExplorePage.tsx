// src/layout/footer/components/ExplorePage.tsx

import React from "react";
import { 
  FaBook, FaStar, FaTags, FaLayerGroup, FaRobot, FaHeadphones, FaList,
  FaUserTie, FaCrown, FaUserPlus, FaUsers, FaInfoCircle, FaEnvelope,
  FaFileContract, FaShieldAlt, FaArrowRight
} from "react-icons/fa";
import { footerTheme } from "../../../config/theme";

interface FooterLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface FooterColumn {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  links: FooterLink[];
  gradient: string;
}

const ExplorePage: React.FC = () => {
  const footerLinks: FooterColumn[] = [
    {
      title: "Explore Library",
      subtitle: "Discover new reads",
      icon: <FaBook className="text-sky-500" />,
      links: [
        { name: "Featured Books", href: "/books/featured", icon: <FaStar className="text-amber-400 text-sm" /> },
        { name: "New Releases", href: "/books/new", icon: <span className="w-2 h-2 bg-emerald-400 rounded-full"></span> },
        { name: "Genres", href: "/genres", icon: <FaTags className="text-purple-400 text-sm" /> },
        { name: "Collections", href: "/collections", icon: <FaLayerGroup className="text-indigo-400 text-sm" /> },
      ],
      gradient: "from-sky-50 to-blue-50",
    },
    {
      title: "Features",
      subtitle: "Premium tools",
      icon: <FaRobot className="text-purple-500" />,
      links: [
        { name: "AI Book Summaries", href: "/book-summarizer", icon: <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span> },
        { name: "Audiobooks", href: "/audiobooks", icon: <FaHeadphones className="text-rose-400 text-sm" /> },
        { name: "Reading Lists", href: "/reading-lists", icon: <FaList className="text-emerald-400 text-sm" /> },
        { name: "AI Assistant", href: "/ai-assistant", icon: <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></span> },
      ],
      gradient: "from-purple-50 to-pink-50",
    },
    {
      title: "Authors",
      subtitle: "Meet the creators",
      icon: <FaUserTie className="text-amber-500" />,
      links: [
        { name: "All Authors", href: "/authors", icon: <FaUsers className="text-sky-400 text-sm" /> },
        { name: "Top Authors", href: "/authors/top", icon: <FaCrown className="text-amber-400 text-sm" /> },
        { name: "New Authors", href: "/authors/new", icon: <FaUserPlus className="text-emerald-400 text-sm" /> },
        { name: "Author Collections", href: "/authors/collections", icon: <FaLayerGroup className="text-indigo-400 text-sm" /> },
      ],
      gradient: "from-amber-50 to-orange-50",
    },
    {
      title: "About",
      subtitle: "Learn more",
      icon: <FaInfoCircle className="text-emerald-500" />,
      links: [
        { name: "About Us", href: "/about-us", icon: <span className="w-2 h-2 bg-sky-400 rounded-full"></span> },
        { name: "Contact", href: "/contact", icon: <FaEnvelope className="text-rose-400 text-sm" /> },
        { name: "Terms of Service", href: "/terms", icon: <FaFileContract className="text-gray-400 text-sm" /> },
        { name: "Privacy Policy", href: "/privacy", icon: <FaShieldAlt className="text-indigo-400 text-sm" /> },
      ],
      gradient: "from-emerald-50 to-green-50",
    },
  ];

  return (
    <section className={`${footerTheme.root} mt-10`}>
      <div className={`${footerTheme.container} px-4 sm:px-6`}>
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-500 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4">
            <FaBook className="text-xs" />
            Explore BookQubit
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Discover Your{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
              Next Read
            </span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Explore our vast library, premium features, and connect with authors in our community.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {footerLinks.map((col) => (
            <div
              key={col.title}
              className="group relative bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Column Header */}
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {col.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
                    {col.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">{col.subtitle}</p>
                </div>
              </div>

              {/* Links List */}
              <ul className="space-y-2 sm:space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center justify-between p-2 sm:p-3 rounded-lg hover:bg-gray-50 group/link transition-all duration-200 active:scale-[0.98]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-sky-50 to-blue-50 flex items-center justify-center">
                          {link.icon}
                        </div>
                        <span className="text-sm sm:text-base font-medium text-gray-800 group-hover/link:text-sky-600 transition-colors">
                          {link.name}
                        </span>
                      </div>
                      <FaArrowRight className="text-gray-300 text-xs group-hover/link:text-sky-500 group-hover/link:translate-x-1 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExplorePage;
