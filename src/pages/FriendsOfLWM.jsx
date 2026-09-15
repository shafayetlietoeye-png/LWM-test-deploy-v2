import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const contributors = [
    { name: 'Sara Zaker', role: 'CEO' },
    { name: 'Asaduzzaman Noor', role: 'Chairperson of Board' },
    { name: 'Sarwar Ali', role: 'Vice President' },
    { name: 'Abul H Masud', role: 'CFO' },
    { name: 'Maria Del Pilar Choy de Masud', role: 'Secretary' },
    { name: 'Kabir Masud', role: 'Assistant CFO' },
    { name: 'Mofidul Hoque', role: 'Assistant Treasurer' },
];

export default function FriendsOfLWM() {
    useEffect(() => {
        document.body.classList.add('page-museum-story');
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, []);

    return (
        <>
            {/* HERO */}
            <section
                className="hero hero--museum-story"
                style={{
                    backgroundImage: `url('https://www.liberationwarmuseumbd.org/flwmb/img/s1.jpg')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Friends of Liberation War Museum</div>
                        <div className="hero-card__desc">
                            Support the history, culture, and heritage of the Bangladesh Liberation War.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <main className="museum-story-content">

                {/* WHO WE ARE */}
                <section className="block">
                    <div className="separator"></div>
                    <div className="block__cap">
                        <span className="cap__title">Who We Are</span>
                    </div>
                    <div className="block__content">
                        <img
                            src="https://www.liberationwarmuseumbd.org/flwmb/img/s2.jpg"
                            alt="Friends of Liberation War Museum Bangladesh"
                            style={{
                                float: 'left',
                                width: '42%',
                                maxWidth: '420px',
                                marginRight: '32px',
                                marginBottom: '16px',
                                display: 'block'
                            }}
                        />
                        <p className="p">
                            <strong>Friends of Liberation War Museum; Bangladesh (FLWMB)</strong> is a supportive organization located at <strong>120, S San Antonio Ave, Suite A, Ontario, CA 91762, United States of America</strong>, committed to protecting the country's <strong>history, culture, and heritage of Martyrs of the Liberation War.</strong>
                        </p>
                        <p className="p">
                            We value the sacrifices of the brave children who contributed to liberate "Bangladesh". FLWMB works in close collaboration with the Liberation War Museum, Dhaka, to ensure the memory and legacy of 1971 endures for future generations across the world.
                        </p>
                        <div style={{ clear: 'both' }}></div>
                    </div>
                </section>

                {/* WHAT WE DO */}
                <section className="block">
                    <div className="block__cap">
                        <span className="cap__title">What We Do</span>
                    </div>
                    <div className="block__content">
                        <img
                            src="https://www.liberationwarmuseumbd.org/flwmb/img/s3.jpg"
                            alt="FLWMB Lifelong Fund"
                            style={{
                                float: 'right',
                                width: '42%',
                                maxWidth: '420px',
                                marginLeft: '32px',
                                marginBottom: '16px',
                                display: 'block'
                            }}
                        />

                        {/* Numbered items */}
                        {[
                            {
                                num: '01',
                                title: 'Support the Story',
                                desc: "For the moral value, we have been supporting the esteemed resource on Bangladesh's Liberation War history and culture."
                            },
                            {
                                num: '02',
                                title: 'Engaging Youth',
                                desc: 'Through our school programs, social and cultural activities, we apprise the youth about the Liberation War of Bangladesh.'
                            },
                            {
                                num: '03',
                                title: 'Advocating Heritage Conservation',
                                desc: 'We support the preservation of the cultural and historical heritage by raising funds for LWM, Bangladesh.'
                            }
                        ].map((item) => (
                            <div
                                key={item.num}
                                style={{
                                    display: 'flex',
                                    gap: '18px',
                                    alignItems: 'flex-start',
                                    marginBottom: '22px',
                                    paddingBottom: '22px',
                                    borderBottom: '1px solid rgba(141,32,36,0.15)'
                                }}
                            >
                                <span style={{
                                    fontFamily: "'Roboto Slab', serif",
                                    fontSize: '1.75rem',
                                    fontWeight: '700',
                                    color: '#b38235',
                                    lineHeight: 1,
                                    minWidth: '48px',
                                    userSelect: 'none',
                                    opacity: 0.85
                                }}>
                                    {item.num}
                                </span>
                                <div>
                                    <div style={{
                                        fontFamily: "'Roboto Slab', serif",
                                        fontSize: '1.05rem',
                                        fontWeight: '700',
                                        color: '#8d2024',
                                        marginBottom: '5px'
                                    }}>
                                        {item.title}
                                    </div>
                                    <p className="p" style={{ margin: 0 }}>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}

                        <div style={{ clear: 'both' }}></div>
                    </div>
                </section>

                {/* CONTRIBUTORS */}
                <section className="block">
                    <div className="block__cap">
                        <span className="cap__title">FLWMB Contributors</span>
                    </div>
                    <div className="block__content">
                        <p className="p">
                            FLWMB is led by a dedicated team of cultural and community advocates committed to preserving the legacy of 1971.
                        </p>
                        <div style={{ marginTop: '20px' }}>
                            {contributors.map((person, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'baseline',
                                        gap: '12px',
                                        padding: '13px 0',
                                        borderBottom: '1px solid rgba(141,32,36,0.15)'
                                    }}
                                >
                                    <span style={{
                                        fontFamily: "'Roboto Slab', serif",
                                        fontWeight: '700',
                                        fontSize: '1rem',
                                        color: '#1a1512'
                                    }}>
                                        {person.name}
                                    </span>
                                    <span style={{
                                        fontFamily: "'Roboto', sans-serif",
                                        fontSize: '0.78rem',
                                        fontWeight: '600',
                                        color: '#8d2024',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.07em',
                                        whiteSpace: 'nowrap'
                                    }}>
                                        {person.role}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CONTACT */}
                <section className="block" style={{ marginTop: '48px' }}>
                    <div className="block__cap">
                        <span className="cap__title">Contact &amp; Get Involved</span>
                    </div>
                    <div className="block__content">
                        <p className="p">
                            To support the museum and become a part of the FLWMB community, reach out to us at{' '}
                            <a href="mailto:FLWMBangladesh@gmail.com" style={{ color: '#8d2024', fontWeight: '600' }}>
                                FLWMBangladesh@gmail.com
                            </a>.
                            Your contributions go directly to preserving the history and heritage of Bangladesh's Liberation War.
                        </p>
                        {/* Info strip */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '0',
                            borderTop: '2px solid #b38235',
                            borderBottom: '2px solid #b38235',
                            margin: '24px 0',
                            padding: '18px 0'
                        }}>
                            <div style={{
                                flex: '1',
                                minWidth: '220px',
                                padding: '0 24px 0 0',
                                borderRight: '1px solid rgba(179,130,53,0.2)'
                            }}>
                                <div style={{ fontSize: '0.72rem', fontWeight: '700', color: '#0d4228', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px', fontFamily: "'Roboto', sans-serif" }}>Organisation</div>
                                <div style={{ fontFamily: "'Roboto Slab', serif", fontWeight: '700', fontSize: '1rem', color: '#1a1512' }}>FLWMB</div>
                                <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: '0.88rem', color: '#666' }}>Friends of Liberation War Museum, Bangladesh</div>
                            </div>
                            <div style={{
                                flex: '1',
                                minWidth: '220px',
                                padding: '0 24px'
                            }}>
                                <div style={{ fontSize: '0.72rem', fontWeight: '700', color: '#0d4228', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px', fontFamily: "'Roboto', sans-serif" }}>Location</div>
                                <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: '0.92rem', color: '#1a1512' }}>120, S San Antonio Ave, Suite A</div>
                                <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: '0.92rem', color: '#666' }}>Ontario, CA 91762 — USA</div>
                            </div>
                            <div style={{
                                flex: '1',
                                minWidth: '200px',
                                padding: '0 0 0 24px',
                                borderLeft: '1px solid rgba(179,130,53,0.2)'
                            }}>
                                <div style={{ fontSize: '0.72rem', fontWeight: '700', color: '#0d4228', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px', fontFamily: "'Roboto', sans-serif" }}>Email</div>
                                <a href="mailto:FLWMBangladesh@gmail.com" style={{ fontFamily: "'Roboto', sans-serif", fontSize: '0.92rem', color: '#8d2024', fontWeight: '600', textDecoration: 'none' }}>
                                    FLWMBangladesh@gmail.com
                                </a>
                            </div>
                        </div>
                        <p className="p">
                            <Link
                                to="/donate"
                                style={{
                                    display: 'inline-block',
                                    background: 'linear-gradient(180deg, #8b181e 0%, #660f13 100%)',
                                    color: '#fff',
                                    border: '1px solid rgba(212, 175, 55, 0.45)',
                                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.18), 0 2px 6px rgba(0, 0, 0, 0.35)',
                                    borderRadius: '3px',
                                    padding: '10px 26px',
                                    fontWeight: '700',
                                    fontSize: '0.88rem',
                                    textDecoration: 'none',
                                    fontFamily: "'Roboto Slab', serif",
                                    letterSpacing: '0.07em',
                                    textTransform: 'uppercase',
                                    marginRight: '12px'
                                }}
                            >
                                Donate Now
                            </Link>
                            <a
                                href="mailto:FLWMBangladesh@gmail.com"
                                style={{
                                    display: 'inline-block',
                                    color: '#7a181d',
                                    border: '1px solid rgba(212, 175, 55, 0.6)',
                                    backgroundColor: 'rgba(212, 175, 55, 0.08)',
                                    borderRadius: '3px',
                                    padding: '10px 26px',
                                    fontWeight: '700',
                                    fontSize: '0.88rem',
                                    textDecoration: 'none',
                                    fontFamily: "'Roboto Slab', serif",
                                    letterSpacing: '0.07em',
                                    textTransform: 'uppercase'
                                }}
                            >
                                Get Involved
                            </a>
                        </p>
                    </div>
                </section>


            </main>
        </>
    );
}
