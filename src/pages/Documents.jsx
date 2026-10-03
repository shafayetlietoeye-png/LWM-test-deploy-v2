import { useEffect, useState, useCallback, useRef } from 'react';
import Breadcrumb from '../components/Breadcrumb';

const PHOTOS = [
    { src: '/assets/documents/115132.jpg', caption: 'Historical Document — No. 1' },
    { src: '/assets/documents/124931.jpg', caption: 'Historical Document — No. 2' },
    { src: '/assets/documents/139768.jpg', caption: 'Historical Document — No. 3' },
    { src: '/assets/documents/141884.jpg', caption: 'Historical Document — No. 4' },
    { src: '/assets/documents/143051.jpg', caption: 'Historical Document — No. 5' },
    { src: '/assets/documents/143439.jpg', caption: 'Historical Document — No. 6' },
    { src: '/assets/documents/150130.jpg', caption: 'Historical Document — No. 7' },
    { src: '/assets/documents/151278.jpg', caption: 'Historical Document — No. 8' },
    { src: '/assets/documents/152363.jpg', caption: 'Historical Document — No. 9' },
    { src: '/assets/documents/159165.jpg', caption: 'Historical Document — No. 10' },
    { src: '/assets/documents/183566.jpg', caption: 'Historical Document — No. 11' },
    { src: '/assets/documents/193780.jpg', caption: 'Historical Document — No. 12' },
    { src: '/assets/documents/217645.jpg', caption: 'Historical Document — No. 13' },
    { src: '/assets/documents/222299.jpg', caption: 'Historical Document — No. 14' },
    { src: '/assets/documents/228110.jpg', caption: 'Historical Document — No. 15' },
    { src: '/assets/documents/232225.jpg', caption: 'Historical Document — No. 16' },
    { src: '/assets/documents/243944.jpg', caption: 'Historical Document — No. 17' },
    { src: '/assets/documents/248470.jpg', caption: 'Historical Document — No. 18' },
    { src: '/assets/documents/252827.jpg', caption: 'Historical Document — No. 19' },
    { src: '/assets/documents/259957.jpg', caption: 'Historical Document — No. 20' },
    { src: '/assets/documents/267340.jpg', caption: 'Historical Document — No. 21' },
    { src: '/assets/documents/269733.jpg', caption: 'Historical Document — No. 22' },
    { src: '/assets/documents/271651.jpg', caption: 'Historical Document — No. 23' },
    { src: '/assets/documents/298020.jpg', caption: 'Historical Document — No. 24' },
    { src: '/assets/documents/302577.jpg', caption: 'Historical Document — No. 25' },
    { src: '/assets/documents/323680.jpg', caption: 'Historical Document — No. 26' },
    { src: '/assets/documents/327313.jpg', caption: 'Historical Document — No. 27' },
    { src: '/assets/documents/333701.jpg', caption: 'Historical Document — No. 28' },
    { src: '/assets/documents/360482.jpg', caption: 'Historical Document — No. 29' },
    { src: '/assets/documents/366115.jpg', caption: 'Historical Document — No. 30' },
    { src: '/assets/documents/380122.jpg', caption: 'Historical Document — No. 31' },
    { src: '/assets/documents/391432.jpg', caption: 'Historical Document — No. 32' },
    { src: '/assets/documents/398963.jpg', caption: 'Historical Document — No. 33' },
    { src: '/assets/documents/401479.jpg', caption: 'Historical Document — No. 34' },
    { src: '/assets/documents/411467.jpg', caption: 'Historical Document — No. 35' },
    { src: '/assets/documents/425648.jpg', caption: 'Historical Document — No. 36' },
    { src: '/assets/documents/432497.jpg', caption: 'Historical Document — No. 37' },
    { src: '/assets/documents/437757.jpg', caption: 'Historical Document — No. 38' },
    { src: '/assets/documents/438407.jpg', caption: 'Historical Document — No. 39' },
    { src: '/assets/documents/454354.jpg', caption: 'Historical Document — No. 40' },
    { src: '/assets/documents/461576.jpg', caption: 'Historical Document — No. 41' },
    { src: '/assets/documents/465709.jpg', caption: 'Historical Document — No. 42' },
    { src: '/assets/documents/486654.jpg', caption: 'Historical Document — No. 43' },
    { src: '/assets/documents/503823.jpg', caption: 'Historical Document — No. 44' },
    { src: '/assets/documents/525648.jpg', caption: 'Historical Document — No. 45' },
    { src: '/assets/documents/532756.jpg', caption: 'Historical Document — No. 46' },
    { src: '/assets/documents/535495.jpg', caption: 'Historical Document — No. 47' },
    { src: '/assets/documents/543912.jpg', caption: 'Historical Document — No. 48' },
    { src: '/assets/documents/559714.jpg', caption: 'Historical Document — No. 49' },
    { src: '/assets/documents/561084.jpg', caption: 'Historical Document — No. 50' },
    { src: '/assets/documents/573643.jpg', caption: 'Historical Document — No. 51' },
    { src: '/assets/documents/593121.jpg', caption: 'Historical Document — No. 52' },
    { src: '/assets/documents/619391.jpg', caption: 'Historical Document — No. 53' },
    { src: '/assets/documents/621301.jpg', caption: 'Historical Document — No. 54' },
    { src: '/assets/documents/633898.jpg', caption: 'Historical Document — No. 55' },
    { src: '/assets/documents/669786.jpg', caption: 'Historical Document — No. 56' },
    { src: '/assets/documents/694846.jpg', caption: 'Historical Document — No. 57' },
    { src: '/assets/documents/700855.jpg', caption: 'Historical Document — No. 58' },
    { src: '/assets/documents/702078.jpg', caption: 'Historical Document — No. 59' },
    { src: '/assets/documents/712860.jpg', caption: 'Historical Document — No. 60' },
    { src: '/assets/documents/737685.jpg', caption: 'Historical Document — No. 61' },
    { src: '/assets/documents/750728.jpg', caption: 'Historical Document — No. 62' },
    { src: '/assets/documents/753289.jpg', caption: 'Historical Document — No. 63' },
    { src: '/assets/documents/757505.jpg', caption: 'Historical Document — No. 64' },
    { src: '/assets/documents/777514.jpg', caption: 'Historical Document — No. 65' },
    { src: '/assets/documents/790789.jpg', caption: 'Historical Document — No. 66' },
    { src: '/assets/documents/791345.jpg', caption: 'Historical Document — No. 67' },
    { src: '/assets/documents/799265.jpg', caption: 'Historical Document — No. 68' },
    { src: '/assets/documents/809144.jpg', caption: 'Historical Document — No. 69' },
    { src: '/assets/documents/818895.jpg', caption: 'Historical Document — No. 70' },
    { src: '/assets/documents/821554.jpg', caption: 'Historical Document — No. 71' },
    { src: '/assets/documents/844997.jpg', caption: 'Historical Document — No. 72' },
    { src: '/assets/documents/869386.jpg', caption: 'Historical Document — No. 73' },
    { src: '/assets/documents/877728.jpg', caption: 'Historical Document — No. 74' },
    { src: '/assets/documents/880377.jpg', caption: 'Historical Document — No. 75' },
    { src: '/assets/documents/884676.jpg', caption: 'Historical Document — No. 76' },
    { src: '/assets/documents/889491.jpg', caption: 'Historical Document — No. 77' },
    { src: '/assets/documents/922012.jpg', caption: 'Historical Document — No. 78' },
    { src: '/assets/documents/924223.jpg', caption: 'Historical Document — No. 79' },
    { src: '/assets/documents/924413.jpg', caption: 'Historical Document — No. 80' },
    { src: '/assets/documents/927087.jpg', caption: 'Historical Document — No. 81' },
    { src: '/assets/documents/928560.jpg', caption: 'Historical Document — No. 82' },
    { src: '/assets/documents/939201.jpg', caption: 'Historical Document — No. 83' },
    { src: '/assets/documents/940349.jpg', caption: 'Historical Document — No. 84' },
    { src: '/assets/documents/949526.jpg', caption: 'Historical Document — No. 85' },
    { src: '/assets/documents/950162.jpg', caption: 'Historical Document — No. 86' },
    { src: '/assets/documents/953426.jpg', caption: 'Historical Document — No. 87' },
    { src: '/assets/documents/960253.jpg', caption: 'Historical Document — No. 88' },
    { src: '/assets/documents/960800.jpg', caption: 'Historical Document — No. 89' },
    { src: '/assets/documents/960954.jpg', caption: 'Historical Document — No. 90' },
    { src: '/assets/documents/968355.jpg', caption: 'Historical Document — No. 91' },
    { src: '/assets/documents/981878.jpg', caption: 'Historical Document — No. 92' },
    { src: '/assets/documents/986974.jpg', caption: 'Historical Document — No. 93' },
    { src: '/assets/documents/998903.jpg', caption: 'Historical Document — No. 94' },
    { src: '/assets/documents/999378.jpg', caption: 'Historical Document — No. 95' },
];

