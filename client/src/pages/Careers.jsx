import { useState, useRef } from 'react';
import {
  Briefcase,
  GraduationCap,
  MapPin,
  CheckCircle2,
  Send,
  Loader2,
  AlertCircle,
  Upload,
  FileCheck,
  X,
  FileText,
  Building,
  BookOpen,
  Users,
  TrendingUp,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import { jobOpenings, images } from '../data';

export default function Careers({ onNotification }) {
  // Category filter for vacancies
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Qualified CA', 'Semi-Qualified / Audit Assistant', 'Article Assistant'];

  const filteredJobs = jobOpenings.filter((job) => {
    if (selectedCategory === 'All') return true;
    return job.category === selectedCategory;
  });

  // Application form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: 'ICAI Article Assistant',
    icaiRegNo: '',
    qualification: '',
    message: '',
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [resumeError, setResumeError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successStatus, setSuccessStatus] = useState(false);
  const [serverError, setServerError] = useState('');

  const formSectionRef = useRef(null);
  const fileInputRef = useRef(null);

  // Handle clicking "Apply for this Position"
  const handleApplyClick = (jobTitle) => {
    setFormData((prev) => ({ ...prev, position: jobTitle }));
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Resume File Selection and Validation
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    validateAndSetFile(file);
  };

  const validateAndSetFile = (file) => {
    setResumeError('');
    if (!file) return;

    // Check extension and mime type
    const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
    if (!isPdf) {
      setResumeError('Only PDF documents (.pdf) are accepted. Please convert your resume to PDF.');
      if (fileInputRef.current) fileInputRef.current.value = '';
      setResumeFile(null);
      return;
    }

    // Check file size (5MB max)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      setResumeError('Resume file size must not exceed 5 MB.');
      if (fileInputRef.current) fileInputRef.current.value = '';
      setResumeFile(null);
      return;
    }

    setResumeFile(file);
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
    setResumeError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Form Field Validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Full name is required.';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Contact phone number is required.';
    } else if (formData.phone.trim().replace(/\D/g, '').length < 10) {
      errors.phone = 'Please enter a valid phone number (at least 10 digits).';
    }
    if (!formData.position.trim()) {
      errors.position = 'Please select the position you are applying for.';
    }
    if (!resumeFile) {
      errors.resume = 'Please upload your resume in PDF format.';
    }
    return errors;
  };

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: '' }));
    }
    if (serverError) setServerError('');
  };

  // Form Submission
  async function handleSubmit(e) {
    e.preventDefault();
    const errors = validateForm();
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setServerError('');

    try {
      const dataPayload = new FormData();
      dataPayload.append('name', formData.name.trim());
      dataPayload.append('email', formData.email.trim());
      dataPayload.append('phone', formData.phone.trim());
      dataPayload.append('position', formData.position.trim());
      dataPayload.append('icaiRegNo', formData.icaiRegNo.trim());
      dataPayload.append('qualification', formData.qualification.trim());
      dataPayload.append('message', formData.message.trim());
      if (resumeFile) {
        dataPayload.append('resume', resumeFile);
      }

      const response = await fetch('/api/applications', {
        method: 'POST',
        body: dataPayload,
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
        position: 'ICAI Article Assistant',
        icaiRegNo: '',
        qualification: '',
        message: '',
      });
      setResumeFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';

      onNotification?.({
        type: 'success',
        title: 'Application Submitted',
        message: 'Your application has been submitted successfully.',
      });
    } catch (err) {
      setServerError(err.message || 'Error submitting application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  // Format file size helper
  const formatFileSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <div className="careers-page-view">
      <SEO
        title="Careers & Articleship"
        description="RJR & Company — Build your professional experience through structured exposure to assurance, taxation, compliance, accounting, and advisory engagements."
      />

      <PageHero
        eyebrow="Careers & Articleship"
        title="Careers & Articleship"
        intro="Build your professional experience through structured exposure to assurance, taxation, compliance, accounting, and advisory engagements."
        image={images.about}
        alt="Chartered accountant mentorship and practical audit workspace at RJR & Company"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Careers' }]}
      />

      {/* =========================================================================
          SECTION 1: WHY JOIN RJR & COMPANY (WORK ENVIRONMENT)
          ========================================================================= */}
      <section className="section careers-why-section">
        <div className="container">
          <div className="section-heading text-center">
            <div>
              <span className="eyebrow">Professional Development</span>
              <h2>Why Join RJR &amp; Company</h2>
            </div>
            <p className="heading-subtext">
              We provide structured professional training, rigorous statutory exposure, and disciplined mentoring to develop competent accounting professionals.
            </p>
          </div>

          <div className="why-join-grid">
            <div className="why-join-card">
              <div className="why-icon-box" aria-hidden="true">
                <Building size={22} />
              </div>
              <h3>Diverse Industry Exposure</h3>
              <p>
                Exposure to engagements across diverse sectors including corporate enterprises, trading firms, small and medium enterprises (SMEs), and non-profit institutions.
              </p>
            </div>

            <div className="why-join-card">
              <div className="why-icon-box" aria-hidden="true">
                <BookOpen size={22} />
              </div>
              <h3>Structured Training</h3>
              <p>
                Practical exposure to statutory audit methodology, direct tax computations, GST returns, MCA filings, and working paper management aligned with ICAI standards.
              </p>
            </div>

            <div className="why-join-card">
              <div className="why-icon-box" aria-hidden="true">
                <Users size={22} />
              </div>
              <h3>Professional Mentorship</h3>
              <p>
                Direct learning and technical guidance from practicing Chartered Accountants and engagement partners on regulatory interpretation and professional ethics.
              </p>
            </div>

            <div className="why-join-card">
              <div className="why-icon-box" aria-hidden="true">
                <TrendingUp size={22} />
              </div>
              <h3>Responsibility &amp; Development</h3>
              <p>
                Progressive opportunities to take charge of compliance deliverables, client coordination, and analytical reviews as knowledge and experience advance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CURRENT OPENINGS & VACANCIES
          ========================================================================= */}
      <section className="section soft-bg" id="openings-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Vacancies &amp; Training</span>
              <h2>Current Professional Openings</h2>
            </div>
            <p className="heading-subtext">
              Review current vacancies for Qualified CAs, Audit Assistants, and ICAI Registered Article Trainees.
            </p>
          </div>

          {/* Job Filter Tabs / Dropdown */}
          <div className="job-filter-container">
            <span className="filter-label">Filter by Candidate Profile:</span>
            <div className="job-filter-pills" role="group" aria-label="Filter job openings by category">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`filter-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Openings Grid */}
          <div className="jobs-list-grid">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <article key={job.id} className="job-card">
                  <div className="job-header">
                    <div className="job-title-row">
                      <h3 className="job-title">{job.title}</h3>
                      <span className="job-badge">{job.category}</span>
                    </div>
                    <div className="job-meta-row">
                      <span className="job-location">
                        <MapPin size={14} aria-hidden="true" /> {job.location}
                      </span>
                      <span className="job-type-tag">
                        <Briefcase size={14} aria-hidden="true" /> {job.type}
                      </span>
                    </div>
                  </div>

                  <div className="job-section">
                    <strong>Eligibility:</strong>
                    <p>{job.eligibility}</p>
                  </div>

                  <div className="job-section">
                    <strong>Key Responsibilities:</strong>
                    <ul className="job-bullets">
                      {job.responsibilities.map((r, i) => (
                        <li key={i}>
                          <CheckCircle2 size={14} className="job-check" aria-hidden="true" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {job.preferredSkills && (
                    <div className="job-section">
                      <strong>Preferred Competencies:</strong>
                      <div className="skills-tags-row">
                        {job.preferredSkills.map((s, idx) => (
                          <span key={idx} className="skill-tag">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="job-apply-footer">
                    <button
                      type="button"
                      className="button primary apply-anchor-btn"
                      onClick={() => handleApplyClick(job.title)}
                    >
                      <span>Apply for this Position</span>
                      <ArrowRight size={15} aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <div className="no-openings-card">
                <FileText size={38} className="no-openings-icon" aria-hidden="true" />
                <h3>No Current Openings</h3>
                <p>
                  There are currently no active vacancies in this category. You may still submit an unsolicited application using the form below.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: APPLICATION FORM & PDF RESUME UPLOAD
          ========================================================================= */}
      <section className="section" id="application-form-section" ref={formSectionRef}>
        <div className="container career-form-container">
          <div className="section-heading text-center">
            <div>
              <span className="eyebrow">Submit Application</span>
              <h2>Candidate Application Form</h2>
            </div>
            <p className="heading-subtext">
              Submit your academic qualifications and verified PDF resume. Do not upload Aadhaar, PAN copies, or sensitive personal identity files.
            </p>
          </div>

          {successStatus ? (
            <div className="form-success-card" role="alert">
              <CheckCircle2 size={48} className="success-icon" />
              <h3>Application Submitted Successfully</h3>
              <p className="success-lead-message">
                Your application has been submitted successfully. Our team will review the information provided and contact you if your profile matches a current requirement.
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
            <form className="career-application-form" noValidate onSubmit={handleSubmit}>
              {serverError && (
                <div className="form-error-banner" role="alert">
                  <AlertCircle size={18} />
                  <span>{serverError}</span>
                </div>
              )}

              <div className="form-row two-cols">
                <div className="form-group">
                  <label htmlFor="career-name">
                    Full Name <span className="req" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="career-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className={fieldErrors.name ? 'input-error' : ''}
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={fieldErrors.name ? 'career-name-error' : undefined}
                  />
                  {fieldErrors.name && (
                    <span className="field-error-text" id="career-name-error">
                      {fieldErrors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="career-email">
                    Email Address <span className="req" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="career-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleFieldChange('email', e.target.value)}
                    placeholder="rahul@example.com"
                    className={fieldErrors.email ? 'input-error' : ''}
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={fieldErrors.email ? 'career-email-error' : undefined}
                  />
                  {fieldErrors.email && (
                    <span className="field-error-text" id="career-email-error">
                      {fieldErrors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-row two-cols">
                <div className="form-group">
                  <label htmlFor="career-phone">
                    Phone Number <span className="req" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="career-phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleFieldChange('phone', e.target.value)}
                    placeholder="+91 98765 43210"
                    className={fieldErrors.phone ? 'input-error' : ''}
                    aria-invalid={!!fieldErrors.phone}
                    aria-describedby={fieldErrors.phone ? 'career-phone-error' : undefined}
                  />
                  {fieldErrors.phone && (
                    <span className="field-error-text" id="career-phone-error">
                      {fieldErrors.phone}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="career-position">
                    Position Applied For <span className="req" aria-hidden="true">*</span>
                  </label>
                  <select
                    id="career-position"
                    name="position"
                    required
                    value={formData.position}
                    onChange={(e) => handleFieldChange('position', e.target.value)}
                  >
                    {jobOpenings.map((j) => (
                      <option key={j.id} value={j.title}>
                        {j.title}
                      </option>
                    ))}
                    <option value="General Professional Application">General Professional Application</option>
                  </select>
                </div>
              </div>

              {/* Conditional or designated ICAI Student/Member Registration Field */}
              {(formData.position.includes('Article') || formData.position.includes('CA') || formData.position.includes('Chartered')) && (
                <div className="form-group">
                  <label htmlFor="career-icai-reg">
                    ICAI Registration / Student Registration Number (SRN)
                    {formData.position.includes('Article') && <span className="label-hint"> (e.g. WRO0123456 / CRO / NRO)</span>}
                  </label>
                  <input
                    id="career-icai-reg"
                    name="icaiRegNo"
                    type="text"
                    value={formData.icaiRegNo}
                    onChange={(e) => handleFieldChange('icaiRegNo', e.target.value)}
                    placeholder="e.g. WRO0654321 or Membership No."
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="career-qualification">Academic &amp; Professional Qualifications</label>
                <input
                  id="career-qualification"
                  name="qualification"
                  type="text"
                  value={formData.qualification}
                  onChange={(e) => handleFieldChange('qualification', e.target.value)}
                  placeholder="e.g. CA Inter (Both Groups Cleared), B.Com (Hons), M.Com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="career-message">Brief Introduction / Prior Experience</label>
                <textarea
                  id="career-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => handleFieldChange('message', e.target.value)}
                  placeholder="Briefly mention your academic performance, accounting software skills (Tally Prime, Excel), or previous experience..."
                />
              </div>

              {/* PDF Resume Upload Dropzone */}
              <div className="form-group resume-upload-group">
                <label htmlFor="career-resume-file" className="resume-label">
                  PDF Resume Upload <span className="req" aria-hidden="true">*</span>
                  <span className="label-sub">(Only .pdf format, Maximum 5 MB)</span>
                </label>

                <input
                  ref={fileInputRef}
                  id="career-resume-file"
                  type="file"
                  accept="application/pdf,.pdf"
                  className="visually-hidden-file-input"
                  onChange={handleFileChange}
                />

                {!resumeFile ? (
                  <div
                    className={`resume-dropzone ${fieldErrors.resume || resumeError ? 'dropzone-error' : ''}`}
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault();
                      validateAndSetFile(e.dataTransfer.files?.[0]);
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        fileInputRef.current?.click();
                      }
                    }}
                  >
                    <Upload size={32} className="dropzone-icon" aria-hidden="true" />
                    <div className="dropzone-text">
                      <strong>Click to browse or drag &amp; drop your PDF resume</strong>
                      <span>Maximum permitted size: 5 MB &bull; Accepted format: .pdf</span>
                    </div>
                  </div>
                ) : (
                  <div className="selected-file-card">
                    <div className="file-info-group">
                      <FileCheck size={26} className="file-icon" aria-hidden="true" />
                      <div className="file-text-meta">
                        <strong className="file-name">{resumeFile.name}</strong>
                        <span className="file-size">{formatFileSize(resumeFile.size)} &bull; PDF Resume</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="remove-file-btn"
                      onClick={handleRemoveFile}
                      aria-label="Remove selected resume"
                    >
                      <X size={16} />
                      <span>Remove</span>
                    </button>
                  </div>
                )}

                {(fieldErrors.resume || resumeError) && (
                  <span className="field-error-text" role="alert">
                    {resumeError || fieldErrors.resume}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="button primary full-width career-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="spin-icon" />
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Submit Application</span>
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
