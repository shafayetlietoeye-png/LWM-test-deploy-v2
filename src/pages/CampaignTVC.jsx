import { useEffect } from 'react';

const tvcs = [
    {
        title: 'TV Commercial 01',
        embedUrl: 'https://www.youtube.com/embed/pVYkVwb9_Qw'
    },
    {
        title: 'TV Commercial 02',
        embedUrl: 'https://www.youtube.com/embed/9qnIgzI0rZA'
    }
];

export default function CampaignTVC() {
    useEffect(() => {
        document.body.classList.add('page-museum-story');
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, []);

    return (
        <>
            {/* HERO SECTION */}
            <section className="hero hero--museum-story">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">TVC & Video Campaigns</div>
                        <div className="hero-card__desc">
                            Watch our television commercials and digital video campaigns raising awareness for the museum's preservation mission and educational activities.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <main className="museum-story-content">
                <section className="block">
                    <div className="separator"></div>
                    <div className="block__cap">
                        <span className="cap__title">TV Commercials</span>
                    </div>
                    <div className="block__content">
                        <p className="p">
                            The Liberation War Museum produces television commercials and digital video campaigns to appeal for public support, artifact donations, and volunteer engagement. These campaigns feature testimonies of freedom fighters and highlights of our educational initiatives.
                        </p>

                        {/* Video Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(440px, 1fr))',
                            gap: '30px',
                            marginTop: '35px'
                        }}>
                            {tvcs.map((tvc, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        backgroundColor: '#fff',
                                        border: '1px solid #d4cbb3',
                                        borderTop: '3px solid #b38235',
                                        borderRadius: '6px',
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 14px rgba(26,21,18,0.06)'
                                    }}
                                >
                                    {/* 16:9 Responsive Embed */}
                                    <div style={{
                                        position: 'relative',
                                        paddingBottom: '56.25%',
                                        height: 0,
                                        overflow: 'hidden',
                                        backgroundColor: '#111'
                                    }}>
                                        <iframe
                                            src={tvc.embedUrl}
                                            title={tvc.title}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                border: 'none'
                                            }}
                                        />
                                    </div>

                                    {/* Card Label */}
                                    <div style={{
                                        padding: '14px 18px',
                                        borderTop: '1px solid #e8e3d5'
                                    }}>
                                        <h3 style={{
                                            margin: 0,
                                            fontSize: '1.1rem',
                                            color: '#0d4228',
                                            fontFamily: "'Roboto Slab', serif",
                                            fontWeight: '700'
                                        }}>
                                            {tvc.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
