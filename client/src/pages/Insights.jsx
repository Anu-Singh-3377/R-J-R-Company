import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  FileText,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  AlertCircle,
  Building2,
  Landmark,
  Award,
  Globe,
  X,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Info
} from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import ArticleCard from '../components/ArticleCard';
import {
  complianceMonths,
  complianceCalendar,
  regulatoryUpdates,
  officialGovernmentLinks,
  articles,
  images
} from '../data';

export default function Insights() {
  // Navigation tabs for Knowledge Bank
  const [activeTab, setActiveTab] = useState('calendar'); // 'calendar' | 'updates' | 'links' | 'guidance'

  // --- Monthly Compliance Calendar State ---
  const [currentMonthIndex, setCurrentMonthIndex] = useState(1); // default '2026-11'
  const [calendarCategory, setCalendarCategory] = useState('All');

  const currentMonth = complianceMonths[currentMonthIndex] || complianceMonths[1];
  const allCurrentMonthItems = complianceCalendar[currentMonth.key] || [];

  const calendarCategories = ['All', 'GST', 'TDS/TCS', 'Direct Tax', 'Corporate Law'];

  const filteredComplianceItems = useMemo(() => {
    return allCurrentMonthItems.filter((item) => {
      if (calendarCategory === 'All') return true;
      return item.category.toLowerCase().includes(calendarCategory.toLowerCase());
    });
  }, [allCurrentMonthItems, calendarCategory]);

  const handlePrevMonth = () => {
    if (currentMonthIndex > 0) {
      setCurrentMonthIndex((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonthIndex < complianceMonths.length - 1) {
      setCurrentMonthIndex((prev) => prev + 1);
    }
  };

  // --- Regulatory Updates State ---
  const [selectedAuthority, setSelectedAuthority] = useState('All');
  const [activeModalUpdate, setActiveModalUpdate] = useState(null);

  const authorities = ['All', 'CBDT', 'CBIC', 'MCA', 'RBI', 'ICAI'];

  const filteredUpdates = useMemo(() => {
    return regulatoryUpdates.filter((update) => {
      if (selectedAuthority === 'All') return true;
      return update.authority === selectedAuthority;
    });
  }, [selectedAuthority]);

  // --- Technical Guidance Articles State ---
  const [articleCategory, setArticleCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const articleCategories = [
    'All',
    'Income Tax',
    'GST',
    'Audit',
    'Accounting',
    'Corporate Compliance',
    'General Guidance'
  ];

  const filteredArticles = useMemo(() => {
    return articles.filter((a) => {
      const matchesCategory = articleCategory === 'All' || a.category === articleCategory;
      const matchesSearch =
        a.title.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        a.summary.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        a.category.toLowerCase().includes(searchQuery.toLowerCase().trim());
      return matchesCategory && matchesSearch;
    });
  }, [articleCategory, searchQuery]);

  return (
    <div className="insights-page-view knowledge-bank-view">
      <SEO
        title="Knowledge Bank & Regulatory Updates"
        description="R J R & Company — Practical regulatory updates, compliance information, monthly compliance calendar, and selected official resources for businesses and professionals."
      />

      <PageHero
        eyebrow="Knowledge Bank & Regulatory Updates"
        title="Knowledge Bank"
        intro="Practical regulatory updates, compliance information, and selected resources for businesses and professionals."
        image={images.tax}
        alt="Chartered accountant consulting financial compliance documentation and tax regulations"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Knowledge Bank' }]}
      />

      {/* Knowledge Bank Section Tabs */}
      <section className="section kb-nav-section">
        <div className="container">
          <div className="kb-tabs-bar" role="tablist" aria-label="Knowledge Bank areas">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'calendar'}
              className={`kb-tab-btn ${activeTab === 'calendar' ? 'active' : ''}`}
              onClick={() => setActiveTab('calendar')}
            >
              <Calendar size={18} aria-hidden="true" />
              <span>Compliance Calendar</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'updates'}
              className={`kb-tab-btn ${activeTab === 'updates' ? 'active' : ''}`}
              onClick={() => setActiveTab('updates')}
            >
              <AlertCircle size={18} aria-hidden="true" />
              <span>Regulatory Updates</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'links'}
              className={`kb-tab-btn ${activeTab === 'links' ? 'active' : ''}`}
              onClick={() => setActiveTab('links')}
            >
              <Globe size={18} aria-hidden="true" />
              <span>Government Links</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'guidance'}
              className={`kb-tab-btn ${activeTab === 'guidance' ? 'active' : ''}`}
              onClick={() => setActiveTab('guidance')}
            >
              <BookOpen size={18} aria-hidden="true" />
              <span>Guidance Notes</span>
            </button>
          </div>

          {/* =========================================================================
              AREA 1: MONTHLY COMPLIANCE CALENDAR
              ========================================================================= */}
          {activeTab === 'calendar' && (
            <div className="kb-area-pane" role="tabpanel" aria-label="Monthly Compliance Calendar">
              <div className="area-intro-block">
                <div>
                  <span className="eyebrow">Statutory Due Dates</span>
                  <h2>Monthly Compliance Calendar</h2>
                  <p className="area-description">
                    Key statutory filing, advance tax, TDS deposit, and GST compliance milestones for businesses, companies, and taxpayers.
                  </p>
                </div>

                <div className="calendar-controls-wrapper">
                  {/* Month Navigation */}
                  <div className="month-navigation-control" aria-label="Month navigator">
                    <button
                      type="button"
                      className="month-nav-btn"
                      disabled={currentMonthIndex === 0}
                      onClick={handlePrevMonth}
                      aria-label="Previous month"
                    >
                      <ChevronLeft size={18} />
                      <span className="month-nav-label-desktop">
                        {currentMonthIndex > 0 ? complianceMonths[currentMonthIndex - 1].monthName : ''}
                      </span>
                    </button>

                    <div className="current-month-display" aria-live="polite">
                      <strong>{currentMonth.label}</strong>
                    </div>

                    <button
                      type="button"
                      className="month-nav-btn"
                      disabled={currentMonthIndex === complianceMonths.length - 1}
                      onClick={handleNextMonth}
                      aria-label="Next month"
                    >
                      <span className="month-nav-label-desktop">
                        {currentMonthIndex < complianceMonths.length - 1
                          ? complianceMonths[currentMonthIndex + 1].monthName
                          : ''}
                      </span>
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Category Filter for Calendar */}
              <div className="compliance-filter-bar">
                <span className="filter-label">Filter by Tax Category:</span>
                <div className="filter-pills-row" role="group" aria-label="Filter compliance items by category">
                  {calendarCategories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      className={`filter-pill-btn ${calendarCategory === cat ? 'active' : ''}`}
                      onClick={() => setCalendarCategory(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Indicative Disclaimer Notice */}
              <div className="compliance-disclaimer-banner" role="note">
                <Info size={17} className="banner-icon" aria-hidden="true" />
                <p>
                  <strong>Compliance Note:</strong> Due dates are indicative and may be modified by the relevant authorities through gazette notifications, holiday declarations, or turnover-based relief. Please refer to the applicable government portal for verified notifications.
                </p>
              </div>

              {/* Desktop Table View */}
              <div className="desktop-calendar-table-wrapper" aria-label="Compliance dates table">
                <table className="compliance-data-table">
                  <thead>
                    <tr>
                      <th scope="col" style={{ width: '130px' }}>Date</th>
                      <th scope="col" style={{ width: '220px' }}>Compliance Item</th>
                      <th scope="col" style={{ width: '130px' }}>Category</th>
                      <th scope="col" style={{ width: '220px' }}>Applicable Entity</th>
                      <th scope="col">Description</th>
                      <th scope="col" style={{ width: '120px' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredComplianceItems.length > 0 ? (
                      filteredComplianceItems.map((item) => (
                        <tr key={item.id} className={`compliance-row status-${item.status.toLowerCase()}`}>
                          <td className="col-date">
                            <span className="date-badge">
                              <span className="date-day">{item.day}</span>
                              <span className="date-month">{item.month}</span>
                            </span>
                          </td>
                          <td className="col-compliance">
                            <strong>{item.compliance}</strong>
                          </td>
                          <td className="col-category">
                            <span className={`cat-tag cat-${item.category.toLowerCase().replace(/[^a-z]/g, '')}`}>
                              {item.category}
                            </span>
                          </td>
                          <td className="col-applicable">
                            <span>{item.applicableTo}</span>
                          </td>
                          <td className="col-desc">
                            <p>{item.description}</p>
                          </td>
                          <td className="col-status">
                            <span className={`status-pill pill-${item.status.toLowerCase()}`}>
                              <span className="status-dot" aria-hidden="true" />
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="empty-calendar-td">
                          No compliance items found for category &ldquo;{calendarCategory}&rdquo; in {currentMonth.label}.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Mobile Stacked Cards View */}
              <div className="mobile-calendar-cards-list" aria-label="Compliance dates list">
                {filteredComplianceItems.length > 0 ? (
                  filteredComplianceItems.map((item) => (
                    <article key={item.id} className={`compliance-mobile-card status-${item.status.toLowerCase()}`}>
                      <div className="mobile-card-header">
                        <div className="mobile-date-badge">
                          <span className="m-day">{item.day}</span>
                          <span className="m-month">{item.month}</span>
                        </div>
                        <div className="mobile-card-title-group">
                          <span className={`cat-tag cat-${item.category.toLowerCase().replace(/[^a-z]/g, '')}`}>
                            {item.category}
                          </span>
                          <span className={`status-pill pill-${item.status.toLowerCase()}`}>
                            <span className="status-dot" aria-hidden="true" />
                            {item.status}
                          </span>
                        </div>
                      </div>

                      <div className="mobile-card-body">
                        <h3 className="mobile-compliance-title">{item.compliance}</h3>
                        <div className="mobile-applicable-row">
                          <strong>Applicable To:</strong>
                          <span>{item.applicableTo}</span>
                        </div>
                        <p className="mobile-compliance-desc">{item.description}</p>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="empty-mobile-calendar">
                    <p>No items found for selected filter.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* =========================================================================
              AREA 2: REGULATORY CIRCULARS & UPDATES
              ========================================================================= */}
          {activeTab === 'updates' && (
            <div className="kb-area-pane" role="tabpanel" aria-label="Regulatory Circulars & Updates">
              <div className="area-intro-block">
                <div>
                  <span className="eyebrow">Official Regulatory Tracking</span>
                  <h2>Regulatory Circulars &amp; Updates</h2>
                  <p className="area-description">
                    Factual, objective summaries of circulars, procedural notifications, and clarifications issued by statutory authorities in India.
                  </p>
                </div>
              </div>

              {/* Authority Filter Bar */}
              <div className="compliance-filter-bar">
                <span className="filter-label">Filter by Regulatory Authority:</span>
                <div className="filter-pills-row" role="group" aria-label="Filter updates by regulatory authority">
                  {authorities.map((auth) => (
                    <button
                      key={auth}
                      type="button"
                      className={`filter-pill-btn ${selectedAuthority === auth ? 'active' : ''}`}
                      onClick={() => setSelectedAuthority(auth)}
                    >
                      {auth}
                    </button>
                  ))}
                </div>
              </div>

              {/* Regulatory Disclaimer */}
              <div className="compliance-disclaimer-banner" role="note">
                <ShieldCheck size={17} className="banner-icon" aria-hidden="true" />
                <p>
                  <strong>Disclaimer:</strong> The information provided is for general reference and does not constitute legal, tax, or professional advice. Users should refer to the relevant official notification or consult their professional advisor for applicability to specific circumstances.
                </p>
              </div>

              {/* Regulatory Updates Grid */}
              <div className="regulatory-updates-grid">
                {filteredUpdates.map((update) => (
                  <article key={update.id} className="regulatory-update-card">
                    <div className="reg-card-top-row">
                      <span className="reg-authority-badge">{update.authority}</span>
                      <span className="reg-date-badge">{update.date}</span>
                    </div>

                    <h3 className="reg-card-title">{update.title}</h3>

                    <div className="reg-category-row">
                      <span className="cat-tag">{update.category}</span>
                    </div>

                    <p className="reg-card-summary">{update.summary}</p>

                    <div className="reg-card-footer">
                      <button
                        type="button"
                        className="button outline-primary reg-read-btn"
                        onClick={() => setActiveModalUpdate(update)}
                      >
                        <span>Read Summary Details</span>
                        <ArrowRight size={15} aria-hidden="true" />
                      </button>

                      <a
                        href={update.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="reg-source-link"
                        title={`Visit ${update.sourceName}`}
                      >
                        <span>Official Source</span>
                        <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================================
              AREA 3: IMPORTANT GOVERNMENT LINKS
              ========================================================================= */}
          {activeTab === 'links' && (
            <div className="kb-area-pane" role="tabpanel" aria-label="Important Government Links">
              <div className="area-intro-block">
                <div>
                  <span className="eyebrow">Statutory &amp; Institutional Directory</span>
                  <h2>Important Government Portals</h2>
                  <p className="area-description">
                    Direct access to official, authorized government platforms and institutional portals for compliance filings and authentic records.
                  </p>
                </div>
              </div>

              <div className="gov-links-grid">
                {officialGovernmentLinks.map((link) => (
                  <div key={link.id} className="gov-link-card">
                    <div className="gov-card-top">
                      <div className="gov-icon-box" aria-hidden="true">
                        {link.id.includes('incometax') ? (
                          <Landmark size={22} />
                        ) : link.id.includes('gst') ? (
                          <FileText size={22} />
                        ) : link.id.includes('mca') ? (
                          <Building2 size={22} />
                        ) : link.id.includes('icai') ? (
                          <Award size={22} />
                        ) : (
                          <Globe size={22} />
                        )}
                      </div>
                      <span className="gov-badge">{link.badge}</span>
                    </div>

                    <div className="gov-card-content">
                      <span className="gov-category-sub">{link.portalCategory}</span>
                      <h3 className="gov-portal-name">{link.name}</h3>
                      <p className="gov-portal-desc">{link.description}</p>
                    </div>

                    <div className="gov-card-action">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button outline-primary gov-visit-btn"
                      >
                        <span>Visit Official Portal</span>
                        <ExternalLink size={15} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================================================
              AREA 4: TECHNICAL GUIDANCE & ARTICLES
              ========================================================================= */}
          {activeTab === 'guidance' && (
            <div className="kb-area-pane" role="tabpanel" aria-label="Technical Guidance Notes">
              <div className="area-intro-block">
                <div>
                  <span className="eyebrow">Practice Publications</span>
                  <h2>Professional Guidance Notes</h2>
                  <p className="area-description">
                    Curated technical notes prepared by Chartered Accountants covering procedural frameworks, documentation checklists, and statutory principles.
                  </p>
                </div>

                <div className="guidance-search-box">
                  <div className="search-input-wrapper">
                    <Search size={16} className="search-icon" aria-hidden="true" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search guidance topics..."
                      aria-label="Search guidance articles"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        className="clear-search-btn"
                        onClick={() => setSearchQuery('')}
                        aria-label="Clear search"
                      >
                        <X size={15} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Category Filter for Articles */}
              <div className="compliance-filter-bar">
                <span className="filter-label">Filter by Subject:</span>
                <div className="filter-pills-row" role="group" aria-label="Filter guidance articles by subject">
                  {articleCategories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      className={`filter-pill-btn ${articleCategory === cat ? 'active' : ''}`}
                      onClick={() => setArticleCategory(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
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
                  <h3>No guidance notes found</h3>
                  <p>No publications match your current search criteria or category filter.</p>
                  <button
                    type="button"
                    className="button outline-primary"
                    onClick={() => {
                      setArticleCategory('All');
                      setSearchQuery('');
                    }}
                  >
                    Clear Search &amp; Filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          ACCESSIBLE MODAL FOR REGULATORY UPDATE DETAILS
          ========================================================================= */}
      {activeModalUpdate && (
        <div
          className="reg-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="reg-modal-title"
          onClick={() => setActiveModalUpdate(null)}
        >
          <div
            className="reg-modal-card"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            <div className="reg-modal-header">
              <div className="reg-modal-badges">
                <span className="reg-authority-badge">{activeModalUpdate.authority}</span>
                <span className="cat-tag">{activeModalUpdate.category}</span>
                <span className="reg-date-badge">{activeModalUpdate.date}</span>
              </div>
              <button
                type="button"
                className="reg-modal-close-btn"
                onClick={() => setActiveModalUpdate(null)}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>

            <h3 id="reg-modal-title" className="reg-modal-title">
              {activeModalUpdate.title}
            </h3>

            <div className="reg-modal-body">
              <div className="reg-detail-section">
                <h4>Objective Summary</h4>
                <p>{activeModalUpdate.summary}</p>
              </div>

              <div className="reg-detail-section">
                <h4>Statutory Applicability</h4>
                <p className="reg-applicability-text">{activeModalUpdate.applicability}</p>
              </div>

              <div className="reg-detail-section">
                <h4>Key Procedural Details</h4>
                <ul className="reg-points-list">
                  {activeModalUpdate.fullDetails.map((pt, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="point-icon" aria-hidden="true" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="reg-modal-disclaimer">
                <AlertCircle size={16} aria-hidden="true" />
                <p>
                  This summary is for informational reference only. For legal interpretation, consult the official notification on the statutory authority portal.
                </p>
              </div>
            </div>

            <div className="reg-modal-footer">
              <a
                href={activeModalUpdate.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button primary"
              >
                <span>Open {activeModalUpdate.sourceName}</span>
                <ExternalLink size={15} aria-hidden="true" />
              </a>

              <button
                type="button"
                className="button outline-primary"
                onClick={() => setActiveModalUpdate(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
