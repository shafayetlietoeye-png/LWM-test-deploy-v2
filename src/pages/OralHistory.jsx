import { useEffect, useState } from 'react';
import { oralHistoryData } from '../data/oralHistoryData';
import Breadcrumb from '../components/Breadcrumb';

const DISTRICTS = [
  { id: 'bagerhat', name: 'বাগেরহাট', nameEn: 'Bagerhat', storyCount: 4, active: true },
  { id: 'dhaka', name: 'ঢাকা', nameEn: 'Dhaka', storyCount: 0, active: false },
  { id: 'chittagong', name: 'চট্টগ্রাম', nameEn: 'Chittagong', storyCount: 0, active: false },
  { id: 'barisal', name: 'বরিশাল', nameEn: 'Barisal', storyCount: 0, active: false },
  { id: 'khulna', name: 'খুলনা', nameEn: 'Khulna', storyCount: 0, active: false },
  { id: 'rajshahi', name: 'রাজশাহী', nameEn: 'Rajshahi', storyCount: 0, active: false },
  { id: 'sylhet', name: 'সিলেট', nameEn: 'Sylhet', storyCount: 0, active: false },
  { id: 'rangpur', name: 'রংপুর', nameEn: 'Rangpur', storyCount: 0, active: false },
  { id: 'mymensingh', name: 'ময়মনসিংহ', nameEn: 'Mymensingh', storyCount: 0, active: false },
  { id: 'brahmanbaria', name: 'ব্রাহ্মণবাড়িয়া', nameEn: 'Brahmanbaria', storyCount: 0, active: false },
];

