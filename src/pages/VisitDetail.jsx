import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { visitData } from '../data/visitData';
import Breadcrumb from '../components/Breadcrumb';
import { isRedundantBlockTitle } from '../utils/titleHelper';

export default function VisitDetail({ category }) {
    const { item } = useParams();
    const pageKey = category ? `${category}/${item}` : item;
    const data = visitData[pageKey];

    useEffect(() => {
        document.body.classList.add('page-museum-story');
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, [pageKey]);

    // Fallback if key not found
    if (!data) {
        return (
            <>
                <section className="hero hero--museum-story">
                    <div className="hero__inner hero__inner--bottom-left">
                        <div className="hero-card hero-card--dark-brush hero-card--wide">
                            <div className="hero-card__title">Visit Page Not Found</div>
                            <div className="hero-card__desc">
                                The requested visit page could not be found. Please return to the homepage or explore other sections.
                            </div>
                        </div>
                    </div>
                </section>
                <main className="museum-story-content">
                    <section className="block">
                        <div className="separator"></div>
                        <div className="block__cap">
                            <span className="cap__title">Error 404</span>
                        </div>
                        <div className="block__content">
                            <p className="p">
                                We apologize, but the sub-page you are looking for is currently unavailable or still under construction.
                            </p>
                        </div>
                    </section>
                </main>
            </>
        );
    }

    return (
        <>
            {/* HERO SECTION */}
            <section className="hero hero--museum-story">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">{data.title}</div>
                        <div className="hero-card__desc">{data.desc}</div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <main className="museum-story-content">
                {data.blocks.map((block, index) => {
                    const isRedundant = isRedundantBlockTitle(data.title, block.title, index, data.blocks.length);
                    return (
                        <section className="block" key={index}>
                            {index === 0 && (
                                <>
                                    <Breadcrumb />
                                    <div className="separator"></div>
                                </>
                            )}
                            {!isRedundant && block.title && (
                                <div className="block__cap">
                                    <span className="cap__title">{block.title}</span>
                                </div>
                            )}
                            <div className="block__content">
                                {block.paragraphs.map((pText, pIndex) => (
                                    <p className="p" key={pIndex} dangerouslySetInnerHTML={{ __html: pText }} />
                                ))}
                            </div>
                        </section>
                    );
                })}
            </main>
        </>
    );
}
