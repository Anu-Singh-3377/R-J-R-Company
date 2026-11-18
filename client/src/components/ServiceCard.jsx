import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, ShieldCheck, FileText, Landmark, Calculator, Building, TrendingUp } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback';

const iconMap = {
  'audit-assurance': ShieldCheck,
  'income-tax': FileText,
  'gst': Calculator,
  'accounting': Landmark,
  'company-compliance': Building,
  'business-advisory': TrendingUp,
};

export default function ServiceCard({ service, variant = 'standard' }) {
  const IconComponent = iconMap[service.slug] || FileText;

  if (variant === 'image') {
    return (
      <Link to={`/services/${service.slug}`} className="service-card image-card">
        <div className="card-image-wrap">
          <ImageWithFallback
            src={service.image}
            alt={`${service.title} documentation and accounting workspace`}
            className="service-card-image"
          />
          <div className="card-icon-badge">
            <IconComponent size={20} />
          </div>
        </div>
        <div className="card-body">
          <h3>{service.title}</h3>
          <p>{service.shortDescription || service.description}</p>
          {service.whoMayRequire && (
            <div className="who-requires">
              <span className="who-label">Applicable for:</span>
              <span className="who-tag">{service.whoMayRequire[0]}</span>
            </div>
          )}
          <span className="card-link">
            View Details <ArrowRight size={15} />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/services/${service.slug}`} className="service-card standard-card">
      <div className="icon-box">
        <IconComponent size={24} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.shortDescription || service.description}</p>
      <span className="card-link">
        Explore Service <ChevronRight size={16} />
      </span>
    </Link>
  );
}
