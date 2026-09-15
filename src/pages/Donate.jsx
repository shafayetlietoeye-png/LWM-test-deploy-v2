import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Donate() {
    const [activeTab, setActiveTab] = useState('online'); // 'online', 'bkash', 'bank', 'office'
    
    // Form states
    const [formData, setFormData] = useState({
        name: '',
        showName: 'Yes',
        address: '',
        mobile: '',
        email: '',
        donationType: 'Buy A Brick - 10,000 TK',
        otherAmount: ''
    });
    
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        document.body.classList.add('page-museum-story');
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
    };

    const resetForm = () => {
        setFormData({
            name: '',
            showName: 'Yes',
            address: '',
            mobile: '',
            email: '',
            donationType: 'Buy A Brick - 10,000 TK',
            otherAmount: ''
        });
        setSubmitted(false);
    };

    return (
        <>
            {/* HERO SECTION */}
            <section className="hero hero--museum-story">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>অনুদান (Donation)</div>
                        <div className="hero-card__desc" style={{ fontFamily: "'Noto Sans Bengali', sans-serif" }}>
                            নির্মিত হয়েছে মুক্তিযুদ্ধ জাদুঘর, গড়তে হবে স্থায়ী তহবিল
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <main className="museum-story-content">
                
                {/* 1. OVERVIEW & CALL TO ACTION */}
                <section className="block">
                    <div className="separator"></div>
                    <div className="block__cap">
                        <span className="cap__title" style={{ fontSize: '1.8rem', color: '#1a1512', fontFamily: "'Noto Sans Bengali', sans-serif", textTransform: 'none' }}>
                            গড়তে হবে স্থায়ী তহবিল
                        </span>
                    </div>
                    <div className="block__content">
                        <p className="p" style={{ textAlign: 'justify', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '15px' }}>
                            মুক্তিযুদ্ধের প্রেরণায় জন-অংশগ্রহণে নির্মিত হয়েছে মুক্তিযুদ্ধ জাদুঘরের নিজস্ব ভবন। এর যথাযথ পরিচালনার জন্য সকলের সহায়তায় গড়ে উঠবে স্থায়ী তহবিল। মুক্তিযুদ্ধ জাদুঘরের সহায়তায় এগিয়ে আসুন আপনিও।
                        </p>
                        <div style={{
                            backgroundColor: 'rgba(197, 155, 39, 0.08)',
                            borderLeft: '4px solid #b38235',
                            borderTop: '1px solid rgba(197, 155, 39, 0.25)',
                            borderRight: '1px solid rgba(197, 155, 39, 0.25)',
                            borderBottom: '1px solid rgba(197, 155, 39, 0.25)',
                            padding: '16px 20px',
                            borderRadius: '4px',
                            marginTop: '15px'
                        }}>
                            <p className="p" style={{ margin: 0, fontSize: '1.02rem', lineHeight: '1.7', color: '#3d2e0d', fontWeight: '500' }}>
                                <strong style={{ color: '#8b181e' }}>★ স্থায়ী সম্মাননা:</strong> অনুদান-দাতার নাম জাদুঘর ভবনে স্থায়ীভাবে প্রদর্শিত হবে। যে ব্যক্তি বা প্রতিষ্ঠানের নামে অনুদানভূক্তি হবে তা পরিষ্কার হরফে বাংলায় ও ইংরেজিতে লিখুন (আপনার প্রদত্ত বানান অনুযায়ী নাম প্রদর্শিত হবে)।
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. WHY DONATE */}
                <section className="block">
                    <div className="block__cap">
                        <span className="cap__title" style={{ fontSize: '1.8rem', color: '#1a1512', fontFamily: "'Noto Sans Bengali', sans-serif", textTransform: 'none' }}>
                            কেন অনুদান দিবেন?
                        </span>
                    </div>
                    <div className="block__content">
                        <p className="p" style={{ textAlign: 'justify', marginBottom: '20px' }}>
                            মুক্তিযুদ্ধ জাদুঘরের মহৎ উদ্দেশ্যকে এগিয়ে নিতে আপনার প্রতিটি অবদানই—তা ছোট হোক বা বড়—অত্যন্ত গুরুত্বপূর্ণ। আপনার এই অনুদানের মাধ্যমেই আপনি বাংলাদেশের স্বাধীনতা সংগ্রামের গৌরবোজ্জ্বল ইতিহাস এবং উত্তরসূরিদের জন্য রাখা আমাদের এই উত্তরাধিকার সংরক্ষণের এক গর্বিত অংশীদার হয়ে উঠবেন।
                        </p>
                        
                        <p className="p" style={{ fontWeight: 'bold', marginBottom: '12px', color: '#8d2024' }}>
                            আপনার এই অমূল্য অবদান জাদুঘরকে যেসব কাজে সরাসরি সহায়তা করবে:
                        </p>
                        
                        <ul className="p" style={{ listStyle: 'none', paddingLeft: 0, margin: '0 0 20px 0' }}>
                            <li style={{ marginBottom: '10px', fontSize: '0.98rem' }}>
                                <strong style={{ color: '#8d2024' }}>• ঐতিহাসিক স্মারক সংরক্ষণ:</strong> স্বাধীনতা যুদ্ধের দুষ্প্রাপ্য দলিলাদি, আলোকচিত্র এবং ঐতিহাসিক নিদর্শনগুলো বৈজ্ঞানিক পদ্ধতিতে সংগ্রহ ও মহাফেজখানায় (আর্কাইভ) সংরক্ষণ করা।
                            </li>
                            <li style={{ marginBottom: '10px', fontSize: '0.98rem' }}>
                                <strong style={{ color: '#8d2024' }}>• গবেষণা ও শিক্ষা কার্যক্রম:</strong> মুক্তিযুদ্ধ বিষয়ক মৌলিক গবেষণা পরিচালনা এবং নতুন প্রজন্মের জন্য বিশেষ শিক্ষামূলক কর্মসূচি চালু রাখা।
                            </li>
                            <li style={{ marginBottom: '10px', fontSize: '0.98rem' }}>
                                <strong style={{ color: '#8d2024' }}>• প্রদর্শনী ও সচেতনতা:</strong> বিশেষ প্রদর্শনী এবং জনসচেতনতামূলক বিভিন্ন সৃজনশীল উদ্যোগের আয়োজন করা।
                            </li>
                            <li style={{ marginBottom: '10px', fontSize: '0.98rem' }}>
                                <strong style={{ color: '#8d2024' }}>• অবকাঠামোগত উন্নয়ন:</strong> জাদুঘরের সার্বিক রক্ষণাবেক্ষণ এবং দর্শনার্থীদের জন্য সুযোগ-সুবিধার আধুনিকায়ন ও উন্নয়ন নিশ্চিত করা।
                            </li>
                            <li style={{ marginBottom: '10px', fontSize: '0.98rem' }}>
                                <strong style={{ color: '#8d2024' }}>• মুক্তিযুদ্ধের মূল্যবোধ ছড়িয়ে দেওয়া:</strong> আগামী প্রজন্মের হৃদয়ে মুক্তিযুদ্ধের চেতনা, আদর্শ এবং সঠিক মূল্যবোধকে শাশ্বত করে তোলা।
                            </li>
                        </ul>
                    </div>
                </section>

                {/* 3. METHODS & FORM */}
                <section className="block">
                    <div className="block__cap">
                        <span className="cap__title" style={{ fontSize: '1.8rem', color: '#1a1512', fontFamily: "'Noto Sans Bengali', sans-serif", textTransform: 'none' }}>
                            যেভাবে অনুদান দিবেন
                        </span>
                    </div>
                    <div className="block__content" style={{ marginTop: '20px' }}>
                        {/* Tab Switcher Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', marginBottom: '30px' }}>
                            <button 
                                onClick={() => setActiveTab('online')}
                                style={{
                                    padding: '12px',
                                    border: '1px solid #d4cbb3',
                                    borderRadius: '4px',
                                    backgroundColor: activeTab === 'online' ? '#8d2024' : '#fff',
                                    color: activeTab === 'online' ? '#fff' : '#1a1512',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    fontFamily: "'Noto Sans Bengali', sans-serif",
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                অনলাইন পেমেন্ট
                            </button>
                            <button 
                                onClick={() => setActiveTab('bkash')}
                                style={{
                                    padding: '12px',
                                    border: '1px solid #d4cbb3',
                                    borderRadius: '4px',
                                    backgroundColor: activeTab === 'bkash' ? '#8d2024' : '#fff',
                                    color: activeTab === 'bkash' ? '#fff' : '#1a1512',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    fontFamily: "'Noto Sans Bengali', sans-serif",
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                বিকাশ অ্যাপ
                            </button>
                            <button 
                                onClick={() => setActiveTab('bank')}
                                style={{
                                    padding: '12px',
                                    border: '1px solid #d4cbb3',
                                    borderRadius: '4px',
                                    backgroundColor: activeTab === 'bank' ? '#8d2024' : '#fff',
                                    color: activeTab === 'bank' ? '#fff' : '#1a1512',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    fontFamily: "'Noto Sans Bengali', sans-serif",
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                ব্যাংক ট্রান্সফার
                            </button>
                            <button 
                                onClick={() => setActiveTab('office')}
                                style={{
                                    padding: '12px',
                                    border: '1px solid #d4cbb3',
                                    borderRadius: '4px',
                                    backgroundColor: activeTab === 'office' ? '#8d2024' : '#fff',
                                    color: activeTab === 'office' ? '#fff' : '#1a1512',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    fontFamily: "'Noto Sans Bengali', sans-serif",
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                জাদুঘর কার্যালয়
                            </button>
                        </div>

                        {/* TAB CONTENTS */}
                        
                        {/* ONLINE FORM TAB */}
                        {activeTab === 'online' && (
                            <div style={{ padding: '25px', backgroundColor: '#fcfbf7', border: '1px solid #d4cbb3', borderRadius: '4px' }}>
                                <h4 style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontSize: '1.25rem', color: '#8d2024', margin: '0 0 20px 0', fontWeight: 'bold' }}>
                                    Donation Form / অনুদান ফরম
                                </h4>
                                
                                {submitted ? (
                                    <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2" style={{ marginBottom: '15px' }}>
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                        <h5 style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontSize: '1.3rem', color: '#2e7d32', margin: '0 0 10px 0' }}>
                                            ধন্যবাদ! Thank You!
                                        </h5>
                                        <p className="p" style={{ fontSize: '1rem', color: '#555', marginBottom: '25px' }}>
                                            আপনার অনুদান ফরমটি সফলভাবে সাবমিট হয়েছে। আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করবেন।
                                        </p>
                                        <button onClick={resetForm} className="btn btn--primary" style={{ padding: '10px 20px', backgroundColor: '#8d2024', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                                            নতুন ফরম পূরণ করুন
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        <div>
                                            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#1a1512' }}>
                                                Your Name / নাম*:
                                            </label>
                                            <input 
                                                type="text" 
                                                name="name" 
                                                value={formData.name} 
                                                onChange={handleInputChange} 
                                                required 
                                                placeholder="Enter name"
                                                style={{ width: '100%', padding: '10px', border: '1px solid #d4cbb3', borderRadius: '4px', backgroundColor: '#fff' }}
                                            />
                                        </div>

                                        <div>
                                            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#1a1512' }}>
                                                আপনি কি আপনার নাম প্রকাশে আগ্রহী? / Do you want to show your name?*:
                                            </label>
                                            <div style={{ display: 'flex', gap: '20px', marginTop: '5px' }}>
                                                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                                                    <input 
                                                        type="radio" 
                                                        name="showName" 
                                                        value="Yes" 
                                                        checked={formData.showName === 'Yes'} 
                                                        onChange={handleInputChange} 
                                                    />
                                                    হ্যাঁ / Yes
                                                </label>
                                                <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                                                    <input 
                                                        type="radio" 
                                                        name="showName" 
                                                        value="No" 
                                                        checked={formData.showName === 'No'} 
                                                        onChange={handleInputChange} 
                                                    />
                                                    না / No
                                                </label>
                                            </div>
                                        </div>

                                        <div>
                                            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#1a1512' }}>
                                                বর্তমান ঠিকানা / Present Address*:
                                            </label>
                                            <textarea 
                                                name="address" 
                                                value={formData.address} 
                                                onChange={handleInputChange} 
                                                required 
                                                placeholder="Your Answer"
                                                rows="3"
                                                style={{ width: '100%', padding: '10px', border: '1px solid #d4cbb3', borderRadius: '4px', backgroundColor: '#fff', fontFamily: 'inherit' }}
                                            />
                                        </div>

                                        <div>
                                            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#1a1512' }}>
                                                মোবাইল / Mobile*:
                                            </label>
                                            <input 
                                                type="tel" 
                                                name="mobile" 
                                                value={formData.mobile} 
                                                onChange={handleInputChange} 
                                                required 
                                                placeholder="Enter Mobile Number"
                                                style={{ width: '100%', padding: '10px', border: '1px solid #d4cbb3', borderRadius: '4px', backgroundColor: '#fff' }}
                                            />
                                        </div>

                                        <div>
                                            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#1a1512' }}>
                                                E-mail*:
                                            </label>
                                            <input 
                                                type="email" 
                                                name="email" 
                                                value={formData.email} 
                                                onChange={handleInputChange} 
                                                required 
                                                placeholder="Enter Your Email"
                                                style={{ width: '100%', padding: '10px', border: '1px solid #d4cbb3', borderRadius: '4px', backgroundColor: '#fff' }}
                                            />
                                        </div>

                                        <div>
                                            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#1a1512' }}>
                                                নিম্নোক্ত কোন ধরনের অনুদান প্রদানে আপনি আগ্রহী তা পছন্দ করুন / Please select your option to chose your donation*:
                                            </label>
                                            <select 
                                                name="donationType" 
                                                value={formData.donationType} 
                                                onChange={handleInputChange} 
                                                style={{ width: '100%', padding: '10px', border: '1px solid #d4cbb3', borderRadius: '4px', backgroundColor: '#fff', fontSize: '0.95rem' }}
                                            >
                                                <option value="Buy A Brick - 10,000 TK">প্রতীকী ইট - ১০ হাজার টাকা / Buy A Brick - 10,000 TK</option>
                                                <option value="General Member - 25,000 TK">সাধারণ সদস্য - ২৫,০০০ টাকা / General Member - 25,000 TK</option>
                                                <option value="Lifetime Member - 1,00,000 TK">আজীবন সদস্য - ১ লাখ টাকা / Lifetime Member - 1,00,000 TK</option>
                                                <option value="Charter Member - 5,00,000 TK">উদ্যোক্তা সদস্য - ৫ লাখ টাকা / Charter Member - 5,00,000 TK</option>
                                                <option value="Sponsor Member - 15,00,000 TK">স্থাপনা সদস্য - ১৫ লাখ টাকা / Sponsor Member - 15,00,000 TK</option>
                                                <option value="Patron Member - 50,00,000 TK">পৃষ্ঠপোষক সদস্য - ৫০ লাখ টাকা / Patron Member - 50,00,000 TK</option>
                                                <option value="Other">অন্যান্য / Other</option>
                                            </select>
                                        </div>

                                        {formData.donationType === 'Other' && (
                                            <div>
                                                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '8px', color: '#1a1512' }}>
                                                    ৳ অন্যান্য পরিমাণ / Other Amount (TK)*:
                                                </label>
                                                <input 
                                                    type="number" 
                                                    name="otherAmount" 
                                                    value={formData.otherAmount} 
                                                    onChange={handleInputChange} 
                                                    required 
                                                    placeholder="Enter custom amount in TK"
                                                    style={{ width: '100%', padding: '10px', border: '1px solid #d4cbb3', borderRadius: '4px', backgroundColor: '#fff' }}
                                                />
                                            </div>
                                        )}

                                        <button 
                                            type="submit" 
                                            className="btn btn--primary" 
                                            style={{ 
                                                padding: '12px 28px', 
                                                background: 'linear-gradient(180deg, #8b181e 0%, #660f13 100%)', 
                                                color: '#fff', 
                                                border: '1px solid rgba(212, 175, 55, 0.45)', 
                                                borderRadius: '3px', 
                                                cursor: 'pointer', 
                                                fontWeight: 'bold',
                                                fontSize: '1rem',
                                                fontFamily: "'Roboto Slab', serif",
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.06em',
                                                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.18), 0 2px 6px rgba(0, 0, 0, 0.35)',
                                                marginTop: '10px',
                                                transition: 'all 0.2s ease-in-out'
                                            }}
                                        >
                                            Submit Form
                                        </button>
                                    </form>
                                )}
                            </div>
                        )}

                        {/* BKASH APP TAB */}
                        {activeTab === 'bkash' && (
                            <div style={{ padding: '25px', backgroundColor: '#fcfbf7', border: '1px solid #d4cbb3', borderRadius: '4px' }}>
                                <h4 style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontSize: '1.25rem', color: '#8d2024', margin: '0 0 15px 0', fontWeight: 'bold' }}>
                                    বিকাশ অ্যাপের মাধ্যমে অনুদান (Donate via bKash App)
                                </h4>
                                <ol className="p" style={{ paddingLeft: '20px', margin: '0 0 20px 0', lineHeight: '1.6' }}>
                                    <li style={{ marginBottom: '8px' }}>বিকাশ অ্যাপে লগইন করে <strong>"More Services"</strong> থেকে <strong>"Donation"</strong> ট্যাপ করুন।</li>
                                    <li style={{ marginBottom: '8px' }}>তালিকায় <strong>"Liberation War Museum"</strong> নির্বাচন করুন।</li>
                                    <li style={{ marginBottom: '8px' }}>আপনার নাম, ইমেইল এবং অনুদানের পরিমাণ লিখে সাবমিট করুন।</li>
                                </ol>
                                
                                {/* Responsive image container protecting mobile layout */}
                                <div style={{ width: '100%', overflowX: 'auto', border: '1px solid #e8e3d5', borderRadius: '6px', backgroundColor: '#fff', padding: '10px' }}>
                                    <img 
                                        src="https://www.liberationwarmuseumbd.org/public/images/321718.png" 
                                        alt="bKash app donation steps layout" 
                                        style={{ 
                                            width: '100%', 
                                            minWidth: '780px', 
                                            height: 'auto', 
                                            display: 'block', 
                                            borderRadius: '4px' 
                                        }} 
                                    />
                                </div>
                                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '10px', fontStyle: 'italic', textAlign: 'center' }}>
                                    *মোবাইলে স্ক্রিনশটটি স্পষ্ট দেখতে ডানে-বামে সুইপ/স্ক্রল করুন (Swipe left/right to view all steps)
                                </p>
                            </div>
                        )}

                        {/* BANK TRANSFER TAB */}
                        {activeTab === 'bank' && (
                            <div style={{ padding: '25px', backgroundColor: '#fcfbf7', border: '1px solid #d4cbb3', borderRadius: '4px' }}>
                                <h4 style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontSize: '1.25rem', color: '#8d2024', margin: '0 0 20px 0', fontWeight: 'bold' }}>
                                    ব্যাংক অ্যাকাউন্টের বিবরণ (Bank Account Details)
                                </h4>
                                
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                                    {/* Bangla Details */}
                                    <div style={{ padding: '15px', backgroundColor: '#fff', border: '1px solid #e8e3d5', borderRadius: '4px' }}>
                                        <h5 style={{ fontFamily: "'Noto Sans Bengali', sans-serif", color: '#8d2024', fontSize: '1.05rem', margin: '0 0 12px 0', fontWeight: 'bold' }}>বাংলা বিবরণ</h5>
                                        <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, lineHeight: '1.8', fontSize: '0.95rem' }}>
                                            <li><strong>ব্যাংক হিসাবের নাম:</strong> মুক্তিযুদ্ধ জাদুঘর ফান্ড</li>
                                            <li><strong>ব্যাংক হিসাব নং:</strong> ১১০১১৩১২৫২৬৪০৬৩</li>
                                            <li><strong>ব্যাংক:</strong> মার্কেন্টাইল ব্যাংক লি:</li>
                                            <li><strong>শাখা:</strong> প্রধান শাখা</li>
                                            <li><strong>রাউটিং নাম্বার:</strong> ১৪০২৭৫৩৫৩</li>
                                        </ul>
                                    </div>
                                    
                                    {/* English Details */}
                                    <div style={{ padding: '15px', backgroundColor: '#fff', border: '1px solid #e8e3d5', borderRadius: '4px' }}>
                                        <h5 style={{ fontFamily: 'Roboto Slab, serif', color: '#8d2024', fontSize: '1.05rem', margin: '0 0 12px 0', fontWeight: 'bold' }}>English Details</h5>
                                        <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0, lineHeight: '1.8', fontSize: '0.95rem' }}>
                                            <li><strong>Bank Account Name:</strong> Muktijuddha Jadughar Fund</li>
                                            <li><strong>Account No.</strong> 1101 131 25264063</li>
                                            <li><strong>Bank Name:</strong> Mercantile Bank Ltd</li>
                                            <li><strong>Branch Name:</strong> Main Branch</li>
                                            <li><strong>Routing No:</strong> 140275353</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* DIRECT OFFICE TAB */}
                        {activeTab === 'office' && (
                            <div style={{ padding: '25px', backgroundColor: '#fcfbf7', border: '1px solid #d4cbb3', borderRadius: '4px' }}>
                                <h4 style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontSize: '1.25rem', color: '#8d2024', margin: '0 0 15px 0', fontWeight: 'bold' }}>
                                    সরাসরি মুক্তিযুদ্ধ জাদুঘর কার্যালয়ে (Directly to Office)
                                </h4>
                                
                                <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start', backgroundColor: '#fff', padding: '20px', border: '1px solid #e8e3d5', borderRadius: '4px' }}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8d2024" strokeWidth="1.5" style={{ flexShrink: 0, marginTop: '4px' }}>
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <div>
                                        <h5 style={{ fontFamily: "'Noto Sans Bengali', sans-serif", fontSize: '1.1rem', color: '#1a1512', margin: '0 0 8px 0', fontWeight: 'bold' }}>
                                            জাদুঘরের ঠিকানা (Museum Address)
                                        </h5>
                                        <p style={{ margin: 0, lineHeight: '1.8', fontSize: '0.98rem', color: '#1a1a1a' }}>
                                            মুক্তিযুদ্ধ জাদুঘর <br />
                                            প্লট: এফ-১১/এ এবং এফ-১১/বি <br />
                                            শেরেবাংলা নগর, সিভিক সেন্টার, আগারগাঁও, ঢাকা।
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </>
    );
}
