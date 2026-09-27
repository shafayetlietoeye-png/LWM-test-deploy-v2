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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Core Facilities &amp; Resources:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Lorem ipsum dolor sit amet consectetur adipiscing elit</SubItem>
                                                    <SubItem>Vestibulum lacinia arcu eget nulla imperdiet cursus ante</SubItem>
                                                    <SubItem>Curabitur sodales ligula in libero sed dignissim lacinia nunc</SubItem>
                                                    <SubItem>Pellentesque habitant morbi tristique senectus et netus</SubItem>
                                                    <SubItem>Maecenas mattis sed convallis tristique sem proin ut ligula</SubItem>
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Key Holdings:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Lorem ipsum dolor sit amet consectetur</SubItem>
                                                    <SubItem>Duis sagittis ipsum praesent mauris fusce nec</SubItem>
                                                    <SubItem>Vestibulum lacinia arcu eget nulla imperdiet</SubItem>
                                                    <SubItem>Curabitur sodales ligula in libero dignissim</SubItem>
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Digital Portal:</div>
                                                <p className="facility-desc" style={{ marginBottom: '12px' }}>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ante dapibus diam sed nisi nulla quis sem.
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Academic Support:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Lorem ipsum dolor sit amet consectetur</SubItem>
                                                    <SubItem>Curabitur sodales ligula in libero dignissim</SubItem>
                                                    <SubItem>Pellentesque habitant morbi tristique senectus</SubItem>
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi nulla quis sem at nibh elementum imperdiet duis sagittis ipsum.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Visiting Details:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem><strong>Lorem:</strong> Ipsum dolor sit amet, consectetur adipiscing</SubItem>
                                                    <SubItem><strong>Tempus:</strong> Consectetur adipiscing elit, sed do eiusmod</SubItem>
                                                    <SubItem><strong>Officia:</strong> Duis aute irure dolor in reprehenderit</SubItem>
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Featured Offerings:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit</SubItem>
                                                    <SubItem>Vestibulum lacinia arcu eget nulla imperdiet cursus ante</SubItem>
                                                    <SubItem>Curabitur sodales ligula in libero sed dignissim lacinia nunc</SubItem>
                                                    <SubItem>Pellentesque habitant morbi tristique senectus et netus</SubItem>
                                                    <SubItem>Maecenas mattis sed convallis tristique sem proin ut ligula</SubItem>
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Key Publications:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Lorem ipsum dolor sit amet compendiums</SubItem>
                                                    <SubItem>Vestibulum lacinia arcu eget nulla chronicles</SubItem>
                                                    <SubItem>Curabitur sodales ligula in libero proceedings</SubItem>
                                                    <SubItem>Pellentesque habitant morbi tristique illustrated</SubItem>
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Popular Items:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Lorem ipsum dolor sit amet crests</SubItem>
                                                    <SubItem>Vestibulum lacinia arcu lapel pins</SubItem>
                                                    <SubItem>Curabitur sodales ligula posters</SubItem>
                                                    <SubItem>Pellentesque habitant morbi souvenir badges</SubItem>
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Media Compilations:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Lorem ipsum dolor sit amet documentary media</SubItem>
                                                    <SubItem>Vestibulum lacinia arcu audio recordings</SubItem>
                                                    <SubItem>Curabitur sodales ligula video archives</SubItem>
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus ante dapibus diam sed nisi nulla.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Visiting Details:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem><strong>Lorem:</strong> Ipsum dolor sit amet, consectetur adipiscing</SubItem>
                                                    <SubItem><strong>Tempus:</strong> Consectetur adipiscing elit, sed do eiusmod</SubItem>
                                                    <SubItem><strong>Officia:</strong> Duis aute irure dolor in reprehenderit</SubItem>
                                                    <SubItem><strong>Societas:</strong> Integer nec odio praesent libero cursus</SubItem>
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Gallery Complex Specifications:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit</SubItem>
                                                    <SubItem>Vestibulum lacinia arcu eget nulla imperdiet cursus ante</SubItem>
                                                    <SubItem>Curabitur sodales ligula in libero sed dignissim lacinia nunc</SubItem>
                                                    <SubItem>Pellentesque habitant morbi tristique senectus et netus</SubItem>
                                                    <SubItem>Maecenas mattis sed convallis tristique sem proin ut ligula</SubItem>
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis ipsum praesent mauris fusce nec tellus sed augue semper porta vestibulum lacinia arcu.
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Space Features:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Lorem ipsum dolor sit amet modular partition systems</SubItem>
                                                    <SubItem>Vestibulum lacinia arcu digital media setups</SubItem>
                                                    <SubItem>Curabitur sodales ligula special thematic exhibits</SubItem>
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ante dapibus diam sed nisi nulla quis sem at nibh elementum imperdiet duis sagittis ipsum.
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Café Highlights &amp; Setting:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit</SubItem>
                                                    <SubItem>Vestibulum lacinia arcu eget nulla imperdiet cursus ante</SubItem>
                                                    <SubItem>Curabitur sodales ligula in libero sed dignissim lacinia nunc</SubItem>
                                                    <SubItem>Pellentesque habitant morbi tristique senectus et netus</SubItem>
                                                    <SubItem>Maecenas mattis sed convallis tristique sem proin ut ligula</SubItem>
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio praesent libero sed cursus ante dapibus diam:
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Menu Selections:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Lorem ipsum dolor sit amet traditional selections</SubItem>
                                                    <SubItem>Vestibulum lacinia arcu hot and cold beverages</SubItem>
                                                    <SubItem>Curabitur sodales ligula freshly prepared snacks</SubItem>
                                                    <SubItem>Pellentesque habitant morbi mineral water and juices</SubItem>
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Atmosphere Highlights:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Lorem ipsum dolor sit amet courtyard seating</SubItem>
                                                    <SubItem>Vestibulum lacinia arcu open amphitheatre view</SubItem>
                                                    <SubItem>Curabitur sodales ligula peaceful gathering atmosphere</SubItem>
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Ecological Practices:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem>Lorem ipsum dolor sit amet ecological policies</SubItem>
                                                    <SubItem>Vestibulum lacinia arcu biodegradable packaging</SubItem>
                                                    <SubItem>Curabitur sodales ligula segregated waste recycling</SubItem>
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
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ante dapibus diam sed nisi nulla quis sem:
                                            </p>
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">Operating Info:</div>
                                                <ul className="facility-sub-list">
                                                    <SubItem><strong>Lorem:</strong> Ipsum dolor sit amet, consectetur adipiscing</SubItem>
                                                    <SubItem><strong>Tempus:</strong> Consectetur adipiscing elit, sed do eiusmod</SubItem>
                                                    <SubItem><strong>Officia:</strong> Duis aute irure dolor in reprehenderit</SubItem>
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
