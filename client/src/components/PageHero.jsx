import Breadcrumb from './Breadcrumb';
import ImageWithFallback from './ImageWithFallback';

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  alt = 'R J R & Company professional office workspace',
  breadcrumbs = [],
}) {
  return (
    <section className="page-hero">
      <ImageWithFallback src={image} alt={alt} className="page-hero-image" />
      <div className="page-hero-shade" />
      <div className="container page-hero-content">
        {breadcrumbs.length > 0 && <Breadcrumb items={breadcrumbs} />}
        {eyebrow && <span className="eyebrow light">{eyebrow}</span>}
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
      </div>
    </section>
  );
}
