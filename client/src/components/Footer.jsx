import { Link } from 'react-router-dom';
import { Landmark, ExternalLink, Shield } from 'lucide-react';
import { firmData, officialResources } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-top-grid">
        <div className="footer-col brand-col">
          <div className="footer-brand">
            <span className="brand-mark small">RJR</span>
            <div>
              <h3>{firmData.name}</h3>
              <p className="footer-firm-type">{firmData.type}</p>
            </div>
          </div>
          <p className="footer-desc">
            Professional services across accounting, taxation, audit, statutory compliance and corporate advisory.
          </p>
          <div className="footer-compliance-notice">
            <Shield size={16} />
            <span>
              In compliance with ICAI regulations, information on this website is provided solely for general informational purposes.
            </span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Practice Areas</h4>
          <ul className="footer-links">
            <li><Link to="/services/audit-assurance">Audit & Assurance</Link></li>
            <li><Link to="/services/income-tax">Income Tax</Link></li>
            <li><Link to="/services/gst">GST & Indirect Tax</Link></li>
            <li><Link to="/services/accounting">Accounting & Bookkeeping</Link></li>
            <li><Link to="/services/company-compliance">Company & LLP Compliance</Link></li>
            <li><Link to="/services/business-advisory">Business Advisory</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Client Resources</h4>
          <ul className="footer-links">
            <li><Link to="/resources/income-tax-checklist">Income Tax Checklist</Link></li>
            <li><Link to="/resources/gst-checklist">GST Checklist</Link></li>
            <li><Link to="/resources/audit-checklist">Audit Documentation Checklist</Link></li>
            <li><Link to="/resources/company-compliance-checklist">Company Compliance Checklist</Link></li>
            <li><Link to="/client-login">Client Portal Login</Link></li>
            <li><Link to="/careers">Careers & Articleship</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Official Portals</h4>
          <ul className="footer-links official-links">
            {officialResources.map((res) => (
              <li key={res.name}>
                <a href={res.url} target="_blank" rel="noopener noreferrer" className="external-resource-link">
                  <span>{res.name}</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="copyright">
            © {currentYear} {firmData.name}, Chartered Accountants. All rights reserved.
          </p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Notice</Link>
            <span className="dot">•</span>
            <Link to="/disclaimer">Disclaimer</Link>
            <span className="dot">•</span>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
