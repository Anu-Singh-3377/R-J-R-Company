import { Link } from 'react-router-dom';
import { Landmark, ArrowLeft, Home, Search } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="notfound-page-view">
      <SEO
        title="Page Not Found (404)"
        description="The requested page could not be located on the R J R & Company website."
      />

      <div className="container notfound-container">
        <div className="notfound-card">
          <div className="notfound-badge">404</div>
          <h1>Page Not Found</h1>
          <p className="notfound-text">
            The URL you requested could not be located. The link may have changed, or the statutory guidance has been moved to a different practice section.
          </p>

          <div className="notfound-action-buttons">
            <Link to="/" className="button primary">
              <Home size={16} /> Return to Home
            </Link>
            <Link to="/services" className="button outline-primary">
              Browse Services Directory
            </Link>
            <Link to="/contact" className="button outline-primary">
              Contact Office
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
