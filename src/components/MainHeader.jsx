import { Link, useLocation } from 'react-router-dom';
import { useSearch } from '../context/SearchContext.jsx';
import { getActiveNavSection, isLinkActive } from '../utils/navHelper';

export default function MainHeader() {
    const { openSearch } = useSearch();
    const location = useLocation();
    const currentPath = location.pathname;
    const activeSection = getActiveNavSection(currentPath);

    return (
        <>
            {/* TOPBAR */}
            <div className="topbar">
                <div className="topbar__inner">
                    <div className="topbar__left">
                        <span className="topbar__item"><img src="/assets/icon/clock-plus-svgrepo-com 1.png" className="ico" alt="clock" /> The Museum
                            is Open Today from 10 AM to 5 PM</span>
                    </div>
                    <div className="topbar__right">
                        <span className="topbar__item"><img src="/assets/icon/location-pin-svgrepo-com 1.svg" className="ico" alt="location" /> F11/A
                            &amp; F11/B Sher-e-Bangla Nagar Civic Centre,
                            Agargaon, Dhaka</span>
                    </div>
                </div>
            </div>

            {/* HEADER */}
            <header className="header">
                <div className="header__inner">

                    {/* MOBILE TOP ROW */}
                    <div className="mbar">
                        {/* No mbar__donate here in subpages */}
                        <Link to="/" className="mbar__brand">
                            <img src="/assets/header logo.svg" alt="Logo" className="mbar__logo" />
                            <div className="mbar__text">
                                <div className="mbrand__bn">মুক্তিযুদ্ধ জাদুঘর</div>
                                <div className="mbrand__en">Liberation War Museum</div>
                            </div>
                        </Link>
                        <button className="mbar__burger" aria-label="Open menu">
                            <span></span><span></span><span></span>
                        </button>
                    </div>

                    {/* Desktop left brand - Different from HomeHeader */}
                    <div className="brand brand--desktop">
                        <Link to="/"><img src="/assets/header logo.svg" alt="Museum Logo" className="brand-logo" /></Link>
                        <div className="brand-text">
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <div className="brand__bn">মুক্তিযুদ্ধ জাদুঘর</div>
                                <div className="brand__en">Liberation War Museum</div>
                            </Link>
                        </div>
                    </div>

                    {/* No vlines here */}

                    {/* Desktop right nav */}
                    <div className="right right--desktop">
                        <div className="utility">
                            <button type="button" className="uitem uitem--btn" onClick={openSearch} aria-label="Open search window">
                                <img src="/assets/icon/search-plus-svgrepo-com 1.png" className="uico" alt="search" />
                                Search
                            </button>
                            <Link className="btn-donate" to="/donate">Donate</Link>
                        </div>

                        <nav className="nav">
                            <div className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}>
                                <a href="#" className={activeSection === 'about' ? 'active' : ''}>About</a>
                                <ul className="submenu submenu--explore">
                                    <li><Link to="/prologue" className={isLinkActive('/prologue', currentPath) ? 'active' : ''}>Prologue</Link></li>
                                    <li><Link to="/mission-statement" className={isLinkActive('/mission-statement', currentPath) ? 'active' : ''}>Mission Statement</Link></li>
                                    <li className="has-nested">
                                        <span className={`submenu-nested-toggle ${['/initial-efforts', '/new-museum', '/museum-in-a-nutshell', '/museum-story'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>Museum Story <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/initial-efforts" className={isLinkActive('/initial-efforts', currentPath) ? 'active' : ''}>Initial Efforts</Link></li>
                                            <li><Link to="/new-museum" className={isLinkActive('/new-museum', currentPath) ? 'active' : ''}>New Museum</Link></li>
                                            <li><Link to="/museum-in-a-nutshell" className={isLinkActive('/museum-in-a-nutshell', currentPath) ? 'active' : ''}>Museum in a Nutshell</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/accreditations-and-affiliations" className={isLinkActive('/accreditations-and-affiliations', currentPath) ? 'active' : ''}>Accreditations and Affiliations</Link></li>
                                    <li><Link to="/board-of-trustees" className={isLinkActive('/board-of-trustees', currentPath) ? 'active' : ''}>Board of Trustees</Link></li>
                                    <li><a href="#">Executive Committee and Advisors</a></li>
                                </ul>
                            </div>
                            <div className={`nav-item ${activeSection === 'explore' ? 'active' : ''}`}>
                                <a href="#" className={activeSection === 'explore' ? 'active' : ''}>Explore</a>
                                <ul className="submenu submenu--explore">
                                    <li className="has-nested">
                                        <span className={`submenu-nested-toggle ${['/explore/gallery-1', '/explore/gallery-2', '/explore/gallery-3', '/explore/gallery-4'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>Museum Galleries <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/explore/gallery-1" className={isLinkActive('/explore/gallery-1', currentPath) ? 'active' : ''}>Gallery 1: Heritage and Struggles</Link></li>
                                            <li><Link to="/explore/gallery-2" className={isLinkActive('/explore/gallery-2', currentPath) ? 'active' : ''}>Gallery 2: Rights and Sacrifices</Link></li>
                                            <li><Link to="/explore/gallery-3" className={isLinkActive('/explore/gallery-3', currentPath) ? 'active' : ''}>Gallery 3: Battles and Friends</Link></li>
                                            <li><Link to="/explore/gallery-4" className={isLinkActive('/explore/gallery-4', currentPath) ? 'active' : ''}>Gallery 4: Victory and Values</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-nested">
                                        <span className={`submenu-nested-toggle ${['/explore/bengalis-and-bengal', '/explore/history-of-bangladesh', '/explore/emergence-of-bangladesh', '/explore/proclamation-of-independence', '/explore/liberation-forces-and-commanders', '/explore/liberation-war-forces', '/explore/evolution-of-principles-1972', '/explore/concert-for-bangladesh'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>Bangladesh &amp; Liberation War <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/explore/bengalis-and-bengal" className={isLinkActive('/explore/bengalis-and-bengal', currentPath) ? 'active' : ''}>Bengalis and Bengal</Link></li>
                                            <li><Link to="/explore/history-of-bangladesh" className={isLinkActive('/explore/history-of-bangladesh', currentPath) ? 'active' : ''}>History of Bangladesh</Link></li>
                                            <li><Link to="/explore/emergence-of-bangladesh" className={isLinkActive('/explore/emergence-of-bangladesh', currentPath) ? 'active' : ''}>Emergence of Bangladesh</Link></li>
                                            <li><Link to="/explore/proclamation-of-independence" className={isLinkActive('/explore/proclamation-of-independence', currentPath) ? 'active' : ''}>Proclamation of Independence</Link></li>
                                            <li><Link to="/explore/liberation-forces-and-commanders" className={isLinkActive('/explore/liberation-forces-and-commanders', currentPath) ? 'active' : ''}>Liberation Armed Forces and Sector Commanders</Link></li>
                                            <li><Link to="/explore/liberation-war-forces" className={isLinkActive('/explore/liberation-war-forces', currentPath) ? 'active' : ''}>Liberation War Forces</Link></li>
                                            <li><Link to="/explore/evolution-of-principles-1972" className={isLinkActive('/explore/evolution-of-principles-1972', currentPath) ? 'active' : ''}>Evolution of Fundamental Principles of 1972</Link></li>
                                            <li><Link to="/explore/concert-for-bangladesh" className={isLinkActive('/explore/concert-for-bangladesh', currentPath) ? 'active' : ''}>Concert for Bangladesh and other Cultural Activities</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-nested">
                                        <span className={`submenu-nested-toggle ${['/virtual-tour', '/explore/museum-map', '/explore/facilities-and-amenities', '/facilities-and-amenities', '/facilities-amenities'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>Museum Experience <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/virtual-tour" className={isLinkActive('/virtual-tour', currentPath) ? 'active' : ''}>Virtual Tour</Link></li>
                                            <li><Link to="/explore/museum-map" className={isLinkActive('/explore/museum-map', currentPath) ? 'active' : ''}>Museum Map</Link></li>
                                            <li><Link to="/explore/facilities-and-amenities" className={isLinkActive('/explore/facilities-and-amenities', currentPath) ? 'active' : ''}>Facilities and Amenities</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-nested">
                                        <span className={`submenu-nested-toggle ${['/explore/documents', '/on-this-day', '/explore/oral-history', '/annual-speeches', '/explore/audio-visual-archive', '/explore/historical-sites', '/explore/photo-archive', '/explore/struggle-of-bangladesh-pictorial'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>Archives &amp; Resources <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/explore/documents" className={isLinkActive('/explore/documents', currentPath) ? 'active' : ''}>Documents</Link></li>
                                            <li><Link to="/on-this-day" className={isLinkActive('/on-this-day', currentPath) ? 'active' : ''}>On This Day in 1971</Link></li>
                                            <li><Link to="/explore/oral-history" className={isLinkActive('/explore/oral-history', currentPath) ? 'active' : ''}>Oral History</Link></li>
                                            <li><Link to="/annual-speeches" className={isLinkActive('/annual-speeches', currentPath) ? 'active' : ''}>Annual Speeches</Link></li>
                                            <li><Link to="/explore/audio-visual-archive" className={isLinkActive('/explore/audio-visual-archive', currentPath) ? 'active' : ''}>Audio Visual Archive</Link></li>
                                            <li><Link to="/explore/historical-sites" className={isLinkActive('/explore/historical-sites', currentPath) ? 'active' : ''}>Historical Sites</Link></li>
                                            <li><Link to="/explore/photo-archive" className={isLinkActive('/explore/photo-archive', currentPath) ? 'active' : ''}>Photo Archive</Link></li>
                                            <li><Link to="/explore/struggle-of-bangladesh-pictorial" className={isLinkActive('/explore/struggle-of-bangladesh-pictorial', currentPath) ? 'active' : ''}>Struggle of Bangladesh: Pictorial</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className={`nav-item ${activeSection === 'activities' ? 'active' : ''}`}>
                                <a href="#" className={activeSection === 'activities' ? 'active' : ''}>Activities</a>
                                <ul className="submenu submenu--explore">
                                    <li><Link to="/activities/events" className={isLinkActive('/activities/events', currentPath) ? 'active' : ''}>Events</Link></li>
                                    <li className="has-nested">
                                        <span className={`submenu-nested-toggle ${['/activities/programs/regular-public-programs', '/activities/programs/school-programs', '/activities/programs/reachout-programs', '/activities/programs/outreach-programs', '/activities/programs/international-conferences'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>Programs &amp; Conferences <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/activities/programs/regular-public-programs" className={isLinkActive('/activities/programs/regular-public-programs', currentPath) ? 'active' : ''}>Regular Public Programs</Link></li>
                                            <li><Link to="/activities/programs/school-programs" className={isLinkActive('/activities/programs/school-programs', currentPath) ? 'active' : ''}>School Programs</Link></li>
                                            <li><Link to="/activities/programs/reachout-programs" className={isLinkActive('/activities/programs/reachout-programs', currentPath) ? 'active' : ''}>Reachout Programs</Link></li>
                                            <li><Link to="/activities/programs/outreach-programs" className={isLinkActive('/activities/programs/outreach-programs', currentPath) ? 'active' : ''}>Outreach Programs</Link></li>
                                            <li><Link to="/activities/programs/international-conferences" className={isLinkActive('/activities/programs/international-conferences', currentPath) ? 'active' : ''}>International Conferences</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-nested">
                                        <span className={`submenu-nested-toggle ${isLinkActive('/activities/awards/memorial-award', currentPath) ? 'active' : ''}`}>Awards <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/activities/awards/memorial-award" className={isLinkActive('/activities/awards/memorial-award', currentPath) ? 'active' : ''}>Memorial Award (বজলুর রহমান স্মৃতিপদক)</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-nested">
                                        <span className={`submenu-nested-toggle ${['/activities/exhibitions/digital-thread', '/activities/exhibitions/liberation-docfest'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>Exhibitions <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/activities/exhibitions/digital-thread" className={isLinkActive('/activities/exhibitions/digital-thread', currentPath) ? 'active' : ''}>Digital Thread Exhibit</Link></li>
                                            <li><Link to="/activities/exhibitions/liberation-docfest" className={isLinkActive('/activities/exhibitions/liberation-docfest', currentPath) ? 'active' : ''}>Liberation Docfest Bangladesh</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-nested">
                                        <span className={`submenu-nested-toggle ${['/activities/publications/sultanas-dream', '/activities/publications/other-publications', '/publications'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>Publications <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/activities/publications/sultanas-dream" className={isLinkActive('/activities/publications/sultanas-dream', currentPath) ? 'active' : ''}>Sultana's Dream</Link></li>
                                            <li><Link to="/activities/publications/other-publications" className={isLinkActive('/activities/publications/other-publications', currentPath) ? 'active' : ''}>Other Notable Publications</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-nested">
                                        <span className={`submenu-nested-toggle ${['/activities/media/newsletters', '/activities/media/press-coverage', '/activities/media/advertisements'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>Media <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/activities/media/newsletters" className={isLinkActive('/activities/media/newsletters', currentPath) ? 'active' : ''}>Newsletters</Link></li>
                                            <li><Link to="/activities/media/press-coverage" className={isLinkActive('/activities/media/press-coverage', currentPath) ? 'active' : ''}>Press Coverage</Link></li>
                                            <li><Link to="/activities/media/advertisements" className={isLinkActive('/activities/media/advertisements', currentPath) ? 'active' : ''}>Audio Visual Archive</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-nested">
                                        <span className={`submenu-nested-toggle ${['/activities/csgj/about', '/activities/csgj/seminars', '/activities/csgj/research', '/activities/csgj/certificate-course', '/activities/csgj/exchange-program', '/activities/csgj/volunteer', '/activities/csgj/winter-school'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>The Center for the Study of Genocide and Justice (CSGJ) <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/activities/csgj/about" className={isLinkActive('/activities/csgj/about', currentPath) ? 'active' : ''}>About CSGJ</Link></li>
                                            <li><Link to="/activities/csgj/seminars" className={isLinkActive('/activities/csgj/seminars', currentPath) ? 'active' : ''}>Seminar and Webinar</Link></li>
                                            <li><Link to="/activities/csgj/research" className={isLinkActive('/activities/csgj/research', currentPath) ? 'active' : ''}>Research and Publications</Link></li>
                                            <li><Link to="/activities/csgj/certificate-course" className={isLinkActive('/activities/csgj/certificate-course', currentPath) ? 'active' : ''}>Certificate Course</Link></li>
                                            <li><Link to="/activities/csgj/exchange-program" className={isLinkActive('/activities/csgj/exchange-program', currentPath) ? 'active' : ''}>Voluntary Exchange Program</Link></li>
                                            <li><Link to="/activities/csgj/volunteer" className={isLinkActive('/activities/csgj/volunteer', currentPath) ? 'active' : ''}>Volunteer at CSGJ</Link></li>
                                            <li><Link to="/activities/csgj/winter-school" className={isLinkActive('/activities/csgj/winter-school', currentPath) ? 'active' : ''}>Winter School</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-nested">
                                        <span className={`submenu-nested-toggle ${['/activities/administrative/rfqs', '/activities/administrative/venue-hire', '/activities/administrative/citizen-charter', '/activities/administrative/integrity-action-plan', '/activities/administrative/purchase-plan', '/activities/administrative/performance-report', '/activities/administrative/audit-reports'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>Administrative <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/activities/administrative/rfqs" className={isLinkActive('/activities/administrative/rfqs', currentPath) ? 'active' : ''}>RFQs</Link></li>
                                            <li><Link to="/activities/administrative/venue-hire" className={isLinkActive('/activities/administrative/venue-hire', currentPath) ? 'active' : ''}>Venue hire</Link></li>
                                            <li><Link to="/activities/administrative/citizen-charter" className={isLinkActive('/activities/administrative/citizen-charter', currentPath) ? 'active' : ''}>Citizen Charter</Link></li>
                                            <li><Link to="/activities/administrative/integrity-action-plan" className={isLinkActive('/activities/administrative/integrity-action-plan', currentPath) ? 'active' : ''}>Strategic Action Plan for Integrity</Link></li>
                                            <li><Link to="/activities/administrative/purchase-plan" className={isLinkActive('/activities/administrative/purchase-plan', currentPath) ? 'active' : ''}>Annual Purchase Plan</Link></li>
                                            <li><Link to="/activities/administrative/performance-report" className={isLinkActive('/activities/administrative/performance-report', currentPath) ? 'active' : ''}>Annual Performance Report</Link></li>
                                            <li><Link to="/activities/administrative/audit-reports" className={isLinkActive('/activities/administrative/audit-reports', currentPath) ? 'active' : ''}>Audit Reports</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className={`nav-item ${activeSection === 'support' ? 'active' : ''}`}>
                                <a href="#" className={activeSection === 'support' ? 'active' : ''}>Support</a>
                                <ul className="submenu submenu--explore">
                                    <li><Link to="/support/membership/overview" className={isLinkActive('/support/membership/overview', currentPath) ? 'active' : ''}>Donations and Memberships</Link></li>
                                    <li className="has-nested">
                                        <span className={`submenu-nested-toggle ${['/donate', '/support/donation/all-donors', '/support/donation/object-donors', '/support/donation/archive-donors'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>Donation <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/donate" className={isLinkActive('/donate', currentPath) ? 'active' : ''}>Make a Donation</Link></li>
                                            <li><Link to="/support/donation/all-donors" className={isLinkActive('/support/donation/all-donors', currentPath) ? 'active' : ''}>All Donors</Link></li>
                                            <li><Link to="/support/donation/object-donors" className={isLinkActive('/support/donation/object-donors', currentPath) ? 'active' : ''}>Object Donor List</Link></li>
                                            <li><Link to="/support/donation/archive-donors" className={isLinkActive('/support/donation/archive-donors', currentPath) ? 'active' : ''}>Archive Donors</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-nested">
                                        <span className={`submenu-nested-toggle ${isLinkActive('/support/campaigns/fund-collection-campaign', currentPath) ? 'active' : ''}`}>Campaigns <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/support/campaigns/fund-collection-campaign" className={isLinkActive('/support/campaigns/fund-collection-campaign', currentPath) ? 'active' : ''}>Fund Collection Campaign</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-nested">
                                        <span className={`submenu-nested-toggle ${isLinkActive('/support/community/friends', currentPath) ? 'active' : ''}`}>Community <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/support/community/friends" className={isLinkActive('/support/community/friends', currentPath) ? 'active' : ''}>Friends of Liberation War Museum Bangladesh</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className={`nav-item ${activeSection === 'visit' ? 'active' : ''}`}>
                                <a href="#" className={activeSection === 'visit' ? 'active' : ''}>Visit</a>
                                <ul className="submenu submenu--explore">
                                    <li><Link to="/visit/ticket-information" className={isLinkActive('/visit/ticket-information', currentPath) ? 'active' : ''}>Ticket Information</Link></li>
                                    <li><Link to="/visit/plan-your-visit" className={isLinkActive('/visit/plan-your-visit', currentPath) ? 'active' : ''}>Plan Your Visit</Link></li>
                                    <li><Link to="/visit/maps-directions" className={isLinkActive('/visit/maps-directions', currentPath) ? 'active' : ''}>Maps and Direction</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    {/* No center badge here */}

                    {/* MOBILE CENTER TITLE */}
                    <div className="mbrand">
                        <div className="mbrand__bn">মুক্তিযুদ্ধ জাদুঘর</div>
                        <div className="mbrand__en">Liberation War Museum</div>
                    </div>

                </div>

                {/* Mobile Navigation Menu - Enhanced for Consistency */}
                <div className="mobile-nav">
                    <div className="mobile-nav__links">
                        <Link to="/" className={currentPath === '/' ? 'active' : ''}>Home</Link>
                        <button type="button" className="mobile-search-nav-item" onClick={openSearch}>
                            <img src="/assets/icon/search-plus-svgrepo-com 1.png" alt="search" style={{ width: 14, height: 14, marginRight: 8, verticalAlign: 'middle' }} />
                            Search
                        </button>
                        <div className={`mobile-submenu ${activeSection === 'about' ? 'active' : ''}`}>
                            <a href="#" className={`mobile-submenu__toggle ${activeSection === 'about' ? 'active' : ''}`}>About <span className="mobile-submenu__arrow">{'\u203A'}</span></a>
                            <div className="mobile-submenu__content">
                                <Link to="/prologue" className={isLinkActive('/prologue', currentPath) ? 'active' : ''}>Prologue</Link>
                                <Link to="/mission-statement" className={isLinkActive('/mission-statement', currentPath) ? 'active' : ''}>Mission Statement</Link>
                                <div className={`mobile-accordion ${['/initial-efforts', '/new-museum', '/museum-in-a-nutshell', '/museum-story'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>
                                    <span className={`mobile-accordion__toggle ${['/initial-efforts', '/new-museum', '/museum-in-a-nutshell', '/museum-story'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>Museum Story <span className="mobile-accordion__arrow">{'\u203A'}</span></span>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/initial-efforts" className={isLinkActive('/initial-efforts', currentPath) ? 'active' : ''}>Initial Efforts</Link>
                                        <Link to="/new-museum" className={isLinkActive('/new-museum', currentPath) ? 'active' : ''}>New Museum</Link>
                                        <Link to="/museum-in-a-nutshell" className={isLinkActive('/museum-in-a-nutshell', currentPath) ? 'active' : ''}>Museum in a Nutshell</Link>
                                    </div>
                                </div>
                                <Link to="/accreditations-and-affiliations" className={isLinkActive('/accreditations-and-affiliations', currentPath) ? 'active' : ''}>Accreditations and Affiliations</Link>
                                <Link to="/board-of-trustees" className={isLinkActive('/board-of-trustees', currentPath) ? 'active' : ''}>Board of Trustees</Link>
                                <a href="#">Executive Committee and Advisors</a>
                            </div>
                        </div>
                        <div className={`mobile-submenu ${activeSection === 'explore' ? 'active' : ''}`}>
                            <a href="#" className={`mobile-submenu__toggle ${activeSection === 'explore' ? 'active' : ''}`}>Explore <span className="mobile-submenu__arrow">{'\u203A'}</span></a>
                            <div className="mobile-submenu__content">
                                <div className={`mobile-accordion ${['/explore/gallery-1', '/explore/gallery-2', '/explore/gallery-3', '/explore/gallery-4'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>
                                    <span className={`mobile-accordion__toggle ${['/explore/gallery-1', '/explore/gallery-2', '/explore/gallery-3', '/explore/gallery-4'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>Museum Galleries <span className="mobile-accordion__arrow">{'\u203A'}</span></span>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/explore/gallery-1" className={isLinkActive('/explore/gallery-1', currentPath) ? 'active' : ''}>Gallery 1: Heritage and Struggles</Link>
                                        <Link to="/explore/gallery-2" className={isLinkActive('/explore/gallery-2', currentPath) ? 'active' : ''}>Gallery 2: Rights and Sacrifices</Link>
                                        <Link to="/explore/gallery-3" className={isLinkActive('/explore/gallery-3', currentPath) ? 'active' : ''}>Gallery 3: Battles and Friends</Link>
                                        <Link to="/explore/gallery-4" className={isLinkActive('/explore/gallery-4', currentPath) ? 'active' : ''}>Gallery 4: Victory and Values</Link>
                                    </div>
                                </div>
                                <div className={`mobile-accordion ${['/explore/bengalis-and-bengal', '/explore/history-of-bangladesh', '/explore/emergence-of-bangladesh', '/explore/proclamation-of-independence', '/explore/liberation-forces-and-commanders', '/explore/liberation-war-forces', '/explore/evolution-of-principles-1972', '/explore/concert-for-bangladesh'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>
                                    <span className={`mobile-accordion__toggle ${['/explore/bengalis-and-bengal', '/explore/history-of-bangladesh', '/explore/emergence-of-bangladesh', '/explore/proclamation-of-independence', '/explore/liberation-forces-and-commanders', '/explore/liberation-war-forces', '/explore/evolution-of-principles-1972', '/explore/concert-for-bangladesh'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>Bangladesh &amp; Liberation War <span className="mobile-accordion__arrow">{'\u203A'}</span></span>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/explore/bengalis-and-bengal" className={isLinkActive('/explore/bengalis-and-bengal', currentPath) ? 'active' : ''}>Bengalis and Bengal</Link>
                                        <Link to="/explore/history-of-bangladesh" className={isLinkActive('/explore/history-of-bangladesh', currentPath) ? 'active' : ''}>History of Bangladesh</Link>
                                        <Link to="/explore/emergence-of-bangladesh" className={isLinkActive('/explore/emergence-of-bangladesh', currentPath) ? 'active' : ''}>Emergence of Bangladesh</Link>
                                        <Link to="/explore/proclamation-of-independence" className={isLinkActive('/explore/proclamation-of-independence', currentPath) ? 'active' : ''}>Proclamation of Independence</Link>
                                        <Link to="/explore/liberation-forces-and-commanders" className={isLinkActive('/explore/liberation-forces-and-commanders', currentPath) ? 'active' : ''}>Liberation Armed Forces and Sector Commanders</Link>
                                        <Link to="/explore/liberation-war-forces" className={isLinkActive('/explore/liberation-war-forces', currentPath) ? 'active' : ''}>Liberation War Forces</Link>
                                        <Link to="/explore/evolution-of-principles-1972" className={isLinkActive('/explore/evolution-of-principles-1972', currentPath) ? 'active' : ''}>Evolution of Fundamental Principles of 1972</Link>
                                        <Link to="/explore/concert-for-bangladesh" className={isLinkActive('/explore/concert-for-bangladesh', currentPath) ? 'active' : ''}>Concert for Bangladesh and other Cultural Activities</Link>
                                    </div>
                                </div>
                                <div className={`mobile-accordion ${['/virtual-tour', '/explore/museum-map', '/explore/facilities-and-amenities', '/facilities-and-amenities', '/facilities-amenities'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>
                                    <span className={`mobile-accordion__toggle ${['/virtual-tour', '/explore/museum-map', '/explore/facilities-and-amenities', '/facilities-and-amenities', '/facilities-amenities'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>Museum Experience <span className="mobile-accordion__arrow">{'\u203A'}</span></span>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/virtual-tour" className={isLinkActive('/virtual-tour', currentPath) ? 'active' : ''}>Virtual Tour</Link>
                                        <Link to="/explore/museum-map" className={isLinkActive('/explore/museum-map', currentPath) ? 'active' : ''}>Museum Map</Link>
                                        <Link to="/explore/facilities-and-amenities" className={isLinkActive('/explore/facilities-and-amenities', currentPath) ? 'active' : ''}>Facilities &amp; Amenities</Link>
                                    </div>
                                </div>
                                <div className={`mobile-accordion ${['/explore/documents', '/on-this-day', '/explore/oral-history', '/annual-speeches', '/explore/audio-visual-archive', '/explore/historical-sites', '/explore/photo-archive', '/explore/struggle-of-bangladesh-pictorial'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>
                                    <span className={`mobile-accordion__toggle ${['/explore/documents', '/on-this-day', '/explore/oral-history', '/annual-speeches', '/explore/audio-visual-archive', '/explore/historical-sites', '/explore/photo-archive', '/explore/struggle-of-bangladesh-pictorial'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>Archives &amp; Resources <span className="mobile-accordion__arrow">{'\u203A'}</span></span>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/explore/documents" className={isLinkActive('/explore/documents', currentPath) ? 'active' : ''}>Documents</Link>
                                        <Link to="/on-this-day" className={isLinkActive('/on-this-day', currentPath) ? 'active' : ''}>On This Day in 1971</Link>
                                        <Link to="/explore/oral-history" className={isLinkActive('/explore/oral-history', currentPath) ? 'active' : ''}>Oral History</Link>
                                        <Link to="/annual-speeches" className={isLinkActive('/annual-speeches', currentPath) ? 'active' : ''}>Annual Speeches</Link>
                                        <Link to="/explore/audio-visual-archive" className={isLinkActive('/explore/audio-visual-archive', currentPath) ? 'active' : ''}>Audio Visual Archive</Link>
                                        <Link to="/explore/historical-sites" className={isLinkActive('/explore/historical-sites', currentPath) ? 'active' : ''}>Historical Sites</Link>
                                        <Link to="/explore/photo-archive" className={isLinkActive('/explore/photo-archive', currentPath) ? 'active' : ''}>Photo Archive</Link>
                                        <Link to="/explore/struggle-of-bangladesh-pictorial" className={isLinkActive('/explore/struggle-of-bangladesh-pictorial', currentPath) ? 'active' : ''}>Struggle of Bangladesh: Pictorial</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`mobile-submenu ${activeSection === 'activities' ? 'active' : ''}`}>
                            <a href="#" className={`mobile-submenu__toggle ${activeSection === 'activities' ? 'active' : ''}`}>Activities <span className="mobile-submenu__arrow">{'›'}</span></a>
                            <div className="mobile-submenu__content">
                                <Link to="/activities/events" className={isLinkActive('/activities/events', currentPath) ? 'active' : ''}>Events</Link>
                                <div className={`mobile-accordion ${['/activities/programs/regular-public-programs', '/activities/programs/school-programs', '/activities/programs/reachout-programs', '/activities/programs/outreach-programs', '/activities/programs/international-conferences'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>
                                    <a href="#" className={`mobile-accordion__toggle ${['/activities/programs/regular-public-programs', '/activities/programs/school-programs', '/activities/programs/reachout-programs', '/activities/programs/outreach-programs', '/activities/programs/international-conferences'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>Programs &amp; Conferences <span className="mobile-accordion__arrow">{'›'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/activities/programs/regular-public-programs" className={isLinkActive('/activities/programs/regular-public-programs', currentPath) ? 'active' : ''}>Regular Public Programs</Link>
                                        <Link to="/activities/programs/school-programs" className={isLinkActive('/activities/programs/school-programs', currentPath) ? 'active' : ''}>School Programs</Link>
                                        <Link to="/activities/programs/reachout-programs" className={isLinkActive('/activities/programs/reachout-programs', currentPath) ? 'active' : ''}>Reachout Programs</Link>
                                        <Link to="/activities/programs/outreach-programs" className={isLinkActive('/activities/programs/outreach-programs', currentPath) ? 'active' : ''}>Outreach Programs</Link>
                                        <Link to="/activities/programs/international-conferences" className={isLinkActive('/activities/programs/international-conferences', currentPath) ? 'active' : ''}>International Conferences</Link>
                                    </div>
                                </div>
                                <div className={`mobile-accordion ${isLinkActive('/activities/awards/memorial-award', currentPath) ? 'active' : ''}`}>
                                    <a href="#" className={`mobile-accordion__toggle ${isLinkActive('/activities/awards/memorial-award', currentPath) ? 'active' : ''}`}>Awards <span className="mobile-accordion__arrow">{'›'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/activities/awards/memorial-award" className={isLinkActive('/activities/awards/memorial-award', currentPath) ? 'active' : ''}>Memorial Award (বজলুর রহমান স্মৃতিপদক)</Link>
                                    </div>
                                </div>
                                <div className={`mobile-accordion ${['/activities/exhibitions/digital-thread', '/activities/exhibitions/liberation-docfest'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>
                                    <a href="#" className={`mobile-accordion__toggle ${['/activities/exhibitions/digital-thread', '/activities/exhibitions/liberation-docfest'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>Exhibitions <span className="mobile-accordion__arrow">{'›'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/activities/exhibitions/digital-thread" className={isLinkActive('/activities/exhibitions/digital-thread', currentPath) ? 'active' : ''}>Digital Thread Exhibit</Link>
                                        <Link to="/activities/exhibitions/liberation-docfest" className={isLinkActive('/activities/exhibitions/liberation-docfest', currentPath) ? 'active' : ''}>Liberation Docfest Bangladesh</Link>
                                    </div>
                                </div>
                                <div className={`mobile-accordion ${['/activities/publications/sultanas-dream', '/activities/publications/other-publications', '/publications'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>
                                    <a href="#" className={`mobile-accordion__toggle ${['/activities/publications/sultanas-dream', '/activities/publications/other-publications', '/publications'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>Publications <span className="mobile-accordion__arrow">{'›'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/activities/publications/sultanas-dream" className={isLinkActive('/activities/publications/sultanas-dream', currentPath) ? 'active' : ''}>Sultana's Dream</Link>
                                        <Link to="/activities/publications/other-publications" className={isLinkActive('/activities/publications/other-publications', currentPath) ? 'active' : ''}>Other Notable Publications</Link>
                                    </div>
                                </div>
                                <div className={`mobile-accordion ${['/activities/media/newsletters', '/activities/media/press-coverage', '/activities/media/advertisements'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>
                                    <a href="#" className={`mobile-accordion__toggle ${['/activities/media/newsletters', '/activities/media/press-coverage', '/activities/media/advertisements'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>Media <span className="mobile-accordion__arrow">{'›'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/activities/media/newsletters" className={isLinkActive('/activities/media/newsletters', currentPath) ? 'active' : ''}>Newsletters</Link>
                                        <Link to="/activities/media/press-coverage" className={isLinkActive('/activities/media/press-coverage', currentPath) ? 'active' : ''}>Press Coverage</Link>
                                        <Link to="/activities/media/advertisements" className={isLinkActive('/activities/media/advertisements', currentPath) ? 'active' : ''}>Audio Visual Archive</Link>
                                    </div>
                                </div>
                                <div className={`mobile-accordion ${['/activities/csgj/about', '/activities/csgj/seminars', '/activities/csgj/research', '/activities/csgj/certificate-course', '/activities/csgj/exchange-program', '/activities/csgj/volunteer', '/activities/csgj/winter-school'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>
                                    <a href="#" className={`mobile-accordion__toggle ${['/activities/csgj/about', '/activities/csgj/seminars', '/activities/csgj/research', '/activities/csgj/certificate-course', '/activities/csgj/exchange-program', '/activities/csgj/volunteer', '/activities/csgj/winter-school'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>The Center for the Study of Genocide and Justice (CSGJ) <span className="mobile-accordion__arrow">{'›'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/activities/csgj/about" className={isLinkActive('/activities/csgj/about', currentPath) ? 'active' : ''}>About CSGJ</Link>
                                        <Link to="/activities/csgj/seminars" className={isLinkActive('/activities/csgj/seminars', currentPath) ? 'active' : ''}>Seminar and Webinar</Link>
                                        <Link to="/activities/csgj/research" className={isLinkActive('/activities/csgj/research', currentPath) ? 'active' : ''}>Research and Publications</Link>
                                        <Link to="/activities/csgj/certificate-course" className={isLinkActive('/activities/csgj/certificate-course', currentPath) ? 'active' : ''}>Certificate Course</Link>
                                        <Link to="/activities/csgj/exchange-program" className={isLinkActive('/activities/csgj/exchange-program', currentPath) ? 'active' : ''}>Voluntary Exchange Program</Link>
                                        <Link to="/activities/csgj/volunteer" className={isLinkActive('/activities/csgj/volunteer', currentPath) ? 'active' : ''}>Volunteer at CSGJ</Link>
                                        <Link to="/activities/csgj/winter-school" className={isLinkActive('/activities/csgj/winter-school', currentPath) ? 'active' : ''}>Winter School</Link>
                                    </div>
                                </div>
                                <div className={`mobile-accordion ${['/activities/administrative/rfqs', '/activities/administrative/venue-hire', '/activities/administrative/citizen-charter', '/activities/administrative/integrity-action-plan', '/activities/administrative/purchase-plan', '/activities/administrative/performance-report', '/activities/administrative/audit-reports'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>
                                    <a href="#" className={`mobile-accordion__toggle ${['/activities/administrative/rfqs', '/activities/administrative/venue-hire', '/activities/administrative/citizen-charter', '/activities/administrative/integrity-action-plan', '/activities/administrative/purchase-plan', '/activities/administrative/performance-report', '/activities/administrative/audit-reports'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>Administrative <span className="mobile-accordion__arrow">{'›'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/activities/administrative/rfqs" className={isLinkActive('/activities/administrative/rfqs', currentPath) ? 'active' : ''}>RFQs</Link>
                                        <Link to="/activities/administrative/venue-hire" className={isLinkActive('/activities/administrative/venue-hire', currentPath) ? 'active' : ''}>Venue hire</Link>
                                        <Link to="/activities/administrative/citizen-charter" className={isLinkActive('/activities/administrative/citizen-charter', currentPath) ? 'active' : ''}>Citizen Charter</Link>
                                        <Link to="/activities/administrative/integrity-action-plan" className={isLinkActive('/activities/administrative/integrity-action-plan', currentPath) ? 'active' : ''}>Strategic Action Plan for Integrity</Link>
                                        <Link to="/activities/administrative/purchase-plan" className={isLinkActive('/activities/administrative/purchase-plan', currentPath) ? 'active' : ''}>Annual Purchase Plan</Link>
                                        <Link to="/activities/administrative/performance-report" className={isLinkActive('/activities/administrative/performance-report', currentPath) ? 'active' : ''}>Annual Performance Report</Link>
                                        <Link to="/activities/administrative/audit-reports" className={isLinkActive('/activities/administrative/audit-reports', currentPath) ? 'active' : ''}>Audit Reports</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`mobile-submenu ${activeSection === 'support' ? 'active' : ''}`}>
                            <a href="#" className={`mobile-submenu__toggle ${activeSection === 'support' ? 'active' : ''}`}>Support <span className="mobile-submenu__arrow">{'›'}</span></a>
                            <div className="mobile-submenu__content">
                                <Link to="/support/membership/overview" className={isLinkActive('/support/membership/overview', currentPath) ? 'active' : ''}>Donations and Memberships</Link>
                                <div className={`mobile-accordion ${['/donate', '/support/donation/all-donors', '/support/donation/object-donors', '/support/donation/archive-donors'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>
                                    <a href="#" className={`mobile-accordion__toggle ${['/donate', '/support/donation/all-donors', '/support/donation/object-donors', '/support/donation/archive-donors'].some(p => isLinkActive(p, currentPath)) ? 'active' : ''}`}>Donation <span className="mobile-accordion__arrow">{'›'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/donate" className={isLinkActive('/donate', currentPath) ? 'active' : ''}>Make a Donation</Link>
                                        <Link to="/support/donation/all-donors" className={isLinkActive('/support/donation/all-donors', currentPath) ? 'active' : ''}>All Donors</Link>
                                        <Link to="/support/donation/object-donors" className={isLinkActive('/support/donation/object-donors', currentPath) ? 'active' : ''}>Object Donor List</Link>
                                        <Link to="/support/donation/archive-donors" className={isLinkActive('/support/donation/archive-donors', currentPath) ? 'active' : ''}>Archive Donors</Link>
                                    </div>
                                </div>
                                <div className={`mobile-accordion ${isLinkActive('/support/campaigns/fund-collection-campaign', currentPath) ? 'active' : ''}`}>
                                    <a href="#" className={`mobile-accordion__toggle ${isLinkActive('/support/campaigns/fund-collection-campaign', currentPath) ? 'active' : ''}`}>Campaigns <span className="mobile-accordion__arrow">{'›'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/support/campaigns/fund-collection-campaign" className={isLinkActive('/support/campaigns/fund-collection-campaign', currentPath) ? 'active' : ''}>Fund Collection Campaign</Link>
                                    </div>
                                </div>
                                <div className={`mobile-accordion ${isLinkActive('/support/community/friends', currentPath) ? 'active' : ''}`}>
                                    <a href="#" className={`mobile-accordion__toggle ${isLinkActive('/support/community/friends', currentPath) ? 'active' : ''}`}>Community <span className="mobile-accordion__arrow">{'›'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/support/community/friends" className={isLinkActive('/support/community/friends', currentPath) ? 'active' : ''}>Friends of Liberation War Museum Bangladesh</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`mobile-submenu ${activeSection === 'visit' ? 'active' : ''}`}>
                            <a href="#" className={`mobile-submenu__toggle ${activeSection === 'visit' ? 'active' : ''}`}>Visit <span className="mobile-submenu__arrow">{'›'}</span></a>
                            <div className="mobile-submenu__content">
                                <Link to="/visit/ticket-information" className={isLinkActive('/visit/ticket-information', currentPath) ? 'active' : ''}>Ticket Information</Link>
                                <Link to="/visit/plan-your-visit" className={isLinkActive('/visit/plan-your-visit', currentPath) ? 'active' : ''}>Plan Your Visit</Link>
                                <Link to="/visit/maps-directions" className={isLinkActive('/visit/maps-directions', currentPath) ? 'active' : ''}>Maps and Direction</Link>
                            </div>
                        </div>
                    </div>

                    <Link className="btn-donate-mobile" to="/donate">Donate</Link>
                </div>

            </header>
        </>
    );
}
