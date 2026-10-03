import { useState, useEffect, useCallback, useRef } from 'react';
import Breadcrumb from '../components/Breadcrumb';

const SPEECHES = [
    { year: '2021', speaker: 'Helen Jarvis',            topic: 'International Advocacy and the Road to Recognition for 1971', pdf: null },
    { year: '2019', speaker: 'Ajoy Roy',                topic: 'Secularism, Science, and the Spirit of the Liberation War',   pdf: null },
    { year: '2018', speaker: 'Dr. Syed Anwar Hossain',  topic: 'Historiography of 1971: Documenting and Preserving the Truth', pdf: null },
    { year: '2016', speaker: 'Abul Momen',              topic: 'Cultural Mobilisation and the Democratic Spirit of the Struggle', pdf: null },
    { year: '2015', speaker: 'Biren Som',               topic: 'Civil Society, Art, and Rebuilding the Post-War Nation',      pdf: null },
    { year: '2014', speaker: 'Adam Jones',              topic: 'Bangladesh 1971 in the Global Context of Comparative Genocide Studies', pdf: null },
    { year: '2013', speaker: 'Dr. Atiur Rahman',        topic: 'The Economic Vision of Sonar Bangla and Post-War Recovery',   pdf: null },
    { year: '2012', speaker: 'Richard Rogers',          topic: 'International Law, Justice, and Accountability for War Crimes', pdf: null },
    { year: '2011', speaker: 'IAN Martin',              topic: 'The United Nations, Human Rights, and the Legacy of the Liberation War', pdf: null },
];

