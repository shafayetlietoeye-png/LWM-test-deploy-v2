import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { executeSearch } from '../utils/searchEngine.js';

const POPULAR_SEARCHES = [
  '1971',
  'Genocide',
  'Bangabandhu',
  'Tickets',
  'Opening Hours',
  'Object Donors',
  'Jalladkhana',
  'Aly Zaker',
  'Oral History',
  'Publications',
  'Freedom Fighters',
  'March 25'
];

const TABS = [
  { key: 'all', label: 'All', bn: 'সব' },
  { key: 'activities', label: 'Activities & Programs', bn: 'কার্যক্রম ও অনুষ্ঠান' },
  { key: 'history', label: 'Museum & History', bn: 'জাদুঘর ও ইতিহাস' },
  { key: 'oral_history', label: 'Oral History', bn: 'মৌখিক ইতিহাস' },
  { key: 'donors', label: 'Donors & Support', bn: 'দানকারী ও সংগ্রহ' },
  { key: 'visit', label: 'Visit & Tickets', bn: 'পরিদর্শন ও টিকিট' },
  { key: 'publications', label: 'Publications', bn: 'প্রকাশনা' },
  { key: 'images', label: 'Images', bn: 'ছবি' }
];

function SearchResultThumb({ src, alt, url }) {
  const [hasError, setHasError] = useState(false);
  if (!src || hasError) return null;
  return (
    <div className="lwm-search-item-thumb">
      <Link to={url}>
        <img
          src={src}
          alt={alt || ''}
          loading="lazy"
          onError={() => setHasError(true)}
        />
      </Link>
    </div>
  );
}

