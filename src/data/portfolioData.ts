export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  logo: string;
  logoAlt: string;
  logoStyle?: string;
  bullets: string[];
  keyHighlight?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  variant: 'default' | 'accent';
}

export interface ValuePropItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

export interface FocusAreaItem {
  id: string;
  title: string;
  description: string;
  borderColor: string;
}

export interface ExpertiseItem {
  id: string;
  icon: string;
  label: string;
}

export interface EducationItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  duration: string;
  skills: string[];
  certificateId: string;
  category: 'AI & Cloud' | 'Leadership & Management' | 'Communication & Service' | 'Ethics & Strategy' | 'Productivity & Growth';
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "AMRIT KOUR SOHEL",
    title: "Telecom Customer Service & Billing Operations Professional",
    badge: "Open to UAE Opportunities",
    headline: "Operations Professional Focused on Efficiency, Service & Business Performance",
    subheadline:
      "Leveraging over 15 years of experience to optimize operations, enhance customer journeys, and drive process improvements across telecom, logistics, and corporate sectors.",
    email: "amrit.koursohel@gmail.com",
    phone: "+91 82401 32767",
    whatsapp: "+918240132767",
    location: "Kolkata, India",
    nationality: "Indian National",
    visaStatus: "Visit Visa / Available for Sponsorship",
    relocation: "Ready for immediate relocation to Dubai/UAE",
    linkedinUrl: "https://www.linkedin.com/in/amrit-kour-sohel-4u/",
    telegramUrl: "https://t.me/+918240132767",
    heroImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0IWuat3at2AZj9NUwwfF-m8sNEVleuuPrwlVjn7aXm8F6raBABmyt2TfBe0njpx6KI5Cg97OuR8w-DmQ2lz_kFxXXczfCYKe2yCDHGblNHHtPB9TInQ4YlLCRuXMrcFwEG8DXj6cRRgEN-rWRbTLYRtikEt1hjr207dijJsc8BQn1TdaHfoXiLVDz0eDdkLMr4h-PzFqfJaREhrHnKA5P4g5MWzYOLR31DfJR7buOnKCVeYZCkukP1DsNHptBN3PjLw",
    aboutImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6j5M8C6zZtiz5g-kFLXVjabHM_OpW8tDj2ha_piIGrc6pVoWmDH4nGVQgH6fDlmjZRIQjDY0gCtpykeu_CHH-NvrWSKgsYGHdVQ5TWJvrW75zFp7YO0NEN6mVUazeUnBKtcCq6BEXqoX2SCHgXD8lGgvDli7hD0tMjdLzPAUmWicrXooinNHkGKwki7BJLrqXyf-NWA-2exGK2mQYrDBhgjSq2SK3nbLr0yLEy4JtWxgWtbZHnE0zz6FHwyU1JHd-CA",
    footerImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0AkGWektdP1r1ik7KQw_Tt-_jfMiCYIBY4gDtWRIrPHjJid7zJOBRgCCOyMEaxFWMgt3Aml0NxngKGVjxTnGCucc-0J-cLCv1XACXHHQfmyoPjWQHaVLwszJ6213iJ1poEQ2lYHN6WEiHW942Ru1Ap29y8_LNylsubcOe8AUrmao-2_LFoPH8qPTx-JhMGG1rFshFEx8g3hANc7QQVk1gmYmyPhaFCbbUPAVNPmNoF1TWI5KmutzO",
    telegramIcon: "/assets/telegram-logo.svg",
    whatsappIcon: "/assets/whatsapp-logo.svg",
  },

  aboutParagraphs: [
    "Dynamic and results-driven Operations Professional with over 15 years of comprehensive experience spanning Telecom, Corporate Operations, Financial Services, and Hospitality sectors.",
    "Possesses a proven track record of spearheading operational excellence, optimizing complex processes, and driving substantial revenue recovery and cost savings. Adept at navigating intricate Bill to Cash cycles, managing extensive vehicle fleets, and enhancing customer journeys through strategic initiatives.",
    "Demonstrates exceptional leadership capabilities, fostering high-performance teams and cultivating strong client and vendor relationships. Combining deep analytical skills with a strategic mindset, I consistently deliver solutions that boost efficiency, elevate service quality, and align with overarching business objectives. Now seeking to leverage this diverse expertise to contribute to organizational success in the dynamic UAE market.",
  ],

  whatIBring: [
    {
      id: "op-excellence",
      icon: "trending_up",
      title: "Operational Excellence",
      description:
        "Streamlining workflows to maximize efficiency and reduce turnaround times across complex operational ecosystems.",
      iconBg: "bg-slate-200/80 dark:bg-neutral-800",
      iconColor: "text-slate-800 dark:text-neutral-200",
    },
    {
      id: "cx",
      icon: "support_agent",
      title: "Customer Experience",
      description:
        "Designing and implementing service strategies that elevate customer satisfaction and foster long-term loyalty.",
      iconBg: "bg-slate-200/80 dark:bg-neutral-800",
      iconColor: "text-slate-800 dark:text-neutral-200",
    },
    {
      id: "telecom-billing",
      icon: "receipt_long",
      title: "Telecom & Billing",
      description:
        "Deep expertise in Bill to Cash processes, credit control, and dispute resolution within the telecom sector.",
      iconBg: "bg-slate-200/80 dark:bg-neutral-800",
      iconColor: "text-slate-800 dark:text-neutral-200",
    },
    {
      id: "logistics-fleet",
      icon: "local_shipping",
      title: "Logistics & Fleet",
      description:
        "Comprehensive management of logistics operations, fleet tracking, and supply chain optimization.",
      iconBg: "bg-slate-200/80 dark:bg-neutral-800",
      iconColor: "text-slate-800 dark:text-neutral-200",
    },
    {
      id: "salon-operations",
      icon: "store",
      title: "Salon Operations",
      description:
        "Expertise in managing high-volume premium salon operations, client relations, and business partnerships to drive revenue growth and service excellence.",
      iconBg: "bg-slate-200/80 dark:bg-neutral-800",
      iconColor: "text-slate-800 dark:text-neutral-200",
    },
  ],

  focusAreas: [
    {
      id: "focus-1",
      title: "Billing Optimization",
      description:
        "Enhancing accuracy and speed of billing cycles, reducing disputes, and accelerating revenue realization.",
      borderColor: "border-l-slate-700 dark:border-l-neutral-400",
    },
    {
      id: "focus-2",
      title: "Customer Journey",
      description:
        "Mapping and refining touchpoints to ensure seamless, positive interactions from onboarding to post-sales support.",
      borderColor: "border-l-slate-500 dark:border-l-neutral-500",
    },
    {
      id: "focus-3",
      title: "Cross-functional Coordination",
      description:
        "Facilitating smooth communication and execution across account managers, operations teams, vendors, and senior leadership.",
      borderColor: "border-l-slate-700 dark:border-l-neutral-400",
    },
    {
      id: "focus-4",
      title: "Executive Support",
      description:
        "Delivering practical leadership through ownership of client issues, front-office operations, and confidential executive coordination.",
      borderColor: "border-l-slate-500 dark:border-l-neutral-500",
    },
  ],

  coreExpertise: [
    { id: "exp-telecom", icon: "cell_tower", label: "Telecom" },
    { id: "exp-billing", icon: "request_quote", label: "Billing" },
    { id: "exp-fleet", icon: "directions_car", label: "Fleet Management" },
    { id: "exp-logistics", icon: "inventory_2", label: "Logistics" },
    { id: "exp-banking", icon: "account_balance", label: "Banking" },
  ],

  experiences: [
    {
      id: "bt",
      role: "Associate – Bill to Cash (GCB Process)",
      company: "British Telecom E-Serve Pvt. Ltd",
      location: "Kolkata, India",
      period: "04/2022 — 09/2026",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBXXxPuUjB6-mlxQrScJHEcoa_93rEn_l_fr2PARC3NKvjO3GxBAHtnMS1YAXnE42y7DpLDPI52WoKxHXa3APBhkjTesZf1756yeJbtO7UtXrMURnobIvYzrjdg-r1rvsJIZB5me62tTHpErYLikBcSIbigWXSmfJZyrNBf134msbN06ZaZGfoUNRsam6-ZROGhsNvl1U4J7nGJMOXU958jbFgQ0Od1HoDbi14Wz31BHavd3aX70EHhQxmOSMK8MKS4w",
      logoAlt: "BT Logo",
      keyHighlight: "Recovered GBP 4.63M corporate debt & 38% faster turnaround time",
      bullets: [
        "Recovered **GBP 4.63 million** (GBP 4,634,857) in outstanding corporate debt in the last quarter through structured follow-up and dispute resolution",
        "Serve a portfolio of major B2B corporate, public-sector and global accounts — including **HSBC**, **Abbott International**, **Coventry University**, **Pinsent Masons LLP**, **QA Ltd** and **The Global Draw**",
        "Closed **645** cases last quarter at an average cycle time of **8** days — **38%** faster than the **13**-day benchmark",
        "Manage **75+** weekly corporate post-billing queries via email and phone for UK-based customers, maintaining a **96%** resolution rate",
        "Raise credit adjustments for invalid charges across phone lines, broadband, ISDN, SIP trunking and cloud voice accounts, processing **GBP 31,000+** in monthly adjustments",
        "Sustained a **90%** quality score on audited cases, exceeding process compliance targets",
        "Achieved a **9.5/10** ASAT (agent satisfaction) rating, reflecting consistently positive customer interactions",
        "Partnered with Account Managers on escalation calls, cutting average resolution time by **25%**",
        "Completed **Advanced Excel** workshops (pivot tables, lookups, reporting dashboards), applying them to billing MIS and debt-tracking reports",
      ],
    },
    {
      id: "nlb",
      role: "Customer Service Executive (BNSF Logistics)",
      company: "NLB Services (BNSF Logistics)",
      location: "Kolkata, India",
      period: "11/2020 — 03/2022",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAY11HqYX3inWnwdbpcRUXo_OQm3HO4vth00X1xdkssOt44GgaXO9op_CvtYXujLY6P2IgvQGWbnonVdyoTvdnG8VEo38N-hhMlIyIiLLoGriowuOAla85MRmlOu9rfAAjTXGWJ3tnjO5G_dpm9l7mG7AtnrgYsIOf0M1QapJtjqxaADjJI3150bhRbUfQhZ1Uko2Pf4P-GZDApgC2qPiES1KM4mgQVt3q205jggpfh3GeJD-KQ5U7IlGnC1T-Ff978Rg",
      logoAlt: "NLB Services Logo",
      keyHighlight: "100+ daily driver/dispatcher dispatches & 95% on-time update rate",
      bullets: [
        "Handled **100+** daily inbound and outbound calls to US dispatchers and truck drivers, ensuring accurate updates on arrival and departure times",
        "Communicated with brokers and dispatchers via email to resolve delivery issues, achieving a **95%** on-time update rate",
        "Sent timely notifications about shipment delays or changes, maintaining **99%** reporting accuracy",
        "Maintained detailed records for all loads tracked, supporting logistics optimization",
      ],
    },
    {
      id: "getgorgeous",
      role: "Salon Operations Manager",
      company: "Get Gorgeous Salon",
      location: "Kolkata, India",
      period: "2017 — 2019",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbTnBMfa-T-9KLGdikUaC5lePiVOuZAM8rivJ5zXqJLZkIw6J_-v4n3ihqnYz2Qtm4oSPFlGlBr4a51qN0nZ6OMjFS6i1KmZuu0hvdjRs-FJr4jkjokgbCbsqfdx8zliHeZS6K2jho1BmTKK8JoE35SJPc_sgmFpjs9fpIA8qwVablIou42QF2h2Ylc_tHhvDHvbwdsGurF8saTv4YYCt6e4afqFMjz9jXdsfnHmYwuZ0aqlB-ESE4l88a9UefTy-ahg",
      logoAlt: "Get Gorgeous Salon Logo",
      bullets: [
        "Managed reservations and appointment scheduling for **50+** daily clients; processed bookings, changes, and cancellations",
        "Drove upselling of premium services and packages; increased bookings by **40%** and improved referrals by **35%**",
        "Secured **15+** business partnerships to expand client base and brand awareness",
        "Handled billing, payment processing, and client records; resolved customer complaints with professionalism",
      ],
    },
    {
      id: "cerise",
      role: "Front Desk & Reservation Operations",
      company: "Cerise Salon",
      location: "Kolkata, India",
      period: "2014 — 2017",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVrWOtiofhUF102ItBv-woAjoDM6Xi9BsYAL4wAaNWlOeEQM53djvU77lAe68wcldyLxTQCo1au4UCE6JVNKAaHJlR0PaAm4IiZ1f34fL4fOLfnLCmQkOrRartP12oOhwSG56uRiSQn5TRmgktg7vJeYgJvykK30Ejh_k5hy8EBTZY4S1MJD_ASa5CCPNYhnXv1QIV4SSHEdO5xwJnlwnDt20KemoS4QY368M0AfhK8ATSozufpGzSNfB4eclC_283hA",
      logoAlt: "Cerise Salon",
      bullets: [
        "Managed front-desk and reservation operations for **50+** daily clients in a premium service environment",
        "Upsold services and products; maintained **98%** stock availability and handled vendor coordination",
        "Delivered premium customer experience; handled escalations and ensured brand image consistency",
        "Managed cash flow, billing, and payment collection; maintained accurate client records",
      ],
    },
    {
      id: "anjohn",
      role: "Front Office Executive",
      company: "A.N. John",
      location: "Kolkata, India",
      period: "2013 — 2014",
      logo: "/assets/anjohn-logo.png",
      logoAlt: "A.N. John",
      bullets: [
        "Processed **200+** monthly reservations with **99%** accuracy; managed booking changes and cancellations",
        "Served as first point of contact; handled guest calls, inquiries, and follow-up communications",
        "Processed payments and maintained daily financial records; performed general office duties (filing, data entry)",
      ],
    },
    {
      id: "ural",
      role: "Executive Assistant",
      company: "Ural India",
      location: "Kolkata, India",
      period: "12/2010 — 11/2012",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDClJAffDdIjP2gxSuGNmm2NcjEHfBH5Tu3vk6rgWDGisbXmm307cGAXBGtiYr2FPzdaQGNNSit3OBeX07qfhx-Wd4H0LxRB4ysuJYPqfqrhaSoPLqxVobl_q4bdzs1xCgOHJu6Z6ZABDGU3fva2gsWbt_Nn_wi4RJcNWvpVcmXJemoGUgcpq0tGPeq9hStdlCxO5b8U-s7_sI3hJ4ff9VI5JopHAlfoLTL98OAJxfSS8qb8tehLqCx03pXzhyd-j3yvQ",
      logoAlt: "Ural India",
      logoStyle: "border: 2px solid rgb(62, 39, 35)",
      bullets: [
        "Managed the Director's schedule, coordinated **25+** weekly meetings, and organized business travel itineraries",
        "Drafted purchase orders and quotations, processed **100+** orders quarterly",
        "Conducted preliminary interviews for recruitment, supporting successful hiring decisions",
        "Managed confidential correspondence and files, ensuring data security",
      ],
    },
    {
      id: "hsbc",
      role: "Customer Service Executive",
      company: "HSBC",
      location: "Kolkata, India",
      period: "11/2008 — 05/2010",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAV1sdoqzIhRmczZ9WjfNl6zU2gIuiGRBbzI6OlKXXiRlGbp1eBcamW-mh5fk3nqHe0cQlJLE1adfu7gvOs7CtzkAjPxcUZfz5jMQp7OSk32LbejwVbIBlIkrNe4bj-S6WnDj3HJSy1XHAzv0QFqUTuVb7YXIoWNritTNrD1ui0rgBkx2vjMIcOFvho1rMQjO4C43PIXzsVBBdXTxoEcT9W4Uc11MBTbh9xutjaSmpP7jsVfnkRjb0xNohIHvb3oY0MYA",
      logoAlt: "HSBC",
      bullets: [
        "Resolved **80+** internet banking queries daily via email, maintaining a **94%** customer satisfaction score",
        "Liaised with multiple departments to resolve customer complaints, conducting root cause analysis to reduce recurring issues by **25%**",
        "Prepared and analyzed MIS reports to support service level improvements",
        "Contributed to a **15%** improvement in departmental service metrics",
      ],
    },
    {
      id: "parkhotel",
      role: "Guest Executive",
      company: "The Park Hotel",
      location: "Kolkata, India",
      period: "01/2007 — 01/2008",
      logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEg8PaZbkYZJeT3HZvbgI0HRB6Tb_V1zmwqCUXC94JbXc8d5-Z_NNMRjKzVkdGLMfUEYiTa0Wc_AozdsEqfxSm_CAoliU3p4lTDEkCUgEicBW-jrq2Pa5NiB-jGmPscQWJupGq6_DX2ZYmECSRgyQoRQGzQpovDdHK5lW_oAohf6OPQUrHQJWdhMqgw5jjme6fThd5NFSFxM6Kheoi0w00tYbK7FA2PEx7puPtNCZBhLW2Q96fcmgsrS6p57Ui9w7BrQ",
      logoAlt: "The Park Hotel",
      bullets: [
        "Promoted from PATP Consultant to Guest Executive within **11** months for outstanding performance",
        "Outbound sales of hotel membership cards, exceeding monthly sales targets by **20%**",
        "Managed signature and gold-level guests, handling VIP reservations and personalized services",
        "Coordinated room and table bookings, and supported departmental administration",
      ],
    },
  ],

  skillsCategories: [
    {
      title: "Operations & Management",
      variant: "default" as const,
      skills: [
        "Customer Support",
        "Billing Support",
        "Invoice Processing",
        "Accounts Receivable",
        "Debt Recovery",
        "Credit & Adjustments",
        "Bill to Cash (B2C)",
        "Escalation Handling",
        "Client Relations",
        "Front Desk Operations",
        "Administrative Operations",
        "Team Leadership",
        "People Management",
        "Coaching & Mentoring",
        "Appointment Scheduling",
        "Calendar Management",
        "Meeting Coordination",
        "Travel Coordination",
        "Documentation Control",
        "MIS Reporting",
        "SLA Compliance",
        "Quality Assurance",
        "Vendor Coordination",
        "Conflict Resolution",
      ],
    },
    {
      title: "Modern Tools & AI",
      variant: "accent" as const,
      skills: [
        "ChatGPT",
        "Claude",
        "Perplexity",
        "Microsoft Copilot",
        "Gamma AI",
        "Prompt Engineering",
        "ServiceNow",
        "Salesforce",
        "Advanced Excel",
        "Excel Pivot Tables",
        "MS Office",
        "Power BI",
      ],
    },
  ],

  whyWorkWithMe: [
    {
      id: "detail",
      icon: "search",
      title: "Detail-Oriented",
      description:
        "Meticulous attention to detail ensuring accuracy in billing, reporting, and operational execution.",
    },
    {
      id: "process",
      icon: "account_tree",
      title: "Process-Driven",
      description:
        "Methodical approach to problem-solving, building scalable processes that withstand organizational growth.",
    },
    {
      id: "collaborative",
      icon: "groups",
      title: "Collaborative Leader",
      description:
        "Empowering cross-functional teams to achieve collective goals through clear communication and shared vision.",
    },
  ],

  educationAndCerts: [
    {
      id: "edu-1",
      icon: "school",
      title: "MBA in Human Resource Management",
      subtitle: "Sikkim Manipal University — Kolkata, India • 2014",
    },
    {
      id: "edu-2",
      icon: "school",
      title: "Bachelor of Arts (BA)",
      subtitle: "Calcutta University — Kolkata, India • 2008",
    },
    {
      id: "cert-1",
      icon: "workspace_premium",
      title: "Professional Certifications",
      subtitle:
        "21 Verified LinkedIn Learning Certifications (AI, Cloud, Leadership, Operations & Communication)",
    },
    {
      id: "lang-1",
      icon: "translate",
      title: "Languages",
      subtitle:
        "English (Professional), Hindi (Professional), Punjabi (Native), Bengali (Conversational)",
    },
  ],

  certifications: [
    {
      id: "cert-ai",
      title: "Introduction to Artificial Intelligence",
      issuer: "LinkedIn Learning",
      date: "Apr 30, 2025",
      duration: "2h 26m",
      skills: ["Artificial Intelligence (AI)"],
      certificateId: "052c956ebc637cefe2372f0c4e5bb8f8ad2b1c7216fa9b7f98ba22f796283640",
      category: "AI & Cloud",
    },
    {
      id: "cert-cloud",
      title: "Cloud for Business: Developing a Cloud Center of Excellence",
      issuer: "LinkedIn Learning",
      date: "Oct 14, 2025",
      duration: "48m",
      skills: ["Cloud Administration"],
      certificateId: "7b55dd24bc26b48f03822fcdef33375bdb7c8d0621b79c4a0ac0cb314cabf196",
      category: "AI & Cloud",
    },
    {
      id: "cert-accountability",
      title: "Holding Your Team Accountable",
      issuer: "LinkedIn Learning",
      date: "Apr 30, 2025",
      duration: "1h 6m",
      skills: ["Accountability", "People Management"],
      certificateId: "65a4eee9b865f125fccdde3c2680321ac45a5e8323cb8f817177a3f39f96d03c",
      category: "Leadership & Management",
    },
    {
      id: "cert-leadership-women",
      title: "Leadership Strategies for Women",
      issuer: "LinkedIn Learning",
      date: "Apr 30, 2025",
      duration: "1h 6m",
      skills: ["Women's Leadership"],
      certificateId: "703cb38e6948b80f679305b017f2556722fd2984a86e8aa06459682515e2b61a",
      category: "Leadership & Management",
    },
    {
      id: "cert-employee-relations",
      title: "Introduction to Employee Relations",
      issuer: "LinkedIn Learning",
      date: "Mar 31, 2025",
      duration: "51m",
      skills: ["Employee Relations"],
      certificateId: "6a2805dc4cd4ac9c8cf5a2c44322b6898b9c5c5375bf9433e1b7104ea1021d8d",
      category: "Leadership & Management",
    },
    {
      id: "cert-listening-customers",
      title: "Listening to Customers (2017)",
      issuer: "LinkedIn Learning",
      date: "Jan 07, 2025",
      duration: "16m",
      skills: ["Customer Service", "Active Listening"],
      certificateId: "25ea92322b1ee712aa1b9e4e54e4814d28173f052a5cd5a5d9cf20178b7d4b5a",
      category: "Communication & Service",
    },
    {
      id: "cert-writing-emails",
      title: "Writing Emails People Want to Read",
      issuer: "LinkedIn Learning",
      date: "Jan 07, 2025",
      duration: "57m",
      skills: ["Email", "Written Communication"],
      certificateId: "ffb93996ef7bfd0cee0b36382ab0eab252c5e2cb6b083389e9122279952ca908",
      category: "Communication & Service",
    },
    {
      id: "cert-emotional-intelligence",
      title: "Communicating with Emotional Intelligence",
      issuer: "LinkedIn Learning",
      date: "Jan 17, 2025",
      duration: "43m",
      skills: ["Emotional Intelligence", "Interpersonal Communication"],
      certificateId: "9769ecb59627d6a46641385d0080032ccadf5a52ad6cd714815ab2d9e607f6e5",
      category: "Communication & Service",
    },
    {
      id: "cert-comm-foundations",
      title: "Communication Foundations",
      issuer: "LinkedIn Learning",
      date: "Jan 24, 2025",
      duration: "1h 10m",
      skills: ["Interpersonal Communication", "Professional Communication"],
      certificateId: "7f95199b04bc71185925f80828c6b1a48ede0a4b265dd9c1a3088fd3cd3bbfbb",
      category: "Communication & Service",
    },
    {
      id: "cert-comm-confidence",
      title: "Communicating with Confidence (2015)",
      issuer: "LinkedIn Learning",
      date: "Feb 10, 2025",
      duration: "1h 16m",
      skills: ["Public Speaking"],
      certificateId: "bde7a322dceeed4881e796fee31f54dcb763b5cde05dcbfb8a0821a06bf1e133",
      category: "Communication & Service",
    },
    {
      id: "cert-3-minute-rule",
      title: "The 3-Minute Rule: Say Less to Get More",
      issuer: "LinkedIn Learning",
      date: "Mar 24, 2025",
      duration: "52m",
      skills: ["Story Pitching", "Presentation Skills"],
      certificateId: "387d798f28fb37bf359fbe39c9db7b6af2a413b46103fcef75cccaf8a131a90e",
      category: "Communication & Service",
    },
    {
      id: "cert-inclusive-linkedin",
      title: "Inclusive and Professional Conversations on LinkedIn: Tips for Success",
      issuer: "LinkedIn Learning",
      date: "Feb 25, 2025",
      duration: "28m",
      skills: ["Professional Communication", "Diversity & Inclusion"],
      certificateId: "fcb96ed91e3745acbaddd999a05799575ace3dedae78f29843a38b343a3fa716",
      category: "Communication & Service",
    },
    {
      id: "cert-starting-conversation",
      title: "Starting a Memorable Conversation",
      issuer: "LinkedIn Learning",
      date: "Dec 01, 2024",
      duration: "29m",
      skills: ["Oral Communication"],
      certificateId: "caec893e70fb627eb125a7a59cee2b23d43a364d16c08d1f0494d52ed335c4ec",
      category: "Communication & Service",
    },
    {
      id: "cert-critical-thinking",
      title: "Critical Thinking for More Effective Communication",
      issuer: "LinkedIn Learning",
      date: "Feb 25, 2025",
      duration: "46m",
      skills: ["Critical Thinking"],
      certificateId: "a527605496e92d9db7c3b801facace904c9122817be3c6579d115b1be6f71a01",
      category: "Ethics & Strategy",
    },
    {
      id: "cert-decision-making",
      title: "Improving Your Judgment for Better Decision-Making",
      issuer: "LinkedIn Learning",
      date: "Feb 25, 2025",
      duration: "30m",
      skills: ["Decision-Making"],
      certificateId: "3e58118205949875cf78383a691dec12a97a839a08d1d5546fb7f02fa86f22d7",
      category: "Ethics & Strategy",
    },
    {
      id: "cert-values-ethics",
      title: "Values and Ethics: Case Studies in Action",
      issuer: "LinkedIn Learning",
      date: "Mar 24, 2025",
      duration: "42m",
      skills: ["Organizational Ethics"],
      certificateId: "8ce30ce255d586acaf33da0a2e73ec9e09d937455caebf1b8b9eea3ac67784f8",
      category: "Ethics & Strategy",
    },
    {
      id: "cert-upskill",
      title: "Strategies to Learn and Upskill More Effectively",
      issuer: "LinkedIn Learning",
      date: "Mar 31, 2025",
      duration: "1h",
      skills: ["Learning Strategies"],
      certificateId: "c99547893c3144ec1d53264eed97b891940ebf9de72c81ccb4cb1c1b97b330ef",
      category: "Productivity & Growth",
    },
    {
      id: "cert-coping",
      title: "Coping Strategies in Difficult Times",
      issuer: "LinkedIn Learning",
      date: "Apr 10, 2025",
      duration: "34m",
      skills: ["Coping"],
      certificateId: "fd4f714427df004eaf5f885a348f0f0ff8e5a1381e4eb4c95994d65942738beb",
      category: "Productivity & Growth",
    },
    {
      id: "cert-authentic-relationships",
      title: "Using Authenticity to Build Productive Relationships",
      issuer: "LinkedIn Learning",
      date: "May 01, 2025",
      duration: "34m",
      skills: ["Relationship Building"],
      certificateId: "286e788ef904e677051648ffba7bb690de4c51d1fa75bc69ab992d5220692656",
      category: "Productivity & Growth",
    },
    {
      id: "cert-authentic-self",
      title: "Developing Your Authentic Self to Ignite Change",
      issuer: "LinkedIn Learning",
      date: "May 01, 2025",
      duration: "55m",
      skills: ["Personal Branding", "Gender-Inclusive Career Support", "Personal Development"],
      certificateId: "ba9e3a658eb8fc8e782b4bffcd0606f86fdd1abba9f1a98565b8c19be55eea0d",
      category: "Productivity & Growth",
    },
    {
      id: "cert-unique-habits",
      title: "Unique Habits: Be Successful Your Own Way",
      issuer: "LinkedIn Learning",
      date: "May 01, 2025",
      duration: "40m",
      skills: ["Productivity Improvement"],
      certificateId: "b4aedba161daa600bac438160b6bde60c8830ff847d70e7cdcc5f4054013915e",
      category: "Productivity & Growth",
    },
  ] as CertificationItem[],
};
