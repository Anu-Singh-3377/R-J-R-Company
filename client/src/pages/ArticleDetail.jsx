import { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, ArrowLeft, ShieldAlert, BookOpen, Share2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import ArticleCard from '../components/ArticleCard';
import { articles, images } from '../data';

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <div className="article-detail-view">
      <SEO
        title={article.title}
        description={`R J R & Company Insights — ${article.title}. ${article.summary}`}
      />

      {/* Reading Progress Indicator Bar */}
      <div
        className="reading-progress-track"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      >
        <div className="reading-progress-fill" style={{ width: `${scrollProgress}%` }} />
      </div>

      <PageHero
        eyebrow={article.category}
        title={article.title}
        intro={article.summary}
        image={images.tax}
        alt="Statutory reference guidance and financial accounting records"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Insights', to: '/insights' },
          { label: article.title },
        ]}
      />

      <section className="section">
        <div className="container article-reading-layout">
          {/* Main Article Content */}
          <article className="article-body-container">
            <div className="article-byline">
              <span className="byline-item">
                <User size={14} /> {article.author}
              </span>
              <span className="dot">•</span>
              <span className="byline-item">
                <Calendar size={14} /> {article.date}
              </span>
              <span className="dot">•</span>
              <span className="byline-item">
                <Clock size={14} /> {article.reading}
              </span>
            </div>

            <div className="article-prose">
              {article.content.map((paragraph, idx) => (
                <p key={idx} className="prose-p">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Statutory Disclaimer Box */}
            <div className="article-statutory-notice">
              <div className="notice-icon-box">
                <ShieldAlert size={22} />
              </div>
              <div>
                <h4>General Guidance Disclaimer</h4>
                <p>
                  The content published herein is for general instructional and informative purposes only and does not constitute formal professional advice, statutory audit opinion, or a legal certification. Laws, tax rates, and regulatory notifications are subject to periodic change by statutory authorities. Clients should seek individualized professional counsel from an R J R & Company partner before acting on specific factual matters.
                </p>
              </div>
            </div>

            {/* Back link */}
            <div className="article-bottom-actions">
              <Link to="/insights" className="button outline-primary">
                <ArrowLeft size={16} />
                <span>Back to Knowledge Center</span>
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="article-sidebar">
            <div className="sidebar-card article-author-card">
              <span className="eyebrow">Published By</span>
              <h3>R J R & Company</h3>
              <p>Chartered Accountants</p>
              <p className="firm-brief">
                Providing specialized accounting, statutory audit, taxation and corporate compliance solutions.
              </p>
              <Link to="/contact" className="button primary full-width">
                Contact Office
              </Link>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="sidebar-card related-articles-card">
                <h3>Related Publications</h3>
                <div className="related-list">
                  {relatedArticles.map((rel) => (
                    <div key={rel.slug} className="related-item">
                      <span className="related-cat">{rel.category}</span>
                      <h4>
                        <Link to={`/insights/${rel.slug}`}>{rel.title}</Link>
                      </h4>
                      <small>{rel.reading}</small>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </div>
  );
}
