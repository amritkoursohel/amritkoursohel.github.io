import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section
      className="py-16 md:py-24 max-w-[1200px] mx-auto px-4 md:px-6 overflow-hidden"
      id="about"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
        {/* Left Side: Photo with scroll entrance */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 w-full max-w-sm md:max-w-md mx-auto order-2 md:order-1"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/60 dark:border-neutral-800"
          >
            <img
              alt="Amrit Kour Sohel — Professional Experience"
              className="w-full h-full object-cover"
              src={PORTFOLIO_DATA.personalInfo.aboutImage}
              style={{ objectPosition: 'center 15%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </motion.div>
        </motion.div>

        {/* Right Side: Text Narrative with scroll entrance */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 space-y-6 order-1 md:order-2"
        >
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              About Me
            </h2>
            <div className="h-1 w-12 bg-slate-400 dark:bg-neutral-600 rounded-full mt-2"></div>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-neutral-300 leading-relaxed">
            {PORTFOLIO_DATA.aboutParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Quick Stats / Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              className="glass-panel p-3.5 rounded-xl text-center"
            >
              <span className="block text-xl md:text-2xl font-bold text-slate-900 dark:text-white font-display">
                15+
              </span>
              <span className="text-xs text-slate-500 dark:text-neutral-400 font-medium">
                Years Experience
              </span>
            </motion.div>
            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              className="glass-panel p-3.5 rounded-xl text-center"
            >
              <span className="block text-xl md:text-2xl font-bold text-slate-900 dark:text-white font-display">
                GBP 4.6M+
              </span>
              <span className="text-xs text-slate-500 dark:text-neutral-400 font-medium">
                Debt Recovered
              </span>
            </motion.div>
            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              className="glass-panel p-3.5 rounded-xl text-center col-span-2 sm:col-span-1"
            >
              <span className="block text-xl md:text-2xl font-bold text-slate-900 dark:text-white font-display">
                9.5 / 10
              </span>
              <span className="text-xs text-slate-500 dark:text-neutral-400 font-medium">
                ASAT Rating
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
