import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  FileText,
  BarChart3,
  Landmark,
  Scale,
  Lock,
  ChevronDown,
  Building2,
  CheckCircle2,
  ChevronRight,
  FolderOpen,
  Award,
  Clock,
  FileCheck2,
  Calendar,
  MapPin
} from 'lucide-react';
import SEO from '../components/SEO';
import ImageWithFallback from '../components/ImageWithFallback';
import ServiceCard from '../components/ServiceCard';
import ServiceSelector from '../components/ServiceSelector';
import ArticleCard from '../components/ArticleCard';
import ChecklistAccordion from '../components/ChecklistAccordion';
import { firmData, images, services, articles, checklists, officialResources } from '../data';

export default function Home() {
  const [activeChecklistCategory, setActiveChecklistCategory] = useState(0);

  const approachPillars = [
    {
      num: '01',
      title: 'Accuracy',
      desc: 'Rigorous application of accounting standards, tax laws, and audit procedures with meticulous attention to detail.'
    },
    {
      num: '02',
      title: 'Confidentiality',
      desc: 'Strict information security and professional confidentiality protocols safeguarding all client data.'
    },
    {
      num: '03',
      title: 'Documentation',
      desc: 'Systematic audit trail maintenance and organized supporting schedules adhering to ICAI guidance.'
    },
    {
      num: '04',
      title: 'Regulatory Awareness',
      desc: 'Continuous tracking of statutory amendments, circulars, and notifications across direct and indirect taxation.'
    },
    {
      num: '05',
      title: 'Professional Communication',
      desc: 'Clear, objective, and timely reporting to ensure clients maintain structured compliance.'
    }
  ];

  const currentChecklist = checklists[activeChecklistCategory] || checklists[0];

  return (
    <div className="home-page-view">
      <SEO
        title=""
        description="R J R & Company, Chartered Accountants — professional accounting, taxation, audit and regulatory compliance services."
      />

      {/* =========================================================================
          HERO SECTION (EXECUTIVE TWO-COLUMN COMPOSITION)
          ========================================================================= */}
      <section className="hero-executive-section" aria-label="Introduction to RJR & Company">
        <div className="container hero-executive-container">
          <div className="hero-text-col">
            <div className="hero-firm-badge">
              <span className="badge-bullet" aria-hidden="true" />
              <span className="badge-text">Chartered Accountants &bull; Practice Overview</span>
            </div>

            <div className="hero-identity-group">
              <h1 className="hero-primary-headline">
                <span className="hero-brand-name">RJR &amp; Company</span>
                <span className="hero-brand-separator" aria-hidden="true">|</span>
                <span className="hero-brand-designation">Chartered Accountants</span>
              </h1>
              <p className="hero-core-service-line">
                Audit, Taxation, and Financial Advisory.
              </p>
            </div>

            <p className="hero-supporting-description">
              Providing structured statutory compliance, assurance, and strategic advisory services to corporations, SMEs, startups, and non-profit entities across India.
            </p>

            <div className="hero-actions-row">
              <Link className="button primary hero-action-primary" to="/services">
                <span>Explore Practice Areas</span>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link className="button outline-primary hero-action-secondary" to="/contact">
                <span>Contact Our Office</span>
              </Link>
            </div>

            <div className="hero-factual-highlights" aria-label="Key professional practice domains">
              <div className="hero-highlight-item">
                <ShieldCheck size={16} className="hero-highlight-icon" aria-hidden="true" />
                <span>Statutory Assurance</span>
              </div>
              <span className="hero-highlight-separator" aria-hidden="true">&bull;</span>
              <div className="hero-highlight-item">
                <FileText size={16} className="hero-highlight-icon" aria-hidden="true" />
                <span>Direct &amp; Indirect Taxation</span>
              </div>
              <span className="hero-highlight-separator" aria-hidden="true">&bull;</span>
              <div className="hero-highlight-item">
                <Scale size={16} className="hero-highlight-icon" aria-hidden="true" />
                <span>Corporate Secretarial</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-col">
            <div className="hero-visual-frame">
              <div className="hero-image-container">
                <ImageWithFallback
                  src={images.home}
                  alt="Chartered Accountants workspace with financial statements, tax ledgers, and analytical tools"
                  className="hero-office-image"
                  loading="eager"
                />
                <div className="hero-image-ambient-gradient" aria-hidden="true" />
              </div>

              {/* Institutional Card overlay */}
              <div className="hero-card-badge">
                <div className="hero-badge-icon-box" aria-hidden="true">
                  <Landmark size={20} />
                </div>
                <div className="hero-badge-details">
                  <span className="hero-badge-label">Regulatory Standards</span>
                  <strong className="hero-badge-value">Standards on Auditing (SAs) &bull; ICAI</strong>
                </div>
              </div>

              {/* Decorative understated framing geometry */}
              <div className="hero-frame-border-accent" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Information Bar */}
      <section className="quick-info-bar" aria-label="Core Practice Domains">
        <div className="container quick-grid">
          <div className="quick-item">
            <Landmark size={20} className="quick-icon" aria-hidden="true" />
            <div>
              <strong>Professional Services</strong>
              <small>Chartered Accountants</small>
            </div>
          </div>
          <div className="quick-item">
            <BarChart3 size={20} className="quick-icon" aria-hidden="true" />
            <div>
              <strong>Accounting &amp; Advisory</strong>
              <small>Financial Reporting</small>
            </div>
          </div>
          <div className="quick-item">
            <FileText size={20} className="quick-icon" aria-hidden="true" />
            <div>
              <strong>Taxation Services</strong>
              <small>Direct &amp; Indirect Tax</small>
            </div>
          </div>
          <div className="quick-item">
            <ShieldCheck size={20} className="quick-icon" aria-hidden="true" />
            <div>
              <strong>Audit &amp; Compliance</strong>
              <small>Statutory Standards</small>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ABOUT THE FIRM SECTION
          ========================================================================= */}
      <section className="section about-firm-section" id="about-firm" aria-label="About RJR & Company">
        <div className="container">
          {/* Section Header */}
          <div className="about-section-header">
            <div className="about-header-meta">
              <span className="eyebrow">Firm Overview &amp; Practice Framework</span>
              <h2 className="about-main-title">About RJR &amp; Company</h2>
            </div>
            <p className="about-editorial-lead">
              A structured approach to assurance, compliance and advisory.
            </p>
          </div>

          <div className="about-content-grid">
            {/* Left Column: Background, Core Philosophy, Operational Pillars */}
            <div className="about-narrative-col">
              <div className="about-narrative-block">
                <h3 className="about-subheading">Firm Background &amp; Profile</h3>
                <p className="about-text-lead">
                  RJR &amp; Company is an independent Chartered Accountancy practice providing assurance, tax compliance, corporate secretarial documentation, and financial advisory services. We serve corporate enterprises, small and medium enterprises (SMEs), emerging startups, and non-profit institutions with disciplined adherence to statutory frameworks.
                </p>
              </div>

              <div className="about-narrative-block">
                <h3 className="about-subheading">Core Practice Philosophy</h3>
                <blockquote className="about-philosophy-quote">
                  &ldquo;Our approach is grounded in accuracy, regulatory discipline, confidentiality, and timely execution. We work through structured processes designed to provide clarity, maintain appropriate documentation, and support informed financial and business decisions.&rdquo;
                </blockquote>
              </div>

              <div className="about-pillars-grid">
                <div className="about-pillar-card">
                  <div className="pillar-icon-box">
                    <CheckCircle2 size={18} className="pillar-icon" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="pillar-title">Accuracy &amp; Regulatory Discipline</h4>
                    <p className="pillar-desc">
                      Rigorous application of ICAI Standards on Auditing, accounting standards, and direct/indirect tax provisions.
                    </p>
                  </div>
                </div>

                <div className="about-pillar-card">
                  <div className="pillar-icon-box">
                    <Lock size={18} className="pillar-icon" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="pillar-title">Confidentiality &amp; Data Security</h4>
                    <p className="pillar-desc">
                      Strict professional secrecy and secure data management safeguarding proprietary financial records.
                    </p>
                  </div>
                </div>

                <div className="about-pillar-card">
                  <div className="pillar-icon-box">
                    <Clock size={18} className="pillar-icon" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="pillar-title">Structured Execution &amp; Timelines</h4>
                    <p className="pillar-desc">
                      Organized audit trails, standardized working papers, and disciplined deadline management for statutory filings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="about-cta-wrapper">
                <Link className="text-link about-full-profile-link" to="/about">
                  <span>Full Firm Profile, Governance &amp; Standards</span>
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Right Column: Realistic Photo + Regulatory Credentials Block */}
            <div className="about-aside-col">
              <div className="about-visual-card">
                <div className="about-image-wrapper">
                  <ImageWithFallback
                    src={images.about}
                    alt="Chartered Accountants reviewing financial documentation and regulatory compliance files"
                    className="about-firm-photo"
                  />
                  <div className="about-image-caption">
                    <FileCheck2 size={16} aria-hidden="true" />
                    <span>Document Review &amp; Working Paper Scrutiny</span>
                  </div>
                </div>
              </div>

              {/* Dedicated Factual Regulatory Credentials Block */}
              <div className="regulatory-credentials-panel" aria-label="Firm Regulatory Disclosures and Standing">
                <div className="credentials-header">
                  <Award size={18} className="credentials-header-icon" aria-hidden="true" />
                  <span className="credentials-title">Regulatory Disclosures &amp; Standing</span>
                </div>

                <div className="credentials-grid">
                  <div className="credential-fact-item">
                    <span className="fact-label">Firm Registration (FRN)</span>
                    <strong className="fact-value">{firmData.frn}</strong>
                    <span className="fact-sub">ICAI Firm Registration Number</span>
                  </div>

                  <div className="credential-fact-item">
                    <span className="fact-label">ICAI Peer Review</span>
                    <strong className="fact-value">{firmData.peerReviewStatus}</strong>
                    <span className="fact-sub">Practice Quality Review Board</span>
                  </div>

                  <div className="credential-fact-item">
                    <span className="fact-label">Empanelment Details</span>
                    <strong className="fact-value">{firmData.empanelment}</strong>
                    <span className="fact-sub">Official Institutional Panels</span>
                  </div>

                  <div className="credential-fact-item">
                    <span className="fact-label">Offices &amp; Network</span>
                    <strong className="fact-value">
                      HQ: {firmData.headOffice} &bull; Branch: {firmData.branchOffice}
                    </strong>
                    <span className="fact-sub">Established {firmData.establishmentYear}</span>
                  </div>
                </div>

                <div className="credentials-notice">
                  <p>
                    <strong>Statutory Note:</strong> RJR &amp; Company is registered with The Institute of Chartered Accountants of India (ICAI). Disclosures and practice information on this portal are maintained strictly for factual reference in compliance with ICAI professional ethics and guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section soft-bg services-preview-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Practice Areas</span>
              <h2>Professional Services</h2>
            </div>
            <Link className="text-link" to="/services">
              <span>View All Practice Areas</span>
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="card-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} variant="standard" />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Services Selector */}
      <section className="section selector-section">
        <div className="container">
          <div className="section-heading text-center">
            <div>
              <span className="eyebrow">Interactive Overview</span>
              <h2>Explore Practice Areas</h2>
            </div>
          </div>

          <ServiceSelector services={services} />
        </div>
      </section>

      {/* Professional Approach 5 Pillars */}
      <section className="section soft-bg approach-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Core Standards</span>
              <h2>Our Professional Approach</h2>
            </div>
            <p className="heading-subtext">
              Standards maintained across every professional engagement and compliance assignment.
            </p>
          </div>

          <div className="approach-grid">
            {approachPillars.map((item) => (
              <div className="approach-card" key={item.num}>
                <span className="approach-number">{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Checklists Interactive Preview */}
      <section className="section checklist-preview-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Client Support</span>
              <h2>Documents You May Need</h2>
            </div>
            <Link className="text-link" to="/resources">
              <span>View All Checklists</span>
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="checklist-interactive-wrapper">
            <div className="checklist-category-pills" role="tablist" aria-label="Checklist Categories">
              {checklists.map((c, idx) => (
                <button
                  key={c.slug}
                  type="button"
                  role="tab"
                  aria-selected={activeChecklistCategory === idx}
                  className={`category-tab-btn ${activeChecklistCategory === idx ? 'active' : ''}`}
                  onClick={() => setActiveChecklistCategory(idx)}
                >
                  <FolderOpen size={16} />
                  <span>{c.category}</span>
                </button>
              ))}
            </div>

            <div className="checklist-category-box">
              <div className="checklist-box-header">
                <div>
                  <h3>{currentChecklist.title}</h3>
                  <p>{currentChecklist.shortSummary}</p>
                </div>
                <Link to={`/resources/${currentChecklist.slug}`} className="button outline-primary">
                  <span>View Full Checklist</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              <ChecklistAccordion sections={currentChecklist.sections.slice(0, 3)} defaultOpenIndex={0} />
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="section soft-bg insights-preview-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Knowledge Center</span>
              <h2>Professional Guidance & Updates</h2>
            </div>
            <Link className="text-link" to="/insights">
              <span>View All Guidance Notes</span>
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="article-grid">
            {articles.slice(0, 3).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Official Government & Regulatory Portals */}
      <section className="section official-links-section">
        <div className="container">
          <div className="section-heading text-center">
            <div>
              <span className="eyebrow">Statutory Portals</span>
              <h2>Official Resource Links</h2>
            </div>
          </div>

          <div className="official-portals-grid">
            {officialResources.map((res) => (
              <a
                key={res.name}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portal-link-card"
              >
                <div className="portal-category">{res.category}</div>
                <h3>{res.name}</h3>
                <p>{res.description}</p>
                <span className="portal-action">
                  Visit Official Website <ChevronRight size={14} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta-section">
        <div className="container contact-cta-inner">
          <div className="cta-text">
            <span className="eyebrow light">Professional Enquiries</span>
            <h2>Need information about a professional service?</h2>
            <p>
              Contact the R J R & Company office for consultations, statutory inquiries, or engagement documentation.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="button gold" to="/contact">
              Contact Office
            </Link>
            <Link className="button outline-light" to="/client-login">
              Client Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
