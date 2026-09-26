import React, { useState, useEffect } from 'react';
import { winterSchoolEditions } from '../data/winterSchoolData';

const WINTER_SCHOOL_GALLERY_PHOTOS = [
  { src: "/assets/winter-school/156552.jpg", caption: "Inaugural Assembly of Winter School on Genocide and Justice" },
  { src: "/assets/winter-school/211115.jpg", caption: "Residential Campus Plenary Session and Faculty Address" },
  { src: "/assets/winter-school/225477.jpg", caption: "Classroom Lecture Session by International Law Jurists" },
  { src: "/assets/winter-school/236350.jpg", caption: "Participants Engaging in Group Case-Study Research" },
  { src: "/assets/winter-school/132243.jpg", caption: "Scholars & Participants during Academic Workshop Session" },
  { src: "/assets/winter-school/286066.jpg", caption: "Interactive Legal Deliberation and Jurisprudence Workshop" },
  { src: "/assets/winter-school/319350.jpg", caption: "Field Investigation and On-Site Forensic Documentation" },
  { src: "/assets/winter-school/323175.jpg", caption: "Moot Court Simulation & Non-Judicial Tribunal Proceedings" },
  { src: "/assets/winter-school/336159.jpg", caption: "Empirical Field Research at Historical 1971 Sites" },
  { src: "/assets/winter-school/341773.jpg", caption: "Group Presentation on Mass Atrocities and Legal Frameworks" },
  { src: "/assets/winter-school/342831.jpg", caption: "Eminent International Guest Faculty Delivering Seminar" },
  { src: "/assets/winter-school/393137.jpg", caption: "Scholarly Exchange between Mentors and Young Researchers" },
  { src: "/assets/winter-school/414128.jpg", caption: "Field Visit to Memorial Execution Sites (Badhyabhumi)" },
  { src: "/assets/winter-school/473577.jpg", caption: "Interactive Forum on Nuremberg Principles and 1948 Convention" },
  { src: "/assets/winter-school/539970.jpg", caption: "Cohort Discussion on Transitional Justice & Reconciliation" },
  { src: "/assets/winter-school/566475.jpg", caption: "Expert Panel Discussion on ICT-BD Legal Precedents" },
  { src: "/assets/winter-school/573983.jpg", caption: "Victim Testimony Evaluation and Archival Relics Study" },
  { src: "/assets/winter-school/581210.jpg", caption: "Special Seminar on Gendered Violence in Genocide" },
  { src: "/assets/winter-school/609971.jpg", caption: "Classroom Seminar on Universal Jurisdiction Mechanisms" },
  { src: "/assets/winter-school/653213.jpg", caption: "Oral History Documentation Training Session" },
  { src: "/assets/winter-school/674336.jpg", caption: "Refugee Camp Field Investigation and Case Documentation" },
  { src: "/assets/winter-school/699241.jpg", caption: "Research Presentation on Universal Human Rights Standards" },
  { src: "/assets/winter-school/725237.jpg", caption: "Documentary Film Screening and Critical Reflection Session" },
  { src: "/assets/winter-school/796705.jpg", caption: "Evening Cultural Gathering & Historical Memory Theater" },
  { src: "/assets/winter-school/802726.jpg", caption: "Participant Legal Drafting Exercise & Policy Formulation" },
  { src: "/assets/winter-school/839524.jpg", caption: "Field Trip to Freedom Fighters & Survivor Communities" },
  { src: "/assets/winter-school/844562.jpg", caption: "Collaborative Workshop on New Media & Atrocity Awareness" },
  { src: "/assets/winter-school/847679.jpg", caption: "Review Session of Student Case Briefs and Legal Submissions" },
  { src: "/assets/winter-school/917513.jpg", caption: "Keynote Lecture on International Humanitarian Law" },
  { src: "/assets/winter-school/968641.jpg", caption: "Winter School Participants Assembled at Liberation War Museum" },
  { src: "/assets/winter-school/973546.jpg", caption: "Certificate Awarding and Valedictory Academic Ceremony" },
  { src: "/assets/winter-school/983782.jpg", caption: "Official Cohort Portrait with Faculty & Museum Trustees" }
];

