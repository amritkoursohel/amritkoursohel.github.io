import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const FocusAreasSection: React.FC = () => {
  return (
    <section
      className="py-16 md:py-24 max-w-[1200px] mx-auto px-4 md:px-6 overflow-hidden"
      id="focus-areas"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Professional Focus Areas
        </h2>
        <div className="h-1 w-12 bg-slate-400 dark:bg-neutral-600 rounded-full mx-auto mt-2"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PORTFOLIO_DATA.focusAreas.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className={`glass-panel p-6 sm:p-8 rounded-xl border-l-4 ${item.borderColor} hover:shadow-xl transition-all duration-150 border-t border-r border-b border-slate-200/60 dark:border-neutral-800 cursor-pointer`}
          >
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-neutral-300 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
