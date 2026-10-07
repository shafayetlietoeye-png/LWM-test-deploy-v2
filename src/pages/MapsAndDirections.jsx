import React, { useState, useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function MapsAndDirections() {
  // All transport mode sections initially closed as requested
  const [openSections, setOpenSections] = useState({});

  useEffect(() => {
    document.body.classList.add('page-museum-story');
    document.title = 'Maps & Directions | Liberation War Museum';
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

  const transportModes = [
    {
      id: 'metro',
      title: 'By Metro Rail',
      content: (
        <p className="getting-here-paragraph">
          The nearest Metro Rail station is Agargaon Station on MRT Line 6. From the station, visitors can reach the Museum by rickshaw, CNG taxi or ride-sharing service. The Museum is also within walking distance, approximately 700 metres or 7–10 minutes east along Civic Centre Avenue. Visitors may check the{' '}
          <a
            href="https://dmtcl.gov.bd/pages/static-pages/6922ddb2933eb65569e15eb8?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bm-inline-link"
          >
            MRT Line 6 Route Map
          </a>{' '}
          on the Dhaka Mass Transit Company Limited website.
        </p>
      )
    },
    {
      id: 'bus',
      title: 'By Bus',
      content: (
        <p className="getting-here-paragraph">
          Buses travelling through Agargaon and Sher-e-Bangla Nagar offer convenient access to the Museum. Visitors may get off at Agargaon, Shyamoli Shishu Mela or IDB Bhaban and continue by rickshaw, CNG taxi or other local transport. Walking from nearby stops is also possible.
        </p>
      )
    },
    {
      id: 'car-bike',
      title: 'By Car, Bike or Ride-Sharing',
      content: (
        <p className="getting-here-paragraph">
          Visitors travelling by private car, motorbike or ride-sharing service can directly set “Liberation War Museum, Agargaon” as their destination. Ride-sharing vehicles may drop passengers near the Museum entrance. Please note that on-site parking is not available for private cars or motorbikes.
        </p>
      )
    },
    {
      id: 'cng',
      title: 'By CNG Taxi',
      content: (
        <p className="getting-here-paragraph">
          CNG taxis provide direct access to the Museum from most parts of Dhaka. Visitors can simply ask the driver for Liberation War Museum, Agargaon. The adjacent institution is NBR or Tax Bhaban, and it is opposite the Department of Environment (Paribesh Bhaban).
        </p>
      )
    },
    {
      id: 'rickshaw',
      title: 'By Rickshaw',
      content: (
        <p className="getting-here-paragraph">
          Rickshaws are a convenient option for short-distance travel within Agargaon and Sher-e-Bangla Nagar, especially from the Metro station, nearby bus stops and surrounding areas.
        </p>
      )
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero hero--accreditations">
        <div className="hero__inner hero__inner--bottom-left">
          <div className="hero-card hero-card--dark-brush hero-card--wide">
            <div className="hero-card__title">Maps &amp; Directions</div>
            <div className="hero-card__desc">
              Find public transport directions, Metro Rail access, route guidance, and location details to reach our Agargaon museum complex in Dhaka.
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
              { label: 'Maps and Direction', to: '/visit/maps-directions' }
            ]}
          />
          <div className="separator" style={{ marginBottom: '28px' }}></div>

          <h2 className="bm-getting-here-heading">Getting here</h2>

          {/* 1. GETTING HERE - 2-COLUMN MAP & ADDRESS / CONTACT DETAILS (ALWAYS OPEN, NO ICONS) */}
          <div className="bm-getting-here-grid">
            {/* Left: Clean Google Map */}
            <div className="bm-getting-here-map">
              <iframe
                title="Liberation War Museum Dhaka Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.520448100137!2d90.36952897589622!3d23.77196028822557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0ae53e6b527%3A0xf63eb95c97ea83c2!2sLiberation%20War%20Museum!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Right: Address & Contact Details (No icons) */}
            <div className="bm-getting-here-details">
              <div className="bm-detail-block">
                <h3 className="bm-detail-label">Address:</h3>
                <p className="bm-detail-text">
                  Plot F11/A &amp; F11/B,<br />
                  Sher-e-Bangla Nagar Civic Centre,<br />
                  Agargaon, Dhaka-1207, Bangladesh
                </p>
              </div>

              <div className="bm-detail-block">
                <h3 className="bm-detail-label">Contact:</h3>
                <p className="bm-detail-text">
                  <a href="tel:02-48114991" className="bm-detail-link">02-48114991-3</a>,{' '}
                  <a href="tel:02-9142780" className="bm-detail-link">02-9142780</a>
                </p>
              </div>

              <div className="bm-detail-block">
                <h3 className="bm-detail-label">Email:</h3>
                <p className="bm-detail-text">
                  <a href="mailto:info@liberationwarmuseumbd.org" className="bm-detail-link bm-detail-email">
                    info@liberationwarmuseumbd.org
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* 2. TRANSPORT MODES (EXPANDABLE ACCORDION - INITIALLY CLOSED) */}
          <div className="getting-here-accordion">
            {transportModes.map((item) => {
              const isOpen = !!openSections[item.id];
              return (
                <div
                  key={item.id}
                  className={`getting-here-item ${isOpen ? 'is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="getting-here-trigger"
                    onClick={() => toggleSection(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span className="getting-here-icon" aria-hidden="true">
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
                    <span className="getting-here-title">{item.title}</span>
                  </button>

                  {isOpen && (
                    <div className="getting-here-content">
                      {item.content}
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
