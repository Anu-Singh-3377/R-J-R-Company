import { randomUUID } from 'node:crypto';
import { services as defaultServices } from '../data.js';

// Modular in-memory store with support for database expansion
class DataStore {
  constructor() {
    this.services = [...defaultServices];
    this.enquiries = [];
    this.applications = [];
    this.documents = [];
    this.insights = [
      {
        id: '1',
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
          'Physical and electronic records should have structured filing conventions, date tags, and designated confidential backups.'
        ]
      },
      {
        id: '2',
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
          'Reconciliation between books of account, Annual Information Statement (AIS), Taxpayer Information Summary (TIS), and Form 26AS is an important preliminary step.'
        ]
      },
      {
        id: '3',
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
          'Matching supplier tax invoices with auto-populated GSTR-2B credit registers prevents input tax credit discrepancies.'
        ]
      },
      {
        id: '4',
        slug: 'statutory-audit-preparations',
        category: 'Audit',
        title: 'Preliminary documentation for statutory audit engagements',
        date: '2026-11-18',
        author: 'R J R & Company',
        reading: '5 min read',
        summary: 'Understanding standard schedules and trial balance reconciliations for audit readiness.',
        content: [
          'Audit readiness requires systematic closing of periodic accounts, trial balance balancing, and ledger sub-schedules.',
          'Bank confirmations, physical inventory count sheets, and related-party transaction disclosures should be compiled prior to audit fieldwork.'
        ]
      },
      {
        id: '5',
        slug: 'corporate-compliance-annual-filings',
        category: 'Corporate Compliance',
        title: 'Annual regulatory filing checklist for Companies and LLPs',
        date: '2026-11-18',
        author: 'R J R & Company',
        reading: '4 min read',
        summary: 'Key statutory timelines, board report mandates, and filing requirements under the Companies Act and LLP Act.',
        content: [
          'Companies and LLPs are subject to annual filing obligations including financial statements, annual returns, and statutory disclosures.',
          'Proper maintenance of statutory registers and minutes of board and general meetings ensures regulatory compliance.'
        ]
      }
    ];
    this.jobs = [
      {
        id: 'job-1',
        title: 'Articleship Trainee (CA Inter / IPCC)',
        department: 'Audit & Taxation',
        location: 'Head Office',
        type: 'Full-time Trainee',
        eligibility: 'Cleared either or both groups of CA Intermediate (IPCC) under ICAI regulations.',
        responsibilities: [
          'Assisting in statutory audit procedures, vouching, and analytical review of accounting ledgers.',
          'Preparation of draft income tax computations and verification of supporting documentation.',
          'Assistance in filing GST monthly/quarterly returns and bank reconciliations.',
          'Maintenance of audit working papers and compliance files.'
        ],
        howToApply: 'Submit your resume along with CA Intermediate marksheets through the career application form below.'
      },
      {
        id: 'job-2',
        title: 'Audit & Accounts Assistant',
        department: 'Accounting & Compliance',
        location: 'Head Office',
        type: 'Full-time',
        eligibility: 'B.Com / M.Com / Semi-Qualified with 1-2 years experience in tally or accounting software.',
        responsibilities: [
          'Bookkeeping and maintenance of primary accounting records in compliance with Indian Accounting Standards.',
          'Preparation of monthly TDS, GST, and payroll summaries.',
          'Drafting quarterly and annual financial statements for review by the engagement partner.'
        ],
        howToApply: 'Submit your CV with details of prior accounting software experience and work history.'
      }
    ];
  }

  // Enquiries
  addEnquiry(data) {
    const record = {
      id: randomUUID(),
      ...data,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    this.enquiries.push(record);
    return record;
  }

  getEnquiries() {
    return this.enquiries;
  }

  // Applications
  addApplication(data) {
    const record = {
      id: randomUUID(),
      ...data,
      status: 'received',
      createdAt: new Date().toISOString()
    };
    this.applications.push(record);
    return record;
  }

  // Services
  getServices() {
    return this.services;
  }

  getServiceBySlug(slug) {
    return this.services.find(s => s.slug === slug);
  }

  // Insights
  getInsights() {
    return this.insights;
  }

  getInsightBySlug(slug) {
    return this.insights.find(a => a.slug === slug);
  }

  // Jobs
  getJobs() {
    return this.jobs;
  }

  getJobById(id) {
    return this.jobs.find(j => j.id === id);
  }

  // Documents
  addDocument(doc) {
    const record = {
      id: randomUUID(),
      ...doc,
      uploadedAt: new Date().toISOString()
    };
    this.documents.push(record);
    return record;
  }

  getDocuments() {
    return this.documents;
  }

  deleteDocument(id) {
    const index = this.documents.findIndex(d => d.id === id);
    if (index === -1) return false;
    this.documents.splice(index, 1);
    return true;
  }
}

export const store = new DataStore();
