// src/layout/footer/components/LegalFooter.tsx

import React from "react";
import { footerTheme } from "../../../config/theme";

const LegalFooter: React.FC = () => {
  const legalLinks = [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookies", href: "/cookies" },
  ];

  return (
    <section className={`${footerTheme.root} border-t border-gray-200`}>
      <div className={`${footerTheme.container} flex flex-col md:flex-row justify-center md:justify-between items-center py-4`}>
        {/* Copyright or left side text can also go here if needed */}
        <div className="flex space-x-6 mb-2 md:mb-0">
          {legalLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`${footerTheme.legalLink} text-sm`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalFooter;
