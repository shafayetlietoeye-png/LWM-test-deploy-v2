import React, { useState, useEffect } from 'react';
import { winterSchoolEditions, winterSchoolOverview } from '../data/winterSchoolData';

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
    // Find index of clicked photo in the edition-wide list
    const clickedPhoto = images[clickedIndex];
    const overallIndex = currentEditionAllPhotos.findIndex(p => p.src === clickedPhoto.src);
    setActivePhotoList(currentEditionAllPhotos.length > 0 ? currentEditionAllPhotos : images);
    setActivePhotoIndex(overallIndex !== -1 ? overallIndex : clickedIndex);
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
    <div className="winter-school-page-container">
      {/* 1. OVERVIEW HIGHLIGHTS (Accreditations Style) */}
      <section className="block" style={{ paddingTop: 0, marginBottom: '35px' }}>
        <div className="block__cap" style={{ marginBottom: '16px' }}>
          <span className="cap__title" style={{ fontSize: '1.4rem', fontFamily: 'Roboto Slab, serif', textTransform: 'none' }}>
            Program Overview
          </span>
        </div>
        <div className="block__content">
          <p className="p" style={{ textAlign: 'justify', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '25px' }}>
            {winterSchoolOverview.description}
          </p>

          <div className="facilities-grid facilities-grid--accred" style={{ marginTop: '20px' }}>
            {winterSchoolOverview.features.map((feat, idx) => (
              <div key={idx} className="facility-card">
                <div className="facility-label" style={{ fontSize: '1.1rem', color: '#8d2024' }}>
                  {feat.title}
                </div>
                <div className="facility-value">
                  <p className="facility-desc" style={{ textAlign: 'justify' }}>
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. EDITIONS NAVIGATOR / TABS */}
      <section className="block" style={{ paddingTop: '10px', marginBottom: '25px' }}>
        <div className="block__cap" style={{ marginBottom: '18px' }}>
          <span className="cap__title" style={{ fontSize: '1.4rem', fontFamily: 'Roboto Slab, serif', textTransform: 'none' }}>
            Winter School Archive & Documentation
          </span>
        </div>

        <div
          className="ws-tabs-container"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            padding: '8px',
            backgroundColor: '#f6f4ee',
            borderRadius: '8px',
            border: '1px solid #d4cbb3',
            marginBottom: '30px'
          }}
        >
          {winterSchoolEditions.map((edition) => {
            const isSelected = edition.id === selectedEditionId;
            return (
              <button
                key={edition.id}
                type="button"
                onClick={() => setSelectedEditionId(edition.id)}
                className={`ws-tab-btn ${isSelected ? 'ws-tab-btn--active' : ''}`}
                style={{
                  flex: '1 1 auto',
                  minWidth: '150px',
                  padding: '12px 18px',
                  border: isSelected ? '1px solid #8d2024' : '1px solid transparent',
                  borderRadius: '6px',
                  backgroundColor: isSelected ? '#8d2024' : '#fff',
                  color: isSelected ? '#fff' : '#1a1512',
                  fontFamily: 'Roboto Slab, serif',
                  fontSize: '0.95rem',
                  fontWeight: isSelected ? '700' : '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  boxShadow: isSelected ? '0 4px 12px rgba(141, 32, 36, 0.2)' : '0 2px 5px rgba(26, 21, 18, 0.04)'
                }}
              >
                <span>{edition.title}</span>
                <span style={{ fontSize: '0.78rem', opacity: isSelected ? 0.9 : 0.65, fontWeight: 'normal' }}>
                  ({edition.year}) • {edition.photoCount > 0 ? `${edition.photoCount} Photos` : 'Full Report'}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3. SELECTED EDITION CONTENT */}
        <div className="ws-edition-view">
            {/* Header Feature Card for Edition */}
            <div
              style={{
                backgroundColor: '#fff',
                border: '1px solid #d4cbb3',
                borderTop: '4px solid #8d2024',
                borderRadius: '8px',
                padding: '30px',
                boxShadow: '0 6px 18px rgba(26, 21, 18, 0.05)',
                marginBottom: '40px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        backgroundColor: '#8d2024',
                        color: '#fff',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {selectedEdition.badge || 'Winter School'}
                    </span>
                    <span
                      style={{
                        backgroundColor: '#0d4228',
                        color: '#fff',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      Residential Training
                    </span>
                  </div>

                  <h2 style={{ fontFamily: 'Roboto Slab, serif', fontSize: '1.9rem', color: '#1a1512', margin: '6px 0 10px 0' }}>
                    {selectedEdition.title}
                  </h2>

                  <p style={{ fontSize: '1.15rem', color: '#8d2024', fontWeight: '600', margin: '0 0 18px 0', fontFamily: 'Roboto Slab, serif' }}>
                    “{selectedEdition.theme}”
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '0.92rem', color: '#555' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8d2024" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <strong>Dates:</strong> {selectedEdition.dates}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8d2024" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <strong>Venue:</strong> {selectedEdition.venue}
                    </div>

                    {selectedEdition.photoCount > 0 && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0d4228" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                        <strong>Documentation:</strong> {selectedEdition.photoCount} Photos
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* SECTIONS & DAYS */}
            <div className="ws-sections-list" style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
              {selectedEdition.sections.map((sec, secIdx) => (
                <div
                  key={secIdx}
                  className="ws-section-card"
                  style={{
                    backgroundColor: '#fff',
                    border: '1px solid #e8e3d5',
                    borderRadius: '8px',
                    padding: '28px 32px',
                    boxShadow: '0 3px 10px rgba(26, 21, 18, 0.03)'
                  }}
                >
                  {/* Section Title */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      borderBottom: '1px solid #e8e3d5',
                      paddingBottom: '14px',
                      marginBottom: '20px'
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        width: '8px',
                        height: '24px',
                        backgroundColor: '#8d2024',
                        borderRadius: '2px'
                      }}
                    />
                    <h3
                      style={{
                        fontFamily: 'Roboto Slab, serif',
                        fontSize: '1.35rem',
                        color: '#0d4228',
                        margin: 0,
                        fontWeight: '700'
                      }}
                    >
                      {sec.title}
                    </h3>
                  </div>

                  {/* Section Content Items */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    {sec.items.map((item, itIdx) => {
                      if (item.type === 'paragraph') {
                        return (
                          <p
                            key={itIdx}
                            className="p"
                            style={{
                              margin: 0,
                              textAlign: 'justify',
                              fontSize: '1rem',
                              lineHeight: '1.85',
                              color: '#2a2421'
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
                              margin: '20px 0 16px 0',
                              display: 'grid',
                              gridTemplateColumns:
                                count === 1
                                  ? '1fr'
                                  : count === 2
                                  ? 'repeat(auto-fit, minmax(280px, 1fr))'
                                  : 'repeat(auto-fit, minmax(240px, 1fr))',
                              gap: '18px',
                              maxWidth: count === 1 ? '760px' : '100%',
                              marginLeft: count === 1 ? 'auto' : 0,
                              marginRight: count === 1 ? 'auto' : 0
                            }}
                          >
                            {item.images.map((img, imgIdx) => (
                              <div
                                key={imgIdx}
                                onClick={() => openPhotoModal(item.images, imgIdx)}
                                style={{
                                  position: 'relative',
                                  borderRadius: '8px',
                                  overflow: 'hidden',
                                  border: '1px solid #d4cbb3',
                                  backgroundColor: '#14110f',
                                  cursor: 'pointer',
                                  boxShadow: '0 4px 14px rgba(26, 21, 18, 0.08)',
                                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                  aspectRatio: '3/2'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.transform = 'translateY(-3px)';
                                  e.currentTarget.style.boxShadow = '0 8px 22px rgba(26, 21, 18, 0.16)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.transform = 'translateY(0)';
                                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(26, 21, 18, 0.08)';
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
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%)',
                                    color: '#fff',
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center'
                                  }}
                                >
                                  <span
                                    style={{
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      gap: '5px',
                                      fontSize: '0.78rem',
                                      backgroundColor: 'rgba(0,0,0,0.5)',
                                      backdropFilter: 'blur(4px)',
                                      padding: '3px 8px',
                                      borderRadius: '4px',
                                      color: '#fff',
                                      fontWeight: '500'
                                    }}
                                  >
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                      <circle cx="11" cy="11" r="8" />
                                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                      <line x1="11" y1="8" x2="11" y2="14" />
                                      <line x1="8" y1="11" x2="14" y2="11" />
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
              maxWidth: '90vw',
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
                marginTop: '16px',
                color: '#f6f4ee',
                fontSize: '0.95rem',
                textAlign: 'center',
                fontFamily: 'Roboto Slab, serif'
              }}
            >
              <div>{activePhotoList[activePhotoIndex].caption || `${selectedEdition.title} Photo Archive`}</div>
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
