import { useState, useEffect } from 'react';
import { Shield, Check } from 'lucide-react';
import { icaiDisclaimerText } from '../data';

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only prompt on first session visit
    try {
      const acknowledged = sessionStorage.getItem('rjr_disclaimer_ack');
      if (!acknowledged) {
        setIsOpen(true);
      }
    } catch {
      // In case session storage is restricted
      setIsOpen(false);
    }
  }, []);

  const handleAcknowledge = () => {
    try {
      sessionStorage.setItem('rjr_disclaimer_ack', 'true');
    } catch {
      // Ignore storage errors
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleAcknowledge();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="disclaimer-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-modal-title"
    >
      <div className="disclaimer-modal-card">
        <div className="disclaimer-modal-header">
          <div className="disclaimer-modal-icon-wrap" aria-hidden="true">
            <Shield size={24} />
          </div>
          <div>
            <span className="disclaimer-sub">Statutory Compliance Notice</span>
            <h2 id="disclaimer-modal-title" className="disclaimer-title">
              ICAI Regulatory Disclaimer
            </h2>
          </div>
        </div>

        <div className="disclaimer-modal-content">
          <p className="disclaimer-official-text">{icaiDisclaimerText}</p>
          <p className="disclaimer-ack-sub">
            By clicking &ldquo;I Acknowledge &amp; Agree&rdquo;, you confirm that you are accessing this portal voluntarily for informational purposes.
          </p>
        </div>

        <div className="disclaimer-modal-actions">
          <button
            type="button"
            className="button primary disclaimer-agree-btn"
            onClick={handleAcknowledge}
            autoFocus
          >
            <Check size={16} aria-hidden="true" />
            <span>I Acknowledge &amp; Agree</span>
          </button>
        </div>
      </div>
    </div>
  );
}
