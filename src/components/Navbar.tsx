import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { downloadResumePDF } from '../utils/downloadPdf';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onCopyEmail: () => void;
  onDownloaded?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  onCopyEmail,
  onDownloaded,
}) => {
  const handleDownloadCV = () => {
    downloadResumePDF();
    if (onDownloaded) {
      onDownloaded();
    }
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="sticky top-0 w-full z-40 bg-white/85 dark:bg-black/85 backdrop-blur-md border-b border-gray-200/80 dark:border-neutral-800/80 shadow-xs transition-colors duration-300"
      id="navbar"
    >
      <div className="flex justify-between items-center max-w-[1200px] mx-auto px-4 md:px-6 py-4">
        <a
          className="text-base md:text-lg font-bold tracking-widest text-slate-900 dark:text-white hover:text-slate-600 dark:hover:text-neutral-300 transition-colors uppercase font-display"
          href="#home"
        >
          {PORTFOLIO_DATA.personalInfo.name}
        </a>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* CV Download Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.12 }}
            onClick={handleDownloadCV}
            className="flex items-center gap-1.5 text-slate-700 dark:text-neutral-300 hover:text-slate-950 dark:hover:text-white transition-colors duration-150 text-xs font-semibold uppercase tracking-wider hover-underline px-2.5 py-1.5 rounded-lg hover:bg-slate-100/70 dark:hover:bg-neutral-900 cursor-pointer"
            title="Download Amrit Kour Sohel's CV (PDF)"
          >
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>CV</span>
          </motion.button>

          {/* Email Copy Pill */}
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-300/80 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/80 backdrop-blur-sm hover:border-slate-400 dark:hover:border-neutral-600 transition-all duration-150 group shadow-xs">
            <a
              href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
              className="text-xs text-slate-600 dark:text-neutral-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-150 font-medium"
            >
              {PORTFOLIO_DATA.personalInfo.email}
            </a>
            <button
              onClick={onCopyEmail}
              className="p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md transition-colors duration-150 text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
              title="Copy email to clipboard"
            >
              <span className="material-symbols-outlined text-[16px] leading-none">
                content_copy
              </span>
            </button>
          </div>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ rotate: 15, scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            transition={{ duration: 0.12 }}
            onClick={onToggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-900 text-slate-700 dark:text-neutral-300 transition-colors duration-150 border border-transparent dark:border-neutral-800 cursor-pointer"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined text-xl">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};
