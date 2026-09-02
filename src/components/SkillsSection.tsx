import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-100/60 dark:bg-[#080808] transition-colors border-y border-slate-200/60 dark:border-neutral-900" id="skills">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Core Skills &amp; Competencies
          </h2>
          <div className="h-1 w-12 bg-slate-400 dark:bg-neutral-600 rounded-full mx-auto mt-2"></div>
        </motion.div>

        <div className="space-y-10">
          {PORTFOLIO_DATA.skillsCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: catIdx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-neutral-800"
            >
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-neutral-300 mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-700 dark:text-neutral-300 text-lg">
                  {category.variant === 'accent' ? 'auto_awesome' : 'work'}
                </span>
                <span>{category.title}</span>
              </h3>

              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.12 }}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-xs transition-colors duration-150 cursor-pointer select-none ${
                      category.variant === 'accent'
                        ? 'border border-slate-300 dark:border-neutral-700 bg-slate-200/80 dark:bg-neutral-800 text-slate-900 dark:text-neutral-100 font-semibold'
                        : 'border border-gray-300/80 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/90 text-slate-800 dark:text-neutral-200'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
