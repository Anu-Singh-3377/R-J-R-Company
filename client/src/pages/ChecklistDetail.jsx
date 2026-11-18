import { useParams, useLocation, Link, Navigate } from 'react-router-dom';
import { Printer, Download, ArrowRight, ShieldCheck, FileCheck, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import ChecklistAccordion from '../components/ChecklistAccordion';
import { checklists, images } from '../data';

export default function ChecklistDetail() {
  const { slug: paramSlug } = useParams();
  const location = useLocation();
  const rawSlug = paramSlug || location.pathname.split('/').pop();

  // Normalize possible aliases or variations
  const aliasMap = {
    'income-tax-return': 'income-tax-checklist',
    'income-tax': 'income-tax-checklist',
    'gst-registration': 'gst-checklist',
    'gst-return': 'gst-checklist',
    'audit-documentation': 'audit-checklist',
    'statutory-audit': 'audit-checklist',
    'company-incorporation': 'company-compliance-checklist',
    'company-compliance': 'company-compliance-checklist',
  };

  const resolvedSlug = aliasMap[rawSlug] || rawSlug;
  const checklist = checklists.find((c) => c.slug === resolvedSlug);

  if (!checklist) {
    return <Navigate to="/resources" replace />;
  }

  function handlePrint() {
    window.print();
  }

  return (
    <div className="checklist-detail-view">
      <SEO
        title={checklist.title}
        description={`R J R & Company — Comprehensive ${checklist.title}. Statutory documentation checklist and filing worksheet.`}
      />

      <PageHero
        eyebrow={checklist.category}
        title={checklist.title}
        intro={checklist.shortSummary}
        image={images.accounting}
        alt="Document checklist and compliance record worksheet"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Resources', to: '/resources' },
          { label: checklist.title },
        ]}
      />

      <section className="section">
        <div className="container checklist-detail-grid">
          {/* Main Content with Interactive Accordion */}
          <main className="checklist-main-col">
            <div className="checklist-controls-bar">
              <div>
                <h2>Document Categories</h2>
                <p>Click on any section below to review the specific items required.</p>
              </div>
              <button
                type="button"
                className="button outline-primary print-action-btn"
                onClick={handlePrint}
              >
                <Printer size={16} />
                <span>Print Checklist</span>
              </button>
            </div>

            <ChecklistAccordion sections={checklist.sections} defaultOpenIndex={0} />

            {/* Print Header Visible Only on Print */}
            <div className="print-only-footer">
              <p>R J R & Company — Chartered Accountants | Official Document Checklist</p>
              <p>This document is an indicative checklist for compilation. Verify specific statutory requirements with our office.</p>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="checklist-sidebar-col">
            <div className="sidebar-card print-helper-card">
              <Printer size={22} className="sidebar-card-icon" />
              <h3>Physical Checklist</h3>
              <p>
                Print this checklist to manually track and verify your physical and digital vouchers before scheduling your consultation.
              </p>
              <button
                type="button"
                className="button primary full-width"
                onClick={handlePrint}
              >
                <Printer size={16} /> Print Worksheet
              </button>
            </div>

            <div className="sidebar-card compliance-reminder-card">
              <ShieldCheck size={22} className="sidebar-card-icon" />
              <h3>Confidentiality Protocol</h3>
              <p>
                Do not email passwords, confidential banking tokens, or unredacted personal files over unencrypted channels.
              </p>
              <Link to="/client-portal" className="text-link">
                Go to Secure Client Portal →
              </Link>
            </div>

            <div className="sidebar-card contact-assistance-card">
              <h3>Need Clarifications?</h3>
              <p>
                If you have questions regarding specific exemptions, forms, or applicable financial thresholds:
              </p>
              <Link to="/contact" className="button gold full-width">
                Contact Office
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
