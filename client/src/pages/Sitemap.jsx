import { Link } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  Shield,
  FileText,
  Briefcase,
  BookOpen,
  FolderOpen,
  Building,
  CheckCircle2,
  Calendar,
  Globe
} from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { images, services, checklists, articles } from '../data';

export default function Sitemap() {
  const sitemapSections = [
    {
      category: 'Primary Firm Navigation',
      icon: <Building size={20} className="section-icon" aria-hidden="true" />,
      description: 'Core institutional and practice overview sections of the firm website.',
      links: [
        { title: 'Home', path: '/', desc: 'Practice introduction, core service pillars, and firm credentials' },
        { title: 'About Us', path: '/about', desc: 'Firm background, practice philosophy, and ICAI regulatory standing' },
        { title: 'Practice Areas', path: '/services', desc: 'Comprehensive directory of audit, taxation, and advisory services' },
        { title: 'Partners', path: '/partners', desc: 'Profiles of designated Chartered Accountants and practice heads' },
        { title: 'Knowledge Bank', path: '/knowledge-bank', desc: 'Compliance calendar, regulatory updates, and official portal directory' },
        { title: 'Careers & Articleship', path: '/careers', desc: 'Current professional vacancies, articleship training, and PDF application' },
        { title: 'Contact Us & Locations', path: '/contact', desc: 'Office particulars, working hours, directions, and inquiry submission' },
        { title: 'Client Portal', path: '/client-portal', desc: 'Authorized client workspace for secure file sharing and status tracking' },
      ],
    },
    {
      category: 'Practice Areas & Specialized Engagements',
      icon: <Briefcase size={20} className="section-icon" aria-hidden="true" />,
      description: 'Dedicated practice domains and statutory service scopes.',
      links: [
        { title: 'Audit & Assurance', path: '/services/audit-assurance', desc: 'Statutory audit, tax audit, internal financial controls review' },
        { title: 'Income Tax', path: '/services/income-tax', desc: 'Corporate and individual direct tax reporting, TDS, and advance tax' },
        { title: 'GST & Indirect Tax', path: '/services/gst', desc: 'GST registrations, return compliance, input tax credit review' },
        { title: 'Accounting & Bookkeeping', path: '/services/accounting', desc: 'Financial statements compilation, ledger maintenance, MIS reports' },
        { title: 'Company & LLP Compliance', path: '/services/company-compliance', desc: 'MCA filings, secretarial documentation, director KYC' },
        { title: 'Strategic Business Advisory', path: '/services/business-advisory', desc: 'Financial health review, capital budgeting, virtual CFO advisory' },
      ],
    },
    {
      category: 'Client Worksheets & Document Checklists',
      icon: <FolderOpen size={20} className="section-icon" aria-hidden="true" />,
      description: 'Preparation worksheets and statutory schedules for clients and assessees.',
      links: [
        { title: 'All Document Checklists', path: '/resources', desc: 'Comprehensive index of client documentation schedules' },
        { title: 'Income Tax Return Checklist', path: '/resources/income-tax-checklist', desc: 'Required documentation for ITR filing and 26AS/AIS reconciliation' },
        { title: 'GST Compliance Checklist', path: '/resources/gst-checklist', desc: 'Sales, purchases, and GSTR-2B input tax credit verification' },
        { title: 'Statutory Audit Checklist', path: '/resources/audit-checklist', desc: 'Trial balance, bank reconciliation, and asset registers' },
        { title: 'Company Annual Filing Checklist', path: '/resources/company-compliance-checklist', desc: 'MCA annual returns, board minutes, and statutory registers' },
      ],
    },
    {
      category: 'Knowledge Bank & Regulatory Guidance',
      icon: <BookOpen size={20} className="section-icon" aria-hidden="true" />,
      description: 'Statutory compliance tracking and technical notes prepared by Chartered Accountants.',
      links: [
        { title: 'Monthly Compliance Calendar', path: '/knowledge-bank', desc: 'Statutory due dates for TDS, GST, advance tax, and MCA filings' },
        { title: 'Regulatory Circulars & Updates', path: '/knowledge-bank', desc: 'Objective summaries of CBDT, CBIC, MCA, and RBI notifications' },
        { title: 'Government Portals Directory', path: '/knowledge-bank', desc: 'Direct links to official statutory and regulatory websites' },
        ...articles.map((art) => ({
          title: art.title,
          path: `/insights/${art.slug}`,
          desc: `${art.category} • ${art.reading} • Technical guidance note`,
        })),
      ],
    },
    {
      category: 'Legal, Ethics & Policy Notices',
      icon: <Shield size={20} className="section-icon" aria-hidden="true" />,
      description: 'Mandatory statutory notices and website governance policies.',
      links: [
        { title: 'Privacy Notice', path: '/privacy', desc: 'Client confidentiality and data protection standards' },
        { title: 'Terms of Use', path: '/terms-of-use', desc: 'Informational terms governing website navigation and access' },
        { title: 'ICAI Statutory Disclaimer', path: '/disclaimer', desc: 'Statutory notice under regulations of the Institute of Chartered Accountants of India' },
        { title: 'Cookie Policy', path: '/cookie-policy', desc: 'Essential cookies and browser session security preferences' },
      ],
    },
  ];

  return (
    <div className="sitemap-page-view">
      <SEO
        title="Website Sitemap"
        description="RJR & Company — Human-readable public directory and structured sitemap of all practice areas, client resources, knowledge bank sections, and legal disclosures."
      />

      <PageHero
        eyebrow="Website Directory"
        title="Public Website Sitemap"
        intro="Structured human-readable directory of all public pages, practice areas, compliance checklists, and regulatory resources on this website."
        image={images.accounting}
        alt="RJR & Company website structured index and regulatory documentation"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Sitemap' }]}
      />

      <section className="section sitemap-content-section">
        <div className="container">
          <div className="sitemap-sections-grid">
            {sitemapSections.map((sec, idx) => (
              <div key={idx} className="sitemap-category-card">
                <div className="sitemap-card-header">
                  {sec.icon}
                  <div>
                    <h2 className="sitemap-category-title">{sec.category}</h2>
                    <p className="sitemap-category-desc">{sec.description}</p>
                  </div>
                </div>

                <ul className="sitemap-links-list">
                  {sec.links.map((item, itemIdx) => (
                    <li key={itemIdx} className="sitemap-link-item">
                      <Link to={item.path} className="sitemap-item-link">
                        <div className="link-title-row">
                          <span className="link-title">{item.title}</span>
                          <span className="link-route-badge">{item.path}</span>
                        </div>
                        <p className="link-summary">{item.desc}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="sitemap-footer-note">
            <Shield size={18} className="shield-icon" aria-hidden="true" />
            <p>
              <strong>Notice:</strong> This sitemap indexes public informational pages only. Authenticated client portal workflows and private communication sessions are restricted to authorized clients and personnel.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
