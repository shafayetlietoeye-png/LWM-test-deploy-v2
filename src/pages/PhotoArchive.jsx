import { useEffect, useState, useCallback, useRef } from 'react';
import Breadcrumb from '../components/Breadcrumb';

const PHOTOS = [
    { src: '/assets/photo%20archive/207668.jpg', caption: 'Liberation War Archive — Photo 1' },
    { src: '/assets/photo%20archive/218446.jpg', caption: 'Liberation War Archive — Photo 2' },
    { src: '/assets/photo%20archive/260388.jpg', caption: 'Liberation War Archive — Photo 3' },
    { src: '/assets/photo%20archive/261477.jpg', caption: 'Liberation War Archive — Photo 4' },
    { src: '/assets/photo%20archive/283915.jpg', caption: 'Liberation War Archive — Photo 5' },
    { src: '/assets/photo%20archive/321889.jpg', caption: 'Liberation War Archive — Photo 6' },
    { src: '/assets/photo%20archive/343335.jpg', caption: 'Liberation War Archive — Photo 7' },
    { src: '/assets/photo%20archive/390695.jpg', caption: 'Liberation War Archive — Photo 8' },
    { src: '/assets/photo%20archive/472804.jpg', caption: 'Liberation War Archive — Photo 9' },
    { src: '/assets/photo%20archive/566399.jpg', caption: 'Liberation War Archive — Photo 10' },
    { src: '/assets/photo%20archive/749107.jpg', caption: 'Liberation War Archive — Photo 11' },
    { src: '/assets/photo%20archive/768996.jpg', caption: 'Liberation War Archive — Photo 12' },
    { src: '/assets/photo%20archive/795172.jpg', caption: 'Liberation War Archive — Photo 13' },
    { src: '/assets/photo%20archive/837050.jpg', caption: 'Liberation War Archive — Photo 14' },
    { src: '/assets/photo%20archive/873070.jpg', caption: 'Liberation War Archive — Photo 15' },
    { src: '/assets/photo%20archive/874001.jpg', caption: 'Liberation War Archive — Photo 16' },
    { src: '/assets/photo%20archive/969367.jpg', caption: 'Liberation War Archive — Photo 17' },
    { src: '/assets/photo%20archive/979003.jpg', caption: 'Liberation War Archive — Photo 18' },
];

export default function PhotoArchive() {
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

    // Auto-scroll active thumbnail into view in filmstrip
    useEffect(() => {
        if (lightboxIndex !== null && activeThumbRef.current && filmstripRef.current) {
            activeThumbRef.current.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest',
            });
        }
    }, [lightboxIndex]);

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
        document.body.classList.add('page-museum-story');
        document.title = 'Photo Archive | Liberation War Museum';
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

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        if (touchStartX === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 50) {
            dx < 0 ? goNext() : goPrev();
        }
        setTouchStartX(null);
    };

    return (
        <>
            {/* HERO */}
            <section className="hero hero--museum-story">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Photo Archive</div>
                        <div className="hero-card__desc">
                            Archives &amp; Resources — A visual record of Bangladesh's Liberation War of 1971.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <main className="museum-story-content">
                <section className="block">
                    <Breadcrumb />
                    <div className="separator"></div>
                    <div className="block__content">
                        <p className="p">
                            The Liberation War Museum's Photo Archive holds an extensive collection of historical photographs
                            documenting Bangladesh's struggle for independence in 1971. These images capture pivotal moments,
                            key figures, and the human stories that shaped the nation.
                        </p>
                    </div>
                </section>

                <section className="block block--photo-archive">
                    <div className="photo-archive-grid">
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
                                <div className="photo-archive-card__caption">{photo.caption}</div>
                            </button>
                        ))}
                    </div>
                </section>
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

                    {/* Close button — fixed top-right */}
                    <button className="lightbox-modal__close" onClick={closeLightbox} aria-label="Close">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {/* Prev button — fixed left center */}
                    <button className="lightbox-modal__prev" onClick={goPrev} aria-label="Previous photo">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    {/* Image stage — fills space above the dock */}
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

                    {/* Fixed bottom dock: counter + filmstrip */}
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

                    {/* Next button — fixed right center */}
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
