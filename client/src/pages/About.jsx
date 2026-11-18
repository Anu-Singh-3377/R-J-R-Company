import { Link } from 'react-router-dom';
import { Shield, CheckCircle2, Lock, FileCheck, ArrowRight, Building, Award, Mail, Phone, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import ImageWithFallback from '../components/ImageWithFallback';
import { firmData, images } from '../data';

export default function About() {
  return (
    <div className="about-page-view">
      <SEO
        title="About"
        description="R J R & Company, Chartered Accountants — Firm background, professional approach, compliance standards, and office information."
      />

      <PageHero
        eyebrow="The Firm"
        title="About R J R & Company"
        intro="Professional accounting, taxation, audit and regulatory compliance services based on statutory diligence."
        image={images.about}
        alt="R J R & Company professional accounting and consulting office environment"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      {/* Firm Background Section */}
      <section className="section">
        <div className="container split-layout">
          <div className="split-text-col">
            <span className="eyebrow">Firm Overview</span>
            <h2>Firm Background & Practice</h2>
            <p className="lead-paragraph">
              R J R & Company is an Indian professional services firm comprising Chartered Accountants committed to providing disciplined, objective, and compliant financial solutions.
            </p>
            <p>
              The firm advises and assists proprietary businesses, partnership firms, Limited Liability Partnerships (LLPs), private corporations, and individuals across statutory audit, income taxation, Goods & Services Tax (GST), and regulatory filings under corporate legislation.
            </p>
            <p>
              Every client engagement is managed within the framework of ethical guidelines and Standards on Auditing established by the Institute of Chartered Accountants of India (ICAI).
            </p>

            <div className="about-quote-box">
              <p>
                "Our practice is defined by meticulous documentation, technical accuracy, and an uncompromising adherence to regulatory statutes."
              </p>
            </div>
          </div>

          <div className="split-image-col">
            <div className="image-frame">
              <ImageWithFallback
                src={images.about}
                alt="Professional conference and document review workspace"
                className="office-photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Standards & Confidentiality */}
      <section className="section soft-bg">
        <div className="container">
          <div className="section-heading text-center">
            <div>
              <span className="eyebrow">Commitment to Integrity</span>
              <h2>Professional Standards & Confidentiality</h2>
            </div>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon-box">
                <Shield size={24} />
              </div>
              <h3>Statutory Standards</h3>
              <p>
                All audit, assurance, and tax computations are prepared in rigorous adherence to Indian Accounting Standards (Ind AS / AS) and ICAI Guidance Notes.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">
                <Lock size={24} />
              </div>
              <h3>Strict Confidentiality</h3>
              <p>
                Client financial ledgers, tax histories, and operational disclosures are treated under strict professional secrecy with restricted access controls.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-box">
                <FileCheck size={24} />
              </div>
              <h3>Documentation Discipline</h3>
              <p>
                Every conclusion, return, or certificate is supported by systematically preserved working papers, primary vouchers, and reconciliation schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Practice Summary */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Core Capabilities</span>
              <h2>Areas of Professional Practice</h2>
            </div>
            <Link className="text-link" to="/services">
              <span>View Practice Detail</span>
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="practice-areas-overview-grid">
            <div className="practice-block">
              <h3>Audit & Assurance</h3>
              <p>Statutory audits, tax audits under Sec 44AB, internal control evaluations, and compliance reviews.</p>
            </div>
            <div className="practice-block">
              <h3>Direct Taxation</h3>
              <p>Corporate tax, individual filings, advance tax calculations, withholding tax (TDS) and representation support.</p>
            </div>
            <div className="practice-block">
              <h3>GST & Indirect Taxes</h3>
              <p>Registration, monthly return compliances, ITC reconciliation against GSTR-2B, and annual reconciliations.</p>
            </div>
            <div className="practice-block">
              <h3>Corporate Compliance</h3>
              <p>MCA statutory filings, company & LLP annual returns, board minutes maintenance, and secretarial records.</p>
            </div>
            <div className="practice-block">
              <h3>Bookkeeping & Accounting</h3>
              <p>General ledger maintenance, bank reconciliation statements, periodic MIS, and financial statement compilation.</p>
            </div>
            <div className="practice-block">
              <h3>Business Advisory</h3>
              <p>Working capital assessments, objective financial reporting models, and documentation support for transactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Information Table */}
      <section className="section soft-bg">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Official Record</span>
              <h2>Firm Information & Contact</h2>
            </div>
            <p className="heading-subtext">
              Official firm particulars published in accordance with ICAI disclosure guidelines.
            </p>
          </div>

          <div className="firm-info-table-card">
            <div className="table-row">
              <span className="field-name">Firm Name</span>
              <strong className="field-val">{firmData.name}</strong>
            </div>
            <div className="table-row">
              <span className="field-name">Constitution</span>
              <strong className="field-val">{firmData.type}</strong>
            </div>
            <div className="table-row">
              <span className="field-name">Establishment Year</span>
              <strong className="field-val">{firmData.establishmentYear || '[TO BE PROVIDED]'}</strong>
            </div>
            <div className="table-row">
              <span className="field-name">Head Office Location</span>
              <strong className="field-val">{firmData.headOffice || '[TO BE PROVIDED]'}</strong>
            </div>
            <div className="table-row">
              <span className="field-name">Official Email</span>
              <strong className="field-val">{firmData.email || '[TO BE PROVIDED]'}</strong>
            </div>
            <div className="table-row">
              <span className="field-name">Official Phone</span>
              <strong className="field-val">{firmData.phone || '[TO BE PROVIDED]'}</strong>
            </div>
            <div className="table-row">
              <span className="field-name">Office Hours</span>
              <strong className="field-val">{firmData.officeHours || '[TO BE PROVIDED]'}</strong>
            </div>
          </div>

          <div className="office-action-row">
            <Link to="/contact" className="button primary">
              Contact the Office
            </Link>
            <Link to="/partners" className="button outline-primary">
              View Partners Directory
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
