import { useEffect } from 'react';

export default function ArchiveDonors() {
    useEffect(() => {
        document.body.classList.add('page-museum-story');
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, []);

    const abdulMatinPapers = [
        'Daily Telegraph', 'Financial Express', 'Financial Times', 'Daily Express', 'The Times',
        'The New York Times', 'Daily Mail', 'Morning Star', 'The Guardian', 'International Herald Tribune',
        'New Statesman', 'India News', 'India Weekly', 'The Economist', 'The Observer', 'Sunday Times',
        'Sunday Telegraph', 'Newsweek', 'Time', 'The Listener', 'Evening Standard', 'The People', 'Janomot'
    ];

    const abdulMatinVolumes = [
        { volume: 'Volume – 1', period: 'March – April 1971', pages: 238 },
        { volume: 'Volume – 2', period: 'May – June 1971', pages: 287 },
        { volume: 'Volume – 3', period: 'July – August – September 1971', pages: 260 },
        { volume: 'Volume – 4', period: 'October – November 1971', pages: 239 },
        { volume: 'Volume – 5', period: 'December 1971', pages: 355 },
    ];

    const amaMuhithPapers = [
        'Time', 'Newsweek', 'New York Times', 'The Washington Post', 'The Washington Daily News',
        'Christian Science Monitor', 'The Evening Star', 'The Chicago Tribune', 'St. Louis Post-Dispatch',
        'Manchester Guardian', 'Far Eastern Economic Review', 'The Sunday Star', 'Philadelphia Inquirer',
        'Baltimore Sun', 'The New Statesman', 'Indian Express', 'The Economist', 'Los Angeles Times',
        'The Guardian', 'Wall Street Journal', 'Des Moines Tribune', 'Iowa State Daily'
    ];

    return (
        <>
            {/* HERO SECTION */}
            <section className="hero hero--museum-story">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Archive Donors</div>
                        <div className="hero-card__desc">
                            Honoring key individuals whose dedication has helped amass priceless documentations, news clippings, and diplomatic archives of the 1971 Liberation War.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <main className="museum-story-content">
                
                {/* 1. MR. ABDUL MATIN */}
                <section className="block">
                    <div className="separator"></div>
                    <div className="block__cap">
                        <span className="cap__title">Mr. Abdul Matin Collection</span>
                    </div>
                    <div className="block__content">
                        <p className="p">
                            During the 1940s, Mr. Abdul Matin was actively involved in the progressive political and cultural movements of Dhaka. He entered the field of journalism in the 1950s and migrated to London in the 60s. In 1971, he became deeply involved in the activities of the Liberation War. Beyond his engagement in multi-dimensional literature, he has authored several books documenting the crucial role of expatriate Bengalis in the independence struggle.
                        </p>
                        <p className="p">
                            Self-motivated, Mr. Matin took upon himself the responsibility of recording the efforts of freedom-loving Bengalis. He painstakingly collected clippings of Liberation War news and observations published in various dailies and magazines across Europe and America. These clippings provide a comprehensive picture of the Liberation War as depicted in the global media, capturing the build-up of public opinion and the fighting spirit of Bengalis overseas. He compiled a micrograph of his collection and generously presented it to the Liberation War Museum.
                        </p>

                        {/* Collection Sub-section */}
                        <div style={{
                            backgroundColor: '#fff',
                            border: '1px solid #d4cbb3',
                            borderTop: '3px solid #b38235',
                            borderRadius: '6px',
                            padding: '24px',
                            marginTop: '25px',
                            boxShadow: '0 4px 12px rgba(26,21,18,0.04)'
                        }}>
                            <h3 style={{ 
                                fontSize: '1.25rem', 
                                color: '#0d4228', 
                                fontFamily: "'Roboto Slab', serif",
                                marginBottom: '15px',
                                borderBottom: '1px solid #e8e3d5',
                                paddingBottom: '8px'
                            }}>
                                The Abdul Matin Collection (Newspapers & Magazines)
                            </h3>
                            
                            {/* Newspapers Tag Grid */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '25px' }}>
                                {abdulMatinPapers.map((paper, idx) => (
                                    <span 
                                        key={idx} 
                                        style={{
                                            fontSize: '0.88rem',
                                            backgroundColor: 'rgba(197, 155, 39, 0.08)',
                                            color: '#1a1512',
                                            border: '1px solid rgba(197, 155, 39, 0.28)',
                                            padding: '4px 10px',
                                            borderRadius: '4px',
                                            fontFamily: "'Roboto', sans-serif"
                                        }}
                                    >
                                        {paper}
                                    </span>
                                ))}
                            </div>

                            <p className="p" style={{ fontSize: '0.96rem', color: '#555', marginBottom: '15px' }}>
                                Considering the high research interest in these clippings, the Liberation War Museum photographed the microfilm using a special camera. The collection is bound into five volumes for preservation and library access:
                            </p>

                            {/* Volumes List */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {abdulMatinVolumes.map((vol, idx) => (
                                    <div 
                                        key={idx} 
                                        style={{ 
                                            display: 'flex', 
                                            justifyContent: 'space-between', 
                                            alignItems: 'center',
                                            padding: '10px 15px',
                                            backgroundColor: '#faf8f4',
                                            borderLeft: '4px solid #8d2024',
                                            borderRadius: '0 4px 4px 0',
                                            fontSize: '0.96rem'
                                        }}
                                    >
                                        <div>
                                            <strong style={{ color: '#1a1512' }}>{vol.volume}</strong>
                                            <span style={{ color: '#666', marginLeft: '10px' }}>({vol.period})</span>
                                        </div>
                                        <span style={{ color: '#8d2024', fontWeight: 'bold' }}>{vol.pages} pages</span>
                                    </div>
                                ))}
                            </div>

                            <div style={{ 
                                marginTop: '20px', 
                                padding: '12px 15px', 
                                backgroundColor: '#fdfbf7', 
                                border: '1px dashed #d4cbb3', 
                                borderRadius: '4px',
                                fontSize: '0.92rem',
                                color: '#666',
                                textAlign: 'center',
                                fontWeight: '500'
                            }}>
                                Total Pages: 1,379
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. MR. ABUL MAAL ABDUL MUHIT */}
                <section className="block">
                    <div className="block__cap">
                        <span className="cap__title">Mr. Abul Maal Abdul Muhit Collection</span>
                    </div>
                    <div className="block__content">
                        <p className="p">
                            Born in 1934, Mr. Abul Maal Abdul Muhit graduated first class first in BA (Hons) English and completed his MA from Dhaka University in 1955. While a student, he was taken into police custody during the historic Language Movement of 1952. During his government service, he studied at Oxford University and received his MPA degree from Harvard University in 1964.
                        </p>
                        <p className="p">
                            While working as an economic counselor in the Washington embassy of Pakistan, Mr. Muhit became the first diplomat to declare allegiance to the cause of Bangladesh in 1971. In Washington, he amassed a huge quantity of reports, memorandums, and articles published in American newspapers and periodicals. This valuable compilation is now preserved digitally as the "Muhit Collection" at the Liberation War Museum.
                        </p>

                        {/* Collection Sub-section */}
                        <div style={{
                            backgroundColor: '#fff',
                            border: '1px solid #d4cbb3',
                            borderTop: '3px solid #b38235',
                            borderRadius: '6px',
                            padding: '24px',
                            marginTop: '25px',
                            boxShadow: '0 4px 12px rgba(26,21,18,0.04)'
                        }}>
                            <h3 style={{ 
                                fontSize: '1.25rem', 
                                color: '#0d4228', 
                                fontFamily: "'Roboto Slab', serif",
                                marginBottom: '15px',
                                borderBottom: '1px solid #e8e3d5',
                                paddingBottom: '8px'
                            }}>
                                The A.M.A. Muhith Collection (2,907 Digital Items)
                            </h3>
                            
                            <p className="p" style={{ fontSize: '0.96rem', color: '#555', marginBottom: '15px' }}>
                                The major portion of this collection consists of news items from global newspapers, along with files containing the US Congressional Records (covering April to December 1971 and early 1972) regarding the Liberation War.
                            </p>

                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '8px',
                                marginBottom: '20px'
                            }}>
                                {amaMuhithPapers.map((paper, idx) => (
                                    <span 
                                        key={idx} 
                                        style={{
                                            fontSize: '0.88rem',
                                            backgroundColor: 'rgba(197, 155, 39, 0.08)',
                                            color: '#1a1512',
                                            border: '1px solid rgba(197, 155, 39, 0.28)',
                                            padding: '4px 10px',
                                            borderRadius: '4px',
                                            fontFamily: "'Roboto', sans-serif"
                                        }}
                                    >
                                        {paper}
                                    </span>
                                ))}
                            </div>

                            <div style={{ 
                                padding: '12px 15px', 
                                backgroundColor: '#fbf9f4', 
                                border: '1px solid #e8e3d5', 
                                borderRadius: '4px',
                                fontSize: '0.96rem',
                                color: '#1a1512'
                            }}>
                                <strong>Status:</strong> All 2,907 items have been fully digitized. LWM has reprinted 17 files of these newspaper clippings for physical preservation.
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. SHEIKH AHMED JALAL */}
                <section className="block">
                    <div className="block__cap">
                        <span className="cap__title">Sheikh Ahmed Jalal Collection</span>
                    </div>
                    <div className="block__content">
                        <p className="p" style={{ fontWeight: '600', color: '#8d2024', fontSize: '1.05rem', marginBottom: '12px' }}>
                            Diplomat, Freedom Fighter, and Author
                        </p>
                        <p className="p">
                            Sheikh Ahmed (S.A.) Jalal studied in Japan in the 1960s under a Japanese Government Scholarship. While in Tokyo, he pioneered the introduction of the Bengali programme on Radio Japan, becoming its first announcer. He wrote, produced, and participated actively in all Bangla Service programmes.
                        </p>
                        <p className="p">
                            From the inception of the liberation struggle, S.A. Jalal initiated solidarity campaigns and organized public opinion drives in Japan to promote the cause of Bangladesh. In 1972, he was inducted into the Foreign Service of Bangladesh. He later represented Bangladesh in the Special Political Committee of the UN General Assembly and served as Director General for SAARC.
                        </p>
                        <p className="p">
                            Starting in the 1980s, he pursued a passion for children's literature, authoring four children's books, including "Japanese Children's Stories and Rhymes". His book "Shundorboner Sonali Horin" (translated in Japanese as "Kin Iro No Shikha") educated children in both nations on ecological lessons through myth. His final children's books, "Dui Banglar Sera Shishu Sahitya" and "Ami Padmar Elish", raised awareness on river pollution, cultural rituals, and shared regional heritage.
                        </p>
                        <p className="p">
                            Awarded the Japan Foundation Fellowship, he authored "Japan's Contribution in the Independence of Bangladesh", an invaluable historical document detailing Japan's political and economic support in 1971. S.A. Jalal amassed a pristine, orderly collection of newspapers, books, and first-edition volumes. Following his passing on September 21, 2003, his family donated this archive to the Liberation War Museum in accordance with his wishes.
                        </p>

                        {/* Collection Sub-section */}
                        <div style={{
                            backgroundColor: '#fff',
                            border: '1px solid #d4cbb3',
                            borderTop: '3px solid #b38235',
                            borderRadius: '6px',
                            padding: '24px',
                            marginTop: '25px',
                            boxShadow: '0 4px 12px rgba(26,21,18,0.04)'
                        }}>
                            <h3 style={{ 
                                fontSize: '1.25rem', 
                                color: '#0d4228', 
                                fontFamily: "'Roboto Slab', serif",
                                marginBottom: '15px',
                                borderBottom: '1px solid #e8e3d5',
                                paddingBottom: '8px'
                            }}>
                                The S.A. Jalal Collection (3,416 Items)
                            </h3>
                            
                            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <li style={{ fontSize: '0.96rem', paddingLeft: '15px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#8d2024' }}>•</span>
                                    <strong>3,416 newspaper items</strong> preserved across 20 structured volumes.
                                </li>
                                <li style={{ fontSize: '0.96rem', paddingLeft: '15px', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#8d2024' }}>•</span>
                                    <strong>8 additional volumes</strong> containing highly valuable primary documents from the 1971 struggle.
                                </li>
                            </ul>

                            <div style={{ 
                                padding: '12px 15px', 
                                backgroundColor: '#fdfbf7', 
                                border: '1px dashed #d4cbb3', 
                                borderRadius: '4px',
                                fontSize: '0.94rem',
                                color: '#666',
                                textAlign: 'center',
                                fontWeight: '500'
                            }}>
                                Status: Digitized and fully accessible via the webpage database to facilitate research by historians.
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
