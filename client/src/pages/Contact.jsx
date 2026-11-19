import { MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck, Navigation, Building2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import ImageWithFallback from '../components/ImageWithFallback';
import ContactForm from '../components/ContactForm';
import { firmData, officeInfo, images } from '../data';

export default function Contact({ onNotification }) {
  const currentOffice = officeInfo || {
    name: firmData.name,
    type: firmData.type,
    address: '[Office Address line 1, Building Name, Street / Landmark, City, State — PIN Code] [TO BE PROVIDED]',
    phone: firmData.phone || '[TO BE PROVIDED]',
    email: firmData.email || '[TO BE PROVIDED]',
    workingHours: firmData.officeHours || 'Monday to Saturday: 10:00 AM – 6:30 PM [Indicative / Subject to confirmation]',
    googleMapsUrl: firmData.googleMapsUrl || '',
  };

  return (
    <div className="contact-page-view">
      <SEO
        title="Contact Us & Office Locations"
        description="RJR & Company, Chartered Accountants — Head Office contact information, office locations, consultation scheduling, and professional enquiry submission."
      />

      <PageHero
        eyebrow="Reach Our Office"
        title="Contact Us & Office Locations"
        intro="Inquire regarding professional audit, taxation, corporate compliance, and accounting services."
        image={images.contact}
        alt="RJR & Company corporate office location and reception"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]}
      />

      {/* Quick Office Info Strip */}
      <section className="contact-quick-strip" aria-label="Office Overview Highlights">
        <div className="container contact-strip-grid">
          <div className="strip-item">
            <Clock size={18} className="strip-icon" aria-hidden="true" />
            <div>
              <strong>Office Hours</strong>
              <span>Monday – Saturday: 10:00 AM – 6:30 PM</span>
            </div>
          </div>
          <div className="strip-item">
            <Mail size={18} className="strip-icon" aria-hidden="true" />
            <div>
              <strong>Official Email</strong>
              <span>{currentOffice.email}</span>
            </div>
          </div>
          <div className="strip-item">
            <Phone size={18} className="strip-icon" aria-hidden="true" />
            <div>
              <strong>Office Contact</strong>
              <span>{currentOffice.phone}</span>
            </div>
          </div>
          <div className="strip-item">
            <MapPin size={18} className="strip-icon" aria-hidden="true" />
            <div>
              <strong>Head Office Location</strong>
              <span>{currentOffice.city || '[City, State]'}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-main-grid">
          {/* Left Column: Office Information & Location Photo */}
          <aside className="contact-info-col" aria-label="Office Details">
            <div className="contact-photo-box">
              <ImageWithFallback
                src={images.contact}
                alt="RJR & Company Chartered Accountants Office Building"
                className="contact-office-photo"
              />
            </div>

            <div className="office-particulars-card">
              <div className="particulars-header">
                <h3>{currentOffice.name}</h3>
                <p className="subtitle">{currentOffice.type}</p>
              </div>

              <dl className="contact-details-list">
                <div className="detail-row">
                  <dt>
                    <MapPin size={18} className="row-icon" aria-hidden="true" />
                    <span>Office Address</span>
                  </dt>
                  <dd>{currentOffice.address}</dd>
                </div>

                <div className="detail-row">
                  <dt>
                    <Phone size={18} className="row-icon" aria-hidden="true" />
                    <span>Telephone</span>
                  </dt>
                  <dd>{currentOffice.phone}</dd>
                </div>

                <div className="detail-row">
                  <dt>
                    <Mail size={18} className="row-icon" aria-hidden="true" />
                    <span>Official Email</span>
                  </dt>
                  <dd>{currentOffice.email}</dd>
                </div>

                <div className="detail-row">
                  <dt>
                    <Clock size={18} className="row-icon" aria-hidden="true" />
                    <span>Working Hours</span>
                  </dt>
                  <dd>
                    {currentOffice.workingHours}
                    <small className="working-hours-note"> (Sunday &amp; Gazetted Holidays: Closed)</small>
                  </dd>
                </div>
              </dl>

              <div className="icai-notice-box">
                <ShieldCheck size={16} aria-hidden="true" />
                <p>
                  Consultations and communications are conducted strictly in adherence to the Code of Ethics established by The Institute of Chartered Accountants of India (ICAI).
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

      {/* =========================================================================
          GOOGLE MAP / OFFICE LOCATION SECTION
          ========================================================================= */}
      <section className="section soft-bg map-embed-section" aria-label="Office Geographical Location">
        <div className="container">
          <div className="section-heading text-center">
            <div>
              <span className="eyebrow">Location &amp; Access</span>
              <h2>Office Location &amp; Directions</h2>
            </div>
            <p className="heading-subtext">
              Accessible premises for client conferences, statutory record reviews, and document verification.
            </p>
          </div>

          <div className="map-frame-wrapper">
            {currentOffice.googleMapsUrl ? (
              <iframe
                title="RJR & Company Office Location"
                src={currentOffice.googleMapsUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="google-map-iframe"
              />
            ) : (
              <div className="map-placeholder-box">
                <div className="map-pin-circle">
                  <Navigation size={28} className="map-nav-icon" aria-hidden="true" />
                </div>
                <h3>Premises Location Map</h3>
                <p className="map-address-preview">{currentOffice.address}</p>
                <div className="map-notice-pill">
                  <span>Google Maps location coordinates [TO BE PROVIDED]</span>
                </div>
                <p className="map-help-text">
                  The interactive Google Maps route directions will be displayed here once verified office premises coordinates are updated in the firm directory.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
