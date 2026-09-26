import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

export default function MuseumInNutshell() {
    useEffect(() => {
        document.body.classList.add('page-museum-story');
        document.title = "Museum in a Nutshell | Liberation War Museum";
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, []);

    const galleries = [
        {
            num: "GALLERY 01",
            title: "Gallery 1: Heritage and Struggles",
            desc: "Early history of Bengal, cultural identity, the language movement, and democratic uprisings.",
            path: "/explore/gallery-1"
        },
        {
            num: "GALLERY 02",
            title: "Gallery 2: Rights and Sacrifices",
            desc: "The 1971 Genocide, Operation Searchlight, human rights atrocities, and heroic national resistance.",
            path: "/explore/gallery-2"
        },
        {
            num: "GALLERY 03",
            title: "Gallery 3: Battles and Friends",
            desc: "Armed struggle, Mukti Bahini combat operations, sector commanders, and international solidarity.",
            path: "/explore/gallery-3"
        },
        {
            num: "GALLERY 04",
            title: "Gallery 4: Victory and Values",
            desc: "Final victory, unconditional surrender of occupation forces, and fundamental constitutional ideals.",
            path: "/explore/gallery-4"
        }
    ];

    return (
        <>
            {/* HERO */}
            <section className="hero hero--museum-story">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__kicker">Overview</div>
                        <div className="hero-card__title">Museum in a Nutshell</div>
                        <div className="hero-card__desc">
                            A quick overview of the history, collections, visitor statistics, and educational reach of the Liberation War Museum.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <main className="museum-story-content nutshell-page-content">
                <section className="block">
                    {/* The brush divider line: exactly once at the top */}
                    <div className="separator"></div>
                    <Breadcrumb />

                    {/* 1. TIMELINE SECTION */}
                    <div className="nutshell-sec">
                        <div className="nutshell-sec__head">
                            <h2 className="nutshell-sec__title">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                Timeline
                            </h2>
                            <span className="nutshell-sec__badge">Key Milestones</span>
                        </div>

                        <div className="nutshell-timeline-grid">
                            {/* Founded Card */}
                            <div className="nutshell-milestone-card nutshell-milestone-card--founded">
                                <div className="nutshell-milestone__top">
                                    <span className="nutshell-milestone__year">1996</span>
                                    <span className="nutshell-milestone__tag">Foundation</span>
                                </div>
                                <h3 className="nutshell-milestone__title">Founded</h3>
                                <div className="nutshell-milestone__date">March 22, 1996</div>
                                <div className="nutshell-milestone__location">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b181c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <span>Segunbagicha, Dhaka (Colonial Building)</span>
                                </div>
                                <Link to="/initial-efforts" className="nutshell-milestone__link">
                                    <span>Read Initial Efforts &amp; Founding Story</span>
                                    <span className="arrow">→</span>
                                </Link>
                            </div>

                            {/* New Museum Card */}
                            <div className="nutshell-milestone-card nutshell-milestone-card--inaugurated">
                                <div className="nutshell-milestone__top">
                                    <span className="nutshell-milestone__year">2017</span>
                                    <span className="nutshell-milestone__tag">New Landmark</span>
                                </div>
                                <h3 className="nutshell-milestone__title">New Museum Inaugurated</h3>
                                <div className="nutshell-milestone__date">April 16, 2017</div>
                                <div className="nutshell-milestone__location">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a3822" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <span>Plot F11/A-B, Agargaon, Dhaka (Purpose-Built Complex)</span>
                                </div>
                                <Link to="/new-museum" className="nutshell-milestone__link">
                                    <span>Explore New Museum Complex</span>
                                    <span className="arrow">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* 2. COLLECTIONS AND GALLERIES */}
                    <div className="nutshell-sec">
                        <div className="nutshell-sec__head">
                            <h2 className="nutshell-sec__title">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                    <line x1="3" y1="9" x2="21" y2="9" />
                                    <line x1="9" y1="21" x2="9" y2="9" />
                                </svg>
                                Collections and Galleries
                            </h2>
                            <span className="nutshell-sec__badge">Exhibits &amp; Archives</span>
                        </div>

                        {/* Four Key Collection Stat Boxes */}
                        <div className="nutshell-stats-grid">
                            <div className="nutshell-stat-card">
                                <div className="nutshell-stat__num">4</div>
                                <div className="nutshell-stat__label">Permanent Galleries</div>
                                <div className="nutshell-stat__sub">Chronological exhibition of 1971</div>
                            </div>

                            <div className="nutshell-stat-card">
                                <div className="nutshell-stat__num">21,000</div>
                                <div className="nutshell-stat__label">Archival Collection</div>
                                <div className="nutshell-stat__sub">Historical artefacts (as of August 2016)</div>
                            </div>

                            <div className="nutshell-stat-card">
                                <div className="nutshell-stat__num">1,300</div>
                                <div className="nutshell-stat__label">Items on Display</div>
                                <div className="nutshell-stat__sub">Original relics on public exhibit</div>
                            </div>

                            <div className="nutshell-stat-card">
                                <div className="nutshell-stat__num">3,500 <span style={{ fontSize: '1.1rem' }}>sqm</span></div>
                                <div className="nutshell-stat__label">Gallery Space</div>
                                <div className="nutshell-stat__sub">Purpose-built international standard</div>
                            </div>
                        </div>

                        {/* Interactive Gallery Cards Grid (Directly Hyperlinked to Explore Galleries) */}
                        <div className="nutshell-galleries-grid">
                            {galleries.map((gal, idx) => (
                                <Link to={gal.path} key={idx} className="nutshell-gallery-card">
                                    <span className="nutshell-gallery-card__num">{gal.num}</span>
                                    <h3 className="nutshell-gallery-card__title">{gal.title}</h3>
                                    <p className="nutshell-gallery-card__desc">{gal.desc}</p>
                                    <div className="nutshell-gallery-card__action">
                                        <span>Explore Gallery</span>
                                        <span className="arrow">→</span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Gallery & Facility Snapshot Banner */}
                        <div className="nutshell-facility-banner">
                            <div className="nutshell-facility-banner__text">
                                <h4 className="nutshell-facility-banner__title">Gallery &amp; Facility Snapshot</h4>
                                <p className="nutshell-facility-banner__desc">
                                    A modern museum with 3,500 sqm gallery space, international-standard exhibition facilities, archive labs, research centre, auditorium, seminar rooms, and public engagement spaces.
                                </p>
                            </div>
                            <Link to="/new-museum" className="nutshell-facility-banner__btn">
                                <span>Facilities Overview</span>
                                <span>→</span>
                            </Link>
                        </div>
                    </div>

                    {/* 3. VISITORS SECTION */}
                    <div className="nutshell-sec">
                        <div className="nutshell-sec__head">
                            <h2 className="nutshell-sec__title">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                                Visitors
                            </h2>
                            <span className="nutshell-sec__badge">Attendance</span>
                        </div>

                        <div className="nutshell-visitor-box">
                            <div className="nutshell-visitor__left">
                                <div className="nutshell-visitor__kicker">Total Registered Visitors</div>
                                <div className="nutshell-visitor__count">893,213</div>
                                <p className="nutshell-visitor__note">
                                    Recorded till September 18, 2021 — encompassing students, scholars, international researchers, and visitors from across Bangladesh and the world.
                                </p>
                            </div>
                            <div className="nutshell-visitor__right">
                                <Link to="/visit/opening-hours" className="nutshell-btn--gold">
                                    Opening Hours
                                </Link>
                                <Link to="/visit/ticket-information" className="nutshell-btn--outline">
                                    Buy eTickets
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* 4. OUTREACH AND EDUCATION SECTION (Hyperlinked to Programs) */}
                    <div className="nutshell-sec">
                        <div className="nutshell-sec__head">
                            <h2 className="nutshell-sec__title">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                </svg>
                                Outreach and Education
                            </h2>
                            <span className="nutshell-sec__badge">Educational Reach</span>
                        </div>

                        <div className="nutshell-programs-grid">
                            {/* School Outreach Program Card */}
                            <div className="nutshell-program-card nutshell-program-card--outreach">
                                <div className="nutshell-program__header">
                                    <h3 className="nutshell-program__title">School Outreach Program</h3>
                                    <span className="nutshell-program__badge">Regional Schools</span>
                                </div>
                                <div className="nutshell-program__stats">
                                    <div className="nutshell-metric-pill">
                                        <span className="nutshell-metric-pill__num">873</span>
                                        <span className="nutshell-metric-pill__label">Educational Institutions Reached</span>
                                    </div>
                                    <div className="nutshell-metric-pill">
                                        <span className="nutshell-metric-pill__num">1,518</span>
                                        <span className="nutshell-metric-pill__label">Network Teachers Engaged</span>
                                    </div>
                                    <div className="nutshell-metric-pill">
                                        <span className="nutshell-metric-pill__num">293,736</span>
                                        <span className="nutshell-metric-pill__label">Students Visited</span>
                                    </div>
                                </div>
                                <Link to="/activities/programs/outreach-programs" className="nutshell-program__link">
                                    <span>Explore School Outreach Program Details</span>
                                    <span className="arrow">→</span>
                                </Link>
                            </div>

                            {/* Mobile Reach-Out Program Card */}
                            <div className="nutshell-program-card nutshell-program-card--reachout">
                                <div className="nutshell-program__header">
                                    <h3 className="nutshell-program__title">Mobile Reach-Out Program</h3>
                                    <span className="nutshell-program__badge">Via 2 Mobile Buses</span>
                                </div>
                                <div className="nutshell-program__stats">
                                    <div className="nutshell-metric-pill">
                                        <span className="nutshell-metric-pill__num">640,383</span>
                                        <span className="nutshell-metric-pill__label">Students Reached</span>
                                    </div>
                                    <div className="nutshell-metric-pill">
                                        <span className="nutshell-metric-pill__num">64</span>
                                        <span className="nutshell-metric-pill__label">Districts Covered (All 64)</span>
                                    </div>
                                    <div className="nutshell-metric-pill">
                                        <span className="nutshell-metric-pill__num">400</span>
                                        <span className="nutshell-metric-pill__label">Upazilas Covered</span>
                                    </div>
                                    <div className="nutshell-metric-pill">
                                        <span className="nutshell-metric-pill__num">1,200</span>
                                        <span className="nutshell-metric-pill__label">Schools Covered</span>
                                    </div>
                                </div>
                                <Link to="/activities/programs/reachout-programs" className="nutshell-program__link">
                                    <span>Explore Mobile Reach-Out Program Details</span>
                                    <span className="arrow">→</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* 5. IMPACT SECTION */}
                    <div className="nutshell-sec" style={{ marginBottom: 0 }}>
                        <div className="nutshell-sec__head">
                            <h2 className="nutshell-sec__title">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                    <path d="M2 12h20" />
                                </svg>
                                Impact
                            </h2>
                            <span className="nutshell-sec__badge">Legacy &amp; Conscience</span>
                        </div>

                        <div className="nutshell-impact-box">
                            <p className="nutshell-impact__text">
                                The Liberation War Museum stands as a nationally and internationally recognized institution, connecting history with contemporary values through education, research, and public engagement.
                            </p>
                            <div className="nutshell-impact__nav">
                                <Link to="/prologue" className="nutshell-impact__nav-item">
                                    <span>Museum Prologue</span>
                                    <span>→</span>
                                </Link>
                                <Link to="/mission-statement" className="nutshell-impact__nav-item">
                                    <span>Mission Statement</span>
                                    <span>→</span>
                                </Link>
                                <Link to="/board-of-trustees" className="nutshell-impact__nav-item">
                                    <span>Board of Trustees</span>
                                    <span>→</span>
                                </Link>
                                <Link to="/donate" className="nutshell-impact__nav-item">
                                    <span>Support &amp; Donate</span>
                                    <span>→</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
        </>
    );
}
