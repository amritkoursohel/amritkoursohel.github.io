import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const WhyWorkWithMeSection: React.FC = () => {
  return (
    <section
      className="py-16 md:py-24 max-w-[1200px] mx-auto px-4 md:px-6 overflow-hidden"
      id="why-me"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Why Work With Me
        </h2>
        <div className="h-1 w-12 bg-slate-400 dark:bg-neutral-600 rounded-full mx-auto mt-2"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PORTFOLIO_DATA.whyWorkWithMe.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="glass-panel p-8 rounded-2xl text-center space-y-4 hover:shadow-xl transition-all duration-150 border border-slate-200/80 dark:border-neutral-800 cursor-pointer"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-slate-100 dark:bg-neutral-900 flex items-center justify-center text-slate-700 dark:text-neutral-300 shadow-xs border border-slate-200 dark:border-neutral-800">
              <span className="material-symbols-outlined text-2xl">
                {item.icon}
              </span>
            </div>
            <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-300 leading-relaxed max-w-xs mx-auto">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
