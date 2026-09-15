import { useEffect } from 'react';

export default function CampaignLeaflets() {
    useEffect(() => {
        document.body.classList.add('page-museum-story');
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, []);

    const leaflets = [
        { src: '/assets/fund-collection-leaflet/1.jpg', label: 'Page 1 of 3' },
        { src: '/assets/fund-collection-leaflet/2.jpg', label: 'Page 2 of 3' },
        { src: '/assets/fund-collection-leaflet/3.jpg', label: 'Page 3 of 3' },
    ];

    return (
        <>
            {/* HERO SECTION */}
            <section className="hero hero--museum-story">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Campaign Leaflets</div>
                        <div className="hero-card__desc">
                            Access our informative leaflets and print campaign materials raising awareness for museum funding and artifact preservation.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <main className="museum-story-content">
                <section className="block">
                    <div className="separator"></div>
                    <div className="block__cap">
                        <span className="cap__title">Fund Collection Leaflet</span>
                    </div>
                    <div className="block__content">
                        <p className="p">
                            The Liberation War Museum publishes leaflets to inform the public about its preservation campaigns, fundraising drives, and traveling museum programs. Below is the museum's fund collection leaflet.
                        </p>

                        {/* Leaflet Images */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '35px',
                            marginTop: '30px'
                        }}>
                            {leaflets.map((leaflet, idx) => (
                                <div key={idx} style={{ width: '100%', maxWidth: '900px', textAlign: 'center' }}>
                                    <div style={{
                                        overflow: 'hidden',
                                        borderRadius: '6px',
                                        border: '1px solid #d4cbb3',
                                        borderTop: '3px solid #b38235',
                                        boxShadow: '0 4px 14px rgba(26,21,18,0.06)'
                                    }}>
                                        <img
                                            src={leaflet.src}
                                            alt={`Fund Collection Leaflet - ${leaflet.label}`}
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                display: 'block'
                                            }}
                                        />
                                    </div>
                                    <span style={{
                                        display: 'inline-block',
                                        marginTop: '10px',
                                        fontSize: '0.88rem',
                                        color: '#888',
                                        fontFamily: "'Roboto', sans-serif",
                                        fontWeight: '500'
                                    }}>
                                        {leaflet.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
