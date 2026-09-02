import { jsPDF } from 'jspdf';

export function downloadResumePDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // ~595.28 pt
  const pageHeight = doc.internal.pageSize.getHeight(); // ~841.89 pt
  const marginX = 36;
  const contentWidth = pageWidth - marginX * 2; // ~523.28 pt

  let y = 38;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - 36) {
      doc.addPage();
      y = 38;
      return true;
    }
    return false;
  };

  const drawSectionHeader = (title: string) => {
    checkPageBreak(30);
    y += 8;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(15, 23, 42); // #0f172a
    doc.text(title.toUpperCase(), marginX, y);
    y += 4;
    doc.setDrawColor(203, 213, 225); // #cbd5e1
    doc.setLineWidth(1);
    doc.line(marginX, y, marginX + contentWidth, y);
    y += 10;
  };

  // --- HEADER ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(17);
  doc.setTextColor(15, 23, 42);
  doc.text('AMRIT KOUR SOHEL', pageWidth / 2, y, { align: 'center' });
  y += 13;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);
  doc.text('Telecom Customer Service & Billing Operations Professional', pageWidth / 2, y, { align: 'center' });
  y += 11;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105);
  doc.text('amrit.koursohel@gmail.com  |  +91 82401 32767 (WhatsApp)  |  Indian National', pageWidth / 2, y, { align: 'center' });
  y += 10;

  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text('Currently: Kolkata, India | Visa Status: Visit Visa / Available for Sponsorship | Ready for immediate relocation to Dubai/UAE', pageWidth / 2, y, { align: 'center' });
  y += 10;

  doc.text('LinkedIn: linkedin.com/in/amrit-kour-sohel-4u', pageWidth / 2, y, { align: 'center' });
  y += 8;

  // Header bottom divider
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(1.2);
  doc.line(marginX, y, marginX + contentWidth, y);
  y += 6;

  // --- PROFESSIONAL SUMMARY ---
  drawSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const summaryText =
    'Telecom Customer Service & Billing Operations Professional with 15+ years of experience across telecom, banking, logistics, hospitality, and client-facing operations, currently supporting UK corporate customers on the British Telecom (BT) bill-to-cash process. Proven record in escalation handling, high-volume customer support, billing resolution, MIS reporting, and cross-functional coordination with account managers, operations teams, vendors, and senior leadership. Strong analytical, problem-solving, and multitasking abilities with attention to detail and effective time management. Demonstrates practical leadership through ownership of client issues, front-office operations, service coordination, business partnerships, and confidential executive support. Skilled in MS Office, ServiceNow, Excel Pivot Tables, documentation control, calendar and travel coordination, process improvement, and AI tools including ChatGPT, Claude, Perplexity, Microsoft Copilot, Gamma AI, and Prompt Engineering.';
  const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(summaryLines, marginX, y, { align: 'justify', maxWidth: contentWidth });
  y += summaryLines.length * 10 + 2;

  // --- PROFESSIONAL EXPERIENCE ---
  drawSectionHeader('Professional Experience');

  const experiences = [
    {
      role: 'Associate – Bill to Cash (Managed Enquiries)',
      period: '04/2022 — 09/2026',
      company: 'British Telecom E-Serve Pvt. Ltd',
      location: 'Kolkata, India',
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
      role: 'Customer Service Executive (BNSF Logistics)',
      period: '11/2020 — 03/2022',
      company: 'NLB Services Pvt. Ltd',
      location: 'Kolkata, India',
      bullets: [
        'Handled 100+ daily inbound and outbound calls to US dispatchers and truck drivers, ensuring accurate updates on arrival and departure times',
        'Communicated with brokers and dispatchers via email to resolve delivery issues, achieving a 95% on-time update rate',
        'Sent timely notifications about shipment delays or changes, maintaining 99% reporting accuracy',
        'Maintained detailed records for all loads tracked, supporting logistics optimization',
      ],
    },
    {
      role: 'Client Relations & Operations Manager',
      period: '2017 — 2019',
      company: 'Get Gorgeous Salon',
      location: 'Kolkata, India',
      bullets: [
        'Managed reservations and appointment scheduling for 50+ daily clients; processed bookings, changes, and cancellations',
        'Drove upselling of premium services and packages; increased bookings by 40% and improved referrals by 35%',
        'Secured 15+ business partnerships to expand client base and brand awareness',
        'Handled billing, payment processing, and client records; resolved customer complaints with professionalism',
      ],
    },
    {
      role: 'Client Operations Manager',
      period: '2014 — 2017',
      company: 'Cerise Salon',
      location: 'Kolkata, India',
      bullets: [
        'Managed front-desk and reservation operations for 50+ daily clients in a premium service environment',
        'Upsold services and products; maintained 98% stock availability and handled vendor coordination',
        'Delivered premium customer experience; handled escalations and ensured brand image consistency',
        'Managed cash flow, billing, and payment collection; maintained accurate client records',
      ],
    },
    {
      role: 'Front Desk / Scheduling Coordinator',
      period: '2013 — 2014',
      company: 'A.N. John Pvt. Ltd',
      location: 'Kolkata, India',
      bullets: [
        'Processed 200+ monthly reservations with 99% accuracy; managed booking changes and cancellations',
        'Served as first point of contact; handled guest calls, inquiries, and follow-up communications',
        'Processed payments and maintained daily financial records; performed general office duties (filing, data entry)',
      ],
    },
    {
      role: 'Executive Assistant to Director',
      period: '12/2010 — 11/2012',
      company: 'Ural India Ltd',
      location: 'Kolkata, India',
      bullets: [
        'Managed the Director’s schedule, coordinated 25+ weekly meetings, and organized business travel itineraries',
        'Drafted purchase orders and quotations, processed 100+ orders quarterly',
        'Conducted preliminary interviews for recruitment, supporting successful hiring decisions',
        'Managed confidential correspondence and files, ensuring data security',
      ],
    },
    {
      role: 'Associate, Credit Card Department',
      period: '11/2008 — 05/2010',
      company: 'HSBC (HOPE)',
      location: 'Kolkata, India',
      bullets: [
        'Resolved 80+ internet banking queries daily via email, maintaining a 94% customer satisfaction score',
        'Liaised with multiple departments to resolve customer complaints, conducting root cause analysis to reduce recurring issues by 25%',
        'Prepared and analyzed MIS reports to support service level improvements',
        'Contributed to a 15% improvement in departmental service metrics',
      ],
    },
    {
      role: 'Guest Executive / PATP Consultant',
      period: '01/2007 — 01/2008',
      company: 'The Park Hotel, Kolkata',
      location: 'Kolkata, India',
      bullets: [
        'Promoted from PATP Consultant to Guest Executive within 11 months for outstanding performance',
        'Outbound sales of hotel membership cards, exceeding monthly sales targets by 20%',
        'Managed signature and gold-level guests, handling VIP reservations and personalized services',
        'Coordinated room and table bookings, and supported departmental administration',
      ],
    },
  ];

  experiences.forEach((exp) => {
    checkPageBreak(35);

    // Role line + Period
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text(exp.role, marginX, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    doc.text(exp.period, marginX + contentWidth, y, { align: 'right' });
    y += 10;

    // Company line
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    doc.text(`${exp.company} — ${exp.location}`, marginX, y);
    y += 9;

    // Bullets
    doc.setFontSize(8);
    doc.setTextColor(51, 65, 85);
    exp.bullets.forEach((bullet) => {
      checkPageBreak(16);
      const bulletLines = doc.splitTextToSize(`•  ${bullet}`, contentWidth - 8);
      doc.text(bulletLines, marginX + 4, y);
      y += bulletLines.length * 9.5;
    });

    y += 3;
  });

  // --- KEY SKILLS ---
  drawSectionHeader('Key Skills');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);

  const skillsList = [
    '• Customer Support • Billing Support • Invoice Processing • Accounts Receivable • Debt Recovery • Credit & Adjustments',
    '• Bill to Cash (B2C) • Escalation Handling • Client Relations • Front Desk Operations • Administrative Operations',
    '• Appointment Scheduling • Calendar Management • Meeting Coordination • Travel Coordination • Documentation Control',
    '• MIS Reporting • Excel Pivot Tables • Advanced Excel • MS Office • ServiceNow • SLA Compliance • Quality Assurance',
    '• Data Entry • Vendor Coordination • Call Handling • Complaint Resolution • Cross-Functional Coordination',
    '• Process Improvement • Business Partnership Development • Hospitality Operations • Logistics Support • Banking Support',
    '• Interpersonal Skills • Multitasking • Time Management • Attention to Detail • Problem Solving • Analytical Skills • Team Player',
    '• Team Leadership • People Management • Coaching & Mentoring • Performance Management • Training & Development',
    '• Stakeholder Management • Conflict Resolution • Decision Making • Customer Satisfaction (ASAT/CSAT) • Salesforce',
    '• ChatGPT • Claude • Perplexity • Microsoft Copilot • Gamma AI • Prompt Engineering',
  ];

  skillsList.forEach((skillLine) => {
    checkPageBreak(12);
    doc.text(skillLine, marginX, y);
    y += 9.5;
  });
  y += 2;

  // --- CERTIFICATIONS ---
  drawSectionHeader('Certifications');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);
  doc.text('• Power BI Fundamentals • ServiceNow Fundamentals • Customer Service Excellence • Advanced Excel', marginX, y);
  y += 12;

  // --- EDUCATION ---
  drawSectionHeader('Education');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);
  doc.text('• MBA in Human Resource Management, Sikkim Manipal University — Kolkata, India (2014)', marginX, y);
  y += 10;
  doc.text('• Bachelor of Arts (BA), Calcutta University — Kolkata, India (2008)', marginX, y);
  y += 12;

  // --- LANGUAGES ---
  drawSectionHeader('Languages');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(51, 65, 85);
  doc.text('• English — Professional Proficiency', marginX, y);
  y += 9.5;
  doc.text('• Hindi — Professional Proficiency', marginX, y);
  y += 9.5;
  doc.text('• Punjabi — Native', marginX, y);
  y += 9.5;
  doc.text('• Bengali — Conversational', marginX, y);
  y += 14;

  // Save the PDF
  doc.save('Amrit_Kour_Sohel_CV.pdf');
}
