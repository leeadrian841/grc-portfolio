export type Download = {
  label: string;
  file: string; // relative to /public/downloads
  kind: "xlsx" | "docx";
  detail: string;
};

export type Project = {
  slug: string;
  num: string;
  title: string;
  kicker: string;
  accent: "critical" | "high" | "medium" | "low";
  status: "complete" | "in-progress";
  blurb: string;
  clauses: string[];
  metrics: { value: string; label: string }[];
  downloads: Download[];
};

export const projects: Project[] = [
  {
    slug: "iso27001-gap-analysis",
    num: "01",
    title: "ISO 27001:2022 Gap Analysis",
    kicker: "Compliance lens",
    accent: "high",
    status: "complete",
    blurb:
      "A management-system gap analysis that assesses Clauses 4–10 — the governance backbone most templates skip — before sampling Annex A controls, then anchors a Statement of Applicability in specific regulatory paragraphs.",
    clauses: ["ISO 27001 §4.3", "§6.1.2", "§6.1.3(d)", "MAS TRM §3", "PDPA §26B"],
    metrics: [
      { value: "26", label: "Annex A controls assessed" },
      { value: "4–10", label: "Management clauses reviewed" },
      { value: "1–5", label: "Maturity scoring model" },
    ],
    downloads: [
      {
        label: "Gap Analysis Workbook",
        file: "ISO27001_Gap_Analysis_PayWave.xlsx",
        kind: "xlsx",
        detail: "5 sheets — cover, dashboard, gap matrix, SoA, risk register",
      },
      {
        label: "Remediation Roadmap",
        file: "ISO27001_Remediation_Roadmap_PayWave.docx",
        kind: "docx",
        detail: "12-month phased plan, 22 actions, SGD budget",
      },
    ],
  },
  {
    slug: "cyber-risk-register",
    num: "02",
    title: "Cyber Risk Register & Treatment Plan",
    kicker: "Threat lens",
    accent: "critical",
    status: "complete",
    blurb:
      "Methodology first: a 5×5 likelihood–impact matrix with frequency-anchored scales and a four-dimension impact model. Then 16 risks mapped across all five NIST CSF functions, with formula-driven inherent and residual scoring.",
    clauses: ["ISO 27005 §6", "NIST SP 800-30", "NIST CSF 2.0", "ISO 31000:2018"],
    metrics: [
      { value: "16", label: "Risks across 5 CSF functions" },
      { value: "5×5", label: "Likelihood–impact matrix" },
      { value: "15", label: "Treatment actions with owners" },
    ],
    downloads: [
      {
        label: "Risk Register Workbook",
        file: "Cyber_Risk_Register_PayWave.xlsx",
        kind: "xlsx",
        detail: "5 sheets — methodology, register, dashboard, heat map, treatment",
      },
      {
        label: "Executive Summary",
        file: "Cyber_Risk_Executive_Summary_PayWave.docx",
        kind: "docx",
        detail: "1-page board brief — top-five risks, phased budget",
      },
    ],
  },
  {
    slug: "tprm-framework",
    num: "03",
    title: "Third-Party Risk Management Framework",
    kicker: "Supplier lens",
    accent: "medium",
    status: "complete",
    blurb:
      "Policy, tiering, a 38-question assessment questionnaire and a weighted scoring model — built on MAS TRM Section 9. Two vendors scored live to prove the methodology actually differentiates a mature vendor from a weaker one.",
    clauses: ["MAS TRM §9", "MAS Outsourcing", "ISO 27001 A.5.19–A.5.22"],
    metrics: [
      { value: "12", label: "Vendors, three-tier inventory" },
      { value: "38", label: "Questions across 7 domains" },
      { value: "2", label: "Vendors scored end-to-end" },
    ],
    downloads: [
      {
        label: "Vendor Scoring Workbook",
        file: "TPRM_Vendor_Scoring_PayWave.xlsx",
        kind: "xlsx",
        detail: "5 sheets — cover, dashboard, methodology, inventory, scoring",
      },
      {
        label: "Vendor Risk Questionnaire",
        file: "TPRM_Vendor_Questionnaire_PayWave.docx",
        kind: "docx",
        detail: "7-section, 38-question VRAQ with attestation",
      },
      {
        label: "TPRM Policy",
        file: "TPRM_Policy_PayWave.docx",
        kind: "docx",
        detail: "Formal policy aligned to MAS TRM Section 9",
      },
    ],
  },
  {
    slug: "infosec-policy-library",
    num: "04",
    title: "Information Security Policy Library",
    kicker: "Governance lens",
    accent: "low",
    status: "complete",
    blurb:
      "Governance first: a register to track ownership, reviews and exceptions, then seven standalone policies each following the same 10-section template — specific, enforceable statements anchored to ISO 27001 Annex A, MAS TRM, PDPA and PCI DSS.",
    clauses: [
      "ISO 27001 A.5–A.8",
      "MAS TRM §3,7,9",
      "PDPA §26A–D",
      "PCI DSS 3,4,6,8",
      "NIST SP 800-61",
    ],
    metrics: [
      { value: "7", label: "Standalone policies" },
      { value: "6", label: "Register sheets" },
      { value: "10", label: "Section policy template" },
    ],
    downloads: [
      {
        label: "Policy Register",
        file: "InfoSec_Policy_Register_PayWave.xlsx",
        kind: "xlsx",
        detail: "6 sheets — register, compliance map, reviews, exceptions",
      },
      {
        label: "POL-001 Acceptable Use",
        file: "POL-001_Acceptable_Use_Policy_PayWave.docx",
        kind: "docx",
        detail: "AUP — 8 policy statement sections",
      },
      {
        label: "POL-002 Access Control",
        file: "POL-002_Access_Control_Policy_PayWave.docx",
        kind: "docx",
        detail: "RBAC, MFA, PAM, JML, access reviews",
      },
      {
        label: "POL-003 Data Classification",
        file: "POL-003_Data_Classification_Policy_PayWave.docx",
        kind: "docx",
        detail: "4-tier scheme with handling requirements",
      },
      {
        label: "POL-004 Incident Response",
        file: "POL-004_Incident_Response_Policy_PayWave.docx",
        kind: "docx",
        detail: "CSIRT, severity tiers, PDPA/MAS notification",
      },
      {
        label: "POL-005 Remote Working",
        file: "POL-005_Remote_Working_Policy_PayWave.docx",
        kind: "docx",
        detail: "Devices, VPN, cross-border, travel",
      },
      {
        label: "POL-006 Cryptography",
        file: "POL-006_Cryptography_Policy_PayWave.docx",
        kind: "docx",
        detail: "Algorithms, TLS, key & certificate lifecycle",
      },
      {
        label: "POL-007 Secure SDLC",
        file: "POL-007_Secure_SDLC_Policy_PayWave.docx",
        kind: "docx",
        detail: "Threat modelling, SAST/DAST/SCA, deployment gates",
      },
    ],
  },
  {
    slug: "incident-response-plan",
    num: "05",
    title: "Incident Response Plan & Tabletop Exercise",
    kicker: "Response lens",
    accent: "high",
    status: "in-progress",
    blurb:
      "An operational IRP across the NIST six phases — the runbook complement to the Incident Response policy — plus a ransomware tabletop hitting the payroll server, with per-phase injects and a lessons-learned register.",
    clauses: ["NIST SP 800-61", "ISO 27001 A.5.24–A.5.30", "MAS TRM §7.5", "PDPA §26A–D"],
    metrics: [],
    downloads: [],
  },
  {
    slug: "grc-dashboard",
    num: "06",
    title: "GRC Metrics Dashboard",
    kicker: "Assurance lens",
    accent: "medium",
    status: "in-progress",
    blurb:
      "An interactive dashboard tracking key risk indicators sourced from the register and gap analysis — open high risks, overdue controls, policy exceptions and audit findings — bridging project-engineering reporting with GRC.",
    clauses: ["ISO 27001 §9.1", "NIST IR 8286", "MAS TRM §3.6"],
    metrics: [],
    downloads: [],
  },
];
