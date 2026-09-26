import { useState, useEffect } from 'react';
import { useSearchParams, useParams, Link } from 'react-router-dom';
import { eventsData } from '../data/eventsData';

export default function Events({ initialTab }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const params = useParams();

    const queryTab = searchParams.get('tab');
    const queryEventId = searchParams.get('event') || searchParams.get('id') || params.eventId;

    // Active tab resolution: query param > initialTab prop > 'upcoming'
    const resolveTab = () => {
        if (queryTab === 'past' || initialTab === 'past') return 'past';
        return 'upcoming';
    };

    const [activeTab, setActiveTab] = useState(resolveTab());
    const [selectedEventId, setSelectedEventId] = useState(queryEventId || null);
    const [selectedYear, setSelectedYear] = useState('all');

    // Sync tab when prop or query param changes
    useEffect(() => {
        if (queryTab === 'past' || initialTab === 'past') {
            setActiveTab('past');
        } else if (queryTab === 'upcoming' || initialTab === 'upcoming') {
            setActiveTab('upcoming');
        }
    }, [queryTab, initialTab]);

    // Sync selected event when query param or route param changes
    useEffect(() => {
        if (queryEventId) {
            setSelectedEventId(queryEventId);
            // Also switch active tab to match the event's type if found
            const foundInUpcoming = eventsData.upcoming.find(e => e.id === queryEventId);
            const foundInPast = eventsData.past.find(e => e.id === queryEventId);
            if (foundInPast) setActiveTab('past');
            else if (foundInUpcoming) setActiveTab('upcoming');
        } else {
            setSelectedEventId(null);
        }
    }, [queryEventId]);

    useEffect(() => {
        document.body.classList.add('page-museum-story');
        document.title = selectedEventId 
            ? 'Event Details | Liberation War Museum'
            : `${activeTab === 'upcoming' ? 'Upcoming Events' : 'Past Events'} | Liberation War Museum`;
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, [activeTab, selectedEventId]);

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        setSelectedEventId(null);
        setSelectedYear('all'); // reset year filter on tab switch
        setSearchParams({ tab: tabId });
        window.scrollTo({ top: 380, behavior: 'smooth' });
    };

    const handleSelectEvent = (eventId) => {
        setSelectedEventId(eventId);
        setSearchParams({ tab: activeTab, event: eventId });
        window.scrollTo({ top: 360, behavior: 'smooth' });
    };

    const handleBackToList = () => {
        setSelectedEventId(null);
        setSearchParams({ tab: activeTab });
        window.scrollTo({ top: 360, behavior: 'smooth' });
    };

    // Find the currently selected event object
    const selectedEvent = selectedEventId
        ? [...eventsData.upcoming, ...eventsData.past].find(e => e.id === selectedEventId)
        : null;

    const currentList = activeTab === 'upcoming' ? eventsData.upcoming : eventsData.past;

    // Extract available years for current tab
    const availableYears = Array.from(
        new Set(
            currentList.map(e => e.dateBadge?.year || e.date?.match(/\d{4}/)?.[0]).filter(Boolean)
        )
    ).sort((a, b) => b - a);

    // Apply year filtering
    const filteredList = currentList.filter(item => {
        if (selectedYear === 'all') return true;
        const itemYear = item.dateBadge?.year || item.date?.match(/\d{4}/)?.[0];
        return itemYear === selectedYear;
    });

    return (
        <>
            {/* HERO SECTION */}
            <section className="hero hero--museum-story">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Events</div>
                        <div className="hero-card__desc">
                            Explore the Liberation War Museum's upcoming commemorative ceremonies, international symposiums, temporary exhibitions, and historical archives of past programs.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <main className="museum-story-content events-page-content">
                <section className="block">
                    {/* Brush divider line */}
                    <div className="separator"></div>

                    {/* DETAIL VIEW MODE */}
                    {selectedEvent ? (
                        <div className="event-detail-view">
                            {/* Navigation Bar */}
                            <div className="event-detail-nav">
                                <button
                                    type="button"
                                    className="event-back-btn"
                                    onClick={handleBackToList}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="15 18 9 12 15 6"></polyline>
                                    </svg>
                                    <span>Back to {selectedEvent.type === 'upcoming' ? 'Upcoming Events' : 'Past Events'}</span>
                                </button>
                                <div className="event-detail-badge-group">
                                    <span className="event-category-badge">{selectedEvent.category}</span>
                                    <span className={`event-status-badge event-status-badge--${selectedEvent.type}`}>
                                        {selectedEvent.status}
                                    </span>
                                </div>
                            </div>

                            {/* Banner Hero */}
                            <div className="event-detail-hero">
                                <div className="event-detail-hero__media">
                                    <img
                                        src={selectedEvent.bannerImage || selectedEvent.coverImage}
                                        alt={selectedEvent.title}
                                        className="event-detail-hero__img"
                                    />
                                    <div className="event-detail-hero__overlay"></div>
                                </div>
                                <div className="event-detail-hero__content">
                                    <h1 className="event-detail-hero__title">{selectedEvent.title}</h1>
                                    {selectedEvent.banglaTitle && (
                                        <div className="event-detail-hero__bn-title">{selectedEvent.banglaTitle}</div>
                                    )}
                                </div>
                            </div>

                            {/* Metadata Quick Bar */}
                            <div className="event-meta-bar">
                                <div className="event-meta-item">
                                    <div className="event-meta-item__icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                    </div>
                                    <div className="event-meta-item__text">
                                        <span className="event-meta-item__label">Date</span>
                                        <strong className="event-meta-item__val">{selectedEvent.date}</strong>
                                    </div>
                                </div>

                                <div className="event-meta-item">
                                    <div className="event-meta-item__icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>
                                    </div>
                                    <div className="event-meta-item__text">
                                        <span className="event-meta-item__label">Time</span>
                                        <strong className="event-meta-item__val">{selectedEvent.time}</strong>
                                    </div>
                                </div>

                                <div className="event-meta-item event-meta-item--wide">
                                    <div className="event-meta-item__icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                    </div>
                                    <div className="event-meta-item__text">
                                        <span className="event-meta-item__label">Venue & Location</span>
                                        <strong className="event-meta-item__val">{selectedEvent.venue}</strong>
                                    </div>
                                </div>
                            </div>

                            {/* Detail Body Grid */}
                            <div className="event-detail-body-grid">
                                {/* Left Main Column: Narrative, Schedule, Gallery */}
                                <div className="event-detail-main-col">
                                    {/* Description */}
                                    <div className="event-detail-card">
                                        <h3 className="event-detail-card__heading">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                                <polyline points="10 9 9 9 8 9"></polyline>
                                            </svg>
                                            <span>About This Event</span>
                                        </h3>
                                        <div className="event-detail-narrative">
                                            {selectedEvent.description.map((para, idx) => (
                                                <p key={idx} className="p">{para}</p>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Schedule Timeline */}
                                    {selectedEvent.schedule && selectedEvent.schedule.length > 0 && (
                                        <div className="event-detail-card">
                                            <h3 className="event-detail-card__heading">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <polyline points="12 6 12 12 16 14"></polyline>
                                                </svg>
                                                <span>Program Schedule & Timetable</span>
                                            </h3>
                                            <div className="event-schedule-timeline">
                                                {selectedEvent.schedule.map((slot, sIdx) => (
                                                    <div key={sIdx} className="event-schedule-row">
                                                        <div className="event-schedule-row__time">{slot.time}</div>
                                                        <div className="event-schedule-row__dot"></div>
                                                        <div className="event-schedule-row__desc">{slot.activity}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Media Gallery */}
                                    {selectedEvent.gallery && selectedEvent.gallery.length > 0 && (
                                        <div className="event-detail-card">
                                            <h3 className="event-detail-card__heading">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                                    <polyline points="21 15 16 10 5 21"></polyline>
                                                </svg>
                                                <span>Event Photo Gallery</span>
                                            </h3>
                                            <div className="event-detail-gallery-grid">
                                                {selectedEvent.gallery.map((img, gIdx) => (
                                                    <div key={gIdx} className="event-gallery-item">
                                                        <div className="event-gallery-item__img-box">
                                                            <img src={img.src} alt={img.caption} />
                                                        </div>
                                                        {img.caption && (
                                                            <div className="event-gallery-item__caption">{img.caption}</div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Right Side Column: Downloadable Files & Contact Info */}
                                <div className="event-detail-side-col">
                                    {/* Downloadable Files Section */}
                                    {selectedEvent.files && selectedEvent.files.length > 0 && (
                                        <div className="event-side-card event-side-card--files">
                                            <div className="event-side-card__header">
                                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                    <polyline points="7 10 12 15 17 10"></polyline>
                                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                                </svg>
                                                <h4>Downloads & Resources</h4>
                                            </div>
                                            <p className="event-side-card__sub">
                                                Access official flyers, programs, and guidelines for this event.
                                            </p>
                                            <div className="event-files-list">
                                                {selectedEvent.files.map((file, fIdx) => (
                                                    <div key={fIdx} className="event-file-card">
                                                        <div className="event-file-card__badge">{file.type}</div>
                                                        <div className="event-file-card__info">
                                                            <span className="event-file-card__title">{file.title}</span>
                                                            <span className="event-file-card__size">{file.size} • {file.name}</span>
                                                            {file.description && (
                                                                <p className="event-file-card__desc">{file.description}</p>
                                                            )}
                                                            <a
                                                                href={file.url}
                                                                download={file.name}
                                                                className="event-file-card__btn"
                                                            >
                                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                                    <polyline points="7 10 12 15 17 10"></polyline>
                                                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                                                </svg>
                                                                <span>Download Document</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Contact & Venue Card */}
                                    {selectedEvent.contact && (
                                        <div className="event-side-card event-side-card--contact">
                                            <div className="event-side-card__header">
                                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                                </svg>
                                                <h4>Event Contact & Queries</h4>
                                            </div>
                                            <div className="event-contact-details">
                                                <div className="event-contact-row">
                                                    <strong>Department:</strong>
                                                    <span>{selectedEvent.contact.department}</span>
                                                </div>
                                                <div className="event-contact-row">
                                                    <strong>Phone:</strong>
                                                    <span>{selectedEvent.contact.phone}</span>
                                                </div>
                                                <div className="event-contact-row">
                                                    <strong>Email:</strong>
                                                    <a href={`mailto:${selectedEvent.contact.email}`}>
                                                        {selectedEvent.contact.email}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Action Box */}
                                    <div className="event-side-card event-side-card--actions">
                                        <button
                                            type="button"
                                            className="event-side-btn event-side-btn--back"
                                            onClick={handleBackToList}
                                        >
                                            ← Back to {selectedEvent.type === 'upcoming' ? 'Upcoming' : 'Past'} Events
                                        </button>
                                        <Link
                                            to="/visit/opening-hours"
                                            className="event-side-btn event-side-btn--visit"
                                        >
                                            View Museum Visiting Hours &amp; Guidelines ↗
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* LIST VIEW MODE (Upcoming vs Past Tabs) */
                        <div className="events-list-view">
                            {/* TAB NAVIGATION BAR */}
                            <div className="events-tabs-wrapper">
                                <div className="events-tabs-nav" role="tablist">
                                    <button
                                        type="button"
                                        role="tab"
                                        aria-selected={activeTab === 'upcoming'}
                                        className={`events-tab-btn ${activeTab === 'upcoming' ? 'events-tab-btn--active' : ''}`}
                                        onClick={() => handleTabChange('upcoming')}
                                    >
                                        <div className="events-tab-btn__icon">
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                            </svg>
                                        </div>
                                        <div className="events-tab-btn__text">
                                            <span className="events-tab-btn__title">Upcoming Events</span>
                                            <span className="events-tab-btn__badge">{eventsData.upcoming.length} Events</span>
                                        </div>
                                    </button>

                                    <button
                                        type="button"
                                        role="tab"
                                        aria-selected={activeTab === 'past'}
                                        className={`events-tab-btn ${activeTab === 'past' ? 'events-tab-btn--active' : ''}`}
                                        onClick={() => handleTabChange('past')}
                                    >
                                        <div className="events-tab-btn__icon">
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polyline points="12 6 12 12 8 14"></polyline>
                                            </svg>
                                        </div>
                                        <div className="events-tab-btn__text">
                                            <span className="events-tab-btn__title">Past Events</span>
                                            <span className="events-tab-btn__badge">{eventsData.past.length} Events Archive</span>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* TAB SUB-HEADER & STATS */}
                            <div className="events-tab-intro">
                                <p className="events-tab-intro__text">
                                    {activeTab === 'upcoming' ? (
                                        <>Showing all scheduled ceremonies, temporary exhibitions, and public programs at the Liberation War Museum.</>
                                    ) : (
                                        <>Archival documentation, photographic records, and proceedings of concluded programs and commemorations.</>
                                    )}
                                </p>
                            </div>

                            {/* YEAR FILTER BAR */}
                            <div className="events-filter-bar">
                                <div className="events-filter-bar__left">
                                    <span className="events-filter-label">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                                        </svg>
                                        Filter by Year:
                                    </span>
                                    <div className="events-filter-pills">
                                        <button
                                            type="button"
                                            className={`events-filter-pill ${selectedYear === 'all' ? 'events-filter-pill--active' : ''}`}
                                            onClick={() => setSelectedYear('all')}
                                        >
                                            All Years ({currentList.length})
                                        </button>
                                        {availableYears.map(year => {
                                            const count = currentList.filter(e => (e.dateBadge?.year || e.date?.match(/\d{4}/)?.[0]) === year).length;
                                            return (
                                                <button
                                                    key={year}
                                                    type="button"
                                                    className={`events-filter-pill ${selectedYear === year ? 'events-filter-pill--active' : ''}`}
                                                    onClick={() => setSelectedYear(year)}
                                                >
                                                    {year} ({count})
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="events-filter-count">
                                    Showing <strong>{filteredList.length}</strong> of <strong>{currentList.length}</strong> {activeTab === 'upcoming' ? 'Upcoming' : 'Past'} Events
                                </div>
                            </div>

                            {/* EVENTS GRID */}
                            {filteredList.length > 0 ? (
                                <div className="events-grid">
                                    {filteredList.map((item) => (
                                    <article
                                        key={item.id}
                                        className="event-card"
                                        onClick={() => handleSelectEvent(item.id)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                handleSelectEvent(item.id);
                                            }
                                        }}
                                    >
                                        {/* Card Cover Media with Date Stamp and Category */}
                                        <div className="event-card__media">
                                            <img
                                                src={item.coverImage}
                                                alt={item.title}
                                                className="event-card__img"
                                                loading="lazy"
                                            />
                                            <div className="event-card__media-gradient"></div>

                                            {/* Calendar Date Ticket Stamp on Top-Left */}
                                            {item.dateBadge && (
                                                <div className="event-date-stamp" aria-label={item.date}>
                                                    <span className="event-date-stamp__month">{item.dateBadge.month}</span>
                                                    <span className="event-date-stamp__day">{item.dateBadge.day}</span>
                                                </div>
                                            )}

                                            {/* Category Pill Top-Right */}
                                            <div className="event-card__top-right">
                                                <span className="event-card__category">{item.category}</span>
                                            </div>

                                            {/* Status Badge Bottom-Left */}
                                            <div className="event-card__bottom-badge">
                                                <span className={`event-card__status event-card__status--${item.type}`}>
                                                    <span className="event-status-dot"></span>
                                                    {item.status}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Card Content Body */}
                                        <div className="event-card__body">
                                            {/* Title & Bengali Subtitle */}
                                            <div className="event-card__header-zone">
                                                <h3 className="event-card__title" title={item.title}>{item.title}</h3>
                                                {item.banglaTitle && (
                                                    <div className="event-card__bn-title" title={item.banglaTitle}>{item.banglaTitle}</div>
                                                )}
                                            </div>

                                            {/* Warm Inset Metadata Box */}
                                            <div className="event-card__inset-meta">
                                                <div className="event-card__meta-row">
                                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <polyline points="12 6 12 12 16 14"></polyline>
                                                    </svg>
                                                    <span className="event-card__meta-text">{item.time}</span>
                                                </div>
                                                <div className="event-card__meta-row">
                                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                        <circle cx="12" cy="10" r="3"></circle>
                                                    </svg>
                                                    <span className="event-card__meta-text event-card__meta-text--venue" title={item.venue}>
                                                        {item.venue}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Summary text */}
                                            <p className="event-card__summary">{item.summary}</p>

                                            {/* Attachments / Files indicator */}
                                            {item.files && item.files.length > 0 && (
                                                <div className="event-card__attachments">
                                                    <span className="event-attachment-pill">
                                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                            <polyline points="14 2 14 8 20 8"></polyline>
                                                        </svg>
                                                        <span>{item.files.length} Document{item.files.length > 1 ? 's' : ''} (PDF)</span>
                                                    </span>
                                                    {item.gallery && item.gallery.length > 0 && (
                                                        <span className="event-attachment-pill">
                                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                                            </svg>
                                                            <span>Gallery</span>
                                                        </span>
                                                    )}
                                                </div>
                                            )}

                                            {/* Card Footer Button */}
                                            <div className="event-card__footer">
                                                <div className="event-card__btn-cta">
                                                    <span>View Event Details</span>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                                        <polyline points="12 5 19 12 12 19"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                                <div className="events-empty-filter">
                                    <div className="events-empty-filter__icon">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                    </div>
                                    <h4 className="events-empty-filter__title">No Events Found</h4>
                                    <p className="events-empty-filter__desc">
                                        There are no {activeTab === 'upcoming' ? 'upcoming' : 'past'} events archived for the year {selectedYear}.
                                    </p>
                                    <button
                                        type="button"
                                        className="events-filter-reset-btn"
                                        onClick={() => setSelectedYear('all')}
                                    >
                                        Show All Years ({currentList.length})
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </section>
            </main>
        </>
    );
}
