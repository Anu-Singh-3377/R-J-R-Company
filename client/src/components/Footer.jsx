import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  ExternalLink,
  ChevronDown,
  Building,
  CheckCircle2
} from 'lucide-react';
import { firmData, officeInfo, socialLinks, icaiDisclaimerText } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const office = officeInfo || {};

  // Mobile accordion collapse state
  const [openSections, setOpenSections] = useState({
    practice: false,
    company: false,
    resources: false,
    contact: false,
  });

  const toggleSection = (sectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  return (
    <footer className="site-footer" role="contentinfo" aria-label="RJR & Company Footer">
      {/* =========================================================================
          TOP MULTI-COLUMN SECTION
          ========================================================================= */}
      <div className="container footer-top-container">
        <div className="footer-columns-grid">
          {/* Column 1: Company Branding & Institutional Identity */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-brand-block" aria-label="RJR & Company Homepage">
              <span className="brand-mark footer-brand-mark" aria-hidden="true">
                <span className="brand-monogram">RJR</span>
              </span>
              <div className="brand-title-wrap">
                <strong className="footer-firm-name">RJR &amp; Company</strong>
                <span className="footer-firm-subtitle">Chartered Accountants</span>
              </div>
            </Link>

            <p className="footer-firm-desc">
              Providing structured statutory compliance, assurance, taxation, and financial advisory services to corporations, SMEs, startups, and institutions across India.
            </p>

            <div className="footer-credentials-tag">
              <Shield size={16} className="tag-icon" aria-hidden="true" />
              <span>Registered with ICAI &bull; FRN: {firmData.frn || '[Insert verified FRN]'}</span>
            </div>
          </div>

          {/* Column 2: Practice Areas */}
          <div className={`footer-col ${openSections.practice ? 'mobile-expanded' : ''}`}>
            <button
              type="button"
              className="footer-col-header-btn"
              onClick={() => toggleSection('practice')}
              aria-expanded={openSections.practice}
            >
              <h4>Practice Areas</h4>
              <ChevronDown size={16} className="accordion-chevron" aria-hidden="true" />
            </button>
            <ul className="footer-links-list">
              <li>
                <Link to="/services/audit-assurance">Audit &amp; Assurance</Link>
              </li>
              <li>
                <Link to="/services/income-tax">Income Tax</Link>
              </li>
              <li>
                <Link to="/services/gst">GST &amp; Indirect Tax</Link>
              </li>
              <li>
                <Link to="/services/accounting">Accounting &amp; Bookkeeping</Link>
              </li>
              <li>
                <Link to="/services/company-compliance">Company &amp; LLP Compliance</Link>
              </li>
              <li>
                <Link to="/services/business-advisory">Strategic Business Advisory</Link>
              </li>
              <li>
                <Link to="/services" className="footer-view-all-link">
                  View All Practice Areas &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company Navigation */}
          <div className={`footer-col ${openSections.company ? 'mobile-expanded' : ''}`}>
            <button
              type="button"
              className="footer-col-header-btn"
              onClick={() => toggleSection('company')}
              aria-expanded={openSections.company}
            >
              <h4>Company</h4>
              <ChevronDown size={16} className="accordion-chevron" aria-hidden="true" />
            </button>
            <ul className="footer-links-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Practice Areas</Link>
              </li>
              <li>
                <Link to="/partners">Firm Partners</Link>
              </li>
              <li>
                <Link to="/careers">Careers &amp; Articleship</Link>
              </li>
              <li>
                <Link to="/contact">Contact Our Office</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Client Resources */}
          <div className={`footer-col ${openSections.resources ? 'mobile-expanded' : ''}`}>
            <button
              type="button"
              className="footer-col-header-btn"
              onClick={() => toggleSection('resources')}
              aria-expanded={openSections.resources}
            >
              <h4>Resources</h4>
              <ChevronDown size={16} className="accordion-chevron" aria-hidden="true" />
            </button>
            <ul className="footer-links-list">
              <li>
                <Link to="/knowledge-bank">Knowledge Bank</Link>
              </li>
              <li>
                <Link to="/knowledge-bank">Monthly Compliance Calendar</Link>
              </li>
              <li>
                <Link to="/knowledge-bank">Regulatory Circulars</Link>
              </li>
              <li>
                <Link to="/resources">Document Checklists</Link>
              </li>
              <li>
                <Link to="/client-portal">Client Portal Access</Link>
              </li>
              <li>
                <Link to="/sitemap">Public Sitemap</Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Office & Contact */}
          <div className={`footer-col contact-col ${openSections.contact ? 'mobile-expanded' : ''}`}>
            <button
              type="button"
              className="footer-col-header-btn"
              onClick={() => toggleSection('contact')}
              aria-expanded={openSections.contact}
            >
              <h4>Head Office</h4>
              <ChevronDown size={16} className="accordion-chevron" aria-hidden="true" />
            </button>
            <div className="footer-contact-details">
              <div className="f-contact-item">
                <MapPin size={16} className="f-icon" aria-hidden="true" />
                <address className="f-address">
                  {office.address || '[Office Address line 1, Building Name, Street / Landmark, City, State — PIN Code] [TO BE PROVIDED]'}
                </address>
              </div>

              <div className="f-contact-item">
                <Phone size={16} className="f-icon" aria-hidden="true" />
                <span>{office.phone || '[Office Phone / Landline] [TO BE PROVIDED]'}</span>
              </div>

              <div className="f-contact-item">
                <Mail size={16} className="f-icon" aria-hidden="true" />
                <span>{office.email || '[Official Firm Email] [TO BE PROVIDED]'}</span>
              </div>

              <div className="f-contact-item">
                <Clock size={16} className="f-icon" aria-hidden="true" />
                <span>{office.workingHours || 'Monday – Saturday: 10:00 AM – 6:30 PM'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECONDARY LEGAL, SITEMAP & SOCIAL LINK ROW
          ========================================================================= */}
      <div className="footer-secondary-row">
        <div className="container footer-secondary-inner">
          <nav className="footer-legal-nav" aria-label="Legal and policy links">
            <Link to="/privacy" className="footer-legal-link">
              Privacy Policy
            </Link>
            <span className="link-divider" aria-hidden="true">&bull;</span>
            <Link to="/terms-of-use" className="footer-legal-link">
              Terms of Use
            </Link>
            <span className="link-divider" aria-hidden="true">&bull;</span>
            <Link to="/disclaimer" className="footer-legal-link">
              Statutory Disclaimer
            </Link>
            <span className="link-divider" aria-hidden="true">&bull;</span>
            <Link to="/cookie-policy" className="footer-legal-link">
              Cookie Policy
            </Link>
            <span className="link-divider" aria-hidden="true">&bull;</span>
            <Link to="/sitemap" className="footer-legal-link">
              Sitemap
            </Link>
          </nav>

          <div className="footer-social-wrap">
            {socialLinks?.linkedin && socialLinks.linkedin !== '[Official LinkedIn URL]' ? (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="RJR & Company official LinkedIn Profile"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="social-icon"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn</span>
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            ) : (
              <span
                className="footer-social-link placeholder-link"
                title="Official LinkedIn profile URL to be furnished by firm"
                aria-label="LinkedIn (Official profile to be provided)"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="social-icon"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn</span>
                <span className="placeholder-tag">[Official Profile]</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* =========================================================================
          ICAI STATUTORY DISCLAIMER (PROMINENT DEDICATED SECTION)
          ========================================================================= */}
      <section className="footer-disclaimer-section" aria-label="ICAI Statutory Regulatory Notice">
        <div className="container">
          <div className="footer-disclaimer-box">
            <div className="disclaimer-title-row">
              <Shield size={16} className="disclaimer-icon" aria-hidden="true" />
              <strong className="disclaimer-label">ICAI STATUTORY DISCLAIMER</strong>
            </div>
            <p className="disclaimer-text">
              {icaiDisclaimerText}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM COPYRIGHT BAR
          ========================================================================= */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <p className="footer-copyright-text">
            &copy; {currentYear} RJR &amp; Company, Chartered Accountants. All rights reserved.
          </p>
          <p className="footer-disclaimer-subnote">
            Portal content is maintained strictly for factual reference in accordance with ICAI professional ethics and guidelines.
          </p>
        </div>
      </div>
    </footer>
  );
}
