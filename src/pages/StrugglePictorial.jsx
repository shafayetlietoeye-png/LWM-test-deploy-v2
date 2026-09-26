import { useEffect, useState, useCallback, useRef } from 'react';
import Breadcrumb from '../components/Breadcrumb';

const PHOTOS = [
    { src: '/assets/struggle-of-bangladesh-pictorial/113293.jpg', caption: 'Struggle of Bangladesh — Photo 1' },
    { src: '/assets/struggle-of-bangladesh-pictorial/123132.jpg', caption: 'Struggle of Bangladesh — Photo 2' },
    { src: '/assets/struggle-of-bangladesh-pictorial/126162.jpg', caption: 'Struggle of Bangladesh — Photo 3' },
    { src: '/assets/struggle-of-bangladesh-pictorial/131406.jpg', caption: 'Struggle of Bangladesh — Photo 4' },
    { src: '/assets/struggle-of-bangladesh-pictorial/136558.jpg', caption: 'Struggle of Bangladesh — Photo 5' },
    { src: '/assets/struggle-of-bangladesh-pictorial/137779.jpg', caption: 'Struggle of Bangladesh — Photo 6' },
    { src: '/assets/struggle-of-bangladesh-pictorial/140139.jpg', caption: 'Struggle of Bangladesh — Photo 7' },
    { src: '/assets/struggle-of-bangladesh-pictorial/143168.jpg', caption: 'Struggle of Bangladesh — Photo 8' },
    { src: '/assets/struggle-of-bangladesh-pictorial/143580.jpg', caption: 'Struggle of Bangladesh — Photo 9' },
    { src: '/assets/struggle-of-bangladesh-pictorial/144672.jpg', caption: 'Struggle of Bangladesh — Photo 10' },
    { src: '/assets/struggle-of-bangladesh-pictorial/150153.jpg', caption: 'Struggle of Bangladesh — Photo 11' },
    { src: '/assets/struggle-of-bangladesh-pictorial/154055.jpg', caption: 'Struggle of Bangladesh — Photo 12' },
    { src: '/assets/struggle-of-bangladesh-pictorial/155772.jpg', caption: 'Struggle of Bangladesh — Photo 13' },
    { src: '/assets/struggle-of-bangladesh-pictorial/158614.jpg', caption: 'Struggle of Bangladesh — Photo 14' },
    { src: '/assets/struggle-of-bangladesh-pictorial/160496.jpg', caption: 'Struggle of Bangladesh — Photo 15' },
    { src: '/assets/struggle-of-bangladesh-pictorial/163614.jpg', caption: 'Struggle of Bangladesh — Photo 16' },
    { src: '/assets/struggle-of-bangladesh-pictorial/166375.jpg', caption: 'Struggle of Bangladesh — Photo 17' },
    { src: '/assets/struggle-of-bangladesh-pictorial/170235.jpg', caption: 'Struggle of Bangladesh — Photo 18' },
    { src: '/assets/struggle-of-bangladesh-pictorial/170388.jpg', caption: 'Struggle of Bangladesh — Photo 19' },
    { src: '/assets/struggle-of-bangladesh-pictorial/180449.jpg', caption: 'Struggle of Bangladesh — Photo 20' },
    { src: '/assets/struggle-of-bangladesh-pictorial/181740.jpg', caption: 'Struggle of Bangladesh — Photo 21' },
    { src: '/assets/struggle-of-bangladesh-pictorial/181978.jpg', caption: 'Struggle of Bangladesh — Photo 22' },
    { src: '/assets/struggle-of-bangladesh-pictorial/186288.jpg', caption: 'Struggle of Bangladesh — Photo 23' },
    { src: '/assets/struggle-of-bangladesh-pictorial/187991.jpg', caption: 'Struggle of Bangladesh — Photo 24' },
    { src: '/assets/struggle-of-bangladesh-pictorial/193527.jpg', caption: 'Struggle of Bangladesh — Photo 25' },
    { src: '/assets/struggle-of-bangladesh-pictorial/194836.jpg', caption: 'Struggle of Bangladesh — Photo 26' },
    { src: '/assets/struggle-of-bangladesh-pictorial/203828.jpg', caption: 'Struggle of Bangladesh — Photo 27' },
    { src: '/assets/struggle-of-bangladesh-pictorial/205862.jpg', caption: 'Struggle of Bangladesh — Photo 28' },
    { src: '/assets/struggle-of-bangladesh-pictorial/212355.jpg', caption: 'Struggle of Bangladesh — Photo 29' },
    { src: '/assets/struggle-of-bangladesh-pictorial/217869.jpg', caption: 'Struggle of Bangladesh — Photo 30' },
    { src: '/assets/struggle-of-bangladesh-pictorial/219326.jpg', caption: 'Struggle of Bangladesh — Photo 31' },
    { src: '/assets/struggle-of-bangladesh-pictorial/220188.jpg', caption: 'Struggle of Bangladesh — Photo 32' },
    { src: '/assets/struggle-of-bangladesh-pictorial/226985.jpg', caption: 'Struggle of Bangladesh — Photo 33' },
    { src: '/assets/struggle-of-bangladesh-pictorial/240227.jpg', caption: 'Struggle of Bangladesh — Photo 34' },
    { src: '/assets/struggle-of-bangladesh-pictorial/240462.jpg', caption: 'Struggle of Bangladesh — Photo 35' },
    { src: '/assets/struggle-of-bangladesh-pictorial/241243.jpg', caption: 'Struggle of Bangladesh — Photo 36' },
    { src: '/assets/struggle-of-bangladesh-pictorial/242855.jpg', caption: 'Struggle of Bangladesh — Photo 37' },
    { src: '/assets/struggle-of-bangladesh-pictorial/245890.jpg', caption: 'Struggle of Bangladesh — Photo 38' },
    { src: '/assets/struggle-of-bangladesh-pictorial/255159.jpg', caption: 'Struggle of Bangladesh — Photo 39' },
    { src: '/assets/struggle-of-bangladesh-pictorial/257060.jpg', caption: 'Struggle of Bangladesh — Photo 40' },
    { src: '/assets/struggle-of-bangladesh-pictorial/263140.jpg', caption: 'Struggle of Bangladesh — Photo 41' },
    { src: '/assets/struggle-of-bangladesh-pictorial/271037.jpg', caption: 'Struggle of Bangladesh — Photo 42' },
    { src: '/assets/struggle-of-bangladesh-pictorial/272441.jpg', caption: 'Struggle of Bangladesh — Photo 43' },
    { src: '/assets/struggle-of-bangladesh-pictorial/273778.jpg', caption: 'Struggle of Bangladesh — Photo 44' },
    { src: '/assets/struggle-of-bangladesh-pictorial/287153.jpg', caption: 'Struggle of Bangladesh — Photo 45' },
    { src: '/assets/struggle-of-bangladesh-pictorial/289043.jpg', caption: 'Struggle of Bangladesh — Photo 46' },
    { src: '/assets/struggle-of-bangladesh-pictorial/296383.jpg', caption: 'Struggle of Bangladesh — Photo 47' },
    { src: '/assets/struggle-of-bangladesh-pictorial/300382.jpg', caption: 'Struggle of Bangladesh — Photo 48' },
    { src: '/assets/struggle-of-bangladesh-pictorial/301711.jpg', caption: 'Struggle of Bangladesh — Photo 49' },
    { src: '/assets/struggle-of-bangladesh-pictorial/307415.jpg', caption: 'Struggle of Bangladesh — Photo 50' },
    { src: '/assets/struggle-of-bangladesh-pictorial/312370.jpg', caption: 'Struggle of Bangladesh — Photo 51' },
    { src: '/assets/struggle-of-bangladesh-pictorial/314312.jpg', caption: 'Struggle of Bangladesh — Photo 52' },
    { src: '/assets/struggle-of-bangladesh-pictorial/330658.jpg', caption: 'Struggle of Bangladesh — Photo 53' },
    { src: '/assets/struggle-of-bangladesh-pictorial/343880.jpg', caption: 'Struggle of Bangladesh — Photo 54' },
    { src: '/assets/struggle-of-bangladesh-pictorial/352463.jpg', caption: 'Struggle of Bangladesh — Photo 55' },
    { src: '/assets/struggle-of-bangladesh-pictorial/352513.jpg', caption: 'Struggle of Bangladesh — Photo 56' },
    { src: '/assets/struggle-of-bangladesh-pictorial/363657.jpg', caption: 'Struggle of Bangladesh — Photo 57' },
    { src: '/assets/struggle-of-bangladesh-pictorial/364247.jpg', caption: 'Struggle of Bangladesh — Photo 58' },
    { src: '/assets/struggle-of-bangladesh-pictorial/366285.jpg', caption: 'Struggle of Bangladesh — Photo 59' },
    { src: '/assets/struggle-of-bangladesh-pictorial/367681.jpg', caption: 'Struggle of Bangladesh — Photo 60' },
    { src: '/assets/struggle-of-bangladesh-pictorial/371962.jpg', caption: 'Struggle of Bangladesh — Photo 61' },
    { src: '/assets/struggle-of-bangladesh-pictorial/395605.jpg', caption: 'Struggle of Bangladesh — Photo 62' },
    { src: '/assets/struggle-of-bangladesh-pictorial/397651.jpg', caption: 'Struggle of Bangladesh — Photo 63' },
    { src: '/assets/struggle-of-bangladesh-pictorial/399409.jpg', caption: 'Struggle of Bangladesh — Photo 64' },
    { src: '/assets/struggle-of-bangladesh-pictorial/404807.jpg', caption: 'Struggle of Bangladesh — Photo 65' },
    { src: '/assets/struggle-of-bangladesh-pictorial/405336.jpg', caption: 'Struggle of Bangladesh — Photo 66' },
    { src: '/assets/struggle-of-bangladesh-pictorial/409000.jpg', caption: 'Struggle of Bangladesh — Photo 67' },
    { src: '/assets/struggle-of-bangladesh-pictorial/413795.jpg', caption: 'Struggle of Bangladesh — Photo 68' },
    { src: '/assets/struggle-of-bangladesh-pictorial/421043.jpg', caption: 'Struggle of Bangladesh — Photo 69' },
    { src: '/assets/struggle-of-bangladesh-pictorial/421900.jpg', caption: 'Struggle of Bangladesh — Photo 70' },
    { src: '/assets/struggle-of-bangladesh-pictorial/423635.jpg', caption: 'Struggle of Bangladesh — Photo 71' },
    { src: '/assets/struggle-of-bangladesh-pictorial/445556.jpg', caption: 'Struggle of Bangladesh — Photo 72' },
    { src: '/assets/struggle-of-bangladesh-pictorial/453011.jpg', caption: 'Struggle of Bangladesh — Photo 73' },
    { src: '/assets/struggle-of-bangladesh-pictorial/462006.jpg', caption: 'Struggle of Bangladesh — Photo 74' },
    { src: '/assets/struggle-of-bangladesh-pictorial/462422.jpg', caption: 'Struggle of Bangladesh — Photo 75' },
    { src: '/assets/struggle-of-bangladesh-pictorial/468002.jpg', caption: 'Struggle of Bangladesh — Photo 76' },
    { src: '/assets/struggle-of-bangladesh-pictorial/469365.jpg', caption: 'Struggle of Bangladesh — Photo 77' },
    { src: '/assets/struggle-of-bangladesh-pictorial/473158.jpg', caption: 'Struggle of Bangladesh — Photo 78' },
    { src: '/assets/struggle-of-bangladesh-pictorial/479375.jpg', caption: 'Struggle of Bangladesh — Photo 79' },
    { src: '/assets/struggle-of-bangladesh-pictorial/480701.jpg', caption: 'Struggle of Bangladesh — Photo 80' },
    { src: '/assets/struggle-of-bangladesh-pictorial/481600.jpg', caption: 'Struggle of Bangladesh — Photo 81' },
    { src: '/assets/struggle-of-bangladesh-pictorial/483999.jpg', caption: 'Struggle of Bangladesh — Photo 82' },
    { src: '/assets/struggle-of-bangladesh-pictorial/486303.jpg', caption: 'Struggle of Bangladesh — Photo 83' },
    { src: '/assets/struggle-of-bangladesh-pictorial/487825.jpg', caption: 'Struggle of Bangladesh — Photo 84' },
    { src: '/assets/struggle-of-bangladesh-pictorial/497036.jpg', caption: 'Struggle of Bangladesh — Photo 85' },
    { src: '/assets/struggle-of-bangladesh-pictorial/497394.jpg', caption: 'Struggle of Bangladesh — Photo 86' },
    { src: '/assets/struggle-of-bangladesh-pictorial/505532.jpg', caption: 'Struggle of Bangladesh — Photo 87' },
    { src: '/assets/struggle-of-bangladesh-pictorial/507578.jpg', caption: 'Struggle of Bangladesh — Photo 88' },
    { src: '/assets/struggle-of-bangladesh-pictorial/507778.jpg', caption: 'Struggle of Bangladesh — Photo 89' },
    { src: '/assets/struggle-of-bangladesh-pictorial/519386.jpg', caption: 'Struggle of Bangladesh — Photo 90' },
    { src: '/assets/struggle-of-bangladesh-pictorial/527788.jpg', caption: 'Struggle of Bangladesh — Photo 91' },
    { src: '/assets/struggle-of-bangladesh-pictorial/531428.jpg', caption: 'Struggle of Bangladesh — Photo 92' },
    { src: '/assets/struggle-of-bangladesh-pictorial/544122.jpg', caption: 'Struggle of Bangladesh — Photo 93' },
    { src: '/assets/struggle-of-bangladesh-pictorial/545019.jpg', caption: 'Struggle of Bangladesh — Photo 94' },
    { src: '/assets/struggle-of-bangladesh-pictorial/550033.jpg', caption: 'Struggle of Bangladesh — Photo 95' },
    { src: '/assets/struggle-of-bangladesh-pictorial/552836.jpg', caption: 'Struggle of Bangladesh — Photo 96' },
    { src: '/assets/struggle-of-bangladesh-pictorial/576828.jpg', caption: 'Struggle of Bangladesh — Photo 97' },
    { src: '/assets/struggle-of-bangladesh-pictorial/587067.jpg', caption: 'Struggle of Bangladesh — Photo 98' },
    { src: '/assets/struggle-of-bangladesh-pictorial/591681.jpg', caption: 'Struggle of Bangladesh — Photo 99' },
    { src: '/assets/struggle-of-bangladesh-pictorial/593459.jpg', caption: 'Struggle of Bangladesh — Photo 100' },
    { src: '/assets/struggle-of-bangladesh-pictorial/594288.jpg', caption: 'Struggle of Bangladesh — Photo 101' },
    { src: '/assets/struggle-of-bangladesh-pictorial/602031.jpg', caption: 'Struggle of Bangladesh — Photo 102' },
    { src: '/assets/struggle-of-bangladesh-pictorial/614461.jpg', caption: 'Struggle of Bangladesh — Photo 103' },
    { src: '/assets/struggle-of-bangladesh-pictorial/620667.jpg', caption: 'Struggle of Bangladesh — Photo 104' },
    { src: '/assets/struggle-of-bangladesh-pictorial/630279.jpg', caption: 'Struggle of Bangladesh — Photo 105' },
    { src: '/assets/struggle-of-bangladesh-pictorial/641564.jpg', caption: 'Struggle of Bangladesh — Photo 106' },
    { src: '/assets/struggle-of-bangladesh-pictorial/643510.jpg', caption: 'Struggle of Bangladesh — Photo 107' },
    { src: '/assets/struggle-of-bangladesh-pictorial/648124.jpg', caption: 'Struggle of Bangladesh — Photo 108' },
    { src: '/assets/struggle-of-bangladesh-pictorial/654918.jpg', caption: 'Struggle of Bangladesh — Photo 109' },
    { src: '/assets/struggle-of-bangladesh-pictorial/663203.jpg', caption: 'Struggle of Bangladesh — Photo 110' },
    { src: '/assets/struggle-of-bangladesh-pictorial/674458.jpg', caption: 'Struggle of Bangladesh — Photo 111' },
    { src: '/assets/struggle-of-bangladesh-pictorial/679001.jpg', caption: 'Struggle of Bangladesh — Photo 112' },
    { src: '/assets/struggle-of-bangladesh-pictorial/679615.jpg', caption: 'Struggle of Bangladesh — Photo 113' },
    { src: '/assets/struggle-of-bangladesh-pictorial/698611.jpg', caption: 'Struggle of Bangladesh — Photo 114' },
    { src: '/assets/struggle-of-bangladesh-pictorial/699868.jpg', caption: 'Struggle of Bangladesh — Photo 115' },
    { src: '/assets/struggle-of-bangladesh-pictorial/710011.jpg', caption: 'Struggle of Bangladesh — Photo 116' },
    { src: '/assets/struggle-of-bangladesh-pictorial/713379.jpg', caption: 'Struggle of Bangladesh — Photo 117' },
    { src: '/assets/struggle-of-bangladesh-pictorial/720551.jpg', caption: 'Struggle of Bangladesh — Photo 118' },
    { src: '/assets/struggle-of-bangladesh-pictorial/735755.jpg', caption: 'Struggle of Bangladesh — Photo 119' },
    { src: '/assets/struggle-of-bangladesh-pictorial/736208.jpg', caption: 'Struggle of Bangladesh — Photo 120' },
    { src: '/assets/struggle-of-bangladesh-pictorial/737775.jpg', caption: 'Struggle of Bangladesh — Photo 121' },
    { src: '/assets/struggle-of-bangladesh-pictorial/760035.jpg', caption: 'Struggle of Bangladesh — Photo 122' },
    { src: '/assets/struggle-of-bangladesh-pictorial/760252.jpg', caption: 'Struggle of Bangladesh — Photo 123' },
    { src: '/assets/struggle-of-bangladesh-pictorial/779206.jpg', caption: 'Struggle of Bangladesh — Photo 124' },
    { src: '/assets/struggle-of-bangladesh-pictorial/786979.jpg', caption: 'Struggle of Bangladesh — Photo 125' },
    { src: '/assets/struggle-of-bangladesh-pictorial/792552.jpg', caption: 'Struggle of Bangladesh — Photo 126' },
    { src: '/assets/struggle-of-bangladesh-pictorial/793784.jpg', caption: 'Struggle of Bangladesh — Photo 127' },
    { src: '/assets/struggle-of-bangladesh-pictorial/795163.jpg', caption: 'Struggle of Bangladesh — Photo 128' },
    { src: '/assets/struggle-of-bangladesh-pictorial/812216.jpg', caption: 'Struggle of Bangladesh — Photo 129' },
    { src: '/assets/struggle-of-bangladesh-pictorial/812582.jpg', caption: 'Struggle of Bangladesh — Photo 130' },
    { src: '/assets/struggle-of-bangladesh-pictorial/812713.jpg', caption: 'Struggle of Bangladesh — Photo 131' },
    { src: '/assets/struggle-of-bangladesh-pictorial/813458.jpg', caption: 'Struggle of Bangladesh — Photo 132' },
    { src: '/assets/struggle-of-bangladesh-pictorial/816650.jpg', caption: 'Struggle of Bangladesh — Photo 133' },
    { src: '/assets/struggle-of-bangladesh-pictorial/829021.jpg', caption: 'Struggle of Bangladesh — Photo 134' },
    { src: '/assets/struggle-of-bangladesh-pictorial/830713.jpg', caption: 'Struggle of Bangladesh — Photo 135' },
    { src: '/assets/struggle-of-bangladesh-pictorial/839766.jpg', caption: 'Struggle of Bangladesh — Photo 136' },
    { src: '/assets/struggle-of-bangladesh-pictorial/873188.jpg', caption: 'Struggle of Bangladesh — Photo 137' },
    { src: '/assets/struggle-of-bangladesh-pictorial/879075.jpg', caption: 'Struggle of Bangladesh — Photo 138' },
    { src: '/assets/struggle-of-bangladesh-pictorial/888868.jpg', caption: 'Struggle of Bangladesh — Photo 139' },
    { src: '/assets/struggle-of-bangladesh-pictorial/891767.jpg', caption: 'Struggle of Bangladesh — Photo 140' },
    { src: '/assets/struggle-of-bangladesh-pictorial/896382.jpg', caption: 'Struggle of Bangladesh — Photo 141' },
    { src: '/assets/struggle-of-bangladesh-pictorial/900940.jpg', caption: 'Struggle of Bangladesh — Photo 142' },
    { src: '/assets/struggle-of-bangladesh-pictorial/913531.jpg', caption: 'Struggle of Bangladesh — Photo 143' },
    { src: '/assets/struggle-of-bangladesh-pictorial/914719.jpg', caption: 'Struggle of Bangladesh — Photo 144' },
    { src: '/assets/struggle-of-bangladesh-pictorial/931810.jpg', caption: 'Struggle of Bangladesh — Photo 145' },
    { src: '/assets/struggle-of-bangladesh-pictorial/937013.jpg', caption: 'Struggle of Bangladesh — Photo 146' },
    { src: '/assets/struggle-of-bangladesh-pictorial/937327.jpg', caption: 'Struggle of Bangladesh — Photo 147' },
    { src: '/assets/struggle-of-bangladesh-pictorial/939689.jpg', caption: 'Struggle of Bangladesh — Photo 148' },
    { src: '/assets/struggle-of-bangladesh-pictorial/941263.jpg', caption: 'Struggle of Bangladesh — Photo 149' },
    { src: '/assets/struggle-of-bangladesh-pictorial/948169.jpg', caption: 'Struggle of Bangladesh — Photo 150' },
    { src: '/assets/struggle-of-bangladesh-pictorial/954922.jpg', caption: 'Struggle of Bangladesh — Photo 151' },
    { src: '/assets/struggle-of-bangladesh-pictorial/959130.jpg', caption: 'Struggle of Bangladesh — Photo 152' },
    { src: '/assets/struggle-of-bangladesh-pictorial/971998.jpg', caption: 'Struggle of Bangladesh — Photo 153' },
    { src: '/assets/struggle-of-bangladesh-pictorial/973017.jpg', caption: 'Struggle of Bangladesh — Photo 154' },
    { src: '/assets/struggle-of-bangladesh-pictorial/973030.jpg', caption: 'Struggle of Bangladesh — Photo 155' },
    { src: '/assets/struggle-of-bangladesh-pictorial/976492.jpg', caption: 'Struggle of Bangladesh — Photo 156' },
    { src: '/assets/struggle-of-bangladesh-pictorial/978008.jpg', caption: 'Struggle of Bangladesh — Photo 157' },
    { src: '/assets/struggle-of-bangladesh-pictorial/997493.jpg', caption: 'Struggle of Bangladesh — Photo 158' },
];

