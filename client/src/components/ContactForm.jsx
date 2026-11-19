import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, ShieldAlert, Loader2, Building } from 'lucide-react';

export default function ContactForm({ onNotification }) {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  const serviceOptions = [
    'Audit & Assurance',
    'Direct & Indirect Taxation',
    'Corporate Laws & Regulatory Compliance',
    'Financial Advisory & Virtual CFO',
    'General Inquiry',
    'Other'
  ];

  function validate() {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact phone number is required.';
    } else if (formData.phone.trim().replace(/\D/g, '').length < 10) {
      errs.phone = 'Please enter a valid phone number (at least 10 digits).';
    }
    if (!formData.service.trim()) {
      errs.service = 'Please select a service category.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide details of your enquiry.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Enquiry message should be at least 10 characters long.';
    }
    return errs;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (serverError) setServerError('');
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setServerError('');

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          organization: formData.organization.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: formData.service.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to submit enquiry. Please try again.');
      }

      setSubmitSuccess(true);
      setFormData({
        name: '',
        organization: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      onNotification?.({
        type: 'success',
        title: 'Enquiry Received',
        message: 'Your inquiry has been received and will be reviewed by our team.',
      });
    } catch (err) {
      const errorMsg = err.message || 'Something went wrong. Please try again or contact the office directly.';
      setServerError(errorMsg);
      onNotification?.({
        type: 'error',
        title: 'Submission Error',
        message: errorMsg,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitSuccess) {
    return (
      <div className="form-success-card" role="alert">
        <CheckCircle2 size={48} className="success-icon" />
        <h3>Inquiry Received Successfully</h3>
        <p className="success-lead-message">
          Thank you for contacting RJR &amp; Company. Your inquiry has been received and will be reviewed by our team.
        </p>
        <button
          type="button"
          className="button primary reset-form-btn"
          onClick={() => setSubmitSuccess(false)}
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="form-header">
        <h3>Submit a Professional Enquiry</h3>
        <p>Kindly provide your contact information and general query.</p>
      </div>

      {serverError && (
        <div className="form-error-banner" role="alert">
          <AlertCircle size={18} />
          <span>{serverError}</span>
        </div>
      )}

      <div className="form-row two-cols">
        <div className="form-group">
          <label htmlFor="contact-name">
            Full Name <span className="req" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            placeholder="e.g. Rajesh Kumar"
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && (
            <span className="field-error-text" id="contact-name-error">
              {errors.name}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="contact-org">Organization / Entity Name</label>
          <input
            id="contact-org"
            name="organization"
            type="text"
            value={formData.organization}
            onChange={handleChange}
            placeholder="e.g. ABC Enterprises Pvt Ltd"
          />
        </div>
      </div>

      <div className="form-row two-cols">
        <div className="form-group">
          <label htmlFor="contact-email">
            Email Address <span className="req" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            placeholder="rajesh@example.com"
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && (
            <span className="field-error-text" id="contact-email-error">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="contact-phone">
            Phone Number <span className="req" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
            placeholder="+91 98765 43210"
            className={errors.phone ? 'input-error' : ''}
          />
          {errors.phone && (
            <span className="field-error-text" id="contact-phone-error">
              {errors.phone}
            </span>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="contact-service">
          Service Category <span className="req" aria-hidden="true">*</span>
        </label>
        <select
          id="contact-service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? 'contact-service-error' : undefined}
          className={errors.service ? 'input-error' : ''}
        >
          <option value="">Select a service category</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.service && (
          <span className="field-error-text" id="contact-service-error">
            {errors.service}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="contact-message">
          Brief Message <span className="req" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          placeholder="Briefly state the nature of your requirement (e.g. Statutory Audit, Corporate Tax Filing, GST Advisory)..."
          className={errors.message ? 'input-error' : ''}
        />
        {errors.message && (
          <span className="field-error-text" id="contact-message-error">
            {errors.message}
          </span>
        )}
      </div>

      <div className="privacy-warning-notice">
        <ShieldAlert size={18} className="warning-icon" aria-hidden="true" />
        <p>
          <strong>Confidentiality Notice:</strong> Please do not submit PAN, Aadhaar, OTPs, bank login details, tax portal passwords, or sensitive identity documents through this general enquiry form.
        </p>
      </div>

      <button
        type="submit"
        className="button primary submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="spin-icon" />
            <span>Submitting Inquiry...</span>
          </>
        ) : (
          <>
            <Send size={16} />
            <span>Submit Inquiry</span>
          </>
        )}
      </button>
    </form>
  );
}
