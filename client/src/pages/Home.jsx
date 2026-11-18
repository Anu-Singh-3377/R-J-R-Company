import { useState, useEffect } from 'react';
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
  FolderOpen
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      // Light parallax offset for desktop
      if (window.innerWidth > 768) {
        setScrollY(window.scrollY);
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      {/* Hero Section */}
      <section className="home-hero">
        <div
          className="hero-image-layer"
          style={{ transform: `translateY(${Math.min(scrollY * 0.25, 120)}px)` }}
        >
          <ImageWithFallback
            src={images.home}
            alt="Professional financial documents, accounting ledgers, and working environment"
            className="home-hero-image"
            loading="eager"
          />
        </div>
        <div className="home-hero-shade" />

        <div className="container home-hero-content">
          <div className="hero-text-block">
            <span className="eyebrow light">Chartered Accountants</span>
            <h1>R J R & Company</h1>
            <p className="hero-subtext">
              Professional services across accounting, taxation, audit and regulatory compliance.
            </p>
            <div className="button-row">
              <Link className="button gold" to="/services">
                Explore Services
              </Link>
              <Link className="button outline-light" to="/contact">
                Contact Office
              </Link>
            </div>
          </div>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <span>Scroll</span>
          <ChevronDown size={14} className="bounce-arrow" />
        </div>
      </section>

      {/* Quick Information Bar */}
      <section className="quick-info-bar">
        <div className="container quick-grid">
          <div className="quick-item">
            <Landmark size={20} className="quick-icon" />
            <div>
              <strong>Professional Services</strong>
              <small>Chartered Accountants</small>
            </div>
          </div>
          <div className="quick-item">
            <BarChart3 size={20} className="quick-icon" />
            <div>
              <strong>Accounting & Advisory</strong>
              <small>Financial Reporting</small>
            </div>
          </div>
          <div className="quick-item">
            <FileText size={20} className="quick-icon" />
            <div>
              <strong>Taxation Services</strong>
              <small>Direct & Indirect Tax</small>
            </div>
          </div>
          <div className="quick-item">
            <ShieldCheck size={20} className="quick-icon" />
            <div>
              <strong>Audit & Compliance</strong>
              <small>Statutory Standards</small>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Split Section */}
      <section className="section about-preview-section">
        <div className="container split-layout">
          <div className="split-image-col">
            <div className="image-frame">
              <ImageWithFallback
                src={images.about}
                alt="Professional consulting office environment at R J R & Company"
                className="office-photo"
              />
              <div className="frame-accent" />
            </div>
          </div>

          <div className="split-text-col">
            <span className="eyebrow">Professional Approach</span>
            <h2>Careful, factual and compliant practice</h2>
            <p className="lead-paragraph">
              R J R & Company provides accounting, taxation, audit and regulatory compliance services with steadfast commitment to accuracy, documentation integrity, and clear professional communication.
            </p>
            <p>
              We assist businesses, companies, professionals, and individuals in navigating complex statutory requirements under Indian tax and corporate laws with independent diligence.
            </p>
            <div className="feature-bullets">
              <div className="bullet-point">
                <CheckCircle2 size={18} className="bullet-icon" />
                <span>Peer-reviewed professional standards in accordance with ICAI</span>
              </div>
              <div className="bullet-point">
                <CheckCircle2 size={18} className="bullet-icon" />
                <span>Strict information confidentiality and data protection</span>
              </div>
            </div>
            <Link className="text-link learn-more-link" to="/about">
              <span>About R J R & Company</span>
              <ArrowRight size={17} />
            </Link>
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
