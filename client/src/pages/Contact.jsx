import { MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import ImageWithFallback from '../components/ImageWithFallback';
import ContactForm from '../components/ContactForm';
import { firmData, images } from '../data';

export default function Contact({ onNotification }) {
  return (
    <div className="contact-page-view">
      <SEO
        title="Contact Office"
        description="R J R & Company, Chartered Accountants — Head Office contact information, consultation scheduling, and professional enquiry submission."
      />

      <PageHero
        eyebrow="Reach Our Office"
        title="Contact R J R & Company"
        intro="Inquire regarding professional audit, taxation, corporate compliance, and accounting services."
        image={images.contact}
        alt="R J R & Company corporate office location and reception"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="section">
        <div className="container contact-main-grid">
          {/* Left Column: Office Information & Location Photo */}
          <aside className="contact-info-col">
            <div className="contact-photo-box">
              <ImageWithFallback
                src={images.contact}
                alt="R J R & Company Office Building"
                className="contact-office-photo"
              />
            </div>

            <div className="office-particulars-card">
              <div className="particulars-header">
                <h3>{firmData.name}</h3>
                <p className="subtitle">{firmData.type}</p>
              </div>

              <dl className="contact-details-list">
                <div className="detail-row">
                  <dt>
                    <MapPin size={18} className="row-icon" />
                    <span>Head Office</span>
                  </dt>
                  <dd>{firmData.headOffice || '[TO BE PROVIDED]'}</dd>
                </div>

                <div className="detail-row">
                  <dt>
                    <Phone size={18} className="row-icon" />
                    <span>Telephone</span>
                  </dt>
                  <dd>{firmData.phone || '[TO BE PROVIDED]'}</dd>
                </div>

                <div className="detail-row">
                  <dt>
                    <Mail size={18} className="row-icon" />
                    <span>Email Address</span>
                  </dt>
                  <dd>{firmData.email || '[TO BE PROVIDED]'}</dd>
                </div>

                <div className="detail-row">
                  <dt>
                    <Clock size={18} className="row-icon" />
                    <span>Office Hours</span>
                  </dt>
                  <dd>{firmData.officeHours || '[TO BE PROVIDED]'}</dd>
                </div>
              </dl>

              <div className="maps-link-box">
                {firmData.googleMapsUrl ? (
                  <a
                    href={firmData.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button outline-primary maps-btn"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink size={14} />
                  </a>
                ) : (
                  <div className="maps-placeholder-notice">
                    <span>Google Maps location coordinates [TO BE PROVIDED]</span>
                  </div>
                )}
              </div>

              <div className="icai-notice-box">
                <ShieldCheck size={16} />
                <p>
                  Consultations are arranged strictly in compliance with ICAI professional code and standards.
                </p>
              </div>
            </div>
          </aside>

          {/* Right Column: Interactive Contact Form */}
          <main className="contact-form-col">
            <ContactForm onNotification={onNotification} />
          </main>
        </div>
      </section>
    </div>
  );
}
