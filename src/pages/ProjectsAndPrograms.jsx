import { useEffect, useState } from 'react';

export default function ProjectsAndPrograms() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [activeGallery, setActiveGallery] = useState([]);

    const reachoutImages = [
        "/assets/about/Projects and Programs/Reachout program/228041.jpg",
        "/assets/about/Projects and Programs/Reachout program/407447.jpg",
        "/assets/about/Projects and Programs/Reachout program/557346.jpg",
        "/assets/about/Projects and Programs/Reachout program/935683.jpg",
        "/assets/about/Projects and Programs/Reachout program/964108.jpg",
        "/assets/about/Projects and Programs/Reachout program/990624.jpg"
    ];

    const outreachImages = [
        "/assets/about/Projects and Programs/Outreach Program/142036.jpg",
        "/assets/about/Projects and Programs/Outreach Program/210002.jpg",
        "/assets/about/Projects and Programs/Outreach Program/377644.jpg",
        "/assets/about/Projects and Programs/Outreach Program/486784.jpg",
        "/assets/about/Projects and Programs/Outreach Program/486869.jpg",
        "/assets/about/Projects and Programs/Outreach Program/666686.jpg",
        "/assets/about/Projects and Programs/Outreach Program/793431.jpg",
        "/assets/about/Projects and Programs/Outreach Program/835399.jpg"
    ];

    const openLightbox = (index, gallery) => {
        setSelectedIndex(index);
        setActiveGallery(gallery);
        setZoomLevel(1);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
        setActiveGallery([]);
        setZoomLevel(1);
        document.body.style.overflow = '';
    };

    const showPrev = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : activeGallery.length - 1));
        setZoomLevel(1);
    };

    const showNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev < activeGallery.length - 1 ? prev + 1 : 0));
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
    useEffect(() => {
        document.body.classList.add('page-projects-programs');
        return () => {
            document.body.classList.remove('page-projects-programs');
        };
    }, []);

    return (
        <>
            {/* HERO (Projects and Programs Specific) */}
            <section className="hero hero--projects-programs">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Projects and Programs</div>
                        <div className="hero-card__desc">
                            Explore the museum's educational programs, community outreach, documentary festivals, and research advocating for human rights and justice.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <main className="museum-story-content">
                <section className="block">
                    <div className="separator"></div>

                    <div className="block__content">
                        <h3>School Programs</h3>
                        <p className="p">
                            In 2004, with financial assistance from the “Manusher Jonno Foundation” the museum embarked on a programme that was to become one of the hallmarks of this activity oriented museum. It started ‘busing-in’ students from the various schools of Dhaka city and give them a short exposure to the museum, hold a quiz programme and also educate students on their rights as children and human beings and also educate them on becoming global citizens, in which tolerance and a pluralist society was promoted. This programme was expanded in 2007 when the museum was able to acquire a 40 ft. bus which enabled us to bring the Museum to the reach of schoolchildren in the remotest villages of the country. A new dimension was also added to the usual school programme in this reach-out programme. The students were encouraged to interview their relatives/friends who had witnessed or taken part in the war and write down these first-hand and real time accounts and send it to the Museum. Over the last 7 years, this has evolved into a “Oral History” collection, of 21,000 pieces of writing which, we have been given to understand (unconfirmed) is the second largest collection of oral history documents in the world.
                        </p>
                        <p className="p">
                            Up until June of 2014, 147,000 school-children of Dhaka city and over 561,000 school-children in the remotest parts of the country have been exposed to the history of the country and have received education on human rights and the need for tolerance in today’s society. In the evenings, the exhibits of the bus has been visited by children from nearby schools, which were not part of the education programme and also by the adults in that village. An exact count has not been taken, but our estimate is that another 350,000 children and adults have visited the exhibits in the bus in this way. The Bangladesh Government has been impressed enough by the success that this reach-out programme has achieved that they have donated a second bus to the Museum, thus doubling our capacity to visit rural areas. So far the buses have covered 48 out of the 64 districts of the country. The human rights and the tolerance programmes are presented to the students through a series of cartoon-posters, which have been created by two of the most eminent painters of the country.
                        </p>

                        <h3>Liberation Docfest Bangladesh</h3>
                        <p className="p">
                            Liberation Docfest Bangladesh is a festival dedicated to documentary films, seeking to highlight the struggle for Liberation & Human Rights of people in various parts of the world. It seeks to uphold new forms of viewing the human struggle and suffering for justice in global perspective. Liberation Docfest Bangladesh is usually held in April.<br />
                            For more details please visit: <a href="http://liberationdocfestbd.org" target="_blank" rel="noopener noreferrer">liberationdocfestbd.org</a>
                        </p>

                        <h3>Centre for the Study of Genocide and Justice</h3>
                        <p className="p">
                            The Center for the Study of Genocide and Justice (CSGJ), established by the Liberation War Museum in 2014, is aimed to organise and promote research, documentation, study, education and networking on genocide, crimes against humanity and war crimes committed in Bangladesh and other parts of the world. The Center will work to strengthen the national and global efforts for Genocide Prevention (GP) and the non-violent method of Responsibility to Protect (R2P). The Center will strengthen the initiatives to establish justice for mass atrocities and for recognition, restitution, reparation and healing of the victims. The core mission of CSGJ is to commemorate those who perished in genocide, to celebrate who survived, to educate upcoming generations and to dedicate its effort to uphold the cause of truth and justice.
                        </p>

                        <h3>The Institute for Liberation War Studies</h3>
                        <p className="p">
                            This Institute is still in its formative stages and like the Centre for Genocide Studies, it will also be associated with a University in Bangladesh. Amongst the faculty members of the institute will be academicians and direct participants in the War as well as eminent international personalities who are connected with the Bangladesh War of Liberation of 1971.
                        </p>
                    </div>
                </section>

                <section className="block">
                    <div className="block__cap">
                        <span className="cap__title">Reachout Program</span>
                    </div>

                    <div className="block__content">
                        <p className="p">
                            The Reach-Out Program of the museum was initiated on 18 July 2004 and expanded in 2007 when the museum was able to acquire a 40 ft. bus (hereinafter, Mobile Museum) which enabled us to bring the museum to the reach of schoolchildren in the remotest villages of the country.
                        </p>
                        <p className="p">
                            Currently, the program titled “Human Rights and Peace Education in the Light of History of Liberation War” is being funded by the Ministry of Liberation War Affairs, Government of Bangladesh. The objective of the Reach-Out Program is to educate the students who had not been exposed to the glory and the pain that the Bengali nation had experienced in 1971. Another component of the program is to combat the growing intolerance and human rights abuses in the present society. Through this program, students are taught that that tolerance has been an intrinsic Bengali trait for centuries and in the globalized world today, one of the most important needs of the society is to respect the otherness of the other person.
                        </p>
                        <p className="p">
                            The Mobile Museum travels to village-schools in the remotest locations of the country and the students are shown the exhibits in the mobile museum. A film in shown on struggle for independence. A separate exhibition on “Universal Declaration of Human Rights” and “If the world had been one village (outlining the pluralistic world that the students will encounter when they step into their world). Both these “Global Village” and the “30 Universal Human Rights” education were done through two series of cartoons drawn by two of the most prominent painters of the country.
                        </p>
                        <p className="p">
                            An oral history project under this program has been initiated where the students above grade VII are encouraged to interview elders in the family to recount their experiences and heroism during the Liberation War. In the process more than 50,922 (as of August 2021) pieces of oral history has been collected.
                        </p>
                        <p className="p">
                            These written scripts are preserved in museum archives. The most moving and revealing stories are printed in wall magazines (till date, 32 have been published) distributed to the schools. The museum communicates with the teaching representatives (known as Network Teacher) in order to collect the oral testimonies. Till August 2021, 2,449 Network Teachers have been working in this Reach-Out Program. The selected oral testimonies of the students have been published in 9 volumes by the Liberation War Museum.
                        </p>
                        <p className="p">
                            The number of students in the villages who have been exposed to this Reach-Out program so far is 13,24,471 (as of August 2021). In the afternoons, the exhibits of the bus have been visited by children from nearby schools, which were not part of the education program and also by the adults in that village. Till August 2021, around 9,43,881 adults from the localities have visited the exhibits of the bus in this way. The Bangladesh Government has been impressed enough by the success of this Reach-Out Program to have donated a second bus to the Museum, thus doubling the museum’s capacity to visit rural areas. The buses have covered 432 Upazillas of 64 districts of the country including 2,035 educational institutions and are currently conducting the 2nd round of covering the whole country.
                        </p>

                        <h3>Reach-Out Project Coordination</h3>
                        <p className="p">
                            <strong>Ranjan Kumar Singha</strong><br />
                            Program Officer, Liberation War Museum<br />
                            Mobile: 01720191385<br />
                            Email: <a href="mailto:ranjan_kumar-04@yahoo.com">ranjan_kumar-04@yahoo.com</a>
                        </p>

                        <h3 style={{ marginTop: '40px' }}>Reachout Program Highlights</h3>
                        <div className="museum-gallery-grid">
                            {reachoutImages.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`Reachout Program ${index + 1}`}
                                    className="gallery-img"
                                    onClick={() => openLightbox(index, reachoutImages)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section className="block">
                    <div className="block__cap">
                        <span className="cap__title">Outreach Program</span>
                    </div>

                    <div className="block__content">
                        <p className="p">
                            Since 1997, the museum started the Outreach Program- ‘busing in’ students from the various schools of Dhaka city to give them an exposure to the museum. They are welcomed by the Outreach team and are shown a documentary on the emergence of Bangladesh titled ‘Muktishangramer Itihash 1947-1971’ and later taken to visit the galleries. Once they are done visiting the galleries, a quiz competition on what they had learnt about the Liberation War. The highest scorers are awarded by the Trustees of the Liberation War Museum.
                        </p>
                        <p className="p">
                            Till August 2021, around 873 educational institutions, including schools, colleges, universities and madrasas have sent their students. A total of 2,93,736 students of Dhaka city have visited the museum in this way. The teachers who bring the students to the museum are named as the Network Teacher. Till 2021, 1518 Network Teachers were engaged in this Outreach program. On 28 April, 2017, the museum has arranged a Network Teachers Workshop comprising of 13 Districts of Dhaka Division.
                        </p>

                        <h3 style={{ marginTop: '40px' }}>Outreach Program Highlights</h3>
                        <div className="museum-gallery-grid">
                            {outreachImages.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`Outreach Program ${index + 1}`}
                                    className="gallery-img"
                                    onClick={() => openLightbox(index, outreachImages)}
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
                            src={activeGallery[selectedIndex]}
                            alt={`Expanded gallery image ${selectedIndex + 1}`}
                            style={{
                                width: `${90 * zoomLevel}vw`,
                                height: `${90 * zoomLevel}vh`
                            }}
                        />
                        <div className="lightbox-counter">
                            {selectedIndex + 1} / {activeGallery.length}
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
