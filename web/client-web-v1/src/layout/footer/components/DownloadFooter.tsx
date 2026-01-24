// src/layout/footer/components/DownloadFooter.tsx

import React from "react";
import { 
  FaAndroid, 
  FaApple, 
  FaWindows, 
  FaGlobe, 
  FaArrowRight,
  FaChrome,
  FaFirefox,
  FaEdge
} from "react-icons/fa";
import { FiChrome } from "react-icons/fi";
import { SiBrave, SiSafari } from "react-icons/si";
import { footerTheme } from "../../../config/theme";

const DownloadFooter: React.FC = () => {
  // First Row: Core Platforms
  const corePlatforms = [
    {
      name: "Web App",
      description: "Instant browser access",
      href: "/web",
      icon: <FaGlobe className="text-xl sm:text-2xl" />,
      color: "from-blue-500 to-cyan-400",
      tag: "Most Popular",
    },
    {
      name: "iOS",
      description: "iPhone & iPad app",
      href: "/download/ios",
      icon: <FaApple className="text-xl sm:text-2xl" />,
      color: "from-gray-800 to-gray-600",
    },
    {
      name: "Android",
      description: "Google Play Store",
      href: "/download/android",
      icon: <FaAndroid className="text-xl sm:text-2xl" />,
      color: "from-emerald-500 to-green-400",
    },
    {
      name: "Windows",
      description: "Desktop application",
      href: "/download/windows",
      icon: <FaWindows className="text-xl sm:text-2xl" />,
      color: "from-sky-600 to-blue-500",
    },
    {
      name: "macOS",
      description: "Native desktop app",
      href: "/download/mac",
      icon: <FaApple className="text-xl sm:text-2xl" />,
      color: "from-indigo-500 to-purple-400",
    },
  ];

  // Second Row: Browser Extensions
  const browserExtensions = [
    {
      name: "Chrome",
      description: "Chrome Web Store",
      href: "/extension/chrome",
      icon: <FaChrome className="text-xl sm:text-2xl" />,
      color: "from-green-500 to-emerald-400",
      tag: "Popular",
    },
    {
      name: "Safari",
      description: "Mac & iOS Safari",
      href: "/extension/safari",
      icon: <SiSafari className="text-xl sm:text-2xl" />,
      color: "from-blue-400 to-sky-300",
    },
    {
      name: "Edge",
      description: "Microsoft Edge Add-ons",
      href: "/extension/edge",
      icon: <FaEdge className="text-xl sm:text-2xl" />,
      color: "from-blue-600 to-indigo-500",
    },
    {
      name: "Firefox",
      description: "Firefox Add-ons",
      href: "/extension/firefox",
      icon: <FaFirefox className="text-xl sm:text-2xl" />,
      color: "from-orange-500 to-amber-400",
    },
    {
      name: "Brave",
      description: "Brave browser extension",
      href: "/extension/brave",
      icon: <SiBrave className="text-xl sm:text-2xl" />,
      color: "from-amber-600 to-orange-500",
    },
  ];

  return (
    <section className={`${footerTheme.root} border-t border-gray-200/50 overflow-hidden`}>
      <div className={`${footerTheme.container} py-8 sm:py-12 px-4 sm:px-6`}>
        
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          {/* Badge */}
          <div className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-500 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 w-full max-w-[280px]">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></span>
            <span className="truncate">Complete Platform Support</span>
          </div>
          
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4 px-2">
            Available on{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
              Every Platform
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto px-2 leading-relaxed">
            Read your favorite books anywhere, on any device or browser.
          </p>
        </div>

        {/* First Row: Core Platforms */}
        <div className="mb-10 sm:mb-12">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6 pl-2 border-l-4 border-sky-500">
            Apps & Desktop
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {corePlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.href}
                className="group relative bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-4 sm:p-5 md:p-6 hover:border-sky-200 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 active:scale-[0.98]"
                aria-label={`Download ${platform.name}`}
              >
                {platform.tag && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-400 text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold shadow-md whitespace-nowrap z-10">
                    {platform.tag}
                  </div>
                )}
                
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center text-white mb-3 sm:mb-4 shadow-md`}>
                  {platform.icon}
                </div>
                
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-sky-600 transition-colors line-clamp-1">
                    {platform.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-snug sm:leading-relaxed line-clamp-2">
                    {platform.description}
                  </p>
                </div>
                
                <div className="mt-4 sm:mt-5 flex items-center text-sky-600 font-medium text-sm sm:text-base group-hover:text-sky-700 transition-colors">
                  <span className="truncate">
                    {platform.name === "Web App" ? "Launch App" : "Download"}
                  </span>
                  <FaArrowRight className="ml-2 text-xs sm:text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 to-blue-50/0 group-hover:from-sky-50/30 group-hover:to-blue-50/30 rounded-xl sm:rounded-2xl -z-10 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Second Row: Browser Extensions */}
        <div className="mb-8 sm:mb-10">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6 pl-2 border-l-4 border-purple-500">
            Browser Extensions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {browserExtensions.map((browser) => (
              <a
                key={browser.name}
                href={browser.href}
                className="group relative bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-4 sm:p-5 md:p-6 hover:border-purple-200 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300 active:scale-[0.98]"
                aria-label={`Add ${browser.name} extension`}
              >
                {browser.tag && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-400 to-pink-400 text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold shadow-md whitespace-nowrap z-10">
                    {browser.tag}
                  </div>
                )}
                
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${browser.color} flex items-center justify-center text-white mb-3 sm:mb-4 shadow-md`}>
                  {browser.icon}
                </div>
                
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-1">
                    {browser.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-snug sm:leading-relaxed line-clamp-2">
                    {browser.description}
                  </p>
                </div>
                
                <div className="mt-4 sm:mt-5 flex items-center text-purple-600 font-medium text-sm sm:text-base group-hover:text-purple-700 transition-colors">
                  <span className="truncate">Add to Browser</span>
                  <FaArrowRight className="ml-2 text-xs sm:text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-pink-50/0 group-hover:from-purple-50/30 group-hover:to-pink-50/30 rounded-xl sm:rounded-2xl -z-10 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Unified Sync Feature */}
        <div className="bg-gradient-to-r from-sky-50 to-purple-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 text-center border border-sky-100">
          <div className="max-w-2xl mx-auto space-y-4 sm:space-y-5">
            {/* Sync Indicator */}
            <div className="flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full mb-2 mx-auto w-fit">
              <div className="flex space-x-1">
                {[0, 150, 300].map((delay) => (
                  <div
                    key={delay}
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-sky-400 rounded-full animate-bounce"
                    style={{ animationDelay: `${delay}ms` }}
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-medium text-sky-700 truncate">
                Universal Sync
              </span>
            </div>
            
            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 px-2">
              One Account, All Platforms
            </h3>
            
            {/* Description */}
            <p className="text-gray-700 text-sm sm:text-base px-2 leading-relaxed">
              Your library and reading progress sync seamlessly across every app and browser extension.
            </p>
            
            {/* CTA Button */}
            <div className="pt-2 sm:pt-4">
              <button 
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-sky-600 to-blue-500 text-white font-medium rounded-xl sm:rounded-lg hover:shadow-lg hover:shadow-sky-500/25 active:scale-[0.98] transition-all duration-300 text-sm sm:text-base"
                onClick={() => window.location.href = '/signup'}
              >
                Start Free Reading
              </button>
              
              {/* Mobile-Only Hint */}
              <p className="mt-3 text-xs text-gray-500 sm:hidden">
                Choose your platform to begin
              </p>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-100 to-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Sync Everywhere</h4>
              <p className="text-xs text-gray-600">Pick up where you left off on any device</p>
            </div>
            
            <div className="p-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Secure & Private</h4>
              <p className="text-xs text-gray-600">Your reading data is always protected</p>
            </div>
            
            <div className="p-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-100 to-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Fast Experience</h4>
              <p className="text-xs text-gray-600">Optimized performance on every platform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadFooter;