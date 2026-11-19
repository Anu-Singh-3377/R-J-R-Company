import homeHero from './assets/images/home/home-hero.jpg';
import aboutOffice from './assets/images/about/about-office.jpg';
import auditReview from './assets/images/audit/audit-review.jpg';
import taxConsultation from './assets/images/taxation/tax-consultation.jpg';
import gstDocuments from './assets/images/gst/gst-documents.jpg';
import accountingWorkspace from './assets/images/accounting/accounting-workspace.jpg';
import businessAdvisory from './assets/images/advisory/business-advisory.jpg';
import contactOffice from './assets/images/contact/contact-office.jpg';

export const firmData = {
  name: 'R J R & Company',
  shortName: 'RJR & Company',
  type: 'Chartered Accountants',
  tagline: 'Professional services across accounting, taxation, audit and regulatory compliance.',
  headline: 'Audit, Taxation, and Financial Advisory.',
  heroDescription: 'Providing structured statutory compliance, assurance, and strategic advisory services to corporations, SMEs, startups, and non-profit entities across India.',
  establishmentYear: '[Year]',
  headOffice: '[City, State]',
  branchOffice: '[City, State]',
  frn: '[Insert verified FRN]',
  peerReviewStatus: '[Insert status/details if applicable]',
  empanelment: '[Insert verified empanelment details if applicable]',
  phone: '[TO BE PROVIDED]',
  email: '[TO BE PROVIDED]',
  officeHours: '[TO BE PROVIDED]',
  googleMapsUrl: '', // To be updated once location coordinates are supplied
  corePhilosophy: 'Our approach is grounded in accuracy, regulatory discipline, confidentiality, and timely execution. We work through structured processes designed to provide clarity, maintain appropriate documentation, and support informed financial and business decisions.',
};

export const images = {
  home: homeHero,
  about: aboutOffice,
  audit: auditReview,
  tax: taxConsultation,
  gst: gstDocuments,
  accounting: accountingWorkspace,
  advisory: businessAdvisory,
  contact: contactOffice,
};

export const officialResources = [
  {
    name: 'Institute of Chartered Accountants of India (ICAI)',
    description: 'Statutory body established by an Act of Parliament for regulating the profession of Chartered Accountants in India.',
    url: 'https://www.icai.org',
    category: 'Regulatory Body'
  },
  {
    name: 'Income Tax Department (e-Filing Portal)',
    description: 'Official portal for filing annual returns, checking tax credits (26AS/AIS), and compliance communications.',
    url: 'https://www.incometax.gov.in',
    category: 'Direct Tax'
  },
  {
    name: 'Goods & Services Tax (GST) Portal',
    description: 'Official portal for GST registration, return filing, input tax credit ledger review, and challan payments.',
    url: 'https://www.gst.gov.in',
    category: 'Indirect Tax'
  },
  {
    name: 'Ministry of Corporate Affairs (MCA)',
    description: 'Official government portal for company and LLP incorporations, statutory annual filings, and DIN/DIR verifications.',
    url: 'https://www.mca.gov.in',
    category: 'Corporate Affairs'
  },
  {
    name: 'Directorate General of Foreign Trade (DGFT)',
    description: 'Official government portal for Import Export Code (IEC) issuance, trade policies, export incentive schemes, and customs licenses.',
    url: 'https://www.dgft.gov.in',
    category: 'Foreign Trade'
  }
];