export default function OralHistory() {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [currentPage, setCurrentPage] = useState(0); // unified page index from 0 to 27
  const [isMobile, setIsMobile] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);

  // Handle window resizing to toggle single vs double-page layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set document title
  useEffect(() => {
    document.body.classList.add('page-museum-story');
    document.title = 'Oral History | Liberation War Museum';
    return () => {
      document.body.classList.remove('page-museum-story');
      document.body.style.overflow = '';
    };
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedDistrict) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [selectedDistrict]);

  const selectDistrict = (districtId) => {
    if (districtId === 'bagerhat') {
      setSelectedDistrict(districtId);
      setCurrentPage(0);
      setShowFloatingMenu(false);
    }
  };

  const closeBook = () => {
    setSelectedDistrict(null);
    setShowFloatingMenu(false);
  };

  const districtInfo = selectedDistrict ? oralHistoryData[selectedDistrict] : null;
  const stories = districtInfo ? districtInfo.stories : [];

  // Synthesize realistic paper-flipping sound using Web Audio API
  const playPageTurnSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      // Create white noise for paper friction rustle
      const bufferSize = ctx.sampleRate * 0.35; // 0.35s duration
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      // Bandpass filter for paper frequency response
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1200, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.3);
      filter.Q.value = 1.2;

      // Envelope for sound decay
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();

      // Low frequency thump to simulate page force bending
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(90, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(15, ctx.currentTime + 0.22);

      oscGain.gain.setValueAtTime(0.12, ctx.currentTime);
      oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);

      osc.connect(oscGain);
      oscGain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch (e) {
      console.warn('Audio Synthesis blocked:', e);
    }
  };

  // 14 Sheets structure corresponding to exactly 28 pages
  const sheets = [
    {
      front: { type: 'cover' },
      back: { type: 'blank' }
    },
    {
      front: { type: 'toc' },
      back: { type: 'story', storyIndex: 0, part: 1, startParagraph: 0, endParagraph: 1 }
    },
    {
      front: { type: 'story', storyIndex: 0, part: 2, startParagraph: 1, endParagraph: 2 },
      back: { type: 'story', storyIndex: 0, part: 3, startParagraph: 2, endParagraph: 3 }
    },
    {
      front: { type: 'story', storyIndex: 0, part: 4, startParagraph: 3, endParagraph: 4 },
      back: { type: 'story', storyIndex: 0, part: 5, startParagraph: 4, endParagraph: 5 }
    },
    {
      front: { type: 'story', storyIndex: 0, part: 6, startParagraph: 5, endParagraph: 6 },
      back: { type: 'story', storyIndex: 1, part: 1, startParagraph: 0, endParagraph: 1 }
    },
    {
      front: { type: 'story', storyIndex: 1, part: 2, startParagraph: 1, endParagraph: 3 },
      back: { type: 'story', storyIndex: 1, part: 3, startParagraph: 3, endParagraph: 5 }
    },
    {
      front: { type: 'story', storyIndex: 1, part: 4, startParagraph: 5, endParagraph: 7 },
      back: { type: 'story', storyIndex: 2, part: 1, startParagraph: 0, endParagraph: 1 }
    },
    {
      front: { type: 'story', storyIndex: 2, part: 2, startParagraph: 1, endParagraph: 3 },
      back: { type: 'story', storyIndex: 2, part: 3, startParagraph: 3, endParagraph: 5 }
    },
    {
      front: { type: 'story', storyIndex: 2, part: 4, startParagraph: 5, endParagraph: 7 },
      back: { type: 'story', storyIndex: 3, part: 1, startParagraph: 0, endParagraph: 1 }
    },
    {
      front: { type: 'story', storyIndex: 3, part: 2, startParagraph: 1, endParagraph: 2 },
      back: { type: 'story', storyIndex: 3, part: 3, startParagraph: 2, endParagraph: 3 } // List of 8 razakars page
    },
    {
      front: { type: 'story', storyIndex: 3, part: 4, startParagraph: 3, endParagraph: 4 }, // List of 2 freedom fighters page
      back: { type: 'story', storyIndex: 3, part: 5, startParagraph: 4, endParagraph: 5 }  // List of 3 famous freedom fighters page
    },
    {
      front: { type: 'story', storyIndex: 3, part: 6, startParagraph: 5, endParagraph: 6 },  // Paragraph 5 page
      back: { type: 'story', storyIndex: 3, part: 7, startParagraph: 6, endParagraph: 7 }   // List of 2 local razakars page
    },
    {
      front: { type: 'story', storyIndex: 3, part: 8, startParagraph: 7, endParagraph: 8 },  // Paragraph 7 page
      back: { type: 'story', storyIndex: 3, part: 9, startParagraph: 8, endParagraph: 9 }   // Paragraph 8 page
    },
    {
      front: { type: 'story', storyIndex: 3, part: 10, startParagraph: 9, endParagraph: 12 }, // Paragraphs 9, 10, 11 page
      back: { type: 'back-cover' }
    }
  ];

  // Map story index to its starting page number
  const getStoryStartPage = (storyIndex) => {
    switch (storyIndex) {
      case 0: return 3; // Story 1 starts on Page 3
      case 1: return 9; // Story 2 starts on Page 9
      case 2: return 13; // Story 3 starts on Page 13
      case 3: return 17; // Story 4 starts on Page 17
      default: return 2;
    }
  };

  const handleNext = () => {
    if (isFlipping) return;
    
    if (isMobile) {
      if (currentPage < 27) {
        playPageTurnSound();
        setIsFlipping(true);
        setCurrentPage(prev => prev + 1);
        setShowFloatingMenu(false);
        setTimeout(() => setIsFlipping(false), 600);
      }
    } else {
      if (currentPage === 0) {
        playPageTurnSound();
        setIsFlipping(true);
        setCurrentPage(1); // Open cover to show inside cover & TOC
        setShowFloatingMenu(false);
        setTimeout(() => setIsFlipping(false), 600);
      } else if (currentPage < 25) {
        playPageTurnSound();
        setIsFlipping(true);
        setCurrentPage(prev => Math.min(26, prev + 2));
        setShowFloatingMenu(false);
        setTimeout(() => setIsFlipping(false), 600);
      }
    }
  };

  const handlePrev = () => {
    if (isFlipping) return;

    if (isMobile) {
      if (currentPage > 0) {
        playPageTurnSound();
        setIsFlipping(true);
        setCurrentPage(prev => prev - 1);
        setShowFloatingMenu(false);
        setTimeout(() => setIsFlipping(false), 600);
      }
    } else {
      if (currentPage === 1 || currentPage === 2) {
        playPageTurnSound();
        setIsFlipping(true);
        setCurrentPage(0); // Close cover
        setShowFloatingMenu(false);
        setTimeout(() => setIsFlipping(false), 600);
      } else if (currentPage > 2) {
        playPageTurnSound();
        setIsFlipping(true);
        setCurrentPage(prev => Math.max(1, prev - 2));
        setShowFloatingMenu(false);
        setTimeout(() => setIsFlipping(false), 600);
      }
    }
  };

  const jumpToPage = (pageNum) => {
    if (isFlipping || pageNum === currentPage) return;
    playPageTurnSound();
    setIsFlipping(true);
    
    if (isMobile) {
      setCurrentPage(pageNum);
    } else {
      // On desktop, ensure the spread aligns nicely (always left page odd, right page even)
      if (pageNum === 0) {
        setCurrentPage(0);
      } else if (pageNum % 2 === 0) {
        setCurrentPage(pageNum - 1);
      } else {
        setCurrentPage(pageNum);
      }
    }
    
    setShowFloatingMenu(false);
    setTimeout(() => setIsFlipping(false), 600);
  };

  // Helper to format numbers to Bengali digits
  const toBanglaDigits = (num) => {
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().split('').map(digit => {
      const d = parseInt(digit);
      return isNaN(d) ? digit : banglaDigits[d];
    }).join('');
  };

  // Helper to resolve page configuration from flat page list index
  const getPageConfig = (pageIdx) => {
    const sheetIdx = Math.floor(pageIdx / 2);
    const isBack = pageIdx % 2 !== 0;
    if (sheetIdx >= sheets.length) return { type: 'blank' };
    return isBack ? sheets[sheetIdx].back : sheets[sheetIdx].front;
  };

  // Render single page side content based on page config
  const renderPageSide = (pageConfig, pageNumber) => {
    if (pageConfig.type === 'blank') {
      return (
        <div className="oh-book-page__content oh-book-page__content--blank">
          <div className="oh-page-number">পাতা {toBanglaDigits(pageNumber)}</div>
        </div>
      );
    }

    switch (pageConfig.type) {
      case 'cover':
        return (
          <div className="oh-book-page__content oh-book-page__content--cover">
            <div className="oh-cover-border-outer">
              <div className="oh-cover-border-inner">
                <div className="oh-cover-header">মুক্তিযুদ্ধ জাদুঘর • মৌখিক ইতিহাস সংকলন</div>
                <div className="oh-cover-title-group">
                  <h1 className="oh-cover-title">{districtInfo.districtName} জেলা</h1>
                  <p className="oh-cover-subtitle">তরুণ প্রজন্মের সংগৃহীত মুক্তিযুদ্ধের প্রত্যক্ষদর্শীদের রক্তঝরা স্মৃতিকথা</p>
                </div>
                <div className="oh-cover-divider"></div>
                <div className="oh-cover-emblem">
                  <img src="/assets/header logo.svg" alt="মুক্তিযুদ্ধ জাদুঘর লোগো" className="oh-cover-logo" style={{ height: '70px', width: 'auto', display: 'block', margin: '0 auto', opacity: 0.9 }} />
                </div>
                <div className="oh-cover-footer">বাগেরহাট, বাংলাদেশ</div>
              </div>
            </div>
            <div className="oh-page-number">পাতা {toBanglaDigits(pageNumber)}</div>
          </div>
        );

      case 'toc':
        return (
          <div className="oh-book-page__content oh-book-page__content--toc">
            <h2 className="oh-page-title">সূচিপত্র</h2>
            <div className="oh-page-divider"></div>
            <ul className="oh-toc-list">
              {stories.map((story, idx) => {
                const startPageNum = getStoryStartPage(idx);
                return (
                  <li key={story.id} className="oh-toc-item" onClick={() => jumpToPage(startPageNum)}>
                    <span className="oh-toc-num">{toBanglaDigits(idx + 1)}.</span>
                    <div className="oh-toc-details">
                      <div className="oh-toc-story-title">{story.title}</div>
                      <div className="oh-toc-story-narrator">বর্ণনাকারী: {story.narrator.name}</div>
                    </div>
                    <span className="oh-toc-page">পাতা {toBanglaDigits(startPageNum)}</span>
                  </li>
                );
              })}
            </ul>
            <div className="oh-page-number">পাতা {toBanglaDigits(pageNumber)}</div>
          </div>
        );

      case 'story':
        const story = stories[pageConfig.storyIndex];
        const showMetadata = pageConfig.part === 1;
        const pageParagraphs = story.paragraphs.slice(pageConfig.startParagraph, pageConfig.endParagraph);
        const isLastPageOfStory = 
          (pageConfig.storyIndex === 0 && pageConfig.part === 6) ||
          (pageConfig.storyIndex === 1 && pageConfig.part === 4) ||
          (pageConfig.storyIndex === 2 && pageConfig.part === 4) ||
          (pageConfig.storyIndex === 3 && pageConfig.part === 10);

        return (
          <div className="oh-book-page__content oh-book-page__content--story">
            {showMetadata && (
              <>
                <h3 className="oh-story-title">{story.title}</h3>
                <div className="oh-story-meta">
                  <div className="oh-meta-box oh-meta-box--narrator">
                    <div className="oh-meta-label">বর্ণনাকারী</div>
                    <div className="oh-meta-value">{story.narrator.name}</div>
                    <div className="oh-meta-sub">
                      {story.narrator.age && `বয়স: ${story.narrator.age}`}
                      {story.narrator.relation && `, সম্পর্ক: ${story.narrator.relation}`}
                    </div>
                    {story.narrator.address && <div className="oh-meta-address">{story.narrator.address}</div>}
                  </div>
                  <div className="oh-meta-box oh-meta-box--collector">
                    <div className="oh-meta-label">সংগ্রহকারী</div>
                    <div className="oh-meta-value">{story.collector.name}</div>
                    <div className="oh-meta-sub">{story.collector.school}</div>
                    <div className="oh-meta-sub">
                      {story.collector.grade}
                      {story.collector.roll && `, রোল: ${story.collector.roll}`}
                    </div>
                  </div>
                </div>
                <div className="oh-page-divider"></div>
              </>
            )}

            {!showMetadata && (
              <div className="oh-story-header-running">
                <span>{story.title}</span>
              </div>
            )}

            <div className="oh-story-body">
              {pageParagraphs.map((para, pIdx) => {
                if (para.includes('\n')) {
                  const lines = para.split('\n');
                  return (
                    <div key={pIdx} className="oh-story-para oh-story-para--list">
                      {lines.map((line, lIdx) => (
                        <div key={lIdx} className="oh-story-list-line">{line}</div>
                      ))}
                    </div>
                  );
                }
                return <p key={pIdx} className="oh-story-para">{para}</p>;
              })}
            </div>

            {isLastPageOfStory && (
              <div className="oh-story-source">সূত্র : {story.source}</div>
            )}
            <div className="oh-page-number">পাতা {toBanglaDigits(pageNumber)}</div>
          </div>
        );

      case 'back-cover':
        return (
          <div className="oh-book-page__content oh-book-page__content--back-cover">
            <div className="oh-cover-border-outer">
              <div className="oh-cover-border-inner">
                <div className="oh-back-title">ইতিহাসের সত্য কথন</div>
                <div className="oh-back-desc">
                  <p>মুক্তিযুদ্ধ জাদুঘর ২০০৪ সাল থেকে এই “মৌখিক ইতিহাস সংগ্রহ” কার্যক্রম পরিচালনা করে আসছে। দেশের প্রত্যন্ত অঞ্চলের হাজার হাজার তরুন শিক্ষার্থীদের সহায়তায় এ পর্যন্ত হাজার হাজার সাধারণ মানুষের বীরত্ব ও আত্মত্যাগের প্রত্যক্ষ বিবরণ সংরক্ষিত হয়েছে জাদুঘর আর্কাইভে।</p>
                  <p>ইতিহাস বিকৃতির বিরুদ্ধে সাধারণ মানুষের এই বয়ান আমাদের সবচেয়ে শক্তিশালী হাতিয়ার।</p>
                </div>
                <div className="oh-cover-divider"></div>
                <div className="oh-back-branding">
                  <span className="oh-branding-text">মুক্তিযুদ্ধ জাদুঘর</span>
                  <span className="oh-branding-web">www.liberationwarmuseum.org</span>
                </div>
              </div>
            </div>
            <div className="oh-page-number">পাতা {toBanglaDigits(pageNumber)}</div>
          </div>
        );

      default:
        return null;
    }
  };

  const desktopFlippedCount = Math.floor((currentPage + 1) / 2);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero hero--museum-story">
        <div className="hero__inner hero__inner--bottom-left">
          <div className="hero-card hero-card--dark-brush hero-card--wide">
            <div className="hero-card__title">Oral History (মৌখিক ইতিহাস)</div>
            <div className="hero-card__desc">
              দেশজুড়ে স্কুলগামী শিক্ষার্থীদের মাধ্যমে সংগৃহীত সাধারণ মানুষের একাত্তরের স্মৃতি ও অভিজ্ঞতার সংকলন।
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT WORKSPACE */}
      <main className="museum-story-content">
        <section className="block">
          <div className="separator"></div>
          <Breadcrumb />

          {/* DISTRICT SELECTION VIEW */}
          <div className="block__cap">
            <span className="cap__title">জেলাভিত্তিক মৌখিক ইতিহাস</span>
          </div>
          <div className="block__content">
            <p className="p" style={{ marginBottom: '30px', color: '#111', fontWeight: 500 }}>
              যেসব জেলার মৌখিক ইতিহাস বই আকারে প্রকাশ করা হয়েছে, সেই জেলাগুলোর ওপর ক্লিক করে তাদের সংগৃহীত প্রত্যক্ষদর্শীদের বয়ান পড়ুন। বাকি জেলাগুলোর ইতিহাসও শীঘ্রই যুক্ত হবে।
            </p>

            <div className="oh-district-grid">
              {DISTRICTS.map((dist) => (
                <div
                  key={dist.id}
                  className={`oh-district-card${dist.active ? ' oh-district-card--active' : ' oh-district-card--coming-soon'}`}
                  onClick={() => selectDistrict(dist.id)}
                >
                  <div className="oh-card-frame">
                    <div className="oh-card-icon">
                      {dist.active ? (
                        /* Beautiful detailed active book icon */
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#cdb66c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        </svg>
                      ) : (
                        /* Beautiful detailed lock icon */
                        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                      )}
                    </div>
                    <h4 className="oh-card-title">{dist.name}</h4>
                    <div className="oh-card-badge">
                      {dist.active ? `${toBanglaDigits(dist.storyCount)}টি গল্প` : 'শীঘ্রই আসছে'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INTERACTIVE BOOK MODAL POPUP */}
          {selectedDistrict && (
            <div className="oh-modal-overlay" onClick={(e) => e.target === e.currentTarget && closeBook()}>
              <div className="oh-modal-content">
                {/* Floating Table of Contents Dropdown Popover */}
                {currentPage > 2 && currentPage < 27 && (
                  <div className="oh-floating-toc-wrapper">
                    {showFloatingMenu && (
                      <div className="oh-floating-menu-popover">
                        <div className="oh-floating-menu-header">সূচিপত্র (গল্প সংকলন)</div>
                        <ul className="oh-floating-menu-list">
                          {stories.map((story, idx) => {
                            const startPageNum = getStoryStartPage(idx);
                            return (
                              <li 
                                key={story.id} 
                                className="oh-floating-menu-item"
                                onClick={() => {
                                  jumpToPage(startPageNum);
                                  setShowFloatingMenu(false);
                                }}
                              >
                                <div className="oh-floating-menu-title">{toBanglaDigits(idx + 1)}. {story.title}</div>
                                <div className="oh-floating-menu-narrator">বর্ণনাকারী: {story.narrator.name} (পাতা {toBanglaDigits(startPageNum)})</div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                    
                    <button 
                      className={`oh-floating-toc ${showFloatingMenu ? 'oh-floating-toc--active' : ''}`} 
                      onClick={() => setShowFloatingMenu(!showFloatingMenu)}
                      title="সূচিপত্র দেখুন"
                      aria-label="Toggle Table of Contents Menu"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="8" y1="6" x2="21" y2="6" />
                        <line x1="8" y1="12" x2="21" y2="12" />
                        <line x1="8" y1="18" x2="21" y2="18" />
                        <line x1="3" y1="6" x2="3.01" y2="6" />
                        <line x1="3" y1="12" x2="3.01" y2="12" />
                        <line x1="3" y1="18" x2="3.01" y2="18" />
                      </svg>
                      <span className="oh-floating-toc-text">সূচিপত্র</span>
                    </button>
                  </div>
                )}

                <div className="oh-book-controls-top">
                  <button className="oh-btn-back" onClick={closeBook}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                    <span>জেলা তালিকায় ফিরুন</span>
                  </button>
                  <div className="oh-book-title-running">মৌখিক ইতিহাস : {districtInfo.districtName} জেলা</div>
                  <div className="oh-book-header-right">
                    {currentPage > 2 && (
                      <button className="oh-btn-toc" onClick={() => jumpToPage(2)}>
                        সূচিপত্র
                      </button>
                    )}
                    <button className="oh-btn-close" onClick={closeBook} aria-label="Close book">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="oh-book-wrapper">
                  {/* Book Navigation - Prev */}
                  <button
                    className="oh-book-nav-btn oh-book-nav-btn--prev"
                    onClick={handlePrev}
                    disabled={currentPage === 0 || isFlipping}
                    aria-label="Previous Page"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>

                  {/* The Book */}
                  <div className={`oh-book ${isMobile ? 'oh-book--mobile' : ''}`}>
                    {isMobile ? (
                      /* MOBILE View: Render single active page (unified sequence 0-27) */
                      <div className="oh-book-page oh-book-page--single">
                        {renderPageSide(getPageConfig(currentPage), currentPage)}
                      </div>
                    ) : (
                      /* DESKTOP View: Render 3D Sheet Stack Layout */
                      <div className="oh-book-sheets-container">
                        {/* Center book spine shadow */}
                        <div className="oh-book-spine"></div>

                        {sheets.map((sheet, index) => {
                          const isFlipped = index < desktopFlippedCount;
                          const zIndex = isFlipped ? index : sheets.length - index;

                          return (
                            <div
                              key={index}
                              className={`oh-book-sheet ${isFlipped ? 'oh-book-sheet--flipped' : ''}`}
                              style={{ zIndex }}
                            >
                              {/* Front Page Side */}
                              <div className="oh-page-side oh-page-side--front">
                                {renderPageSide(sheet.front, 2 * index)}
                              </div>

                              {/* Back Page Side */}
                              <div className="oh-page-side oh-page-side--back">
                                {renderPageSide(sheet.back, 2 * index + 1)}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Book Navigation - Next */}
                  <button
                    className="oh-book-nav-btn oh-book-nav-btn--next"
                    onClick={handleNext}
                    disabled={(isMobile && currentPage >= 27) || (!isMobile && currentPage >= 26) || isFlipping}
                    aria-label="Next Page"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
