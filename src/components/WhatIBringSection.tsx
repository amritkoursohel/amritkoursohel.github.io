import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const WhatIBringSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-100/60 dark:bg-[#080808] transition-colors border-y border-slate-200/60 dark:border-neutral-900" id="value-prop">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            What I Bring
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Core competencies developed over a decade of strategic operations management.
          </p>
          <div className="h-1 w-12 bg-slate-400 dark:bg-neutral-600 rounded-full mx-auto mt-3"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {PORTFOLIO_DATA.whatIBring.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="glass-panel p-6 rounded-2xl shadow-xs hover:shadow-xl transition-all duration-150 flex flex-col gap-4 group border border-slate-200/80 dark:border-neutral-800 cursor-pointer"
            >
              <div
                className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center ${card.iconColor} group-hover:scale-105 transition-transform duration-150 shadow-xs`}
              >
                <span className="material-symbols-outlined text-2xl">
                  {card.icon}
                </span>
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-snug">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-300 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
