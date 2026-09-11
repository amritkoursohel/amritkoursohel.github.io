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

interface TimelineItem {
  id: string;
  company: string;
  role: string;
  periodLine1: string;
  periodLine2: string;
  logo: string;
  logoAlt: string;
  description: string;
  badge?: string;
  isPrimary?: boolean;
  reversed: boolean;
}

interface ExperienceSectionProps {
  onSelectCompany?: (companyId: string) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onSelectCompany }) => {
  const timelineItems: TimelineItem[] = [
    {
      id: 'bt',
      company: 'British Telecom',
      role: 'Associate - Bill to Cash',
      periodLine1: 'April 2022',
      periodLine2: 'Sep 2026',
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaZqcuW39BZgGGlTXRYXZ52IFEGjewYjvezxkxXYEiQwrT5e72-TxPdkaqJYEUL7l2wFRyVqEZyVX4150nzomLjD476WIvgXPpjf-KhfM3aMeOrLP0T51KsEbGWgLe_KMGpuBpqODa0YIH4AVI9_JWfSiJGqxw9WZKF9gAxFLqchyF1F2bzUVyDy-I0wuCxDC6j1s8cob0_jT6Bu3tLp3lYcCFAOMZJX4hjWqF3MJxbGuVjqXRv_K0jolZ0stuiMGcEg',
      logoAlt: 'BT Logo',
      description:
        'Successfully managed £4.63M in debt recovery as an Associate at British Telecom (Bill to Cash).',
      badge: '£4.63M RECOVERY',
      isPrimary: true,
      reversed: false,
    },
    {
      id: 'nlb',
      company: 'NLB Services',
      role: 'Customer Service Executive',
      periodLine1: 'Nov 2020',
      periodLine2: 'March 2022',
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAmqw3uM5U5Kv8zikKR3G4Mkglv4iCQf9pR3rnhAAsc9zcHZhwNqBjorgSt2SFprpeOrHeQTDV_qv4Pk0iDb99xGPmO3gz_mTWUqYotpehKkO34XhjG4Zgt71UBHymRXRUGekFBkMCy0WlWPGWKHRHoJymtMkb95zEKuFiBoe6LDdxOErciwAir7QEXmEt0VJJMlUwR1lB1IP2xK5I0OUdciBa4NMDtkj-2hBMCzwpiITqd8zMIJ8RL7FVOa3knXY_Uw',
      logoAlt: 'NLB Services Logo',
      description: 'Delivering excellence in complex client support scenarios.',
      reversed: true,
    },
    {
      id: 'getgorgeous',
      company: 'Get Gorgeous',
      role: 'Operations Manager',
      periodLine1: '2017',
      periodLine2: '2019',
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfb-mWn1M5SqEHh1n6WErRiY0LedfT65CUyzjszJ_Chqbb7w7Xt-M3-ZJrNCrg9WIsDxrNSouKgu69DwODZ0i1TbC6jETVgc8ZEyDfPHi7Yk-adt5pL-1dBsgq8FcO11MnefJT4lV5XyZHE-1EFnpN1dzA1AJc91dXmVFAiD5u5Qs0m5ZX0Ch6AyhXLGzSa-qy11zJnDdoJwwcj_M70PKKuPbcrmCH1L5A5NU5IvGdcPLnSHI_lfKU0mlgpDziAwR-vg',
      logoAlt: 'Get Gorgeous Logo',
      description:
        'Achieved a 40% increase in total bookings through strategic operational refinements at Get Gorgeous Salon.',
      badge: '+40% GROWTH',
      isPrimary: true,
      reversed: false,
    },
    {
      id: 'cerise',
      company: 'Cerise Salon',
      role: 'Operations Manager',
      periodLine1: '2014',
      periodLine2: '2017',
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsgfHHLAF-vKOz1K026QyvbySRhz08UOKnOK5h_4vSt7aPrEoqhnXNRH1rYpG2PuO9rlF7U6bDa_CqVSx0W5xwIlb8pQiux9qodCSI93rra4iBC3z0m5v68VMBuWJsMCyuENvfLeF_wNWkN9dW7yVLtXJ7P8erowYoR7UicTzGjkH-OZksDplelzpHLIFLuxqEUjjFVGOyl2ze49LdEIzUwYjYhbb1FWC-5jL_I7OZS0FmIeOxtqg8ocGR_xZPVhN_XA',
      logoAlt: 'Cerise Salon Logo',
      description: 'Transition into leadership, overseeing end-to-end daily operations.',
      reversed: true,
    },
    {
      id: 'anjohn',
      company: 'A.N. John',
      role: 'Front Desk Coordinator',
      periodLine1: '2013',
      periodLine2: '2014',
      logo: '/assets/anjohn-logo.png',
      logoAlt: 'A.N. John Logo',
      description: 'Managing high-volume client arrivals and service scheduling.',
      reversed: false,
    },
    {
      id: 'ural',
      company: 'Ural India Ltd',
      role: 'Executive Assistant',
      periodLine1: 'Dec 2010',
      periodLine2: 'Nov 2012',
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD12cakga0Q68InIwZzjoJOFK1e_b_G20-N2mCDN-EdSuyMOH5QiIV4ZBocPTn9Rs3vqfK7N9NtMtiZO04sslAM84e_bBub_r3TJHEzQGFPWwhxUHvWNgIhmXRxJOgdmXztBbV9zhf3ZrTjVxq58_o8dzrlGM3LErS7w15qoYvlE9UBrL-DugTDCfCvafIP5MXKXBmrM_H6TnAeOO_bLwz1th4U1NMfu-Dq39c8rL_1TlNgc5tCCXwrPRfgbvPiqeYsJg',
      logoAlt: 'Ural India Logo',
      description: 'Administrative efficiency and coordination for senior leadership.',
      reversed: true,
    },
    {
      id: 'hsbc',
      company: 'HSBC',
      role: 'Associate',
      periodLine1: 'Nov 2008',
      periodLine2: 'May 2010',
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcodLqfIghUdmtjWAcZiA62pNviVadJ_2Rx_scVtITywRaVv5lbVnEbg8OcZhK2IrRXvV_42toTeRfbx2TAld2A853JcVHMuLIBMIgnuvM9QV6s_qLCGLK43zU_5H6TdxlQ2HalQ1wPExvnej959Us25UhJt_er9rPg2NJgXpvNe8QAbWhxtKSNBxCMI2F5nVjZ--I7HhnZANgLqg_qvPGuOYnqfp1S-2JPhaZHp2qXy7fySQ0cKQQ9T14pt0tdjWZNw',
      logoAlt: 'HSBC Logo',
      description: 'Specializing in financial service delivery and client compliance.',
      reversed: false,
    },
    {
      id: 'parkhotel',
      company: 'The Park Hotel',
      role: 'Guest Executive',
      periodLine1: 'Jan 2007',
      periodLine2: 'Jan 2008',
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdOUSe94-LsJfwJ1VASX3rGmt7BUuw88qfo7J804pvYYqyhcX4C7PHw7c2_YyzzTsCBRcIEKK4QuvqL0Cm5NO78mHFqc8xi9gOpAjZUQx9I7fhfvLTfFhpF1SHWAyeIomMIJTS-NAbFm5zCvTc7XoiPEL-ziO-RYnL8AHoGzW-L4fnHgfeqYe4iRu-m7-8hWgbd94HsH5ovOgripGzIfrKGnXyKlSqMYQJVOLHuq9EE6fj2sr7rn4SWJvyatSISoq3sg',
      logoAlt: 'The Park Hotel Logo',
      description: 'Foundation in high-tier hospitality and customer relations.',
      reversed: true,
    },
  ];

  const handleCardClick = (id: string) => {
    if (onSelectCompany) {
      onSelectCompany(id);
    }
  };

  return (
    <section
      className="w-full py-20 md:py-24 bg-transparent dark:bg-transparent border-y border-slate-200/60 dark:border-neutral-900 relative overflow-hidden transition-colors duration-300"
      id="experience"
    >
      <style>{`
        .timeline-row:hover .timeline-card {
          border-color: #016a61 !important;
          transform: translateY(-6px);
          box-shadow: 0 20px 25px -5px rgb(1 106 97 / 0.12), 0 8px 10px -6px rgb(1 106 97 / 0.08);
        }
        .dark .timeline-row:hover .timeline-card {
          border-color: #2dd4bf !important;
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.6), 0 8px 10px -6px rgb(45 212 191 / 0.15);
        }
        .timeline-row:hover .timeline-date {
          color: #016a61 !important;
          opacity: 1 !important;
        }
        .dark .timeline-row:hover .timeline-date {
          color: #2dd4bf !important;
          opacity: 1 !important;
        }
        .timeline-row:hover .timeline-dot {
          transform: scale(1.25);
          background-color: #016a61 !important;
        }
        .dark .timeline-row:hover .timeline-dot {
          background-color: #2dd4bf !important;
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-4 relative">
        {/* Header Block matching user specification */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#e6f4f1] text-[#016a61] dark:bg-[#016a61]/25 dark:text-[#2dd4bf] border border-[#016a61]/20 dark:border-[#2dd4bf]/30 mb-4 shadow-2xs">
            CAREER MILESTONES
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Professional Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            A proven track record of delivering operational success across telecommunications, logistics, and premium service industries.
          </p>
        </div>

        {/* Central Timeline Line */}
        <div className="absolute left-6 md:left-1/2 top-48 bottom-0 w-[2px] bg-gradient-to-b from-[#016a61]/40 via-slate-300/70 to-[#016a61]/40 dark:from-[#2dd4bf]/30 dark:via-neutral-800 dark:to-[#2dd4bf]/30 md:transform md:-translate-x-1/2"></div>

        <div className="relative space-y-16 md:space-y-28">
          {timelineItems.map((item, idx) => {
            return (
              <div
                key={item.id}
                className={`relative flex flex-col ${
                  item.reversed ? 'md:flex-row-reverse' : 'md:flex-row'
                } md:items-center md:justify-between w-full group timeline-row`}
              >
                {/* Card side */}
                <div
                  className={`w-full pl-12 md:pl-0 md:w-5/12 ${
                    item.reversed ? 'md:pl-12 md:text-left' : 'md:pr-12 md:text-right'
                  }`}
                >
                  <div
                    onClick={() => handleCardClick(item.id)}
                    className="p-6 sm:p-8 rounded-2xl bg-slate-100/80 dark:bg-neutral-900/80 backdrop-blur-md border border-slate-200/90 dark:border-neutral-800 shadow-xs hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 timeline-card relative cursor-pointer text-left group/card"
                    title={`Click to view full role details for ${item.company}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <img
                        alt={item.logoAlt}
                        className="h-10 max-w-[150px] object-contain rounded-md"
                        src={item.logo}
                      />
                      <span className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 text-xs font-mono font-bold text-[#016a61] dark:text-[#2dd4bf] flex items-center gap-1">
                        View Role
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </span>
                    </div>

                    <h4 className="text-slate-900 dark:text-white font-black text-xl sm:text-2xl uppercase tracking-tight font-display">
                      {item.company}
                    </h4>
                    <p className="text-[#016a61] dark:text-[#2dd4bf] text-sm sm:text-base mt-1 font-semibold">
                      {item.role}
                    </p>
                    <p className="text-slate-600 dark:text-neutral-300 text-xs sm:text-sm mt-3 leading-relaxed">
                      {item.description}
                    </p>

                    {item.badge && (
                      <div className="mt-5 inline-block px-3.5 py-1.5 bg-[#016a61]/10 dark:bg-[#016a61]/25 border border-[#016a61]/25 dark:border-[#2dd4bf]/30 rounded-lg">
                        <p className="text-xs font-bold text-[#016a61] dark:text-[#2dd4bf] uppercase tracking-wider">
                          {item.badge}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Central Dot */}
                <div className="absolute left-6 md:left-1/2 top-8 md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 -translate-x-1/2 flex items-center justify-center">
                  {item.isPrimary ? (
                    <div className="size-6 rounded-full bg-[#016a61] dark:bg-[#2dd4bf] border-4 border-[#f7f9fb] dark:border-black shadow-md ring-4 ring-[#016a61]/20 dark:ring-[#2dd4bf]/20 z-10 transition-transform duration-300 group-hover:scale-125 timeline-dot"></div>
                  ) : (
                    <div className="size-5 rounded-full bg-slate-400 dark:bg-neutral-600 border-4 border-[#f7f9fb] dark:border-black shadow-md z-10 transition-colors duration-300 group-hover:bg-[#016a61] dark:group-hover:bg-[#2dd4bf] group-hover:scale-125 timeline-dot"></div>
                  )}
                </div>

                {/* Date side */}
                <div
                  className={`w-full pl-12 md:pl-0 md:w-5/12 ${
                    item.reversed
                      ? 'md:pr-12 md:text-right order-first md:order-none'
                      : 'md:pl-12 md:text-left'
                  } mb-3 md:mb-0`}
                >
                  {item.isPrimary && idx === 0 ? (
                    <span
                      onClick={() => handleCardClick(item.id)}
                      className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#016a61] dark:text-[#2dd4bf] opacity-80 block transition-opacity duration-300 group-hover:opacity-100 timeline-date leading-tight cursor-pointer"
                    >
                      {item.periodLine1}
                      <br />
                      {item.periodLine2}
                    </span>
                  ) : (
                    <span
                      onClick={() => handleCardClick(item.id)}
                      className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-slate-500 dark:text-neutral-500 opacity-60 block transition-all duration-300 group-hover:text-[#016a61] dark:group-hover:text-[#2dd4bf] group-hover:opacity-100 timeline-date leading-tight cursor-pointer"
                    >
                      {item.periodLine1}
                      <br />
                      {item.periodLine2}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