function SearchImageCard({ item }) {
  const [hasError, setHasError] = useState(false);
  if (!item.image || hasError) return null;
  return (
    <Link to={item.url} className="lwm-search-image-card">
      <div className="lwm-search-image-thumb">
        <img
          src={item.image}
          alt={item.title || ''}
          loading="lazy"
          onError={() => setHasError(true)}
        />
      </div>
      <div className="lwm-search-image-info">
        <div
          className="lwm-search-image-title"
          dangerouslySetInnerHTML={{ __html: item.highlightedTitle || item.title }}
        />
        <div className="lwm-search-image-cat">{item.categoryLabel}</div>
      </div>
    </Link>
  );
}

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const queryParam = searchParams.get('q') || '';
  const categoryParam = searchParams.get('category') || 'all';

  const [inputText, setInputText] = useState(queryParam);
  const [activeTab, setActiveTab] = useState(categoryParam);
  const [sortBy, setSortBy] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);
  const resultsTopRef = useRef(null);

  const itemsPerPage = 10;

  // Sync state with URL params
  useEffect(() => {
    setInputText(queryParam);
    setActiveTab(categoryParam);
    setCurrentPage(1);
  }, [queryParam, categoryParam]);

  useEffect(() => {
    document.body.classList.add('page-museum-story');
    document.title = queryParam ? `Search: ${queryParam} | Liberation War Museum` : 'Search the Museum | Liberation War Museum';
    return () => {
      document.body.classList.remove('page-museum-story');
    };
  }, [queryParam]);

  // Execute search
  const searchResult = useMemo(() => {
    return executeSearch(queryParam, activeTab, sortBy);
  }, [queryParam, activeTab, sortBy]);

  const { results, totalCount, executionTime, categoryCounts } = searchResult;

  // Pagination calculation
  const totalPages = Math.ceil(totalCount / itemsPerPage) || 1;
  const paginatedResults = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return results.slice(start, start + itemsPerPage);
  }, [results, currentPage, itemsPerPage]);

  const handleSearchSubmit = (e) => {
    e?.preventDefault();
    const trimmed = inputText.trim();
    const newParams = new URLSearchParams();
    if (trimmed) newParams.set('q', trimmed);
    if (activeTab && activeTab !== 'all') newParams.set('category', activeTab);
    setSearchParams(newParams);
    setCurrentPage(1);
  };

  const handleClear = () => {
    setInputText('');
    const newParams = new URLSearchParams();
    if (activeTab && activeTab !== 'all') newParams.set('category', activeTab);
    setSearchParams(newParams);
  };

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    setCurrentPage(1);
    const newParams = new URLSearchParams();
    if (queryParam) newParams.set('q', queryParam);
    if (tabKey !== 'all') newParams.set('category', tabKey);
    setSearchParams(newParams);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (resultsTopRef.current) {
      resultsTopRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePopularSearchClick = (keyword) => {
    setInputText(keyword);
    const newParams = new URLSearchParams();
    newParams.set('q', keyword);
    if (activeTab && activeTab !== 'all') newParams.set('category', activeTab);
    setSearchParams(newParams);
    setCurrentPage(1);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero hero--museum-story lwm-search-hero">
        <div className="hero__inner hero__inner--bottom-left">
          <div className="hero-card hero-card--dark-brush hero-card--wide">
            <div className="hero-card__title">Search the Museum</div>
            <div className="hero-card__desc">
              Explore exhibitions, 1971 wartime documents, oral testimonies, events, publications, and donor records.
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH MAIN CONTENT */}
      <main className="museum-story-content lwm-search-main">
        <div className="section-paper">
          <section className="block">
            {/* Dark Line Head */}
            <div className="dark-head dark-head--stacked">
              <div className="dark-line"></div>
              <h2 className="dark-title">MUSEUM ARCHIVE SEARCH / মুক্তিযুদ্ধ জাদুঘর অনুসন্ধান</h2>
            </div>

            {/* SEARCH BOX FORM */}
            <div className="lwm-search-box-wrap">
              <form onSubmit={handleSearchSubmit} className="lwm-search-form">
                <div className="lwm-search-input-group">
                  <div className="lwm-search-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="lwm-search-input"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Search artifacts, 1971 history, events, donors, tickets..."
                    autoFocus
                  />
                  {inputText && (
                    <button
                      type="button"
                      className="lwm-search-clear"
                      onClick={handleClear}
                      aria-label="Clear input"
                    >
                      ✕
                    </button>
                  )}
                  <button type="submit" className="lwm-search-btn">
                    <span>Search</span>
                  </button>
                </div>
              </form>

              {/* POPULAR SEARCH SUGGESTIONS */}
              <div className="lwm-search-suggestions">
                <span className="lwm-search-suggestions-label">Popular Searches:</span>
                <div className="lwm-search-suggestions-chips">
                  {POPULAR_SEARCHES.map((term) => (
                    <button
                      key={term}
                      type="button"
                      className={`lwm-search-chip ${queryParam.toLowerCase() === term.toLowerCase() ? 'active' : ''}`}
                      onClick={() => handlePopularSearchClick(term)}
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* FILTER TABS */}
            <div className="lwm-search-tabs-container">
              <div className="lwm-search-tabs">
                {TABS.map((tab) => {
                  const count = categoryCounts[tab.key] || 0;
                  const isActive = activeTab === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      className={`lwm-search-tab ${isActive ? 'active' : ''}`}
                      onClick={() => handleTabChange(tab.key)}
                    >
                      <span className="lwm-tab-label">{tab.label}</span>
                      {queryParam && <span className="lwm-tab-count">({count})</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            <div ref={resultsTopRef} />

            {/* SEARCH STATS & SORTING */}
            {queryParam && (
              <div className="lwm-search-meta-bar">
                <div className="lwm-search-stats">
                  About <strong>{totalCount}</strong> results ({executionTime} seconds) for "<em>{queryParam}</em>"
                </div>
                <div className="lwm-search-sort">
                  <label htmlFor="search-sort-select">Sort by:</label>
                  <select
                    id="search-sort-select"
                    className="lwm-search-sort-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="relevance">Relevance (প্রাসঙ্গিকতা)</option>
                    <option value="title">Title (A-Z)</option>
                  </select>
                </div>
              </div>
            )}

            {/* RESULTS CONTENT */}
            {!queryParam ? (
              /* PROMPT STATE */
              <div className="lwm-search-empty-prompt">
                <div className="lwm-search-empty-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <h3 className="lwm-search-empty-title">Search Across the Entire Museum Archive</h3>
                <p className="lwm-search-empty-desc">
                  Type any keyword (e.g. <em>1971, Genocide, Bangabandhu, Aly Zaker, Tickets, Donors</em>) or click on any popular topic above to find matching pages, artifacts, and stories.
                </p>
              </div>
            ) : totalCount === 0 ? (
              /* NO RESULTS FOUND */
              <div className="lwm-search-empty-prompt">
                <div className="lwm-search-empty-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <h3 className="lwm-search-empty-title">No results found for "{queryParam}"</h3>
                <p className="lwm-search-empty-desc">
                  Suggestions:
                </p>
                <ul className="lwm-search-empty-tips">
                  <li>Check your spelling for any typos.</li>
                  <li>Try using fewer or more general keywords.</li>
                  <li>Switch to the <strong>All</strong> tab to see results across all categories.</li>
                  <li>Try searching in English or Bengali (e.g., "মুক্তিযুদ্ধ", "genocide").</li>
                </ul>
              </div>
            ) : activeTab === 'images' ? (
              /* IMAGE TAB GRID RESULTS */
              <div className="lwm-search-image-grid">
                {paginatedResults.map((item) => (
                  <SearchImageCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              /* STANDARD SEARCH RESULTS LIST */
              <div className="lwm-search-results-list">
                {paginatedResults.map((item, index) => {
                  const serialNumber = (currentPage - 1) * itemsPerPage + index + 1;
                  return (
                    <article key={item.id} className="lwm-search-item">
                      <div className="lwm-search-item-header">
                        <span className="lwm-search-item-serial">#{serialNumber}</span>
                        <span className="lwm-search-item-category-badge">{item.categoryLabel}</span>
                        <span className="lwm-search-item-breadcrumb">{item.breadcrumb}</span>
                      </div>

                      <div className="lwm-search-item-body">
                        <div className="lwm-search-item-text">
                          <h3 className="lwm-search-item-title">
                            <Link
                              to={item.url}
                              dangerouslySetInnerHTML={{ __html: item.highlightedTitle || item.title }}
                            />
                          </h3>
                          <p
                            className="lwm-search-item-snippet"
                            dangerouslySetInnerHTML={{ __html: item.snippet || item.content.slice(0, 160) + '...' }}
                          />
                          <div className="lwm-search-item-link-wrap">
                            <Link to={item.url} className="lwm-search-item-link">
                              View details <span className="arrow">→</span>
                            </Link>
                          </div>
                        </div>

                        <SearchResultThumb src={item.image} alt={item.title} url={item.url} />
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="lwm-search-pagination">
                <button
                  type="button"
                  className="lwm-pagination-btn"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  ‹ Previous
                </button>

                <div className="lwm-pagination-numbers">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                    // Show sensible subset of pages if totalPages is large
                    if (
                      pageNum === 1 ||
                      pageNum === totalPages ||
                      (pageNum >= currentPage - 2 && pageNum <= currentPage + 2)
                    ) {
                      return (
                        <button
                          key={pageNum}
                          type="button"
                          className={`lwm-pagination-num ${currentPage === pageNum ? 'active' : ''}`}
                          onClick={() => handlePageChange(pageNum)}
                        >
                          {pageNum}
                        </button>
                      );
                    } else if (
                      pageNum === currentPage - 3 ||
                      pageNum === currentPage + 3
                    ) {
                      return <span key={pageNum} className="lwm-pagination-dots">...</span>;
                    }
                    return null;
                  })}
                </div>

                <button
                  type="button"
                  className="lwm-pagination-btn"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next ›
                </button>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
