import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, BookOpen, AlertCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import PartnerCard from '../components/PartnerCard';
import { firmData, images, partnerData } from '../data';

export default function Partners() {
  const partnersList = [
    {
      id: 'partner-1',
      name: 'Partner Name',
      designation: 'Chartered Accountant',
      qualification: '[TO BE PROVIDED]',
      membershipNumber: '[TO BE PROVIDED]',
      areasOfPractice: '[TO BE PROVIDED]',
      professionalExperience: '[TO BE PROVIDED]',
      note: 'In strict adherence to ICAI Code of Ethics, partner details and profile photographs will be updated once officially furnished and verified by the firm.'
    }
  ];

  return (
    <div className="partners-page-view">
      <SEO
        title="Partners"
        description="R J R & Company — Chartered Accountants and partners leadership directory."
      />

      <PageHero
        eyebrow="Leadership & Practice"
        title="Partners"
        intro="Professional leadership and practice principals at R J R & Company."
        image={images.about}
        alt="R J R & Company professional office team and conference setting"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Partners' }]}
      />

      {/* Main Partners Section */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Professional Leadership</span>
              <h2>Firm Partners</h2>
            </div>
            <p className="heading-subtext">
              Chartered Accountants overseeing practice verticals, audit quality, and regulatory compliance.
            </p>
          </div>

          <div className="partners-grid">
            {partnersList.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>

          <div className="icai-compliance-banner">
            <AlertCircle size={20} className="info-icon" />
            <div>
              <h4>ICAI Regulatory Compliance Disclosure</h4>
              <p>
                In compliance with the regulations issued by the Council of the Institute of Chartered Accountants of India (ICAI), the details above are limited to factual particulars. Detailed CVs, credentials, and partner qualifications are available to clients upon formal verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Firm Practice Standards */}
      <section className="section soft-bg">
        <div className="container">
          <div className="section-heading text-center">
            <div>
              <span className="eyebrow">Professional Ethics</span>
              <h2>Governance & Independence</h2>
            </div>
          </div>

          <div className="ethics-cards-grid">
            <div className="ethics-card">
              <Shield size={24} className="ethics-icon" />
              <h3>Independence in Assurance</h3>
              <p>
                Partners maintain complete independence of mind and appearance in all statutory audit and certification engagements.
              </p>
            </div>

            <div className="ethics-card">
              <BookOpen size={24} className="ethics-icon" />
              <h3>Continuous Professional Education</h3>
              <p>
                Ongoing participation in ICAI professional development programs ensures up-to-date mastery of revised accounting standards.
              </p>
            </div>

            <div className="ethics-card">
              <Users size={24} className="ethics-icon" />
              <h3>Supervisory Oversight</h3>
              <p>
                Every working paper, tax computation, and compliance filing undergoes partner-level supervisory review prior to dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Link */}
      <section className="contact-cta-section">
        <div className="container contact-cta-inner">
          <div className="cta-text">
            <span className="eyebrow light">Direct Communication</span>
            <h2>Need to discuss a professional mandate with a partner?</h2>
            <p>
              Direct your enquiry to our office for partner scheduling and preliminary consultations.
            </p>
          </div>
          <div className="cta-actions">
            <Link className="button gold" to="/contact">
              Contact Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