export const services = [
  {
    slug: 'audit-assurance',
    title: 'Audit & Assurance',
    shortDescription: 'Independent audit and assurance work based on applicable professional standards.',
    description: 'Independent evaluation of financial statements, internal controls, and statutory compliance conducted in accordance with Standards on Auditing (SAs) issued by ICAI.',
    natureOfService: 'Independent review of financial records to report on whether financial statements present a true and fair view in conformity with applicable accounting principles.',
    whoMayRequire: [
      'Companies and LLPs mandated for statutory audit under the Companies Act / LLP Act',
      'Entities crossing statutory turnover thresholds under Income Tax Act Section 44AB',
      'Trusts, societies, and non-profit institutions requiring regulatory audits',
      'Entities seeking independent review of internal financial controls and risk management'
    ],
    typicalInformation: [
      'Trial balance, general ledgers, sub-ledgers and journal entries',
      'Bank statements, bank reconciliation statements and direct bank confirmation letters',
      'Fixed asset register, physical inventory count sheets and valuation policies',
      'Statutory registers, board minutes, and regulatory correspondence for the financial year',
      'Prior period audited financial statements and tax audit reports'
    ],
    generalProcess: [
      { step: '01', title: 'Engagement & Planning', desc: 'Scope definition, risk assessment, and audit program formulation.' },
      { step: '02', title: 'Information Gathering', desc: 'Collection and verification of primary accounting records, ledgers, and schedules.' },
      { step: '03', title: 'Substantive Testing & Vouching', desc: 'Sample verification of revenue, expenditure, assets, liabilities, and control testing.' },
      { step: '04', title: 'Review & Observations', desc: 'Review of financial disclosure notes, accounting standard compliance, and client discussion.' },
      { step: '05', title: 'Independent Report Issuance', desc: 'Issuance of formal statutory audit report with relevant annexures and UDIN generation.' }
    ],
    checklist: [
      'Trial Balance and Final Accounts draft',
      'Bank Reconciliation Statements for all active accounts',
      'Ledger confirmation from major debtors and creditors',
      'Fixed Asset Additions/Disposals with invoice evidence',
      'Statutory dues payment challans (PF, ESI, TDS, GST)'
    ],
    image: images.audit,
  },
  {
    slug: 'income-tax',
    title: 'Income Tax',
    shortDescription: 'Assistance with income tax reporting, compliance and related documentation.',
    description: 'Systematic support for income tax computation, withholding tax (TDS/TCS) compliance, annual return preparation, and documentation for individuals and corporate entities.',
    natureOfService: 'Tax planning guidance within statutory framework, preparation of annual income tax returns, TDS compliance, and representation response documentation.',
    whoMayRequire: [
      'Salaried individuals with capital gains, house property, or foreign assets',
      'Professionals, consultants, and sole proprietors maintaining books of accounts',
      'Partnership firms, LLPs, and private limited companies',
      'Non-Resident Indians (NRIs) having taxable income or property transactions in India'
    ],
    typicalInformation: [
      'Form 16/16A, Annual Information Statement (AIS), and Taxpayer Information Summary (TIS)',
      'Bank statements reflecting interest credits, dividend income, and financial transactions',
      'Capital gain statements from depository participants/brokers and property sale deeds',
      'Investment receipts under Chapter VI-A (PPF, ELSS, Life/Health insurance, housing loan)',
      'Challans for advance tax and self-assessment tax paid'
    ],
    generalProcess: [
      { step: '01', title: 'Information Compilation', desc: 'Aggregating income sources, TDS statements, AIS/TIS data, and deductions.' },
      { step: '02', title: 'Computation Preparation', desc: 'Calculating gross total income, admissible deductions, and applicable tax liability.' },
      { step: '03', title: 'Reconciliation', desc: 'Matching prepaid taxes (TDS/Advance Tax) with Form 26AS and AIS records.' },
      { step: '04', title: 'Client Review & Approval', desc: 'Reviewing computed tax positions and obtaining client verification.' },
      { step: '05', title: 'Filing & Acknowledgement', desc: 'E-filing on official portal and generating ITR-V filing acknowledgement.' }
    ],
    checklist: [
      'Form 16 / 16A TDS Certificates',
      'Annual Information Statement (AIS) and Form 26AS',
      'Bank account statements for the financial year',
      'Capital Gains summary and broker transaction statements',
      'Eligible tax-saving investment receipts and home loan certificates'
    ],
    image: images.tax,
  },
  {
    slug: 'gst',
    title: 'GST & Indirect Tax',
    shortDescription: 'GST registration, return support and indirect tax compliance.',
    description: 'Assistance with Goods and Services Tax compliance, monthly and quarterly return filing (GSTR-1, GSTR-3B), Input Tax Credit (ITC) reconciliation, and registration advisory.',
    natureOfService: 'Ongoing indirect tax compliance management, reconciliation of supplier invoices with portal data, and guidance on applicable GST classification.',
    whoMayRequire: [
      'Businesses crossing statutory threshold limits for aggregate turnover',
      'Inter-state goods suppliers and e-commerce sellers requiring mandatory registration',
      'Manufacturers, service providers, and traders needing monthly ITC reconciliations',
      'Exporters requiring zero-rated supply documentation and refund claim filing support'
    ],
    typicalInformation: [
      'Monthly sales registers with tax invoice numbers, HSN/SAC codes, and GSTIN details',
      'Purchase ledgers, supplier bills, and payment records',
      'Electronic Credit Ledger and Cash Ledger balances on GST Portal',
      'GSTR-2B monthly statement extracts for ITC validation',
      'E-way bills and delivery challans where applicable'
    ],
    generalProcess: [
      { step: '01', title: 'Monthly Data Gathering', desc: 'Compiling sales invoices, credit notes, and supplier inward purchase bills.' },
      { step: '02', title: 'ITC Reconciliation', desc: 'Automated matching of purchase register against auto-drafted GSTR-2B.' },
      { step: '03', title: 'Liability Computation', desc: 'Calculating outward liability, netting against eligible ITC, and determining tax payable.' },
      { step: '04', title: 'Client Confirmation', desc: 'Sharing summary with client for approval and tax payment challan generation.' },
      { step: '05', title: 'Return Filing', desc: 'Filing returns using official DSC or EVC authentication.' }
    ],
    checklist: [
      'Monthly Outward Sales Register with HSN/SAC summaries',
      'Inward Purchase Register with tax breakdown (CGST, SGST, IGST)',
      'Bank statements evidencing tax payment debits',
      'Import documentation (Bill of Entry) if applicable',
      'Credit/Debit note register'
    ],
    image: images.gst,
  },
  {
    slug: 'accounting',
    title: 'Accounting & Bookkeeping',
    shortDescription: 'Structured bookkeeping, record maintenance and financial reporting support.',
    description: 'End-to-end bookkeeping, ledger maintenance, financial reporting, and accounts supervision for businesses maintaining compliance with Indian Accounting Standards.',
    natureOfService: 'Systematic maintenance of journals, ledgers, trial balance, and financial statement generation for management insight and statutory compliance.',
    whoMayRequire: [
      'Growing businesses seeking to outsource day-to-day accounting functions',
      'Entities needing periodic financial statements for banks, investors, or boards',
      'Firms requiring reconciliation of debtor, creditor, and inventory sub-ledgers',
      'Professional practitioners requiring systematic double-entry accounting records'
    ],
    typicalInformation: [
      'Bank statements and digital payment gateway settlement summaries',
      'Sales and purchase invoices with corresponding payment vouchers',
      'Payroll sheets and employee statutory deduction schedules',
      'Petty cash logbooks and supporting expense bills',
      'Fixed asset acquisition receipts and loan repayment schedules'
    ],
    generalProcess: [
      { step: '01', title: 'Primary Document Collection', desc: 'Collecting source vouchers, bank statements, bills, and payment receipts.' },
      { step: '02', title: 'Transaction Posting', desc: 'Recording journal vouchers and ledger entries according to accounting principles.' },
      { step: '03', title: 'Bank & Ledger Reconciliation', desc: 'Reconciling bank accounts, major vendor balances, and customer accounts.' },
      { step: '04', title: 'Periodic Financial Closing', desc: 'Drafting Trial Balance, Profit & Loss statement, and Balance Sheet.' },
      { step: '05', title: 'Reporting & Review', desc: 'Delivering structured management accounts for review by business leadership.' }
    ],
    checklist: [
      'All active bank accounts and loan account statements',
      'Outward sales invoices with receipt vouchers',
      'Vendor purchase invoices with payment vouchers',
      'Salary register and PF/ESI contribution slips',
      'Petty cash expense vouchers with bills attached'
    ],
    image: images.accounting,
  },
  {
    slug: 'company-compliance',
    title: 'Company & LLP Compliance',
    shortDescription: 'Support for company and LLP statutory and regulatory obligations.',
    description: 'Guidance and filing support for statutory obligations under the Companies Act, 2013, and the Limited Liability Partnership Act, 2008, overseen by the Ministry of Corporate Affairs.',
    natureOfService: 'Statutory filing assistance, maintenance of secretarial registers, drafting of standard board resolutions, and annual corporate compliance filings.',
    whoMayRequire: [
      'Private Limited Companies and One Person Companies (OPCs)',
      'Limited Liability Partnerships (LLPs)',
      'Directors requiring annual Director KYC (DIR-3 KYC) compliance',
      'Entities undertaking changes in registered office, directors, or capital structure'
    ],
    typicalInformation: [
      'Certificate of Incorporation, MOA, AOA, or LLP Agreement',
      'Audited financial statements and statutory auditor reports',
      'Minutes of Board Meetings and Annual General Meetings (AGM)',
      'Director Identification Numbers (DIN) and Digital Signature Certificates (DSC)',
      'Share allotment records and register of members'
    ],
    generalProcess: [
      { step: '01', title: 'Statutory Health Check', desc: 'Reviewing current MCA portal status, existing master data, and filing deadlines.' },
      { step: '02', title: 'Documentation & Resolutions', desc: 'Drafting required notices, minutes, declarations, and director disclosures.' },
      { step: '03', title: 'Form Preparation', desc: 'Populating statutory MCA forms (e.g. AOC-4, MGT-7, Form 11, Form 8).' },
      { step: '04', title: 'DSC Authentication', desc: 'Affixing Digital Signatures of directors and practicing professionals.' },
      { step: '05', title: 'Filing & SRN Tracking', desc: 'Submitting on MCA portal and archiving Service Request Number (SRN) challans.' }
    ],
    checklist: [
      'Certificate of Incorporation and constitutional documents',
      'Audited Balance Sheet and Statement of Profit & Loss',
      'Director identification details and active DSC credentials',
      'List of shareholders and shareholding pattern changes',
      'Minutes of Board and Shareholder meetings'
    ],
    image: images.audit,
  },
  {
    slug: 'business-advisory',
    title: 'Business Advisory',
    shortDescription: 'Professional financial, business-documentation and management-information support.',
    description: 'Strategic financial review, working capital guidance, budgeting framework design, and standard documentation assistance for businesses navigating growth or restructuring.',
    natureOfService: 'Objective financial review and management support based on enterprise facts. We provide independent technical guidance without speculative or guaranteed claims.',
    whoMayRequire: [
      'Startups and emerging enterprises establishing accounting governance frameworks',
      'Businesses evaluating financing proposals, working capital limits, or term loans',
      'Enterprises needing objective management information systems (MIS) architecture',
      'Entities reviewing financial viability of capital expenditure projects'
    ],
    typicalInformation: [
      'Historical multi-year financial statements and management accounts',
      'Projected business assumptions, cost structures, and sales forecasts',
      'Existing loan agreements, banking sanction letters, and security schedules',
      'Operational workflow documentation and internal authorization matrices',
      'Market benchmark data and industry operating ratios'
    ],
    generalProcess: [
      { step: '01', title: 'Diagnostic Review', desc: 'Understanding organizational structure, financial flows, and objectives.' },
      { step: '02', title: 'Financial Modeling', desc: 'Analyzing cash flows, working capital cycles, and debt service coverage.' },
      { step: '03', title: 'Documentation Review', desc: 'Compiling structured documentation and management information summaries.' },
      { step: '04', title: 'Advisory Discussion', desc: 'Presenting technical findings and regulatory considerations to key stakeholders.' },
      { step: '05', title: 'Implementation Support', desc: 'Assisting in setting up structured tracking mechanisms and periodic reviews.' }
    ],
    checklist: [
      '3-year audited financial statements and current interim accounts',
      'Detailed schedule of banking facilities and loan agreements',
      'Monthly sales, overhead, and operating expenditure trends',
      'Organizational chart and key managerial responsibilities',
      'Capital expenditure proposals and vendor quotes'
    ],
    image: images.advisory,
  },
];

