import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

export default function VirtualTour() {
    useEffect(() => {
        document.body.classList.add('page-virtual-tour');
        return () => {
            document.body.classList.remove('page-virtual-tour');
        };
    }, []);

    return (
        <>
            {/* HERO (Virtual Tour Specific) */}
            <section className="hero hero--virtual-tour">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush">
                        <div className="hero-card__title">Virtual Tour</div>
                        <div className="hero-card__desc">
                            Four galleries portray Bangladesh’s journey—from British rule to the 1947 era and the nine-month Liberation War of 1971 for freedom and identity.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION (Video Tutorial) */}
            <main className="virtual-tour-content">
                <section className="block">
                    <Breadcrumb />
                    <div className="separator"></div>

                    <div className="vt-video-box">
                        <p className="vt-instruction">If you are facing any difficulty in getting this virtual museum experience,
                            kindly watch the video below:</p>
                        <div className="vt-video-container">
                            <img src="/assets/Virtual Tour youtube image.png" alt="Virtual Tour Tutorial" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
