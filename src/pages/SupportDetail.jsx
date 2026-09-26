import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supportData } from '../data/supportData';
import Breadcrumb from '../components/Breadcrumb';
import { isRedundantBlockTitle } from '../utils/titleHelper';
import MembershipOverview from '../components/MembershipOverview';

export default function SupportDetail() {
    const { category, item } = useParams();
    const pageKey = item ? `${category}/${item}` : category;
    const data = supportData[pageKey];
    const isMembershipOverview = pageKey === 'membership/overview' || pageKey === 'membership';

    useEffect(() => {
        document.body.classList.add('page-museum-story');
        if (data?.title) {
            document.title = `${data.title} | Liberation War Museum`;
        }
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, [pageKey, data]);

    // Fallback if key not found
    if (!data) {
        return (
            <>
                <section className="hero hero--museum-story">
                    <div className="hero__inner hero__inner--bottom-left">
                        <div className="hero-card hero-card--dark-brush hero-card--wide">
                            <div className="hero-card__title">Support Page Not Found</div>
                            <div className="hero-card__desc">
                                The requested support page could not be found. Please return to the homepage or explore other sections.
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
                {isMembershipOverview ? (
                    <>
                        <div className="separator"></div>
                        <Breadcrumb />
                        <MembershipOverview />
                    </>
                ) : (
                    data.blocks.map((block, index) => {
                        const isRedundant = isRedundantBlockTitle(data.title, block.title, index, data.blocks.length);
                        return (
                            <section className="block" key={index}>
                                {index === 0 && (
                                    <>
                                        <div className="separator"></div>
                                        <Breadcrumb />
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
                                {block.cta && (
                                    <div style={{ marginTop: '20px' }}>
                                        <Link 
                                            to={block.cta.link} 
                                            className="btn btn--primary"
                                            style={{ 
                                                display: 'inline-flex', 
                                                alignItems: 'center', 
                                                gap: '8px',
                                                textDecoration: 'none', 
                                                color: '#fff', 
                                                fontWeight: 'bold', 
                                                backgroundColor: '#8d2024', 
                                                padding: '10px 20px', 
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {block.cta.label}
                                        </Link>
                                    </div>
                                )}
                                </div>
                            </section>
                        );
                    })
                )}
            </main>
        </>
    );
}