export const checklists = [
  {
    slug: 'income-tax-checklist',
    title: 'Income Tax Return Checklist',
    shortSummary: 'Comprehensive checklist for compiling personal, business, and capital documentation before filing Income Tax Returns.',
    category: 'Direct Tax',
    sections: [
      [
        'Basic Identity & Registration Information',
        [
          'Permanent Account Number (PAN) and Aadhaar Number',
          'Active mobile number and email ID linked with the e-Filing portal',
          'Details of all active Indian and overseas bank accounts (Bank name, Account number, IFSC)',
          'Designation of primary bank account for tax refund credit'
        ]
      ],
      [
        'Income from Salary & Employment',
        [
          'Form 16 (Part A and Part B) issued by employer(s)',
          'Salary slips for the entire financial year (especially if employer changed)',
          'Form 12BB submitted to employer detailing declared investments and rent paid',
          'Details of any arrears of salary or relief under Section 89'
        ]
      ],
      [
        'Income from House Property',
        [
          'Rent agreement and rent receipts for let-out properties',
          'Municipal taxes paid receipts during the financial year',
          'Housing loan interest and principal repayment certificate issued by lending bank',
          'Tenant PAN details (mandatory if annual rent exceeds prescribed limits)'
        ]
      ],
      [
        'Capital Gains Documentation',
        [
          'Consolidated Capital Gains Statement from Stock Brokers / Mutual Fund houses',
          'Property purchase deed and sale agreement for immovable property transactions',
          'Stamp duty valuation documents and improvement expenditure receipts',
          'Evidence of capital gain reinvestment (Sec 54, 54EC, 54F bonds or accounts)'
        ]
      ],
      [
        'Tax-Saving Investments & Deductions (Chapter VI-A)',
        [
          'Life insurance premium payment receipts (Section 80C)',
          'Public Provident Fund (PPF), Employee Provident Fund (EPF), and Sukanya Samriddhi statements',
          'Equity Linked Savings Scheme (ELSS) mutual fund statements',
          'Health insurance premium payment receipts for self, spouse, children, and parents (Section 80D)',
          'Education loan interest payment certificate (Section 80E)',
          'Donation receipts with 80G registration numbers and Form 10BE certificates'
        ]
      ],
      [
        'Tax Credits & Portal Records',
        [
          'Annual Information Statement (AIS) and Taxpayer Information Summary (TIS) downloaded from portal',
          'Form 26AS detailing TDS, TCS, and high-value specified financial transactions (SFT)',
          'Challans of advance tax and self-assessment tax paid (BSR code, challan serial number, date)'
        ]
      ]
    ]
  },
  {
    slug: 'gst-checklist',
    title: 'GST Compliance & Registration Checklist',
    shortSummary: 'Statutory requirements for GST registration, periodic monthly filing, and ITC reconciliation.',
    category: 'Indirect Tax',
    sections: [
      [
        'GST Registration Documentation',
        [
          'PAN card of business entity / proprietor / partners / directors',
          'Certificate of Incorporation / Partnership Deed / LLP Agreement',
          'Proof of Principal Place of Business (Electricity bill, Property tax receipt, or Municipal Khata)',
          'Rent Agreement and Landlord NOC along with ownership proof (for rented premises)',
          'Bank account proof (Cancelled cheque or latest bank statement with business name and address)',
          'Aadhaar and photo of authorized signatories and partners/promoters'
        ]
      ],
      [
        'Monthly & Quarterly Outward Supplies (GSTR-1)',
        [
          'Complete outward tax invoice register sorted by serial number',
          'Credit notes and debit notes issued during the tax period',
          'HSN/SAC-wise summary of outward supplies with quantity and taxable value',
          'Details of zero-rated supplies, SEZ deliveries, and export invoices with shipping bills',
          'Advances received and adjusted for services'
        ]
      ],
      [
        'Inward Supplies & ITC Verification (GSTR-3B / GSTR-2B)',
        [
          'Inward purchase register with supplier GSTIN, invoice date, and tax classification',
          'GSTR-2B statement downloaded from GST Portal for the corresponding period',
          'Reconciliation schedule identifying matched, missing, or mismatched supplier invoices',
          'Ineligible ITC reversals (blocked credits under Section 17(5), common credits Rule 42/43)',
          'Import of goods Bill of Entry details matching with ICEGATE'
        ]
      ],
      [
        'Annual GST Audit & Reconciliation (GSTR-9 / 9C)',
        [
          'Audited financial statements (Balance Sheet, P&L, Notes to Accounts)',
          'Turnover reconciliation between books of account and GST returns filed',
          'Rate-wise tax liability reconciliation and differential payment challans via DRC-03',
          'ITC availed in GSTR-3B vs ITC reflected in GSTR-2A/2B'
        ]
      ]
    ]
  },
  {
    slug: 'audit-checklist',
    title: 'Statutory & Tax Audit Documentation Checklist',
    shortSummary: 'Key schedules, vouchers, and confirmations required for annual audit preparation.',
    category: 'Audit & Assurance',
    sections: [
      [
        'General & Organizational Records',
        [
          'Constitutional documents (MOA, AOA, Partnership Deed, Trust Deed)',
          'Statutory registers (Register of Members, Register of Directors & KMP, Register of Charges)',
          'Minutes books of Board Meetings, Committee Meetings, and General Meetings',
          'Significant contracts, vendor agreements, customer master agreements, and lease deeds'
        ]
      ],
      [
        'Financial Ledgers & Schedules',
        [
          'Final Trial Balance mapped with previous year comparative figures',
          'General Ledgers for all revenue, expense, asset, and liability accounts',
          'Bank Statements for all accounts for the complete 12 months with Bank Reconciliation Statements',
          'Direct balance confirmation letters from major trade debtors, creditors, and loan accounts',
          'Fixed Asset Register with depreciation calculation schedule as per Schedule II and Income Tax Act'
        ]
      ],
      [
        'Tax & Statutory Compliance Records',
        [
          'Monthly challans and quarterly returns for TDS (Form 24Q, 26Q, 27Q)',
          'Monthly GST return acknowledgements (GSTR-1, GSTR-3B) and annual reconciliation statements',
          'Provident Fund (PF), ESI, and Professional Tax monthly returns and payment receipts',
          'Advance tax challans and assessment orders of previous years'
        ]
      ],
      [
        'Inventory & Physical Verification',
        [
          'Year-end inventory valuation sheet with quantity, rate, and valuation methodology',
          'Physical stock count sheets signed by internal audit team or management',
          'List of slow-moving, non-moving, or obsolete inventory items with provisioning rationale',
          'Third-party stock confirmation for goods held at job-worker or consignee premises'
        ]
      ]
    ]
  },
  {
    slug: 'company-compliance-checklist',
    title: 'Company & LLP Annual Compliance Checklist',
    shortSummary: 'Statutory compliance requirements under Companies Act 2013 and LLP Act 2008.',
    category: 'Corporate Compliance',
    sections: [
      [
        'Annual Secretarial & Meeting Documentation',
        [
          'Notices, agenda, and signed minutes of all Board Meetings held during the financial year',
          'Notice, attendance slips, and signed minutes of the Annual General Meeting (AGM)',
          'Directors Report with statutory disclosures and Management Discussion & Analysis',
          'Form MBP-1 (Disclosure of interest by directors) and Form DIR-8 (Intimation of non-disqualification)'
        ]
      ],
      [
        'Annual Financial Filings (MCA)',
        [
          'Audited Financial Statements including Balance Sheet, P&L, Cash Flow, and Notes to Accounts',
          'Form AOC-4 (Filing of financial statements and other documents with Registrar)',
          'Form MGT-7 / MGT-7A (Annual Return of company)',
          'Form DPT-3 (Return of deposits and transactions not considered deposits)',
          'Form MSME-1 (Half-yearly return for outstanding dues to Micro and Small enterprises)'
        ]
      ],
      [
        'Director KYC & Statutory Filings',
        [
          'Annual DIR-3 KYC or DIR-3 KYC-WEB for all individuals holding DIN',
          'Digital Signature Certificates (DSC) validity and renewal tracking for signing directors',
          'Proof of registered office address verification if required under Form INC-22A'
        ]
      ],
      [
        'LLP Annual Compliances',
        [
          'Form 11 (Annual Return of Limited Liability Partnership) filed within 60 days of FY close',
          'Form 8 (Statement of Account & Solvency) filed within 30 days from the end of 6 months of FY close',
          'Contribution records and designated partner changes documentation'
        ]
      ]
    ]
  }
];

