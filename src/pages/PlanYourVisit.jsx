import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

const TABS = [
  {
    id: 'hours',
    title: 'Opening Hours',
    sub: 'Weekly & Seasonal Schedule',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  },
  {
    id: 'guidelines',
    title: 'Visitor Guidelines',
    sub: 'Gallery Conduct & Safety',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    )
  },
  {
    id: 'photography',
    title: 'Photography & Filming',
    sub: 'Personal & Media Policies',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    )
  }
];

export default function PlanYourVisit({ initialTab }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryTab = searchParams.get('tab');

  const resolveTab = () => {
    if (queryTab && ['hours', 'guidelines', 'photography'].includes(queryTab)) {
      return queryTab;
    }
    if (initialTab && ['hours', 'guidelines', 'photography'].includes(initialTab)) {
      return initialTab;
    }
    return 'hours';
  };

  const [activeTab, setActiveTab] = useState(resolveTab);

  useEffect(() => {
    if (queryTab && ['hours', 'guidelines', 'photography'].includes(queryTab)) {
      setActiveTab(queryTab);
    } else if (initialTab && ['hours', 'guidelines', 'photography'].includes(initialTab)) {
      setActiveTab(initialTab);
    }
  }, [queryTab, initialTab]);

  useEffect(() => {
    document.body.classList.add('page-museum-story');
    const currentTabObj = TABS.find((t) => t.id === activeTab);
    const subTitle = currentTabObj ? currentTabObj.title : 'Plan Your Visit';
    document.title = `${subTitle} - Plan Your Visit | Liberation War Museum`;

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
      {/* HERO SECTION - ACCREDITATIONS & AFFILIATIONS STYLE */}
      <section className="hero hero--accreditations">
        <div className="hero__inner hero__inner--bottom-left">
          <div className="hero-card hero-card--dark-brush hero-card--wide">
            <div className="hero-card__title">Plan Your Visit</div>
            <div className="hero-card__desc">
              Essential visiting schedule, gallery conduct guidelines, and photography policies to ensure an enriching and memorable experience at the Liberation War Museum.
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <main className="museum-story-content">
        {/* 1. VISITOR OVERVIEW SECTION (MATCHING ACCREDITATIONS INSTITUTIONAL OVERVIEW) */}
        <section className="block">
          <div className="separator"></div>
          <Breadcrumb
            customTrail={[
              { label: 'Visit', to: '/visit/ticket-information' },
              { label: 'Plan Your Visit', to: '/visit/plan-your-visit' },
              { label: TABS.find((t) => t.id === activeTab)?.title || 'Opening Hours', to: `/visit/plan-your-visit?tab=${activeTab}` }
            ]}
          />

          <div className="block__cap">
            <span className="cap__title">Visitor Information Overview</span>
          </div>

          <div className="block__content">
            <p className="p">
              The Liberation War Museum in Agargaon, Dhaka, commemorates the heroic struggle of the Bengali nation for independence, human rights, and democracy. Established in 1996 through a historic citizens' initiative, the Museum welcomes thousands of students, researchers, war veterans, and international travelers each week.
            </p>
            <p className="p">
              The purpose-built museum complex encompasses four permanent exhibition galleries, memorial shrines, archival research facilities, and accessible public concourses. To ensure an enriching, respectful, and safe visit, guests are encouraged to review our seasonal schedules, visitor conduct guidelines, and photography policies below.
            </p>
          </div>
        </section>

        {/* 2. PLAN YOUR VISIT TABS & ACCREDITATIONS-STYLE CARDS */}
        <section className="block">
          {/* TAB BAR (Heritage Accreditations Style) */}
          <div className="pyv-tabs-wrapper">
            <div className="pyv-tabs-nav" role="tablist">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    className={`pyv-tab-btn ${isActive ? 'pyv-tab-btn--active' : ''}`}
                    onClick={() => handleTabChange(tab.id)}
                  >
                    <div className="pyv-tab-btn__icon">{tab.icon}</div>
                    <div className="pyv-tab-btn__text">
                      <span className="pyv-tab-btn__title">{tab.title}</span>
                      <span className="pyv-tab-btn__sub">{tab.sub}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* =========================================================
              TAB 1: OPENING HOURS (ACCREDITATIONS GRID LAYOUT)
             ========================================================= */}
          {activeTab === 'hours' && (
            <div className="tab-pane active" style={{ animation: 'fadeIn 0.25s ease' }}>
              <div className="block__cap">
                <span className="cap__title">Visiting Hours and Seasonal Schedules</span>
              </div>

              <div className="block__content">
                <p className="p" style={{ marginBottom: '24px' }}>
                  The Museum operates on regular schedules six days a week from Monday to Saturday, adjusting opening hours between summer and winter seasons:
                </p>

                <div className="facilities-grid facilities-grid--accred">
                  {/* FEATURED CARD: SEASONAL TIMINGS & WEEKLY SCHEDULE */}
                  <div className="facility-card facility-card--featured-accred">
                    <div className="facility-label">
                      <span className="facility-label-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      </span>
                      <span>Seasonal Visiting Hours &amp; Weekly Schedule</span>
                    </div>
                    <div className="facility-value">
                      <p className="facility-desc">
                        Visiting hours vary by season to maximize daylight and accommodate seasonal changes in Dhaka. The museum remains open to all members of the public during these operating hours:
                      </p>

                      <div className="facility-sub-items">
                        <div className="facility-sub-title">Official Operating Schedule:</div>
                        <ul className="facility-sub-list">
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="5" />
                              <line x1="12" y1="1" x2="12" y2="3" />
                              <line x1="12" y1="21" x2="12" y2="23" />
                              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                              <line x1="1" y1="12" x2="3" y2="12" />
                              <line x1="21" y1="12" x2="23" y2="12" />
                            </svg>
                            <span><strong>Summer Season (March – September):</strong> 10:00 AM – 6:00 PM</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </svg>
                            <span><strong>Winter Season (October – February):</strong> 10:00 AM – 5:00 PM</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10" />
                              <line x1="15" y1="9" x2="9" y2="15" />
                              <line x1="9" y1="9" x2="15" y2="15" />
                            </svg>
                            <span><strong>Weekly Holiday:</strong> Closed every Sunday for routine conservation &amp; maintenance</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10" />
                              <polyline points="12 6 12 12 14 10" />
                            </svg>
                            <span><strong>Last Admission:</strong> Entry gates and ticket counters close 30 minutes prior to closing time</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2: NATIONAL HOLIDAYS */}
                  <div className="facility-card">
                    <div className="facility-label">
                      <span className="facility-label-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                      </span>
                      <span>National Holidays &amp; Special Observances</span>
                    </div>
                    <div className="facility-value">
                      <p className="facility-desc">
                        The Museum remains closed on government-declared public holidays. Special extended visiting schedules and commemorative exhibitions are organized on historic national occasions:
                      </p>
                      <div className="facility-sub-items">
                        <div className="facility-sub-title">Historic National Occasions:</div>
                        <ul className="facility-sub-list">
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            <span>Independence Day (26 March): Open for public tribute</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            <span>Victory Day (16 December): Special public exhibitions</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                            <span>Martyrs' Intellectual Day (14 December): Memorial events</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* CARD 3: GUIDED TOURS & DELEGATIONS */}
                  <div className="facility-card">
                    <div className="facility-label">
                      <span className="facility-label-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </span>
                      <span>Guided Tours &amp; Educational Delegations</span>
                    </div>
                    <div className="facility-value">
                      <p className="facility-desc">
                        Dedicated docent-led gallery walkthroughs are provided for educational institutions, youth delegations, and international cultural visitors by advance reservation:
                      </p>
                      <div className="facility-sub-items">
                        <div className="facility-sub-title">Tour Services:</div>
                        <ul className="facility-sub-list">
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span>Pre-booking required at least 3 business days in advance</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span>Bilingual commentary available in Bengali and English</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span>Recommended visit duration: 90 to 120 minutes across 4 galleries</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* FEATURED CARD: ADMISSION FEES & TICKETING */}
                  <div className="facility-card facility-card--featured-accred">
                    <div className="facility-label">
                      <span className="facility-label-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="2" y="6" width="20" height="12" rx="2" />
                          <circle cx="12" cy="12" r="2" />
                          <path d="M6 12h.01M18 12h.01" />
                        </svg>
                      </span>
                      <span>Admission Fees &amp; Ticket Booking</span>
                    </div>
                    <div className="facility-value">
                      <p className="facility-desc">
                        Tickets can be purchased at the entrance or pre-booked online through our secure eTicket portal to secure your entry slot and avoid wait times on busy visiting days:
                      </p>

                      <div className="facility-sub-items">
                        <div className="facility-sub-title">Admission Pricing &amp; Eligibility:</div>
                        <ul className="facility-sub-list">
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                            <span><strong>Domestic Visitors:</strong> BDT 20 per entry ticket</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                            <span><strong>International Visitors:</strong> BDT 500 per entry ticket</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                            <span><strong>Complimentary Admission:</strong> Children under 5 years, war veterans, and differently-abled individuals</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                            <span><strong>Institutional Concessions:</strong> Available for school, college, and university delegations</span>
                          </li>
                        </ul>

                        <div style={{ marginTop: '18px', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                          <Link
                            to="/visit/ticket-information"
                            className="btn btn--primary"
                            style={{
                              backgroundColor: '#8C1C19',
                              color: '#fff',
                              padding: '9px 18px',
                              borderRadius: '4px',
                              textDecoration: 'none',
                              fontWeight: 'bold',
                              fontSize: '0.9rem',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px'
                            }}
                          >
                            Ticket Information &amp; Portal &rarr;
                          </Link>

                          <Link
                            to="/visit/maps-directions"
                            className="btn btn--secondary"
                            style={{
                              backgroundColor: '#fff',
                              color: '#8C1C19',
                              border: '1px solid #8C1C19',
                              padding: '8px 16px',
                              borderRadius: '4px',
                              fontWeight: 'bold',
                              fontSize: '0.9rem',
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px'
                            }}
                          >
                            Maps &amp; Directions
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================
              TAB 2: VISITOR GUIDELINES (ACCREDITATIONS GRID LAYOUT)
             ========================================================= */}
          {activeTab === 'guidelines' && (
            <div className="tab-pane active" style={{ animation: 'fadeIn 0.25s ease' }}>
              <div className="block__cap">
                <span className="cap__title">Visitor Guidelines and Gallery Conduct</span>
              </div>

              <div className="block__content">
                <p className="p" style={{ marginBottom: '24px' }}>
                  To ensure the preservation of our collections, honor the sacred memory of our martyrs, and guarantee a safe, respectful environment for all, visitors must adhere to the following museum policies:
                </p>

                <div className="facilities-grid facilities-grid--accred">
                  {/* CARD 1: EXHIBIT SAFETY & ARTIFACT PRESERVATION */}
                  <div className="facility-card facility-card--featured-accred">
                    <div className="facility-label">
                      <span className="facility-label-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                        </svg>
                      </span>
                      <span>Artifact Preservation &amp; Exhibit Safety</span>
                    </div>
                    <div className="facility-value">
                      <p className="facility-desc">
                        The Liberation War Museum holds sacred relics, original martyr uniforms, letters, diaries, documents, and historical weapons from the 1971 Genocide and Liberation War. Strict conservation protocols are in effect across all galleries:
                      </p>
                      <div className="facility-sub-items">
                        <div className="facility-sub-title">Mandatory Preservation Rules:</div>
                        <ul className="facility-sub-list">
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            <span>Never touch display cases, memorial vitrines, paper documents, or historical artifacts</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            <span>Maintain a safe, respectful distance from open diorama installations and memorial walls</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            <span>Do not lean against glass enclosures, railings, or gallery boundary barriers</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            <span>Report any accidental spill or concern immediately to on-duty gallery docents</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2: CLOAKROOM & BAG POLICY */}
                  <div className="facility-card">
                    <div className="facility-label">
                      <span className="facility-label-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                          <line x1="3" y1="6" x2="21" y2="6" />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                      </span>
                      <span>Cloakroom &amp; Security Screening</span>
                    </div>
                    <div className="facility-value">
                      <p className="facility-desc">
                        To maintain clear evacuation corridors and ensure high security for historical collections, baggage regulations are enforced at the main entrance:
                      </p>
                      <div className="facility-sub-items">
                        <div className="facility-sub-title">Baggage Regulations:</div>
                        <ul className="facility-sub-list">
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="9 11 12 14 22 4" />
                              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                            </svg>
                            <span>Mandatory deposit of large backpacks, luggage, shopping bags, and umbrellas at the free cloakroom</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="9 11 12 14 22 4" />
                              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                            </svg>
                            <span>Handbags, small personal purses, and baby care items are permitted after security screening</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="9 11 12 14 22 4" />
                            </svg>
                            <span>All bags are subject to routine inspection by museum security personnel</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* CARD 3: FOOD, DRINKS & TOBACCO PROHIBITION */}
                  <div className="facility-card">
                    <div className="facility-label">
                      <span className="facility-label-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </span>
                      <span>Food, Drink &amp; Tobacco Prohibitions</span>
                    </div>
                    <div className="facility-value">
                      <p className="facility-desc">
                        To protect historical paper, documents, and textiles from stains, moisture, and pests, strict consumption bans are observed:
                      </p>
                      <div className="facility-sub-items">
                        <div className="facility-sub-title">Campus Regulations:</div>
                        <ul className="facility-sub-list">
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10" />
                              <line x1="15" y1="9" x2="9" y2="15" />
                              <line x1="9" y1="9" x2="15" y2="15" />
                            </svg>
                            <span>Eating, drinking, or chewing gum inside exhibition galleries is strictly prohibited</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10" />
                              <line x1="15" y1="9" x2="9" y2="15" />
                              <line x1="9" y1="9" x2="15" y2="15" />
                            </svg>
                            <span>Sealed water bottles must remain stowed in personal bags during gallery walkthroughs</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10" />
                              <line x1="15" y1="9" x2="9" y2="15" />
                              <line x1="9" y1="9" x2="15" y2="15" />
                            </svg>
                            <span>The entire museum complex is 100% smoke-free, vape-free, and tobacco-free</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* CARD 4: ACCESSIBILITY & ASSISTIVE SERVICES */}
                  <div className="facility-card">
                    <div className="facility-label">
                      <span className="facility-label-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                          <line x1="9" y1="9" x2="9.01" y2="9" />
                          <line x1="15" y1="9" x2="15.01" y2="9" />
                        </svg>
                      </span>
                      <span>Accessibility &amp; Assistive Support</span>
                    </div>
                    <div className="facility-value">
                      <p className="facility-desc">
                        The Liberation War Museum provides universal barrier-free access for seniors, wheelchair users, and visitors with disabilities:
                      </p>
                      <div className="facility-sub-items">
                        <div className="facility-sub-title">Accessible Amenities:</div>
                        <ul className="facility-sub-list">
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Wheelchairs are available free of charge at the ground floor reception desk</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Step-free ramp entrances and elevators connect all 4 exhibition gallery floors</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Dedicated wheelchair-accessible restrooms on primary public gallery levels</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* CARD 5: CHILDREN & STUDENT SUPERVISION */}
                  <div className="facility-card">
                    <div className="facility-label">
                      <span className="facility-label-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                        </svg>
                      </span>
                      <span>Youth &amp; Student Delegation Supervision</span>
                    </div>
                    <div className="facility-value">
                      <p className="facility-desc">
                        Educational engagement for younger generations is a core museum mission, upheld with dedicated supervisory standards:
                      </p>
                      <div className="facility-sub-items">
                        <div className="facility-sub-title">Supervision Rules:</div>
                        <ul className="facility-sub-list">
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Children under 12 years of age must be accompanied and supervised by an adult</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>School delegations must maintain a minimum of 1 accompanying teacher per 15 students</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Running, jumping, or shouting is strictly prohibited inside the exhibition halls</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* CARD 6: SOLEMN REFLECTION & DEVICE DECORUM */}
                  <div className="facility-card facility-card--featured-accred">
                    <div className="facility-label">
                      <span className="facility-label-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
                          <path d="M12 2a10 10 0 0 1 10 10h-10V2z" />
                          <circle cx="12" cy="12" r="6" />
                        </svg>
                      </span>
                      <span>Solemn Reflection &amp; Digital Device Decorum</span>
                    </div>
                    <div className="facility-value">
                      <p className="facility-desc">
                        The Museum is a place of national commemoration and remembrance. We ask all visitors to treat the exhibition spaces with dignity, quiet reverence, and solemn respect:
                      </p>
                      <div className="facility-sub-items">
                        <div className="facility-sub-title">Etiquette &amp; Atmosphere:</div>
                        <ul className="facility-sub-list">
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span>Switch all mobile phones, pagers, and devices to silent or vibration mode upon entry</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span>Use personal earphones when listening to interactive multimedia installations or mobile guides</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span>Take emergency phone calls outside the galleries in the central atrium or open concourse</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span>Dress with modesty and decorum when visiting the memorial shrines and martyr galleries</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================
              TAB 3: PHOTOGRAPHY & FILMING (ACCREDITATIONS GRID LAYOUT)
             ========================================================= */}
          {activeTab === 'photography' && (
            <div className="tab-pane active" style={{ animation: 'fadeIn 0.25s ease' }}>
              <div className="block__cap">
                <span className="cap__title">Photography, Video and Media Policies</span>
              </div>

              <div className="block__content">
                <p className="p" style={{ marginBottom: '24px' }}>
                  The Museum permits visitors to capture memories of their educational experience under strict protocols designed to protect historical artifacts from light degradation and damage:
                </p>

                <div className="facilities-grid facilities-grid--accred">
                  {/* CARD 1: PERSONAL PHOTOGRAPHY & NO FLASH */}
                  <div className="facility-card facility-card--featured-accred">
                    <div className="facility-label">
                      <span className="facility-label-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                          <circle cx="12" cy="13" r="4" />
                        </svg>
                      </span>
                      <span>Personal Handheld Photography &amp; Flash Prohibition</span>
                    </div>
                    <div className="facility-value">
                      <p className="facility-desc">
                        Handheld photography for personal, educational, and non-commercial memory is permitted inside the permanent galleries. Visitors are encouraged to respectfully document their visit:
                      </p>
                      <div className="facility-sub-items">
                        <div className="facility-sub-title">Personal Photography Rules:</div>
                        <ul className="facility-sub-list">
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10" />
                              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                            </svg>
                            <span><strong>Strictly No Flash:</strong> High-intensity light flashes cause irreversible photochemical fading to rare paper documents, textiles, and historical photographs</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Handheld smartphones, compact digital cameras, and tablets are permitted for personal documentation</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10" />
                              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                            </svg>
                            <span>Do not photograph security checkpoints, surveillance systems, or restricted administrative offices</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                            <span>Share your educational reflections on social platforms using #LiberationWarMuseum</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* CARD 2: PROHIBITED EQUIPMENT & CLEARANCE */}
                  <div className="facility-card">
                    <div className="facility-label">
                      <span className="facility-label-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                          <line x1="7" y1="2" x2="7" y2="22" />
                          <line x1="17" y1="2" x2="17" y2="22" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                        </svg>
                      </span>
                      <span>Equipment Restrictions &amp; Tripod Policy</span>
                    </div>
                    <div className="facility-value">
                      <p className="facility-desc">
                        To maintain unobstructed visitor flow and prevent accidental contact with delicate exhibits, auxiliary recording gear is strictly restricted:
                      </p>
                      <div className="facility-sub-items">
                        <div className="facility-sub-title">Restricted Equipment:</div>
                        <ul className="facility-sub-list">
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10" />
                              <line x1="15" y1="9" x2="9" y2="15" />
                              <line x1="9" y1="9" x2="15" y2="15" />
                            </svg>
                            <span>Tripods, monopods, selfie sticks, gimbals, and extension poles are strictly forbidden</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10" />
                              <line x1="15" y1="9" x2="9" y2="15" />
                              <line x1="9" y1="9" x2="15" y2="15" />
                            </svg>
                            <span>External lighting rigs, flash brackets, reflectors, and boom microphones require prior authorization</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10" />
                              <line x1="15" y1="9" x2="9" y2="15" />
                              <line x1="9" y1="9" x2="15" y2="15" />
                            </svg>
                            <span>Drones and unmanned aerial vehicles (UAVs) are prohibited across the entire museum grounds</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* CARD 3: COMMERCIAL & MEDIA FILMING */}
                  <div className="facility-card">
                    <div className="facility-label">
                      <span className="facility-label-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polygon points="23 7 16 12 23 17 23 7" />
                          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                        </svg>
                      </span>
                      <span>Commercial Filming &amp; Broadcast Media Passes</span>
                    </div>
                    <div className="facility-value">
                      <p className="facility-desc">
                        Journalists, documentary filmmakers, television production crews, and media outlets must obtain advance clearance before recording on museum premises:
                      </p>
                      <div className="facility-sub-items">
                        <div className="facility-sub-title">Permit Requirements:</div>
                        <ul className="facility-sub-list">
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Submit formal written application at least 3 business days in advance</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Detail production scope, crew numbers, requested filming dates, and script outline</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Designated museum escorts are assigned to all accredited production teams</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* CARD 4: ACADEMIC RESEARCH */}
                  <div className="facility-card">
                    <div className="facility-label">
                      <span className="facility-label-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        </svg>
                      </span>
                      <span>Academic Research &amp; Archival Recording</span>
                    </div>
                    <div className="facility-value">
                      <p className="facility-desc">
                        Scholars, university researchers, and post-graduate students conducting research on the 1971 Genocide and Liberation War may apply for specialized photographic recording access:
                      </p>
                      <div className="facility-sub-items">
                        <div className="facility-sub-title">Research Access:</div>
                        <ul className="facility-sub-list">
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Institutional recommendation letter from university department head required</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Direct access to high-resolution document scans and archival preservation records</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>Mandatory citation of Muktijuddha Jadughar in resulting publications</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* FEATURED CARD: COPYRIGHT & COMMERCIAL LICENSING */}
                  <div className="facility-card facility-card--featured-accred">
                    <div className="facility-label">
                      <span className="facility-label-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
                        </svg>
                      </span>
                      <span>Copyright Protection &amp; Commercial Image Licensing</span>
                    </div>
                    <div className="facility-value">
                      <p className="facility-desc">
                        All exhibits, memorial collections, oral histories, photographs, and architectural elements of the Liberation War Museum are protected under intellectual property, heritage, and copyright laws:
                      </p>
                      <div className="facility-sub-items">
                        <div className="facility-sub-title">Legal &amp; Licensing Guidelines:</div>
                        <ul className="facility-sub-list">
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10" />
                              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                            </svg>
                            <span>Photographs taken during personal visits may not be sold or reproduced commercially</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span>For commercial image licensing, book reproduction, or postcard rights, contact the Publications Directorate</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10" />
                              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                            </svg>
                            <span>Unauthorized commercial exploitation of martyr testimonies and archival relics is strictly prohibited</span>
                          </li>
                          <li>
                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                              <polyline points="22,6 12,13 2,6" />
                            </svg>
                            <span>Direct permit requests &amp; media licensing to: <strong>info@liberationwarmuseumbd.org</strong></span>
                          </li>
                        </ul>

                        <div style={{ marginTop: '18px', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                          <a
                            href="mailto:info@liberationwarmuseumbd.org?subject=Filming%20Permission%20Request%20-%20Liberation%20War%20Museum"
                            className="btn btn--primary"
                            style={{
                              backgroundColor: '#8C1C19',
                              color: '#fff',
                              padding: '9px 18px',
                              borderRadius: '4px',
                              textDecoration: 'none',
                              fontWeight: 'bold',
                              fontSize: '0.9rem',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px'
                            }}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                            Request Filming Permit Online
                          </a>

                          <a
                            href="tel:+880248114991"
                            className="btn btn--secondary"
                            style={{
                              backgroundColor: '#fff',
                              color: '#8C1C19',
                              border: '1px solid #8C1C19',
                              padding: '8px 16px',
                              borderRadius: '4px',
                              fontWeight: 'bold',
                              fontSize: '0.9rem',
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px'
                            }}
                          >
                            Contact Media Desk: 02-48114991
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
