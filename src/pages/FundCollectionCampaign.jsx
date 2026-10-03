import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

const LEAFLETS = [
    {
        id: 'page-1',
        pageNum: 1,
        title: 'National Appeal & Vision of the Museum',
        bengaliTitle: 'জাতীয় আবেদন ও জাদুঘরের রূপরেখা',
        src: '/assets/fund-collection-leaflet/1.jpg',
        label: 'Page 1 of 3'
    },
    {
        id: 'page-2',
        pageNum: 2,
        title: 'Citizen Mobilization & Contribution Structure',
        bengaliTitle: 'জনসম্পৃক্ততা ও আর্থিক অনুদান কাঠামো',
        src: '/assets/fund-collection-leaflet/2.jpg',
        label: 'Page 2 of 3'
    },
    {
        id: 'page-3',
        pageNum: 3,
        title: 'Trustee Governance & Official Banking Channels',
        bengaliTitle: 'ট্রাস্টি পরিচালনা ও প্রাতিষ্ঠানিক ব্যাংকিং তথ্য',
        src: '/assets/fund-collection-leaflet/3.jpg',
        label: 'Page 3 of 3'
    }
];

const TVCS = [
    {
        id: 'tvc-01',
        title: 'TV Commercial 01',
        bengaliTitle: 'টিভি বিজ্ঞাপন ০১',
        duration: '1:30 min',
        embedUrl: 'https://www.youtube.com/embed/pVYkVwb9_Qw',
        youtubeUrl: 'https://www.youtube.com/watch?v=pVYkVwb9_Qw'
    },
    {
        id: 'tvc-02',
        title: 'TV Commercial 02',
        bengaliTitle: 'টিভি বিজ্ঞাপন ০২',
        duration: '1:45 min',
        embedUrl: 'https://www.youtube.com/embed/9qnIgzI0rZA',
        youtubeUrl: 'https://www.youtube.com/watch?v=9qnIgzI0rZA'
    }
];