export const articles = [
  {
    slug: 'general-guidance-document-records',
    category: 'General Guidance',
    title: 'Organising financial and statutory records',
    date: '2026-11-18',
    author: 'R J R & Company',
    reading: '3 min read',
    summary: 'A practical overview of maintaining orderly records for accounting and compliance matters.',
    content: [
      'Good record maintenance helps reduce delays and makes supporting information easier to review. The exact records required depend on the nature of the engagement, applicable law and individual circumstances.',
      'Documents should be organised by financial year and category, with relevant source records retained for the periods required under applicable requirements.',
      'Physical and electronic records should have structured filing conventions, date tags, and designated confidential backups to ensure audit readiness and compliance continuity.'
    ]
  },
  {
    slug: 'income-tax-document-preparation',
    category: 'Income Tax',
    title: 'Preparing information for an income tax review',
    date: '2026-11-18',
    author: 'R J R & Company',
    reading: '4 min read',
    summary: 'Key information commonly collected before reviewing an income tax matter.',
    content: [
      'An income tax review generally begins with identifying the applicable assessment period and the types of income and transactions involved.',
      'Relevant source documents should be collected before preparation. A final checklist may vary based on the facts and applicable rules.',
      'Reconciliation between books of account, Annual Information Statement (AIS), Taxpayer Information Summary (TIS), and Form 26AS is an essential preliminary step to identify reported discrepancies before return submission.'
    ]
  },
  {
    slug: 'gst-record-organisation',
    category: 'GST',
    title: 'Organising GST sales and purchase records',
    date: '2026-11-18',
    author: 'R J R & Company',
    reading: '3 min read',
    summary: 'A general checklist for organising GST-related accounting records.',
    content: [
      'GST records should be organised with adequate separation between sales, purchases, tax documents and payment evidence.',
      'Applicability, document requirements and reporting dates should be verified from current official sources before reliance.',
      'Matching supplier tax invoices with auto-populated GSTR-2B credit registers prevents input tax credit discrepancies and minimizes notice risks during assessment proceedings.'
    ]
  },
  {
    slug: 'statutory-audit-preparations',
    category: 'Audit',
    title: 'Preliminary documentation for statutory audit engagements',
    date: '2026-11-18',
    author: 'R J R & Company',
    reading: '5 min read',
    summary: 'Understanding standard schedules and trial balance reconciliations for audit readiness.',
    content: [
      'Audit readiness requires systematic closing of periodic accounts, trial balance balancing, and ledger sub-schedules across all major balance sheet line items.',
      'Bank confirmations, physical inventory count sheets, and related-party transaction disclosures should be compiled prior to audit fieldwork.',
      'Clear documentation of accounting estimates, provisioning policies, and statutory compliance status significantly streamlines the independent audit review process.'
    ]
  },
  {
    slug: 'corporate-compliance-annual-filings',
    category: 'Corporate Compliance',
    title: 'Annual regulatory filing checklist for Companies and LLPs',
    date: '2026-11-18',
    author: 'R J R & Company',
    reading: '4 min read',
    summary: 'Key statutory timelines, board report mandates, and filing requirements under the Companies Act and LLP Act.',
    content: [
      'Companies and LLPs are subject to annual filing obligations including financial statements, annual returns, and statutory disclosures through the Ministry of Corporate Affairs portal.',
      'Proper maintenance of statutory registers, timely DIR-3 KYC validation, and systematic recording of board and general meeting minutes ensure regulatory good standing.',
      'Entities should monitor statutory due dates proactively to avoid additional fees and non-compliance penalties.'
    ]
  }
];

