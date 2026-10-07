import { useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function FundCollectionCampaign() {
    useEffect(() => {
        document.body.classList.add('page-museum-story');
        document.title = "Fund Collection Campaign | Liberation War Museum";
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
                        <div className="hero-card__title">Fund Collection Campaign</div>
                        <div className="hero-card__desc">
                            মুক্তিযুদ্ধ জাদুঘরের সহায়তায় এগিয়ে আসুন — আমাদের জাতীয় ইতিহাস ও স্মৃতি সংরক্ষণে আপনার স্বতঃস্ফূর্ত অংশগ্রহণ কামনা করি।
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT SECTION */}
            <main className="museum-story-content">
                <section className="block">
                    <Breadcrumb />
                    <div className="separator"></div>

                    {/* Section Header */}
                    <div className="block__cap">
                        <span className="cap__title">মুক্তিযুদ্ধ জাদুঘরের সহায়তায় এগিয়ে আসুন</span>
                    </div>

                    <div className="block__content appeal-content-body">
                        <h3 className="appeal-salutation">মুক্তিযুদ্ধ জাদুঘরের বন্ধুগণ,</h3>

                        <p className="p appeal-paragraph">
                            মহান মুক্তিযুদ্ধের গর্ব ও বেদনা পরবর্তী প্রজন্মের কাছে তুলে ধরার জন্য ১৯৯৬ সালে মুক্তিযুদ্ধ জাদুঘর সেগুনবাগিচায় একটি ভাড়া বাড়িতে তার যাত্রা শুরু করে। মুক্তিযুদ্ধের প্রতি জনগণের দায়বদ্ধতা এবং জাদুঘরের প্রতি জনগণের অকুণ্ঠ এবং স্বতঃস্ফূর্ত আর্থিক এবং অন্যান্য সহযোগিতা আমাদেরকে একটি বিশাল কর্মযজ্ঞে হাত দিয়ে এটিকে জনগণের জাদুঘরে পরিণত করার জন্য মনোবল জুগিয়েছিল। তারই ফসল হিসেবে আজ আগারগাঁওয়ে দাঁড়িয়ে আছে এক লক্ষ আশি হাজার বর্গফুটের এক মহীরুহ, যার বর্তমান বাৎসরিক কর্মকাণ্ডের মধ্যে অন্তর্ভুক্ত আছে :
                        </p>

                        {/* Activities List (১ থেকে ৭) */}
                        <div className="appeal-activities-card">
                            <ul className="appeal-activities-list">
                                <li>
                                    <span className="appeal-num">১.</span>
                                    <span>৩৬,০০০ সাধারণ দর্শনার্থীকে জাদুঘর দর্শনে উদ্বুদ্ধ করা</span>
                                </li>
                                <li>
                                    <span className="appeal-num">২.</span>
                                    <span>ঢাকা শহরের ৪০,০০০ শিক্ষার্থীকে জাদুঘরে নিয়ে এসে মুক্তিযুদ্ধের ইতিহাস সম্পর্কে অবহিত করা</span>
                                </li>
                                <li>
                                    <span className="appeal-num">৩.</span>
                                    <span>প্রত্যন্ত অঞ্চলের স্কুলের ১,২০,০০০ শিক্ষার্থীকে ভ্রাম্যমাণ প্রদর্শনীর মাধ্যমে মুক্তিযুদ্ধের ইতিহাস সম্পর্কে অবহিত করা</span>
                                </li>
                                <li>
                                    <span className="appeal-num">৪.</span>
                                    <span>জেনোসাইড অ্যান্ড জাস্টিস সম্পর্কে ২টি মাসব্যাপী কর্মশালা এবং একটি আন্তর্জাতিক কর্মশালার আয়োজন করা</span>
                                </li>
                                <li>
                                    <span className="appeal-num">৫.</span>
                                    <span>দেশব্যাপী একটি শিক্ষক নেটওয়ার্ক গড়ে তোলা</span>
                                </li>
                                <li>
                                    <span className="appeal-num">৬.</span>
                                    <span>মুক্তিযুদ্ধভিত্তিক পাঠাগার ও আর্কাইভ গড়ে তোলা এবং তার সংরক্ষণ করা</span>
                                </li>
                                <li>
                                    <span className="appeal-num">৭.</span>
                                    <span>মুক্তিযুদ্ধভিত্তিক ডকুমেন্টারি এবং গবেষণামূলক পুস্তক প্রকাশনা</span>
                                </li>
                            </ul>
                        </div>

                        <p className="p appeal-paragraph">
                            গত কয়েক বছর জাদুঘর পরিচালনার জন্য অর্থ সংগ্রহ না করে কেবলমাত্র “জাদুঘর নির্মাণ”-এর জন্য আমরা অর্থ সংগ্রহ করা সত্ত্বেও বাৎসরিক কর্মকাণ্ড শতভাগ অর্জন করেছি। এ ছাড়া জাদুঘরের কর্মকাণ্ডও নানাভাবে নানা দিকে বিকশিত ও প্রসারিত হয়েছে। এর আর্কাইভ, পাঠাগার ও গবেষণাগার এবং দেশের প্রত্যন্ত অঞ্চলের সাধারণ মানুষ দ্বারা প্রত্যক্ষ করা মুক্তিযুদ্ধ সম্পর্কে ৫০,০০০-এর অধিক মৌখিক ভাষ্য সংগ্রহ ভবিষ্যৎ প্রজন্মকে গবেষণা করার সুযোগ দেবে। আন্তর্জাতিক অঙ্গনেও জাদুঘরের যশ এবং সুখ্যাতি বৃদ্ধি পেয়েছে। আর এটা সত্যি যে কেবল মাত্র দর্শনার্থীর প্রবেশমূল্যের অর্থে একটি জাদুঘর পরিচালনা সম্ভব হয় না। পৃথিবীর অন্যান্য দেশের জাদুঘরগুলোও জনগণ ও সরকারের অর্থ সহায়তার মাধ্যমেই পরিচালনা করা হয়।
                        </p>

                        <p className="p appeal-paragraph">
                            এজন্যই আপনাদের কাছে আমাদের আবার ফিরে আসা। সরকারপ্রদত্ত অনুদানের বাইরেও জাদুঘর পরিচালনার জন্য প্রতি বছর আমাদের প্রায় তিন কোটি টাকার প্রয়োজন হয়। এই টাকা আমরা একটি এনডাওমেন্ট ফান্ড (Endowment Fund) বা স্থায়ী তহবিল থেকে অর্জিত সুদের মাধ্যমে সংগ্রহ করতে চাই এবং সেজন্যই আপনাদের কাছে আজকের এই আবেদন। Endowment fund গড়ার জন্য নিম্নবর্ণিত খাতে অনুদান দিয়ে আপনারা এই বিশাল কর্মকাণ্ডের অংশীদার হবেন — এই আশা আমরা করি।
                        </p>

                        {/* Endowment Categories (১ থেকে ৪) */}
                        <div className="appeal-endowment-card">
                            <h4 className="appeal-endowment-title">Endowment Fund অনুদানের খাতসমূহ :</h4>
                            <div className="appeal-endowment-grid">
                                <div className="appeal-endowment-item">
                                    <span className="appeal-endowment-rank">১. সম্মানীয় পৃষ্ঠপোষক :</span>
                                    <span className="appeal-endowment-amount">২ কোটি টাকা</span>
                                </div>
                                <div className="appeal-endowment-item">
                                    <span className="appeal-endowment-rank">২. পৃষ্ঠপোষক :</span>
                                    <span className="appeal-endowment-amount">১ কোটি টাকা</span>
                                </div>
                                <div className="appeal-endowment-item">
                                    <span className="appeal-endowment-rank">৩. উদ্যোক্তা সদস্য :</span>
                                    <span className="appeal-endowment-amount">৫০ লক্ষ টাকা</span>
                                </div>
                                <div className="appeal-endowment-item">
                                    <span className="appeal-endowment-rank">৪. জীবন সদস্য :</span>
                                    <span className="appeal-endowment-amount">১০ লক্ষ টাকা</span>
                                </div>
                            </div>
                        </div>

                        {/* Bank Details */}
                        <div className="appeal-bank-card">
                            <h4 className="appeal-bank-title">অনুদান প্রদানের পদ্ধতি :</h4>
                            <div className="appeal-bank-details">
                                <div className="appeal-bank-row">
                                    <span className="appeal-bank-label">ব্যাংকের নাম :</span>
                                    <span className="appeal-bank-val">মার্কেন্টাইল ব্যাংক (প্রধান শাখা)</span>
                                </div>
                                <div className="appeal-bank-row">
                                    <span className="appeal-bank-label">হিসাবের নাম :</span>
                                    <span className="appeal-bank-val">মুক্তিযুদ্ধ জাদুঘর ফান্ড</span>
                                </div>
                                <div className="appeal-bank-row">
                                    <span className="appeal-bank-label">হিসাব নং :</span>
                                    <span className="appeal-bank-val appeal-bank-val--acc">১১০১১১১২৫২৬৪০৬৩</span>
                                </div>
                            </div>
                        </div>

                        {/* Campaign Video (Pure player without extra clutter/descriptions) */}
                        <div className="appeal-video-container">
                            <div className="appeal-video-wrapper">
                                <iframe
                                    src="https://www.youtube.com/embed/pVYkVwb9_Qw"
                                    title="Liberation War Museum TV Commercial"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
