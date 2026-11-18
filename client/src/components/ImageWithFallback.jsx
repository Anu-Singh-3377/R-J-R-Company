import { useState } from 'react';
import { Landmark } from 'lucide-react';

export default function ImageWithFallback({ src, alt, className = '', loading = 'lazy' }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className={`image-fallback ${className}`} role="img" aria-label={alt || 'R J R & Company'}>
        <Landmark className="fallback-icon" />
        <span className="fallback-label">R J R & Company</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