export const partnerData = {
  name: 'Partner Name',
  designation: 'Chartered Accountant',
  qualification: '[TO BE PROVIDED]',
  membershipNumber: '[TO BE PROVIDED]',
  areasOfPractice: '[TO BE PROVIDED]',
  professionalExperience: '[TO BE PROVIDED]',
  note: 'Partner credentials and designated profile photographs will be updated once officially furnished by the firm.'
};

export const socialLinks = {
  linkedin: '[Official LinkedIn URL]', // To be updated once official company LinkedIn profile is furnished
};

export const icaiDisclaimerText =
  "Disclaimer: As per the guidelines of the Institute of Chartered Accountants of India (ICAI), Chartered Accountants are not permitted to solicit work and advertise. By accessing this website (www.rjrcompany.in), the user acknowledges that the information provided is solely for informational purposes and is being made available at the user's specific request. Nothing on this website constitutes an advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from RJR & Company or any of its members.";

export const officeInfo = {
  name: 'RJR & Company',
  type: 'Chartered Accountants',
  headOfficeTitle: 'Head Office',
  address: '[Office Address line 1, Building Name, Street / Landmark, City, State — PIN Code] [TO BE PROVIDED]',
  city: '[City, State] [TO BE PROVIDED]',
  state: '[State] [TO BE PROVIDED]',
  pinCode: '[PIN Code] [TO BE PROVIDED]',
  phone: '[Office Phone / Landline] [TO BE PROVIDED]',
  email: '[Official Firm Email] [TO BE PROVIDED]',
  workingHours: 'Monday to Saturday: 10:00 AM – 6:30 PM [Indicative / Subject to confirmation]',
  sundayStatus: 'Closed',
  googleMapsUrl: '', // Ready to embed once verified coordinates are supplied
  complianceDisclaimer: 'Consultations and communications are conducted strictly in adherence to the Code of Ethics established by The Institute of Chartered Accountants of India (ICAI).'
};

export const complianceMonths = [
  { key: '2026-10', label: 'October 2026', monthName: 'October', year: 2026 },
  { key: '2026-11', label: 'November 2026', monthName: 'November', year: 2026 },
  { key: '2026-12', label: 'December 2026', monthName: 'December', year: 2026 },
  { key: '2027-01', label: 'January 2027', monthName: 'January', year: 2027 },
];

