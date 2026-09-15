import { useEffect } from 'react';

export default function BoardOfTrustees() {
    useEffect(() => {
        document.body.classList.add('page-board-trustees');
        return () => {
            document.body.classList.remove('page-board-trustees');
        };
    }, []);

    return (
        <>
            {/* HERO (Board of Trustees Specific) */}
            <section className="hero hero--board-trustees">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Board of Trustees</div>
                        <div className="hero-card__desc">
                            The Liberation War Museum is the outcome of a citizen's effort and is run by a Board of Trustees.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <main className="museum-story-content">
                {/* FOUNDER BOARD OF TRUSTEES */}
                <div className="section-paper">
                    <section className="block">
                        <div className="dark-head dark-head--stacked">
                            <div className="dark-line"></div>
                            <h2 className="dark-title">FOUNDER BOARD OF TRUSTEES</h2>
                        </div>

                        <div className="trustees-grid">
                            {/* 1 */}
                            <div className="trustee-card">
                                <div className="trustee-img-wrap">
                                    <img src="/assets/team/founder board of trustee/1.png" alt="H. Akku Chowdhury" />
                                </div>
                                <div className="trustee-info">
                                    <div className="t-name">H. Akku Chowdhury</div>
                                    <div className="t-role">Corporate Entrepreneur</div>
                                </div>
                            </div>
                            {/* 2 */}
                            <div className="trustee-card">
                                <div className="trustee-img-wrap">
                                    <img src="/assets/team/founder board of trustee/2.png" alt="Late Aly Zaker" />
                                </div>
                                <div className="trustee-info">
                                    <div className="t-name">Late Aly Zaker</div>
                                    <div className="t-role">Communications Expert</div>
                                </div>
                            </div>
                            {/* 3 */}
                            <div className="trustee-card">
                                <div className="trustee-img-wrap">
                                    <img src="/assets/team/founder board of trustee/3.png" alt="Asaduzzaman Noor, MP" />
                                </div>
                                <div className="trustee-info">
                                    <div className="t-name">Asaduzzaman Noor, MP</div>
                                    <div className="t-role">Cultural Personality</div>
                                </div>
                            </div>
                            {/* 4 */}
                            <div className="trustee-card">
                                <div className="trustee-img-wrap">
                                    <img src="/assets/team/founder board of trustee/4.png" alt="Mofidul Haque" />
                                </div>
                                <div className="trustee-info">
                                    <div className="t-name">Mofidul Haque</div>
                                    <div className="t-role">Researcher, Essayist</div>
                                </div>
                            </div>
                            {/* 5 */}
                            <div className="trustee-card">
                                <div className="trustee-img-wrap">
                                    <img src="/assets/team/founder board of trustee/5.png" alt="Rabiul Hussain" />
                                </div>
                                <div className="trustee-info">
                                    <div className="t-name">Rabiul Hussain</div>
                                    <div className="t-role">Architect, Poet</div>
                                </div>
                            </div>
                            {/* 6 */}
                            <div className="trustee-card">
                                <div className="trustee-img-wrap">
                                    <img src="/assets/team/founder board of trustee/6.png" alt="Sara Zaker" />
                                </div>
                                <div className="trustee-info">
                                    <div className="t-name">Sara Zaker</div>
                                    <div className="t-role">Cultural Personality</div>
                                </div>
                            </div>
                            {/* 7 */}
                            <div className="trustee-card">
                                <div className="trustee-img-wrap">
                                    <img src="/assets/team/founder board of trustee/7.png" alt="Dr. Sarwar Ali" />
                                </div>
                                <div className="trustee-info">
                                    <div className="t-name">Dr. Sarwar Ali</div>
                                    <div className="t-role">Physician & Cultural Worker</div>
                                </div>
                            </div>
                            {/* 8 */}
                            <div className="trustee-card">
                                <div className="trustee-img-wrap">
                                    <img src="/assets/team/founder board of trustee/8.png" alt="Late Ziauddin Tariq Ali" />
                                </div>
                                <div className="trustee-info">
                                    <div className="t-name">Late Ziauddin Tariq Ali</div>
                                    <div className="t-role">Social Activist</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
