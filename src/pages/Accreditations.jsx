import { useEffect } from 'react';

export default function Accreditations() {
    useEffect(() => {
        document.body.classList.add('page-museum-story');
        document.title = "Accreditations & Affiliations | Liberation War Museum";
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, []);

    const affiliations = [
        {
            title: "International Coalition of Sites of Conscience (ICSC)",
            description: "The Liberation War Museum is a founder member of the International Coalition of Sites of Conscience (established in 1998). The Coalition connects historic sites with contemporary social and human rights issues.",
            subTitle: "Notable member institutions include:",
            items: [
                "District Six Museum (South Africa)",
                "Slave Museum (Senegal)",
                "Terezin Memorial (Czechoslovakia)",
                "Civil Rights Museum (USA)",
                "Tenement Museum (USA)"
            ]
        },
        {
            title: "NGO Affairs Bureau, Bangladesh",
            description: "The Liberation War Museum is registered with the NGO Affairs Bureau of Bangladesh."
        },
        {
            title: "International Association of Genocide Scholars (IAGS)",
            description: "The Museum is an Institutional Member of IAGS, a global, interdisciplinary, and non-partisan organization dedicated to advancing research, education, and prevention of genocide."
        },
        {
            title: "Muktijuddha Smriti Trust",
            description: "The Museum operates under the Muktijuddha Smriti Trust. The Trust is registered under the Societies Act XXI of 1860 as a non-profit organization and registered with the Registrar of Joint Stock Companies, Bangladesh."
        },
        {
            title: "CSR and Tax Exemption Status",
            description: "Contributions to the Liberation War Museum fall under the Government’s CSR (Corporate Social Responsibility) program. All such contributions are declared tax-exempt."
        }
    ];

    return (
        <>
            {/* HERO */}
            <section className="hero hero--accreditations">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Accreditations & Affiliations</div>
                        <div className="hero-card__desc">
                            The Liberation War Museum is a founding member of international organizations and registered with national trusts and authorities.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <main className="museum-story-content">
                <section className="block">
                    <div className="separator"></div>
                    <div className="block__cap">
                        <span className="cap__title">Institutional Overview</span>
                    </div>

                    <div className="block__content">
                        <p className="p">
                            The Liberation War Museum in Dhaka, Bangladesh commemorates the heroic struggle of the Bengali nation for democratic and national rights. Established in 1996 through a unique citizens' initiative, the Museum preserves historical evidence, documentation, and relics of the 1971 Genocide and Liberation War.
                        </p>
                        <p className="p">
                            Over the decades, the Museum has established foundational affiliations with eminent international coalitions while operating under transparent statutory trusts and government authorizations in Bangladesh.
                        </p>
                    </div>
                </section>

                <section className="block">
                    <div className="block__cap">
                        <span className="cap__title">Affiliations and Accreditations</span>
                    </div>

                    <div className="block__content">
                        <p className="p" style={{ marginBottom: '24px' }}>
                            The Museum maintains active collaborations across international consortiums and operates under recognized statutory regulatory frameworks:
                        </p>

                        <div className="facilities-grid facilities-grid--accred">
                            {affiliations.map((item, index) => (
                                <div
                                    key={index}
                                    className={`facility-card ${item.items ? 'facility-card--featured-accred' : ''}`}
                                >
                                    <div className="facility-label">{item.title}</div>
                                    <div className="facility-value">
                                        <p className="facility-desc">{item.description}</p>
                                        {item.items && (
                                            <div className="facility-sub-items">
                                                <div className="facility-sub-title">{item.subTitle}</div>
                                                <ul className="facility-sub-list">
                                                    {item.items.map((subItem, idx) => (
                                                        <li key={idx}>
                                                            <svg className="facility-sub-ico" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                                                <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2L2 7h20L12 2z"/>
                                                            </svg>
                                                            <span>{subItem}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
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
