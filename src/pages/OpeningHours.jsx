import { useEffect } from 'react';

export default function OpeningHours() {
    useEffect(() => {
        document.body.classList.add('page-museum-story');
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, []);

    return (
        <>
            {/* HERO */}
            <section className="hero hero--museum-story">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Opening Hours</div>
                        <div className="hero-card__desc">
                            Plan your visit to the Liberation War Museum.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <main className="museum-story-content">
                <section className="block">
                    <div className="separator"></div>
                    <div className="block__content">
                        <p className="p">
                            The museum is open on all weekdays except Sunday. Visiting hours vary by season to accommodate daylight changes.
                        </p>

                        <div style={{ marginTop: '24px' }}>
                            <table style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                fontFamily: "'Roboto Slab', 'Noto Sans Bengali', sans-serif",
                                fontSize: '0.95rem'
                            }}>
                                <thead>
                                    <tr style={{ borderBottom: '1.5px solid #1a1512' }}>
                                        <th style={{ padding: '10px 0', textAlign: 'left', fontFamily: "'Roboto Slab', serif", fontWeight: '700', color: '#1a1512', width: '25%' }}>Season</th>
                                        <th style={{ padding: '10px 0', textAlign: 'left', fontFamily: "'Roboto Slab', serif", fontWeight: '700', color: '#1a1512', width: '40%' }}>Months</th>
                                        <th style={{ padding: '10px 0', textAlign: 'right', fontFamily: "'Roboto Slab', serif", fontWeight: '700', color: '#1a1512', width: '35%' }}>Hours</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #d4cbb3' }}>
                                        <td style={{ padding: '14px 0', fontWeight: '600', color: '#1a1512' }}>Summer</td>
                                        <td style={{ padding: '14px 0', color: '#555' }}>March – September</td>
                                        <td style={{ padding: '14px 0', textAlign: 'right', fontWeight: '600', color: '#1a1512', fontSize: '1rem' }}>10:00 AM – 6:00 PM</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #d4cbb3' }}>
                                        <td style={{ padding: '14px 0', fontWeight: '600', color: '#1a1512' }}>Winter</td>
                                        <td style={{ padding: '14px 0', color: '#555' }}>October – February</td>
                                        <td style={{ padding: '14px 0', textAlign: 'right', fontWeight: '600', color: '#1a1512', fontSize: '1rem' }}>10:00 AM – 5:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '14px 0', fontWeight: '600', color: '#8d2024' }}>Closed</td>
                                        <td style={{ padding: '14px 0', color: '#8d2024' }}>Every week</td>
                                        <td style={{ padding: '14px 0', textAlign: 'right', fontWeight: '700', color: '#8d2024', fontSize: '1rem' }}>Sunday</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="block">
                    <div className="block__cap">
                        <span className="cap__title">Visitor Information</span>
                    </div>
                    <div className="block__content">
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '24px'
                        }}>
                            <div style={{ borderLeft: '3px solid #8d2024', paddingLeft: '18px' }}>
                                <p className="p" style={{ margin: 0 }}>
                                    <strong>National Holidays</strong><br />
                                    The museum may remain closed on national holidays and government-declared public holidays. Please check announcements before visiting.
                                </p>
                            </div>
                            <div style={{ borderLeft: '3px solid #8d2024', paddingLeft: '18px' }}>
                                <p className="p" style={{ margin: 0 }}>
                                    <strong>Group Visits</strong><br />
                                    For guided group visits, please contact the museum office in advance to schedule your tour and ensure a guide is available.
                                </p>
                            </div>
                            <div style={{ borderLeft: '3px solid #8d2024', paddingLeft: '18px' }}>
                                <p className="p" style={{ margin: 0 }}>
                                    <strong>Last Entry</strong><br />
                                    Last entry is permitted 30 minutes before closing time. Visitors are requested to plan accordingly.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
