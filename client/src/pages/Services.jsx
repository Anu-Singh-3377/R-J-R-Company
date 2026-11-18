import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import { services, images } from '../data';

export default function Services() {
  return (
    <div className="services-page-view">
      <SEO
        title="Services"
        description="R J R & Company — Comprehensive accounting, direct taxation, GST, statutory audit, corporate compliance, and business advisory services."
      />

      <PageHero
        eyebrow="Practice Areas"
        title="Professional Services"
        intro="Careful, structured accounting, taxation, audit and regulatory compliance solutions tailored to statutory mandates."
        image={images.accounting}
        alt="Professional financial accounting registers, ledgers, and calculation records"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />

      {/* Directory Intro Section */}
      <section className="section">
        <div className="container">
          <div className="services-lead-box">
            <span className="eyebrow">Practice Directory</span>
            <h2>Statutory & Professional Capabilities</h2>
            <p>
              R J R & Company delivers structured professional services to commercial enterprises, Limited Liability Partnerships, private companies, startups, and individuals. Every engagement is executed with independence, technical precision, and strict compliance with Indian laws and ICAI professional standards.
            </p>
          </div>

          <div className="services-directory-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} variant="image" />
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Process Section */}
      <section className="section soft-bg">
        <div className="container">
          <div className="section-heading text-center">
            <div>
              <span className="eyebrow">Client Engagement</span>
              <h2>How We Manage Professional Engagements</h2>
            </div>
            <p className="heading-subtext">
              A transparent, documented 5-stage procedure ensuring technical precision and regulatory compliance.
            </p>
          </div>

          <div className="process-steps-grid">
            <div className="process-step-card">
              <span className="step-badge">01</span>
              <h3>Information Collection</h3>
              <p>Compilation of primary ledgers, source vouchers, registration details, and prior filings.</p>
            </div>

            <div className="process-step-card">
              <span className="step-badge">02</span>
              <h3>Record Review & Audit</h3>
              <p>Meticulous verification of schedules, tax positions, and reconciliation against portal data.</p>
            </div>

            <div className="process-step-card">
              <span className="step-badge">03</span>
              <h3>Technical Preparation</h3>
              <p>Preparation of financial statements, computation sheets, or audit working papers.</p>
            </div>

            <div className="process-step-card">
              <span className="step-badge">04</span>
              <h3>Client Confirmation</h3>
              <p>Presentation of technical draft for client review, formal verification, and approval.</p>
            </div>

            <div className="process-step-card">
              <span className="step-badge">05</span>
              <h3>Filing & Compliance</h3>
              <p>Statutory submission on official portals, generation of acknowledgements, and secure record retention.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="contact-cta-section">
        <div className="container contact-cta-inner">
          <div className="cta-text">
            <span className="eyebrow light">Engagement Enquiries</span>
            <h2>Require professional assistance for your entity?</h2>
            <p>
              Connect with our team to discuss engagement scope, documentation requirements, and timelines.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="button gold" to="/contact">
              Contact Office
            </Link>
            <Link className="button outline-light" to="/resources">
              View Document Checklists
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
