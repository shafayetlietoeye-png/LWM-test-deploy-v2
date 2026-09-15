import { Link } from 'react-router-dom';

export default function MainHeader() {
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
                            <a className="uitem" href="#"><img src="/assets/icon/search-plus-svgrepo-com 1.png" className="uico" alt="search" />
                                Search</a>
                            <Link className="btn-donate" to="/donate">Donate</Link>
                        </div>

                        <nav className="nav">
                            <div className="nav-item">
                                <a href="#">About</a>
                                <ul className="submenu submenu--explore">
                                    <li><Link to="/prologue">Prologue</Link></li>
                                    <li><Link to="/mission-statement">Mission Statement</Link></li>
                                    <li className="has-nested">
                                        <span className="submenu-nested-toggle">Museum Story <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/initial-efforts">Initial Efforts</Link></li>
                                            <li><Link to="/new-museum">New Museum</Link></li>
                                            <li><Link to="/museum-in-a-nutshell">Museum in a Nutshell</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/accreditations-and-affiliations">Accreditations and Affiliations</Link></li>
                                    <li><Link to="/board-of-trustees">Board of Trustees</Link></li>
                                    <li><a href="#">Executive Committee and Advisors</a></li>
                                </ul>
                            </div>
                            <div className="nav-item">
                                <a href="#">Explore</a>
                                <ul className="submenu submenu--explore">
                                    <li className="has-nested">
                                        <span className="submenu-nested-toggle">Museum Galleries <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/explore/gallery-1">Gallery 1: Heritage and Struggles</Link></li>
                                            <li><Link to="/explore/gallery-2">Gallery 2: Rights and Sacrifices</Link></li>
                                            <li><Link to="/explore/gallery-3">Gallery 3: Battles and Friends</Link></li>
                                            <li><Link to="/explore/gallery-4">Gallery 4: Victory and Values</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-nested">
                                        <span className="submenu-nested-toggle">Bangladesh &amp; Liberation War <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/explore/bengalis-and-bengal">Bengalis and Bengal</Link></li>
                                            <li><Link to="/explore/history-of-bangladesh">History of Bangladesh</Link></li>
                                            <li><Link to="/explore/emergence-of-bangladesh">Emergence of Bangladesh</Link></li>
                                            <li><Link to="/explore/proclamation-of-independence">Proclamation of Independence</Link></li>
                                            <li><Link to="/explore/liberation-forces-and-commanders">Liberation Armed Forces and Sector Commanders</Link></li>
                                            <li><Link to="/explore/liberation-war-forces">Liberation War Forces</Link></li>
                                            <li><Link to="/explore/evolution-of-principles-1972">Evolution of Fundamental Principles of 1972</Link></li>
                                            <li><Link to="/explore/concert-for-bangladesh">Concert for Bangladesh and other Cultural Activities</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-nested">
                                        <span className="submenu-nested-toggle">Museum Experience <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/virtual-tour">Virtual Tour</Link></li>
                                            <li><Link to="/explore/museum-map">Museum Map</Link></li>
                                            <li className="has-nested">
                                                <span className="submenu-nested-toggle">Facilities and Amenities <span className="arrow-right">›</span></span>
                                                <ul className="submenu-nested">
                                                    <li><a href="https://library.liberationwarmuseumbd.org/" target="_blank" rel="noopener noreferrer">Library</a></li>
                                                    <li><Link to="/explore/kiosk">Kiosk</Link></li>
                                                    <li><Link to="/explore/exhibition-gallery">Exhibition Gallery</Link></li>
                                                    <li><Link to="/explore/cafes">Cafes</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-nested">
                                        <span className="submenu-nested-toggle">Archives &amp; Resources <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/explore/documents">Documents</Link></li>
                                            <li><Link to="/on-this-day">On This Day in 1971</Link></li>
                                            <li><Link to="/explore/oral-history">Oral History</Link></li>
                                            <li><Link to="/annual-speeches">Annual Speeches</Link></li>
                                            <li><Link to="/explore/audio-visual-archive">Audio Visual Archive</Link></li>
                                            <li><Link to="/explore/historical-sites">Historical Sites</Link></li>
                                            <li><Link to="/explore/photo-archive">Photo Archive</Link></li>
                                            <li><Link to="/explore/struggle-of-bangladesh-pictorial">Struggle of Bangladesh: Pictorial</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="nav-item">
                                <a href="#">Activities</a>
                                <ul className="submenu submenu--explore">
                                    <li className="has-nested">
                                        <span className="submenu-nested-toggle">Events <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/activities/events/upcoming">Upcoming</Link></li>
                                            <li><Link to="/activities/events/past">Past</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-nested">
                                        <span className="submenu-nested-toggle">Programs &amp; Conferences <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/activities/programs/regular-public-programs">Regular Public Programs</Link></li>
                                            <li><Link to="/activities/programs/school-programs">School Programs</Link></li>
                                            <li><Link to="/activities/programs/reachout-programs">Reachout Programs</Link></li>
                                            <li><Link to="/activities/programs/outreach-programs">Outreach Programs</Link></li>
                                            <li><Link to="/activities/programs/liberation-docfest">Liberation Docfest Bangladesh</Link></li>
                                            <li><Link to="/activities/programs/international-conferences">International Conferences</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-nested">
                                        <span className="submenu-nested-toggle">Awards <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/activities/awards/memorial-award">Memorial Award (বজলুর রহমান স্মৃতিপদক)</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-nested">
                                        <span className="submenu-nested-toggle">Exhibitions <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/activities/exhibitions/digital-thread">Digital Thread Exhibit</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-nested">
                                        <span className="submenu-nested-toggle">Publications <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/activities/publications/sultanas-dream">Sultana's Dream</Link></li>
                                            <li><Link to="/activities/publications/other-publications">Other Notable Publications</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-nested">
                                        <span className="submenu-nested-toggle">Media <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/activities/media/newsletters">Newsletters</Link></li>
                                            <li><Link to="/activities/media/press-releases">Press Releases</Link></li>
                                            <li><Link to="/activities/media/advertisements">Audio Visual Archive</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-nested">
                                        <span className="submenu-nested-toggle">The Center for the Study of Genocide and Justice (CSGJ) <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/activities/csgj/about">About CSGJ</Link></li>
                                            <li><Link to="/activities/csgj/seminars">Seminar and Webinar</Link></li>
                                            <li><Link to="/activities/csgj/research">Research and Publications</Link></li>
                                            <li><Link to="/activities/csgj/certificate-course">Certificate Course</Link></li>
                                            <li><Link to="/activities/csgj/exchange-program">Voluntary Exchange Program</Link></li>
                                            <li><Link to="/activities/csgj/volunteer">Volunteer at CSGJ</Link></li>
                                            <li><Link to="/activities/csgj/winter-school">Winter School</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-nested">
                                        <span className="submenu-nested-toggle">Administrative <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/activities/administrative/rfqs">RFQs</Link></li>
                                            <li><Link to="/activities/administrative/venue-hire">Venue hire</Link></li>
                                            <li><Link to="/activities/administrative/citizen-charter">Citizen Charter</Link></li>
                                            <li><Link to="/activities/administrative/integrity-action-plan">Strategic Action Plan for Integrity</Link></li>
                                            <li><Link to="/activities/administrative/purchase-plan">Annual Purchase Plan</Link></li>
                                            <li><Link to="/activities/administrative/performance-report">Annual Performance Report</Link></li>
                                            <li><Link to="/activities/administrative/audit-reports">Audit Reports</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="nav-item">
                                <a href="#">Support</a>
                                <ul className="submenu submenu--explore">
                                    <li><Link to="/support/membership/overview">Donations and Memberships</Link></li>
                                    <li className="has-nested">
                                        <span className="submenu-nested-toggle">Donation <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/donate">Make a Donation</Link></li>
                                            <li><Link to="/support/donation/all-donors">All Donors</Link></li>
                                            <li><Link to="/support/donation/object-donors">Object Donor List</Link></li>
                                            <li><Link to="/support/donation/archive-donors">Archive Donors</Link></li>
                                        </ul>
                                    </li>
                                    <li className="has-nested">
                                        <span className="submenu-nested-toggle">Campaigns <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li className="has-nested">
                                                <span className="submenu-nested-toggle">Fund Collection Campaign <span className="arrow-right">›</span></span>
                                                <ul className="submenu-nested">
                                                    <li><Link to="/support/campaigns/leaflet">Leaflet</Link></li>
                                                    <li><Link to="/support/campaigns/tvc">TVC</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="has-nested">
                                        <span className="submenu-nested-toggle">Community <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/support/community/friends">Friends of Liberation War Museum Bangladesh</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="nav-item">
                                <a href="#">Visit</a>
                                <ul className="submenu submenu--explore">
                                    <li className="has-nested">
                                        <span className="submenu-nested-toggle">Tickets <span className="arrow-right">›</span></span>
                                        <ul className="submenu-nested">
                                            <li><Link to="/visit/tickets/buy">Buy Tickets</Link></li>
                                            <li><Link to="/visit/tickets/information">Ticket Information</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/visit/opening-hours">Opening Hours</Link></li>
                                    <li><Link to="/visit/visitor-guidelines">Visitor Guidelines</Link></li>
                                    <li><Link to="/visit/maps-directions">Maps and Directions</Link></li>
                                    <li><Link to="/visit/photography-filming">Photography and Filming</Link></li>
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
                        <Link to="/">Home</Link>
                        <div className="mobile-submenu">
                            <a href="#" className="mobile-submenu__toggle">About <span className="mobile-submenu__arrow">{'\u203A'}</span></a>
                            <div className="mobile-submenu__content">
                                <Link to="/prologue">Prologue</Link>
                                <Link to="/mission-statement">Mission Statement</Link>
                                <div className="mobile-accordion">
                                    <span className="mobile-accordion__toggle">Museum Story <span className="mobile-accordion__arrow">{'\u203A'}</span></span>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/initial-efforts">Initial Efforts</Link>
                                        <Link to="/new-museum">New Museum</Link>
                                        <Link to="/museum-in-a-nutshell">Museum in a Nutshell</Link>
                                    </div>
                                </div>
                                <Link to="/accreditations-and-affiliations">Accreditations and Affiliations</Link>
                                <Link to="/board-of-trustees">Board of Trustees</Link>
                                <a href="#">Executive Committee and Advisors</a>
                            </div>
                        </div>
                        <div className="mobile-submenu">
                            <a href="#" className="mobile-submenu__toggle">Explore <span className="mobile-submenu__arrow">{'\u203A'}</span></a>
                            <div className="mobile-submenu__content">
                                <div className="mobile-accordion">
                                    <span className="mobile-accordion__toggle">Museum Galleries <span className="mobile-accordion__arrow">{'\u203A'}</span></span>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/explore/gallery-1">Gallery 1: Heritage and Struggles</Link>
                                        <Link to="/explore/gallery-2">Gallery 2: Rights and Sacrifices</Link>
                                        <Link to="/explore/gallery-3">Gallery 3: Battles and Friends</Link>
                                        <Link to="/explore/gallery-4">Gallery 4: Victory and Values</Link>
                                    </div>
                                </div>
                                <div className="mobile-accordion">
                                    <span className="mobile-accordion__toggle">Bangladesh &amp; Liberation War <span className="mobile-accordion__arrow">{'\u203A'}</span></span>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/explore/bengalis-and-bengal">Bengalis and Bengal</Link>
                                        <Link to="/explore/history-of-bangladesh">History of Bangladesh</Link>
                                        <Link to="/explore/emergence-of-bangladesh">Emergence of Bangladesh</Link>
                                        <Link to="/explore/proclamation-of-independence">Proclamation of Independence</Link>
                                        <Link to="/explore/liberation-forces-and-commanders">Liberation Armed Forces and Sector Commanders</Link>
                                        <Link to="/explore/liberation-war-forces">Liberation War Forces</Link>
                                        <Link to="/explore/evolution-of-principles-1972">Evolution of Fundamental Principles of 1972</Link>
                                        <Link to="/explore/concert-for-bangladesh">Concert for Bangladesh and other Cultural Activities</Link>
                                    </div>
                                </div>
                                <div className="mobile-accordion">
                                    <span className="mobile-accordion__toggle">Museum Experience <span className="mobile-accordion__arrow">{'\u203A'}</span></span>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/virtual-tour">Virtual Tour</Link>
                                        <Link to="/explore/museum-map">Museum Map</Link>
                                        <a href="https://library.liberationwarmuseumbd.org/" target="_blank" rel="noopener noreferrer">Library</a>
                                        <Link to="/explore/kiosk">Kiosk</Link>
                                        <Link to="/explore/exhibition-gallery">Exhibition Gallery</Link>
                                        <Link to="/explore/cafes">Cafes</Link>
                                    </div>
                                </div>
                                <div className="mobile-accordion">
                                    <span className="mobile-accordion__toggle">Archives &amp; Resources <span className="mobile-accordion__arrow">{'\u203A'}</span></span>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/explore/documents">Documents</Link>
                                        <Link to="/on-this-day">On This Day in 1971</Link>
                                        <Link to="/explore/oral-history">Oral History</Link>
                                        <Link to="/annual-speeches">Annual Speeches</Link>
                                        <Link to="/explore/audio-visual-archive">Audio Visual Archive</Link>
                                        <Link to="/explore/historical-sites">Historical Sites</Link>
                                        <Link to="/explore/photo-archive">Photo Archive</Link>
                                        <Link to="/explore/struggle-of-bangladesh-pictorial">Struggle of Bangladesh: Pictorial</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-submenu">
                            <a href="#" className="mobile-submenu__toggle">Activities <span className="mobile-submenu__arrow">{'›'}</span></a>
                            <div className="mobile-submenu__content">
                                <div className="mobile-accordion">
                                    <a href="#" className="mobile-accordion__toggle">Events <span className="mobile-accordion__arrow">{'›'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/activities/events/upcoming">Upcoming</Link>
                                        <Link to="/activities/events/past">Past</Link>
                                    </div>
                                </div>
                                <div className="mobile-accordion">
                                    <a href="#" className="mobile-accordion__toggle">Programs &amp; Conferences <span className="mobile-accordion__arrow">{'›'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/activities/programs/regular-public-programs">Regular Public Programs</Link>
                                        <Link to="/activities/programs/school-programs">School Programs</Link>
                                        <Link to="/activities/programs/reachout-programs">Reachout Programs</Link>
                                        <Link to="/activities/programs/outreach-programs">Outreach Programs</Link>
                                        <Link to="/activities/programs/liberation-docfest">Liberation Docfest Bangladesh</Link>
                                        <Link to="/activities/programs/international-conferences">International Conferences</Link>
                                    </div>
                                </div>
                                <div className="mobile-accordion">
                                    <a href="#" className="mobile-accordion__toggle">Awards <span className="mobile-accordion__arrow">{'›'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/activities/awards/memorial-award">Memorial Award (বজলুর রহমান স্মৃতিপদক)</Link>
                                    </div>
                                </div>
                                <div className="mobile-accordion">
                                    <a href="#" className="mobile-accordion__toggle">Exhibitions <span className="mobile-accordion__arrow">{'›'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/activities/exhibitions/digital-thread">Digital Thread Exhibit</Link>
                                    </div>
                                </div>
                                <div className="mobile-accordion">
                                    <a href="#" className="mobile-accordion__toggle">Publications <span className="mobile-accordion__arrow">{'›'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/activities/publications/sultanas-dream">Sultana's Dream</Link>
                                        <Link to="/activities/publications/other-publications">Other Notable Publications</Link>
                                    </div>
                                </div>
                                <div className="mobile-accordion">
                                    <a href="#" className="mobile-accordion__toggle">Media <span className="mobile-accordion__arrow">{'›'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/activities/media/newsletters">Newsletters</Link>
                                        <Link to="/activities/media/press-releases">Press Releases</Link>
                                        <Link to="/activities/media/advertisements">Audio Visual Archive</Link>
                                    </div>
                                </div>
                                <div className="mobile-accordion">
                                    <a href="#" className="mobile-accordion__toggle">The Center for the Study of Genocide and Justice (CSGJ) <span className="mobile-accordion__arrow">{'›'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/activities/csgj/about">About CSGJ</Link>
                                        <Link to="/activities/csgj/seminars">Seminar and Webinar</Link>
                                        <Link to="/activities/csgj/research">Research and Publications</Link>
                                        <Link to="/activities/csgj/certificate-course">Certificate Course</Link>
                                        <Link to="/activities/csgj/exchange-program">Voluntary Exchange Program</Link>
                                        <Link to="/activities/csgj/volunteer">Volunteer at CSGJ</Link>
                                        <Link to="/activities/csgj/winter-school">Winter School</Link>
                                    </div>
                                </div>
                                <div className="mobile-accordion">
                                    <a href="#" className="mobile-accordion__toggle">Administrative <span className="mobile-accordion__arrow">{'›'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/activities/administrative/rfqs">RFQs</Link>
                                        <Link to="/activities/administrative/venue-hire">Venue hire</Link>
                                        <Link to="/activities/administrative/citizen-charter">Citizen Charter</Link>
                                        <Link to="/activities/administrative/integrity-action-plan">Strategic Action Plan for Integrity</Link>
                                        <Link to="/activities/administrative/purchase-plan">Annual Purchase Plan</Link>
                                        <Link to="/activities/administrative/performance-report">Annual Performance Report</Link>
                                        <Link to="/activities/administrative/audit-reports">Audit Reports</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-submenu">
                            <a href="#" className="mobile-submenu__toggle">Support <span className="mobile-submenu__arrow">{'›'}</span></a>
                            <div className="mobile-submenu__content">
                                <Link to="/support/membership/overview">Donations and Memberships</Link>
                                <div className="mobile-accordion">
                                    <a href="#" className="mobile-accordion__toggle">Donation <span className="mobile-accordion__arrow">{'›'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/donate">Make a Donation</Link>
                                        <Link to="/support/donation/all-donors">All Donors</Link>
                                        <Link to="/support/donation/object-donors">Object Donor List</Link>
                                        <Link to="/support/donation/archive-donors">Archive Donors</Link>
                                    </div>
                                </div>
                                <div className="mobile-accordion">
                                    <a href="#" className="mobile-accordion__toggle">Campaigns <span className="mobile-accordion__arrow">{'›'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <div className="mobile-accordion">
                                            <a href="#" className="mobile-accordion__toggle">Fund Collection Campaign <span className="mobile-accordion__arrow">{'›'}</span></a>
                                            <div className="mobile-accordion__panel">
                                                <Link to="/support/campaigns/leaflet">Leaflet</Link>
                                                <Link to="/support/campaigns/tvc">TVC</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mobile-accordion">
                                    <a href="#" className="mobile-accordion__toggle">Community <span className="mobile-accordion__arrow">{'›'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/support/community/friends">Friends of Liberation War Museum Bangladesh</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mobile-submenu">
                            <a href="#" className="mobile-submenu__toggle">Visit <span className="mobile-submenu__arrow">{'›'}</span></a>
                            <div className="mobile-submenu__content">
                                <div className="mobile-accordion">
                                    <a href="#" className="mobile-accordion__toggle">Tickets <span className="mobile-accordion__arrow">{'›'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/visit/tickets/buy">Buy Tickets</Link>
                                        <Link to="/visit/tickets/information">Ticket Information</Link>
                                    </div>
                                </div>
                                <Link to="/visit/opening-hours">Opening Hours</Link>
                                <Link to="/visit/visitor-guidelines">Visitor Guidelines</Link>
                                <Link to="/visit/maps-directions">Maps and Directions</Link>
                                <Link to="/visit/photography-filming">Photography and Filming</Link>
                            </div>
                        </div>
                    </div>

                    <Link className="btn-donate-mobile" to="/donate">Donate</Link>
                </div>

            </header>
        </>
    );
}
