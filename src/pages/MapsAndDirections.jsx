import React, { useState, useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function MapsAndDirections() {
  const [openSections, setOpenSections] = useState({ 'metro': true });

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

  const accordionItems = [
    {
      id: 'metro',
      title: 'By Metro Rail (MRT Line 6)',
      bullets: [
        'Please note that the nearest station is <strong>Agargaon Metro Station</strong>. Visitors can use Exit Gate 2 or Exit Gate 3 for direct pedestrian access.',
        'Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
        'Ut enim ad minim veniam, <strong>quis nostrud exercitation ullamco laboris</strong> nisi ut aliquip ex ea commodo consequat. Walking time from the elevated station concourse is approximately 7–10 minutes (700m).'
      ]
    },
    {
      id: 'bus',
      title: 'By bus',
      bullets: [
        'Lorem ipsum dolor sit amet, <strong>Begum Rokeya Sarani corridor</strong> consectetur adipiscing elit. Frequent local and direct bus services operate continuously from Mirpur, Farmgate, Shahbagh, and Motijheel.',
        'Pellentesque habitant morbi tristique senectus et netus et <strong>malesuada fames ac turpis egestas</strong>. Primary alight points include Agargaon Mor, IDB Bhaban, and Passport Office bus stops.',
        'Curabitur aliquet quam id dui posuere blandit. <strong>Vivamus suscipit tortor eget felis</strong> porttitor volutpat a 5-minute walk along the Civic Centre boulevard.'
      ]
    },
    {
      id: 'car',
      title: 'By car or CNG',
      bullets: [
        'Lorem ipsum dolor sit amet, <strong>Sher-e-Bangla Nagar Civic Centre Avenue</strong> consectetur adipiscing elit. The museum is located directly opposite Paribesh Bhaban and adjacent to Nirbachan Bhaban.',
        'Vehicular passenger drop-off is permitted in the <strong>front reception courtyard</strong>. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a curabitur arcu erat accumsan.',
        'Sed porttitor lectus nibh. <strong>Donec rutrum congue leo eget malesuada</strong>. Dedicated on-site parking bays are available for visitors with private vehicles.'
      ]
    },
    {
      id: 'taxi',
      title: 'By taxi or ride-share',
      bullets: [
        'When booking Uber, Pathao, or local CNG auto-rickshaws, please set your destination to <strong>"Liberation War Museum, Agargaon"</strong> for direct front-gate drop-off.',
        'Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Quisque velit nisi, pretium ut lacinia in, elementum id enim pellentesque habitant morbi tristique senectus.',
        'Driver pickup and passenger waiting zones are situated along the <strong>civic access road</strong> outside the main perimeter gates.'
      ]
    },
    {
      id: 'bicycle',
      title: 'By bicycle',
      bullets: [
        'Dedicated bicycle parking stands are located inside the <strong>outer security perimeter</strong> near the primary visitor entry gate.',
        'Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui vivamus suscipit tortor.',
        'Please note that the Museum cannot assume responsibility for damage or theft of bicycles left on-site. Visitors are kindly requested to bring their own secure locks.'
      ]
    },
    {
      id: 'parking',
      title: 'Parking & accessibility',
      bullets: [
        'Lorem ipsum dolor sit amet, <strong>secure underground visitor parking bays</strong> consectetur adipiscing elit. Step-free barrier-free ramps and elevators connect directly from parking levels to all four galleries.',
        'Designated accessible parking spaces for <strong>visitors with disabilities</strong> are situated adjacent to the lower concourse passenger elevator.',
        'Special bus staging bays are reserved for <strong>school groups and official delegations</strong>. Prior advance notice is recommended for large vehicle access.'
      ]
    },
    {
      id: 'reception',
      title: 'Visitor reception & group coordination',
      bullets: [
        'For real-time route guidance, large educational tour booking, or accessibility assistance, please contact the <strong>Visitor Reception Desk</strong> at +880 2-48114991–3 or +880 2-9142780.',
        'Lorem ipsum dolor sit amet, <strong>info@liberationwarmuseumbd.org</strong> consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus.',
        'Visiting hours are <strong>Monday to Saturday, 10:00 AM – 6:00 PM</strong> (Summer) / 5:00 PM (Winter). The museum complex remains closed on Sundays.'
      ]
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
              Find public transport directions, Metro Rail access, parking facilities, and interactive map guidance to reach our Agargaon museum complex in Dhaka.
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <main className="museum-story-content">
        {/* 1. LOCATION OVERVIEW */}
        <section className="block">
          <Breadcrumb
            customTrail={[
              { label: 'Visit', to: '/visit/ticket-information' },
              { label: 'Maps and Direction', to: '/visit/maps-directions' }
            ]}
          />
          <div className="separator"></div>

          <div className="block__cap">
            <span className="cap__title">Location Overview</span>
          </div>

          <div className="block__content">
            <p className="p">
              The purpose-built Liberation War Museum complex is situated in the Sher-e-Bangla Nagar Civic Centre, Agargaon, Dhaka. Designed to honor the historic struggle of the 1971 Genocide and Liberation War, the architectural landmark is centrally located and easily accessible from all corners of the capital city.
            </p>
            <p className="p">
              Whether arriving via the modern Dhaka Metro Rail (MRT Line 6), public transit, or private vehicle, visitors will find direct road links, secure parking facilities, and barrier-free step-free accessibility into the museum concourse and permanent exhibition galleries.
            </p>
          </div>
        </section>

        {/* 2. GETTING HERE - BRITISH MUSEUM 2-COLUMN MAP & ENTRANCE DETAILS */}
        <section className="block">
          <div className="block__cap">
            <span className="cap__title">Getting here</span>
          </div>

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

            {/* Right: Clean Entrances & Arrival Guidance (Image 1 Style) */}
            <div className="bm-getting-here-details">
              <div className="bm-detail-block">
                <h4 className="bm-detail-label">Main entrance:</h4>
                <p className="bm-detail-text">
                  <strong>Liberation War Museum</strong><br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                  <span className="bm-detail-coords">(what3words: ///young.verge.moves)</span>
                </p>
                <p className="bm-detail-subtext">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
                </p>
              </div>

              <div className="bm-detail-block">
                <h4 className="bm-detail-label">Second entrance:</h4>
                <p className="bm-detail-text">
                  <strong>Civic Centre West Gate</strong><br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                  <span className="bm-detail-coords">(what3words: ///cooks.waddled.cook)</span>
                </p>
                <p className="bm-detail-subtext">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
                </p>
              </div>

              <div className="bm-detail-block">
                <p className="bm-detail-recommendation">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, <strong>Dhaka Metro Rail (MRT Line 6) Agargaon Station (Exit Gate 2 or 3)</strong> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. GETTING TO THE MUSEUM (BRITISH MUSEUM ACCORDION) */}
        <section className="block getting-here-section" style={{ marginTop: '0' }}>
          <div className="block__content">
            <div className="getting-here-accordion">
              {accordionItems.map((item) => {
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
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        ) : (
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        )}
                      </span>
                      <h3 className="getting-here-title">{item.title}</h3>
                    </button>

                    {isOpen && (
                      <div className="getting-here-content">
                        <ul className="getting-here-list">
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
          </div>
        </section>
      </main>
    </>
  );
}
