import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { downloadResumePDF } from '../utils/downloadPdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopyEmail: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onCopyEmail,
}) => {
  const generatePrintableHtml = () => {
    const { personalInfo, experiences, skillsCategories } = PORTFOLIO_DATA;

    const experiencesHtml = experiences
      .map(
        (exp) => `
        <div style="margin-bottom: 16px; page-break-inside: avoid; break-inside: avoid;">
          <div style="display: flex; justify-content: space-between; align-items: baseline; font-weight: 600; font-size: 13px; color: #111827;">
            <div>
              <span style="font-weight: 700; font-size: 14px;">${exp.role}</span>
              <span style="color: #4b5563; font-weight: 500; margin-left: 6px;">— ${exp.company} (${exp.location})</span>
            </div>
            <span style="font-size: 12px; color: #475569; font-weight: 600; white-space: nowrap;">${exp.period}</span>
          </div>
          <ul style="margin: 6px 0 0 18px; padding: 0; font-size: 12px; color: #374151; line-height: 1.55;">
            ${exp.bullets
              .map((b) => `<li style="margin-bottom: 3px;">${b.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>`)
              .join('')}
          </ul>
        </div>
      `
      )
      .join('');

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Curriculum Vitae — ${personalInfo.name}</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 12mm 15mm;
    }
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #111827;
      background: #ffffff;
      margin: 0;
      padding: 0;
      line-height: 1.5;
      font-size: 12px;
    }
    .header {
      text-align: center;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 12px;
      margin-bottom: 14px;
    }
    .header h1 {
      font-size: 24px;
      font-weight: 800;
      margin: 0 0 4px 0;
      letter-spacing: -0.5px;
      color: #0f172a;
    }
    .header .title {
      font-size: 14px;
      font-weight: 600;
      color: #334155;
      margin: 0 0 6px 0;
    }
    .contact-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      font-size: 11px;
      color: #475569;
      margin-bottom: 4px;
    }
    .meta-row {
      font-size: 11px;
      color: #64748b;
    }
    .section-title {
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #1e293b;
      border-bottom: 1.5px solid #cbd5e1;
      padding-bottom: 3px;
      margin: 14px 0 8px 0;
      page-break-after: avoid;
      break-after: avoid;
    }
    p {
      margin: 0 0 8px 0;
      text-align: justify;
      color: #334155;
      line-height: 1.5;
    }
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      page-break-inside: avoid;
      break-inside: avoid;
    }
    ul {
      margin: 0 0 0 16px;
      padding: 0;
    }
    li {
      margin-bottom: 3px;
      color: #334155;
    }
    a {
      color: #0f172a;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>${personalInfo.name}</h1>
    <div class="title">${personalInfo.title}</div>
    <div class="contact-row">
      <span><strong>Email:</strong> ${personalInfo.email}</span>
      <span>•</span>
      <span><strong>Phone:</strong> ${personalInfo.phone}</span>
      <span>•</span>
      <span><strong>Nationality:</strong> ${personalInfo.nationality}</span>
    </div>
    <div class="meta-row">
      Currently: ${personalInfo.location} | Visa: ${personalInfo.visaStatus} | <strong>${personalInfo.relocation}</strong>
    </div>
    <div class="meta-row" style="margin-top: 3px;">
      LinkedIn: linkedin.com/in/amrit-kour-sohel-4u
    </div>
  </div>

  <div class="section-title">Professional Summary</div>
  <p>
    Telecom Customer Service &amp; Billing Operations Professional with 15+ years of experience across telecom,
    banking, logistics, hospitality, and client-facing operations, currently supporting UK corporate customers
    on the British Telecom (BT) bill-to-cash process. Proven record in escalation handling, high-volume customer
    support, billing resolution, MIS reporting, and cross-functional coordination with account managers, operations
    teams, vendors, and senior leadership. Strong analytical, problem-solving, and multitasking abilities with
    attention to detail and effective time management. Demonstrates practical leadership through ownership of client
    issues, front-office operations, service coordination, business partnerships, and confidential executive support.
    Skilled in MS Office, ServiceNow, Excel Pivot Tables, documentation control, calendar and travel coordination,
    process improvement, and AI tools including ChatGPT, Claude, Perplexity, Microsoft Copilot, Gamma AI, and Prompt Engineering.
  </p>

  <div class="section-title">Professional Experience</div>
  ${experiencesHtml}

  <div class="section-title">Key Skills &amp; Tools</div>
  <p style="margin-bottom: 4px;">
    <strong>Operations &amp; Management:</strong> ${skillsCategories[0].skills.join(' • ')}
  </p>
  <p style="margin-bottom: 4px;">
    <strong>Modern Tools &amp; AI:</strong> ${skillsCategories[1].skills.join(' • ')}
  </p>

  <div class="grid-2" style="margin-top: 10px;">
    <div>
      <div class="section-title" style="margin-top: 0;">Certifications</div>
      <ul>
        <li>Power BI Fundamentals</li>
        <li>ServiceNow Fundamentals</li>
        <li>Customer Service Excellence</li>
        <li>Advanced Excel &amp; Dashboards</li>
      </ul>
    </div>
    <div>
      <div class="section-title" style="margin-top: 0;">Education &amp; Languages</div>
      <div style="font-size: 11px; line-height: 1.5; color: #334155;">
        <div><strong>MBA in Human Resource Management (2014)</strong></div>
        <div style="color: #64748b; margin-bottom: 4px;">Sikkim Manipal University</div>
        <div><strong>Bachelor of Arts (BA) (2008)</strong></div>
        <div style="color: #64748b; margin-bottom: 4px;">Calcutta University</div>
        <div style="margin-top: 4px;"><strong>Languages:</strong> English, Hindi, Punjabi, Bengali</div>
      </div>
    </div>
  </div>
</body>
</html>`;
  };

  const handlePrint = () => {
    downloadResumePDF();
  };

  const handleDownloadHtml = () => {
    try {
      const htmlContent = generatePrintableHtml();
      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Amrit_Kour_Sohel_Resume.html`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error('Download resume error', e);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto resume-modal-container">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm -z-10 modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0c0c0c] rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto border border-gray-200 dark:border-neutral-800 resume-modal-card"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-neutral-800 bg-gray-50/90 dark:bg-neutral-900/90 backdrop-blur-md sticky top-0 z-10 modal-header-actions">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-200 dark:bg-neutral-800 text-slate-800 dark:text-neutral-200 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">description</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-base md:text-lg">
                    Curriculum Vitae — Amrit Kour Sohel
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-neutral-400">
                    15+ Years Experience • Operations &amp; Billing Specialist
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.12 }}
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 dark:bg-neutral-100 text-white dark:text-black hover:bg-slate-800 dark:hover:bg-white transition-colors duration-150 shadow-xs cursor-pointer"
                  title="Print or Save as PDF"
                >
                  <span className="material-symbols-outlined text-base">print</span>
                  <span>Print / Save PDF</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.12 }}
                  onClick={handleDownloadHtml}
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-neutral-800 text-slate-800 dark:text-neutral-200 hover:bg-slate-200 dark:hover:bg-neutral-700 transition-colors duration-150 shadow-xs cursor-pointer border border-slate-200 dark:border-neutral-700"
                  title="Download standalone resume file"
                >
                  <span className="material-symbols-outlined text-base">download</span>
                  <span>Download</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ duration: 0.12 }}
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors duration-150 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </motion.button>
              </div>
            </div>

            {/* Modal Scrollable Content - Structured Resume view */}
            <div className="p-6 md:p-10 overflow-y-auto space-y-8 text-gray-800 dark:text-neutral-200 text-sm leading-relaxed resume-scroll-body">
              {/* Header info */}
              <div className="text-center space-y-2 border-b border-gray-200 dark:border-neutral-800 pb-6 resume-section-item">
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white font-display">
                  {PORTFOLIO_DATA.personalInfo.name}
                </h1>
                <p className="text-slate-700 dark:text-neutral-300 font-semibold text-sm md:text-base">
                  {PORTFOLIO_DATA.personalInfo.title}
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs text-gray-600 dark:text-neutral-400">
                  <button
                    onClick={onCopyEmail}
                    className="hover:text-slate-900 dark:hover:text-white underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>{PORTFOLIO_DATA.personalInfo.email}</span>
                  </button>
                  <span>•</span>
                  <a
                    href={`tel:${PORTFOLIO_DATA.personalInfo.phone.replace(/\s/g, '')}`}
                    className="hover:text-slate-900 dark:hover:text-white"
                  >
                    {PORTFOLIO_DATA.personalInfo.phone} (WhatsApp)
                  </a>
                  <span>•</span>
                  <span>{PORTFOLIO_DATA.personalInfo.nationality}</span>
                </div>
                <div className="text-xs text-gray-500 dark:text-neutral-400 font-medium">
                  Currently: {PORTFOLIO_DATA.personalInfo.location} | Visa: {PORTFOLIO_DATA.personalInfo.visaStatus} |{' '}
                  <span className="text-slate-800 dark:text-neutral-200 font-semibold">
                    {PORTFOLIO_DATA.personalInfo.relocation}
                  </span>
                </div>
                <div className="text-xs pt-1">
                  <a
                    href={PORTFOLIO_DATA.personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-700 dark:text-neutral-300 hover:underline font-medium"
                  >
                    LinkedIn: linkedin.com/in/amrit-kour-sohel-4u
                  </a>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="resume-section-item">
                <h4 className="text-xs font-bold tracking-wider text-slate-800 dark:text-neutral-200 uppercase mb-2 border-b border-gray-200 dark:border-neutral-800 pb-1 font-display">
                  Professional Summary
                </h4>
                <p className="text-xs md:text-sm text-gray-700 dark:text-neutral-300 text-justify leading-relaxed">
                  Telecom Customer Service &amp; Billing Operations Professional with 15+ years of
                  experience across telecom, banking, logistics, hospitality, and client-facing operations,
                  currently supporting UK corporate customers on the British Telecom (BT) bill-to-cash
                  process. Proven record in escalation handling, high-volume customer support, billing
                  resolution, MIS reporting, and cross-functional coordination with account managers,
                  operations teams, vendors, and senior leadership. Strong analytical, problem-solving, and
                  multitasking abilities with attention to detail and effective time management.
                  Demonstrates practical leadership through ownership of client issues, front-office
                  operations, service coordination, business partnerships, and confidential executive support.
                  Skilled in MS Office, ServiceNow, Excel Pivot Tables, documentation control, calendar and
                  travel coordination, process improvement, and AI tools including ChatGPT, Claude, Perplexity,
                  Microsoft Copilot, Gamma AI, and Prompt Engineering.
                </p>
              </div>

              {/* Professional Experience */}
              <div className="resume-section-item">
                <h4 className="text-xs font-bold tracking-wider text-slate-800 dark:text-neutral-200 uppercase mb-4 border-b border-gray-200 dark:border-neutral-800 pb-1 font-display">
                  Professional Experience
                </h4>
                <div className="space-y-6">
                  {PORTFOLIO_DATA.experiences.map((exp) => (
                    <div key={exp.id} className="space-y-1.5 resume-section-item">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-medium">
                        <div>
                          <span className="font-bold text-gray-900 dark:text-white text-sm">
                            {exp.role}
                          </span>
                          <span className="text-gray-600 dark:text-neutral-400 text-xs block sm:inline sm:ml-2">
                            — {exp.company}
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-slate-700 dark:text-neutral-300">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-gray-700 dark:text-neutral-300">
                        {exp.bullets.map((b, i) => {
                          const cleanText = b.replace(/\*\*(.*?)\*\*/g, '$1');
                          return <li key={i}>{cleanText}</li>;
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Skills */}
              <div className="resume-section-item">
                <h4 className="text-xs font-bold tracking-wider text-slate-800 dark:text-neutral-200 uppercase mb-2 border-b border-gray-200 dark:border-neutral-800 pb-1 font-display">
                  Key Skills &amp; Tools
                </h4>
                <div className="text-xs text-gray-700 dark:text-neutral-300 space-y-2">
                  <p>
                    <strong className="text-gray-900 dark:text-white">Operations &amp; Management:</strong>{' '}
                    {PORTFOLIO_DATA.skillsCategories[0].skills.join(' • ')}
                  </p>
                  <p>
                    <strong className="text-gray-900 dark:text-white">Modern Tools &amp; AI:</strong>{' '}
                    {PORTFOLIO_DATA.skillsCategories[1].skills.join(' • ')}
                  </p>
                </div>
              </div>

              {/* Certifications & Education */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 resume-section-item">
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-slate-800 dark:text-neutral-200 uppercase mb-2 border-b border-gray-200 dark:border-neutral-800 pb-1 font-display">
                    Certifications
                  </h4>
                  <ul className="text-xs text-gray-700 dark:text-neutral-300 space-y-1">
                    <li>• Power BI Fundamentals</li>
                    <li>• ServiceNow Fundamentals</li>
                    <li>• Customer Service Excellence</li>
                    <li>• Advanced Excel &amp; Dashboards</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold tracking-wider text-slate-800 dark:text-neutral-200 uppercase mb-2 border-b border-gray-200 dark:border-neutral-800 pb-1 font-display">
                    Education &amp; Languages
                  </h4>
                  <div className="text-xs text-gray-700 dark:text-neutral-300 space-y-1">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      MBA in Human Resource Management (2014)
                    </p>
                    <p className="text-gray-500 dark:text-neutral-400">Sikkim Manipal University</p>
                    <p className="font-semibold text-gray-900 dark:text-white pt-1">
                      Bachelor of Arts (BA) (2008)
                    </p>
                    <p className="text-gray-500 dark:text-neutral-400">Calcutta University</p>
                    <p className="pt-1">
                      <strong>Languages:</strong> English, Hindi, Punjabi, Bengali
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900/90 flex items-center justify-between modal-footer-actions">
              <span className="text-xs text-gray-500 dark:text-neutral-400">
                Available for immediate joining &amp; interview scheduling
              </span>
              <div className="flex gap-2">
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 bg-slate-900 dark:bg-neutral-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-black text-xs font-semibold rounded-lg transition-colors duration-150 cursor-pointer active:scale-95 flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm">print</span>
                  Print / Save PDF
                </button>
                <button
                  onClick={handleDownloadHtml}
                  className="px-4 py-2 bg-slate-100 dark:bg-neutral-800 hover:bg-slate-200 dark:hover:bg-neutral-700 text-slate-800 dark:text-neutral-200 text-xs font-semibold rounded-lg transition-colors duration-150 cursor-pointer active:scale-95 border border-slate-300 dark:border-neutral-700"
                >
                  Download
                </button>
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-gray-200 dark:bg-neutral-800 hover:bg-gray-300 dark:hover:bg-neutral-700 text-gray-800 dark:text-neutral-200 text-xs font-semibold rounded-lg transition-colors duration-150 cursor-pointer active:scale-95"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

