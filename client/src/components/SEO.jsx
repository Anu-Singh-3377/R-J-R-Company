import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEO({ title, description, canonical }) {
  const location = useLocation();

  useEffect(() => {
    // Title
    const fullTitle = title
      ? `${title} | R J R & Company`
      : 'R J R & Company | Chartered Accountants';
    document.title = fullTitle;

    // Meta Description
    const metaDescContent =
      description ||
      'R J R & Company, Chartered Accountants — professional accounting, taxation, audit and regulatory compliance services.';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = metaDescContent;

    // OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = fullTitle;

    // OpenGraph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = metaDescContent;

    // OpenGraph Type
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.content = 'website';

    // Canonical link
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = canonical || window.location.origin + location.pathname;
  }, [title, description, canonical, location.pathname]);

  return null;
}
