import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Landmark, Lock, ArrowRight } from 'lucide-react';
import { firmData } from '../data';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/partners', label: 'Partners' },
    { to: '/resources', label: 'Resources' },
    { to: '/insights', label: 'Insights' },
    { to: '/careers', label: 'Careers' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="brand" aria-label="R J R & Company home">
            <span className="brand-mark" aria-hidden="true">RJR</span>
            <span className="brand-text">
              <strong className="firm-name">{firmData.name}</strong>
              <small className="firm-subtitle">{firmData.type}</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <Link to="/client-login" className="action-login" aria-label="Client Login Portal">
              <Lock size={14} />
              <span>Client Login</span>
            </Link>
            <Link to="/contact" className="action-contact-btn">
              Contact Office
            </Link>
            <button
              type="button"
              className="menu-button"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
}
