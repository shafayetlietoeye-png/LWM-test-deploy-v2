import { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function ArchiveDonors() {
    useEffect(() => {
        document.body.classList.add('page-museum-story');
        document.title = "Archive Donors | Liberation War Museum";
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
                {/* Block 1: Overview */}
                <section className="block">
                    <Breadcrumb />
                    <div className="separator"></div>
                    <div className="block__cap">
                        <span className="cap__title">Archive Donors</span>
                    </div>

                    <div className="block__content">
                        <p className="p">
                            The Liberation War Museum's archival collections are enriched by extraordinary personal endeavors of dedicated patriots, scholars, diplomats, and journalists. During and after the 1971 War of Liberation, these esteemed donors meticulously preserved wartime news reports, diplomatic dispatches, international broadcasts, and primary evidence from across the globe.
                        </p>
                        <p className="p" style={{ marginBottom: '30px' }}>
                            Their priceless donations form the bedrock of the Museum's research archives, providing historians, researchers, and future generations with indispensable primary records of Bangladesh's struggle for independence.
                        </p>

                        <div className="archive-donors-grid">
                            
                            {/* 1. MR. ABDUL MATIN */}
                            <div className="facility-card archive-donor-card">
                                <div className="facility-label">Mr. Abdul Matin</div>
                                <div className="facility-value">
                                    <p className="facility-desc">
                                        During the 1940s Mr. Abdul Matin had been involved in the progressive political and cultural movement of Dhaka. He entered the field of journalism in the 1950s and in the 60s, he went to London. In 1971, he got deeply involved in the activities of the Liberation. Besides his engagement in multi-dimensional fields of literature, he has written many books on the role of expatriate Bengalis involved in the Liberation War. Self-motivated, he took the responsibility to note down the account of the different activities of the freedom loving Bengalis. In that context, he has collected clippings of Liberation War related news and news observations published in different dailies and magazines of Europe and America during the Liberation War. These clippings provide a comprehensive picture of the Liberation War as depicted in the global media, the gradual build-up of public opinion in favour of the War and account of the fighting-spirit of the freedom loving Bengalis despite their residence in a foreign land. He had formed a micrograph of his collection and presented that to the Liberation War Museum.
                                    </p>

                                    {/* The Abdul Matin Collection */}
                                    <div className="facility-sub-items">
                                        <div className="facility-sub-title">The Abdul Matin Collection</div>
                                        <p className="facility-desc">
                                            The newspaper-magazine from which Abdul Matin has collected the Liberation War related clippings are:
                                        </p>

                                        {/* Publications Reference List (Clean non-clickable archival inventory) */}
                                        <ul className="archive-bullet-list archive-bullet-list--cols">
                                            {abdulMatinPapers.map((paper, idx) => (
                                                <li key={idx}>
                                                    <span className="archive-bullet-mark">▪</span>
                                                    <span className="archive-paper-name">{paper}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <p className="facility-desc">
                                            However, the opportunity to read from the micrograph of Abdul Matin's collection of news was limited. Considering the vast number of researchers interested in the clippings, the Liberation War Museum has photographed these clippings using a special camera. LWM has also divided and bound the above-mentioned copies of the newspaper-magazine clippings into five volumes for preservation. Following are the details of the volumes:
                                        </p>

                                        {/* Archival Volume Register: Seamless heritage parchment styling (Zero white background, non-clickable) */}
                                        <div className="archive-register-container">
                                            <div className="archive-register-header">
                                                <span className="archive-col-vol">Volume</span>
                                                <span className="archive-col-period">Preserved Period</span>
                                                <span className="archive-col-pages">Page Count</span>
                                            </div>
                                            <div className="archive-register-list">
                                                {abdulMatinVolumes.map((vol, idx) => (
                                                    <div key={idx} className="archive-register-row">
                                                        <span className="archive-reg-vol">{vol.volume}</span>
                                                        <div className="archive-reg-period-wrap">
                                                            <span className="archive-reg-period">{vol.period}</span>
                                                            <span className="archive-reg-dots" aria-hidden="true"></span>
                                                        </div>
                                                        <span className="archive-reg-pages"><strong>{vol.pages}</strong> pages</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="archive-register-total">
                                                <span className="archive-reg-total-label">
                                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#8C1C19' }}>
                                                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                                    </svg>
                                                    <span>The total number of pages in the five volumes</span>
                                                </span>
                                                <span className="archive-reg-total-dots" aria-hidden="true"></span>
                                                <span className="archive-reg-total-count">1379</span>
                                            </div>
                                        </div>

                                        <p className="facility-desc" style={{ marginTop: '14px' }}>
                                            This collection of news-commentary in the global media is a priceless documentation of the Liberation War. Abdul Matin's collection can create a new field of historical-inquiry for researchers, journalists and readers. These volumes are preserved in the library and research centre of Liberation War Museum and researchers can use them as necessary.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 2. MR. ABUL MAAL ABDUL MUHIT */}
                            <div className="facility-card archive-donor-card">
                                <div className="facility-label">Mr. Abul Maal Abdul Muhit</div>
                                <div className="facility-value">
                                    <p className="facility-desc">
                                        Mr. Abul Maal Abdul Muhit was born in 1934. He stood first class first in BA (Hons) English and got his MA from Dhaka University in 1955. While in college he was taken into police custody during the language movement of 1952, but released on bond. During government service he studied at Oxford University and also received his MPA degree from Harvard University in 1964.
                                    </p>
                                    <p className="facility-desc">
                                        While working as an economic counselor he was the first diplomat in the Washington embassy of Pakistan to have declared his allegiance to the cause of Bangladesh in 1971.
                                    </p>
                                    <p className="facility-desc">
                                        While working for the cause he amassed a huge quantity of reports, memorandums, articles published in newspapers and periodicals in USA and other countries and collated them into what is now preserved as the "Muhit Collection" at the Liberation War Museum. The collection is digitally stored.
                                    </p>

                                    {/* The A.M.A. Muhith Collection */}
                                    <div className="facility-sub-items">
                                        <div className="facility-sub-title">The A.M.A. Muhith Collection</div>
                                        <p className="facility-desc">
                                            The major portion of A.M.A. Muhith Collection consists of news items published in different newspapers around the world. He also preserved the US Congressional Records (April, May, June, July 1 – August 6, September 8 – November 11, November 16 – December 17 of 1971 and some of 1972) regarding the Liberation War of 1971 in different files.
                                        </p>

                                        <div className="archive-stat-callout">
                                            In total there are <strong>2907 news items</strong> preserved in different files.
                                        </div>

                                        <p className="facility-desc">
                                            All the news items have been digitalized and the Liberation War Museum has reprinted 17 files of the newspaper clippings for preservation.
                                        </p>

                                        <div className="archive-sub-label">
                                            Reference Newspapers are:
                                        </div>

                                        {/* Reference Newspapers List (Clean non-clickable archival inventory) */}
                                        <ul className="archive-bullet-list archive-bullet-list--cols">
                                            {amaMuhithPapers.map((paper, idx) => (
                                                <li key={idx}>
                                                    <span className="archive-bullet-mark">▪</span>
                                                    <span className="archive-paper-name">{paper}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* 3. SHEIKH AHMED JALAL */}
                            <div className="facility-card archive-donor-card">
                                <div className="facility-label">Sheikh Ahmed Jalal</div>
                                <div className="facility-value">
                                    <div className="archive-donor-badge">Diplomat, Freedom Fighter and Author</div>
                                    
                                    <p className="facility-desc">
                                        Sheikh Ahmed (S.A.) Jalal studied in Japan in the 1960s, under the Japanese Government Scholarship. While studying in Tokyo he worked towards the introduction of Bengali programme in Japan Radio and became the first announcer of Radio Japan's Bengali Service. He wrote, produced and actively participated in all programmes of the Bangla Service.
                                    </p>
                                    <p className="facility-desc">
                                        From the very beginning of the Liberation Struggle, S.A. Jalal initiated the solidarity campaign and organized various activities including the mobilization of public opinion in Japan in promoting the cause of Bangladesh. In 1972 Mr. Jalal was inducted into the Foreign Service of Bangladesh. He represented Bangladesh in the Special Political Committee of the United Nations General Assembly and also attended the SAARC summit as Director General for SAARC from Bangladesh.
                                    </p>
                                    <p className="facility-desc">
                                        He embarked upon his passion for writing for children from the early 1980s and has written four children's books "Japanese Children's Stories and Rhymes."
                                    </p>
                                    <p className="facility-desc">
                                        His book "Shundorboner Sonali Horin" was written with the goal of educating the children of Bangladesh and Japan about mythical tales that taught important lessons on how to interact with the environment. A translation of the book entitled "Kin Iro No Shikha" in Japanese has also been published. The other books "Dui Banglar Sera Shishu Sahitya" and "Ami Padmar Elish," his final children's book, dealt with the subject of river pollution, cultural rituals and religious celebrations in Bangladesh and West Bengal.
                                    </p>
                                    <p className="facility-desc">
                                        Mr. Jalal was entrusted by the Japan Foundation Fellowship to write a book that would commemorate the 30 years of diplomatic recognition of Bangladesh by Japan. His book, "Japan's Contribution in the Independence of Bangladesh" is an invaluable historical document on Japan's political and economic support and assistance to Bangladesh during the War of Liberation in 1971.
                                    </p>
                                    <p className="facility-desc">
                                        He amassed a valuable collection of important documents regarding the Liberation War. These authentic first edition volumes and newspaper articles were well preserved and documented in an orderly manner. After his passing away on 21st September 2003, his family is proud to make a contribution of these invaluable articles of history to the Liberation War Museum of Bangladesh, according to his last wish.
                                    </p>

                                    {/* The S.A. Jalal Collection */}
                                    <div className="facility-sub-items">
                                        <div className="facility-sub-title">The S.A. Jalal Collection</div>
                                        <p className="facility-desc">
                                            The major portion of the S. A. Jalal collection consists of news items published in different newspapers around the world.
                                        </p>

                                        {/* Records Bullet List */}
                                        <ul className="archive-bullet-list" style={{ margin: '14px 0' }}>
                                            <li>
                                                <span className="archive-bullet-mark">▪</span>
                                                <span>There are <strong>3416 newspaper items</strong>, preserved in 20 volumes and the other <strong>8 volumes</strong> contain valuable documents regarding the Liberation War.</span>
                                            </li>
                                        </ul>

                                        <p className="facility-desc">
                                            All the news items have been digitalized to facilitate their search by historians and researchers through the webpage access.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