export const complianceCalendar = {
  '2026-11': [
    {
      id: 'nov-07-tds',
      date: '07 Nov 2026',
      day: '07',
      month: 'NOV',
      compliance: 'TDS / TCS Deposit Challan (ITNS 281)',
      category: 'TDS/TCS',
      applicableTo: 'All Corporate & Non-Corporate Deductors',
      description: 'Deposit of Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) for transactions executed in October 2026.',
      status: 'Completed',
      extended: false
    },
    {
      id: 'nov-11-gstr1',
      date: '11 Nov 2026',
      day: '11',
      month: 'NOV',
      compliance: 'GSTR-1 (Outward Supplies Return)',
      category: 'GST',
      applicableTo: 'Regular Taxpayers with Monthly Filing',
      description: 'Filing of details of outward supplies of goods and services for October 2026 by taxpayers with turnover exceeding ₹5 Crore or opting for monthly filing.',
      status: 'Completed',
      extended: false
    },
    {
      id: 'nov-13-iff',
      date: '13 Nov 2026',
      day: '13',
      month: 'NOV',
      compliance: 'GSTR-6 / IFF (Invoice Furnishing Facility)',
      category: 'GST',
      applicableTo: 'Input Service Distributors & QRMP Taxpayers',
      description: 'Return filing for Input Service Distributors (ISD) and optional B2B invoice upload under Invoice Furnishing Facility for QRMP filers for October 2026.',
      status: 'Completed',
      extended: false
    },
    {
      id: 'nov-15-form16a',
      date: '15 Nov 2026',
      day: '15',
      month: 'NOV',
      compliance: 'TDS Certificate Issuance (Form 16A)',
      category: 'TDS/TCS',
      applicableTo: 'All Deductors deducting tax other than salary',
      description: 'Quarterly issuance of Form 16A certificates to deductees for tax deducted in the quarter ended 30 September 2026.',
      status: 'Completed',
      extended: false
    },
    {
      id: 'nov-20-gstr3b',
      date: '20 Nov 2026',
      day: '20',
      month: 'NOV',
      compliance: 'GSTR-3B (Summary Return & Tax Payment)',
      category: 'GST',
      applicableTo: 'Regular Taxpayers with Monthly Filing',
      description: 'Monthly summary return of outward and inward supplies along with payment of statutory tax liability for the month of October 2026.',
      status: 'Upcoming',
      extended: false
    },
    {
      id: 'nov-25-pmt06',
      date: '25 Nov 2026',
      day: '25',
      month: 'NOV',
      compliance: 'GST PMT-06 Challan Payment',
      category: 'GST',
      applicableTo: 'Taxpayers under QRMP Scheme',
      description: 'Deposit of 35% fixed sum or self-assessed tax liability for the month of October 2026 under the Quarterly Return Monthly Payment (QRMP) scheme.',
      status: 'Upcoming',
      extended: false
    },
    {
      id: 'nov-30-challan280',
      date: '30 Nov 2026',
      day: '30',
      month: 'NOV',
      compliance: 'Equalisation Levy & Form 3CEAD Reporting',
      category: 'Direct Tax',
      applicableTo: 'Specified Corporate Entities & International MNEs',
      description: 'Annual compliance filing for Equalisation Levy and Form 3CEAD under Section 286 for relevant multinational enterprise groups.',
      status: 'Upcoming',
      extended: false
    }
  ],
  '2026-10': [
    {
      id: 'oct-07-tds',
      date: '07 Oct 2026',
      day: '07',
      month: 'OCT',
      compliance: 'TDS / TCS Deposit Challan (ITNS 281)',
      category: 'TDS/TCS',
      applicableTo: 'All Deductors',
      description: 'Deposit of tax deducted/collected at source for transactions in September 2026.',
      status: 'Completed',
      extended: false
    },
    {
      id: 'oct-11-gstr1',
      date: '11 Oct 2026',
      day: '11',
      month: 'OCT',
      compliance: 'GSTR-1 (Monthly Outward Supplies)',
      category: 'GST',
      applicableTo: 'Regular Monthly Filers',
      description: 'Details of outward supplies of goods and services for September 2026.',
      status: 'Completed',
      extended: false
    },
    {
      id: 'oct-20-gstr3b',
      date: '20 Oct 2026',
      day: '20',
      month: 'OCT',
      compliance: 'GSTR-3B (Summary Return & Tax Payment)',
      category: 'GST',
      applicableTo: 'Regular Monthly Taxpayers',
      description: 'Summary return and statutory tax settlement for September 2026.',
      status: 'Completed',
      extended: false
    },
    {
      id: 'oct-31-tds-q2',
      date: '31 Oct 2026',
      day: '31',
      month: 'OCT',
      compliance: 'Quarterly TDS/TCS Statement (Forms 24Q, 26Q, 27Q)',
      category: 'TDS/TCS',
      applicableTo: 'All Deductors',
      description: 'Quarterly return filing for tax deducted at source during Q2 (July – September 2026).',
      status: 'Completed',
      extended: false
    }
  ],
  '2026-12': [
    {
      id: 'dec-07-tds',
      date: '07 Dec 2026',
      day: '07',
      month: 'DEC',
      compliance: 'TDS / TCS Deposit Challan',
      category: 'TDS/TCS',
      applicableTo: 'All Deductors',
      description: 'Deposit of tax deducted/collected at source for transactions in November 2026.',
      status: 'Upcoming',
      extended: false
    },
    {
      id: 'dec-11-gstr1',
      date: '11 Dec 2026',
      day: '11',
      month: 'DEC',
      compliance: 'GSTR-1 Monthly Return',
      category: 'GST',
      applicableTo: 'Regular Monthly Filers',
      description: 'Details of outward supplies of goods and services for November 2026.',
      status: 'Upcoming',
      extended: false
    },
    {
      id: 'dec-15-advancetax',
      date: '15 Dec 2026',
      day: '15',
      month: 'DEC',
      compliance: 'Advance Tax 3rd Instalment (75% of total tax liability)',
      category: 'Direct Tax',
      applicableTo: 'All Assessees liable for Advance Tax (Corporate & Non-Corporate)',
      description: 'Payment of third instalment (cumulative 75%) of advance income tax for Assessment Year 2027-28.',
      status: 'Upcoming',
      extended: false
    },
    {
      id: 'dec-20-gstr3b',
      date: '20 Dec 2026',
      day: '20',
      month: 'DEC',
      compliance: 'GSTR-3B Monthly Return',
      category: 'GST',
      applicableTo: 'Regular Taxpayers with Monthly Filing',
      description: 'Summary return and tax settlement for November 2026.',
      status: 'Upcoming',
      extended: false
    },
    {
      id: 'dec-31-gstr9',
      date: '31 Dec 2026',
      day: '31',
      month: 'DEC',
      compliance: 'GST Annual Return (GSTR-9 & GSTR-9C Reconciliation)',
      category: 'GST',
      applicableTo: 'Taxpayers crossing statutory turnover thresholds for FY 2025-26',
      description: 'Annual return and self-certified reconciliation statement for the preceding financial year.',
      status: 'Upcoming',
      extended: false
    }
  ],
  '2027-01': [
    {
      id: 'jan-07-tds',
      date: '07 Jan 2027',
      day: '07',
      month: 'JAN',
      compliance: 'TDS / TCS Deposit Challan (ITNS 281)',
      category: 'TDS/TCS',
      applicableTo: 'All Deductors',
      description: 'Deposit of tax deducted/collected at source for transactions in December 2026.',
      status: 'Upcoming',
      extended: false
    },
    {
      id: 'jan-11-gstr1',
      date: '11 Jan 2027',
      day: '11',
      month: 'JAN',
      compliance: 'GSTR-1 Monthly Return',
      category: 'GST',
      applicableTo: 'Regular Monthly Filers',
      description: 'Details of outward supplies of goods and services for December 2026.',
      status: 'Upcoming',
      extended: false
    },
    {
      id: 'jan-20-gstr3b',
      date: '20 Jan 2027',
      day: '20',
      month: 'JAN',
      compliance: 'GSTR-3B Monthly Return',
      category: 'GST',
      applicableTo: 'Regular Monthly Filers',
      description: 'Summary return and tax settlement for December 2026.',
      status: 'Upcoming',
      extended: false
    },
    {
      id: 'jan-31-tds-q3',
      date: '31 Jan 2027',
      day: '31',
      month: 'JAN',
      compliance: 'Quarterly TDS Statement (Forms 24Q, 26Q, 27Q)',
      category: 'TDS/TCS',
      applicableTo: 'All Deductors',
      description: 'Quarterly return filing for tax deducted at source during Q3 (October – December 2026).',
      status: 'Upcoming',
      extended: false
    }
  ]
};

