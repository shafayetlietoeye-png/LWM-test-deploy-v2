import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PhotoArchive from './PhotoArchive';
import StrugglePictorial from './StrugglePictorial';
import Documents from './Documents';
import HistoricalSites from './HistoricalSites';
import OralHistory from './OralHistory';
import FacilitiesAmenities from './FacilitiesAmenities';
import Breadcrumb from '../components/Breadcrumb';

const PAGE_TITLES = {
    'gallery-1': 'Gallery 1: Heritage and Struggles',
    'gallery-2': 'Gallery 2: Rights and Sacrifices',
    'gallery-3': 'Gallery 3: Battles and Friends',
    'gallery-4': 'Gallery 4: Victory and Values',
    'bengalis-and-bengal': 'Bengalis and Bengal',
    'history-of-bangladesh': 'History of Bangladesh',
    'emergence-of-bangladesh': 'Emergence of Bangladesh',
    'proclamation-of-independence': 'Proclamation of Independence',
    'liberation-forces-and-commanders': 'Liberation Armed Forces and Sector Commanders',
    'liberation-war-forces': 'Liberation War Forces',
    'evolution-of-principles-1972': 'Evolution of Fundamental Principles of 1972',
    'concert-for-bangladesh': 'Concert for Bangladesh and other Cultural Activities',
    'museum-map': 'Museum Map',
    'facilities-and-amenities': 'Facilities & Amenities',
    'library': 'Library',
    'kiosk': 'Kiosk',
    'exhibition-gallery': 'Exhibition Gallery',
    'cafes': 'Cafes',
    'documents': 'Documents',
    'oral-history': 'Oral History',
    'audio-visual-archive': 'Audio Visual Archive',
    'historical-sites': 'Historical Sites',
    'photo-archive': 'Photo Archive',
    'struggle-of-bangladesh-pictorial': 'Struggle of Bangladesh: Pictorial',
};

export default function ExplorePage() {
    const { pageKey } = useParams();

    // Dedicated pages for specific keys
    if (pageKey === 'photo-archive') return <PhotoArchive />;
    if (pageKey === 'struggle-of-bangladesh-pictorial') return <StrugglePictorial />;
    if (pageKey === 'documents') return <Documents />;
    if (pageKey === 'historical-sites') return <HistoricalSites />;
    if (pageKey === 'oral-history') return <OralHistory />;
    if (pageKey === 'facilities-and-amenities' || pageKey === 'facilities-amenities') {
        return <FacilitiesAmenities />;
    }
    if (pageKey === 'library' || pageKey === 'kiosk' || pageKey === 'exhibition-gallery' || pageKey === 'cafes') {
        return <FacilitiesAmenities initialTab={pageKey} />;
    }

    const title = PAGE_TITLES[pageKey] || 'Coming Soon';

    useEffect(() => {
        document.body.classList.add('page-museum-story');
        document.title = `${title} | Liberation War Museum`;
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, [title]);

    return (
        <>
            {/* HERO */}
            <section className="hero hero--museum-story">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">{title}</div>
                        <div className="hero-card__desc">
                            Liberation War Museum — Explore our collections, galleries, and resources.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <main className="museum-story-content">
                <section className="block">
                    <Breadcrumb />
                    <div className="separator"></div>
                    <div className="block__content">
                        <p className="p">
                            This section of the Liberation War Museum is dedicated to <strong>{title}</strong>.
                            Our curators are currently preparing comprehensive content for this topic.
                            Please check back soon for in-depth information, artefacts, and historical accounts.
                        </p>
                        <p className="p">
                            The Liberation War Museum is committed to preserving and sharing the history of Bangladesh's liberation struggle.
                            Each gallery and archive section offers visitors a unique perspective on the nation's journey to independence.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
