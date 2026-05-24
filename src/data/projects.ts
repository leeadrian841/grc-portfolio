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
];
