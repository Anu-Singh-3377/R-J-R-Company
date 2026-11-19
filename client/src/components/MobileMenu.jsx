import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Lock, PhoneCall, ShieldCheck } from 'lucide-react';

export default function MobileMenu({
  isOpen,
  onClose,
  links = [],
  currentPath = '',
  isItemActive = () => false,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="mobile-overlay"
      role="presentation"
      onClick={onClose}
    >
      <div
        id="mobile-navigation-drawer"
        className="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mobile-drawer-header">
          <Link
            to="/"
            className="brand"
            onClick={onClose}
            aria-label="RJR & Company — Chartered Accountants"
          >
            <span className="brand-mark" aria-hidden="true">
              <span className="brand-monogram">RJR</span>
            </span>
            <span className="brand-text">
              <strong className="firm-name">RJR & Company</strong>
              <span className="firm-subtitle">Chartered Accountants</span>
            </span>
          </Link>
          <button
            type="button"
            className="mobile-close-btn"
            aria-label="Close navigation menu"
            onClick={onClose}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-nav-links" aria-label="Mobile primary navigation">
          {links.map((link) => {
            const active = isItemActive(currentPath, link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`mobile-link ${active ? 'active' : ''}`}
                aria-current={active ? 'page' : undefined}
                onClick={onClose}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mobile-drawer-footer">
          <Link
            to="/client-portal"
            className={`mobile-portal-btn ${currentPath.startsWith('/client-portal') || currentPath.startsWith('/client-login') ? 'active' : ''}`}
            onClick={onClose}
          >
            <Lock size={16} />
            <span>Client Portal</span>
          </Link>

          <Link
            to="/contact"
            className="mobile-contact-btn"
            onClick={onClose}
          >
            <PhoneCall size={16} />
            <span>Book an Appointment</span>
          </Link>

          <div className="mobile-compliance-tag">
            <ShieldCheck size={14} />
            <span>Peer reviewed professional standards</span>
          </div>
        </div>
      </div>
    </div>
  );
}
