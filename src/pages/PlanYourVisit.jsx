import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

export default function PlanYourVisit({ initialTab }) {
  const [searchParams] = useSearchParams();
  const queryTab = searchParams.get('tab');

  const getInitialOpen = () => {
    const valid = ['hours', 'guidelines', 'restricted', 'photography'];
    if (queryTab && valid.includes(queryTab)) return { [queryTab]: true };
    if (initialTab && valid.includes(initialTab)) return { [initialTab]: true };
    return {};
  };

  // Initially closed by default as requested
  const [openSections, setOpenSections] = useState(getInitialOpen);

  useEffect(() => {
    if (queryTab) {
      setOpenSections((prev) => ({ ...prev, [queryTab]: true }));
    }
  }, [queryTab]);

  useEffect(() => {
    document.body.classList.add('page-museum-story');
    document.title = 'Plan Your Visit | Liberation War Museum';
    return () => {
      document.body.classList.remove('page-museum-story');
    };
  }, []);

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const accordionItems = [
    {
      id: 'hours',
      title: 'Opening Hours',
      bullets: [
        '<strong>March to September:</strong> 10:00 AM to 6:00 PM',
        '<strong>October to February:</strong> 10:00 AM to 5:00 PM',
        '<strong>Ramadan:</strong> 10:00 AM to 4:00 PM',
        '<strong>Weekly Holiday:</strong> Sunday',
        'The Museum remains closed on government-declared public holidays.',
        'Special or extended visiting hours and commemorative exhibitions may be arranged on important national occasions, including Independence Day (26 March), Martyred Intellectuals Day (14 December), and Victory Day (16 December).',
        'Entry gates and ticket counters close 30 minutes before the Museum’s closing time.'
      ]
    },
    {
      id: 'guidelines',
      title: 'Visitor Guidelines',
      bullets: [
        'All visitors must follow the Museum’s guidelines, security procedures and staff instructions.',
        'Bags and personal belongings may be screened before entry. Prohibited, illegal or dangerous items may be confiscated, and visitors who refuse security checks may be denied entry.',
        'Wheelchairs and pushchairs are permitted. Visitors requiring accessibility assistance may approach Museum staff.',
        'Children under 12 must be accompanied by an adult. School groups should have at least one teacher or responsible adult for every 15 students.',
        'Mobile devices should remain silent, calls should be taken outside gallery spaces, and earphones should be used for multimedia content.',
        'Personal belongings must not be left unattended.',
        'Violence, harassment, abusive or threatening behaviour and sexual misconduct are strictly prohibited. Visitors who fail to follow security instructions may be asked to leave, and serious incidents may be reported to the police.',
        'Entry without a pre-booked ticket is subject to capacity. Tickets may not be resold, transferred or used commercially.',
        'On-site parking is not available, although passenger drop-off is permitted near the entrance where applicable.',
        'Food and drinks may only be consumed in designated areas.',
        'Visitors must not touch exhibits or lean on display cases, railings or gallery barriers unless specifically permitted during an authorised Museum activity.',
        'CCTV operates throughout the Museum for safety and security. Visitors must not enter restricted, staff-only or closed areas without permission.',
        'The Museum may update these regulations or close all or part of the premises when necessary, including for safety, security or operational reasons, without prior notice. Special exhibitions may also have additional rules.'
      ]
    },
    {
      id: 'restricted',
      title: 'Restricted Items',
      bullets: [
        'Large luggage, wheeled suitcases, sports equipment, folding bicycles, musical instruments and items over 40 × 40 × 50 cm or over 5 kg are not permitted. Small personal bags and essential baby-care items are allowed after screening.',
        'Running, jumping, shouting or other disruptive behaviour is not allowed in galleries.',
        'Smoking, vaping and electronic cigarettes are prohibited throughout the Museum premises.',
        'For everyone\'s safety, all weapons, dangerous chemicals, and suspicious items must be surrendered before entering.',
        'You can collect your items as you leave, provided there are no legal restrictions preventing their return.'
      ]
    },
    {
      id: 'photography',
      title: 'Photography and Filming',
      bullets: [
        'Handheld smartphones, compact cameras and tablets may be used for personal, educational and non-commercial photography, video and audio recording, except where restrictions are displayed.',
        'Photography or recording may be restricted in Study Rooms, archives, special exhibitions and other sensitive areas. Flash should not be used near light-sensitive documents, textiles, photographs or similar objects.',
        'Personal photographs and recordings may be shared on non-commercial social media, blogs or websites, but may not be sold, licensed or otherwise used commercially without Museum permission.',
        'Tripods, monopods, selfie sticks, gimbals, extension poles and professional lighting or audio equipment require prior authorization.',
        '3D imaging, scanning and similar digital-capture methods require specific permission. Drones and UAVs are prohibited throughout the Museum premises.',
        'Photography or recording of security checkpoints, surveillance systems, restricted offices and other security-sensitive areas is not permitted.',
        'Visitors must respect the privacy and comfort of others while photographing or recording. Museum staff may ask visitors to stop any activity considered intrusive or disruptive.',
        'Journalists, documentary filmmakers, television crews and other media or production teams must apply in writing at least five business days in advance, providing the production scope, crew size, filming dates and a brief content or script outline. Approved teams may be accompanied by a Museum representative.',
        'Commercial or professional photography, filming and audio recording require prior approval. Commercial filming during public opening hours is not permitted unless specifically authorized by the Museum.',
        'Scholars and postgraduate researchers working on the 1971 Genocide and Liberation War may apply for specialized photographic or archival access with an institutional recommendation letter. Approved researchers may receive access to relevant high-resolution scans or archival records and must properly acknowledge the Liberation War Museum in resulting publications.',
        'Museum collections, oral histories, photographs, documents, memorial objects and architectural elements are protected by applicable copyright, intellectual property and heritage provisions. Permission to photograph does not automatically grant reproduction or commercial-use rights.',
        'Commercial image licensing, publication, postcard or other reproduction requests should be directed to the Museum\'s relevant authority or Publications Directorate. Unauthorized commercial use of martyr testimonies, oral histories or archival materials is prohibited.',
        'Special permission may be granted in exceptional cases for otherwise restricted equipment or activities. Visitors and production teams should contact the Museum in advance.'
      ]
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero hero--accreditations">
        <div className="hero__inner hero__inner--bottom-left">
          <div className="hero-card hero-card--dark-brush hero-card--wide">
            <div className="hero-card__title">Plan Your Visit</div>
            <div className="hero-card__desc">
              Essential visiting schedule, gallery conduct guidelines, security procedures, and photography policies to ensure an enriching and memorable experience at the Liberation War Museum.
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <main className="museum-story-content">
        <section className="block">
          <Breadcrumb
            customTrail={[
              { label: 'Visit', to: '/visit/ticket-information' },
              { label: 'Plan Your Visit', to: '/visit/plan-your-visit' }
            ]}
          />
          <div className="separator" style={{ marginBottom: '28px' }}></div>

          {/* 1. ENTERING THE MUSEUM (ALWAYS OPEN, BRITISH MUSEUM STYLE) */}
          <div className="bm-entering-museum-wrap">
            <div className="bm-entering-grid">
              {/* Left Column: Heading & British Museum Style Bullet Points */}
              <div className="bm-entering-left">
                <h2 className="bm-section-title">Entering the Museum</h2>
                <ul className="bm-entering-list">
                  <li>
                    To ensure entry on your preferred day, guests are encouraged to{' '}
                    <Link to="/visit/ticket-information" className="bm-content-link">
                      book tickets
                    </Link>{' '}
                    ahead of time.
                  </li>
                  <li>
                    By entering the Museum, visitors agree to follow all guidelines and conditions of entry.
                  </li>
                  <li>
                    All guests must undergo a mandatory security check and bag inspection before entry.
                  </li>
                  <li>
                    All visitors are requested to use the main entrance on Agargaon Road.
                  </li>
                  <li>
                    For your convenience,{' '}
                    <Link to="/visit/maps-directions" className="bm-content-link">
                      map directions and transportation options
                    </Link>{' '}
                    can be found right here.
                  </li>
                </ul>
              </div>

              {/* Right Column: Museum Building Image with Caption */}
              <div className="bm-entering-right">
                <div className="bm-entering-img-card">
                  <img
                    src="/assets/about/Museum Story/museum story hero image.jpg"
                    alt="Exterior photograph of the Liberation War Museum building"
                    className="bm-entering-img"
                  />
                  <p className="bm-entering-caption">
                    Exterior photograph of the Liberation War Museum building, Agargaon.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. EXPANDABLE SECTIONS (INITIALLY CLOSED ACCORDION) */}
          <div className="plan-visit-accordion" style={{ marginTop: '35px' }}>
            {accordionItems.map((item) => {
              const isOpen = !!openSections[item.id];
              return (
                <div
                  key={item.id}
                  className={`plan-visit-item ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="plan-visit-trigger"
                    onClick={() => toggleSection(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="plan-visit-icon" aria-hidden="true">
                      {isOpen ? (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      ) : (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      )}
                    </span>
                    <h3 className="plan-visit-title">{item.title}</h3>
                  </button>

                  {isOpen && (
                    <div className="plan-visit-content">
                      <ul className="plan-visit-list">
                        {item.bullets.map((bullet, idx) => (
                          <li key={idx} dangerouslySetInnerHTML={{ __html: bullet }} />
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
