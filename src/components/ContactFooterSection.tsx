import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactFooterSectionProps {
  onCopyEmail: () => void;
}

export const ContactFooterSection: React.FC<ContactFooterSectionProps> = ({
  onCopyEmail,
}) => {
  return (
    <footer
      className="bg-[#0a0a0a] text-white py-16 md:py-24 px-4 md:px-6 transition-colors border-t border-neutral-900 overflow-hidden"
      id="contact"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Side: Portrait & Info with scroll entrance */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className="w-40 h-40 sm:w-48 sm:h-48 overflow-hidden rounded-full border-4 border-neutral-800 shadow-2xl"
            >
              <img
                alt="Amrit Kour Sohel — Professional Portrait"
                className="w-full h-full object-cover"
                src={PORTFOLIO_DATA.personalInfo.footerImage}
              />
            </motion.div>
            <div className="space-y-2">
              <h3 className="text-xs sm:text-sm font-bold tracking-widest text-neutral-400 uppercase font-display">
                {PORTFOLIO_DATA.personalInfo.name}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-xs leading-relaxed">
                Operations Professional currently crafting efficient, customer-centric experiences.
              </p>
            </div>
          </motion.div>

          {/* Right Side: CTA & Socials with scroll entrance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start md:items-end space-y-8 text-left md:text-right"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold max-w-md leading-tight text-white">
              Think I'd be a good fit for your team or project? Let's connect.
            </h2>

            {/* Email Copy Pill */}
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.12 }}
              onClick={onCopyEmail}
              className="flex items-center gap-3 px-6 py-3.5 rounded-full border border-neutral-700 bg-white/5 hover:bg-white/10 hover:border-neutral-500 transition-all duration-150 cursor-pointer group shadow-lg text-left"
              title="Click to copy email"
            >
              <span className="text-sm sm:text-base font-medium text-white group-hover:text-neutral-200 transition-colors duration-150">
                {PORTFOLIO_DATA.personalInfo.email}
              </span>
              <span className="material-symbols-outlined text-white/80 group-hover:text-white text-xl transition-colors duration-150">
                content_copy
              </span>
            </motion.button>

            {/* Socials & Channels */}
            <div className="space-y-3">
              <p className="text-xs tracking-widest text-neutral-400 font-bold uppercase">
                SOCIALS &amp; CHANNELS
              </p>
              <div className="flex flex-wrap items-center gap-6 md:justify-end">
                {/* LinkedIn */}
                <motion.a
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.12 }}
                  className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors duration-150 group cursor-pointer"
                  href={PORTFOLIO_DATA.personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    className="w-5 h-5 fill-current text-neutral-400 group-hover:text-white transition-colors duration-150"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span className="text-sm font-medium hover-underline">LinkedIn</span>
                </motion.a>

                {/* Telegram */}
                <motion.a
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.12 }}
                  className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors duration-150 group cursor-pointer"
                  href={`https://t.me/+918240132767`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    alt="Telegram"
                    className="w-5 h-5 brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-150"
                    src={PORTFOLIO_DATA.personalInfo.telegramIcon}
                  />
                  <span className="text-sm font-medium hover-underline">Telegram</span>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.12 }}
                  className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors duration-150 group cursor-pointer"
                  href={`https://wa.me/918240132767`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="material-symbols-outlined text-neutral-400 group-hover:text-white text-lg transition-colors duration-150">chat</span>
                  <span className="text-sm font-medium hover-underline">WhatsApp</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-neutral-800 mb-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-500 text-xs tracking-wider uppercase font-semibold">
          <p>ALL RIGHTS RESERVED.</p>
          <p>© AMRIT KOUR SOHEL 2026</p>
        </div>
      </div>
    </footer>
  );
};
