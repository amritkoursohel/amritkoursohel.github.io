import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section
      className="relative pb-16 md:pb-24 px-4 md:px-6 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12 pt-8 md:pt-16 overflow-hidden"
      id="home"
      style={{ scrollMarginTop: '80px' }}
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 space-y-6 z-10"
      >
        {/* Opportunity Pill */}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block px-3.5 py-1.5 rounded-full bg-slate-200/80 dark:bg-neutral-900 border border-slate-300 dark:border-neutral-800 text-slate-800 dark:text-neutral-300 font-semibold text-xs tracking-wider uppercase shadow-xs"
        >
          {PORTFOLIO_DATA.personalInfo.badge}
        </motion.span>

        {/* Main Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold leading-[1.15] text-slate-900 dark:text-white tracking-tight"
        >
          {PORTFOLIO_DATA.personalInfo.headline}
        </motion.h1>

        {/* Subhead narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-slate-600 dark:text-neutral-300 max-w-2xl leading-relaxed"
        >
          {PORTFOLIO_DATA.personalInfo.subheadline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap gap-4 pt-2"
        >
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.12 }}
            className="bg-slate-900 hover:bg-slate-800 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-semibold text-xs uppercase tracking-wider transition-colors duration-150 shadow-md hover:shadow-lg inline-flex items-center gap-2 cursor-pointer"
            href="#contact"
          >
            <span>Get in Touch</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.12 }}
            className="glass-button text-slate-800 dark:text-neutral-200 hover:bg-slate-100 dark:hover:bg-neutral-900 px-6 py-3 rounded-lg font-semibold text-xs uppercase tracking-wider transition-colors duration-150 inline-flex items-center gap-2 shadow-xs cursor-pointer"
            href="#expertise"
          >
            <span>View Expertise</span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Hero Circular Portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full aspect-square rounded-full bg-gradient-to-tr from-slate-300/40 dark:from-neutral-700/40 to-transparent p-3 md:p-4"
        >
          <div className="absolute inset-0 rounded-full glass-panel -z-10"></div>
          <img
            alt="Amrit Kour Sohel — Operations Professional"
            className="w-full h-full object-cover rounded-full shadow-2xl"
            src={PORTFOLIO_DATA.personalInfo.heroImage}
            style={{ objectPosition: 'center 20%' }}
          />
        </motion.div>
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-slate-300/40 dark:bg-neutral-800/30 blur-[90px] rounded-full -z-20 pointer-events-none"></div>
      </motion.div>
    </section>
  );
};
