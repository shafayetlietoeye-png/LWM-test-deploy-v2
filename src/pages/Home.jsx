import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            {/* HERO */}
            <section className="hero">
                <div className="hero__inner">
                    <div className="hero-card">
                        <div className="hero-card__kicker">Welcome to the</div>
                        <div className="hero-card__title">Liberation War Museum</div>
                        <div className="hero-card__desc">
                            Explore the Liberation War Museum, where echoes of bravery and resilience resonate,
                            encapsulating the nation’s journey to freedom in poignant exhibits.
                        </div>
                        <a href="#" className="hero-card__btn">Plan Your Visit</a>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <main className="content">

                <div className="section-history">
                    <section className="block">
                        <div className="separator"></div>
                        <div className="block__cap">
                            <span className="cap__title">HISTORY</span>
                        </div>

                        <div className="history">
                            <h2 className="h2">The Liberation War Museum in Dhaka, Bangladesh was established in 1996.</h2>
                            <div className="history__left">
                                <p className="p">
                                    It commemorates the heroic struggle of the Bengali nation for their democratic and national rights.
                                    The struggle turned into an armed conflict following the genocide unleashed by the military rulers
                                    of Islamic Republic of Pakistan and culminated with the emergence of Bangladesh as a secular,
                                    democratic state in December 1971.
                                </p>
                                <a className="btn-dark" href="#">Know More</a>
                            </div>

                            <div className="history__right">
                                <img className="sketch" src="/assets/history image.png" alt="Sketch" />
                            </div>
                        </div>
                    </section>
                </div>

                {/* ON THIS DAY */}
                <div className="section-onthisday">
                    <div className="separator"></div>
                    <section className="block block--center">
                        <div className="block__cap block__cap--center">
                            <span className="cap__title">ON THIS DAY</span>
                        </div>

                        <div className="onthisday">
                            <div className="dates">
                                <button className="arrow" aria-label="previous">{'\u2039'}</button>
                                <div className="datewrap">
                                    <div className="date-sub">27th March, 1971</div>
                                    <div className="date-main">28th March, 1971</div>
                                    <div className="date-sub">29th March, 1971</div>
                                </div>
                                <button className="arrow" aria-label="next">{'\u203A'}</button>
                            </div>

                            <p className="p p--center">
                                In the morning temporary curfew is removed and the foreign journalists staying in Hotel
                                Intercontinental are removed and escorted to the Airport amidst tight security. In a special aircraft
                                they are forced to abort Dhaka. However seeking from the view of the military two of them manage to
                                escape and stay back in Dhaka and after another. They are Simon Dring of the Daily Telegraph and
                                AP photographer Michel Laurent.
                            </p>

                            <a className="btn-dark" href="#">Go Back in Time</a>
                        </div>
                    </section>
                    <div className="separator"></div>
                </div>

                {/* VIRTUAL TOUR */}
                <div className="section-tour">
                    <section className="block">
                        <div className="tour-head">
                            <div className="tour-line"></div>
                            <h2 className="tour-title">VIRTUAL TOUR</h2>
                        </div>
                        <p className="tour-text">
                            There are 4 galleries which display the protracted struggle of the people of Bangladesh for establishing their
                            identity as a nation under the British regime as well as their struggle for democracy, political and economic
                            emancipation from 1947 and finally their armed struggle during the 9 month long War of Liberation in 1971.
                        </p>
                        <div className="tour-visual">
                            <img src="/assets/virtual tour image.png" alt="Virtual Tour" />
                        </div>
                        <div className="tour-action">
                            <Link className="btn-dark" to="/virtual-tour">Take the Journey</Link>
                        </div>
                    </section>
                </div>

                {/* FOUNDER BOARD OF TRUSTEES */}
                <div className="section-dark">
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

                        <div className="action-center">
                            <a className="btn-beige" href="#">Know More</a>
                        </div>
                    </section>

                    {/* GALLERY */}
                    <section className="block">
                        <div className="dark-head dark-head--stacked">
                            <div className="dark-line"></div>
                            <h2 className="gallery-title">GALLERY</h2>
                        </div>

                        <div className="gallery-row">
                            <button className="arrow arrow--light" aria-label="previous">{'\u2039'}</button>
                            <div className="gallery-imgs">
                                <img src="/assets/gallary/homepage gallary/1.png" alt="Gallery 1" />
                                <img src="/assets/gallary/homepage gallary/2.png" alt="Gallery 2" />
                                <img src="/assets/gallary/homepage gallary/3.png" alt="Gallery 3" />
                            </div>
                            <button className="arrow arrow--light" aria-label="next">{'\u203A'}</button>
                        </div>

                        <div className="action-center">
                            <a className="btn-beige" href="#">View Full</a>
                        </div>
                    </section>

                </div>

                {/* TICKETS & EVENTS */}
                <div className="section-tickets">
                    {/* TICKETS */}
                    <section className="block">
                        <div className="tour-head tour-head--stacked">
                            <div className="separator"></div>
                            <h2 className="tickets-title">TICKETS</h2>
                        </div>

                        <div className="tickets-row">
                            <div className="ticket-col">
                                <h3 className="ticket-head">Price</h3>
                                <ul className="ticket-list">
                                    <li>Bangladeshi Adults - <strong>50 Taka</strong></li>
                                    <li>Bangladeshi Child - <strong>20 Taka</strong></li>
                                    <li>Foreign Visitor - <strong>500 Taka</strong></li>
                                    <li>SAARC Visitor - <strong>50 Taka</strong></li>
                                </ul>
                            </div>
                            <div className="ticket-col ticket-col--right">
                                <h3 className="ticket-head">Operating Hours</h3>
                                <ul className="ticket-list">
                                    <li><strong>March - September:</strong> 10am - 6pm</li>
                                    <li><strong>October - February:</strong> 10am - 5pm</li>
                                    <li><strong>Ramadan Time:</strong> 10am - 5pm</li>
                                    <li>Weekly Off: Sunday</li>
                                </ul>
                            </div>
                        </div>

                        <div className="action-center">
                            <a href="#" className="btn-dark-grunge">Buy Tickets</a>
                        </div>
                    </section>

                    {/* EVENTS */}
                    <section className="block">
                        <div className="separator"></div>
                        <div className="tour-head">
                            <h2 className="tickets-title">UPCOMING EVENTS</h2>
                        </div>

                        <div className="events-wrap">
                            <img src="/assets/icon/left arrow.png" alt="Prev" className="gallery-arrow event-prev" />
                            <div className="events-slider">
                                {/* Card 1 */}
                                <div className="event-card">
                                    <img src="/assets/home upcoming events.png" alt="Event" className="event-img" />
                                    <div className="event-info">
                                        <h3 className="event-name">Celebrating <br /> Bengali New Year</h3>
                                        <div className="event-date">14th April <br /> 3:00 PM</div>
                                    </div>
                                </div>
                                {/* Card 2 */}
                                <div className="event-card">
                                    <img src="/assets/home upcoming events.png" alt="Event" className="event-img" />
                                    <div className="event-info">
                                        <h3 className="event-name">Independence <br /> Day Talk</h3>
                                        <div className="event-date">26th March <br /> 10:00 AM</div>
                                    </div>
                                </div>
                                {/* Card 3 */}
                                <div className="event-card">
                                    <img src="/assets/home upcoming events.png" alt="Event" className="event-img" />
                                    <div className="event-info">
                                        <h3 className="event-name">Victory Day <br /> Exhibition</h3>
                                        <div className="event-date">16th December <br /> 4:00 PM</div>
                                    </div>
                                </div>
                            </div>
                            <img src="/assets/icon/right arrow.png" alt="Next" className="gallery-arrow event-next" />
                        </div>

                        <div className="action-center">
                            <a href="#" className="btn-dark-grunge">RSVP</a>
                        </div>
                    </section>
                </div>

            </main>
        </>
    );
}
