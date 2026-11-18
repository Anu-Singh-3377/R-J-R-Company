import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, ShieldAlert, Loader2 } from 'lucide-react';
import { services } from '../data';

export default function ContactForm({ onNotification }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

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
    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details of your enquiry.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters long.';
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
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to submit enquiry. Please try again.');
      }

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      onNotification?.({
        type: 'success',
        title: 'Enquiry Received',
        message: 'Your enquiry has been received. Our office will review your request.',
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
        <CheckCircle2 size={44} className="success-icon" />
        <h3>Your enquiry has been received.</h3>
        <p>
          Thank you for reaching out to R J R & Company. Our office will review your inquiry and connect with you during standard business hours.
        </p>
        <button
          type="button"
          className="button primary reset-form-btn"
          onClick={() => setSubmitSuccess(false)}
        >
          Submit Another Enquiry
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

      <div className="form-group">
        <label htmlFor="contact-name">
          Full Name <span className="req" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
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

      <div className="form-row two-cols">
        <div className="form-group">
          <label htmlFor="contact-email">
            Email Address <span className="req" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
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
          <label htmlFor="contact-phone">Contact Phone Number</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="contact-service">Practice Area / Service of Interest</label>
        <select
          id="contact-service"
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">Select a service category</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="General Professional Enquiry">General Professional Enquiry</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="contact-message">
          Enquiry Details <span className="req" aria-hidden="true">*</span>
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
          placeholder="Briefly state the nature of your requirement..."
          className={errors.message ? 'input-error' : ''}
        />
        {errors.message && (
          <span className="field-error-text" id="contact-message-error">
            {errors.message}
          </span>
        )}
      </div>

      <div className="privacy-warning-notice">
        <ShieldAlert size={18} className="warning-icon" />
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
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <Send size={16} />
            <span>Submit Enquiry</span>
          </>
        )}
      </button>
    </form>
  );
}
