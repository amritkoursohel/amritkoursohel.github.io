import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { COMPANY_DETAILS, CompanyDetail } from '../data/companyDetailsData';

interface CompanyDetailPageProps {
  companyId: string;
  onBackToTimeline: () => void;
  onSelectCompany: (id: string) => void;
}

export const CompanyDetailPage: React.FC<CompanyDetailPageProps> = ({
  companyId,
  onBackToTimeline,
  onSelectCompany,
}) => {
  const company: CompanyDetail = COMPANY_DETAILS[companyId] || COMPANY_DETAILS.bt;
  const prevCompany = company.previousRoleId ? COMPANY_DETAILS[company.previousRoleId] : null;
  const nextCompany = company.nextRoleId ? COMPANY_DETAILS[company.nextRoleId] : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [companyId]);

  return (
    <div className="w-full bg-[#f9f9f9] dark:bg-[#0c0c0c] text-slate-900 dark:text-slate-100 min-h-screen pt-4 pb-20 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto w-full px-5 md:px-8 py-6 md:py-10">
        {/* Top Navigation */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-neutral-800 pb-6 mb-10">
          <button
            onClick={onBackToTimeline}
            className="inline-flex items-center gap-3 text-slate-600 dark:text-neutral-400 hover:text-slate-950 dark:hover:text-white transition-colors group cursor-pointer"
          >
            <span className="w-9 h-9 rounded-full border border-slate-300 dark:border-neutral-700 flex items-center justify-center group-hover:border-slate-900 dark:group-hover:border-white group-hover:bg-slate-200/50 dark:group-hover:bg-neutral-800 transition-all">
              <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-0.5 transition-transform">
                arrow_back
              </span>
            </span>
            <span className="font-mono text-xs uppercase tracking-wider font-bold text-slate-700 dark:text-neutral-300 group-hover:text-slate-950 dark:group-hover:text-white transition-colors">
              Back to Timeline
            </span>
          </button>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5e39e0]"></span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-neutral-500">
              Role Details
            </span>
          </div>
        </div>

        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 mb-12 border-b border-slate-200 dark:border-neutral-800"
        >
          <div className="col-span-1 lg:col-span-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs bg-[#5e39e0] text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider shadow-xs">
                  {company.period}
                </span>
                <span className="font-mono text-xs bg-slate-200/80 dark:bg-neutral-800 text-slate-700 dark:text-neutral-300 px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 border border-slate-300/60 dark:border-neutral-700">
                  <span className="material-symbols-outlined text-[14px]">location_on</span>
                  {company.location}
                </span>
                <span className="font-mono text-xs bg-slate-200/80 dark:bg-neutral-800 text-slate-700 dark:text-neutral-300 px-3 py-1 rounded-full uppercase tracking-wider border border-slate-300/60 dark:border-neutral-700">
                  {company.jobType}
                </span>
              </div>

              <h1 className="font-display text-[38px] md:text-[52px] lg:text-[58px] text-slate-950 dark:text-white font-black tracking-tight leading-none uppercase">
                {company.companyName}{' '}
                {company.highlightWord && (
                  <span className="text-[#5e39e0] dark:text-[#a5b4fc]">{company.highlightWord}</span>
                )}
              </h1>

              <h2 className="text-[20px] md:text-[24px] text-slate-900 dark:text-neutral-200 font-bold">
                {company.role}
              </h2>

              <p className="text-base sm:text-lg text-slate-600 dark:text-neutral-300 leading-relaxed max-w-3xl pt-2">
                {company.summary}
              </p>
            </div>

            {/* Skills tags */}
            <div className="flex flex-wrap gap-2 pt-6">
              {company.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="font-mono text-xs bg-slate-100 dark:bg-neutral-900 text-slate-700 dark:text-neutral-300 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-neutral-800 shadow-2xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="col-span-1 lg:col-span-4 flex flex-col items-start lg:items-end justify-between gap-6">
            <div
              className={`w-36 h-36 md:w-44 md:h-44 rounded-2xl ${
                company.logoBg === 'black' ? 'bg-black' : 'bg-white dark:bg-neutral-900'
              } border border-slate-200 dark:border-neutral-800 p-5 flex items-center justify-center shadow-md`}
            >
              <img
                alt={company.logoAlt}
                className="max-w-full max-h-full object-contain filter contrast-110"
                src={company.logo}
              />
            </div>
          </div>
        </motion.div>

        {/* Section 1: Performance & Growth Impact */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display text-slate-900 dark:text-white font-bold text-[24px] md:text-[28px]">
              Performance & Growth Impact
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-white dark:bg-neutral-900/90 p-6 md:p-8 rounded-2xl shadow-xs border border-slate-200 dark:border-neutral-800 hover:shadow-md hover:border-[#5e39e0]/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#5e39e0]/10 dark:bg-[#5e39e0]/20 text-[#5e39e0] dark:text-[#a5b4fc] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[20px]">{stat.icon}</span>
                </div>
                <p className="font-display text-[36px] md:text-[40px] text-slate-900 dark:text-white font-black mb-1 tracking-tight leading-none">
                  {stat.value}
                </p>
                <h4 className="text-[18px] md:text-[20px] text-slate-900 dark:text-white font-bold mb-2">
                  {stat.label}
                </h4>
                <p className="text-[14px] md:text-[15px] text-slate-600 dark:text-neutral-400 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Core Responsibilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
          <div className="col-span-1 lg:col-span-4">
            <div className="sticky top-28 space-y-4">
              <h3 className="font-display text-[34px] md:text-[42px] text-slate-950 dark:text-white font-bold leading-tight">
                Core
                <br />
                Responsibilities
              </h3>
              <p className="text-sm text-slate-500 dark:text-neutral-400">
                Detailed breakdowns of day-to-day operations and strategic oversight.
              </p>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-8 flex flex-col gap-6">
            {company.responsibilities.map((resp, rIdx) => (
              <motion.div
                key={rIdx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: rIdx * 0.06 }}
                className="bg-white dark:bg-neutral-900/90 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-neutral-800 hover:border-[#5e39e0]/40 transition-all shadow-xs"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#5e39e0]/10 dark:bg-[#5e39e0]/20 text-[#5e39e0] dark:text-[#a5b4fc] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl">{resp.icon}</span>
                  </div>
                  <div className="space-y-2.5">
                    <h4 className="text-[18px] md:text-[20px] text-slate-900 dark:text-white font-bold">
                      {resp.title}
                    </h4>
                    <p className="text-slate-600 dark:text-neutral-300 text-[15px] leading-relaxed">
                      {resp.description}
                    </p>
                    <ul className="list-disc list-inside text-[14px] text-slate-600 dark:text-neutral-400 space-y-1.5 pt-1">
                      {resp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Role Navigation */}
        <div className="py-10 border-t border-slate-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          {prevCompany ? (
            <button
              onClick={() => onSelectCompany(prevCompany.id)}
              className="w-full sm:w-auto group flex items-center gap-4 p-4 rounded-xl hover:bg-slate-200/50 dark:hover:bg-neutral-900 transition-all border border-transparent hover:border-slate-300 dark:hover:border-neutral-700 cursor-pointer text-left"
            >
              <div className="w-11 h-11 rounded-full border border-slate-300 dark:border-neutral-700 flex items-center justify-center text-slate-600 dark:text-neutral-400 group-hover:border-slate-900 dark:group-hover:border-white group-hover:text-slate-900 dark:group-hover:text-white transition-colors shrink-0">
                <span className="material-symbols-outlined text-[20px] group-hover:-translate-x-0.5 transition-transform">
                  arrow_back
                </span>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-mono text-[11px] text-slate-400 dark:text-neutral-500 uppercase tracking-wider">
                  Previous Role
                </span>
                <span className="text-[16px] md:text-[18px] text-slate-900 dark:text-white font-bold group-hover:text-[#5e39e0] dark:group-hover:text-[#a5b4fc] transition-colors">
                  {prevCompany.companyName} {prevCompany.highlightWord || ''}
                </span>
                <span className="text-[13px] text-slate-500 dark:text-neutral-400">{prevCompany.period}</span>
              </div>
            </button>
          ) : (
            <button
              onClick={onBackToTimeline}
              className="w-full sm:w-auto group flex items-center gap-4 p-4 rounded-xl hover:bg-slate-200/50 dark:hover:bg-neutral-900 transition-all border border-transparent hover:border-slate-300 dark:hover:border-neutral-700 cursor-pointer text-left"
            >
              <div className="w-11 h-11 rounded-full border border-slate-300 dark:border-neutral-700 flex items-center justify-center text-slate-600 dark:text-neutral-400 group-hover:border-slate-900 dark:group-hover:border-white group-hover:text-slate-900 dark:group-hover:text-white transition-colors shrink-0">
                <span className="material-symbols-outlined text-[20px] group-hover:-translate-x-0.5 transition-transform">
                  arrow_back
                </span>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-mono text-[11px] text-slate-400 dark:text-neutral-500 uppercase tracking-wider">
                  Timeline
                </span>
                <span className="text-[16px] md:text-[18px] text-slate-900 dark:text-white font-bold group-hover:text-[#5e39e0] dark:group-hover:text-[#a5b4fc] transition-colors">
                  Back to Timeline
                </span>
                <span className="text-[13px] text-slate-500 dark:text-neutral-400">All Experience</span>
              </div>
            </button>
          )}

          {nextCompany ? (
            <button
              onClick={() => onSelectCompany(nextCompany.id)}
              className="w-full sm:w-auto group flex items-center justify-end gap-4 p-4 rounded-xl hover:bg-slate-200/50 dark:hover:bg-neutral-900 transition-all border border-transparent hover:border-slate-300 dark:hover:border-neutral-700 cursor-pointer text-right ml-auto"
            >
              <div className="flex flex-col text-right">
                <span className="font-mono text-[11px] text-slate-400 dark:text-neutral-500 uppercase tracking-wider">
                  Next Role
                </span>
                <span className="text-[16px] md:text-[18px] text-slate-900 dark:text-white font-bold group-hover:text-[#5e39e0] dark:group-hover:text-[#a5b4fc] transition-colors">
                  {nextCompany.companyName} {nextCompany.highlightWord || ''}
                </span>
                <span className="text-[13px] text-slate-500 dark:text-neutral-400">{nextCompany.period}</span>
              </div>
              <div className="w-11 h-11 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black flex items-center justify-center group-hover:bg-[#5e39e0] group-hover:scale-105 transition-all shadow-sm shrink-0">
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </div>
            </button>
          ) : (
            <button
              onClick={onBackToTimeline}
              className="w-full sm:w-auto group flex items-center justify-end gap-4 p-4 rounded-xl hover:bg-slate-200/50 dark:hover:bg-neutral-900 transition-all border border-transparent hover:border-slate-300 dark:hover:border-neutral-700 cursor-pointer text-right ml-auto"
            >
              <div className="flex flex-col text-right">
                <span className="font-mono text-[11px] text-slate-400 dark:text-neutral-500 uppercase tracking-wider">
                  Timeline
                </span>
                <span className="text-[16px] md:text-[18px] text-slate-900 dark:text-white font-bold group-hover:text-[#5e39e0] dark:group-hover:text-[#a5b4fc] transition-colors">
                  Back to Timeline
                </span>
                <span className="text-[13px] text-slate-500 dark:text-neutral-400">All Experience</span>
              </div>
              <div className="w-11 h-11 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black flex items-center justify-center group-hover:bg-[#5e39e0] group-hover:scale-105 transition-all shadow-sm shrink-0">
                <span className="material-symbols-outlined text-[20px] group-hover:-translate-y-0.5 transition-transform">
                  arrow_upward
                </span>
              </div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
