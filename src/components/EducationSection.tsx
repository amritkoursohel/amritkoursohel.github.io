import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-100/60 dark:bg-[#080808] transition-colors border-y border-slate-200/60 dark:border-neutral-900" id="education">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Education &amp; Certifications
          </h2>
          <div className="h-1 w-12 bg-slate-400 dark:bg-neutral-600 rounded-full mx-auto mt-2"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {PORTFOLIO_DATA.educationAndCerts.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="glass-panel p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:shadow-xl transition-all duration-150 border border-slate-200/80 dark:border-neutral-800 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-neutral-900 flex items-center justify-center text-slate-700 dark:text-neutral-300 flex-shrink-0 border border-slate-200 dark:border-neutral-800 shadow-xs">
                <span className="material-symbols-outlined text-2xl">
                  {item.icon}
                </span>
              </div>
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-300 mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
