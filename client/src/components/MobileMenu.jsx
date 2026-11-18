import { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { X, Lock, PhoneCall, ShieldCheck } from 'lucide-react';
import { firmData } from '../data';

export default function MobileMenu({ isOpen, onClose, links = [] }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="mobile-overlay" role="presentation" onClick={onClose}>
      <div
        className="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site Navigation"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mobile-drawer-header">
          <div className="brand">
            <span className="brand-mark">RJR</span>
            <span className="brand-text">
              <strong>{firmData.name}</strong>
              <small>{firmData.type}</small>
            </span>
          </div>
          <button
            type="button"
            className="mobile-close-btn"
            aria-label="Close menu"
            onClick={onClose}
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-nav-links" aria-label="Mobile navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
              onClick={onClose}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <Link to="/client-login" className="mobile-portal-btn" onClick={onClose}>
            <Lock size={16} /> Client Login
          </Link>
          <Link to="/contact" className="mobile-contact-btn" onClick={onClose}>
            <PhoneCall size={16} /> Contact Office
          </Link>
          <div className="mobile-compliance-tag">
            <ShieldCheck size={14} /> Peer reviewed professional standards
          </div>
        </div>
      </div>
    </div>
  );
}
