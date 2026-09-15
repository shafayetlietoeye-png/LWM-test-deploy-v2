import { useEffect, useState, useRef } from 'react';
import { objectDonorsData } from '../data/objectDonorsData';

export default function ObjectDonors() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLetter, setSelectedLetter] = useState('All');
    const [showSidebar, setShowSidebar] = useState(false);
    const tabsRef = useRef(null);
    
    useEffect(() => {
        document.body.classList.add('page-museum-story');
        
        const handleScroll = () => {
            if (tabsRef.current) {
                const rect = tabsRef.current.getBoundingClientRect();
                // Show floating sidebar only when top horizontal tabs are completely scrolled out of view
                setShowSidebar(rect.bottom < 0);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.body.classList.remove('page-museum-story');
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Generate letters A to Z
    const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

    // Filter donors based on letter and search query
    const filteredGroups = objectDonorsData.map(group => {
        // If searching, search globally (ignore active tab). Otherwise, filter by selected letter tab.
        const isSearching = searchQuery.trim() !== '';
        if (!isSearching && selectedLetter !== 'All' && group.letter !== selectedLetter) {
            return null;
        }

        // Filter donors by search query (name only)
        const matchingDonors = group.donors.filter(donor => {
            return donor.name.toLowerCase().includes(searchQuery.toLowerCase());
        });

        if (matchingDonors.length === 0) {
            return null;
        }

        return {
            ...group,
            donors: matchingDonors
        };
    }).filter(Boolean);

    return (
        <>
            {/* HERO SECTION */}
            <section className="hero hero--museum-story">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Object Donor List</div>
                        <div className="hero-card__desc">
                            Honoring the individuals and families who have contributed historical artifacts, personal effects, and documents to preserve the memory of 1971.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <main className="museum-story-content">
                <section className="block">
                    <div className="separator"></div>
                    
                    {/* Search and Filters Bar */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                        {/* Search Input */}
                        <div style={{ position: 'relative', width: '100%' }}>
                            <span style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#888', display: 'flex', alignItems: 'center' }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Search by donor name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '12px 12px 12px 45px',
                                    border: '1px solid #d4cbb3',
                                    borderRadius: '6px',
                                    fontSize: '1rem',
                                    backgroundColor: '#fff',
                                    color: '#1a1512',
                                    outline: 'none',
                                    boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)',
                                    transition: 'border-color 0.2s'
                                }}
                            />
                        </div>

                        {/* Alphabet Filter Tabs */}
                        <div ref={tabsRef} style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', padding: '10px 0', borderBottom: '1px solid #e8e3d5' }}>
                            <button
                                onClick={() => setSelectedLetter('All')}
                                style={{
                                    padding: '6px 14px',
                                    borderRadius: '3px',
                                    border: selectedLetter === 'All' ? '1px solid #b38235' : '1px solid #d4cbb3',
                                    backgroundColor: selectedLetter === 'All' ? '#0a3a24' : '#fff',
                                    color: selectedLetter === 'All' ? '#fcfbf7' : '#1a1512',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    boxShadow: selectedLetter === 'All' ? 'inset 0 1px 0 rgba(255,255,255,0.15), 0 2px 4px rgba(0,0,0,0.15)' : 'none',
                                    transition: 'all 0.2s'
                                }}
                            >
                                All
                            </button>
                            {alphabet.map(letter => {
                                const hasData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'Y', 'Z'].includes(letter);
                                const isSelected = selectedLetter === letter;
                                return (
                                    <button
                                        key={letter}
                                        onClick={() => hasData && setSelectedLetter(letter)}
                                        disabled={!hasData}
                                        style={{
                                            width: '35px',
                                            height: '35px',
                                            borderRadius: '3px',
                                            border: isSelected ? '1px solid #b38235' : '1px solid #d4cbb3',
                                            backgroundColor: isSelected ? '#0a3a24' : '#fff',
                                            color: isSelected ? '#fcfbf7' : (hasData ? '#1a1512' : '#ccc'),
                                            fontWeight: 'bold',
                                            cursor: hasData ? 'pointer' : 'not-allowed',
                                            opacity: hasData ? 1 : 0.4,
                                            boxShadow: isSelected ? 'inset 0 1px 0 rgba(255,255,255,0.15), 0 2px 4px rgba(0,0,0,0.15)' : 'none',
                                            transition: 'all 0.2s'
                                        }}
                                        title={!hasData ? 'No records for this letter yet' : ''}
                                    >
                                        {letter}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Donors List Rendering */}
                    {filteredGroups.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '50px 20px', backgroundColor: '#fcfbf7', border: '1px solid #e8e3d5', borderRadius: '6px' }}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" style={{ marginBottom: '15px' }}>
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="8" y1="12" x2="16" y2="12"></line>
                            </svg>
                            <p style={{ fontSize: '1.1rem', color: '#666', margin: 0 }}>
                                No donors or objects found matching your search.
                            </p>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
                            {filteredGroups.map(group => (
                                <div key={group.letter} id={`donor-group-${group.letter}`} style={{ marginBottom: '20px', scrollMarginTop: '100px' }}>
                                    {/* Letter Category Header using native block caps style */}
                                    <div className="block__cap" style={{ display: 'flex', alignItems: 'baseline', gap: '15px', borderBottom: '2px solid #b38235', paddingBottom: '8px', marginBottom: '25px' }}>
                                        <span className="cap__title" style={{ fontSize: '1.8rem', color: '#0d4228', margin: 0 }}>
                                            {group.letter}
                                        </span>
                                        <span style={{ fontSize: '1.05rem', color: '#666', fontWeight: 'bold' }}>
                                            ({group.donors.length} {group.donors.length === 1 ? 'Donor' : 'Donors'})
                                        </span>
                                    </div>

                                    {/* Donors List (Simple & Minimal Heritage style) */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                        {group.donors.map((donor, idx) => (
                                            <div 
                                                key={idx}
                                                style={{
                                                    borderBottom: '1px solid #e8e3d5',
                                                    paddingBottom: '25px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: '8px'
                                                }}
                                            >
                                                <h3 style={{ 
                                                    margin: 0, 
                                                    fontSize: '1.35rem', 
                                                    color: '#8d2024', 
                                                    fontFamily: "'Roboto Slab', serif",
                                                    fontWeight: '700'
                                                }}>
                                                    {donor.name}
                                                </h3>
                                                <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                    {donor.donations.map((donation, dIdx) => (
                                                        <li 
                                                            key={dIdx} 
                                                            style={{ 
                                                                fontSize: '1.05rem', 
                                                                color: '#333', 
                                                                lineHeight: '1.6',
                                                                paddingLeft: '20px',
                                                                position: 'relative',
                                                                fontFamily: "'Roboto', sans-serif"
                                                            }}
                                                        >
                                                            <span style={{ position: 'absolute', left: 0, color: '#8d2024', fontWeight: 'bold' }}>•</span>
                                                            {donation}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </main>

            {/* FLOATING RIGHT SIDEBAR INDEX */}
            <style>{`
                @media (max-width: 767px) {
                    .floating-index-sidebar {
                        display: none !important;
                    }
                }
            `}</style>
            <div 
                className="floating-index-sidebar"
                style={{
                    position: 'fixed',
                    right: '25px',
                    top: '50%',
                    transform: showSidebar ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0.95)',
                    opacity: showSidebar ? 1 : 0,
                    visibility: showSidebar ? 'visible' : 'hidden',
                    pointerEvents: showSidebar ? 'auto' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    backgroundColor: 'rgba(250, 236, 207, 0.95)',
                    border: '1px solid #d4cbb3',
                    borderRadius: '6px',
                    padding: '10px 6px',
                    boxShadow: '0 4px 12px rgba(26,21,18,0.1)',
                    zIndex: 100,
                    fontFamily: "'Roboto', sans-serif",
                    transition: 'opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease'
                }}
            >
                {alphabet.map(letter => {
                    const hasData = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'Y', 'Z'].includes(letter);
                    return (
                        <button
                            key={letter}
                            onClick={() => {
                                if (hasData) {
                                    const element = document.getElementById(`donor-group-${letter}`);
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }
                            }}
                            disabled={!hasData}
                            style={{
                                border: 'none',
                                background: 'none',
                                color: hasData ? '#8d2024' : '#ccc',
                                fontWeight: 'bold',
                                fontSize: '0.82rem',
                                width: '20px',
                                height: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: hasData ? 'pointer' : 'not-allowed',
                                padding: 0,
                                borderRadius: '2px',
                                transition: 'background-color 0.2s'
                            }}
                            onMouseEnter={(e) => {
                                if (hasData) {
                                    e.currentTarget.style.backgroundColor = '#0a3a24';
                                    e.currentTarget.style.color = '#fcfbf7';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (hasData) {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = '#0a3a24';
                                }
                            }}
                            title={!hasData ? 'No records for this letter yet' : `Go to letter ${letter}`}
                        >
                            {letter}
                        </button>
                    );
                })}
            </div>
        </>
    );
}