export const regulatoryUpdates = [
  {
    id: 'reg-update-1',
    authority: 'CBDT',
    date: '18 Nov 2026',
    title: 'Advisory on Reconciliation of High-Value Transactions in AIS / TIS',
    category: 'Direct Tax',
    summary: 'Central Board of Direct Taxes issued practical guidance on reviewing discrepancies between reported financial transactions and taxpayer self-disclosures.',
    applicability: 'Individual and corporate assessees with reported foreign remittances, high-value securities transactions, or property dealings.',
    sourceName: 'Income Tax Department (e-Filing Portal)',
    sourceUrl: 'https://www.incometax.gov.in',
    fullDetails: [
      'The Income Tax Department provides taxpayers an opportunity to electronically submit feedback on reported information in the Annual Information Statement (AIS).',
      'Assessees are encouraged to periodically review their AIS and Taxpayer Information Summary (TIS) before filing returns or responding to verification notices.',
      'Reconciliation prior to return filing helps prevent automated computer-assisted scrutiny selection (CASS) notices.'
    ]
  },
  {
    id: 'reg-update-2',
    authority: 'CBIC',
    date: '14 Nov 2026',
    title: 'Input Tax Credit (ITC) Verification & Auto-population under GSTR-2B',
    category: 'GST',
    summary: 'Standard operating procedure reaffirming that ITC entitlement is restricted to valid invoices uploaded by corresponding suppliers in GSTR-1/IFF.',
    applicability: 'All regular registered GST businesses claiming input tax credit on purchases.',
    sourceName: 'Central Board of Indirect Taxes and Customs (CBIC)',
    sourceUrl: 'https://www.cbic.gov.in',
    fullDetails: [
      'Under Rule 36(4) of CGST Rules, registered persons cannot avail input tax credit unless corresponding details have been furnished by suppliers in Form GSTR-1 or using IFF.',
      'Taxpayers must perform periodic 2B reconciliations to ensure non-compliant vendor invoices are identified and pursued before return filing.',
      'Interest provisions under Section 50 apply on wrongful availment and utilisation of input tax credit.'
    ]
  },
  {
    id: 'reg-update-3',
    authority: 'MCA',
    date: '08 Nov 2026',
    title: 'Annual Statutory Filings and Director KYC (DIR-3 KYC) Compliance Advisory',
    category: 'Corporate Law',
    summary: 'Ministry of Corporate Affairs advisory on the maintenance of active Director Identification Numbers (DINs) and timely compliance with financial statements filing.',
    applicability: 'All incorporated Companies, LLPs, and individuals holding DIN/DPIN.',
    sourceName: 'Ministry of Corporate Affairs (MCA Portal)',
    sourceUrl: 'https://www.mca.gov.in',
    fullDetails: [
      'Holders of DIN are required to file Form DIR-3 KYC annually to maintain their DIN in active status.',
      'Deactivated DINs prevent directors from filing statutory forms, participating in corporate board resolutions, or executing company filings.',
      'Companies are advised to ensure compliance with Forms AOC-4 and MGT-7 within the prescribed statutory timeframe post-AGM.'
    ]
  },
  {
    id: 'reg-update-4',
    authority: 'RBI',
    date: '02 Nov 2026',
    title: 'Reporting Guidelines for Cross-Border Transactions & Foreign Remittances',
    category: 'FEMA/RBI',
    summary: 'Reserve Bank of India reminder on compliance with Foreign Exchange Management Act (FEMA) reporting through the FIRMS portal.',
    applicability: 'Companies receiving Foreign Direct Investment (FDI) or making Overseas Direct Investment (ODI).',
    sourceName: 'Reserve Bank of India (RBI)',
    sourceUrl: 'https://www.rbi.org.in',
    fullDetails: [
      'Reporting of foreign investment through Form FC-GPR and annual return on Foreign Liabilities and Assets (FLA) must strictly adhere to regulatory timelines.',
      'Delay in filing reporting forms attracts Late Submission Fee (LSF) provisions under FEMA regulations.',
      'Entities must ensure certified Chartered Accountant valuation certificates are enclosed where shares are allotted to non-residents.'
    ]
  },
  {
    id: 'reg-update-5',
    authority: 'ICAI',
    date: '28 Oct 2026',
    title: 'Mandatory Unique Document Identification Number (UDIN) Verification',
    category: 'Audit & Governance',
    summary: 'ICAI notification reiterating mandatory generation and verification of UDIN for all audit reports, certifications, and attestations.',
    applicability: 'Practicing Chartered Accountants and regulatory authorities verifying signed certificates.',
    sourceName: 'The Institute of Chartered Accountants of India (ICAI)',
    sourceUrl: 'https://www.icai.org',
    fullDetails: [
      'UDIN was introduced to curb the menace of fake certifications and fraudulent representation by unauthorized persons claiming to be Chartered Accountants.',
      'Regulators, banks, and authorities can independently verify the authenticity of CA-attested documents by entering the 18-digit UDIN on the official verification portal.',
      'Failure to generate UDIN within permissible timeframes amounts to professional misconduct under ICAI regulations.'
    ]
  }
];

