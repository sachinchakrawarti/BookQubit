// src/layout/footer/components/NewsletterFooter.tsx

import React, { useState } from "react";
import { footerTheme, theme } from "../../../config/theme";

const NewsletterFooter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Here you can add your subscription logic, API call, etc.
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className={`${footerTheme.root} ${theme.layout.sectionPadding}`}>
      <div className={`${footerTheme.container} text-center`}>
        {/* Heading */}
        <h3 className={`text-2xl font-bold ${footerTheme.heading} mb-3`}>
          Join Our Newsletter
        </h3>

        {/* Description */}
        <p className={`${footerTheme.text} mb-6`}>
          Stay updated on new books, features, and AI-powered insights.
        </p>

        {/* Subscription Form */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row justify-center gap-3 max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-300"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 text-white font-semibold hover:shadow-lg transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterFooter;