export default function Documents() {
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [touchStartX, setTouchStartX] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);
    const filmstripRef = useRef(null);
    const activeThumbRef = useRef(null);
    const stageRef = useRef(null);
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
        document.title = 'Documents | Liberation War Museum';
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

    useEffect(() => {
        const stage = stageRef.current;
        if (!stage) return;

        const handleWheel = (e) => {
            e.preventDefault();
            if (e.deltaY < 0) {
                setZoomLevel(prev => Math.min(prev + 0.1, 3));
            } else {
                setZoomLevel(prev => Math.max(prev - 0.1, 1));
            }
        };

        stage.addEventListener('wheel', handleWheel, { passive: false });
        return () => {
            stage.removeEventListener('wheel', handleWheel);
        };
    }, [lightboxIndex]);

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
                        <div className="hero-card__title">Documents</div>
                        <div className="hero-card__desc">
                            Archives &amp; Resources — Historical documents from Bangladesh's 1971 Liberation War.
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
                            The Liberation War Museum's Documents collection preserves rare historical papers, letters,
                            proclamations, and records from the 1971 Liberation War. These documents offer an
                            invaluable primary source of evidence for researchers, historians, and the public.
                        </p>
                    </div>
                </section>

                <section className="block block--photo-archive block--newspaper-page">
                    {/* Vintage Newspaper Banner */}
                    <div className="newspaper-banner">
                        <h1 className="newspaper-banner__title">Historical Documents</h1>
                    </div>

                    <div className="photo-archive-grid">
                        {PHOTOS.map((photo, index) => (
                            <button
                                key={photo.src}
                                className="photo-archive-card"
                                onClick={() => openLightbox(index)}
                                aria-label={`Open ${photo.caption}`}
                            >
                                {/* Headline above image */}
                                <div className="photo-archive-card__headline">{photo.caption}</div>
                                
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
                                <div className="photo-archive-card__caption">Historical Document — No. {index + 1}</div>
                            </button>
                        ))}
                    </div>
                </section>
            </main>

            {/* LIGHTBOX MODAL */}
            {lightboxIndex !== null && (
                <div
                    className="lightbox-modal lightbox-modal--newspaper"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Document lightbox"
                    onClick={(e) => e.target === e.currentTarget && closeLightbox()}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
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

                    <button className="lightbox-modal__prev" onClick={goPrev} aria-label="Previous document">
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
                    >
                        <div className="lightbox-modal__stage-content">
                            <div 
                                className="lightbox-modal__card-frame"
                                style={{
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
                            </div>
                            <div className="lightbox-modal__caption-label">
                                {PHOTOS[lightboxIndex].caption}
                            </div>
                        </div>
                    </div>

                    <div className="lightbox-modal__dock">
                        <div className="lightbox-modal__counter">
                            Document — No. {lightboxIndex + 1}
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

                    <button className="lightbox-modal__next" onClick={goNext} aria-label="Next document">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                </div>
            )}
        </>
    );
}
