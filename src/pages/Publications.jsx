import React, { useState, useEffect } from 'react';

export default function Publications() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [zoomLevel, setZoomLevel] = useState(1);

    useEffect(() => {
        document.body.classList.add('page-publications');
        return () => {
            document.body.classList.remove('page-publications');
        };
    }, []);

    // Generate gallery images array based on listed files
    const galleryImageNames = [
        "196455.jpg", "240165.jpg", "292500.jpg", "312001.jpg", "412432.jpg",
        "443888.jpg", "457330.jpg", "479722.jpg", "519050.jpg", "628544.jpg",
        "642883.jpg", "655181.jpg", "732387.jpg", "744581.jpg", "766465.jpg",
        "769385.jpg", "805273.jpg", "827021.jpg", "879537.jpg", "881084.jpg",
        "909206.jpg", "997372.jpg", "999196.jpg"
    ];

    const galleryImages = galleryImageNames.map(name => `/assets/about/Publications/publications gallary/${name}`);

    const openLightbox = (index) => {
        setSelectedIndex(index);
        setZoomLevel(1);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
        setZoomLevel(1);
        document.body.style.overflow = '';
    };

    const showPrev = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
        setZoomLevel(1);
    };

    const showNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
        setZoomLevel(1);
    };

    const handleZoomIn = (e) => {
        e.stopPropagation();
        setZoomLevel(prev => Math.min(prev + 0.5, 3));
    };

    const handleZoomOut = (e) => {
        e.stopPropagation();
        setZoomLevel(prev => Math.max(prev - 0.5, 1));
    };

    return (
        <>
            {/* HERO */}
            <section className="hero hero--publications">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Publications</div>
                        <div className="hero-card__desc">
                            Explore the collection of books, periodicals, and other historical publications housed within the museum.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <main className="museum-story-content">
                <section className="block">
                    <div className="separator"></div>

                    <div className="block__content">
                        <div className="museum-gallery-grid">
                            {galleryImages.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`Publication Gallery ${index + 1}`}
                                    className="gallery-img"
                                    onClick={() => openLightbox(index)}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* LIGHTBOX MODAL */}
            {selectedIndex !== null && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox-zoom-controls" onClick={(e) => e.stopPropagation()}>
                        <button onClick={handleZoomOut} disabled={zoomLevel <= 1}>−</button>
                        <span>{Math.round(zoomLevel * 100)}%</span>
                        <button onClick={handleZoomIn} disabled={zoomLevel >= 3}>+</button>
                    </div>

                    <span className="lightbox-close" onClick={closeLightbox}>&times;</span>

                    <button className="lightbox-prev" onClick={showPrev}>
                        <img src="/assets/icon/left arrow.png" alt="Previous" />
                    </button>

                    <div className="lightbox-content-wrapper" onClick={(e) => e.stopPropagation()}>
                        <img
                            className="lightbox-content"
                            src={galleryImages[selectedIndex]}
                            alt={`Gallery image ${selectedIndex + 1}`}
                            style={{
                                width: `${90 * zoomLevel}vw`,
                                height: `${90 * zoomLevel}vh`
                            }}
                        />
                        <div className="lightbox-counter">
                            {selectedIndex + 1} / {galleryImages.length}
                        </div>
                    </div>

                    <button className="lightbox-next" onClick={showNext}>
                        <img src="/assets/icon/right arrow.png" alt="Next" />
                    </button>
                </div>
            )}
        </>
    );
}
