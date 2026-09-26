import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

// Crisp, dedicated SVG icons for Tabs and Card Headers
const ICONS = {
    // Tab Icons
    tabLibrary: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            <line x1="12" y1="6" x2="16" y2="6" />
            <line x1="12" y1="10" x2="16" y2="10" />
        </svg>
    ),
    tabKiosk: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l2-5h14l2 5" />
            <path d="M21 9v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9" />
            <path d="M3 9h18" />
            <path d="M9 22V12h6v10" />
        </svg>
    ),
    tabGallery: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2L2 7h20L12 2z" />
        </svg>
    ),
    tabCafes: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <line x1="6" y1="1" x2="6" y2="4" />
            <line x1="10" y1="1" x2="10" y2="4" />
            <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
    ),

    // Card Specific Icons
    libraryMain: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
    ),
    archives: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="21 8 21 21 3 21 3 8" />
            <rect x="1" y="3" width="22" height="5" />
            <line x1="10" y1="12" x2="14" y2="12" />
        </svg>
    ),
    searchOpac: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
    ),
    justiceScale: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="3" x2="12" y2="21" />
            <polyline points="4 7 12 5 20 7" />
            <path d="M4 7l-2 7h6l-2-7z" />
            <path d="M20 7l-2 7h6l-2-7z" />
        </svg>
    ),
    clockInfo: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    ),
    kioskMain: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l2-5h14l2 5" />
            <path d="M21 9v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9" />
            <path d="M3 9h18" />
            <path d="M10 13h4" />
        </svg>
    ),
    books: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
    ),
    souvenirBadge: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        </svg>
    ),
    mediaFilm: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
            <line x1="7" y1="2" x2="7" y2="22" />
            <line x1="17" y1="2" x2="17" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <line x1="2" y1="7" x2="7" y2="7" />
            <line x1="2" y1="17" x2="7" y2="17" />
            <line x1="17" y1="17" x2="22" y2="17" />
            <line x1="17" y1="7" x2="22" y2="7" />
        </svg>
    ),
    storeDetails: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
    ),
    museumFacade: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2L2 7h20L12 2z" />
        </svg>
    ),
    galleryHeritage: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
            <circle cx="12" cy="12" r="9" />
        </svg>
    ),
    gallerySacrifice: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 17c1.38 0 2.5-1.12 2.5-2.5 0-1.75-1.5-3-2.5-4.5-1 1.5-2.5 2.75-2.5 4.5z" />
            <path d="M12 2c3.5 3 7 7.5 7 12a7 7 0 1 1-14 0c0-4.5 3.5-9 7-12z" />
        </svg>
    ),
    galleryBattles: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    ),
    galleryVictory: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
    ),
    artHall: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
        </svg>
    ),
    virtualTour: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
        </svg>
    ),
    canteenMain: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <line x1="6" y1="1" x2="6" y2="4" />
            <line x1="10" y1="1" x2="10" y2="4" />
            <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
    ),
    refreshments: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2v20M6 2v20M2 2h8v5a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V2z" />
        </svg>
    ),
    gatheringAdda: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    ),
    sustainabilityGreen: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
    ),
    guidelinesCafe: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
    )
};

// Reusable Sub-Item with crisp checkmark bullet icon
function SubItem({ children }) {
    return (
        <li>
            <svg className="facility-sub-ico" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{children}</span>
        </li>
    );
}

// Reusable Action Link with proper directional icon
function ActionLink({ to, href, children, isExternal }) {
    const icon = isExternal ? (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
        </svg>
    ) : (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    );

    if (isExternal) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="facility-action-link">
                <span>{children}</span>
                {icon}
            </a>
        );
    }
    return (
        <Link to={to} className="facility-action-link">
            <span>{children}</span>
            {icon}
        </Link>
    );
}

const TABS = [
    {
        id: 'library',
        name: 'Library',
        sub: 'Research & Archives',
        icon: ICONS.tabLibrary
    },
    {
        id: 'kiosk',
        name: 'Kiosk',
        sub: 'Publications & Souvenirs',
        icon: ICONS.tabKiosk
    },
    {
        id: 'exhibition-gallery',
        name: 'Exhibition Gallery',
        sub: 'Permanent & Temporary',
        icon: ICONS.tabGallery
    },
    {
        id: 'cafes',
        name: 'Cafes',
        sub: 'Canteen & "Adda" Court',
        icon: ICONS.tabCafes
    }
];

