import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, ArrowRight, Calendar, Clock, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import ArticleCard from '../components/ArticleCard';
import CategoryFilter from '../components/CategoryFilter';
import SearchBar from '../components/SearchBar';
import { articles, images } from '../data';

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Income Tax',
    'GST',
    'Audit',
    'Accounting',
    'Corporate Compliance',
    'General Guidance'
  ];

  const featuredArticle = articles[0];

  const filteredArticles = articles.filter((a) => {
    const matchesCategory = selectedCategory === 'All' || a.category === selectedCategory;
    const matchesSearch =
      a.title.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      a.summary.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      a.category.toLowerCase().includes(searchQuery.toLowerCase().trim());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="insights-page-view">
      <SEO
        title="Insights & Knowledge Center"
        description="R J R & Company — Professional articles, statutory compliance updates, tax guides, and audit documentation overviews."
      />

      <PageHero
        eyebrow="Knowledge Center"
        title="Insights & Guidance"
        intro="Technical perspectives on accounting standards, tax legislation, audit methodology, and regulatory compliance in India."
        image={images.tax}
        alt="Income tax reference books, documents, and compliance records"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Insights' }]}
      />

      {/* Featured Article Section */}
      {selectedCategory === 'All' && !searchQuery && featuredArticle && (
        <section className="section featured-article-section">
          <div className="container">
            <span className="eyebrow">Featured Overview</span>
            <div className="featured-card">
              <div className="featured-card-content">
                <div className="featured-badge-row">
                  <span className="category-pill active">{featuredArticle.category}</span>
                  <span className="reading-time">
                    <Clock size={13} /> {featuredArticle.reading}
                  </span>
                </div>
                <h2>{featuredArticle.title}</h2>
                <p className="featured-summary">{featuredArticle.summary}</p>
                <div className="featured-meta">
                  <span className="meta-author">By {featuredArticle.author}</span>
                  <span className="dot">•</span>
                  <span className="meta-date">{featuredArticle.date}</span>
                </div>
                <Link to={`/insights/${featuredArticle.slug}`} className="button primary featured-read-btn">
                  <span>Read Full Article</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Feed Section */}
      <section className="section soft-bg">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Browse Publications</span>
              <h2>Professional Guidance Notes</h2>
            </div>
            <p className="heading-subtext">
              Curated by Chartered Accountants to simplify regulatory obligations and procedural mandates.
            </p>
          </div>

          {/* Filter and Search Bar */}
          <div className="insights-toolbar">
            <CategoryFilter
              categories={categories}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
            <SearchBar
              id="insights-search"
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
              placeholder="Search guidance articles..."
              label="Search insights articles"
            />
          </div>

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="article-grid">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="empty-insights-state">
              <FileText size={44} className="empty-icon" />
              <h3>No articles found</h3>
              <p>No publications match your current search criteria or category filter.</p>
              <button
                type="button"
                className="button outline-primary"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
              >
                Clear Search & Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
