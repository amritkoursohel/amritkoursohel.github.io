import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  // All cards collapsed by default
  const [openIds, setOpenIds] = useState<Set<string | number>>(new Set());

  const toggle = (id: string | number) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

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
        {PORTFOLIO_DATA.experiences.map((exp, index) => {
          const isOpen = openIds.has(exp.id);
          return (
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
              <div className="glass-panel rounded-2xl hover:shadow-xl transition-all duration-150 border border-slate-200/80 dark:border-neutral-800 overflow-hidden">

                {/* Header — always visible */}
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-4">
                    <div className="flex items-start sm:items-center gap-4">
                      {/* Company Logo */}
                      <div className="w-16 h-14 sm:w-20 sm:h-16 flex-shrink-0 bg-white dark:bg-neutral-900 rounded-xl p-2 border border-gray-200/80 dark:border-neutral-800 shadow-xs flex items-center justify-center overflow-hidden">
                        <img
                          alt={exp.logoAlt}
                          className="max-h-full max-w-full object-contain"
                          src={exp.logo}
                        />
                      </div>

                      {/* Title & Company */}
                      <div>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-neutral-300">
                          {exp.company} — <span className="font-normal text-slate-500 dark:text-neutral-400">{exp.location}</span>
                        </p>
                      </div>
                    </div>

                    {/* Period Badge + View More Button */}
                    <div className="self-start lg:self-start flex flex-col items-start lg:items-end gap-2">
                      <span className="inline-block px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-neutral-900 text-slate-700 dark:text-neutral-300 font-semibold text-xs tracking-wider border border-slate-200 dark:border-neutral-800 whitespace-nowrap">
                        {exp.period}
                      </span>

                      {/* Toggle Button */}
                      <button
                        onClick={() => toggle(exp.id)}
                        aria-expanded={isOpen}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-neutral-900 text-slate-700 dark:text-neutral-300 font-semibold text-xs tracking-wider border border-slate-200 dark:border-neutral-800 whitespace-nowrap hover:bg-slate-200 dark:hover:bg-neutral-800 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                      >
                        <span>{isOpen ? 'View Less' : 'View More'}</span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          className="flex-shrink-0"
                          aria-hidden="true"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </motion.span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Collapsible Bullet Points */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 border-t border-gray-200/70 dark:border-neutral-800/90">
                        <ul className="list-disc list-outside ml-4 sm:ml-5 space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-neutral-300 leading-relaxed mt-4">
                          {exp.bullets.map((bullet, bIdx) => (
                            <li key={bIdx}>{renderFormattedText(bullet)}</li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
