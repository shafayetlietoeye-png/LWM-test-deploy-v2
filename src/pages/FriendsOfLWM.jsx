import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

const contributors = [
    { name: 'Asaduzzaman Noor', role: 'Chairperson of Board', initials: 'AN', isLeader: true },
    { name: 'Sara Zaker', role: 'CEO', initials: 'SZ', isLeader: true },
    { name: 'Dr. Sarwar Ali', role: 'Vice President', initials: 'SA' },
    { name: 'Abul H Masud', role: 'CFO', initials: 'AM' },
    { name: 'Maria Del Pilar Choy de Masud', role: 'Secretary', initials: 'MC' },
    { name: 'Kabir Masud', role: 'Assistant CFO', initials: 'KM' },
    { name: 'Mofidul Hoque', role: 'Assistant Treasurer', initials: 'MH' },
];

const pillars = [
    {
        title: 'Support the Story',
        desc: "For the moral value, we have been supporting the esteemed resource on Bangladesh's Liberation War history and culture.",
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                <line x1="9" y1="7" x2="15" y2="7"></line>
                <line x1="9" y1="11" x2="15" y2="11"></line>
            </svg>
        )
    },
    {
        title: 'Engaging Youth',
        desc: 'Through our school programs, social and cultural activities, we apprise the youth about the Liberation War of Bangladesh.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
        )
    },
    {
        title: 'Advocating Heritage Conservation',
        desc: 'We support the preservation of the cultural and historical heritage by raising funds for LWM, Bangladesh.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2L2 7h20L12 2z"></path>
            </svg>
        )
    }
];

