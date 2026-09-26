import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

export default function MapsAndDirections() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.body.classList.add('page-museum-story');
    document.title = 'Maps & Directions | Liberation War Museum';
    return () => {
      document.body.classList.remove('page-museum-story');
    };
  }, []);

  const fullAddress = 'Plot F11/A & F11/B, Sher-e-Bangla Nagar Civic Centre, Agargaon, Dhaka-1207, Bangladesh';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* HERO SECTION - ACCREDITATIONS & AFFILIATIONS STYLE */}
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
        {/* 1. LOCATION OVERVIEW (MATCHING ACCREDITATIONS INSTITUTIONAL OVERVIEW) */}
        <section className="block">
          <div className="separator"></div>
          <Breadcrumb
            customTrail={[
              { label: 'Visit', to: '/visit/ticket-information' },
              { label: 'Maps and Direction', to: '/visit/maps-directions' }
            ]}
          />

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

        {/* 2. INTERACTIVE MAP & TRANSIT DIRECTIONS (ACCREDITATIONS GRID LAYOUT) */}
        <section className="block">
          <div className="block__cap">
            <span className="cap__title">Interactive Map and Transit Directions</span>
          </div>

          <div className="block__content">
            <p className="p" style={{ marginBottom: '24px' }}>
              Explore our interactive location map and comprehensive route guidance to plan your arrival at the museum complex:
            </p>

            <div className="facilities-grid facilities-grid--accred">
              {/* FEATURED CARD 1: INTERACTIVE GOOGLE MAP */}
              <div className="facility-card facility-card--featured-accred">
                <div className="facility-label">
                  <span className="facility-label-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <span>মুক্তিযুদ্ধ জাদুঘর | Liberation War Museum Complex Map</span>
                </div>
                <div className="facility-value">
                  <p className="facility-desc">
                    Plot F11/A &amp; F11/B, Sher-e-Bangla Nagar Civic Centre, Agargaon, Dhaka-1207, Bangladesh (Coordinates: 23.77196° N, 90.37210° E). The map below automatically displays the museum complex location:
                  </p>

                  {/* Automatic Interactive Embedded Map */}
                  <div style={{
                    width: '100%',
                    height: '440px',
                    marginTop: '16px',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    border: '1px solid #D4CBB3',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.06)'
                  }}>
                    <iframe
                      title="Liberation War Museum Dhaka Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.520448100137!2d90.36952897589622!3d23.77196028822557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0ae53e6b527%3A0xf63eb95c97ea83c2!2sLiberation%20War%20Museum!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
                      style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  {/* Navigation Details & Action Buttons */}
                  <div className="facility-sub-items">
                    <div className="facility-sub-title">Quick Navigation Details:</div>
                    <ul className="facility-sub-list">
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span><strong>Full Address:</strong> {fullAddress}</span>
                      </li>
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        <span><strong>Nearby Landmarks:</strong> Opposite Paribesh Bhaban &amp; adjacent to Election Commission</span>
                      </li>
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span><strong>Front Desk Contact:</strong> 02-48114991-3, 02-9142780</span>
                      </li>
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <span><strong>Email Support:</strong> info@liberationwarmuseumbd.org</span>
                      </li>
                    </ul>

                    <div style={{ marginTop: '18px', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Liberation+War+Museum,+Agargaon,+Dhaka"
                        target="_blank"
                        rel="noopener noreferrer"
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
                          gap: '6px',
                          boxShadow: '0 3px 10px rgba(140,28,25,0.25)'
                        }}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="3 11 22 2 13 21 11 13 3 11" />
                        </svg>
                        Get Route Directions &rarr;
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyAddress}
                        className="btn btn--secondary"
                        style={{
                          backgroundColor: '#fff',
                          color: '#8C1C19',
                          border: '1px solid #8C1C19',
                          padding: '8px 16px',
                          borderRadius: '4px',
                          fontWeight: 'bold',
                          fontSize: '0.9rem',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        {copied ? (
                          <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                            Address Copied!
                          </>
                        ) : (
                          <>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                            Copy Postal Address
                          </>
                        )}
                      </button>

                      <a
                        href="https://www.google.com/maps/place/Liberation+War+Museum/@23.7719603,90.372104,17z/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          backgroundColor: '#FAF7EF',
                          color: '#44372C',
                          border: '1px solid #CDB66C',
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
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 2: DHAKA METRO RAIL (MRT LINE 6) */}
              <div className="facility-card">
                <div className="facility-label">
                  <span className="facility-label-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="4" y="3" width="16" height="16" rx="2" />
                      <path d="M4 11h16" />
                      <path d="M12 3v8" />
                      <circle cx="8" cy="15" r="1" />
                      <circle cx="16" cy="15" r="1" />
                    </svg>
                  </span>
                  <span>Dhaka Metro Rail (MRT Line 6)</span>
                </div>
                <div className="facility-value">
                  <p className="facility-desc">
                    The fastest, most convenient transit option in Dhaka. The museum is located within a short walking distance of the Agargaon elevated Metro Rail station:
                  </p>
                  <div className="facility-sub-items">
                    <div className="facility-sub-title">Metro Transit Route:</div>
                    <ul className="facility-sub-list">
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span><strong>Nearest Station:</strong> Agargaon Metro Station (Exit Gate 2 or 3)</span>
                      </li>
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span><strong>Walking Time:</strong> Approx. 7–10 minutes (700m) eastward along Civic Centre Avenue</span>
                      </li>
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span><strong>Rickshaw:</strong> 3-minute local rickshaw directly to the museum gate</span>
                      </li>
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span><strong>Direct Links:</strong> Motijheel, Secretariat, DU, Farmgate, Mirpur &amp; Uttara</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CARD 3: PUBLIC BUS & ROAD TRANSIT */}
              <div className="facility-card">
                <div className="facility-label">
                  <span className="facility-label-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="15" rx="2" />
                      <circle cx="7" cy="15" r="2" />
                      <circle cx="17" cy="15" r="2" />
                      <path d="M3 9h18" />
                    </svg>
                  </span>
                  <span>Public Bus &amp; Road Transit</span>
                </div>
                <div className="facility-value">
                  <p className="facility-desc">
                    Numerous city bus routes connect Agargaon with major districts across Dhaka metropolitan area:
                  </p>
                  <div className="facility-sub-items">
                    <div className="facility-sub-title">Bus Stops &amp; Corridors:</div>
                    <ul className="facility-sub-list">
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span><strong>Primary Bus Stops:</strong> Agargaon Mor, IDB Bhaban, and Passport Office</span>
                      </li>
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span><strong>Major Roads:</strong> Begum Rokeya Sarani, Mirpur Road, and Bijoy Sarani</span>
                      </li>
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span><strong>From Bus Stop:</strong> 5-minute walk along the Civic Centre boulevard</span>
                      </li>
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span><strong>Bus Operators:</strong> Shikhor, Bihanga, Projapoti, Trans Silva, and BRTC</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CARD 4: PRIVATE CAR, CNG & RIDE-SHARE */}
              <div className="facility-card">
                <div className="facility-label">
                  <span className="facility-label-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11 2 11.5 2 12v4c0 .6.4 1 1 1h2" />
                      <circle cx="7" cy="17" r="2" />
                      <path d="M9 17h6" />
                      <circle cx="17" cy="17" r="2" />
                    </svg>
                  </span>
                  <span>Private Car, CNG &amp; Ride-Share</span>
                </div>
                <div className="facility-value">
                  <p className="facility-desc">
                    Convenient vehicle drop-off and pickup areas are located directly outside the museum entrance on Civic Centre Avenue:
                  </p>
                  <div className="facility-sub-items">
                    <div className="facility-sub-title">Navigation Landmarks:</div>
                    <ul className="facility-sub-list">
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span><strong>Ride-Share Destination:</strong> Set to <em>"Liberation War Museum, Agargaon"</em></span>
                      </li>
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span><strong>Direct Landmark:</strong> Opposite Department of Environment (Paribesh Bhaban)</span>
                      </li>
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span><strong>Adjacent Institution:</strong> Election Commission Bhaban (Nirbachan Bhaban)</span>
                      </li>
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span><strong>Drop-off Concourse:</strong> Front courtyard for car and CNG passenger arrival</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CARD 5: PARKING & ACCESSIBILITY */}
              <div className="facility-card">
                <div className="facility-label">
                  <span className="facility-label-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
                    </svg>
                  </span>
                  <span>Parking Facilities &amp; Accessibility</span>
                </div>
                <div className="facility-value">
                  <p className="facility-desc">
                    The museum complex provides secure on-site parking and accessible transit amenities for all visitors:
                  </p>
                  <div className="facility-sub-items">
                    <div className="facility-sub-title">Facility Highlights:</div>
                    <ul className="facility-sub-list">
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span><strong>Underground Parking:</strong> Secure visitor parking bays for private cars and motorbikes</span>
                      </li>
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span><strong>Bicycle Stands:</strong> Dedicated bicycle parking stands near the main entrance gate</span>
                      </li>
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span><strong>Barrier-Free Access:</strong> Ramps and elevators ensure step-free access from parking to galleries</span>
                      </li>
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span><strong>Bus Staging:</strong> Dedicated parking bays for educational and tour delegation buses</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FEATURED CARD 6: VISITOR INQUIRIES & RECEPTION DESK */}
              <div className="facility-card facility-card--featured-accred">
                <div className="facility-label">
                  <span className="facility-label-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span>Visitor Reception, Inquiries &amp; Group Coordination</span>
                </div>
                <div className="facility-value">
                  <p className="facility-desc">
                    Need route guidance, special parking permissions for school buses, or accessibility support? Contact our visitor reception desk:
                  </p>

                  <div className="facility-sub-items">
                    <div className="facility-sub-title">Official Contact Information:</div>
                    <ul className="facility-sub-list">
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span><strong>Reception PABX Lines:</strong> +880 2-48114991, 02-48114992, 02-48114993</span>
                      </li>
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span><strong>Direct Administration Line:</strong> +880 2-9142780</span>
                      </li>
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span><strong>Email Support:</strong> info@liberationwarmuseumbd.org</span>
                      </li>
                      <li>
                        <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span><strong>Visiting Hours:</strong> Mon–Sat 10:00 AM – 6:00 PM (Summer) / 5:00 PM (Winter) | Sunday Closed</span>
                      </li>
                    </ul>

                    <div style={{ marginTop: '18px', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                      <a
                        href="tel:+880248114991"
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
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        Call Reception Desk
                      </a>

                      <Link
                        to="/visit/plan-your-visit"
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
                        Plan Your Visit &rarr;
                      </Link>

                      <Link
                        to="/visit/ticket-information"
                        style={{
                          backgroundColor: '#FAF7EF',
                          color: '#44372C',
                          border: '1px solid #CDB66C',
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
                        Ticket Information &amp; Pricing
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