export default function StrugglePictorial() {
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [touchStartX, setTouchStartX] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const filmstripRef = useRef(null);
    const activeThumbRef = useRef(null);

    const openLightbox = (index) => {
        setLightboxIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = useCallback(() => {
        setLightboxIndex(null);
        document.body.style.overflow = '';
    }, []);

    const goNext = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setLightboxIndex((i) => (i + 1) % PHOTOS.length);
        setTimeout(() => setIsAnimating(false), 250);
    }, [isAnimating]);

    const goPrev = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setLightboxIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length);
        setTimeout(() => setIsAnimating(false), 250);
    }, [isAnimating]);

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

    useEffect(() => {
        document.body.classList.add('page-museum-story');
        document.title = 'Struggle of Bangladesh: Pictorial | Liberation War Museum';
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
                        <div className="hero-card__title">Struggle of Bangladesh: Pictorial</div>
                        <div className="hero-card__desc">
                            Archives &amp; Resources — A pictorial history of Bangladesh's struggle for independence.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <main className="museum-story-content">
                <section className="block">
                    <div className="separator"></div>
                    <Breadcrumb />
                    <div className="block__content">
                        <p className="p">
                            A historical record in pictures documenting the popular struggle, genocide, and eventual
                            victory of the Bengali nation during the 1971 Liberation War. This pictorial collection
                            presents 158 photographs bearing witness to one of the most significant chapters in
                            South Asian history.
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
                    <div className="lightbox-modal__stage">
                        <img
                            key={lightboxIndex}
                            src={PHOTOS[lightboxIndex].src}
                            alt={PHOTOS[lightboxIndex].caption}
                            className="lightbox-modal__img"
                        />
                        <div className="lightbox-modal__caption">{PHOTOS[lightboxIndex].caption}</div>
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
