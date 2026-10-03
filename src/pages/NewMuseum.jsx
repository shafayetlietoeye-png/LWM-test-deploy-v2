import { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';

const galleryImages = [
    "/assets/about/Museum Story/new museum gallary/486684719_1397389161322901_924041236047675431_n.jpg",
    "/assets/about/Museum Story/new museum gallary/486849868_1397388931322924_2389496269851940210_n.jpg",
    "/assets/about/Museum Story/new museum gallary/487085701_1397388994656251_9209520191380822805_n.jpg",
    "/assets/about/Museum Story/new museum gallary/487176202_1397389167989567_4822906935720972309_n.jpg",
    "/assets/about/Museum Story/new museum gallary/487288271_1397388921322925_1168712406254236781_n.jpg",
    "/assets/about/Museum Story/new museum gallary/487296498_1397389114656239_2796252311038123278_n.jpg",
    "/assets/about/Museum Story/new museum gallary/487451080_1397389171322900_6692153961002969969_n (1).jpg",
    "/assets/about/Museum Story/new museum gallary/487470578_1397389181322899_7870089113457840626_n.jpg"
];

export default function NewMuseum() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [zoomLevel, setZoomLevel] = useState(1);

    useEffect(() => {
        document.body.classList.add('page-museum-story');
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, []);

    const openLightbox = (index) => {
        setSelectedIndex(index);
        setZoomLevel(1);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
        setZoomLevel(1);
        document.body.style.overflow = 'auto';
    };

    const showNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
        setZoomLevel(1);
    };

    const showPrev = (e) => {
        e.stopPropagation();
        setSelectedIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
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

    const keyFacilities = [
        { label: "Permanent gallery space", value: "3,500 sqm" },
        { label: "Temporary exhibition gallery (international standard)", value: "500 sqm" },
        { label: "Library and research centre", value: "300 sqm" },
        { label: "Dedicated spaces", value: "Institute for Liberation War Studies & Centre for the Study in Genocide and Justice" },
        { label: "Auditorium and stage", value: "Seating capacity of 260 with advanced sound and lighting" },
        { label: "Amphitheatre", value: "For school and public programmes" },
        { label: "Seminar rooms", value: "Three rooms (largest capacity: 50 people)" },
        { label: "Archive and processing lab", value: "Built to international standards" },
        { label: "Assembly spaces", value: "Covered and open areas with large-screen projection facility" },
        { label: "Visitor amenities", value: "Kiosk, canteen, and informal gathering (“adda”) space" },
        { label: "Parking", value: "Capacity for 106 cars" }
    ];

    const sustainabilityFeatures = [
        {
            text: "Rainwater conservation and water reuse systems",
            icon: (
                <svg className="sustainability-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                </svg>
            )
        },
        {
            text: "LED lighting",
            icon: (
                <svg className="sustainability-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
                    <path d="M9 18h6M10 22h4"/>
                </svg>
            )
        },
        {
            text: "Solar energy for partial power supply",
            icon: (
                <svg className="sustainability-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                </svg>
            )
        }
    ];

    return (
        <>
            {/* HERO */}
            <section className="hero hero--museum-story">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">New Museum</div>
                        <div className="hero-card__desc">
                            A modern, purpose-built landmark in Agargaon, Dhaka dedicated to preserving the legacy of Bangladesh's Liberation War.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <main className="museum-story-content">
                <section className="block">
                    <Breadcrumb />
                    <div className="separator"></div>
                    <div className="block__cap">
                        <span className="cap__title">Establishment and Location</span>
                    </div>

                    <div className="block__content">
                        <p className="p">
                            In 2009, the Liberation War Museum acquired nearly one acre of land in Agargaon, Dhaka to build a full-fledged, purpose-built museum. The architectural design was selected through a nationwide competition with 70 entries, evaluated by a jury panel that included international experts.
                        </p>
                        <p className="p">
                            The new museum building was officially inaugurated on April 16, 2017 by the former Prime Minister of Bangladesh, Sheikh Hasina.
                        </p>
                    </div>
                </section>

                <section className="block">
                    <div className="block__cap">
                        <span className="cap__title">Facilities and Features</span>
                    </div>

                    <div className="block__content">
                        <p className="p" style={{ marginBottom: '24px' }}>
                            The new museum has been designed with modern concepts of display, preservation, and public engagement. Key facilities include:
                        </p>

                        <div className="facilities-grid">
                            {keyFacilities.map((facility, index) => (
                                <div key={index} className="facility-card">
                                    <div className="facility-label">{facility.label}</div>
                                    <div className="facility-value">{facility.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="block">
                    <div className="block__cap">
                        <span className="cap__title">Sustainability Features</span>
                    </div>

                    <div className="block__content">
                        <p className="p" style={{ marginBottom: '20px' }}>
                            Although not formally classified as a “green” building, the museum incorporates eco-friendly technologies:
                        </p>

                        <div className="sustainability-grid" style={{ marginBottom: '40px' }}>
                            {sustainabilityFeatures.map((item, index) => (
                                <div key={index} className="sustainability-card">
                                    {item.icon}
                                    <div className="sustainability-text">{item.text}</div>
                                </div>
                            ))}
                        </div>

                        <h3>Gallery</h3>
                        <div className="museum-gallery-grid">
                            {galleryImages.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`New Museum Gallery ${index + 1}`}
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
