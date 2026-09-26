import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
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

const CATEGORIES = [
  { key: 'all', label: 'All Results' },
  { key: 'activities', label: 'Activities' },
  { key: 'history', label: 'History & Exhibits' },
  { key: 'oral_history', label: 'Oral History' },
  { key: 'donors', label: 'Donors & Relics' },
  { key: 'visit', label: 'Tickets & Visit' },
  { key: 'publications', label: 'Publications' },
  { key: 'images', label: 'Photos / Images' }
];

function SearchModalThumb({ src, alt }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (!src || hasError) return null;

  return (
    <div className="lwm-modal-item-thumb-v2">
      <img
        src={src}
        alt=""
        loading="lazy"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

function SearchModalImageCard({ item, onNavigate }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [item?.image]);

  if (!item?.image || hasError) return null;
  return (
    <div
      className="lwm-modal-image-card-v2"
      onClick={() => onNavigate(item.url)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onNavigate(item.url)}
    >
      <div className="lwm-modal-image-thumb-v2">
        <img
          src={item.image}
          alt=""
          loading="lazy"
          onError={() => setHasError(true)}
        />
      </div>
      <div className="lwm-modal-image-info-v2">
        <div
          className="lwm-modal-image-title-v2"
          dangerouslySetInnerHTML={{ __html: item.highlightedTitle || item.title }}
        />
        <div className="lwm-modal-image-cat-v2">{item.categoryLabel}</div>
      </div>
    </div>
  );
}

export default function SearchModal({ onClose }) {
  const [inputText, setInputText] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');
  const [isClosing, setIsClosing] = useState(false);

  const navigate = useNavigate();
  const inputRef = useRef(null);
  const backdropRef = useRef(null);
  const resultsContainerRef = useRef(null);

  // Auto-focus input and lock body scrolling
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 60);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 220);
  };

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) {
      handleClose();
    }
  };

  const handleClear = () => {
    setInputText('');
    inputRef.current?.focus();
  };

  const handlePopularClick = (term) => {
    setInputText(term);
    inputRef.current?.focus();
    if (resultsContainerRef.current) {
      resultsContainerRef.current.scrollTop = 0;
    }
  };

  const handleNavigate = (url) => {
    handleClose();
    setTimeout(() => {
      navigate(url);
    }, 150);
  };

  // Run search
  const searchResult = useMemo(() => {
    return executeSearch(inputText, activeCategory, sortBy);
  }, [inputText, activeCategory, sortBy]);

  const { results, totalCount, executionTime, categoryCounts } = searchResult;

  return (
    <div
      ref={backdropRef}
      className={`lwm-modal-backdrop ${isClosing ? 'closing' : ''}`}
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      <div className={`lwm-modal-window ${isClosing ? 'closing' : ''}`}>
        
        {/* MODAL TOP HEADER */}
        <div className="lwm-modal-header">
          <div className="lwm-modal-header-brand">
            <img src="/assets/header logo.svg" alt="LWM Logo" className="lwm-modal-logo" />
            <div className="lwm-modal-header-text">
              <h2 className="lwm-modal-title">SEARCH MUSEUM ARCHIVE</h2>
              <span className="lwm-modal-subtitle">মুক্তিযুদ্ধ জাদুঘর সমগ্র সংগ্রহশালা অনুসন্ধান</span>
            </div>
          </div>
          <button
            type="button"
            className="lwm-modal-close-btn"
            onClick={handleClose}
            aria-label="Close search"
            title="Close (Esc)"
          >
            ✕
          </button>
        </div>

        {/* SEARCH INPUT BAR */}
        <div className="lwm-modal-search-bar">
          <div className="lwm-modal-input-group">
            <div className="lwm-modal-search-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <input
              ref={inputRef}
              type="text"
              className="lwm-modal-input"
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
                if (resultsContainerRef.current) {
                  resultsContainerRef.current.scrollTop = 0;
                }
              }}
              placeholder="Search artifacts, 1971 history, events, donors, tickets..."
            />
            {inputText && (
              <button
                type="button"
                className="lwm-modal-clear-btn"
                onClick={handleClear}
                aria-label="Clear query"
              >
                ✕
              </button>
            )}
          </div>

          {/* FILTER PILLS - WRAPS NATURALLY WITH ZERO HORIZONTAL SCROLL */}
          <div className="lwm-modal-filters-wrap">
            <span className="lwm-modal-filter-label">Filter By:</span>
            <div className="lwm-modal-pills-list">
              {CATEGORIES.map((cat) => {
                const count = categoryCounts[cat.key] || 0;
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    className={`lwm-filter-pill ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      setActiveCategory(cat.key);
                      if (resultsContainerRef.current) {
                        resultsContainerRef.current.scrollTop = 0;
                      }
                    }}
                  >
                    <span className="lwm-filter-pill-text">{cat.label}</span>
                    {inputText.trim() && <span className="lwm-filter-pill-badge">{count}</span>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* STATS & SORTING BAR */}
        {inputText.trim() && (
          <div className="lwm-modal-meta-bar">
            <div className="lwm-modal-stats">
              Found <strong>{totalCount}</strong> results ({executionTime}s) for "<em>{inputText.trim()}</em>"
            </div>
            <div className="lwm-modal-sort">
              <label htmlFor="modal-search-sort">Sort:</label>
              <select
                id="modal-search-sort"
                className="lwm-modal-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="relevance">Relevance</option>
                <option value="title">Title (A-Z)</option>
              </select>
            </div>
          </div>
        )}

        {/* SCROLLABLE RESULTS AREA (VERTICAL ONLY) */}
        <div ref={resultsContainerRef} className="lwm-modal-results-scroll">
          {!inputText.trim() ? (
            /* WELCOME PROMPT WITH MODERN QUICK SEARCH CARDS */
            <div className="lwm-modal-welcome-v2">
              <div className="lwm-welcome-header">
                <div className="lwm-welcome-icon-box">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="lwm-welcome-title">Explore Museum Archives & History</h3>
                  <p className="lwm-welcome-desc">
                    Search over 950+ historical records, exhibits, 1971 wartime documents, oral testimonies, publications, and donor registers.
                  </p>
                </div>
              </div>

              {/* POPULAR SEARCH SUGGESTIONS CARDS */}
              <div className="lwm-welcome-popular-section">
                <div className="lwm-welcome-popular-title">
                  <span>⚡ Quick Searches / জনপ্রিয় অনুসন্ধান:</span>
                </div>
                <div className="lwm-welcome-popular-grid">
                  {POPULAR_SEARCHES.map((term) => (
                    <button
                      key={term}
                      type="button"
                      className="lwm-welcome-chip-btn"
                      onClick={() => handlePopularClick(term)}
                    >
                      <span className="lwm-welcome-chip-icon">🔍</span>
                      <span>{term}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : totalCount === 0 ? (
            /* NO RESULTS STATE */
            <div className="lwm-modal-no-results-v2">
              <div className="lwm-no-results-icon-box">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h3>No records found for "{inputText}"</h3>
              <p>Suggestions:</p>
              <ul>
                <li>Check your spelling for any typos.</li>
                <li>Try using fewer or more general keywords.</li>
                <li>Click <strong>All Results</strong> to search across all museum archives.</li>
                <li>Try searching in Bengali or English (e.g. "মুক্তিযুদ্ধ", "genocide").</li>
              </ul>
            </div>
          ) : activeCategory === 'images' ? (
            /* IMAGE GRID VIEW */
            <div className="lwm-modal-image-grid-v2">
              {results.map((item) => (
                <SearchModalImageCard
                  key={item.id}
                  item={item}
                  onNavigate={handleNavigate}
                />
              ))}
            </div>
          ) : (
            /* STANDARD RESULTS LIST */
            <div className="lwm-modal-list-v2">
              {results.map((item, index) => (
                <article
                  key={item.id}
                  className="lwm-modal-item-v2"
                  onClick={() => handleNavigate(item.url)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleNavigate(item.url)}
                >
                  <div className="lwm-modal-item-header-v2">
                    <span className="lwm-modal-item-serial-v2">#{index + 1}</span>
                    <span className="lwm-modal-item-cat-v2">{item.categoryLabel}</span>
                    <span className="lwm-modal-item-crumb-v2">{item.breadcrumb}</span>
                  </div>

                  <div className="lwm-modal-item-content-v2">
                    <div className="lwm-modal-item-text-v2">
                      <h4
                        className="lwm-modal-item-title-v2"
                        dangerouslySetInnerHTML={{ __html: item.highlightedTitle || item.title }}
                      />
                      <p
                        className="lwm-modal-item-snippet-v2"
                        dangerouslySetInnerHTML={{ __html: item.snippet || item.content.slice(0, 160) + '...' }}
                      />
                      <div className="lwm-modal-item-link-v2">
                        View Details <span className="arrow">→</span>
                      </div>
                    </div>

                    <SearchModalThumb src={item.image} alt={item.title} />
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* MODAL FOOTER */}
        <div className="lwm-modal-footer-v2">
          <div className="lwm-modal-footer-hint-v2">
            Tip: Press <kbd>Esc</kbd> to close or click outside
          </div>
          <button type="button" className="lwm-modal-footer-close-btn-v2" onClick={handleClose}>
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
