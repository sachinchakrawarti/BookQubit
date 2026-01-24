// src/layout/footer/components/SocialFooter.tsx

import React from "react";
import {
  FaGoodreads,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import { footerTheme } from "../../../config/theme";

const SocialFooter: React.FC = () => {
  // List of social links
  const socialLinks = [
    { icon: <FaGoodreads />, href: "https://www.goodreads.com" },
    { icon: <FaTwitter />, href: "https://twitter.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaFacebook />, href: "https://facebook.com" },
    { icon: <FaGithub />, href: "https://github.com" },
  ];

  return (
    <section className={`${footerTheme.root} border-t border-gray-200`}>
      <div className="flex justify-center space-x-6 py-6">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${footerTheme.text} hover:text-blue-600 transition-colors text-2xl`}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialFooter;
