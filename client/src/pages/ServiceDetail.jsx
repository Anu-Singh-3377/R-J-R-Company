import { useParams, useLocation, Link, Navigate } from 'react-router-dom';
import {
  FileText,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Clock,
  ListChecks,
  PhoneCall,
  Download,
  Building,
  Scale
} from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { services, checklists } from '../data';

export default function ServiceDetail() {
  const { slug: paramSlug } = useParams();
  const location = useLocation();
  const rawSlug = paramSlug || location.pathname.split('/').pop();

  // Normalize possible legacy or alternative route slugs
  const slugAliases = {
    'accounting-bookkeeping': 'accounting',
    'company-llp-compliance': 'company-compliance',
  };
  const normalizedSlug = slugAliases[rawSlug] || rawSlug;

  const service = services.find((s) => s.slug === normalizedSlug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Find matching checklist
  const relatedChecklistMap = {
    'audit-assurance': 'audit-checklist',
    'income-tax': 'income-tax-checklist',
    'gst': 'gst-checklist',
    'accounting': 'income-tax-checklist',
    'company-compliance': 'company-compliance-checklist',
    'business-advisory': 'company-compliance-checklist',
  };

  const relatedChecklistSlug = relatedChecklistMap[service.slug] || 'income-tax-checklist';
  const relatedChecklist = checklists.find((c) => c.slug === relatedChecklistSlug);

  return (
    <div className="service-detail-view">
      <SEO
        title={service.title}
        description={`R J R & Company — ${service.title}. ${service.description}`}
      />

      <PageHero
        eyebrow="Practice Area"
        title={service.title}
        intro={service.description}
        image={service.image}
        alt={`${service.title} professional documentation and consulting workspace`}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.title },
        ]}
      />

      <section className="section">
        <div className="container service-detail-grid">
          {/* Main Content Column */}
          <main className="service-main-content">
            {/* Overview */}
            <article className="content-card">
              <span className="eyebrow">Service Scope</span>
              <h2>Overview & Nature of Service</h2>
              <p className="lead-paragraph">{service.natureOfService}</p>
              <p>
                Our assignments in {service.title} are conducted with complete professional independence, adhering to the guidance and statutory enactments of regulatory authorities. The exact parameters and scope of every assignment are formally documented and confirmed prior to commencement.
              </p>
            </article>

            {/* Who May Require It */}
            {service.whoMayRequire && (
              <article className="content-card">
                <span className="eyebrow">Applicability</span>
                <h2>Who May Require This Service</h2>
                <div className="applicable-clients-grid">
                  {service.whoMayRequire.map((item, idx) => (
                    <div key={idx} className="applicable-client-item">
                      <CheckCircle2 size={18} className="check-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            )}

            {/* Typical Information Required */}
            {service.typicalInformation && (
              <article className="content-card">
                <span className="eyebrow">Documentation</span>
                <h2>Typical Information & Records Required</h2>
                <p>
                  To ensure methodical analysis and avoid compliance delays, the following information and records are typically collected for review:
                </p>
                <ul className="info-required-list">
                  {service.typicalInformation.map((doc, idx) => (
                    <li key={idx} className="info-item">
                      <FileText size={16} className="file-icon" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )}

            {/* General Process */}
            {service.generalProcess && (
              <article className="content-card">
                <span className="eyebrow">Execution Methodology</span>
                <h2>General Engagement Process</h2>
                <div className="detail-process-timeline">
                  {service.generalProcess.map((step) => (
                    <div key={step.step} className="timeline-node">
                      <div className="node-number">{step.step}</div>
                      <div className="node-body">
                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            )}

            {/* Important Notes & Regulatory Notice */}
            <article className="content-card compliance-highlight-card">
              <div className="highlight-header">
                <ShieldAlert size={20} className="notice-icon" />
                <h3>Important Regulatory Notes</h3>
              </div>
              <p>
                Professional requirements, filing due dates, and reporting thresholds depend upon the specific facts of each entity and are subject to official notifications issued by the relevant regulatory bodies (e.g. CBDT, CBIC, MCA, ICAI). Clients are advised to verify deadlines and submit supporting source documents well in advance of statutory cut-off dates.
              </p>
            </article>
          </main>

          {/* Sidebar Column */}
          <aside className="service-sidebar">
            {/* Checklist Card */}
            {relatedChecklist && (
              <div className="sidebar-card checklist-sidebar-card">
                <div className="sidebar-card-header">
                  <ListChecks size={20} className="card-header-icon" />
                  <h3>Related Document Checklist</h3>
                </div>
                <p>{relatedChecklist.shortSummary}</p>
                <div className="sidebar-sections-count">
                  <span>Contains {relatedChecklist.sections.length} document categories</span>
                </div>
                <Link to={`/resources/${relatedChecklist.slug}`} className="button primary full-width">
                  <span>View Full Checklist</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            )}

            {/* Official Portal Link */}
            <div className="sidebar-card portals-sidebar-card">
              <h3>Official Resource Links</h3>
              <p>Access official regulatory portals for forms, circulars, and notifications.</p>
              <ul className="sidebar-portal-links">
                <li>
                  <a href="https://www.icai.org" target="_blank" rel="noopener noreferrer">
                    ICAI Official Portal
                  </a>
                </li>
                <li>
                  <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer">
                    Income Tax e-Filing
                  </a>
                </li>
                <li>
                  <a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer">
                    GST Portal
                  </a>
                </li>
                <li>
                  <a href="https://www.mca.gov.in" target="_blank" rel="noopener noreferrer">
                    Ministry of Corporate Affairs
                  </a>
                </li>
              </ul>
            </div>

            {/* Office Contact CTA */}
            <div className="sidebar-card contact-sidebar-card">
              <PhoneCall size={22} className="card-header-icon" />
              <h3>Need Specific Information?</h3>
              <p>
                Connect with the R J R & Company office regarding engagement terms, scope assessment, or document verification.
              </p>
              <Link to="/contact" className="button gold full-width">
                Contact Office
              </Link>
              <Link to="/client-portal" className="text-link sidebar-link">
                Upload Engagement Documents →
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
