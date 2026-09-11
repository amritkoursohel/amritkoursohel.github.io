import React from 'react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { downloadResumePDF } from '../utils/downloadPdf';

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

            {/* Contact & Download Actions */}
            <div className="flex flex-wrap gap-3 md:justify-end">
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

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.12 }}
                href="/Amrit_Kour_Sohel_CV.pdf"
                download="Amrit_Kour_Sohel_CV.pdf"
                onClick={() => downloadResumePDF()}
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black hover:bg-neutral-200 transition-all duration-150 cursor-pointer font-semibold text-xs uppercase tracking-wider shadow-lg"
                title="Download 1-page PDF Resume"
              >
                <span className="material-symbols-outlined text-lg">download</span>
                <span>Download CV</span>
              </motion.a>
            </div>

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
                  href={PORTFOLIO_DATA.personalInfo.telegramUrl && PORTFOLIO_DATA.personalInfo.telegramUrl !== '#' ? PORTFOLIO_DATA.personalInfo.telegramUrl : 'https://t.me/+918240132767'}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                >
                  <svg
                    className="w-5 h-5 fill-current text-neutral-400 group-hover:text-white transition-colors duration-150"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  <span className="text-sm font-medium hover-underline">Telegram</span>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.12 }}
                  className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors duration-150 group cursor-pointer"
                  href={`https://wa.me/918240132767`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <svg
                    className="w-5 h-5 fill-current text-neutral-400 group-hover:text-white transition-colors duration-150"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
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
