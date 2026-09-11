import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA, CertificationItem } from '../data/portfolioData';

type CategoryFilter = 'All' | 'AI & Cloud' | 'Leadership & Management' | 'Communication & Service' | 'Ethics & Strategy' | 'Productivity & Growth';

export const EducationSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories: CategoryFilter[] = [
    'All',
    'AI & Cloud',
    'Leadership & Management',
    'Communication & Service',
    'Ethics & Strategy',
    'Productivity & Growth',
  ];

  const filteredCertifications = useMemo(() => {
    return PORTFOLIO_DATA.certifications.filter((cert) => {
      const matchesCategory = activeCategory === 'All' || cert.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        cert.title.toLowerCase().includes(q) ||
        cert.skills.some((s) => s.toLowerCase().includes(q)) ||
        cert.category.toLowerCase().includes(q) ||
        cert.certificateId.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCopyId = (certId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(certId);
    setCopiedId(certId);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section
      className="py-16 md:py-24 bg-slate-100/60 dark:bg-[#080808] transition-colors border-y border-slate-200/60 dark:border-neutral-900"
      id="education"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-neutral-800 text-slate-700 dark:text-neutral-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="material-symbols-outlined text-sm">verified</span>
            <span>Accredited Credentials</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Education &amp; Professional Certifications
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 dark:text-neutral-300">
            Postgraduate business degree paired with 21 verified LinkedIn Learning certifications spanning Artificial Intelligence, Cloud, Leadership, Operations, and Business Communication.
          </p>
          <div className="h-1 w-12 bg-slate-400 dark:bg-neutral-600 rounded-full mx-auto mt-4"></div>
        </motion.div>

        {/* Academic Degrees & Languages Row */}
        <div className="mb-14">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-neutral-400 mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-base">school</span>
            <span>Academic Background &amp; Languages</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PORTFOLIO_DATA.educationAndCerts.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="glass-panel p-5 rounded-xl border border-slate-200/80 dark:border-neutral-800 flex items-start gap-3.5 shadow-xs hover:shadow-md transition-all duration-150"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-200/70 dark:bg-neutral-900 flex items-center justify-center text-slate-700 dark:text-neutral-300 flex-shrink-0 border border-slate-300/60 dark:border-neutral-800">
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-neutral-300 mt-1 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* LinkedIn Learning Certifications Showcase */}
        <div className="pt-6 border-t border-slate-200/70 dark:border-neutral-900">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#0077B5]/10 text-[#0077B5] dark:bg-[#0077B5]/20 dark:text-[#38bdf8] flex items-center justify-center font-bold text-base">
                  in
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span>LinkedIn Learning Certifications</span>
                    <span className="text-xs font-sans font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-full">
                      21 Verified
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-300 mt-0.5">
                    Continuous professional development with verified completion IDs and skill competencies
                  </p>
                </div>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg pointer-events-none">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cert or skill (e.g., AI)..."
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-white dark:bg-neutral-900 border border-slate-300 dark:border-neutral-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-neutral-600 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white text-xs cursor-pointer"
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? PORTFOLIO_DATA.certifications.length
                  : PORTFOLIO_DATA.certifications.filter((c) => c.category === cat).length;
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-xs'
                      : 'bg-white/80 dark:bg-neutral-900/80 text-slate-700 dark:text-neutral-300 hover:bg-slate-200/70 dark:hover:bg-neutral-800 border border-slate-200 dark:border-neutral-800'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? 'bg-white/20 dark:bg-black/20 text-white dark:text-black font-bold'
                        : 'bg-slate-200 dark:bg-neutral-800 text-slate-600 dark:text-neutral-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Certifications Grid */}
          {filteredCertifications.length === 0 ? (
            <div className="glass-panel py-12 px-6 rounded-2xl text-center border border-slate-200/80 dark:border-neutral-800">
              <span className="material-symbols-outlined text-4xl text-slate-400 mb-2">
                sentiment_dissatisfied
              </span>
              <p className="text-sm text-slate-600 dark:text-neutral-300">
                No certifications found matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="mt-3 text-xs font-semibold text-slate-900 dark:text-white underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCertifications.map((cert, idx) => {
                const isCopied = copiedId === cert.certificateId;

                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.3, delay: (idx % 6) * 0.04 }}
                    whileHover={{ y: -3, scale: 1.01 }}
                    onClick={() => setSelectedCert(cert)}
                    className="glass-panel p-5 rounded-xl border border-slate-200/80 dark:border-neutral-800 hover:border-slate-400 dark:hover:border-neutral-600 transition-all duration-150 flex flex-col justify-between shadow-xs hover:shadow-lg cursor-pointer group"
                  >
                    <div>
                      {/* Card Top: Category & Issuer Badge */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-slate-100 dark:bg-neutral-900 text-slate-600 dark:text-neutral-400 border border-slate-200/80 dark:border-neutral-800">
                          {cert.category}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                          <span className="material-symbols-outlined text-[14px]">check_circle</span>
                          <span>Verified</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-slate-700 dark:group-hover:text-neutral-200 transition-colors line-clamp-2 mb-2">
                        {cert.title}
                      </h4>

                      {/* Meta: Date & Duration */}
                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-neutral-400 mb-3 font-mono">
                        <span>{cert.date}</span>
                        <span>•</span>
                        <span>{cert.duration}</span>
                      </div>

                      {/* Skills Covered */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-slate-200/60 dark:bg-neutral-800/80 text-slate-700 dark:text-neutral-300 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Card Footer: Credential ID Snippet & Copy Action */}
                    <div className="pt-3 border-t border-slate-200/60 dark:border-neutral-800/80 flex items-center justify-between text-xs">
                      <div className="font-mono text-[10px] text-slate-400 truncate max-w-[170px]">
                        ID: {cert.certificateId.slice(0, 10)}...
                      </div>
                      <button
                        onClick={(e) => handleCopyId(cert.certificateId, e)}
                        className={`px-2 py-1 rounded text-[11px] font-semibold transition-colors flex items-center gap-1 cursor-pointer ${
                          isCopied
                            ? 'bg-emerald-500 text-white'
                            : 'text-slate-600 dark:text-neutral-300 hover:bg-slate-200/70 dark:hover:bg-neutral-800'
                        }`}
                        title="Copy Certificate ID"
                      >
                        <span className="material-symbols-outlined text-[13px]">
                          {isCopied ? 'done' : 'content_copy'}
                        </span>
                        <span>{isCopied ? 'Copied' : 'Copy ID'}</span>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Certificate Inspection Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-white dark:bg-[#121212] rounded-2xl border border-slate-200 dark:border-neutral-800 shadow-2xl p-6 sm:p-7 relative overflow-hidden"
            >
              {/* Modal Top Ribbon */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-[#0077B5] text-white flex items-center justify-center font-bold text-lg shadow-xs">
                    in
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-neutral-400">
                      LinkedIn Learning Certificate
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      <span className="material-symbols-outlined text-sm">verified</span>
                      <span>Officially Verified Completion</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 dark:bg-neutral-800 hover:bg-slate-200 dark:hover:bg-neutral-700 text-slate-500 dark:text-neutral-300 flex items-center justify-center transition-colors cursor-pointer"
                  title="Close modal"
                >
                  ✕
                </button>
              </div>

              {/* Title & Metadata */}
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                {selectedCert.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-300 mb-4">
                Course completed by <strong className="text-slate-900 dark:text-white">{PORTFOLIO_DATA.personalInfo.name}</strong>
              </p>

              {/* Certificate Details Card */}
              <div className="bg-slate-50 dark:bg-neutral-900/90 rounded-xl p-4 border border-slate-200/80 dark:border-neutral-800/90 mb-5 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 dark:text-neutral-400">Category:</span>
                  <span className="font-semibold text-slate-800 dark:text-neutral-200">{selectedCert.category}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 dark:text-neutral-400">Date &amp; Duration:</span>
                  <span className="font-mono text-slate-800 dark:text-neutral-200">{selectedCert.date} • {selectedCert.duration}</span>
                </div>
                <div className="text-xs">
                  <span className="text-slate-500 dark:text-neutral-400 block mb-1.5">Top Skills Covered:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md bg-white dark:bg-neutral-800 text-slate-800 dark:text-neutral-200 font-semibold border border-slate-200 dark:border-neutral-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/60 dark:border-neutral-800">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-neutral-400">Certificate ID:</span>
                    <button
                      onClick={() => handleCopyId(selectedCert.certificateId)}
                      className="text-[11px] font-semibold text-slate-900 dark:text-white hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[12px]">content_copy</span>
                      <span>{copiedId === selectedCert.certificateId ? 'Copied!' : 'Copy ID'}</span>
                    </button>
                  </div>
                  <div className="font-mono text-[10px] break-all bg-white dark:bg-black/40 p-2 rounded border border-slate-200 dark:border-neutral-800 text-slate-700 dark:text-neutral-300 select-all">
                    {selectedCert.certificateId}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-neutral-200 transition-colors cursor-pointer shadow-xs"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