export const officialGovernmentLinks = [
  {
    id: 'link-incometax',
    name: 'Income Tax e-Filing Portal',
    portalCategory: 'Direct Taxes',
    description: 'Official portal for filing annual returns, checking tax credits (26AS/AIS), and direct tax compliance communications.',
    url: 'https://www.incometax.gov.in',
    badge: 'CBDT / Ministry of Finance'
  },
  {
    id: 'link-gst',
    name: 'Goods & Services Tax (GST) Portal',
    portalCategory: 'Indirect Taxes',
    description: 'Official portal for GST registration, return filing (GSTR-1, 3B, 9), input tax credit ledger review, and challan payments.',
    url: 'https://www.gst.gov.in',
    badge: 'CBIC / GSTN'
  },
  {
    id: 'link-mca',
    name: 'Ministry of Corporate Affairs (MCA)',
    portalCategory: 'Corporate Governance',
    description: 'Official government portal for company and LLP incorporations, statutory annual filings, and DIN/DIR verifications.',
    url: 'https://www.mca.gov.in',
    badge: 'MCA / Government of India'
  },
  {
    id: 'link-icai',
    name: 'Institute of Chartered Accountants of India (ICAI)',
    portalCategory: 'Regulatory & Professional Standards',
    description: 'Statutory body established by an Act of Parliament for regulating the profession of Chartered Accountants in India.',
    url: 'https://www.icai.org',
    badge: 'ICAI Statutory Authority'
  },
  {
    id: 'link-dgft',
    name: 'Directorate General of Foreign Trade (DGFT)',
    portalCategory: 'Foreign Trade & Exim',
    description: 'Official government portal for Import Export Code (IEC) issuance, trade policies, export incentive schemes, and customs licenses.',
    url: 'https://www.dgft.gov.in',
    badge: 'Ministry of Commerce & Industry'
  }
];

export const jobOpenings = [
  {
    id: 'opening-ca-qualified',
    title: 'Qualified Chartered Accountant',
    category: 'Qualified CA',
    department: 'Audit, Assurance & Tax Advisory',
    location: '[City, State] / Head Office',
    type: 'Full-time Professional',
    eligibility: 'Member of the Institute of Chartered Accountants of India (ACA / FCA). Prior experience in statutory audit and direct/indirect taxation preferred.',
    responsibilities: [
      'Execution and review of statutory and tax audit assignments in accordance with ICAI Standards on Auditing.',
      'Supervision of income tax and GST return computations, verification files, and regulatory replies.',
      'Direct coordination with client accounting heads and corporate management on accounting compliance.',
      'Guiding article trainees and audit staff on audit methodology, documentation, and working papers.'
    ],
    preferredSkills: [
      'In-depth knowledge of Indian AS / AS and ICAI Standards on Auditing',
      'Proficiency in direct tax provisions, TDS, and GST laws',
      'Analytical aptitude with accounting and audit management tools'
    ],
    howToApply: 'Submit your resume and brief professional background using the application form below.'
  },
  {
    id: 'opening-semi-qualified',
    title: 'Semi-Qualified / Audit Assistant',
    category: 'Semi-Qualified / Audit Assistant',
    department: 'Accounting & Compliance',
    location: '[City, State] / Head Office',
    type: 'Full-time Professional',
    eligibility: 'B.Com / M.Com / Semi-Qualified CA (Inter / IPCC) with practical knowledge in bookkeeping and compliance routines.',
    responsibilities: [
      'Preparation of primary accounting ledgers and bank reconciliation statements (BRS).',
      'Assisting in the preparation of monthly GST summaries, TDS computations, and advance tax schedules.',
      'Compilation of audit working papers, fixed asset registers, and verification schedules for partner review.',
      'Supporting corporate secretarial filing schedules and statutory document indexing.'
    ],
    preferredSkills: [
      'Practical proficiency in Tally, ERP, and advanced MS Excel',
      'Basic understanding of TDS, GST, and corporate accounting rules',
      'Disciplined record maintenance and attention to numerical accuracy'
    ],
    howToApply: 'Submit your CV with details of prior experience and academic background.'
  },
  {
    id: 'opening-article-assistant',
    title: 'ICAI Article Assistant',
    category: 'Article Assistant',
    department: 'Articleship Training Program',
    location: '[City, State] / Head Office',
    type: 'Articleship Trainee (ICAI Registered)',
    eligibility: 'Eligible for Articleship registration as per ICAI norms (Cleared either or both Groups of CA Intermediate / Direct Entry).',
    responsibilities: [
      'Practical exposure to statutory audit vouching, ledger scrutiny, and physical inventory counts.',
      'Assisting in computation of direct and indirect taxes, preparation of challans, and return drafts.',
      'Learning compliance procedures under the Companies Act, LLP Act, and MCA filings.',
      'Maintaining standardized audit working paper files and compliance dossiers under partner mentorship.'
    ],
    preferredSkills: [
      'Genuine dedication to professional learning and ethical standards',
      'Working knowledge of MS Office (Excel, Word)',
      'Basic conceptual clarity in financial accounting and auditing'
    ],
    howToApply: 'Submit your academic credentials, ICAI registration details, and resume using the form below.'
  }
];
