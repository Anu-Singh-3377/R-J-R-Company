import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileText, ChevronRight } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

export default function ServiceSelector({ services = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!services.length) return null;
  const currentService = services[selectedIndex] || services[0];

  return (
    <div className="service-selector-wrapper">
      <div className="service-tabs" role="tablist" aria-label="Practice Area Selector">
        {services.map((service, idx) => (
          <button
            key={service.slug}
            type="button"
            role="tab"
            aria-selected={selectedIndex === idx}
            aria-controls={`panel-${service.slug}`}
            id={`tab-${service.slug}`}
            className={`tab-btn ${selectedIndex === idx ? 'active' : ''}`}
            onClick={() => setSelectedIndex(idx)}
          >
            {service.title}
          </button>
        ))}
      </div>

      <div
        className="selector-panel"
        id={`panel-${currentService.slug}`}
        role="tabpanel"
        aria-labelledby={`tab-${currentService.slug}`}
      >
        <div className="panel-image-container">
          <ImageWithFallback
            src={currentService.image}
            alt={`${currentService.title} professional documents and workspace`}
            className="panel-image"
          />
        </div>

        <div className="panel-content">
          <span className="eyebrow">Selected Practice Area</span>
          <h3>{currentService.title}</h3>
          <p className="panel-desc">{currentService.description}</p>

          {currentService.checklist && (
            <div className="panel-checklist">
              <h4>Typical Documentation Reviewed:</h4>
              <ul>
                {currentService.checklist.slice(0, 4).map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={16} className="item-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="panel-actions">
            <Link to={`/services/${currentService.slug}`} className="button primary">
              View Complete Service Details <ArrowRight size={16} />
            </Link>
            <Link to="/resources" className="text-link">
              <FileText size={15} /> View Related Checklists
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