export default function AnnualSpeeches() {
    const [selectedSpeech, setSelectedSpeech] = useState(null);
    const [isFullscreen, setIsFullscreen]     = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {
        document.body.classList.add('page-museum-story');
        document.title = 'Annual Speeches | Liberation War Museum';
        return () => {
            document.body.classList.remove('page-museum-story');
            document.body.style.overflow = '';
        };
    }, []);

    const currentIndex = selectedSpeech
        ? SPEECHES.findIndex((s) => s.year === selectedSpeech.year)
        : -1;

    const goPrev = useCallback(() => {
        if (currentIndex > 0) {
            setSelectedSpeech(SPEECHES[currentIndex - 1]);
            if (modalRef.current) modalRef.current.scrollTop = 0;
        }
    }, [currentIndex]);

    const goNext = useCallback(() => {
        if (currentIndex < SPEECHES.length - 1) {
            setSelectedSpeech(SPEECHES[currentIndex + 1]);
            if (modalRef.current) modalRef.current.scrollTop = 0;
        }
    }, [currentIndex]);

    const openSpeech = (speech) => {
        setSelectedSpeech(speech);
        setIsFullscreen(false);
        document.body.style.overflow = 'hidden';
    };

    const closeSpeech = () => {
        setSelectedSpeech(null);
        setIsFullscreen(false);
        document.body.style.overflow = '';
    };

    useEffect(() => {
        const onKey = (e) => {
            if (!selectedSpeech) return;
            if (e.key === 'Escape')      closeSpeech();
            if (e.key === 'ArrowLeft')   goPrev();
            if (e.key === 'ArrowRight')  goNext();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [selectedSpeech, goPrev, goNext]);

    return (
        <>
            {/* HERO */}
            <section className="hero hero--museum-story">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Annual Speeches</div>
                        <div className="hero-card__desc">
                            Explore the collection of annual keynote addresses and memorial speeches delivered at the Liberation War Museum.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <main className="museum-story-content">
                <section className="block">
                    <Breadcrumb />
                    <div className="separator"></div>
                    <div className="block__cap">
                        <span className="cap__title">Speeches Archive</span>
                    </div>
                    <div className="block__content">
                        <div className="speeches-shelf">
                            {SPEECHES.map((speech) => (
                                <div key={speech.year} className="speech-book-wrapper">
                                    <div
                                        className={`speech-book${speech.pdf ? ' speech-book--link' : ''}`}
                                        onClick={() => openSpeech(speech)}
                                    >
                                        <div className="speech-book__spine"></div>
                                        <div className="speech-book__cover">
                                            <div className="speech-book__header">
                                                <span>Liberation War Museum</span>
                                                <span>Annual Speech Series</span>
                                            </div>
                                            <div className="speech-book__seal-bg"></div>
                                            <div className="speech-book__middle">
                                                <div className="speech-book__year">{speech.year}</div>
                                                <div className="speech-book__speaker">{speech.speaker}</div>
                                                <div className="speech-book__divider"></div>
                                                <div className="speech-book__title">"{speech.topic}"</div>
                                            </div>
                                            <div className="speech-book__footer">
                                                <div className={`speech-book__badge${speech.pdf ? ' speech-book__badge--available' : ''}`}>
                                                    {speech.pdf ? 'Open Document' : 'Archive File'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="speech-book-label">
                                        <span className="speech-book-label__year">Speech {speech.year}</span>
                                        <button
                                            className={`speech-book-label__btn${speech.pdf ? ' speech-book-label__btn--available' : ''}`}
                                            onClick={() => openSpeech(speech)}
                                        >
                                            {speech.pdf ? 'Open PDF' : 'Unavailable'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* ARCHIVAL VIEWER MODAL */}
            {selectedSpeech && (
                <div
                    className={`speech-modal-overlay${isFullscreen ? ' speech-modal-overlay--fullscreen' : ''}`}
                    onClick={closeSpeech}
                >
                    <div
                        className={`speech-modal${isFullscreen ? ' speech-modal--fullscreen' : ''}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* TOOLBAR */}
                        <header className="speech-modal__header">
                            {/* Left: year + title */}
                            <div className="speech-modal__header-left">
                                <span className="speech-modal__year-badge">{selectedSpeech.year}</span>
                                <div className="speech-modal__heading-meta">
                                    <span className="speech-modal__heading-title">{selectedSpeech.topic}</span>
                                    <span className="speech-modal__heading-sub">Keynote by <strong>{selectedSpeech.speaker}</strong></span>
                                </div>
                            </div>

                            {/* Centre: prev / counter / next */}
                            <div className="speech-modal__nav-center">
                                <button
                                    className="speech-modal__nav-btn"
                                    onClick={goPrev}
                                    disabled={currentIndex <= 0}
                                    title="Previous (←)"
                                >
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                        <polyline points="15 18 9 12 15 6"></polyline>
                                    </svg>
                                    {currentIndex > 0 && <span>{SPEECHES[currentIndex - 1].year}</span>}
                                </button>

                                <span className="speech-modal__nav-counter">{currentIndex + 1} / {SPEECHES.length}</span>

                                <button
                                    className="speech-modal__nav-btn"
                                    onClick={goNext}
                                    disabled={currentIndex >= SPEECHES.length - 1}
                                    title="Next (→)"
                                >
                                    {currentIndex < SPEECHES.length - 1 && <span>{SPEECHES[currentIndex + 1].year}</span>}
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                        <polyline points="9 18 15 12 9 6"></polyline>
                                    </svg>
                                </button>
                            </div>

                            {/* Right: fullscreen + close */}
                            <div className="speech-modal__header-right">
                                <button
                                    className="speech-modal__icon-btn"
                                    onClick={() => setIsFullscreen(!isFullscreen)}
                                    title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
                                >
                                    {isFullscreen ? (
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="4 14 10 14 10 20"></polyline>
                                            <polyline points="20 10 14 10 14 4"></polyline>
                                            <line x1="14" y1="10" x2="21" y2="3"></line>
                                            <line x1="3" y1="21" x2="10" y2="14"></line>
                                        </svg>
                                    ) : (
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <polyline points="9 21 3 21 3 15"></polyline>
                                            <line x1="21" y1="3" x2="14" y2="10"></line>
                                            <line x1="3" y1="21" x2="10" y2="14"></line>
                                        </svg>
                                    )}
                                </button>

                                <button
                                    className="speech-modal__close-btn"
                                    onClick={closeSpeech}
                                    aria-label="Close"
                                    title="Close (Esc)"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>
                        </header>

                        {/* SCROLLABLE BODY */}
                        <div className="speech-modal__body" ref={modalRef}>
                            {selectedSpeech.pdf ? (
                                <iframe
                                    src={`${selectedSpeech.pdf}#toolbar=0`}
                                    title={`Annual Speech ${selectedSpeech.year}`}
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                />
                            ) : (
                                /* Archival Paper Document */
                                <article className="speech-monograph">
                                    {/* Museum letterhead */}
                                    <div className="speech-monograph__header">
                                        <div className="speech-monograph__crest">
                                            <div className="speech-monograph__crest-circle">
                                                <span className="speech-monograph__crest-bengali">মুক্তিযুদ্ধ<br/>জাদুঘর</span>
                                                <span className="speech-monograph__crest-est">ESTD 1996</span>
                                            </div>
                                        </div>
                                        <div className="speech-monograph__letterhead">
                                            <span className="speech-monograph__org">LIBERATION WAR MUSEUM ARCHIVES</span>
                                            <span className="speech-monograph__address">Agargaon, Dhaka, Bangladesh · Est. 1996</span>
                                            <span className="speech-monograph__series">Annual Foundation Memorial Lecture Series</span>
                                        </div>
                                    </div>

                                    <div className="speech-monograph__rule">
                                        <span className="speech-monograph__rule-diamond">◆</span>
                                    </div>

                                    {/* Red weathered stamp */}
                                    <div className="speech-monograph__stamp">
                                        <span className="stamp-top">LWM ARCHIVES</span>
                                        <span className="stamp-main">PRESERVATION<br/>SCAN PENDING</span>
                                        <span className="stamp-bottom">SERIES {selectedSpeech.year}</span>
                                    </div>

                                    {/* Lecture title block */}
                                    <div className="speech-monograph__hero-block">
                                        <div className="speech-monograph__doc-type">ANNUAL MEMORIAL SPEECH</div>
                                        <h2 className="speech-monograph__speech-title">
                                            "{selectedSpeech.topic}"
                                        </h2>
                                        <div className="speech-monograph__speaker-strip">
                                            <div className="speaker-avatar">
                                                {selectedSpeech.speaker.split(' ').slice(-2).map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <div className="speaker-name">{selectedSpeech.speaker}</div>
                                                <div className="speaker-year">Delivered {selectedSpeech.year}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Detail rows */}
                                    <div className="speech-monograph__details">
                                        <div className="speech-detail-row">
                                            <span className="detail-label">YEAR</span>
                                            <span className="detail-value">{selectedSpeech.year}</span>
                                        </div>
                                        <div className="speech-detail-row">
                                            <span className="detail-label">SPEAKER</span>
                                            <span className="detail-value">{selectedSpeech.speaker}</span>
                                        </div>
                                        <div className="speech-detail-row">
                                            <span className="detail-label">SUBJECT</span>
                                            <span className="detail-value detail-value--italic">{selectedSpeech.topic}</span>
                                        </div>
                                        <div className="speech-detail-row">
                                            <span className="detail-label">STATUS</span>
                                            <span className="detail-value">Archived Physical Collection</span>
                                        </div>
                                        <div className="speech-detail-row">
                                            <span className="detail-label">VENUE</span>
                                            <span className="detail-value">Liberation War Museum, Dhaka</span>
                                        </div>
                                    </div>

                                    <p className="speech-monograph__note">
                                        This official transcript is currently undergoing digital archival processing.
                                        The high-resolution document is scheduled for preservation release and will be viewable online shortly.
                                    </p>

                                    {/* Footer */}
                                    <div className="speech-monograph__footer">
                                        <div className="monograph-signature">
                                            <div className="monograph-sig-line"></div>
                                            <span>Chief Archivist, LWM</span>
                                        </div>
                                        <div className="monograph-seal">
                                            <div className="seal-ring">
                                                <span className="seal-top">LIBERATION WAR</span>
                                                <span className="seal-star">★</span>
                                                <span className="seal-bot">MUSEUM · 1996</span>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
