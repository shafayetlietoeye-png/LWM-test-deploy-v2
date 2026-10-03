import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

export default function PlanYourVisit({ initialTab }) {
  const [searchParams] = useSearchParams();
  const queryTab = searchParams.get('tab');

  const getInitialOpen = () => {
    const valid = ['hours', 'guidelines', 'photography', 'tours', 'accessibility'];
    if (queryTab && valid.includes(queryTab)) return { [queryTab]: true };
    if (initialTab && valid.includes(initialTab)) return { [initialTab]: true };
    return { 'hours': true };
  };

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
      title: 'Opening hours',
      bullets: [
        '<strong>Summer Operating Schedule (March – September):</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. The museum concourse and permanent exhibition galleries remain open from 10:00 AM to 6:00 PM.',
        '<strong>Winter Operating Schedule (October – February):</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Galleries operate from 10:00 AM to 5:00 PM.',
        '<strong>Weekly Holiday & Archival Maintenance:</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. The museum remains closed every Sunday for routine conservation and gallery preservation.',
        '<strong>Last Admission Policy:</strong> Entry gates and ticket counters close strictly 30 minutes prior to closing time. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.'
      ]
    },
    {
      id: 'guidelines',
      title: 'Visitor guidelines',
      bullets: [
        '<strong>Gallery Conduct & Respect:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. As a national memorial and research institution, visitors are requested to maintain decorum and dignified silence throughout commemorative galleries.',
        '<strong>Baggage, Cloakroom & Food Policy:</strong> Large backpacks, umbrellas, outside food, and beverages are not permitted inside exhibition galleries. Complimentary secure cloakroom lockers are provided at the concourse entrance.',
        '<strong>Preservation of Historic Artifacts:</strong> Touching display cases, original documents, historical relics, and memorial murals is strictly prohibited. Pellentesque habitant morbi tristique senectus et netus.',
        '<strong>Children & Delegation Supervision:</strong> School children and youth delegations must remain accompanied by authorized teachers or guardians at all times. Sed porttitor lectus nibh vivamus magna justo.'
      ]
    },
    {
      id: 'photography',
      title: 'Photography & filming',
      bullets: [
        '<strong>Personal Handheld Photography:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non-flash personal photography using mobile phones and handheld cameras is permitted in designated gallery concourses.',
        '<strong>Flash, Tripods & Selfie-Sticks:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. The use of flash, external lighting equipment, tripods, monopods, and selfie sticks is strictly prohibited inside all permanent exhibition galleries.',
        '<strong>Commercial Filming & Media Coverage:</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Television broadcast crews, documentary filmmakers, and commercial media must obtain prior written accreditation.',
        '<strong>Archival Reproduction & Rights:</strong> Excepteur sint occaecat cupidatat non proident. High-resolution digital reproduction of historical documents and photographic archives requires formal authorization.'
      ]
    },
    {
      id: 'tours',
      title: 'Guided tours & educational visits',
      bullets: [
        '<strong>Docent-Led Walkthroughs:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dedicated docents offer guided walkthroughs for educational institutions, youth delegations, and international guests.',
        '<strong>Advance Reservation for Delegations:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. School groups and delegations comprising 20 or more visitors are requested to reserve advance booking.',
        '<strong>Bilingual Orientation:</strong> Curated gallery presentations and guided orientations are available in both Bengali and English. Mauris blandit aliquet elit eget tincidunt nibh pulvinar a.'
      ]
    },
    {
      id: 'accessibility',
      title: 'Accessibility & visitor amenities',
      bullets: [
        '<strong>Barrier-Free Step-Free Access:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ramps, elevators, and wide corridors ensure complete step-free access across all four permanent galleries, auditoriums, and memorial courtyards.',
        '<strong>Wheelchairs & Mobility Support:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Manual wheelchairs are available free of charge at the reception desk for visitors with mobility impairments.',
        '<strong>Restrooms, Prayer Space & Museum Cafe:</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Dedicated accessible restrooms, clean ablution & prayer spaces, and a courtyard cafeteria are conveniently situated.'
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
              Essential visiting schedule, gallery conduct guidelines, and photography policies to ensure an enriching and memorable experience at the Liberation War Museum.
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <main className="museum-story-content">
        {/* VISITING SCHEDULE & GALLERY GUIDELINES */}
        <section className="block">
          <Breadcrumb
            customTrail={[
              { label: 'Visit', to: '/visit/ticket-information' },
              { label: 'Plan Your Visit', to: '/visit/plan-your-visit' }
            ]}
          />
          <div className="separator"></div>

          <div className="block__cap">
            <span className="cap__title">Visiting Schedule &amp; Gallery Guidelines</span>
          </div>

          <div className="block__content">
            <p className="p" style={{ marginBottom: '24px' }}>
              Select a section below to view operating schedules, gallery etiquette, photography policies, and accessibility services:
            </p>

            <div className="plan-visit-accordion">
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
          </div>
        </section>
      </main>
    </>
  );
}
