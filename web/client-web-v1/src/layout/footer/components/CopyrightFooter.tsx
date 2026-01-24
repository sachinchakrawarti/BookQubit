// src/layout/footer/components/CopyrightFooter.tsx

import React from "react";
import { footerTheme } from "../../../config/theme";

const CopyrightFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className={`${footerTheme.root} border-t border-gray-200`}>
      <div className={`${footerTheme.container} text-center py-4`}>
        <p className={`${footerTheme.text} text-sm`}>
          &copy; {currentYear} <strong>BookQubit</strong>. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default CopyrightFooter;
