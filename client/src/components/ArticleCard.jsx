import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export default function ArticleCard({ article }) {
  return (
    <article className="article-card">
      <div className="article-top">
        <span className="article-category-badge">{article.category}</span>
        <div className="article-reading-info">
          <span className="info-item">
            <Calendar size={12} /> {article.date}
          </span>
          <span className="dot">•</span>
          <span className="info-item">
            <Clock size={12} /> {article.reading}
          </span>
        </div>
      </div>

      <h3 className="article-title">{article.title}</h3>
      <p className="article-summary">{article.summary}</p>

      <div className="article-footer">
        <Link to={`/insights/${article.slug}`} className="article-link">
          <span>Read Article</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
}
