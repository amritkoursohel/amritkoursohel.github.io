import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CoreExpertiseSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-100/60 dark:bg-[#080808] transition-colors border-y border-slate-200/60 dark:border-neutral-900" id="expertise">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Core Expertise
          </h2>
          <div className="h-1 w-12 bg-slate-400 dark:bg-neutral-600 rounded-full mx-auto mt-2"></div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {PORTFOLIO_DATA.coreExpertise.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="glass-panel p-6 rounded-2xl text-center shadow-xs hover:shadow-xl transition-all duration-150 group cursor-pointer border border-slate-200/80 dark:border-neutral-800"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-slate-100 dark:bg-neutral-900 flex items-center justify-center text-slate-700 dark:text-neutral-300 mb-3 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors duration-150 shadow-xs border border-transparent dark:border-neutral-800">
                <span className="material-symbols-outlined text-3xl">
                  {item.icon}
                </span>
              </div>
              <span className="font-semibold text-xs sm:text-sm tracking-wider uppercase text-slate-900 dark:text-neutral-100 block">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
