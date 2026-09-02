/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WhatIBringSection } from './components/WhatIBringSection';
import { FocusAreasSection } from './components/FocusAreasSection';
import { CoreExpertiseSection } from './components/CoreExpertiseSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { WhyWorkWithMeSection } from './components/WhyWorkWithMeSection';
import { EducationSection } from './components/EducationSection';
import { ContactFooterSection } from './components/ContactFooterSection';
import { ResumeModal } from './components/ResumeModal';
import { Toast } from './components/Toast';
import { PORTFOLIO_DATA } from './data/portfolioData';

export default function App() {
  // Strictly default to Light Mode (false)
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('portfolio_user_theme');
      if (saved === 'dark') return true;
      if (saved === 'light') return false;
    } catch {
      // Ignore storage errors
    }
    return false; // Always default to Light Mode
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    try {
      // Clean up legacy keys that may have trapped previous sessions in dark mode
      localStorage.removeItem('theme');
    } catch {
      // Ignore
    }

    if (isDark) {
      document.documentElement.classList.add('dark');
      try {
        localStorage.setItem('portfolio_user_theme', 'dark');
      } catch {
        // Ignore
      }
    } else {
      document.documentElement.classList.remove('dark');
      try {
        localStorage.setItem('portfolio_user_theme', 'light');
      } catch {
        // Ignore
      }
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personalInfo.email);
    setToastMessage('Email address copied to clipboard!');
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] dark:bg-black dark:text-[#f1f5f9] transition-colors duration-150 relative selection:bg-slate-700 selection:text-white dark:selection:bg-neutral-700 flex flex-col">
      {/* Scroll Progress Bar at the top of viewport */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-400 via-slate-600 to-slate-800 dark:from-neutral-600 dark:via-neutral-400 dark:to-neutral-200 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Background ambient lighting */}
      <div className="fixed inset-0 -z-50 pointer-events-none opacity-40 dark:opacity-15 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] dark:bg-[radial-gradient(#525252_1px,transparent_1px)] [background-size:24px_24px]"></div>

      {/* Top Navbar */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onCopyEmail={copyEmail}
        onDownloaded={() => {
          setToastMessage('Downloading Amrit Kour Sohel’s CV (PDF)...');
          setTimeout(() => setToastMessage(null), 3000);
        }}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <WhatIBringSection />
        <FocusAreasSection />
        <CoreExpertiseSection />
        <ExperienceSection />
        <SkillsSection />
        <WhyWorkWithMeSection />
        <EducationSection />
      </main>

      {/* Footer & Contact Section */}
      <ContactFooterSection onCopyEmail={copyEmail} />

      {/* Interactive CV View / Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onCopyEmail={copyEmail}
      />

      {/* Notification Toast */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
