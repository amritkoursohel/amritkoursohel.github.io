export interface CompanyStat {
  value: string;
  label: string;
  description: string;
  icon: string;
  badgeType?: 'secondary' | 'tertiary' | 'primary';
}

export interface CompanyResponsibility {
  title: string;
  description: string;
  bullets: string[];
  icon: string;
}

export interface CompanyDetail {
  id: string;
  companyName: string;
  highlightWord?: string;
  role: string;
  period: string;
  location: string;
  jobType: string;
  summary: string;
  skills: string[];
  logo: string;
  logoAlt: string;
  logoBg?: string;
  stats: CompanyStat[];
  responsibilities: CompanyResponsibility[];
  previousRoleId?: string;
  nextRoleId?: string;
}

export const COMPANY_DETAILS: Record<string, CompanyDetail> = {
  bt: {
    id: 'bt',
    companyName: 'British',
    highlightWord: 'Telecom',
    role: 'Associate – Bill to Cash (GCB Process)',
    period: '2022 — Present',
    location: 'Kolkata, India / UK Corporate',
    jobType: 'Full-Time',
    summary:
      'Spearheading end-to-end B2B portfolio debt recovery and financial operations across tier-1 UK and multinational corporate accounts including HSBC, Abbott, and Pinsent Masons. Delivering rigorous cash flow reconciliation, complex billing adjustments, dispute resolution, and cross-functional leadership partnering with senior account directors to safeguard client goodwill.',
    skills: [
      'Debt Recovery',
      'Dispute Resolution',
      'B2B Enterprise Accounts',
      'Credit Adjustments',
      'Advanced Excel',
      'ServiceNow',
      'SLA Compliance',
    ],
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASrRyewH5lOyBZcA0gb39_uubwqYs-NWAPS95vmuZsjNbWuy_nCdKomg3swCft9Xmzif8usN4ell2Q3hXk51as5MAnAY9BFY-LI8JrYsVwnizzm-vThWX8M58qnBMVchrv_8rQmiwPBekuQLmzJHw7Z_EArJpvbRu7hKVuX3mKnXhSSCHKotO8-LSc3ymI3A2bYjkXNJlU-5p1qD9fbytMa4LOIFVeC4eLq97RpO3T9fRPpguN8t4Tpxyh9zPxhJhe',
    logoAlt: 'British Telecom Logo',
    stats: [
      {
        value: '+£4.63M',
        label: 'Debt Recovered',
        description: 'GBP 4,634,857 collected across high-priority accounts via structured mediation and ledger audits.',
        icon: 'payments',
        badgeType: 'secondary',
      },
      {
        value: '645',
        label: 'Cases Closed',
        description: 'Closed cases with an 8-day turnaround, beating the 13-day industry standard by 38%.',
        icon: 'task_alt',
        badgeType: 'tertiary',
      },
      {
        value: '96%',
        label: 'Resolution Rate',
        description: 'First-contact resolution rate on 75+ weekly corporate post-billing and invoicing disputes.',
        icon: 'verified',
        badgeType: 'primary',
      },
      {
        value: '9.5/10',
        label: 'ASAT Rating',
        description: 'Top-tier agent satisfaction and client relationship score alongside a 90% audited quality index.',
        icon: 'sentiment_very_satisfied',
        badgeType: 'secondary',
      },
    ],
    responsibilities: [
      {
        title: 'Corporate Debt Recovery & High-Value Portfolio',
        description:
          'Spearheaded the collections and cash reconciliation workflow for high-profile multinational enterprise accounts such as HSBC, Abbott, Coventry University, and Pinsent Masons LLP. Executed systematic root-cause analyses on aged ledgers to eliminate outstanding debts.',
        bullets: [
          'Recovered £4.63 million in overdue corporate debt within a single quarter through persistent dispute mediation.',
          'Conducted multi-tiered ledger reconciliations identifying billing leakage and unapplied credits.',
          'Maintained rigorous portfolio liquidity tracking while preserving tier-1 enterprise partnerships.',
        ],
        icon: 'payments',
      },
      {
        title: 'Query Resolution & Complex SLA Management',
        description:
          'Administered high-volume corporate post-billing investigations through ServiceNow, voice channels, and direct email communications. Maintained rigorous SLA controls ensuring dispute resolution well ahead of targeted turnaround cycles.',
        bullets: [
          'Processed 75+ weekly corporate telecom inquiries with a continuous 96% first-contact resolution SLA.',
          'Closed 645 complex billing cases in an average turnaround of 8 days against the 13-day benchmark.',
          'Maintained an audited internal QA score of 90%+ across all logged customer tickets.',
        ],
        icon: 'contact_phone',
      },
      {
        title: 'Credit Adjustments & Financial Operations',
        description:
          'Governed full-lifecycle credit and rebill adjustments for inaccurate or contested charges across enterprise telecom services, including SIP trunking, PSTN/ISDN lines, cloud voice architectures, and high-capacity broadband connections.',
        bullets: [
          'Audited and authorized over £31,000+ per month in valid billing corrections and dispute reconciliations.',
          'Eliminated recurring systemic billing errors by escalating tariff misconfigurations to product engineering.',
          'Ensured 100% compliance with corporate billing audit standards and UK financial regulations.',
        ],
        icon: 'receipt_long',
      },
      {
        title: 'Executive Escalations & Account Management',
        description:
          'Served as the critical escalation contact alongside UK Client Relationship Managers on volatile commercial disputes. Orchestrated executive tripartite calls with client finance directors to achieve swift settlement agreements.',
        bullets: [
          'Cut average dispute resolution duration by 25% through direct strategic collaboration with Account Managers.',
          'Fostered client trust, resulting in a consistent 9.5/10 ASAT (Agent Satisfaction) performance rating.',
          'Mitigated client churn risks by creating bespoke, structured repayment frameworks.',
        ],
        icon: 'handshake',
      },
      {
        title: 'Reporting, Quality Assurance & MIS Workflows',
        description:
          'Built and automated analytical dashboards with Advanced Excel (Pivot Tables, XLOOKUP, dynamic summaries) providing senior stakeholders and leadership with continuous real-time clarity over collection trajectories and operational KPIs.',
        bullets: [
          'Designed operational MIS dashboards tracking portfolio status, open cases, and aging buckets.',
          'Conducted peer quality reviews, upholding a consistent 90% quality assurance threshold.',
          'Synthesized trend reports highlighting top dispute drivers to accelerate upstream invoicing accuracy.',
        ],
        icon: 'analytics',
      },
    ],
    previousRoleId: undefined,
    nextRoleId: 'nlb',
  },

  nlb: {
    id: 'nlb',
    companyName: 'NLB',
    highlightWord: 'SERVICES',
    role: 'Customer Service Executive (BNSF Logistics)',
    period: '2020 — 2022',
    location: 'Kolkata, India / US Desk',
    jobType: 'Full-Time',
    summary:
      'Managed high-volume freight operations, real-time dispatch logistics, and multi-party carrier coordination supporting the dedicated BNSF Logistics account. Bridged responsive 24/7 communications across North American railheads, freight brokers, independent owner-operators, and distribution hubs while sustaining audit-ready tracking precision.',
    skills: [
      'Intermodal Logistics',
      'BNSF Network',
      'Dispatch Operations',
      'Exception Management',
      'BOL & POD Reconciliation',
      'EDI Tracking',
    ],
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1aNr6HmmeE9GEL2pfj734ydj_MoBHiMVJ3zkWqIjaJK-kOx96Qf16HtCVxLdGJ75UKmLhlJVW4AccO64oTCtlg3bqLT78iiWNBibPBCoEdF1SYBLwrMi6qoZAZYb6r1MQ-sit-1Uj6K_tsUBEWFj25JPkqohEA74SG90541pDB9GB0-N4Guu2lwEWV9berGA6U7299KgYUKQqn_bXMQNC_gagKeyrJIzr9er7jdSKY53bTfL3H_4rzG-HQWue9tR4',
    logoAlt: 'NLB Services Logo',
    stats: [
      {
        value: '100+',
        label: 'Daily Dispatch Calls',
        description: 'Coordinated daily inbound/outbound communication with US carriers, dispatchers, and truck drivers.',
        icon: 'headset_mic',
        badgeType: 'secondary',
      },
      {
        value: '95%',
        label: 'On-Time Updates',
        description: 'Strict adherence to client SLA benchmarks across active rail and intermodal transport schedules.',
        icon: 'schedule',
        badgeType: 'tertiary',
      },
      {
        value: '99%',
        label: 'Reporting Accuracy',
        description: 'Precision across transit milestones, electronic check-calls, and audit-ready shipment logs.',
        icon: 'fact_check',
        badgeType: 'primary',
      },
      {
        value: '100+',
        label: 'Freight Corridors',
        description: 'Cross-country intermodal and highway routes monitored seamlessly across North America.',
        icon: 'alt_route',
        badgeType: 'secondary',
      },
    ],
    responsibilities: [
      {
        title: 'High-Volume Dispatch Operations & Carrier Coordination',
        description:
          'Managed 100+ daily inbound and outbound calls engaging US dispatchers, carriers, and drayage drivers for the BNSF Logistics freight desk. Maintained continuous operational alignment across active shipment schedules.',
        bullets: [
          'Maintained dynamic updates on carrier arrival, departure, rail interchanges, and drop-and-hook schedules.',
          'Acted as the primary operational contact between freight brokers, corporate logisticians, and on-the-road drivers.',
          'Facilitated continuous driver check-ins to verify lane compliance and accurate estimated times of arrival.',
        ],
        icon: 'local_shipping',
      },
      {
        title: 'Rapid Exception Handling & Logistics Crisis Resolution',
        description:
          'Proactively identified and mitigated acute transit disruptions including equipment mechanical failures, route detours, severe weather delays, chassis shortages, and loading dock detention.',
        bullets: [
          'Intervened swiftly during in-transit carrier breakdowns by routing rescue equipment and relief power units.',
          'Communicated live status updates with terminal dispatch leads to maintain a 95% on-time status update SLA.',
          'Negotiated immediate corrective action plans to protect time-critical intermodal freight deadlines.',
        ],
        icon: 'support_agent',
      },
      {
        title: 'Milestone Tracking & Stakeholder Reporting',
        description:
          'Conducted methodical electronic check-calls and system tracking to log precise milestone progressions across North American transport networks, preserving transparent operational visibility.',
        bullets: [
          'Sustained a 99% data reporting accuracy standard across internal TMS platforms and partner portal updates.',
          'Delivered automated ETA recalculations and proactive bottleneck notifications directly to corporate brokers.',
          'Standardized milestone reporting logs to streamline weekly transit variance audits and SLA reviews.',
        ],
        icon: 'query_stats',
      },
      {
        title: 'Documentation Audit, BOL & Demurrage Control',
        description:
          'Administered critical freight documentation processing, verifying compliance across Bills of Lading (BOL), Proof of Delivery (POD) confirmations, accessorial charges, and driver rate sheets.',
        bullets: [
          'Audited POD documentation against dispatch manifests to ensure discrepancy-free billing and payment authorization.',
          'Monitored rail container dwell times to actively prevent expensive yard demurrage and driver detention fees.',
          'Maintained structured digital document repositories ensuring 100% audit readiness for institutional compliance.',
        ],
        icon: 'description',
      },
      {
        title: 'Intermodal & Drayage Operations Coordination',
        description:
          'Synchronized handoffs between long-haul BNSF rail operations, regional drayage contractors, and recipient warehousing terminals, securing smooth multi-modal freight transitions.',
        bullets: [
          'Scheduled ramp pickups and drop-offs to prevent intermodal yard congestion and late chassis return penalties.',
          'Coordinated cross-dock schedules with distribution centers to maximize bay efficiency and turn turnaround speed.',
          'Fostered resilient operational partnerships with key carrier fleets to secure high-priority capacity during peak seasons.',
        ],
        icon: 'train',
      },
    ],
    previousRoleId: 'bt',
    nextRoleId: 'getgorgeous',
  },

  getgorgeous: {
    id: 'getgorgeous',
    companyName: 'Get Gorgeous',
    highlightWord: 'Salon',
    role: 'Client Relations & Operations Manager',
    period: '2017 — 2019',
    location: 'Kolkata, India',
    jobType: 'Full-Time',
    summary:
      'Directed comprehensive salon operations, client relationship initiatives, and business growth strategies for a premier beauty destination. Orchestrated high-volume appointment management, multi-stylist calendars, VIP customer experiences, and high-impact commercial partnerships that expanded market footprint and recurring clientele.',
    skills: [
      'Appointment Management Systems',
      'POS & Cash Flow Reconciliation',
      'Client Experience Management',
      'B2B Partnership Strategy',
      'Customer Retention & Upselling',
      'Service Recovery',
      'Team Leadership',
    ],
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGTup11Lyms-JsYb4gxOSegBEpIbXywEvgyavRnXfsvxWux0QpDk6qaTwzD11w4jnGsbMcF1NVhR1ZN7qxMgJgLHmy1g-ta4F0ojdlTcMjSgddzXiIQbqvfeAB1Arrvrd9PrRHHDsHDDlGutZJsmbRGX6VzUe71eF26M3fvGeN5aHGyz4_3YtVLI8NOMJZMTvZ_Soni1woOHRrOx8LSkv-CJ3U-ItXX1oHpmIQ7Q_aXAqrIUvJK_Z38GYCJ5kVmpqJ',
    logoAlt: 'Get Gorgeous Salon Logo',
    stats: [
      {
        value: '+40%',
        label: 'Booking Growth',
        description: 'Increase in recurring client bookings through upselling and optimized calendar scheduling.',
        icon: 'trending_up',
        badgeType: 'secondary',
      },
      {
        value: '+35%',
        label: 'Referral Rate',
        description: 'Lift in word-of-mouth client acquisition generated by concierge customer care initiatives.',
        icon: 'favorite',
        badgeType: 'tertiary',
      },
      {
        value: '50+',
        label: 'Daily Volume',
        description: 'Daily guests handled via orchestrated front-of-house intake, scheduling, and service delivery.',
        icon: 'group',
        badgeType: 'primary',
      },
      {
        value: '15+',
        label: 'Strategic Alliances',
        description: 'Corporate, bridal, and vendor partnerships negotiated to broaden brand exposure in Kolkata.',
        icon: 'handshake',
        badgeType: 'secondary',
      },
    ],
    responsibilities: [
      {
        title: 'Appointment Scheduling & High-Volume Reservations',
        description:
          'Managed front-of-house booking software and orchestrated complex multi-stylist schedules for 50+ daily high-profile clients. Systematically reduced booking conflicts, eliminated double-bookings, and streamlined waitlist and cancellation management to optimize chair occupancy rates.',
        bullets: [
          'Eliminated idle chair downtime through predictive scheduling protocols.',
          'Configured automated SMS and phone reminders that minimized appointment no-show rates.',
          'Seamlessly balanced pre-booked VIP appointments with fluctuating walk-in demands.',
        ],
        icon: 'calendar_month',
      },
      {
        title: 'Revenue Growth & Upselling Strategies',
        description:
          'Formulated and executed proactive upselling initiatives for premium salon hair treatments, aesthetic rituals, and retail beauty products. Structured bundled treatment packages that substantially increased average transaction value.',
        bullets: [
          'Drove a 40% surge in total salon service bookings across core fiscal quarters.',
          'Coached front-desk and beauty associates on consultative cross-selling approaches.',
          'Promoted luxury retail brand inventory, boosting shelf turnover and salon margins.',
        ],
        icon: 'storefront',
      },
      {
        title: 'B2B Strategic Partnerships & Brand Building',
        description:
          'Spearheaded business development across Kolkata’s commercial ecosystem, negotiating and launching 15+ alliances with wedding planners, luxury apparel boutiques, corporate clubs, and regional lifestyle influencers.',
        bullets: [
          'Delivered exclusive bridal grooming packages driving high-ticket group bookings.',
          'Organized seasonal cross-promotional events to introduce new beauty lines.',
          'Generated a 35% sustained increase in customer referral acquisitions.',
        ],
        icon: 'hub',
      },
      {
        title: 'Financial Management & Billing Operations',
        description:
          'Oversaw complete cash handling, POS terminal batch operations, digital wallets, credit settlement, and daily till reconciliations with zero discrepancy tolerance.',
        bullets: [
          'Prepared daily, weekly, and monthly operational revenue summaries for senior leadership.',
          'Audited inventory consumption against billed services to prevent stock leakage.',
          'Maintained 100% compliance in invoicing, GST compliance records, and client ledgers.',
        ],
        icon: 'payments',
      },
      {
        title: 'Client Experience & Escalation Handling',
        description:
          'Established high-touch concierge hospitality standards across the salon reception. Proactively managed VIP expectations and resolved client concerns with rapid turnaround and empathetic service recovery.',
        bullets: [
          'Conducted regular guest satisfaction surveys to identify service enhancement areas.',
          'Implemented hospitality onboarding modules for reception and support staff.',
          'Preserved exceptional 4.8+ star public reputation across Google reviews and local forums.',
        ],
        icon: 'sentiment_satisfied',
      },
    ],
    previousRoleId: 'nlb',
    nextRoleId: 'cerise',
  },

  cerise: {
    id: 'cerise',
    companyName: 'CERISE',
    highlightWord: 'SALON',
    role: 'Client Operations Manager',
    period: '2014 — 2017',
    location: 'Kolkata, India',
    jobType: 'Full-Time',
    summary:
      'Directed luxury front-desk and reservation operations for 50+ daily high-profile clients in an upscale service environment. Managed premium retail beauty inventory, multi-stylist schedules, VIP customer care, vendor coordination, and daily cash flow.',
    skills: [
      'Front Desk Operations',
      'Appointment Scheduling',
      'Luxury Retail Inventory',
      'Vendor Management',
      'Cash Flow & POS Billing',
      'VIP Escalation Handling',
    ],
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIshuydLTPdvQVGZFuAOOlK9_mIPdtkoB-wNB4ZP6n6x0j_fjCekfw2MWdZQEV2HQC-f11UY_cty3Y-4TkQ7F6xheB2v0kZDk0d_EyPtM9xVXZfLqoWtSxqz8kkY7zNQxViKWyD03aaETim36MSRihjug9cL6KBpF09pliLRMM19hSHK4p9PMMsovRgPwm6MEsFF_nRpZz7wogeACXWETb-nLV0r2JVYd7L0JpMOjR73Anw73qh2d_ifdB0RrywoBV',
    logoAlt: 'Cerise Salon Logo',
    stats: [
      {
        value: '50+',
        label: 'Daily Clients',
        description: 'Orchestrated front-desk guest reception and styling appointment queues.',
        icon: 'groups',
        badgeType: 'primary',
      },
      {
        value: '98%',
        label: 'Stock Availability',
        description: 'Maintained optimal luxury beauty retail stock through vendor controls.',
        icon: 'inventory_2',
        badgeType: 'secondary',
      },
      {
        value: '+25%',
        label: 'Service Add-Ons',
        description: 'Boosted average ticket value via front-desk consultation and upselling.',
        icon: 'trending_up',
        badgeType: 'secondary',
      },
      {
        value: '100%',
        label: 'Billing Compliance',
        description: 'Daily cash till reconciliations, card payment audits, and zero discrepancy.',
        icon: 'verified',
        badgeType: 'tertiary',
      },
    ],
    responsibilities: [
      {
        title: 'Front-Desk Operations & Reservation Management',
        description:
          'Managed multi-stylist calendars, handled walk-ins, phone bookings, and minimized cancellation downtime.',
        bullets: [
          'Systematically balanced high-volume appointment queues for 50+ daily high-profile clients.',
          'Eliminated appointment overlaps and double-bookings through proactive scheduling protocols.',
          'Streamlined dynamic waitlists and managed urgent walk-in guest arrangements smoothly.',
        ],
        icon: 'calendar_month',
      },
      {
        title: 'Luxury Retail Inventory & Vendor Coordination',
        description:
          'Maintained 98% stock availability of premium hair/beauty products, managed supply orders, and conducted weekly audits.',
        bullets: [
          'Coordinated procurement cycles directly with luxury hair and skincare distributors.',
          'Conducted periodic physical inventory counts to ensure zero discrepancy and eliminate shrinkage.',
          'Monitored product consumption trends to guarantee on-time restocking of hero lines.',
        ],
        icon: 'inventory_2',
      },
      {
        title: 'Consultative Upselling & Revenue Growth',
        description:
          'Coached reception team on upselling aesthetic treatments, luxury retail bundles, and seasonal service packages.',
        bullets: [
          'Delivered a 25% increase in add-on service attachments during front-desk client check-in.',
          'Introduced customized product bundles paired with premium styling and spa sessions.',
          'Standardized consultative greeting dialogues that highlighted seasonal treatments.',
        ],
        icon: 'trending_up',
      },
      {
        title: 'Cash Management & Financial Reporting',
        description:
          'Handled daily POS billing, payment collection, petty cash, ledger entries, and daily sales summaries.',
        bullets: [
          'Enforced 100% precision in end-of-day register tallies and electronic card settlement batches.',
          'Managed petty cash reserves and processed authorized vendor disbursements accurately.',
          'Generated consolidated daily and weekly business reports for management review.',
        ],
        icon: 'payments',
      },
      {
        title: 'Client Experience, VIP Protocols & Service Recovery',
        description:
          'Addressed VIP expectations, handled guest concerns with empathy, and ensured brand reputation standards.',
        bullets: [
          'Delivered tailored reception hospitality reflecting luxury salon service etiquette.',
          'Addressed customer feedback immediately with proactive and positive service recovery measures.',
          'Fostered durable relationships with high-frequency VIP patrons and local clientele.',
        ],
        icon: 'sentiment_satisfied',
      },
    ],
    previousRoleId: 'getgorgeous',
    nextRoleId: 'anjohn',
  },

  anjohn: {
    id: 'anjohn',
    companyName: 'A.N.',
    highlightWord: 'JOHN',
    role: 'Front Desk / Scheduling Coordinator',
    period: '2013 — 2014',
    location: 'Kolkata, India',
    jobType: 'Full-Time',
    summary:
      'Served as the primary brand ambassador and front-desk coordinator for a premier salon and academy chain. Managed high-volume monthly appointment scheduling, guest intake, daily financial reconciliations, and general administrative office procedures.',
    skills: [
      'Appointment Scheduling',
      'Front Desk Administration',
      'Guest Relations',
      'POS Transactions',
      'Daily Financial Ledgers',
      'Calendar Coordination',
    ],
    logo: '/assets/anjohn-logo.png',
    logoAlt: 'A.N. John Logo',
    logoBg: 'black',
    stats: [
      {
        value: '200+',
        label: 'Monthly Bookings',
        description: 'Processed appointment reservations across academy and salon branches.',
        icon: 'calendar_month',
        badgeType: 'secondary',
      },
      {
        value: '99%',
        label: 'Booking Accuracy',
        description: 'Eliminated scheduling errors and minimized double-booking friction.',
        icon: 'verified',
        badgeType: 'tertiary',
      },
      {
        value: '100%',
        label: 'Daily Reconciliation',
        description: 'Maintained daily register, cash drawer balance, and card logs.',
        icon: 'account_balance_wallet',
        badgeType: 'primary',
      },
      {
        value: '4.9★',
        label: 'Guest Satisfaction',
        description: 'Delivered first-class welcome protocol and proactive guest communications.',
        icon: 'star',
        badgeType: 'secondary',
      },
    ],
    responsibilities: [
      {
        title: 'High-Volume Appointment Scheduling & Dispatch',
        description:
          'Coordinated senior stylist schedules, processed booking modifications, cancellations, and advance bridal bookings.',
        bullets: [
          'Maintained balanced service allocation across master stylists, academy trainers, and specialists.',
          'Managed real-time waitlists and promptly filled cancellation slots to optimize chair utilization.',
          'Processed complex multi-service bridal and grooming package itineraries with precision.',
        ],
        icon: 'book_online',
      },
      {
        title: 'Guest Welcome & Front-of-House Experience',
        description:
          'Acted as the primary point of contact for client reception, intake inquiries, phone support, and service guidance.',
        bullets: [
          'Greeted incoming patrons with prompt hospitality, offering service consultations and refreshments.',
          'Handled incoming telephone switchboard, fielding treatment questions and service bookings.',
          'Resolved guest timing delays and appointment queries with calm, professional diplomacy.',
        ],
        icon: 'group',
      },
      {
        title: 'Point-of-Sale (POS) & Payment Administration',
        description:
          'Handled cash collections, card transactions, digital vouchers, invoice printing, and daily till balance.',
        bullets: [
          'Processed multi-tier payment methods including credit/debit cards, cash, and promotional gift cards.',
          'Generated detailed itemized service invoices and verified stylist commission sales records.',
          'Performed daily closing register audits with 100% accuracy and zero balance discrepancy.',
        ],
        icon: 'point_of_sale',
      },
      {
        title: 'Documentation, Inventory Logs & Administrative Support',
        description:
          'Maintained client appointment histories, supported retail inventory stock checks, and administrative records.',
        bullets: [
          'Recorded client treatment histories, hair color formula notes, and stylistic preferences.',
          'Assisted management with weekly stock audits of backbar supplies and luxury retail shelves.',
          'Facilitated seamless daily handover notes and administrative reporting for salon leadership.',
        ],
        icon: 'inventory_2',
      },
    ],
    previousRoleId: 'cerise',
    nextRoleId: 'ural',
  },

  ural: {
    id: 'ural',
    companyName: 'URAL INDIA',
    highlightWord: 'LTD',
    role: 'Executive Assistant to Director',
    period: '2010 — 2012',
    location: 'Kolkata, India',
    jobType: 'Full-Time',
    summary:
      'Managed the Director’s executive calendar, orchestrated domestic and international business travel itineraries, and coordinated 25+ weekly strategic meetings. Drafted high-value purchase orders and quotations, supported preliminary interview screenings, and safeguarded confidential directorate files and commercial records.',
    skills: [
      'Executive Scheduling',
      'Calendar Management',
      'Travel Coordination',
      'Purchase Orders',
      'Vendor Quotations',
      'Preliminary Recruitment',
      'Confidential File Security',
    ],
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD12cakga0Q68InIwZzjoJOFK1e_b_G20-N2mCDN-EdSuyMOH5QiIV4ZBocPTn9Rs3vqfK7N9NtMtiZO04sslAM84e_bBub_r3TJHEzQGFPWwhxUHvWNgIhmXRxJOgdmXztBbV9zhf3ZrTjVxq58_o8dzrlGM3LErS7w15qoYvlE9UBrL-DugTDCfCvafIP5MXKXBmrM_H6TnAeOO_bLwz1th4U1NMfu-Dq39c8rL_1TlNgc5tCCXwrPRfgbvPiqeYsJg',
    logoAlt: 'Ural India Logo',
    stats: [
      {
        value: '25+',
        label: 'Weekly Meetings',
        description: 'Coordinated executive diary, board briefings, and commercial conferences.',
        icon: 'calendar_month',
        badgeType: 'secondary',
      },
      {
        value: '100+',
        label: 'Quarterly Orders',
        description: 'Drafted and processed commercial purchase orders and equipment quotations.',
        icon: 'description',
        badgeType: 'tertiary',
      },
      {
        value: '100%',
        label: 'Data Confidentiality',
        description: 'Protected proprietary directorate files, contracts, and NDA correspondences.',
        icon: 'lock',
        badgeType: 'primary',
      },
      {
        value: '+30%',
        label: 'Itinerary Efficiency',
        description: 'Optimized complex executive travel logistics and administrative workflows.',
        icon: 'flight_takeoff',
        badgeType: 'secondary',
      },
    ],
    responsibilities: [
      {
        title: 'Executive Calendar & Director’s Schedule Management',
        description:
          'Organized and synchronized 25+ weekly high-stakes meetings with corporate clients, joint-venture partners, and departmental heads.',
        bullets: [
          'Maintained comprehensive diary coordination, preventing scheduling overlaps and prioritizing strategic discussions.',
          'Prepared meeting agendas, board packages, and executive briefing dossiers.',
          'Recorded executive minutes of meetings and tracked time-bound action items.',
        ],
        icon: 'event_note',
      },
      {
        title: 'Purchase Orders, Quotations & Vendor Coordination',
        description:
          'Administered commercial documentation, drafting and routing purchase orders and vendor quotations for manufacturing equipment and materials.',
        bullets: [
          'Processed over 100+ purchase orders quarterly with meticulous technical and pricing review.',
          'Communicated with domestic and international suppliers to track deliveries and payment status.',
          'Reconciled commercial quotations with procurement requisitions for executive approval.',
        ],
        icon: 'shopping_cart',
      },
      {
        title: 'Preliminary Recruitment & Candidate Screening',
        description:
          'Conducted initial applicant resume evaluations and preliminary telephone screenings to support executive hiring.',
        bullets: [
          'Coordinated candidate interviews for engineering and administrative positions.',
          'Evaluated applicant qualifications, communications, and background credentials.',
          'Shortlisted qualified talent profiles for second-round directorate interviews.',
        ],
        icon: 'person_search',
      },
      {
        title: 'Confidential Records & Directorate Communications',
        description:
          'Safeguarded sensitive corporate communications, executive contracts, and legal correspondence.',
        bullets: [
          'Drafted high-priority correspondence and formal letters on behalf of the Director.',
          'Implemented secure physical and digital filing systems ensuring strict information privacy.',
          'Handled confidential internal escalations and administrative inquiries with utmost discretion.',
        ],
        icon: 'verified_user',
      },
    ],
    previousRoleId: 'anjohn',
    nextRoleId: 'hsbc',
  },

  hsbc: {
    id: 'hsbc',
    companyName: 'HSBC',
    role: 'Associate – Credit Card Department (HOPE)',
    period: '2008 — 2010',
    location: 'Kolkata, India',
    jobType: 'Full-Time',
    summary:
      'Delivered high-volume internet banking customer support, complex credit card billing dispute resolution, and cross-functional complaint investigations. Partnered across operations and banking branches to conduct root cause analysis and elevate customer satisfaction metrics.',
    skills: [
      'Internet Banking Support',
      'Credit Card Operations',
      'Root Cause Analysis',
      'MIS Reporting',
      'Cross-Functional Escalations',
      'Customer Satisfaction (CSAT)',
    ],
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBc0gooUo_qpE-Cc1B4Gy8inBgDMUuBhULvn0xqrySvuQV_SIGAepJHDhI_jfVLqfg1tM5IcEWyO4j90R0UvtYQ6POO3IHIMYHXV4jIoJ3Gxu4O7T2lk62kY3XreWlTrsITypRH1CGpQLh6HAOHP0C24bfetX8hhmAOxYV1G6bf7EuZmyKYnyL6TfxA1dlQji6F8HRcjufN_45tCbvklMPMro3VHNNCcRwRpHZKXTTU3WxkFM30I0CzHmPtrsON7zEI',
    logoAlt: 'HSBC Logo',
    stats: [
      {
        value: '80+',
        label: 'Daily Queries',
        description: 'Resolved internet banking and credit card inquiries via secure email channels.',
        icon: 'mail',
        badgeType: 'secondary',
      },
      {
        value: '94%',
        label: 'CSAT Score',
        description: 'Consistently maintained customer satisfaction rating exceeding banking targets.',
        icon: 'sentiment_satisfied',
        badgeType: 'secondary',
      },
      {
        value: '-25%',
        label: 'Recurring Issues',
        description: 'Spearheaded departmental root-cause analysis to eliminate systemic client friction.',
        icon: 'trending_down',
        badgeType: 'primary',
      },
      {
        value: '+15%',
        label: 'Metrics Lift',
        description: 'Contributed to measurable quarter-over-quarter service level improvements.',
        icon: 'trending_up',
        badgeType: 'secondary',
      },
    ],
    responsibilities: [
      {
        title: 'Internet Banking & Dispute Resolution',
        description:
          'Managed resolution workflows for 80+ daily digital banking inquiries, billing queries, and transactional disputes.',
        bullets: [
          'Delivered swift turnaround for high-volume customer correspondence and email escalation channels.',
          'Investigated unauthorized transaction claims, billing chargebacks, and complex ledger reconciliations.',
          'Maintained compliance with strict SLA guidelines and customer confidentiality protocols.',
        ],
        icon: 'support_agent',
      },
      {
        title: 'Cross-Departmental Investigation & Root Cause Analysis',
        description:
          'Liaised with fraud, merchant services, and banking operations to resolve complex escalations, reducing repeat complaints by 25%.',
        bullets: [
          'Conducted forensic transaction audits and cross-functional reviews for unresolved escalations.',
          'Identified recurring digital banking bottlenecks to recommend procedural adjustments.',
          'Established clear communication bridges between customer support and back-office settlement teams.',
        ],
        icon: 'hub',
      },
      {
        title: 'MIS Reporting & Departmental Analytics',
        description:
          'Prepared, analyzed, and delivered daily and weekly management information system (MIS) performance decks for senior leadership.',
        bullets: [
          'Compiled key operational metrics on turnaround time, dispute resolution efficiency, and query loads.',
          'Monitored team capacity trends and escalated operational spikes to executive management.',
          'Provided actionable data insights that drove service delivery enhancements.',
        ],
        icon: 'monitoring',
      },
      {
        title: 'Compliance, Banking Protocols & Quality Assurance',
        description:
          'Adhered strictly to banking privacy regulations, audit standards, and SLA compliance metrics.',
        bullets: [
          'Enforced strict data protection, identity verification, and anti-fraud operational safeguards.',
          'Participated in internal quality evaluations and peer case-review audits.',
          'Preserved spotless audit records across all credit card dispute documentation.',
        ],
        icon: 'verified_user',
      },
    ],
    previousRoleId: 'ural',
    nextRoleId: 'parkhotel',
  },

  parkhotel: {
    id: 'parkhotel',
    companyName: 'THE PARK',
    highlightWord: 'HOTEL',
    role: 'Guest Executive / PATP Consultant',
    period: '2007 — 2008',
    location: 'Kolkata, India',
    jobType: 'Full-Time',
    summary:
      'Promoted from PATP Consultant to Guest Executive within 11 months for exceptional outbound sales and guest relationship management. Orchestrated VIP concierge services for signature and gold-tier guests, premium dining reservations, and luxury hospitality experiences.',
    skills: [
      'VIP Concierge Services',
      'Luxury Hospitality',
      'Membership Sales',
      'Guest Relations',
      'Reservations Coordination',
      'Event & Dining Support',
    ],
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAof-o-pFJEJQozHl6EewD7Hx9t49ckuXsF_tMnvEARY3QzphNC4f7dl60pUk9Afic0T7N8Vxb65haAFbrk8M-O4QiAOdoljInxt99L8V_97CDiqqHtKdXZj0kYbfnxLmx57rFqn-XsVh4z0zH1E_XU6PZSr6BdczdiU_G5GosF-i_dATzYQfffFpzF5E4DC9KivRsVqJhVNO_SyVP2HXDZMTceYtIXP32JyKLHicu0FA8ZLVDvZ-vTiuBWLF5_cYuC',
    logoAlt: 'The Park Hotel Logo',
    stats: [
      {
        value: '+20%',
        label: 'Sales Target',
        description: 'Consistently exceeded monthly membership card sales benchmarks.',
        icon: 'trending_up',
        badgeType: 'secondary',
      },
      {
        value: '11 Mos',
        label: 'Fast-Track Promotion',
        description: 'Promoted from Consultant to Guest Executive for stellar operational performance.',
        icon: 'speed',
        badgeType: 'tertiary',
      },
      {
        value: '100+',
        label: 'VIP Guests',
        description: 'Managed personalized hospitality itineraries and reservations for high-profile patrons.',
        icon: 'hotel_class',
        badgeType: 'primary',
      },
      {
        value: '100%',
        label: 'Reservation Accuracy',
        description: 'Maintained flawless scheduling across hotel dining and luxury accommodations.',
        icon: 'verified',
        badgeType: 'secondary',
      },
    ],
    responsibilities: [
      {
        title: 'VIP Guest Executive & Signature Hospitality',
        description:
          'Delivered bespoke concierge and hospitality management for signature and gold-tier hotel guests.',
        bullets: [
          'Orchestrated personalized arrivals, in-suite dining preferences, and customized amenities.',
          'Maintained real-time profile management and high-touch escalation resolution for elite patrons.',
          'Elevated signature lounge guest retention through anticipatory service standards.',
        ],
        icon: 'room_service',
      },
      {
        title: 'Outbound Membership Acquisition & Sales',
        description:
          'Championed promotional outreach and client conversions for luxury hotel privilege memberships.',
        bullets: [
          'Surpassed individual and team sales targets consistently across multiple quarters by +20%.',
          'Executed consultative sales presentations to senior corporate leaders and frequent travelers.',
          'Facilitated cross-promotions with premier corporate and lifestyle partner accounts.',
        ],
        icon: 'card_membership',
      },
      {
        title: 'High-End Reservation & Event Coordination',
        description:
          'Coordinated premium room suites, banquet reservations, and signature dining table bookings.',
        bullets: [
          'Achieved 100% reservation and scheduling accuracy across high-volume dining periods.',
          'Managed complex booking requests and VIP dining seating across all specialty outlets.',
          'Liaised with events teams to organize private dining experiences and banquet functions.',
        ],
        icon: 'event_available',
      },
      {
        title: 'Inter-Departmental Service Orchestration',
        description:
          'Partnered seamlessly with front-desk, culinary, and housekeeping management to maintain 5-star service delivery.',
        bullets: [
          'Synchronized VIP guest preferences with kitchen, housekeeping, and transportation teams.',
          'Conducted daily shift briefings to align staff on high-profile guest arrivals and special requests.',
          'Ensured adherence to international hospitality safety, hygiene, and service standards.',
        ],
        icon: 'hub',
      },
    ],
    previousRoleId: 'hsbc',
    nextRoleId: undefined,
  },
};