export default function WinterSchoolSection() {
  const [selectedEditionId, setSelectedEditionId] = useState('6th');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoList, setActivePhotoList] = useState([]);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const selectedEdition = winterSchoolEditions.find(e => e.id === selectedEditionId) || winterSchoolEditions[0];

  // Flatten all photos for current edition to allow continuous prev/next browsing in lightbox
  const currentEditionAllPhotos = [];
  selectedEdition.sections.forEach(section => {
    section.items.forEach(item => {
      if (item.type === 'images' && Array.isArray(item.images)) {
        currentEditionAllPhotos.push(...item.images);
      }
    });
  });

  const openPhotoModal = (images, clickedIndex) => {
    const clickedPhoto = images[clickedIndex];
    const overallIndex = currentEditionAllPhotos.findIndex(p => p.src === clickedPhoto.src);
    setActivePhotoList(currentEditionAllPhotos.length > 0 ? currentEditionAllPhotos : images);
    setActivePhotoIndex(overallIndex !== -1 ? overallIndex : clickedIndex);
    setLightboxOpen(true);
  };

  const openGalleryModal = (index) => {
    setActivePhotoList(WINTER_SCHOOL_GALLERY_PHOTOS);
    setActivePhotoIndex(index);
    setLightboxOpen(true);
  };

  const closePhotoModal = () => {
    setLightboxOpen(false);
  };

  const showNextPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev + 1) % activePhotoList.length);
  };

  const showPrevPhoto = (e) => {
    e.stopPropagation();
    setActivePhotoIndex((prev) => (prev - 1 + activePhotoList.length) % activePhotoList.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closePhotoModal();
      if (e.key === 'ArrowRight') setActivePhotoIndex((prev) => (prev + 1) % activePhotoList.length);
      if (e.key === 'ArrowLeft') setActivePhotoIndex((prev) => (prev - 1 + activePhotoList.length) % activePhotoList.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, activePhotoList.length]);

  return (
    <div className="winter-school-accred-container">
      {/* 1. INSTITUTIONAL OVERVIEW (ACCREDITATIONS & AFFILIATIONS STYLE) */}
      <section className="block" style={{ paddingTop: 0, paddingBottom: '20px' }}>
        <div className="block__cap" style={{ marginBottom: '14px' }}>
          <span className="cap__title">Institutional Overview</span>
        </div>

        <div className="block__content">
          <p className="p" style={{ marginBottom: '16px', lineHeight: '1.75' }}>
            The Center for the Study of Genocide and Justice (CSGJ), an academic initiative of the Liberation War Museum in Dhaka, Bangladesh, organizes the annual residential Winter School on Genocide and Justice. Established to foster empirical scholarship and human rights advocacy, the program gathers students, young professionals, lawyers, and human rights defenders from across Bangladesh and the international community.
          </p>
          <p className="p" style={{ marginBottom: 0, lineHeight: '1.75' }}>
            Through intensive residential immersion, academic seminars, direct field investigations at 1971 Genocide sites, moot court simulations, and documentary screenings, participants develop a deep interdisciplinary understanding of international criminal tribunals, transitional justice, and mass atrocity prevention.
          </p>
        </div>
      </section>

      {/* 2. PROGRAM ARCHITECTURE & CORE PILLARS (ACCREDITATIONS GRID STYLE) */}
      <section className="block" style={{ paddingTop: '10px', paddingBottom: '20px' }}>
        <div className="block__cap" style={{ marginBottom: '14px' }}>
          <span className="cap__title">Program Architecture and Academic Pillars</span>
        </div>

        <div className="block__content">
          <p className="p" style={{ marginBottom: '18px', lineHeight: '1.75' }}>
            The Winter School curriculum bridges legal theory, empirical field research, and experiential advocacy across key foundational pillars:
          </p>

          <div className="facilities-grid facilities-grid--accred" style={{ marginTop: 0, gap: '20px' }}>
            {/* FEATURED CARD 1: RESIDENTIAL IMMERSION */}
            <div className="facility-card facility-card--featured-accred">
              <div className="facility-label" style={{ marginBottom: '10px' }}>
                <span className="facility-label-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </span>
                <span>Residential Immersion &amp; Core Training Framework</span>
              </div>
              <div className="facility-value">
                <p className="facility-desc" style={{ margin: '0 0 12px 0', lineHeight: '1.65' }}>
                  Our flagship residential winter school trains regional students, scholars, lawyers, and human rights defenders in genocide studies, international humanitarian law, and human rights advocacy.
                </p>

                <div className="facility-sub-items" style={{ marginTop: '14px', paddingTop: '12px' }}>
                  <div className="facility-sub-title" style={{ marginBottom: '8px' }}>Core Curriculum Components:</div>
                  <ul className="facility-sub-list" style={{ gap: '8px 16px' }}>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span><strong>Duration:</strong> 8 to 9 days intensive residential training</span>
                    </li>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span><strong>Certification:</strong> Official CSGJ &amp; Liberation War Museum Academic Certificate</span>
                    </li>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                      </svg>
                      <span><strong>Participants:</strong> Law graduates, human rights defenders, social scientists</span>
                    </li>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      </svg>
                      <span><strong>Methodology:</strong> Seminars, legal drafting, moot courts &amp; field studies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CARD 2: EMINENT FACULTY */}
            <div className="facility-card">
              <div className="facility-label" style={{ marginBottom: '10px' }}>
                <span className="facility-label-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                <span>Eminent Faculty &amp; International Jurists</span>
              </div>
              <div className="facility-value">
                <p className="facility-desc" style={{ margin: '0 0 12px 0', lineHeight: '1.65' }}>
                  Lectures delivered by leading international genocide scholars, ICT-BD prosecutors, supreme court justices, and international human rights advocates.
                </p>
                <div className="facility-sub-items" style={{ marginTop: '14px', paddingTop: '12px' }}>
                  <div className="facility-sub-title" style={{ marginBottom: '8px' }}>Scholarly Focus Areas:</div>
                  <ul className="facility-sub-list" style={{ gap: '8px 16px' }}>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Nuremberg Principles &amp; 1948 Convention</span>
                    </li>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>1971 Genocide &amp; ICT-BD Jurisprudence</span>
                    </li>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Universal Jurisdiction &amp; Mass Atrocity Law</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CARD 3: FIELD INQUIRIES */}
            <div className="facility-card">
              <div className="facility-label" style={{ marginBottom: '10px' }}>
                <span className="facility-label-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                    <line x1="8" y1="2" x2="8" y2="18" />
                    <line x1="16" y1="6" x2="16" y2="22" />
                  </svg>
                </span>
                <span>Field Inquiries &amp; Living History</span>
              </div>
              <div className="facility-value">
                <p className="facility-desc" style={{ margin: '0 0 12px 0', lineHeight: '1.65' }}>
                  Direct interaction with 1971 freedom fighters, visits to historical battlegrounds, execution sites (Badhyabhumi), and survivor communities.
                </p>
                <div className="facility-sub-items" style={{ marginTop: '14px', paddingTop: '12px' }}>
                  <div className="facility-sub-title" style={{ marginBottom: '8px' }}>Empirical Fieldwork:</div>
                  <ul className="facility-sub-list" style={{ gap: '8px 16px' }}>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Visits to historical killing fields and mass graves</span>
                    </li>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Oral history interviews with war survivors</span>
                    </li>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Field research at refugee camps &amp; settlements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CARD 4: MOOT COURTS & SIMULATIONS */}
            <div className="facility-card">
              <div className="facility-label" style={{ marginBottom: '10px' }}>
                <span className="facility-label-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </span>
                <span>Moot Courts &amp; Non-Judicial Hearings</span>
              </div>
              <div className="facility-value">
                <p className="facility-desc" style={{ margin: '0 0 12px 0', lineHeight: '1.65' }}>
                  Practical moot courts and simulated human rights hearings bridging international criminal law and courtroom advocacy.
                </p>
                <div className="facility-sub-items" style={{ marginTop: '14px', paddingTop: '12px' }}>
                  <div className="facility-sub-title" style={{ marginBottom: '8px' }}>Courtroom Simulations:</div>
                  <ul className="facility-sub-list" style={{ gap: '8px 16px' }}>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Mock tribunal hearings before senior advocates</span>
                    </li>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Victim testimony evaluation &amp; evidentiary briefs</span>
                    </li>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Transitional justice policy recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CARD 5: CULTURAL ENGAGEMENT */}
            <div className="facility-card">
              <div className="facility-label" style={{ marginBottom: '10px' }}>
                <span className="facility-label-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
                    <line x1="7" y1="2" x2="7" y2="22" />
                    <line x1="17" y1="2" x2="17" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                  </svg>
                </span>
                <span>Cultural Reflections &amp; Cinema</span>
              </div>
              <div className="facility-value">
                <p className="facility-desc" style={{ margin: '0 0 12px 0', lineHeight: '1.65' }}>
                  Evening documentary film screenings, theater performances, and cultural reflections exploring memory and historical resilience.
                </p>
                <div className="facility-sub-items" style={{ marginTop: '14px', paddingTop: '12px' }}>
                  <div className="facility-sub-title" style={{ marginBottom: '8px' }}>Cultural Sessions:</div>
                  <ul className="facility-sub-list" style={{ gap: '8px 16px' }}>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Screening of classic documentaries like 'Muktir Gaan'</span>
                    </li>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Dramatic stage plays depicting survivor struggles</span>
                    </li>
                    <li>
                      <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>Interdisciplinary poetry, music &amp; art reflections</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WINTER SCHOOL ARCHIVE & DOCUMENTATION (ACCREDITATIONS GRID STYLE) */}
      <section className="block" style={{ paddingTop: '10px', paddingBottom: '20px' }}>
        <div className="block__cap" style={{ marginBottom: '14px' }}>
          <span className="cap__title">Winter School Edition Archive and Documentation</span>
        </div>

        <div className="block__content">
          <p className="p" style={{ marginBottom: '18px', lineHeight: '1.75' }}>
            Select an edition below to explore daily proceedings, faculty sessions, empirical field studies, and the complete photographic archive:
          </p>

          {/* EDITION SELECTOR (WARM HERITAGE TABS) */}
          <div className="facilities-tabs-wrapper" style={{ margin: '0 0 20px 0' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              gap: '10px'
            }}>
              {winterSchoolEditions.map((edition) => {
                const isSelected = edition.id === selectedEditionId;
                return (
                  <button
                    key={edition.id}
                    type="button"
                    onClick={() => setSelectedEditionId(edition.id)}
                    className="facility-card"
                    style={{
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: '12px 16px',
                      backgroundColor: isSelected ? '#0A3822' : '#F5E8CE',
                      borderColor: isSelected ? '#0A3822' : '#E5D5B8',
                      borderLeft: isSelected ? '4px solid #CDB66C' : '4px solid #CDB66C',
                      color: isSelected ? '#FAF0DC' : '#1A1512',
                      transition: 'all 0.22s ease',
                      boxShadow: isSelected ? '0 4px 14px rgba(10,56,34,0.22)' : '0 2px 6px rgba(0,0,0,0.04)',
                      borderRadius: '4px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '4px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: isSelected ? 'rgba(205,182,108,0.25)' : 'rgba(140,28,25,0.08)',
                        color: isSelected ? '#CDB66C' : '#8C1C19',
                        flexShrink: 0
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                      </span>
                      <div>
                        <div style={{
                          fontFamily: "'Roboto Slab', serif",
                          fontWeight: '700',
                          fontSize: '0.98rem',
                          color: isSelected ? '#FAF0DC' : '#1A1512',
                          lineHeight: '1.2'
                        }}>
                          {edition.title}
                        </div>
                        <div style={{
                          fontSize: '0.76rem',
                          fontFamily: "'Roboto', sans-serif",
                          color: isSelected ? '#CDB66C' : '#6B5E51',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          marginTop: '3px'
                        }}>
                          {edition.year} &bull; {edition.photoCount > 0 ? `${edition.photoCount} Photos` : 'Archive'}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SELECTED EDITION PROFILE FEATURED CARD */}
          <div className="facility-card facility-card--featured-accred" style={{ marginBottom: '20px' }}>
            <div className="facility-label" style={{ marginBottom: '10px' }}>
              <span className="facility-label-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </span>
              <span>{selectedEdition.title} ({selectedEdition.year}) — Academic Profile</span>
            </div>
            <div className="facility-value">
              <p className="facility-desc" style={{ fontSize: '1.1rem', color: '#8C1C19', fontWeight: '700', margin: '0 0 8px 0' }}>
                “{selectedEdition.theme}”
              </p>
              <p className="facility-desc" style={{ margin: '0 0 12px 0', lineHeight: '1.65' }}>
                Held at {selectedEdition.venue}, the {selectedEdition.title} gathered participants for intensive training on international criminal law, justice, and human rights.
              </p>

              <div className="facility-sub-items" style={{ marginTop: '14px', paddingTop: '12px' }}>
                <div className="facility-sub-title" style={{ marginBottom: '8px' }}>Edition Highlights:</div>
                <ul className="facility-sub-list" style={{ gap: '8px 16px' }}>
                  <li>
                    <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span><strong>Dates:</strong> {selectedEdition.dates}</span>
                  </li>
                  <li>
                    <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span><strong>Venue:</strong> {selectedEdition.venue}</span>
                  </li>
                  <li>
                    <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span><strong>Photographic Records:</strong> {selectedEdition.photoCount > 0 ? `${selectedEdition.photoCount} Photographs` : 'Full Documentation'}</span>
                  </li>
                  <li>
                    <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <span><strong>Academic Track:</strong> Residential Certificate Course</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* DAILY PROCEEDINGS SECTION HEADER */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
            margin: '0 0 14px 0',
            paddingBottom: '8px',
            borderBottom: '1px solid rgba(205, 182, 108, 0.45)'
          }}>
            <div style={{
              fontFamily: "'Roboto Slab', serif",
              fontSize: '1.05rem',
              fontWeight: '700',
              color: '#8C1C19',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
              <span>Daily Proceedings &amp; Field Reports ({selectedEdition.title})</span>
            </div>
            <span style={{
              fontSize: '0.82rem',
              color: '#6B5E51',
              fontFamily: "'Roboto', sans-serif"
            }}>
              {selectedEdition.sections.length} Academic Sessions
            </span>
          </div>

          {/* DAILY PROCEEDINGS IN ACCREDITATIONS GRID */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {selectedEdition.sections.map((sec, secIdx) => (
              <div key={secIdx} className="facility-card facility-card--featured-accred" style={{ margin: 0 }}>
                <div className="facility-label" style={{ marginBottom: '12px' }}>
                  <span className="facility-label-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </span>
                  <span>{sec.title}</span>
                </div>

                <div className="facility-value">
                  {sec.items.map((item, itIdx) => {
                    const isLast = itIdx === sec.items.length - 1;
                    if (item.type === 'paragraph') {
                      return (
                        <p
                          key={itIdx}
                          className="facility-desc"
                          style={{
                            marginBottom: isLast ? 0 : '12px',
                            lineHeight: '1.75'
                          }}
                        >
                          {item.text}
                        </p>
                      );
                    }

                    if (item.type === 'images') {
                      const count = item.images.length;
                      return (
                        <div
                          key={itIdx}
                          style={{
                            marginTop: '14px',
                            marginBottom: isLast ? 0 : '14px',
                            display: 'grid',
                            gridTemplateColumns:
                              count === 1
                                ? '1fr'
                                : count === 2
                                ? 'repeat(auto-fit, minmax(280px, 1fr))'
                                : 'repeat(auto-fit, minmax(230px, 1fr))',
                            gap: '14px',
                            maxWidth: count === 1 ? '560px' : '100%',
                            marginRight: count === 1 ? 'auto' : undefined
                          }}
                        >
                          {item.images.map((img, imgIdx) => (
                            <div
                              key={imgIdx}
                              onClick={() => openPhotoModal(item.images, imgIdx)}
                              style={{
                                position: 'relative',
                                borderRadius: '4px',
                                overflow: 'hidden',
                                border: '1px solid #D4CBB3',
                                backgroundColor: '#1A1512',
                                cursor: 'pointer',
                                boxShadow: '0 2px 8px rgba(26, 21, 18, 0.08)',
                                transition: 'all 0.22s ease',
                                aspectRatio: '16/10'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.borderColor = '#8C1C19';
                                e.currentTarget.style.boxShadow = '0 6px 18px rgba(140, 28, 25, 0.16)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = '#D4CBB3';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(26, 21, 18, 0.08)';
                              }}
                            >
                              <img
                                src={img.src}
                                alt={img.caption || 'Winter School Photograph'}
                                loading="lazy"
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                  display: 'block'
                                }}
                              />
                              <div
                                style={{
                                  position: 'absolute',
                                  bottom: 0,
                                  left: 0,
                                  right: 0,
                                  padding: '8px 12px',
                                  background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0) 100%)',
                                  color: '#FAF0DC',
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                  alignItems: 'center'
                                }}
                              >
                                <span style={{ fontSize: '0.78rem', color: '#FAF0DC', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: '78%' }}>
                                  {img.caption || sec.title}
                                </span>
                                <span
                                  style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    fontSize: '0.72rem',
                                    backgroundColor: 'rgba(0,0,0,0.55)',
                                    padding: '2px 7px',
                                    borderRadius: '3px',
                                    color: '#CDB66C',
                                    fontWeight: '700'
                                  }}
                                >
                                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                  </svg>
                                  Enlarge
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    }

                    return null;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PHOTOGRAPHIC RECORD */}
      <section className="block" style={{ paddingTop: '10px', paddingBottom: '24px' }}>
        <div className="block__cap" style={{ marginBottom: '14px' }}>
          <span className="cap__title">Photographic Record</span>
        </div>

        <div className="block__content">
          <p className="p" style={{ marginBottom: '18px', lineHeight: '1.75' }}>
            Photographic collection documenting the Liberation War Museum's Winter School on Genocide and Justice, including academic seminars, empirical field trips to killing fields, legal clinics, moot courts, and valedictory ceremonies:
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '18px',
            marginTop: 0
          }}>
            {WINTER_SCHOOL_GALLERY_PHOTOS.map((photo, pIdx) => (
              <div
                key={pIdx}
                onClick={() => openGalleryModal(pIdx)}
                className="facility-card"
                style={{
                  cursor: 'pointer',
                  padding: '10px',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  transition: 'all 0.22s ease'
                }}
              >
                <div style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/10',
                  overflow: 'hidden',
                  borderRadius: '3px',
                  backgroundColor: '#1A1512'
                }}>
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px',
                    backgroundColor: 'rgba(0,0,0,0.6)',
                    color: '#FAF0DC',
                    fontSize: '0.72rem',
                    padding: '2px 7px',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    View
                  </div>
                </div>
                <div style={{
                  fontFamily: "'Roboto Slab', serif",
                  fontSize: '0.86rem',
                  color: '#1A1512',
                  lineHeight: '1.45',
                  fontWeight: '600'
                }}>
                  {photo.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LIGHTBOX MODAL */}
      {lightboxOpen && activePhotoList.length > 0 && (
        <div
          className="ws-lightbox-backdrop"
          onClick={closePhotoModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(10, 8, 7, 0.94)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            boxSizing: 'border-box'
          }}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closePhotoModal}
            aria-label="Close Lightbox"
            style={{
              position: 'absolute',
              top: '20px',
              right: '25px',
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '2rem',
              cursor: 'pointer',
              zIndex: 100000,
              padding: '10px'
            }}
          >
            ✕
          </button>

          {/* Prev Button */}
          {activePhotoList.length > 1 && (
            <button
              type="button"
              onClick={showPrevPhoto}
              aria-label="Previous Photo"
              style={{
                position: 'absolute',
                left: '20px',
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#fff',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '1.4rem',
                zIndex: 100000,
                transition: 'background 0.2s ease'
              }}
            >
              ‹
            </button>
          )}

          {/* Image & Caption Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: 'min(90vw, 1200px)',
              maxHeight: '85vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <img
              src={activePhotoList[activePhotoIndex].src}
              alt={activePhotoList[activePhotoIndex].caption || 'Winter School Photo'}
              style={{
                maxWidth: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: '4px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}
            />
            <div
              style={{
                marginTop: '14px',
                color: '#FAF0DC',
                fontSize: '0.96rem',
                textAlign: 'center',
                fontFamily: "'Roboto Slab', serif",
                maxWidth: '850px'
              }}
            >
              <div>{activePhotoList[activePhotoIndex].caption || `${selectedEdition.title} Photograph`}</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '4px' }}>
                Photo {activePhotoIndex + 1} of {activePhotoList.length}
              </div>
            </div>
          </div>

          {/* Next Button */}
          {activePhotoList.length > 1 && (
            <button
              type="button"
              onClick={showNextPhoto}
              aria-label="Next Photo"
              style={{
                position: 'absolute',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#fff',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '1.4rem',
                zIndex: 100000,
                transition: 'background 0.2s ease'
              }}
            >
              ›
            </button>
          )}
        </div>
      )}
    </div>
  );
}