export default function FriendsOfLWM() {
    const [lightboxImage, setLightboxImage] = useState(null);

    useEffect(() => {
        document.body.classList.add('page-museum-story');
        document.title = "Friends of Liberation War Museum | Liberation War Museum";
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, []);

    // Handle ESC key for modal
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setLightboxImage(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <>
            {/* HERO SECTION */}
            <section
                className="hero hero--museum-story"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.65)), url('/assets/flwmb/s1.jpg')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}
            >
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__badge" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: '#E5C378',
                            fontSize: '0.76rem',
                            fontWeight: '700',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            marginBottom: '8px'
                        }}>
                            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#E5C378' }}></span>
                            Global Diaspora &bull; Civic Alliance
                        </div>
                        <div className="hero-card__title">Friends of Liberation War Museum</div>
                        <div className="hero-card__desc">
                            Preserving the history, culture, and immortal memory of the 1971 Martyrs across borders.
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT SECTION */}
            <main className="museum-story-content">
                <section className="block">
                    <div className="separator"></div>
                    <Breadcrumb />

                    {/* SECTION 1: INSTITUTIONAL OVERVIEW & ALLIANCE */}
                    <div className="flwm-section-block">
                        <div className="block__cap">
                            <span className="cap__title">Institutional Overview</span>
                        </div>

                        <div className="block__content">
                            <div className="flwm-overview-grid">
                                {/* Left Column: Archival Photograph & Chapter Dossier */}
                                <div className="flwm-overview-media">
                                    <div 
                                        className="flwm-photo-frame"
                                        onClick={() => setLightboxImage({
                                            src: '/assets/flwmb/s2.jpg',
                                            title: 'Mukti Bahini Training Camp, 1971',
                                            caption: 'Historical photograph of freedom fighters in training formation during the 1971 Liberation War. Preserved in the FLWMB archival collection.'
                                        })}
                                        title="Click to view full resolution archival photograph"
                                    >
                                        <div className="flwm-photo-mat">
                                            <img
                                                src="/assets/flwmb/s2.jpg"
                                                alt="Mukti Bahini Training Camp, 1971"
                                                className="flwm-photo-img"
                                            />
                                            <div className="flwm-photo-overlay">
                                                <span className="flwm-photo-zoom-btn">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <circle cx="11" cy="11" r="8" />
                                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                                        <line x1="11" y1="8" x2="11" y2="14" />
                                                        <line x1="8" y1="11" x2="14" y2="11" />
                                                    </svg>
                                                    <span>Inspect Photograph</span>
                                                </span>
                                            </div>
                                        </div>

                                        {/* Archival Plaque */}
                                        <div className="flwm-photo-plaque">
                                            <span className="flwm-plaque-title">HISTORIC ARCHIVAL PHOTOGRAPH</span>
                                            <span className="flwm-plaque-desc">
                                                Mukti Bahini Training Camp, 1971 &bull; FLWMB Archival Repository
                                            </span>
                                        </div>
                                    </div>

                                    {/* Chapter Dossier & Quick Facts (Fills & Balances the Left Column) */}
                                    <div className="flwm-dossier-card">
                                        <div className="flwm-dossier-header">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                <circle cx="12" cy="12" r="10" />
                                                <line x1="2" y1="12" x2="22" y2="12" />
                                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                            </svg>
                                            <span>Official Chapter Dossier</span>
                                        </div>
                                        <div className="flwm-dossier-list">
                                            <div className="flwm-dossier-row">
                                                <span className="flwm-dossier-key">Chapter:</span>
                                                <span className="flwm-dossier-val">North America (FLWMB)</span>
                                            </div>
                                            <div className="flwm-dossier-row">
                                                <span className="flwm-dossier-key">Secretariat:</span>
                                                <span className="flwm-dossier-val">Ontario, California, USA</span>
                                            </div>
                                            <div className="flwm-dossier-row">
                                                <span className="flwm-dossier-key">Affiliation:</span>
                                                <span className="flwm-dossier-val">Liberation War Museum (Dhaka)</span>
                                            </div>
                                            <div className="flwm-dossier-row">
                                                <span className="flwm-dossier-key">Core Purpose:</span>
                                                <span className="flwm-dossier-val">1971 Martyrs' Memory &amp; Heritage</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: Editorial Overview & Quote */}
                                <div className="flwm-overview-text">
                                    <div className="flwm-kicker">
                                        <span className="flwm-kicker-dot"></span>
                                        <span>CIVIC ALLIANCE &bull; GLOBAL DIASPORA</span>
                                    </div>

                                    <h3 className="flwm-heading">
                                        Preserving the Martyrs' Legacy Across Borders
                                    </h3>

                                    <p className="flwm-lead-p">
                                        <strong>Friends of Liberation War Museum; Bangladesh (FLWMB)</strong> is a supportive civic organization located at <strong>120, S San Antonio Ave, Suite A, Ontario, CA 91762, United States of America</strong>, committed to protecting the country's <strong>history, culture, and heritage of Martyrs of the Liberation War.</strong>
                                    </p>

                                    <p className="p">
                                        We value the sacrifices of the brave children who contributed to liberate "Bangladesh". FLWMB works in close collaboration with the Liberation War Museum, Dhaka, to ensure the memory and legacy of 1971 endures for future generations across the world.
                                    </p>

                                    {/* Upgraded High-Contrast Archival Quote Card */}
                                    <div className="flwm-quote-card">
                                        <div className="flwm-quote-deco" aria-hidden="true">&ldquo;</div>
                                        <p className="flwm-quote-text">
                                            Working in solidarity with the Liberation War Museum in Dhaka, we unite expatriates, scholars, and youth worldwide to keep the spirit of 1971 burning bright.
                                        </p>
                                        <div className="flwm-quote-footer">
                                            <span className="flwm-quote-line"></span>
                                            <span className="flwm-quote-author">Founding Vision &bull; Friends of Liberation War Museum (FLWMB)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 2: CORE MISSION & INITIATIVES (WHAT WE DO) */}
                    <div className="flwm-section-block">
                        <div className="block__cap">
                            <span className="cap__title">What We Do</span>
                        </div>

                        <div className="block__content">
                            <p className="p" style={{ marginBottom: '24px' }}>
                                Our initiatives bridge international diaspora communities with the grassroots educational programs and archival conservation efforts of the Liberation War Museum:
                            </p>

                            {/* 3 Pillar Cards */}
                            <div className="facilities-grid flwm-pillars-grid">
                                {pillars.map((item, idx) => (
                                    <div key={idx} className="facility-card flwm-pillar-card">
                                        <div className="flwm-pillar-icon-box">
                                            {item.icon}
                                        </div>
                                        <div className="facility-label flwm-pillar-title">
                                            {item.title}
                                        </div>
                                        <div className="facility-value">
                                            <p className="facility-desc">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Featured Lifelong Fund Showcase Card */}
                            <div className="flwm-fund-showcase">
                                <div className="flwm-fund-media">
                                    <div 
                                        className="flwm-brochure-card"
                                        onClick={() => setLightboxImage({
                                            src: '/assets/flwmb/s3.jpg',
                                            title: 'FLWMB Lifelong Fund Brochure',
                                            caption: 'Official publication and contribution prospectus of the Friends of Liberation War Museum Bangladesh Lifelong Fund.'
                                        })}
                                        title="Click to inspect brochure scan"
                                    >
                                        <img
                                            src="/assets/flwmb/s3.jpg"
                                            alt="FLWMB Lifelong Fund Brochure"
                                            className="flwm-brochure-cover"
                                        />
                                        <div className="flwm-brochure-badge">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <circle cx="11" cy="11" r="8" />
                                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                            </svg>
                                            <span>Inspect Scan</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flwm-fund-info">
                                    <div className="flwm-fund-badge">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                        </svg>
                                        <span>Special Endowment Initiative</span>
                                    </div>

                                    <h4 className="flwm-fund-title">FLWMB Lifelong Fund</h4>

                                    <p className="flwm-fund-desc">
                                        International community members and trustees uniting to raise vital endowment funding and support artifact conservation in Dhaka.
                                    </p>

                                    <ul className="flwm-fund-points">
                                        <li>
                                            <span className="flwm-point-check">&#10003;</span>
                                            <span><strong>Artifact &amp; Document Preservation:</strong> Direct financial support for chemical conservation of rare 1971 items.</span>
                                        </li>
                                        <li>
                                            <span className="flwm-point-check">&#10003;</span>
                                            <span><strong>Global Educational Outreach:</strong> Organizing diaspora youth seminars, school programs, and exhibitions.</span>
                                        </li>
                                        <li>
                                            <span className="flwm-point-check">&#10003;</span>
                                            <span><strong>Endowment Perpetuity:</strong> Building a permanent safety net for the Liberation War Museum's ongoing research.</span>
                                        </li>
                                    </ul>

                                    <div className="flwm-fund-actions">
                                        <button 
                                            type="button" 
                                            className="flwm-btn-inspect"
                                            onClick={() => setLightboxImage({
                                                src: '/assets/flwmb/s3.jpg',
                                                title: 'FLWMB Lifelong Fund Brochure',
                                                caption: 'Official publication and contribution prospectus of the Friends of Liberation War Museum Bangladesh Lifelong Fund.'
                                            })}
                                        >
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>
                                            <span>View Brochure Document</span>
                                        </button>

                                        <Link to="/donate" className="flwm-btn-fund-donate">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                            </svg>
                                            <span>Contribute to Fund</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 3: FLWMB CONTRIBUTORS & LEADERSHIP */}
                    <div className="flwm-section-block">
                        <div className="block__cap">
                            <span className="cap__title">FLWMB Contributors</span>
                        </div>

                        <div className="block__content">
                            <p className="p" style={{ marginBottom: '24px' }}>
                                FLWMB is led by a dedicated team of cultural and community advocates committed to preserving the legacy of 1971:
                            </p>

                            <div className="facilities-grid flwm-contributors-grid">
                                {contributors.map((person, idx) => (
                                    <div 
                                        key={idx} 
                                        className={`facility-card flwm-contributor-card ${person.isLeader ? 'flwm-contributor-card--leader' : ''}`}
                                    >
                                        <div className="flwm-contributor-header">
                                            <div className="flwm-contributor-seal">
                                                {person.initials}
                                            </div>
                                            <div className="flwm-contributor-details">
                                                <div className="flwm-contributor-name">
                                                    {person.name}
                                                </div>
                                                <span className={`flwm-contributor-badge ${person.isLeader ? 'flwm-contributor-badge--leader' : ''}`}>
                                                    {person.role}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* SECTION 4: SECRETARIAT & CONTACT */}
                    <div className="flwm-section-block">
                        <div className="block__cap">
                            <span className="cap__title">Secretariat and Community Contact</span>
                        </div>

                    <div className="block__content">
                        <p className="p" style={{ marginBottom: '24px' }}>
                            To support the museum and become a part of the FLWMB community, reach out to us at{' '}
                            <a href="mailto:FLWMBangladesh@gmail.com" style={{ color: '#8C1C19', fontWeight: '700' }}>
                                FLWMBangladesh@gmail.com
                            </a>.
                            Your contributions go directly to preserving the history and heritage of Bangladesh's Liberation War.
                        </p>

                        {/* 3 Contact Info Cards */}
                        <div className="facilities-grid flwm-contact-grid">
                            <div className="facility-card flwm-contact-card">
                                <div className="facility-label">
                                    <div className="flwm-contact-icon-wrap">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M3 21h18" />
                                            <path d="M5 21V7l8-4v18" />
                                            <path d="M19 21V11l-6-4" />
                                        </svg>
                                    </div>
                                    <span>Organization</span>
                                </div>
                                <div className="facility-value">
                                    <p className="facility-desc">
                                        <strong>FLWMB</strong><br />
                                        Friends of Liberation War Museum, Bangladesh
                                    </p>
                                    <span className="flwm-contact-subtext">Registered Civic Alliance</span>
                                </div>
                            </div>

                            <div className="facility-card flwm-contact-card">
                                <div className="facility-label">
                                    <div className="flwm-contact-icon-wrap">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <span>Location (Secretariat)</span>
                                </div>
                                <div className="facility-value">
                                    <p className="facility-desc">
                                        120, S San Antonio Ave, Suite A<br />
                                        Ontario, CA 91762 — United States
                                    </p>
                                    <span className="flwm-contact-subtext">North America Chapter</span>
                                </div>
                            </div>

                            <div className="facility-card flwm-contact-card">
                                <div className="facility-label">
                                    <div className="flwm-contact-icon-wrap">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <span>Official Email</span>
                                </div>
                                <div className="facility-value">
                                    <p className="facility-desc">
                                        <a href="mailto:FLWMBangladesh@gmail.com" className="flwm-contact-email-link">
                                            FLWMBangladesh@gmail.com
                                        </a><br />
                                        Direct inquiries &amp; community coordination
                                    </p>
                                    <span className="flwm-contact-subtext">Responsive within 48 Hours</span>
                                </div>
                            </div>
                        </div>

                        {/* Heroic Museum Alliance CTA Box */}
                        <div className="flwm-cta-banner">
                            <div className="flwm-cta-inner">
                                <div className="flwm-cta-content">
                                    <h4 className="flwm-cta-title">
                                        Join Hands to Preserve the Legacy of 1971
                                    </h4>
                                    <p className="flwm-cta-desc">
                                        Your contributions and active involvement directly empower the preservation of our nation's history, authentic records, and educational exhibitions for generations to come.
                                    </p>
                                </div>
                                <div className="flwm-cta-actions">
                                    <Link to="/donate" className="flwm-cta-btn flwm-cta-btn--donate">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                        </svg>
                                        <span>Donate to Museum</span>
                                    </Link>
                                    <a href="mailto:FLWMBangladesh@gmail.com" className="flwm-cta-btn flwm-cta-btn--contact">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                        <span>Contact Secretariat</span>
                                    </a>
                                </div>
                            </div>
                            <div className="flwm-cta-footer-note">
                                <span>Muktijuddha Smriti Trust</span>
                                &bull;
                                <span>Liberation War Museum Dhaka</span>
                                &bull;
                                <span>Non-Profit Cultural Alliance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </main>

            {/* LIGHTBOX MODAL */}
            {lightboxImage && (
                <div
                    className="fcc-lightbox-backdrop"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setLightboxImage(null)}
                >
                    <div 
                        className="fcc-lightbox-dialog" 
                        onClick={(e) => e.stopPropagation()}
                        style={{ maxWidth: '850px' }}
                    >
                        <div className="fcc-lightbox-header">
                            <span className="fcc-lightbox-title">{lightboxImage.title || 'Archival Document'}</span>
                            <button
                                type="button"
                                className="fcc-lightbox-close"
                                onClick={() => setLightboxImage(null)}
                                aria-label="Close modal"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="fcc-lightbox-canvas" style={{ padding: '24px', background: '#1C1510', textAlign: 'center' }}>
                            <img
                                src={lightboxImage.src}
                                alt={lightboxImage.title}
                                style={{ maxWidth: '100%', maxHeight: '72vh', objectFit: 'contain', borderRadius: '4px', boxShadow: '0 8px 30px rgba(0,0,0,0.6)' }}
                            />
                        </div>
                        {lightboxImage.caption && (
                            <div className="fcc-lightbox-footer" style={{ padding: '14px 22px', background: '#F5E8CE', borderTop: '1px solid #CDB66C', fontSize: '0.88rem', color: '#3A2E24', lineHeight: 1.5 }}>
                                {lightboxImage.caption}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
