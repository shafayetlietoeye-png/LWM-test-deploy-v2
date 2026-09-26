import { useEffect } from 'react';

export default function MissionStatement() {
    useEffect(() => {
        document.body.classList.add('page-museum-story');
        document.title = "Mission Statement | Liberation War Museum";
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, []);

    return (
        <>
            {/* HERO (Mission Statement Page) */}
            <section className="hero hero--museum-story">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Mission Statement</div>
                        <div className="hero-card__desc">
                            The Liberation War Museum is dedicated to honoring the struggle for independence, preserving memory, and inspiring future generations towards justice, democracy, and human rights.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <main className="museum-story-content mission-page-content">
                <section className="block">
                    {/* The brush divide line appears ONLY ONCE on this page */}
                    <div className="separator"></div>

                    {/* 3 BOXY CARDS FOR THE THREE CORE STATEMENTS */}
                    <div className="mission-grid">
                        
                        {/* BOX 1: PURPOSE */}
                        <div className="mission-card mission-card--purpose">
                            <div className="mission-card__watermark" aria-hidden="true">01</div>
                            <div className="mission-card__inner">
                                <div className="mission-card__header">
                                    <div className="mission-card__icon-box">
                                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="mission-card__body">
                                    <h2 className="mission-card__title">Purpose</h2>
                                    <div className="mission-card__accent-line"></div>
                                    <p className="mission-card__text">
                                        A museum dedicated to all freedom loving people and to the victims of mindless atrocities and destruction committed in the name of religion, ethnicity and sovereignty.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* BOX 2: REFLECTION AND IDEALS */}
                        <div className="mission-card mission-card--ideals">
                            <div className="mission-card__watermark" aria-hidden="true">02</div>
                            <div className="mission-card__inner">
                                <div className="mission-card__header">
                                    <div className="mission-card__icon-box">
                                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="mission-card__body">
                                    <h2 className="mission-card__title">Reflection and Ideals</h2>
                                    <div className="mission-card__accent-line"></div>
                                    <p className="mission-card__text">
                                        The museum encourages reflection upon the sufferings and heroism of The Bangladesh Liberation War and its ideals.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* BOX 3: CONTEMPORARY RELEVANCE */}
                        <div className="mission-card mission-card--relevance">
                            <div className="mission-card__watermark" aria-hidden="true">03</div>
                            <div className="mission-card__inner">
                                <div className="mission-card__header">
                                    <div className="mission-card__icon-box">
                                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"/>
                                            <line x1="2" y1="12" x2="22" y2="12"/>
                                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="mission-card__body">
                                    <h2 className="mission-card__title">Contemporary Relevance</h2>
                                    <div className="mission-card__accent-line"></div>
                                    <p className="mission-card__text">
                                        The Liberation War Museum endeavors to link this history with contemporary pressing social and humanitarian issues.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    );
}