export default function FundCollectionCampaign({ initialTab = 'all' }) {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(initialTab);
    const [modalIndex, setModalIndex] = useState(null);
    const [zoomLevel, setZoomLevel] = useState(1);

    // Sync tab from route
    useEffect(() => {
        if (location.pathname.includes('/tvc')) {
            setActiveTab('tvc');
        } else if (location.pathname.includes('/leaflet')) {
            setActiveTab('leaflet');
        } else if (initialTab) {
            setActiveTab(initialTab);
        }
    }, [location.pathname, initialTab]);

    useEffect(() => {
        document.body.classList.add('page-museum-story');
        document.title = "Fund Collection Campaign | Liberation War Museum";
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, []);

    // Lightbox modal handlers
    const openModal = (idx) => {
        setModalIndex(idx);
        setZoomLevel(1);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalIndex(null);
        setZoomLevel(1);
        document.body.style.overflow = 'auto';
    };

    const prevLeaflet = (e) => {
        if (e) e.stopPropagation();
        setModalIndex(prev => (prev - 1 + LEAFLETS.length) % LEAFLETS.length);
        setZoomLevel(1);
    };

    const nextLeaflet = (e) => {
        if (e) e.stopPropagation();
        setModalIndex(prev => (prev + 1) % LEAFLETS.length);
        setZoomLevel(1);
    };

    // Keyboard navigation for Lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (modalIndex === null) return;
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowLeft') prevLeaflet();
            if (e.key === 'ArrowRight') nextLeaflet();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [modalIndex]);

    return (
        <>
            {/* HERO SECTION */}
            <section className="hero hero--museum-story">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Fund Collection Campaign</div>
                        <div className="hero-card__desc">
                            Access our informative leaflets, print campaign materials, and television commercials for the museum's fund collection.
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT SECTION */}
            <main className="museum-story-content">
                <section className="block">
                    <Breadcrumb />
                    <div className="separator"></div>

                    {/* Media Tabs / Filter Switcher */}
                    <div className="fcc-media-filter-bar">
                        <button
                            type="button"
                            className={`fcc-filter-btn ${activeTab === 'all' ? 'fcc-filter-btn--active' : ''}`}
                            onClick={() => setActiveTab('all')}
                        >
                            <span>All Campaign Materials</span>
                            <span className="fcc-filter-count">5</span>
                        </button>
                        <button
                            type="button"
                            className={`fcc-filter-btn ${activeTab === 'leaflet' ? 'fcc-filter-btn--active' : ''}`}
                            onClick={() => setActiveTab('leaflet')}
                        >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                            </svg>
                            <span>Campaign Leaflets (মূল প্রচারপত্র)</span>
                            <span className="fcc-filter-count">3</span>
                        </button>
                        <button
                            type="button"
                            className={`fcc-filter-btn ${activeTab === 'tvc' ? 'fcc-filter-btn--active' : ''}`}
                            onClick={() => setActiveTab('tvc')}
                        >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <polygon points="23 7 16 12 23 17 23 7" />
                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                            </svg>
                            <span>TV Commercials (টিভি প্রচারণা)</span>
                            <span className="fcc-filter-count">2</span>
                        </button>
                    </div>

                    {/* SECTION 1: CAMPAIGN LEAFLETS */}
                    {(activeTab === 'all' || activeTab === 'leaflet') && (
                        <div className="fcc-section">
                            <div className="block__cap">
                                <span className="cap__title">Campaign Leaflets</span>
                            </div>

                            <p className="p" style={{ marginBottom: '24px' }}>
                                The Liberation War Museum publishes leaflets to inform the public about its preservation campaigns, fundraising drives, and traveling museum programs. Below is the museum's fund collection leaflet.
                            </p>

                            <div className="fcc-leaflets-grid">
                                {LEAFLETS.map((leaflet, idx) => (
                                    <div key={leaflet.id} className="fcc-leaflet-card">
                                        <div className="fcc-leaflet-header">
                                            <span className="fcc-page-badge">{leaflet.label}</span>
                                            <h4 className="fcc-card-title">{leaflet.title}</h4>
                                            <h5 className="fcc-card-bengali">{leaflet.bengaliTitle}</h5>
                                        </div>

                                        <div 
                                            className="fcc-leaflet-frame"
                                            onClick={() => openModal(idx)}
                                            title="Click to inspect high-resolution archival scan"
                                        >
                                            <img
                                                src={leaflet.src}
                                                alt={`Fund Collection Leaflet - ${leaflet.label}`}
                                                className="fcc-leaflet-img"
                                                loading="lazy"
                                            />
                                            <div className="fcc-inspect-overlay">
                                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="11" cy="11" r="8" />
                                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                                    <line x1="11" y1="8" x2="11" y2="14" />
                                                    <line x1="8" y1="11" x2="14" y2="11" />
                                                </svg>
                                                <span>Inspect High-Res Scan</span>
                                            </div>
                                        </div>

                                        <div className="fcc-leaflet-body">
                                            <div className="fcc-card-actions">
                                                <button
                                                    type="button"
                                                    className="fcc-btn fcc-btn--primary"
                                                    onClick={() => openModal(idx)}
                                                >
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <circle cx="11" cy="11" r="8" />
                                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                                    </svg>
                                                    <span>Inspect Scan</span>
                                                </button>
                                                <a
                                                    href={leaflet.src}
                                                    download={`LWM-Fund-Collection-Leaflet-Page-${leaflet.pageNum}.jpg`}
                                                    className="fcc-btn fcc-btn--secondary"
                                                >
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                        <polyline points="7 10 12 15 17 10" />
                                                        <line x1="12" y1="15" x2="12" y2="3" />
                                                    </svg>
                                                    <span>Download</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* SECTION 2: TV COMMERCIALS & VIDEO CAMPAIGNS */}
                    {(activeTab === 'all' || activeTab === 'tvc') && (
                        <div className={`fcc-section ${activeTab === 'all' ? 'fcc-section--spaced' : ''}`}>
                            <div className="block__cap">
                                <span className="cap__title">TVC &amp; Video Campaigns</span>
                            </div>

                            <p className="p" style={{ marginBottom: '24px' }}>
                                The Liberation War Museum produces television commercials and digital video campaigns to appeal for public support, artifact donations, and volunteer engagement. These campaigns feature testimonies of freedom fighters and highlights of our educational initiatives.
                            </p>

                            <div className="fcc-tvcs-grid">
                                {TVCS.map((tvc) => (
                                    <div key={tvc.id} className="fcc-tvc-card">
                                        <div className="fcc-tvc-header">
                                            <div className="fcc-tvc-meta">
                                                <span className="fcc-tvc-tag">Official Campaign</span>
                                                <span className="fcc-tvc-duration">
                                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <circle cx="12" cy="12" r="10" />
                                                        <polyline points="12 6 12 12 16 14" />
                                                    </svg>
                                                    {tvc.duration}
                                                </span>
                                            </div>
                                            <h4 className="fcc-tvc-title">{tvc.title}</h4>
                                            <h5 className="fcc-tvc-bengali">{tvc.bengaliTitle}</h5>
                                        </div>

                                        <div className="fcc-video-wrapper">
                                            <iframe
                                                src={tvc.embedUrl}
                                                title={tvc.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>

                                        <div className="fcc-tvc-body">
                                            <div className="fcc-tvc-actions">
                                                <a
                                                    href={tvc.youtubeUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="fcc-btn fcc-btn--secondary fcc-btn--wide"
                                                >
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                        <polyline points="15 3 21 3 21 9" />
                                                        <line x1="10" y1="14" x2="21" y2="3" />
                                                    </svg>
                                                    <span>Open on YouTube</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </section>
            </main>

            {/* HIGH-RES LIGHTBOX MODAL & DOCUMENT VIEWER */}
            {modalIndex !== null && (
                <div
                    className="fcc-lightbox-backdrop"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Leaflet Full Resolution Viewer"
                    onClick={closeModal}
                >
                    <div 
                        className="fcc-lightbox-dialog" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="fcc-lightbox-header">
                            <div className="fcc-lightbox-meta">
                                <span className="fcc-lightbox-badge">{LEAFLETS[modalIndex].label}</span>
                                <span className="fcc-lightbox-title">{LEAFLETS[modalIndex].title}</span>
                            </div>
                            <div className="fcc-lightbox-controls">
                                <div className="fcc-zoom-group">
                                    <button
                                        type="button"
                                        className="fcc-lightbox-tool"
                                        onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.75))}
                                        title="Zoom Out"
                                    >
                                        &minus;
                                    </button>
                                    <span className="fcc-zoom-label">{Math.round(zoomLevel * 100)}%</span>
                                    <button
                                        type="button"
                                        className="fcc-lightbox-tool"
                                        onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2.5))}
                                        title="Zoom In"
                                    >
                                        &#43;
                                    </button>
                                    {zoomLevel !== 1 && (
                                        <button
                                            type="button"
                                            className="fcc-lightbox-tool"
                                            onClick={() => setZoomLevel(1)}
                                            title="Reset Zoom"
                                        >
                                            Reset
                                        </button>
                                    )}
                                </div>

                                <a
                                    href={LEAFLETS[modalIndex].src}
                                    download={`LWM-Fund-Collection-Leaflet-Page-${LEAFLETS[modalIndex].pageNum}.jpg`}
                                    className="fcc-lightbox-btn"
                                    title="Download this file"
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                    <span>Download</span>
                                </a>
                                
                                <button
                                    type="button"
                                    className="fcc-lightbox-close"
                                    onClick={closeModal}
                                    aria-label="Close Viewer"
                                >
                                    &times;
                                </button>
                            </div>
                        </div>

                        <div className="fcc-lightbox-viewport">
                            <button
                                type="button"
                                className="fcc-nav-arrow fcc-nav-arrow--prev"
                                onClick={prevLeaflet}
                                aria-label="Previous Page"
                            >
                                &lsaquo;
                            </button>

                            <div className="fcc-lightbox-canvas">
                                <img
                                    src={LEAFLETS[modalIndex].src}
                                    alt={LEAFLETS[modalIndex].title}
                                    className="fcc-lightbox-img"
                                    style={{ transform: `scale(${zoomLevel})` }}
                                />
                            </div>

                            <button
                                type="button"
                                className="fcc-nav-arrow fcc-nav-arrow--next"
                                onClick={nextLeaflet}
                                aria-label="Next Page"
                            >
                                &rsaquo;
                            </button>
                        </div>

                        <div className="fcc-lightbox-footer">
                            <div className="fcc-lightbox-caption">
                                <span className="fcc-bengali-caption">{LEAFLETS[modalIndex].bengaliTitle}</span>
                            </div>
                            <span className="fcc-lightbox-credit">
                                Archival Print Artifact &bull; Liberation War Museum Documentation Center
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
