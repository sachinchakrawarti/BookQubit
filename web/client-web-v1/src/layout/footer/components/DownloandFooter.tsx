import {
  FaGooglePlay,
  FaApple,
  FaWindows,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { theme } from "../../../config/theme";

const DownloadFooter: React.FC = () => {
  return (
    <section
      className={`${theme.background.section} ${theme.layout.sectionPadding}`}
    >
      <div className={`${theme.layout.containerWidth} mx-auto text-center`}>
        {/* Heading */}
        <h2
          className={`text-3xl md:text-4xl font-bold ${theme.textColors.primary} mb-4`}
        >
          Download BookQubit App
        </h2>

        <p
          className={`max-w-2xl mx-auto ${theme.textColors.secondary} mb-10`}
        >
          Take your reading experience everywhere. Access books, summaries,
          audiobooks, and AI tools across all your devices.
        </p>

        {/* Download Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Android */}
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md hover:shadow-lg transition"
          >
            <FaGooglePlay className="text-2xl" />
            <div className="text-left">
              <p className="text-xs opacity-80">Get it on</p>
              <p className="font-semibold">Google Play</p>
            </div>
          </a>

          {/* iOS */}
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-black text-white shadow-md hover:shadow-lg transition"
          >
            <FaApple className="text-2xl" />
            <div className="text-left">
              <p className="text-xs opacity-80">Download on the</p>
              <p className="font-semibold">App Store</p>
            </div>
          </a>

          {/* Windows */}
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 text-white shadow-md hover:shadow-lg transition"
          >
            <FaWindows className="text-2xl" />
            <div className="text-left">
              <p className="text-xs opacity-80">Download for</p>
              <p className="font-semibold">Windows</p>
            </div>
          </a>

          {/* Linux (optional but cool 😄) */}
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-3 rounded-xl border border-gray-300 text-gray-800 hover:bg-gray-50 transition"
          >
            <FaLinux className="text-2xl" />
            <div className="text-left">
              <p className="text-xs opacity-70">Available for</p>
              <p className="font-semibold">Linux</p>
            </div>
          </a>
        </div>

        {/* Extra note */}
        <p className="mt-8 text-sm text-gray-500">
          🚀 Web, Mobile & Desktop — one BookQubit experience everywhere.
        </p>
      </div>
    </section>
  );
};

export default DownloadFooter;
