import { useState } from 'react';
import { Briefcase, GraduationCap, MapPin, CheckCircle2, Send, Loader2, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { images } from '../data';

export default function Careers({ onNotification }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'Articleship Trainee (CA Inter / IPCC)',
    qualification: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successStatus, setSuccessStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const openings = [
    {
      id: 'job-1',
      title: 'Articleship Trainee (CA Inter / IPCC)',
      category: 'Articleship',
      location: 'Head Office',
      eligibility: 'Cleared either or both groups of CA Intermediate (IPCC) under ICAI regulations.',
      responsibilities: [
        'Assisting in statutory audit procedures, vouching, and analytical review of accounting ledgers.',
        'Preparation of draft income tax computations and verification of supporting documentation.',
        'Assistance in filing GST monthly/quarterly returns and bank reconciliations.',
        'Maintenance of audit working papers and compliance files.'
      ],
      howToApply: 'Submit your resume along with CA Intermediate marksheets through the career application form below.'
    },
    {
      id: 'job-2',
      title: 'Audit & Accounts Assistant',
      category: 'Other Openings',
      location: 'Head Office',
      eligibility: 'B.Com / M.Com / Semi-Qualified with 1-2 years experience in tally or accounting software.',
      responsibilities: [
        'Bookkeeping and maintenance of primary accounting records in compliance with Indian Accounting Standards.',
        'Preparation of monthly TDS, GST, and payroll summaries.',
        'Drafting quarterly and annual financial statements for review by the engagement partner.'
      ],
      howToApply: 'Submit your CV with details of prior accounting software experience and work history.'
    },
    {
      id: 'job-3',
      title: 'Commerce Internship (Undergraduate)',
      category: 'Internships',
      location: 'Head Office',
      eligibility: 'Undergraduate commerce students seeking practical exposure to corporate accounting.',
      responsibilities: [
        'Primary voucher organization and invoice categorization.',
        'Assisting with basic reconciliation schedules and filing preparation.',
        'Digital records maintenance and compliance file indexing.'
      ],
      howToApply: 'Apply using the form below specifying university requirements and internship duration.'
    }
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.position.trim()) {
      setErrorMessage('Please fill in your name, email, and selected position.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit application.');
      }

      setSuccessStatus(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: 'Articleship Trainee (CA Inter / IPCC)',
        qualification: '',
        message: '',
      });
      onNotification?.({
        type: 'success',
        title: 'Application Received',
        message: 'Your application has been recorded. Our team will review your qualifications.',
      });
    } catch (err) {
      setErrorMessage(err.message || 'Error submitting application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="careers-page-view">
      <SEO
        title="Careers & Articleship"
        description="R J R & Company — Opportunities for CA Articleship, commerce internships, and professional accounting assistants."
      />

      <PageHero
        eyebrow="Join the Practice"
        title="Career Opportunities"
        intro="Structured professional training, rigorous compliance exposure, and growth for aspiring Chartered Accountants."
        image={images.about}
        alt="Professional accounting and audit team workplace"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Careers' }]}
      />

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Vacancies & Training</span>
              <h2>Current Professional Openings</h2>
            </div>
            <p className="heading-subtext">
              We offer comprehensive practical training in statutory audit, tax litigation support, GST compliance, and corporate finance.
            </p>
          </div>

          <div className="jobs-list-grid">
            {openings.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <div className="job-title-row">
                    <h3>{job.title}</h3>
                    <span className="job-badge">{job.category}</span>
                  </div>
                  <span className="job-location">
                    <MapPin size={14} /> {job.location}
                  </span>
                </div>

                <div className="job-section">
                  <strong>Eligibility:</strong>
                  <p>{job.eligibility}</p>
                </div>

                <div className="job-section">
                  <strong>Key Responsibilities:</strong>
                  <ul>
                    {job.responsibilities.map((r, i) => (
                      <li key={i}>
                        <CheckCircle2 size={14} className="job-check" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="job-apply-footer">
                  <small><strong>How to apply:</strong> {job.howToApply}</small>
                  <a
                    href="#application-form-section"
                    className="button outline-primary apply-anchor-btn"
                    onClick={() => setFormData((p) => ({ ...p, position: job.title }))}
                  >
                    Apply for this Position
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="section soft-bg" id="application-form-section">
        <div className="container career-form-container">
          <div className="section-heading text-center">
            <div>
              <span className="eyebrow">Submit Details</span>
              <h2>Apply for Articleship or Openings</h2>
            </div>
            <p className="heading-subtext">
              Submit only necessary qualifications and professional background. Do not upload Aadhaar or sensitive personal identity files.
            </p>
          </div>

          {successStatus ? (
            <div className="form-success-card">
              <CheckCircle2 size={44} className="success-icon" />
              <h3>Your application details have been received.</h3>
              <p>
                Thank you for your interest in R J R & Company. Eligible candidates will be contacted for an interview when articleship vacancies arise.
              </p>
              <button
                type="button"
                className="button primary"
                onClick={() => setSuccessStatus(false)}
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form className="career-application-form" onSubmit={handleSubmit}>
              {errorMessage && (
                <div className="form-error-banner">
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="form-row two-cols">
                <div className="form-group">
                  <label htmlFor="career-name">Full Name *</label>
                  <input
                    id="career-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    placeholder="e.g. Priya Sharma"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="career-email">Email Address *</label>
                  <input
                    id="career-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    placeholder="priya@example.com"
                  />
                </div>
              </div>

              <div className="form-row two-cols">
                <div className="form-group">
                  <label htmlFor="career-phone">Phone Number</label>
                  <input
                    id="career-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="career-position">Position Applied For *</label>
                  <select
                    id="career-position"
                    name="position"
                    required
                    value={formData.position}
                    onChange={(e) => setFormData((p) => ({ ...p, position: e.target.value }))}
                  >
                    {openings.map((j) => (
                      <option key={j.id} value={j.title}>
                        {j.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="career-qualification">Academic & Professional Qualifications</label>
                <input
                  id="career-qualification"
                  name="qualification"
                  type="text"
                  value={formData.qualification}
                  onChange={(e) => setFormData((p) => ({ ...p, qualification: e.target.value }))}
                  placeholder="e.g. CA Inter Both Groups, B.Com (Honours)"
                />
              </div>

              <div className="form-group">
                <label htmlFor="career-message">Brief Introduction / Prior Experience</label>
                <textarea
                  id="career-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  placeholder="Mention your CA Inter passing attempt, software skills (Tally, Excel), or relevant training..."
                />
              </div>

              <button
                type="submit"
                className="button primary full-width"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="spin-icon" /> Submitting Application...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Submit Application
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
