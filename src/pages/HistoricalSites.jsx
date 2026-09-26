import { useEffect, useState, useCallback, useRef } from 'react';
import Breadcrumb from '../components/Breadcrumb';

const PHOTOS = [
    { src: '/assets/historical-site/jalladkhana-historical-site/143233.jpg', caption: 'Jalladkhana Memorial Site' },
    { src: '/assets/historical-site/jalladkhana-historical-site/153599.jpg', caption: 'Excavated Remains Display' },
    { src: '/assets/historical-site/jalladkhana-historical-site/242386.jpg', caption: 'Jalladkhana killing field brick structures' },
    { src: '/assets/historical-site/jalladkhana-historical-site/494588.jpg', caption: 'Lest We Forget memorial plaque' }
];

export default function HistoricalSites() {
    const [activeTab, setActiveTab] = useState('jalladkhana');
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [touchStartX, setTouchStartX] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);

    const filmstripRef = useRef(null);
    const activeThumbRef = useRef(null);
    const stageRef = useRef(null);

    // Drag refs for panning
    const isDragging = useRef(false);
    const startX = useRef(0);
    const startY = useRef(0);
    const scrollLeftStart = useRef(0);
    const scrollTopStart = useRef(0);

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setZoomLevel(1);
        isDragging.current = false;
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = useCallback(() => {
        setLightboxIndex(null);
        setZoomLevel(1);
        isDragging.current = false;
        document.body.style.overflow = '';
    }, []);

    const goNext = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setLightboxIndex((i) => (i + 1) % PHOTOS.length);
        setZoomLevel(1);
        isDragging.current = false;
        setTimeout(() => setIsAnimating(false), 250);
    }, [isAnimating]);

    const goPrev = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setLightboxIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length);
        setZoomLevel(1);
        isDragging.current = false;
        setTimeout(() => setIsAnimating(false), 250);
    }, [isAnimating]);

    const handleZoomIn = (e) => {
        e.stopPropagation();
        setZoomLevel(prev => Math.min(prev + 0.25, 3));
    };

    const handleZoomOut = (e) => {
        e.stopPropagation();
        setZoomLevel(prev => Math.max(prev - 0.25, 1));
    };

    const handleMouseDown = (e) => {
        if (zoomLevel <= 1) return;
        if (e.button !== 0) return; // Left click only
        isDragging.current = true;
        startX.current = e.clientX;
        startY.current = e.clientY;
        scrollLeftStart.current = stageRef.current.scrollLeft;
        scrollTopStart.current = stageRef.current.scrollTop;
        stageRef.current.classList.add('grabbing');
        e.preventDefault();
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        const dx = e.clientX - startX.current;
        const dy = e.clientY - startY.current;
        stageRef.current.scrollLeft = scrollLeftStart.current - dx;
        stageRef.current.scrollTop = scrollTopStart.current - dy;
    };

    const handleMouseUp = () => {
        if (!isDragging.current) return;
        isDragging.current = false;
        if (stageRef.current) {
            stageRef.current.classList.remove('grabbing');
        }
    };

    // Scroll wheel zoom effect
    useEffect(() => {
        const stage = stageRef.current;
        if (!stage) return;

        const handleWheel = (e) => {
            e.preventDefault();
            const zoomSpeed = 0.08;
            setZoomLevel((prev) => {
                const nextZoom = prev - e.deltaY * zoomSpeed * 0.01;
                return Math.min(Math.max(nextZoom, 1), 3);
            });
        };

        stage.addEventListener('wheel', handleWheel, { passive: false });
        return () => stage.removeEventListener('wheel', handleWheel);
    }, [lightboxIndex]);

    useEffect(() => {
        if (lightboxIndex !== null && activeThumbRef.current && filmstripRef.current) {
            activeThumbRef.current.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest',
            });
        }
    }, [lightboxIndex]);

    useEffect(() => {
        document.body.classList.add('page-museum-story');
        document.title = 'Historical Sites | Liberation War Museum';
        return () => {
            document.body.classList.remove('page-museum-story');
            document.body.style.overflow = '';
        };
    }, []);

    useEffect(() => {
        const handleKey = (e) => {
            if (lightboxIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [lightboxIndex, closeLightbox, goNext, goPrev]);

    const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);

    const handleTouchEnd = (e) => {
        if (touchStartX === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 50) dx < 0 ? goNext() : goPrev();
        setTouchStartX(null);
    };

    return (
        <>
            {/* HERO */}
            <section className="hero hero--museum-story">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Historical Sites</div>
                        <div className="hero-card__desc">
                            Genocide locations, mass graves, and historical landmarks commemorated by the Liberation War Museum.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <main className="museum-story-content">
                {/* TABS CONTAINER */}
                <section className="block" style={{ paddingBottom: 0 }}>
                    <div className="separator"></div>
                    <Breadcrumb />
                    <div className="historical-tabs">
                        <button
                            className={`historical-tab-btn ${activeTab === 'jalladkhana' ? 'historical-tab-btn--active' : ''}`}
                            onClick={() => setActiveTab('jalladkhana')}
                        >
                            Jalladkhana Killing Field
                        </button>
                        <button
                            className="historical-tab-btn"
                            disabled
                            style={{ opacity: 0.5, cursor: 'not-allowed' }}
                            title="Other sites coming soon"
                        >
                            Other Sites (Coming Soon)
                        </button>
                    </div>
                </section>

                {activeTab === 'jalladkhana' && (
                    <>
                        {/* Premium Editorial Feature Layout */}
                        <section className="block">
                            <div className="block__cap">
                                <span className="cap__title">Jalladkhana Historical Site</span>
                            </div>
                            <div className="memorial-layout">
                                <p className="memorial-lead-p">
                                    Jalladkhana Killing Field, is a mass grave site in Mirpur, Dhaka used in the 1971 Bangladesh genocide by Pakistan Army and its local collaborators during the Bangladesh Liberation war.
                                </p>
                                <div className="memorial-grid">
                                    <div>
                                        <p className="p">
                                            The Liberation War Museum in Dhaka, Bangladesh was established in 1996. It commemorates the heroic struggle of the Bengali nation for their democratic and national rights.
                                        </p>
                                        <p className="p">
                                            The Liberation War Museum is located in the centre of Dhaka city and was inaugurated on March 22, 1996. It is registered as a Society with the Registrar of Joint Stock Companies and Firms, Bangladesh.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="p">
                                            Jalladkhana Killing Field, is a mass grave site in Mirpur, Dhaka used in the 1971 Bangladesh genocide by Pakistan Army and its local collaborators during the Bangladesh Liberation war.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Photo Gallery Grid */}
                        <section className="block" style={{ paddingTop: 0 }}>
                            <div className="block__cap">
                                <span className="cap__title">Photographic Record</span>
                            </div>
                            <div className="photo-archive-grid" style={{ marginTop: '20px' }}>
                                {PHOTOS.map((photo, index) => (
                                    <button
                                        key={photo.src}
                                        className="photo-archive-card"
                                        onClick={() => openLightbox(index)}
                                        aria-label={`Open ${photo.caption}`}
                                    >
                                        <div className="photo-archive-card__frame">
                                            <img
                                                src={photo.src}
                                                alt={photo.caption}
                                                className="photo-archive-card__img"
                                                loading="lazy"
                                            />
                                            <div className="photo-archive-card__overlay">
                                                <span className="photo-archive-card__zoom-icon">
                                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <circle cx="11" cy="11" r="8" />
                                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                                        <line x1="11" y1="8" x2="11" y2="14" />
                                                        <line x1="8" y1="11" x2="14" y2="11" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </section>
                    </>
                )}
            </main>

            {/* LIGHTBOX MODAL */}
            {lightboxIndex !== null && (
                <div
                    className="lightbox-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Photo lightbox"
                    onClick={(e) => e.target === e.currentTarget && closeLightbox()}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Zoom controls */}
                    <div className="lightbox-zoom-controls" onClick={(e) => e.stopPropagation()}>
                        <button onClick={handleZoomOut} disabled={zoomLevel <= 1}>−</button>
                        <span>{Math.round(zoomLevel * 100)}%</span>
                        <button onClick={handleZoomIn} disabled={zoomLevel >= 3}>+</button>
                    </div>

                    <button className="lightbox-modal__close" onClick={closeLightbox} aria-label="Close">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    <button className="lightbox-modal__prev" onClick={goPrev} aria-label="Previous photo">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    <div
                        className={`lightbox-modal__stage${zoomLevel > 1 ? ' zoomed' : ''}`}
                        ref={stageRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: zoomLevel > 1 ? 'flex-start' : 'center',
                            overflow: 'auto'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                margin: 'auto',
                                maxWidth: zoomLevel > 1 ? 'none' : '90vw',
                                maxHeight: zoomLevel > 1 ? 'none' : 'calc(100vh - 250px)'
                            }}
                        >
                            <img
                                key={lightboxIndex}
                                src={PHOTOS[lightboxIndex].src}
                                alt={PHOTOS[lightboxIndex].caption}
                                className="lightbox-modal__img"
                                draggable={false}
                                onDragStart={(e) => e.preventDefault()}
                                style={{
                                    height: `calc((100vh - 280px) * ${zoomLevel})`,
                                    width: 'auto',
                                    maxWidth: zoomLevel > 1 ? 'none' : '100%',
                                    maxHeight: zoomLevel > 1 ? 'none' : 'calc(100vh - 280px)',
                                    transition: 'height 0.15s ease'
                                }}
                            />
                            <div className="lightbox-modal__caption" style={{ marginTop: '15px' }}>
                                {PHOTOS[lightboxIndex].caption}
                            </div>
                        </div>
                    </div>

                    <div className="lightbox-modal__dock">
                        <div className="lightbox-modal__counter">
                            Photo {lightboxIndex + 1} of {PHOTOS.length}
                        </div>
                        <div className="lightbox-modal__filmstrip" ref={filmstripRef}>
                            {PHOTOS.map((photo, index) => (
                                <button
                                    key={photo.src}
                                    ref={index === lightboxIndex ? activeThumbRef : null}
                                    className={`lightbox-modal__thumb${index === lightboxIndex ? ' lightbox-modal__thumb--active' : ''}`}
                                    onClick={() => setLightboxIndex(index)}
                                    aria-label={`Go to ${photo.caption}`}
                                >
                                    <img src={photo.src} alt={photo.caption} loading="lazy" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className="lightbox-modal__next" onClick={goNext} aria-label="Next photo">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                </div>
            )}
        </>
    );
}
