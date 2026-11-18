import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const preference = localStorage.getItem('rjr_cookie_pref');
    if (!preference) {
      setIsVisible(true);
    }
  }, []);

  function handleDecision(choice) {
    localStorage.setItem('rjr_cookie_pref', choice);
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <div className="cookie-banner-box" role="dialog" aria-label="Cookie Preferences">
      <div className="cookie-banner-inner">
        <div className="cookie-icon-wrap">
          <Cookie size={20} />
        </div>
        <div className="cookie-text-wrap">
          <p>
            We use strictly essential cookies and secure session tokens necessary for portal security and basic site navigation.
          </p>
        </div>
        <div className="cookie-actions-wrap">
          <button
            type="button"
            className="cookie-btn outline"
            onClick={() => handleDecision('essential_only')}
          >
            Essential Only
          </button>
          <button
            type="button"
            className="cookie-btn primary"
            onClick={() => handleDecision('accept_all')}
          >
            Accept
          </button>
          <Link to="/cookie-policy" className="cookie-more-link">
            Preferences
          </Link>
        </div>
      </div>
    </div>
  );
}
