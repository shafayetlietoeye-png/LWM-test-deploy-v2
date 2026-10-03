import { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function InitialEfforts() {
    useEffect(() => {
        document.body.classList.add('page-museum-story');
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, []);

    const timelineEvents = [
        {
            date: "June, 1994",
            text: "The idea of the Trust was floated with an agenda to start the Liberation War Museum."
        },
        {
            date: "December, 1994",
            text: "A Photographic album containing 100 historic photographs portraying the Liberation struggle of Bengali people from the beginning (British Period) ending with the establishment of Bangladesh. The format of this album was such that it could be mounted anywhere for an exhibition."
        },
        {
            date: "March, 1995",
            text: "A Photographic exhibition on the “Liberation War : Towards 25th Anniversary” held at ‘La Galerie’ in Dhaka."
        },
        {
            date: "June, 1995",
            text: "Registration of the Trust with 8 Trustees and public announcement."
        },
        {
            date: "July, 1995",
            text: "Exchange of opinions and views about the proposed Liberation War Museum."
        },
        {
            date: "September, 1995",
            text: "Renting of the building for the museum and refurbishing work begins."
        },
        {
            date: "October, 1995",
            text: "Authentication Committee constituted with Prof. Dr. Anisuzzaman, Prof. Dr. Salahuddin Ahmed, Air Vice-Marshal (retd.) A. K. Khandker, and Dr. Syed Anwar Hossain as members."
        },
        {
            date: "October, 1995",
            text: "Trustees begin touring the districts to exchange views with people and request for collection of objects and documents for the Museum."
        },
        {
            date: "October, 1995",
            text: "With Begum Sufia Kamal and Air Vice-Marshal (retd.) A. K. Khandker in the chair the official collection of memorabilia begins at the museum premises."
        },
        {
            date: "22 March, 1996",
            text: "The Liberation War Museum opens officially with the lighting of the eternal flame by the family members of the Martyrs of 1971 War of Liberation."
        },
        {
            date: "August, 1996",
            text: "Reception to Journalist Simon Dring, the first foreign journalist who gave an eye witness report in the Daily Telegraph on 30 April, 1971."
        },
        {
            date: "October, 1996",
            text: "Well known Calcutta based singer Shumon Chatterjee holds five successful concerts to raise funds for the Museum."
        },
        {
            date: "November, 1996",
            text: "Reception to famous Indian photographer Amiya Tarafdar, whose photographs of the War and suffering raised World consciousness for the Bangladesh cause."
        },
        {
            date: "December, 1996",
            text: "Various programs to celebrate the 25th Anniversary of victory in the Liberation War."
        },
        {
            date: "January, 1997",
            text: "Collection of objects and Documents from Individuals. This process continues."
        },
        {
            date: "February, 1997",
            text: "Opening of the Cafe Theater with the staging of a play by Nagorik Natyo Shamprodai followed by dinner."
        }
    ];

    return (
        <>
            {/* HERO */}
            <section className="hero hero--museum-story">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Initial Efforts</div>
                        <div className="hero-card__desc">
                            Chronological milestones and initial endeavors that laid the foundation of the Liberation War Museum in Dhaka.
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
                        <span className="cap__title">Historical Milestones</span>
                    </div>

                    <div className="block__content">
                        <div className="history-timeline">
                            {timelineEvents.map((event, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-date">{event.date}</div>
                                    <div className="timeline-body">
                                        <p className="p">{event.text}</p>
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
