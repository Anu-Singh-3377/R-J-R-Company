import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ClipboardCheck, ArrowRight, Search, FileText, CheckCircle2, Download, Printer } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import { checklists, images } from '../data';

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Direct Tax', 'Indirect Tax', 'Audit & Assurance', 'Corporate Compliance'];

  const filteredChecklists = checklists.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const allText = (item.title + ' ' + item.shortSummary + ' ' + item.sections.flat(2).join(' ')).toLowerCase();
    const matchesSearch = allText.includes(searchQuery.toLowerCase().trim());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="resources-page-view">
      <SEO
        title="Client Resources & Checklists"
        description="R J R & Company — Document checklists and statutory compliance resources for Income Tax, GST, Statutory Audit, and MCA Company Filings."
      />

      <PageHero
        eyebrow="Client Enablement"
        title="Document Checklists"
        intro="Organized documentation checklists to assist businesses, entities, and individuals in compiling necessary records."
        image={images.accounting}
        alt="Organized professional financial files, folders, and compliance documents"
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Resources' }]}
      />

      <section className="section">
        <div className="container">
          <div className="resources-intro-block">
            <span className="eyebrow">Preparation Checklists</span>
            <h2>Statutory & Document Worksheets</h2>
            <p>
              Proper record organization reduces compliance delays and supports accurate reporting. Browse our structured checklists to review standard documentation commonly requested for professional reviews.
            </p>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="resource-toolbar">
            <CategoryFilter
              categories={categories}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
            <SearchBar
              id="checklist-search"
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
              placeholder="Search by keyword, form, or document..."
              label="Search document checklists"
            />
          </div>

          {/* Cards Grid */}
          {filteredChecklists.length > 0 ? (
            <div className="card-grid checklist-cards-grid">
              {filteredChecklists.map((item) => (
                <div key={item.slug} className="checklist-card">
                  <div className="checklist-card-top">
                    <span className="checklist-category-tag">{item.category}</span>
                    <ClipboardCheck size={24} className="checklist-icon" />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.shortSummary}</p>

                  <div className="checklist-sections-preview">
                    <span className="preview-label">Sections included:</span>
                    <ul>
                      {item.sections.slice(0, 3).map(([title]) => (
                        <li key={title}>
                          <CheckCircle2 size={13} />
                          <span>{title}</span>
                        </li>
                      ))}
                      {item.sections.length > 3 && (
                        <li className="more-count">+{item.sections.length - 3} additional sections</li>
                      )}
                    </ul>
                  </div>

                  <div className="checklist-card-footer">
                    <Link to={`/resources/${item.slug}`} className="button primary full-width">
                      <span>View Full Interactive Checklist</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-search-state">
              <FileText size={48} className="empty-icon" />
              <h3>No matching document checklists found</h3>
              <p>Try clearing your search query or selecting a different category.</p>
              <button
                type="button"
                className="button outline-primary"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Secure Document Warning Notice */}
          <div className="confidentiality-reminder-card">
            <h4>Important Notice Regarding Client Documents</h4>
            <p>
              These checklists are indicative guidelines for document preparation. Do not send confidential financial documents, PAN copies, Aadhaar details, or login passwords via unauthenticated channels. Authorized clients should use the secure Client Portal.
            </p>
            <Link to="/client-portal" className="text-link">
              Access Document Upload Portal →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
