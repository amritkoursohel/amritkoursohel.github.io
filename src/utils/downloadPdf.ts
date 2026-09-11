import { jsPDF } from 'jspdf';

export function downloadResumePDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 595.28 pt
  const pageHeight = doc.internal.pageSize.getHeight(); // 841.89 pt
  const marginX = 36; // 0.5 in margin
  const contentWidth = pageWidth - marginX * 2; // 523.28 pt

  let y = 26;

  // --- HEADER ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13.5);
  doc.setTextColor(15, 15, 15);
  doc.text('AMRIT KOUR SOHEL', pageWidth / 2, y, { align: 'center' });
  y += 11.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.0);
  doc.setTextColor(30, 30, 30);
  doc.text('Telecom Customer Service & Billing Operations Professional', pageWidth / 2, y, { align: 'center' });
  y += 10;

  const contactLine = 'amrit.koursohel@gmail.com | +91 82401 32767 (WhatsApp) | Indian National';
  doc.text(contactLine, pageWidth / 2, y, { align: 'center' });
  try {
    const emailStr = 'amrit.koursohel@gmail.com';
    const emailW = doc.getTextWidth(emailStr);
    const lineW = doc.getTextWidth(contactLine);
    const emailX = (pageWidth - lineW) / 2;
    doc.link(emailX, y - 7, emailW, 9, { url: 'mailto:amrit.koursohel@gmail.com' });
  } catch {
    // optional link
  }
  y += 10;

  doc.text('Currently: Kolkata, India | Visa Status: Visit Visa / Available for Sponsorship | Ready for immediate relocation to Dubai/UAE', pageWidth / 2, y, { align: 'center' });
  y += 10;

  // LinkedIn line with blue link
  const linkedInPrefix = 'LinkedIn: ';
  const linkedInUrl = 'linkedin.com/in/amrit-kour-sohel-4u';
  const fullLinkedIn = linkedInPrefix + linkedInUrl;
  const totalWidth = doc.getTextWidth(fullLinkedIn);
  const startX = (pageWidth - totalWidth) / 2;

  doc.setTextColor(30, 30, 30);
  doc.text(linkedInPrefix, startX, y);
  doc.setTextColor(10, 80, 190);
  const urlX = startX + doc.getTextWidth(linkedInPrefix);
  doc.text(linkedInUrl, urlX, y);
  try {
    doc.link(urlX, y - 7, doc.getTextWidth(linkedInUrl), 9, { url: 'https://www.linkedin.com/in/amrit-kour-sohel-4u' });
  } catch {
    // optional link
  }
  y += 8;

  // Divider line
  doc.setDrawColor(210, 210, 210);
  doc.setLineWidth(0.6);
  doc.line(marginX, y, marginX + contentWidth, y);
  y += 9.5;

  // Section Header Helper
  const drawSectionHeader = (title: string) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(0, 0, 0);
    doc.text(title, marginX, y);
    y += 8.5;
  };

  // Bullet drawing helper with hanging indent
  const drawBullet = (text: string, indent: number = 3) => {
    const bulletSymbol = '•';
    const bulletWidth = 9;
    const textWidth = contentWidth - indent - bulletWidth;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.0);
    doc.setTextColor(25, 25, 25);

    const lines = doc.splitTextToSize(text, textWidth);

    // Draw bullet dot
    doc.text(bulletSymbol, marginX + indent, y);

    // Draw lines
    lines.forEach((line: string, index: number) => {
      doc.text(line, marginX + indent + bulletWidth, y + (index * 8.3));
    });

    y += lines.length * 8.3 + 0.8;
  };

  // --- PROFESSIONAL SUMMARY ---
  drawSectionHeader('PROFESSIONAL SUMMARY');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.0);
  doc.setTextColor(25, 25, 25);
  const summaryText =
    'Telecom Customer Service & Billing Operations Professional with 15+ years of experience across telecom, banking, logistics, hospitality, and client-facing operations, currently supporting UK corporate customers on the British Telecom (BT) bill-to-cash process. Proven record in escalation handling, high-volume customer support, billing resolution, MIS reporting, and cross-functional coordination with account managers, operations teams, vendors, and senior leadership. Strong analytical, problem-solving, and multitasking abilities with attention to detail and effective time management. Demonstrates practical leadership through ownership of client issues, front-office operations, service coordination, business partnerships, and confidential executive support. Skilled in MS Office, ServiceNow, Excel Pivot Tables, documentation control, calendar and travel coordination, process improvement, and AI tools including ChatGPT, Claude, Perplexity, Microsoft Copilot, Gamma AI, and Prompt Engineering.';
  const sumLines = doc.splitTextToSize(summaryText, contentWidth);
  sumLines.forEach((line: string) => {
    doc.text(line, marginX, y);
    y += 8.3;
  });
  y += 3.5;

  // --- PROFESSIONAL EXPERIENCE ---
  drawSectionHeader('PROFESSIONAL EXPERIENCE');

  interface ExpItem {
    title: string;
    period: string;
    company: string;
    bullets: string[];
  }

  const experiences: ExpItem[] = [
    {
      title: 'Associate – Bill to Cash (GCB Process)',
      period: '04/2022 — 09/2026',
      company: 'British Telecom E-Serve Pvt. Ltd — Kolkata, India',
      bullets: [
        'Recovered GBP 4.63 million (GBP 4,634,857) in outstanding corporate debt in the last quarter through structured follow-up and dispute resolution',
        'Serve a portfolio of major B2B corporate, public-sector and global accounts — including HSBC, Abbott International, Coventry University, Pinsent Masons LLP, QA Ltd and The Global Draw',
        'Closed 645 cases last quarter at an average cycle time of 8 days — 38% faster than the 13-day benchmark',
        'Manage 75+ weekly corporate post-billing queries via email and phone for UK-based customers, maintaining a 96% resolution rate',
        'Raise credit adjustments for invalid charges across phone lines, broadband, ISDN, SIP trunking and cloud voice accounts, processing GBP 31,000+ in monthly adjustments',
        'Sustained a 90% quality score on audited cases, exceeding process compliance targets',
        'Achieved a 9.5/10 ASAT (agent satisfaction) rating, reflecting consistently positive customer interactions',
        'Partnered with Account Managers on escalation calls, cutting average resolution time by 25%',
        'Completed Advanced Excel workshops (pivot tables, lookups, reporting dashboards), applying them to billing MIS and debt-tracking reports',
      ],
    },
    {
      title: 'Customer Service Executive (BNSF Logistics)',
      period: '11/2020 — 03/2022',
      company: 'NLB Services Pvt. Ltd — Kolkata, India',
      bullets: [
        'Handled 100+ daily inbound and outbound calls to US dispatchers and truck drivers, ensuring accurate updates on arrival and departure times',
        'Communicated with brokers and dispatchers via email to resolve delivery issues, achieving a 95% on-time update rate',
        'Sent timely notifications about shipment delays or changes, maintaining 99% reporting accuracy',
        'Maintained detailed records for all loads tracked, supporting logistics optimization',
      ],
    },
    {
      title: 'Client Relations & Operations Manager',
      period: '2017 — 2019',
      company: 'Get Gorgeous Salon — Kolkata, India',
      bullets: [
        'Managed reservations and appointment scheduling for 50+ daily clients; processed bookings, changes, and cancellations',
        'Drove upselling of premium services and packages; increased bookings by 40% and improved referrals by 35%',
        'Secured 15+ business partnerships to expand client base and brand awareness',
        'Handled billing, payment processing, and client records; resolved customer complaints with professionalism',
      ],
    },
    {
      title: 'Client Operations Manager',
      period: '2014 — 2017',
      company: 'Cerise Salon — Kolkata, India',
      bullets: [
        'Managed front-desk and reservation operations for 50+ daily clients in a premium service environment',
        'Upsold services and products; maintained 98% stock availability and handled vendor coordination',
        'Delivered premium customer experience; handled escalations and ensured brand image consistency',
        'Managed cash flow, billing, and payment collection; maintained accurate client records',
      ],
    },
    {
      title: 'Front Desk / Scheduling Coordinator',
      period: '2013 — 2014',
      company: 'A.N. John Pvt. Ltd — Kolkata, India',
      bullets: [
        'Processed 200+ monthly reservations with 99% accuracy; managed booking changes and cancellations',
        'Served as first point of contact; handled guest calls, inquiries, and follow-up communications',
        'Processed payments and maintained daily financial records; performed general office duties (filing, data entry)',
      ],
    },
    {
      title: 'Executive Assistant to Director',
      period: '12/2010 — 11/2012',
      company: 'Ural India Ltd — Kolkata, India',
      bullets: [
        'Managed the Director’s schedule, coordinated 25+ weekly meetings, and organized business travel itineraries',
        'Drafted purchase orders and quotations, processed 100+ orders quarterly',
        'Conducted preliminary interviews for recruitment, supporting successful hiring decisions',
        'Managed confidential correspondence and files, ensuring data security',
      ],
    },
    {
      title: 'Associate, Credit Card Department',
      period: '11/2008 — 05/2010',
      company: 'HSBC (HOPE) — Kolkata, India',
      bullets: [
        'Resolved 80+ internet banking queries daily via email, maintaining a 94% customer satisfaction score',
        'Liaised with multiple departments to resolve customer complaints, conducting root cause analysis to reduce recurring issues by 25%',
        'Prepared and analyzed MIS reports to support service level improvements',
        'Contributed to a 15% improvement in departmental service metrics',
      ],
    },
    {
      title: 'Guest Executive / PATP Consultant',
      period: '01/2007 — 01/2008',
      company: 'The Park Hotel, Kolkata — Kolkata, India',
      bullets: [
        'Promoted from PATP Consultant to Guest Executive within 11 months for outstanding performance',
        'Outbound sales of hotel membership cards, exceeding monthly sales targets by 20%',
        'Managed signature and gold-level guests, handling VIP reservations and personalized services',
        'Coordinated room and table bookings, and supported departmental administration',
      ],
    },
  ];

  experiences.forEach((exp) => {
    // Title + Period on same line
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.4);
    doc.setTextColor(15, 15, 15);
    doc.text(exp.title, marginX, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.2);
    doc.text(exp.period, marginX + contentWidth, y, { align: 'right' });
    y += 8.2;

    // Company line (italicized)
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.0);
    doc.setTextColor(30, 30, 30);
    doc.text(exp.company, marginX, y);
    y += 7.4;

    // Bullets
    exp.bullets.forEach((bullet) => {
      drawBullet(bullet, 3);
    });
    y += 1.0;
  });

  y += 2.0;

  // --- KEY SKILLS ---
  drawSectionHeader('KEY SKILLS');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.8);
  doc.setTextColor(25, 25, 25);
  const skillsParagraph =
    '• Customer Support • Billing Support • Invoice Processing • Accounts Receivable • Debt Recovery • Credit & Adjustments • Bill to Cash (B2C) • Escalation Handling • Client Relations • Front Desk Operations • Administrative Operations • Appointment Scheduling • Calendar Management • Meeting Coordination • Travel Coordination • Documentation Control • MIS Reporting • Excel Pivot Tables • Advanced Excel • MS Office • ServiceNow • SLA Compliance • Quality Assurance • Data Entry • Vendor Coordination • Call Handling • Complaint Resolution • Cross-Functional Coordination • Process Improvement • Business Partnership Development • Hospitality Operations • Logistics Support • Banking Support • Interpersonal Skills • Multitasking • Time Management • Attention to Detail • Problem Solving • Analytical Skills • Team Player • Team Leadership • People Management • Coaching & Mentoring • Performance Management • Training & Development • Stakeholder Management • Conflict Resolution • Decision Making • Customer Satisfaction (ASAT/CSAT) • Salesforce • ChatGPT • Claude • Perplexity • Microsoft Copilot • Gamma AI • Prompt Engineering';
  const skillLines = doc.splitTextToSize(skillsParagraph, contentWidth);
  skillLines.forEach((line: string) => {
    doc.text(line, marginX, y);
    y += 8.1;
  });
  y += 3.0;

  // --- CERTIFICATIONS ---
  drawSectionHeader('CERTIFICATIONS');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.8);
  doc.setTextColor(25, 25, 25);
  doc.text(
    '• Power BI Fundamentals • ServiceNow Fundamentals • Customer Service Excellence • Advanced Excel',
    marginX,
    y
  );
  y += 9.0;

  // --- EDUCATION ---
  drawSectionHeader('EDUCATION');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.8);
  doc.setTextColor(25, 25, 25);
  doc.text(
    '• MBA in Human Resource Management, Sikkim Manipal University — Kolkata, India (2014)',
    marginX,
    y
  );
  y += 7.8;
  doc.text(
    '• Bachelor of Arts (BA), Calcutta University — Kolkata, India (2008)',
    marginX,
    y
  );
  y += 9.0;

  // --- LANGUAGES ---
  drawSectionHeader('LANGUAGES');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(6.8);
  doc.setTextColor(25, 25, 25);
  doc.text('• English — Professional Proficiency', marginX, y);
  y += 7.5;
  doc.text('• Hindi — Professional Proficiency', marginX, y);
  y += 7.5;
  doc.text('• Punjabi — Native', marginX, y);
  y += 7.5;
  doc.text('• Bengali — Conversational', marginX, y);

  // Guarantee single page
  while (doc.getNumberOfPages() > 1) {
    doc.deletePage(doc.getNumberOfPages());
  }

  doc.save('Amrit_Kour_Sohel_CV.pdf');
}
