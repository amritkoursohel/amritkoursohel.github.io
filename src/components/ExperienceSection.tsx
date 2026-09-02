import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Helper to render bold formatted markdown text
function renderFormattedText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-slate-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export const ExperienceSection: React.FC = () => {
  return (
    <section
      className="py-16 md:py-24 max-w-[1200px] mx-auto px-4 md:px-6 overflow-hidden"
      id="experience"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Professional Experience
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-neutral-300">
          A proven track record of delivering operational success across telecom, logistics, banking, and hospitality.
        </p>
        <div className="h-1 w-12 bg-slate-400 dark:bg-neutral-600 rounded-full mt-3"></div>
      </motion.div>

      <div className="relative border-l-2 border-slate-300/80 dark:border-neutral-800 ml-4 md:ml-6 md:pl-8 space-y-10">
        {PORTFOLIO_DATA.experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-6 md:pl-0 group"
          >
            {/* Timeline Circle */}
            <div
              className={`absolute -left-[31px] md:-left-[41px] top-5 w-4 h-4 rounded-full border-4 border-[#f7f9fb] dark:border-black shadow-md group-hover:scale-125 transition-transform duration-300 ${
                index === 0
                  ? 'bg-slate-900 dark:bg-neutral-200 ring-4 ring-slate-400/30 dark:ring-neutral-700/50'
                  : 'bg-slate-400 dark:bg-neutral-700'
              }`}
            ></div>

            {/* Experience Card */}
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.12 }}
              className="glass-panel p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all duration-150 border border-slate-200/80 dark:border-neutral-800 cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 mb-6 border-b border-gray-200/70 dark:border-neutral-800/90 pb-4">
                <div className="flex items-start sm:items-center gap-4">
                  {/* Company Logo */}
                  <div className="w-16 h-14 sm:w-20 sm:h-16 flex-shrink-0 bg-white dark:bg-neutral-900 rounded-xl p-2 border border-gray-200/80 dark:border-neutral-800 shadow-xs flex items-center justify-center overflow-hidden">
                    <img
                      alt={exp.logoAlt}
                      className="max-h-full max-w-full object-contain"
                      src={exp.logo}
                    />
                  </div>

                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-neutral-300">
                      {exp.company} — <span className="font-normal text-slate-500 dark:text-neutral-400">{exp.location}</span>
                    </p>
                  </div>
                </div>

                <div className="self-start lg:self-center">
                  <span className="inline-block px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-neutral-900 text-slate-700 dark:text-neutral-300 font-semibold text-xs tracking-wider border border-slate-200 dark:border-neutral-800 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="list-disc list-outside ml-4 sm:ml-5 space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-neutral-300 leading-relaxed">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{renderFormattedText(bullet)}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