export default function FacilitiesAmenities({ initialTab }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const queryTab = searchParams.get('tab');
    
    // Determine active tab: query param, prop, or default to 'library'
    const defaultTab = initialTab && TABS.some(t => t.id === initialTab)
        ? initialTab
        : (queryTab && TABS.some(t => t.id === queryTab) ? queryTab : 'library');

    const [activeTab, setActiveTab] = useState(defaultTab);

    useEffect(() => {
        if (queryTab && TABS.some(t => t.id === queryTab)) {
            setActiveTab(queryTab);
        } else if (initialTab && TABS.some(t => t.id === initialTab)) {
            setActiveTab(initialTab);
        }
    }, [queryTab, initialTab]);

    useEffect(() => {
        document.body.classList.add('page-museum-story');
        const currentTabObj = TABS.find(t => t.id === activeTab);
        document.title = `${currentTabObj ? currentTabObj.name : 'Facilities & Amenities'} | Liberation War Museum`;
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, [activeTab]);

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        setSearchParams({ tab: tabId });
    };

    return (
        <>
            {/* HERO SECTION */}
            <section className="hero hero--accreditations">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Facilities &amp; Amenities</div>
                        <div className="hero-card__desc">
                            Explore the modern amenities of the Liberation War Museum — featuring our specialized research library, souvenir kiosk, international exhibition galleries, and welcoming café space.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <main className="museum-story-content facilities-page-content">
                <section className="block">
                    {/* The brush divider appears ONCE */}
                    <div className="separator"></div>
                    <Breadcrumb />

                    {/* WARM TAB BAR (Accreditations / Heritage Style) */}
                    <div className="facilities-tabs-wrapper">
                        <div className="facilities-tabs-nav" role="tablist">
                            {TABS.map((tab) => {
                                const isActive = activeTab === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        role="tab"
                                        aria-selected={isActive}
                                        className={`facilities-tab-btn ${isActive ? 'facilities-tab-btn--active' : ''}`}
                                        onClick={() => handleTabChange(tab.id)}
                                    >
                                        <div className="facilities-tab-btn__icon">{tab.icon}</div>
                                        <div className="facilities-tab-btn__text">
                                            <span className="facilities-tab-btn__title">{tab.name}</span>
                                            <span className="facilities-tab-btn__sub">{tab.sub}</span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* TAB PANELS */}
                    <div className="facilities-tab-content">
                        
                        {/* =========================================================
                            TAB 1: LIBRARY & RESEARCH CENTRE
                           ========================================================= */}
                        {activeTab === 'library' && (
                            <div className="facilities-panel" role="tabpanel">
                                <div className="facilities-grid facilities-grid--accred">
                                    
                                    {/* Featured Full-Width Card */}
                                    <div className="facility-card facility-card--featured-accred">
                                        <div className="facility-label">
                                            <span className="facility-label-icon">{ICONS.libraryMain}</span>
                                            <span>Library and Research Centre (লাইব্রেরি ও গবেষণা কেন্দ্র)</span>
                                        </div>
                                        <div className="facility-value">
                                            <p className="facility-desc">
                                                The Liberation War Museum houses a dedicated 300 square meter library and research centre on the 5th floor of the Agargaon complex. Serving as one of the country's most authoritative public repositories for historical literature, declassified documentation, and academic studies concerning the 1971 Genocide and Bangladesh Liberation War.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Core Facilities &amp; Resources:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>300 sqm dedicated quiet reading and research carrels</SubItem>
                                                    <SubItem>Integrated Koha Automated Digital Library Catalogue (OPAC)</SubItem>
                                                    <SubItem>5 bound preservation volumes of photographed newspaper microfilms</SubItem>
                                                    <SubItem>Specialized collection on 1971 Genocide &amp; Constitutional Evolution</SubItem>
                                                    <SubItem>Academic wing supporting CSGJ and Institute for Liberation War Studies</SubItem>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 1: Specialized Collections */}
                                    <div className="facility-card">
                                        <div className="facility-label">
                                            <span className="facility-label-icon">{ICONS.archives}</span>
                                            <span>Specialized Collections &amp; Archives</span>
                                        </div>
                                        <div className="facility-value">
                                            <p className="facility-desc">
                                                Over 5,000 reference monographs, historical publications, doctoral dissertations, journals, and memoirs detailing the political evolution, military campaigns, atrocities, and foreign relations of 1971.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Key Holdings:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Rare wartime periodicals &amp; underground leaflets</SubItem>
                                                    <SubItem>Declassified diplomatic cables and media reports</SubItem>
                                                    <SubItem>Oral history transcripts of freedom fighters</SubItem>
                                                    <SubItem>International Genocide Studies literature</SubItem>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 2: Digital Catalogue */}
                                    <div className="facility-card">
                                        <div className="facility-label">
                                            <span className="facility-label-icon">{ICONS.searchOpac}</span>
                                            <span>Online Library Catalogue (OPAC)</span>
                                        </div>
                                        <div className="facility-value">
                                            <p className="facility-desc">
                                                The library maintains an automated digital catalogue (Koha OPAC) that allows researchers worldwide to search for bibliographic records, call numbers, and shelf availability.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Digital Portal:</div>
                                                <p className="facility-desc" style={{ marginBottom: '12px' }}>
                                                    Access the online search catalogue to reserve books and browse call numbers before visiting the museum reading room.
                                                </p>
                                                <ActionLink href="https://library.liberationwarmuseumbd.org/" isExternal>
                                                    Open Digital Library Portal
                                                </ActionLink>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 3: Research Wing */}
                                    <div className="facility-card">
                                        <div className="facility-label">
                                            <span className="facility-label-icon">{ICONS.justiceScale}</span>
                                            <span>Center for the Study of Genocide and Justice (CSGJ)</span>
                                        </div>
                                        <div className="facility-value">
                                            <p className="facility-desc">
                                                The library directly supports the research fellows and academic programs of the <strong>Center for the Study of Genocide and Justice (CSGJ)</strong> and the <strong>Institute for Liberation War Studies</strong>, providing vital historical documentation for legal research.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Academic Support:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Certificate courses on Genocide &amp; Justice</SubItem>
                                                    <SubItem>Postgraduate researchers and legal scholars</SubItem>
                                                    <SubItem>Archives of the International Crimes Tribunal</SubItem>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 4: Visitor Guidelines */}
                                    <div className="facility-card">
                                        <div className="facility-label">
                                            <span className="facility-label-icon">{ICONS.clockInfo}</span>
                                            <span>Visiting &amp; Consultation Information</span>
                                        </div>
                                        <div className="facility-value">
                                            <p className="facility-desc">
                                                Open for reference reading to all scholars, historians, university students, and citizens upon entry registration at the reception desk.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Visiting Details:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem><strong>Location:</strong> 5th Floor, LWM Complex, Agargaon</SubItem>
                                                    <SubItem><strong>Hours:</strong> Mon – Sat: 10:00 AM – 5:00 PM (Closed Sundays)</SubItem>
                                                    <SubItem><strong>Services:</strong> Reading room, Wi-Fi, reference consultation</SubItem>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}

                        {/* =========================================================
                            TAB 2: KIOSK & PUBLICATIONS
                           ========================================================= */}
                        {activeTab === 'kiosk' && (
                            <div className="facilities-panel" role="tabpanel">
                                <div className="facilities-grid facilities-grid--accred">
                                    
                                    {/* Featured Full-Width Card */}
                                    <div className="facility-card facility-card--featured-accred">
                                        <div className="facility-label">
                                            <span className="facility-label-icon">{ICONS.kioskMain}</span>
                                            <span>Museum Kiosk &amp; Souvenir Shop (যাদুঘর কিয়স্ক ও স্মারক কর্নার)</span>
                                        </div>
                                        <div className="facility-value">
                                            <p className="facility-desc">
                                                Located at the ground-floor concourse, the Museum Kiosk provides visitors an opportunity to acquire official publications, commemorative memorabilia, archival document reprints, and souvenirs. Every purchase directly supports the museum’s educational outreach programs for school children across all 64 districts of Bangladesh.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Featured Offerings:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Official Liberation War Museum publications and research monographs</SubItem>
                                                    <SubItem>Commemorative museum crests, brass pins, badges, and metallic bookmarks</SubItem>
                                                    <SubItem>High-resolution reproduction prints of historic 1971 photographs</SubItem>
                                                    <SubItem>CD/DVD releases of wartime songs and documentary films</SubItem>
                                                    <SubItem>Organic canvas tote bags, notebooks, postcards, and stationery</SubItem>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 1: Books */}
                                    <div className="facility-card">
                                        <div className="facility-label">
                                            <span className="facility-label-icon">{ICONS.books}</span>
                                            <span>Books &amp; Research Monographs</span>
                                        </div>
                                        <div className="facility-value">
                                            <p className="facility-desc">
                                                Browse dozens of specialized research books, exhibition catalogues, historical accounts, and academic compilations published under the banner of Muktijuddha Jadughar.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Key Publications:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Annual Memorial Lecture Series compendiums</SubItem>
                                                    <SubItem>Struggle of Bangladesh pictorial chronicles</SubItem>
                                                    <SubItem>International conference proceedings on Genocide</SubItem>
                                                    <SubItem>Illustrated history books for young readers</SubItem>
                                                </ul>
                                                <div style={{ marginTop: '12px' }}>
                                                    <ActionLink to="/publications">
                                                        View Full Publications List
                                                    </ActionLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 2: Commemorative Souvenirs */}
                                    <div className="facility-card">
                                        <div className="facility-label">
                                            <span className="facility-label-icon">{ICONS.souvenirBadge}</span>
                                            <span>Commemorative Souvenirs &amp; Memorabilia</span>
                                        </div>
                                        <div className="facility-value">
                                            <p className="facility-desc">
                                                Take home authentic commemorative keepsakes celebrating Bangladesh’s heritage, the heroic liberation struggle, and the historic founding values of 1971.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Popular Items:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Official Liberation War Museum brass crests</SubItem>
                                                    <SubItem>Commemorative lapel pins &amp; keychains</SubItem>
                                                    <SubItem>Struggle pictorial posters &amp; postage stamps</SubItem>
                                                    <SubItem>Museum-branded canvas tote bags and badges</SubItem>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 3: Media Releases */}
                                    <div className="facility-card">
                                        <div className="facility-label">
                                            <span className="facility-label-icon">{ICONS.mediaFilm}</span>
                                            <span>Audio-Visual &amp; Documentary Releases</span>
                                        </div>
                                        <div className="facility-value">
                                            <p className="facility-desc">
                                                Archival documentary films on DVD from the Liberation Docfest Bangladesh, as well as recorded musical compilations of wartime patriotic broadcasts from Swadhin Bangla Betar Kendra.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Media Compilations:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Liberation Docfest winning films on DVD</SubItem>
                                                    <SubItem>Swadhin Bangla Betar Kendra songs on CD</SubItem>
                                                    <SubItem>Oral history video excerpts and documentaries</SubItem>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 4: Location & Payment */}
                                    <div className="facility-card">
                                        <div className="facility-label">
                                            <span className="facility-label-icon">{ICONS.storeDetails}</span>
                                            <span>Kiosk Details &amp; Operational Info</span>
                                        </div>
                                        <div className="facility-value">
                                            <p className="facility-desc">
                                                Conveniently situated adjacent to the ticket counter and main reception desk on the ground floor.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Visiting Details:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem><strong>Location:</strong> Ground Floor Concourse (near entrance)</SubItem>
                                                    <SubItem><strong>Hours:</strong> Open during all museum visiting hours</SubItem>
                                                    <SubItem><strong>Payment:</strong> Cash, bKash, and major Debit/Credit Cards</SubItem>
                                                    <SubItem><strong>Community:</strong> 100% of proceeds fund student reach-out buses</SubItem>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}

                        {/* =========================================================
                            TAB 3: EXHIBITION GALLERY
                           ========================================================= */}
                        {activeTab === 'exhibition-gallery' && (
                            <div className="facilities-panel" role="tabpanel">
                                <div className="facilities-grid facilities-grid--accred">
                                    
                                    {/* Featured Full-Width Card */}
                                    <div className="facility-card facility-card--featured-accred">
                                        <div className="facility-label">
                                            <span className="facility-label-icon">{ICONS.museumFacade}</span>
                                            <span>Permanent &amp; Temporary Exhibition Galleries (প্রদর্শনী গ্যালারিসমূহ)</span>
                                        </div>
                                        <div className="facility-value">
                                            <p className="facility-desc">
                                                The Liberation War Museum complex encompasses 3,500 square meters of permanent gallery space and a 500-square-meter international-standard temporary exhibition hall. Through over 21,000 collection items and 1,300 physical relics on public display, visitors walk through an immersive, chronological journey of Bangladesh’s birth.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Gallery Complex Specifications:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>4 permanent exhibition galleries chronologically curated (3,500 sqm)</SubItem>
                                                    <SubItem>500 sqm climate-controlled temporary exhibition hall</SubItem>
                                                    <SubItem>Over 1,300 rare physical relics and martyr belongings on display</SubItem>
                                                    <SubItem>Specialized UV-filtered LED illumination and microclimate vitrines</SubItem>
                                                    <SubItem>Full accessibility with wheelchair ramps and passenger elevators</SubItem>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Gallery 1 */}
                                    <div className="facility-card">
                                        <div className="facility-label">
                                            <span className="facility-label-icon">{ICONS.galleryHeritage}</span>
                                            <span>Gallery 1: Bengali Heritage &amp; Early Struggles</span>
                                        </div>
                                        <div className="facility-value">
                                            <p className="facility-desc">
                                                Traces the early historical, archaeological, and cultural roots of Bengal, British colonial domination, the 1947 partition, the historic 1952 Language Movement, and the landslide election victory of 1970.
                                            </p>
                                            <div className="facility-sub-items">
                                                <ActionLink to="/explore/gallery-1">
                                                    Explore Gallery 1 in Detail
                                                </ActionLink>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Gallery 2 */}
                                    <div className="facility-card">
                                        <div className="facility-label">
                                            <span className="facility-label-icon">{ICONS.gallerySacrifice}</span>
                                            <span>Gallery 2: Rights &amp; Sacrifices</span>
                                        </div>
                                        <div className="facility-value">
                                            <p className="facility-desc">
                                                Covers Operation Searchlight, the systematic genocide unleashed on March 25, 1971, Bangabandhu's declaration of independence, the plight of 10 million refugees in India, and the formation of the Mujibnagar Government.
                                            </p>
                                            <div className="facility-sub-items">
                                                <ActionLink to="/explore/gallery-2">
                                                    Explore Gallery 2 in Detail
                                                </ActionLink>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Gallery 3 */}
                                    <div className="facility-card">
                                        <div className="facility-label">
                                            <span className="facility-label-icon">{ICONS.galleryBattles}</span>
                                            <span>Gallery 3: Battles &amp; Friends</span>
                                        </div>
                                        <div className="facility-value">
                                            <p className="facility-desc">
                                                Focuses on the armed resistance of the Mukti Bahini across 11 military sectors, guerrilla operations, the air and naval forces, the Concert for Bangladesh, and global humanitarian solidarity.
                                            </p>
                                            <div className="facility-sub-items">
                                                <ActionLink to="/explore/gallery-3">
                                                    Explore Gallery 3 in Detail
                                                </ActionLink>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Gallery 4 */}
                                    <div className="facility-card">
                                        <div className="facility-label">
                                            <span className="facility-label-icon">{ICONS.galleryVictory}</span>
                                            <span>Gallery 4: Victory &amp; Values</span>
                                        </div>
                                        <div className="facility-value">
                                            <p className="facility-desc">
                                                Chronicles the final joint allied offensive, the historic Pakistani surrender on December 16, 1971, the fundamental constitutional principles of 1972, and the continuing pursuit of accountability.
                                            </p>
                                            <div className="facility-sub-items">
                                                <ActionLink to="/explore/gallery-4">
                                                    Explore Gallery 4 in Detail
                                                </ActionLink>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Temporary Exhibition Space */}
                                    <div className="facility-card">
                                        <div className="facility-label">
                                            <span className="facility-label-icon">{ICONS.artHall}</span>
                                            <span>Temporary Exhibition Hall (500 sqm)</span>
                                        </div>
                                        <div className="facility-value">
                                            <p className="facility-desc">
                                                A flexible, state-of-the-art exhibition hall hosting visiting international photography, docfest screenings, contemporary memorial art, and special thematic exhibits on universal human rights.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Space Features:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Modular partition walls and hanging systems</SubItem>
                                                    <SubItem>Dedicated projection and digital media setups</SubItem>
                                                    <SubItem>Hosts Liberation Docfest photographic exhibits</SubItem>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 360 Virtual Tour */}
                                    <div className="facility-card">
                                        <div className="facility-label">
                                            <span className="facility-label-icon">{ICONS.virtualTour}</span>
                                            <span>360° Virtual Museum Tour</span>
                                        </div>
                                        <div className="facility-value">
                                            <p className="facility-desc">
                                                Can't visit in person today? Explore our interactive high-definition 360-degree virtual tour of all four permanent galleries with embedded audio-visual guides and item descriptions.
                                            </p>
                                            <div className="facility-sub-items">
                                                <ActionLink to="/virtual-tour">
                                                    Experience 360° Virtual Tour
                                                </ActionLink>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}

                        {/* =========================================================
                            TAB 4: CAFES & CANTEEN
                           ========================================================= */}
                        {activeTab === 'cafes' && (
                            <div className="facilities-panel" role="tabpanel">
                                <div className="facilities-grid facilities-grid--accred">
                                    
                                    {/* Featured Full-Width Card */}
                                    <div className="facility-card facility-card--featured-accred">
                                        <div className="facility-label">
                                            <span className="facility-label-icon">{ICONS.canteenMain}</span>
                                            <span>Museum Canteen &amp; "Adda" Court (ক্যাফেটেরিয়া ও আড্ডা কর্নার)</span>
                                        </div>
                                        <div className="facility-value">
                                            <p className="facility-desc">
                                                Designed to complement the emotional journey through the museum, the open-air and sheltered cafeteria offers a serene space for contemplation, conversation, and refreshment. Situated alongside the central courtyard and water reflection pool, it preserves the authentic Bengali tradition of informal intellectual gathering ('Adda').
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Café Highlights &amp; Setting:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Shaded outdoor seating facing the architectural water reflection pool</SubItem>
                                                    <SubItem>Freshly brewed traditional tea, coffee, seasonal juices, and light meals</SubItem>
                                                    <SubItem>Pre-ordered group meal arrangements for school tours &amp; delegations</SubItem>
                                                    <SubItem>Strict ecological sustainability standards with biodegradable packaging</SubItem>
                                                    <SubItem>Wheelchair accessible ground floor location</SubItem>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 1: Refreshment Menu */}
                                    <div className="facility-card">
                                        <div className="facility-label">
                                            <span className="facility-label-icon">{ICONS.refreshments}</span>
                                            <span>Refreshments &amp; Light Meals</span>
                                        </div>
                                        <div className="facility-value">
                                            <p className="facility-desc">
                                                Enjoy freshly prepared, hygienic snacks and beverages during your museum visit:
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Menu Selections:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Traditional freshly brewed tea (Dudh Cha &amp; Rong Cha)</SubItem>
                                                    <SubItem>Hot espresso, cappuccino &amp; iced coffee</SubItem>
                                                    <SubItem>Fresh bakery patties, singara, and vegetable samosas</SubItem>
                                                    <SubItem>Bottled mineral water &amp; pure natural juices</SubItem>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 2: The Adda Space */}
                                    <div className="facility-card">
                                        <div className="facility-label">
                                            <span className="facility-label-icon">{ICONS.gatheringAdda}</span>
                                            <span>The "Adda" Court &amp; Atmosphere</span>
                                        </div>
                                        <div className="facility-value">
                                            <p className="facility-desc">
                                                "Adda" is a cherished tradition of thoughtful conversation and fellowship. The courtyard seating provides an unhurried, peaceful atmosphere for veterans, researchers, and students to reflect on the exhibits and share memories.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Atmosphere Highlights:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Lush open-air courtyard alongside the reflection pool</SubItem>
                                                    <SubItem>Adjacent to the outdoor amphitheatre for cultural gatherings</SubItem>
                                                    <SubItem>Shaded benches and comfortable group seating</SubItem>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 3: Sustainability */}
                                    <div className="facility-card">
                                        <div className="facility-label">
                                            <span className="facility-label-icon">{ICONS.sustainabilityGreen}</span>
                                            <span>Green Building &amp; Sustainability</span>
                                        </div>
                                        <div className="facility-value">
                                            <p className="facility-desc">
                                                In alignment with the museum’s eco-friendly architecture, the café strictly enforces waste segregation, uses biodegradable paper cups and containers, and participates in building water conservation practices.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Ecological Practices:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Zero single-use plastic cups policy</SubItem>
                                                    <SubItem>Biodegradable paper napkins &amp; takeaway packaging</SubItem>
                                                    <SubItem>Segregated recycling bins throughout the courtyard</SubItem>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 4: Operating Guidelines */}
                                    <div className="facility-card">
                                        <div className="facility-label">
                                            <span className="facility-label-icon">{ICONS.guidelinesCafe}</span>
                                            <span>Cafe Guidelines &amp; Visiting Hours</span>
                                        </div>
                                        <div className="facility-value">
                                            <p className="facility-desc">
                                                Essential information for all museum visitors:
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Operating Info:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem><strong>Location:</strong> Ground floor, adjacent to assembly plaza &amp; pool</SubItem>
                                                    <SubItem><strong>Hours:</strong> 10:00 AM – 5:30 PM (Mon – Sat)</SubItem>
                                                    <SubItem><strong>Gallery Policy:</strong> Food and drinks are strictly prohibited inside galleries</SubItem>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}

                    </div>
                </section>
            </main>
        </>
    );
}
