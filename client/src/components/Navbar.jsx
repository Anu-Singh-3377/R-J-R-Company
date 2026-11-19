import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Lock } from 'lucide-react';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Practice Areas' },
    { to: '/partners', label: 'Partners' },
    { to: '/insights', label: 'Knowledge Bank' },
    { to: '/careers', label: 'Careers' },
    { to: '/contact', label: 'Contact Us' },
  ];

  function isItemActive(pathname, linkTo) {
    if (linkTo === '/') return pathname === '/';
    if (linkTo === '/about') return pathname === '/about' || pathname === '/about-us';
    if (linkTo === '/services') return pathname.startsWith('/services') || pathname.startsWith('/practice-areas');
    if (linkTo === '/partners') return pathname.startsWith('/partners');
    if (linkTo === '/insights') return pathname.startsWith('/insights') || pathname.startsWith('/knowledge-bank');
    if (linkTo === '/careers') return pathname.startsWith('/careers');
    if (linkTo === '/contact') return pathname === '/contact' || pathname === '/contact-us';
    return pathname === linkTo;
  }

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          {/* Logo / Company Identity Brand Block */}
          <Link to="/" className="brand" aria-label="RJR & Company — Chartered Accountants">
            <span className="brand-mark" aria-hidden="true">
              <span className="brand-monogram">RJR</span>
            </span>
            <span className="brand-text">
              <strong className="firm-name">RJR & Company</strong>
              <span className="firm-subtitle">Chartered Accountants</span>
            </span>
          </Link>

          {/* Primary Horizontal Navigation */}
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map((link) => {
              const active = isItemActive(location.pathname, link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-link ${active ? 'active' : ''}`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Far Right Action: Client Portal CTA + Mobile Menu Button */}
          <div className="header-actions">
            <Link
              to="/client-portal"
              className={`header-cta ${location.pathname.startsWith('/client-portal') || location.pathname.startsWith('/client-login') ? 'active' : ''}`}
              aria-label="Client Portal"
            >
              <Lock size={14} className="cta-icon" aria-hidden="true" />
              <span>Client Portal</span>
            </Link>

            <button
              type="button"
              className="menu-button"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Responsive Mobile/Tablet Navigation Drawer */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
        currentPath={location.pathname}
        isItemActive={isItemActive}
      />
    </>
  );
}
