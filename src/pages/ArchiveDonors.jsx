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
                <section className="block">
                    <Breadcrumb />
                    <div className="separator"></div>

                    {/* Section Cap */}
                    <div className="block__cap">
                        <span className="cap__title">Archive Donors</span>
                    </div>

                    <div className="block__content">
                        <div className="archive-donors-doc">
                            
                            {/* 1. MR. ABDUL MATIN */}
                            <article className="archive-donor-entry">
                                <h2 className="archive-donor-name">Mr. Abdul Matin</h2>
                                
                                <p className="archive-donor-p">
                                    During the 1940s Mr. Abdul Matin had been involved in the progressive political and cultural movement of Dhaka. He entered the field of journalism in the 1950s and in the 60s, he went to London. In 1971, he got deeply involved in the activities of the Liberation. Besides his engagement in multi-dimensional fields of literature, he has written many books on the role of expatriate Bengalis involved in the Liberation War. Self-motivated, he took the responsibility to note down the account of the different activities of the freedom loving Bengalis. In that context, he has collected clippings of Liberation War related news and news observations published in different dailies and magazines of Europe and America during the Liberation War. These clippings provide a comprehensive picture of the Liberation War as depicted in the global media, the gradual build-up of public opinion in favour of the War and account of the fighting-spirit of the freedom loving Bengalis despite their residence in a foreign land. He had formed a micrograph of his collection and presented that to the Liberation War Museum.
                                </p>

                                <h3 className="archive-collection-heading">The Abdul Matin Collection</h3>

                                <p className="archive-donor-p">
                                    The newspaper-magazine from which Abdul Matin has collected the Liberation War related clippings are: Daily Telegraph, Financial Express, Financial Times, Daily Express, The Times, The New York Times, Daily Mail, Morning Star, The Guardian, International Herald Tribune, New Statesman, India News, India Weekly, The Economist, The Observer, Sunday Times, Sunday Telegraph, Newsweek, Time, The Listener, Evening Standard, The People and Janomot.
                                </p>

                                <p className="archive-donor-p">
                                    However, the opportunity to read from the micrograph of Abdul Matin's collection of news was limited. Considering the vast number of researchers interested in the clippings, the Liberation War Museum has photographed these clippings using a special camera. LWM has also divided and bound the above-mentioned copies of the newspaper-magazine clippings into five volumes for preservation. Following are the details of the volumes:
                                </p>

                                <ul className="archive-simple-list">
                                    <li>Volume – 1 : March – April 1971, pages – 238</li>
                                    <li>Volume – 2 : May – June 1971, pages – 287</li>
                                    <li>Volume – 3 : July – August – September 1971, pages – 260</li>
                                    <li>Volume – 4 : October – November 1971, pages – 239</li>
                                    <li>Volume – 5 : December 1971, pages – 355</li>
                                </ul>

                                <p className="archive-donor-p">
                                    The total number of pages in the five volumes is 1379.
                                </p>

                                <p className="archive-donor-p">
                                    This collection of news-commentary in the global media is a priceless documentation of the Liberation War. Abdul Matin's collection can create a new field of historical-inquiry for researchers, journalists and readers. These volumes are preserved in the library and research centre of Liberation War Museum and researchers can use them as necessary.
                                </p>
                            </article>

                            {/* 2. MR. ABUL MAAL ABDUL MUHIT */}
                            <article className="archive-donor-entry">
                                <h2 className="archive-donor-name">Mr. Abul Maal Abdul Muhit</h2>

                                <p className="archive-donor-p">
                                    Mr. Abul Maal Abdul Muhit was born in 1934. He stood first class first in BA (Hons) English and got his MA from Dhaka University in 1955. While in college he was taken into police custody during the language movement of 1952, but released on bond. During government service he studied at Oxford University and also received his MPA degree from Harvard University in 1964.
                                </p>

                                <p className="archive-donor-p">
                                    While working as an economic counselor he was the first diplomat in the Washington embassy of Pakistan to have declared his allegiance to the cause of Bangladesh in 1971.
                                </p>

                                <p className="archive-donor-p">
                                    While working for the cause he amassed a huge quantity of reports, memorandums, articles published in newspapers and periodicals in USA and other countries and collated them into what is now preserved as the "Muhit Collection" at the Liberation War Museum. The collection is digitally stored.
                                </p>

                                <h3 className="archive-collection-heading">The A.M.A. Muhith Collection</h3>

                                <p className="archive-donor-p">
                                    The major portion of A.M.A. Muhith Collection consists of news items published in different newspapers around the world. He also preserved the US Congressional Records (April, May, June, July 1 – August 6, September 8 – November 11, November 16 – December 17 of 1971 and some of 1972) regarding the Liberation War of 1971 in different files.
                                </p>

                                <p className="archive-donor-p">
                                    In total there are <strong>2907 news items</strong> preserved in different files.
                                </p>

                                <p className="archive-donor-p">
                                    All the news items have been digitalized and the Liberation War Museum has reprinted 17 files of the newspaper clippings for preservation.
                                </p>

                                <p className="archive-donor-p">
                                    <strong>Reference Newspapers are:</strong><br />
                                    Time, Newsweek, New York Times, The Washington Post, The Washington Daily News, Christian Science Monitor, The Evening Star, The Chicago Tribune, St. Louis Post-Dispatch, Manchester Guardian, Far Eastern Economic Review, The Sunday Star, Philadelphia Inquirer, Baltimore Sun, The New Statesman, Indian Express, The Economist, Los Angeles Times, The Guardian, Wall Street Journal, Des Moines Tribune, Iowa State Daily.
                                </p>
                            </article>

                            {/* 3. SHEIKH AHMED JALAL */}
                            <article className="archive-donor-entry">
                                <h2 className="archive-donor-name">Sheikh Ahmed Jalal</h2>
                                <div className="archive-donor-designation">Diplomat, Freedom Fighter and Author</div>

                                <p className="archive-donor-p">
                                    Sheikh Ahmed (S.A.) Jalal studied in Japan in the 1960s, under the Japanese Government Scholarship. While studying in Tokyo he worked towards the introduction of Bengali programme in Japan Radio and became the first announcer of Radio Japan's Bengali Service. He wrote, produced and actively participated in all programmes of the Bangla Service.
                                </p>

                                <p className="archive-donor-p">
                                    From the very beginning of the Liberation Struggle, S.A. Jalal initiated the solidarity campaign and organized various activities including the mobilization of public opinion in Japan in promoting the cause of Bangladesh. In 1972 Mr. Jalal was inducted into the Foreign Service of Bangladesh. He represented Bangladesh in the Special Political Committee of the United Nations General Assembly and also attended the SAARC summit as Director General for SAARC from Bangladesh.
                                </p>

                                <p className="archive-donor-p">
                                    He embarked upon his passion for writing for children from the early 1980s and has written four children's books "Japanese Children's Stories and Rhymes."
                                </p>

                                <p className="archive-donor-p">
                                    His book "Shundorboner Sonali Horin" was written with the goal of educating the children of Bangladesh and Japan about mythical tales that taught important lessons on how to interact with the environment. A translation of the book entitled "Kin Iro No Shikha" in Japanese has also been published. The other books "Dui Banglar Sera Shishu Sahitya" and "Ami Padmar Elish," his final children's book, dealt with the subject of river pollution, cultural rituals and religious celebrations in Bangladesh and West Bengal.
                                </p>

                                <p className="archive-donor-p">
                                    Mr. Jalal was entrusted by the Japan Foundation Fellowship to write a book that would commemorate the 30 years of diplomatic recognition of Bangladesh by Japan. His book, "Japan's Contribution in the Independence of Bangladesh" is an invaluable historical document on Japan's political and economic support and assistance to Bangladesh during the War of Liberation in 1971.
                                </p>

                                <p className="archive-donor-p">
                                    He amassed a valuable collection of important documents regarding the Liberation War. These authentic first edition volumes and newspaper articles were well preserved and documented in an orderly manner. After his passing away on 21st September 2003, his family is proud to make a contribution of these invaluable articles of history to the Liberation War Museum of Bangladesh, according to his last wish.
                                </p>

                                <h3 className="archive-collection-heading">The S.A. Jalal Collection</h3>

                                <p className="archive-donor-p">
                                    The major portion of the S. A. Jalal collection consists of news items published in different newspapers around the world.
                                </p>

                                <p className="archive-donor-p">
                                    There are <strong>3416 newspaper items</strong>, preserved in <strong>20 volumes</strong> and the other <strong>8 volumes</strong> contain valuable documents regarding the Liberation War.
                                </p>

                                <p className="archive-donor-p">
                                    All the news items have been digitalized to facilitate their search by historians and researchers through the webpage access.
                                </p>
                            </article>

                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
