import { Link } from 'react-router-dom';
import { Shield, FileText, Cookie, AlertCircle, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { firmData, images } from '../data';

export default function Legal({ kind = 'privacy' }) {
  const contentMap = {
    privacy: {
      title: 'Privacy Notice',
      eyebrow: 'Data Protection & Confidentiality',
      description: 'Privacy policy and data handling standards for R J R & Company.',
      body: (
        <>
          <h2>1. Commitment to Client Confidentiality</h2>
          <p>
            R J R & Company recognizes the vital importance of financial privacy. As Chartered Accountants governed by the Institute of Chartered Accountants of India (ICAI), we are bound by strict professional ethical duties of confidentiality regarding all client records, books of account, and statutory documentation.
          </p>

          <h2>2. Information Collected</h2>
          <p>We may collect and process information through two primary mechanisms:</p>
          <ul>
            <li>
              <strong>General Inquiries:</strong> Contact information voluntarily provided via our public contact form (name, email address, telephone number, and message). We explicitly advise against submitting sensitive financial numbers (PAN, Aadhaar, bank credentials) through public web forms.
            </li>
            <li>
              <strong>Client Portal Documents:</strong> Authorized clients uploading engagement worksheets and financial ledgers via encrypted sessions. Such records are strictly confidential and shared solely with assigned engagement partners and staff.
            </li>
          </ul>

          <h2>3. Purpose of Processing</h2>
          <p>
            Data collected is used exclusively for evaluating engagement scope, responding to inquiries, executing professional accounting/audit obligations, and meeting legal compliance mandates under Indian law. We never sell, lease, or monetize client data.
          </p>

          <h2>4. Data Security Architecture</h2>
          <p>
            Our infrastructure incorporates industry-standard TLS encryption, strict role-based access control, and network isolation to protect records from unauthorized access, accidental alteration, or disclosure.
          </p>

          <h2>5. Your Rights & Grievance Contact</h2>
          <p>
            To inquire about data held, request correction, or exercise your privacy rights, please contact the firm directly at the official email or telephone provided on our Contact page.
          </p>
        </>
      ),
    },
    disclaimer: {
      title: 'Disclaimer & ICAI Regulatory Notice',
      eyebrow: 'Statutory Disclosure',
      description: 'Regulatory compliance notice and website terms of use for R J R & Company.',
      body: (
        <>
          <h2>1. ICAI Compliance Declaration</h2>
          <p>
            This website is intended solely for informative purposes in strict accordance with the guidelines and regulations issued by the Council of the Institute of Chartered Accountants of India (ICAI). Under ICAI regulations, Chartered Accountants in India are restricted from advertising, soliciting clients, or making self-laudatory claims.
          </p>

          <h2>2. No Professional-Client Relationship</h2>
          <p>
            Accessing this website, viewing checklists, or submitting an inquiry through general forms does not automatically create a Chartered Accountant-client relationship. A formal professional-client engagement is established only upon the formal execution of an engagement letter and completion of necessary compliance verifications.
          </p>

          <h2>3. Informational Nature of Content</h2>
          <p>
            The checklists, guidance notes, and articles published on this website represent general informational overviews. Tax laws, judicial precedents, and regulatory procedures in India are subject to continuous amendment by statutory authorities. Users should not act on any information on this website without seeking bespoke professional advice tailored to their specific circumstances.
          </p>

          <h2>4. Third-Party Portals</h2>
          <p>
            Links to official government websites (e.g. Income Tax e-Filing, GST Portal, MCA, ICAI) are provided purely for user convenience. R J R & Company does not govern, endorse, or assume responsibility for external website availability or external content.
          </p>
        </>
      ),
    },
    cookie: {
      title: 'Cookie Policy',
      eyebrow: 'Browser Preferences',
      description: 'Information regarding the use of cookies and session tokens on this website.',
      body: (
        <>
          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are compact text files placed on your computer or mobile device when accessing website resources. They facilitate smooth navigation and preserve user preferences across browsing sessions.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>This website utilizes cookies strictly for essential and functional purposes:</p>
          <ul>
            <li>
              <strong>Strictly Necessary Cookies:</strong> Needed to provide core routing, maintain secure portal sessions, and remember your cookie acceptance preferences.
            </li>
            <li>
              <strong>Security Tokens:</strong> Used to protect forms against cross-site request forgery and authenticate client portal sessions.
            </li>
          </ul>

          <h2>3. No Invasive Tracking or Third-Party Advertising</h2>
          <p>
            We do not employ third-party advertising cookies, retargeting pixels, or behavioral profiling trackers.
          </p>

          <h2>4. Managing Your Cookie Choices</h2>
          <p>
            You may adjust your browser settings at any time to reject or remove cookies. Please note that disabling essential cookies may impact the functionality of the secure Client Portal.
          </p>
        </>
      ),
    },
  };

  const current = contentMap[kind] || contentMap.privacy;

  return (
    <div className="legal-page-view">
      <SEO
        title={current.title}
        description={current.description}
      />

      <PageHero
        eyebrow={current.eyebrow}
        title={current.title}
        intro={current.description}
        image={images.about}
        alt="R J R & Company professional office and statutory compliance documentation"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Legal' },
          { label: current.title },
        ]}
      />

      <section className="section">
        <div className="container legal-content-container">
          <div className="legal-prose-card">
            {current.body}

            <div className="legal-card-footer">
              <p>Last updated: November 2026</p>
              <Link to="/" className="text-link">
                <ArrowLeft size={15} /> Return to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
