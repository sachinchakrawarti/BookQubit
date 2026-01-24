import {
  FaGoodreads,
  FaTwitter,
  FaInstagram,
  FaBookOpen,
} from "react-icons/fa";

import { theme, footerTheme } from "../../../config/theme";

// Footer component (no props needed for now)
const Footer: React.FC = () => {
  return (
    <footer className={footerTheme.root}>
      <div className={`${footerTheme.container} ${theme.layout.sectionPadding}`}>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-4">
              <FaBookOpen
                className={`text-3xl ${theme.textColors.highlight} mr-2`}
              />
              <span
                className={`text-2xl font-bold ${theme.textColors.primary}`}
              >
                Bookqubit
              </span>
            </div>

            <p className={`${footerTheme.text} mb-4`}>
              Your quantum leap into the world of literature. Discover, read, and
              immerse yourself in stories that matter.
            </p>

            <div className="flex space-x-4">
              <a href="#" className={footerTheme.socialIcon}>
                <FaGoodreads className="text-xl" />
              </a>
              <a href="#" className={footerTheme.socialIcon}>
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className={footerTheme.socialIcon}>
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`text-lg font-semibold ${theme.textColors.primary} mb-4`}
            >
              Explore
            </h3>

            <ul className="space-y-2">
              {["Featured Books", "New Releases", "Genres", "Authors"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className={`${footerTheme.link} ${footerTheme.text}`}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3
              className={`text-lg font-semibold ${theme.textColors.primary} mb-4`}
            >
              Features
            </h3>

            <ul className="space-y-2">
              {[
                "Book Summaries",
                "Audiobooks",
                "AI Assistant",
                "Reading Lists",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`${footerTheme.link} ${footerTheme.text}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className={`text-lg font-semibold ${theme.textColors.primary} mb-4`}
            >
              Contact
            </h3>

            <address
              className={`not-italic ${footerTheme.text} space-y-2`}
            >
              <p>123 Book Lane</p>
              <p>Literary City, LC 12345</p>

              <p>
                <a
                  href="mailto:hello@bookqubit.com"
                  className={footerTheme.link}
                >
                  hello@bookqubit.com
                </a>
              </p>

              <p>
                <a
                  href="tel:+11234567890"
                  className={footerTheme.link}
                >
                  (123) 456-7890
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className={footerTheme.divider} />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          <p className={footerTheme.copyright}>
            &copy; {new Date().getFullYear()} Bookqubit. All rights reserved.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className={footerTheme.legalLink}>
              Terms of Service
            </a>
            <a href="#" className={footerTheme.legalLink}>
              Privacy Policy
            </a>
            <a href="#" className={footerTheme.legalLink}>
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
