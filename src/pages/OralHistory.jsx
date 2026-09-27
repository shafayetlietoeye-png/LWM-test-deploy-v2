import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import { PageFlip } from 'page-flip';
import { oralHistoryData } from '../data/oralHistoryData';
import Breadcrumb from '../components/Breadcrumb';

const DISTRICTS = [
  { id: 'bagerhat', name: 'বাগেরহাট', nameEn: 'Bagerhat', storyCount: 3, active: true },
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

// Helper to format numbers to Bengali digits
const toBanglaDigits = (num) => {
  if (num === null || num === undefined) return '';
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().split('').map((digit) => {
    const d = parseInt(digit, 10);
    return isNaN(d) ? digit : banglaDigits[d];
  }).join('');
};

// Web Audio API realistic paper flip sound
const playPageTurnSound = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const bufferSize = ctx.sampleRate * 0.35;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.3);
    filter.Q.value = 1.2;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();

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

/**
 * Subcomponent hosting PageFlip to completely isolate React reconciliation
 * from DOM elements manipulated by PageFlip.
 */
const BookReader = forwardRef(function BookReader({ districtInfo, stories, onFlip }, ref) {
  const rootRef = useRef(null);
  const flipInstanceRef = useRef(null);

  useImperativeHandle(ref, () => ({
    flipNext: () => {
      try {
        flipInstanceRef.current?.flipNext('bottom');
      } catch (e) {
        console.warn('flipNext error:', e);
      }
    },
    flipPrev: () => {
      try {
        flipInstanceRef.current?.flipPrev('bottom');
      } catch (e) {
        console.warn('flipPrev error:', e);
      }
    },
    flip: (targetPage) => {
      try {
        flipInstanceRef.current?.flip(targetPage, 'top');
      } catch (e) {
        console.warn('flip error:', e);
      }
    },
    turnToPage: (targetPage) => {
      try {
        flipInstanceRef.current?.turnToPage(targetPage);
      } catch (e) {
        console.warn('turnToPage error:', e);
      }
    },
    getCurrentPageIndex: () => flipInstanceRef.current?.getCurrentPageIndex() ?? 0
  }));

  useEffect(() => {
    if (!rootRef.current) return;

    let pageFlip = null;
    let mountEl = null;

    const timer = setTimeout(() => {
      if (!rootRef.current) return;

      mountEl = document.createElement('div');
      mountEl.className = 'oh-flipbook-mount';
      rootRef.current.appendChild(mountEl);

      const templatePages = rootRef.current.querySelectorAll('.oh-page-template');
      const pageNodes = Array.from(templatePages).map((el) => {
        const clone = el.cloneNode(true);
        clone.classList.remove('oh-page-template');
        clone.classList.add('oh-page');
        return clone;
      });

      pageFlip = new PageFlip(mountEl, {
        width: 440,
        height: 600,
        size: 'fixed',
        autoSize: false,
        maxShadowOpacity: 0.45,
        showCover: true,
        mobileScrollSupport: false,
        useMouseEvents: true,
        clickEventForward: true,
        flippingTime: 700
      });

      pageFlip.loadFromHTML(pageNodes);

      pageFlip.on('flip', (e) => {
        onFlip(e.data);
      });

      const handleMountClick = (e) => {
        const btn = e.target.closest('[data-jump-page]');
        if (btn) {
          e.preventDefault();
          e.stopPropagation();
          const page = parseInt(btn.getAttribute('data-jump-page'), 10);
          if (!isNaN(page)) {
            pageFlip.turnToPage(page);
          }
        }
      };
      mountEl.addEventListener('click', handleMountClick);

      flipInstanceRef.current = pageFlip;
      window.__pageFlip = pageFlip;
    }, 40);

    return () => {
      clearTimeout(timer);
      if (flipInstanceRef.current) {
        try {
          flipInstanceRef.current.destroy();
        } catch (e) {
          console.warn('PageFlip cleanup warning:', e);
        }
        flipInstanceRef.current = null;
      }
      if (mountEl) {
        mountEl.remove();
      }
    };
  }, [districtInfo, stories]);

  return (
    <div className="oh-book-reader-container" ref={rootRef}>
      {/* Hidden static template pages for cloning */}
      <div className="oh-template-pages" style={{ display: 'none' }}>
        {/* Page 0: Front Cover (Hard) */}
        <div className="oh-page-template oh-page--cover" data-density="hard">
          <div className="oh-cover-inner">
            <div className="oh-cover-border-outer">
              <div className="oh-cover-border-inner">
                <div className="oh-cover-header">মুক্তিযুদ্ধ জাদুঘর • মৌখিক ইতিহাস সংকলন</div>
                <div className="oh-cover-title-group">
                  <h1 className="oh-cover-title">{districtInfo.districtName} জেলা</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page 1: Inside Front Cover (Blank, no page number) */}
        <div className="oh-page-template oh-page--blank" data-density="hard">
          <div className="oh-page-inner"></div>
        </div>

        {/* Page 2: Table of Contents (TOC, Display Page ১) */}
        <div className="oh-page-template oh-page--toc" data-density="soft">
          <div className="oh-page-inner">
            <h2 className="oh-page-title">সূচিপত্র</h2>
            <div className="oh-page-divider"></div>
            <ul className="oh-toc-list">
              {stories.map((story, idx) => {
                const rawStartPages = [3, 5, 7];
                const displayStartPages = [2, 4, 6];
                const targetPage = rawStartPages[idx];
                const displayPage = displayStartPages[idx];
                return (
                  <li key={story.id}>
                    <button
                      type="button"
                      className="oh-toc-item"
                      data-jump-page={targetPage}
                    >
                      <span className="oh-toc-num">{toBanglaDigits(idx + 1)}.</span>
                      <span className="oh-toc-story-title">{story.title}</span>
                      <span className="oh-toc-leader" aria-hidden="true"></span>
                      <span className="oh-toc-page">{toBanglaDigits(displayPage)}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="oh-page-number">{toBanglaDigits(1)}</div>
          </div>
        </div>

        {/* Page 3: Story 1, Part 1 (Display Page ২) */}
        <div className="oh-page-template" data-density="soft">
          <div className="oh-page-inner">
            <h3 className="oh-story-title">{stories[0]?.title}</h3>
            <div className="oh-story-meta">
              <div className="oh-meta-box oh-meta-box--narrator">
                <div className="oh-meta-label">বর্ণনাকারী</div>
                <div className="oh-meta-value">{stories[0]?.narrator.name}</div>
                <div className="oh-meta-sub">বয়স: {stories[0]?.narrator.age}</div>
                <div className="oh-meta-address">{stories[0]?.narrator.address}</div>
              </div>
              <div className="oh-meta-box oh-meta-box--collector">
                <div className="oh-meta-label">সংগ্রহকারী</div>
                <div className="oh-meta-value">{stories[0]?.collector.name}</div>
                <div className="oh-meta-sub">{stories[0]?.collector.school}</div>
                <div className="oh-meta-sub">
                  {stories[0]?.collector.grade}, রোল: {stories[0]?.collector.roll}
                </div>
              </div>
            </div>
            <div className="oh-page-divider"></div>
            <div className="oh-story-body">
              <p className="oh-story-para">{stories[0]?.paragraphs[0]}</p>
              <p className="oh-story-para">{stories[0]?.paragraphs[1]}</p>
              <p className="oh-story-para">
                আমি ও আমার ছয় ছেলে-মেয়ে এবং আশেপাশের মোট প্রায় বিশ জনের মতো একটি গর্তে অবস্থান করছিলাম। সেখানে আগে থেকেই মাটির নিচে বড় গর্ত খুঁড়ে উপরে বাঁশের চালের মতো খড়কুটো ও গাছের লতাপাতা দিয়ে গোপন ছাদ তৈরি করে রাখা হয়েছিল। আমরা গর্তের ভেতর শ্বাসরুদ্ধকর অবস্থায় বাদল ঠাকুরের আর্তচিৎকার শুনতে পাচ্ছিলাম। গুলির বিকট শব্দে আতঙ্কিত হয়ে বাদল ঠাকুর যখন মন্দির প্রাঙ্গণ থেকে বের হওয়ার চেষ্টা করছিলেন, তখনই তিনি নরপশু খান সেনাদের মুখোমুখি পড়ে যান। বর্বর সেনারা দেখা মাত্রই তাকে বেয়নেট দিয়ে খুঁচিয়ে কুপিয়ে নির্মমভাবে পেট থেকে ভুঁড়ি বের করে ফেলে। দূর থেকে আমরা তাঁর বুকফাটা আর্তনাদ শুনছিলাম। গর্তের ভেতর আমাদের সন্তানরা ভয়ে কেঁপে কেঁপে উঠছিল। তখন আমাদের একটাই দুঃশ্চিন্তা—ওরা কি আমাদেরও সন্ধান পেয়ে যাবে?
              </p>
            </div>
            <div className="oh-page-number">{toBanglaDigits(2)}</div>
          </div>
        </div>

        {/* Page 4: Story 1, Part 2 (Display Page ৩) */}
        <div className="oh-page-template" data-density="soft">
          <div className="oh-page-inner">
            <div className="oh-story-body">
              <p className="oh-story-para">
                খান সেনাদের সেই নারকীয় তাণ্ডবের পর চারপাশ কিছুক্ষণের জন্য স্তব্ধ হয়ে গেল। এভাবে গ্রামের কিছু নিরীহ মানুষকে নির্মমভাবে হত্যা করে খান সেনারা ওই দিনের মতো চলে যায়। নরপশুরা চলে যাওয়ার পর আমরা আতঙ্কিত অবস্থায় গর্তের মুখ সরিয়ে বের হয়ে দেখি বাদল ঠাকুর তখনও মারা যাননি। তাঁর রক্তাক্ত পেট থেকে নাড়িভুঁড়ি বের হয়ে মাটিতে লুটিয়ে পড়েছে। তিনি তখনও যন্ত্রণায় মাটিতে ছটফট করছিলেন এবং ধুঁকতে ধুঁকতে বলছিলেন, “আমাকে কোনো ডাক্তারের কাছে নিয়ে চলো, আমি বাঁচতে চাই।” কিন্তু সেই অবরুদ্ধ যুদ্ধবিধ্বস্ত গ্রামে তখন কোনো ডাক্তার বা চিকিৎসার ব্যবস্থা ছিল না। চোখের সামনে অল্প সময়ের মধ্যেই এই ধর্মপ্রাণ মানুষটি মৃত্যুর কোলে ঢলে পড়েন। এই হৃদয়বিদারক স্মৃতি মনে পড়লে আজও চোখ অশ্রুসিক্ত হয়ে ওঠে।
              </p>
              <p className="oh-story-para">
                বাদল ঠাকুরের এই নির্মম হত্যাকাণ্ডের পর গোটা বিষ্ণুপুর গ্রামে এক অবর্ণনীয় বিভীষিকা নেমে আসে। গ্রামের হিন্দু পরিবারগুলো সব সহায়-সম্বল ফেলে রেখে রাতের আঁধারে সীমান্ত পাড়ি দিয়ে ভারতে চলে যেতে শুরু করে। আমরা যারা মুসলমান পরিবার ছিলাম, আমরাও এক মুহূর্ত শান্তিতে ঘুমাতে পারতাম না। পাকিস্তানি হানাদার আর তাদের দোসর রাজাকাররা কখন গ্রামে ঢুকে বাড়িঘর জ্বালিয়ে দেবে আর নিরীহ মানুষদের ধরে নিয়ে যাবে—এই আতঙ্কে দিন কাটত। গ্রামের জোয়ান পুরুষরা রাতের বেলা পাহারা দিত, আর মায়েরা অবোধ শিশুদের বুকে চেপে ধরে নির্ঘুম রাত কাটাত। চারদিকে কেবল অনিশ্চয়তা আর স্বজন হারানোর ভয়।
              </p>
              <p className="oh-story-para">
                এমনই এক চরম আতঙ্কের দিনে আমার ছোট ছেলে ভাগ্যক্রমে নিশ্চিত মৃত্যুর হাত থেকে বেঁচে যায়। আমার ছোট ছেলে নূর মোহাম্মদের বয়স তখন মাত্র দুই সপ্তাহ। একদিন দুপুরবেলা আমরা ঘরের কাজে ব্যস্ত ছিলাম, এমন সময় হঠাৎ দূর থেকে গুলির শব্দ এবং মানুষের চিৎকার শুনতে পেলাম—খান সেনারা আমাদের গ্রামে প্রবেশ করেছে! মুহূর্তের মধ্যে সারা গ্রামে হাহাকার পড়ে গেল। আমাদের বাড়িটি ছিল নদীর একেবারে তীর ঘেঁষে। কালবিলম্ব না করে আমার স্বামী আমাদের সবাইকে নিয়ে দ্রুত ঘর থেকে বের হয়ে নদীর ঘাটের দিকে ছুটলেন। নৌকায় করে খুব দ্রুত নদী পার হয়ে ওপারের নিরাপদ চরে পৌঁছালাম। কিন্তু ওপারের কাশবনে দাঁড়িয়ে হাঁপাতে হাঁপাতে আমার স্বামী হঠাৎ চমকে উঠে আমাকে জিজ্ঞাসা করলেন, “আমাদের ছোট ছেলে নূর কোথায়?”
              </p>
              <p className="oh-story-para">
                স্বামীর এই প্রশ্নে আমার বুকের ভেতর যেন বজ্রপাত হলো! বুক চাপড়ে কেঁদে উঠে আমি বললাম, “নূর তো ঘরের খাটের ওপর ঘুমিয়ে আছে, তাড়াহুড়োয় ওকে আনা হয়নি!” আমি পাগলের মতো আবার নদীতে ঝাঁপ দিতে উদ্যত হলাম। কিন্তু আমার স্বামী আমাকে শক্ত করে ধরে রেখে দৃঢ় কণ্ঠে বললেন, “তোমরা সবাই এই কাশবনের ভেতর লুকিয়ে যাত্রাপুরের দিকে চলে যাও। আমি যেভাবেই হোক নূরকে ফিরিয়ে নিয়ে আসছি।” এই বলে তিনি আর এক মুহূর্তও অপেক্ষা না করে আবার খরস্রোতা নদীতে ঝাঁপ দিলেন।
              </p>
            </div>
            <div className="oh-page-number">{toBanglaDigits(3)}</div>
          </div>
        </div>

        {/* Page 5: Story 1 Conclusion & Story 2 Start (Display Page ৪) */}
        <div className="oh-page-template" data-density="soft">
          <div className="oh-page-inner">
            <div className="oh-story-body oh-story-body--top">
              <p className="oh-story-para">
                আমরা সন্তানদের নিয়ে অশ্রুসজল চোখে যাত্রাপুরের পথ ধরে এগোতে লাগলাম। আমার বড় ছেলে নজরুল, মেজো ছেলে ইলিয়াস ও মেজো মেয়ে খুশি আমার আঁচল আঁকড়ে ধরে কাঁদছিল। বুকের ভেতর কেবলই হাহাকার করছিল দুই সপ্তাহের দুধের শিশু নূরের জন্য। এদিকে আমার স্বামী সাঁতরে যখন আমাদের বাড়ির আঙিনায় পৌঁছালেন, পাকিস্তানি সেনারা তখনও নদীর ওপারে অন্য বাড়িতে আগুন দিচ্ছিল। তিনি নিঃশব্দে ঘরে ঢুকে খাটের ওপর থেকে ঘুমন্ত শিশু নূরকে শক্ত করে বুকে জড়িয়ে নিলেন এবং কালবিলম্ব না করে আবারও নদীর চরের দিকে দৌড়াতে লাগলেন। নদীর মাঝামাঝি পৌঁছাতেই ঘাতক সেনারা তাঁকে দেখতে পেয়ে নদীপাড় থেকে ঝাঁকে ঝাঁকে গুলি ছুড়ল। অলৌকিকভাবে একটি তপ্ত বুলেট তাঁর কানের পাশ ঘেঁষে বেরিয়ে গেল, কিন্তু পরম করুণাময়ের অশেষ কৃপায় নূর বা তাঁর শরীরে কোনো আঘাত লাগেনি। নদী পার হয়ে তিনি ধানক্ষেতের আল ধরে অবিরাম দৌড়ে অবশেষে আমাদের কাছে নিরাপদে ফিরে এলেন। এভাবেই আমার কোলের অবুঝ শিশু নূর মোহাম্মদ একাত্তরের নিশ্চিত মৃত্যুর মুখ থেকে জীবন ফিরে পেয়েছিল।
              </p>
              <div className="oh-story-source">সূত্র : {stories[0]?.source}</div>
            </div>

            <div className="oh-story-transition-divider"></div>

            {/* Story 2 begins seamlessly on the same page */}
            <h3 className="oh-story-title">{stories[1]?.title}</h3>
            <div className="oh-story-meta">
              <div className="oh-meta-box oh-meta-box--narrator">
                <div className="oh-meta-label">বর্ণনাকারী</div>
                <div className="oh-meta-value">{stories[1]?.narrator.name}</div>
                <div className="oh-meta-sub">
                  বয়স: {stories[1]?.narrator.age}, সম্পর্ক: {stories[1]?.narrator.relation}
                </div>
              </div>
              <div className="oh-meta-box oh-meta-box--collector">
                <div className="oh-meta-label">সংগ্রহকারী</div>
                <div className="oh-meta-value">{stories[1]?.collector.name}</div>
                <div className="oh-meta-sub">{stories[1]?.collector.school}</div>
                <div className="oh-meta-sub">
                  {stories[1]?.collector.grade}, রোল: {stories[1]?.collector.roll}
                </div>
                {stories[1]?.collector.address && (
                  <div className="oh-meta-address">{stories[1]?.collector.address}</div>
                )}
              </div>
            </div>
            <div className="oh-page-divider"></div>
            <div className="oh-story-body">
              <p className="oh-story-para">
                ১৯৭১ সালের ২৫ মার্চ কালরাতে দেশজুড়ে পাকিস্তানি হানাদার বাহিনীর বর্বরোচিত অপারেশন সার্চলাইট শুরুর পর থেকেই দেশের প্রত্যন্ত গ্রামাঞ্চলেও তারা হিংস্র থাবা বিস্তার করতে থাকে। তাদের সাথে সক্রিয়ভাবে হাত মেলায় এদেশীয় দেশদ্রোহী শান্তি কমিটি, রাজাকার, আলবদর ও আলশামস বাহিনী। এই নরঘাতকদেরই নির্মম ষড়যন্ত্রের কবলে পতিত হন আমাদের মোল্লারহাট থানার ৫নং গাওলা ইউনিয়নের ৭নং ওয়ার্ডের ৯ জন শ্রদ্ধেয় ও আদর্শ শিক্ষক।
              </p>
              <p className="oh-story-para">
                আমার ঠাকুরমা সুমতী বিশ্বাস স্মৃতিচারণ করতে গিয়ে বলেন, ১৩৭৮ বঙ্গাব্দের ১৯ ভাদ্র, মঙ্গলবার সকালে মাসের সরকারি বেতন তোলার উদ্দেশ্যে নৌকাযোগে পার্শ্ববর্তী ফকিরহাট ডাকঘরের দিকে রওনা হয়েছিলেন এই ৯ জন শিক্ষক।
              </p>
            </div>
            <div className="oh-page-number">{toBanglaDigits(4)}</div>
          </div>
        </div>

        {/* Page 6: Story 2 Conclusion (Display Page ৫) */}
        <div className="oh-page-template" data-density="soft">
          <div className="oh-page-inner">
            <div className="oh-story-body">
              <p className="oh-story-para">
                কিন্তু অত্যন্ত মর্মান্তিক বিষয়, নৌকায় ফকিরহাট ঘাটে পৌঁছামাত্রই তাঁরা হানাদার সেনাদের আকস্মিক টহল দলের মুখোমুখি পড়ে যান। নৌকা ঘিরে ফেলে পাকিস্তানি সেনারা বন্দুক তাক করে ক্রুদ্ধ কণ্ঠে জিজ্ঞাসা করল, “তোমরা কি মুসলমান না মালাউন?”
              </p>
              <p className="oh-story-para">
                আকস্মিক এই বিপদে ৯ জন শিক্ষকের মধ্য থেকে অমলবাবু নামে এক নির্ভীক শিক্ষক উপস্থিত বুদ্ধিমত্তা ও সাহসের পরিচয় দিয়ে সামনে এগিয়ে এসে বলেন, “আমরা সবাই এদেশের সাধারণ মুসলমান নাগরিক।” কিন্তু তাঁদের সাথে থাকা এদেশীয় স্বাধীনতাবিরোধী কুখ্যাত রাজাকাররা পাকিস্তানি সেনাদের মুখের কথা কেড়ে নিয়ে কুটিল হাস্যে বলে উঠল, “ওরা মিথ্যা বলছে, ওদেরকে পবিত্র কোরআনের কয়েকটি আয়াত ও কলেমা পাঠ করতে বলুন।” নিরপরাধ ও সন্ত্রস্ত শিক্ষকরা আকস্মিক আতঙ্কে সঠিকভাবে তা বলতে পারলেন না। এতে মুহূর্তের মধ্যে উন্মত্ত হয়ে উঠল খান সেনারা। নরপশুরা কালবিলম্ব না করে শ্রদ্ধেয় শিক্ষকদের লাইনে দাঁড় করিয়ে নির্মমভাবে ব্রাশফায়ার করে ঝাঁঝরা করে দিল।
              </p>
              <p className="oh-story-para">
                এক মুহূর্তের বর্বরতায় ৯ জন আলোকবর্তিকাসম শিক্ষক মাটিতে লুটিয়ে পড়লেন। রক্তে ভেসে গেল ফকিরহাটের খেয়াঘাট। এই পৈশাচিক হত্যাকাণ্ডের খবর গ্রামে পৌঁছামাত্র গোটা এলাকা যেন এক অভিভাবকহীন, মেরুদণ্ডহীন মানবদেহে পরিণত হলো। শিক্ষা ও সংস্কৃতির আলোকোজ্জ্বল একটি জনপদ এক নিমিষেই অন্ধকারে নিমজ্জিত হয়ে গেল। এলাকার বয়োবৃদ্ধ মুরুব্বিরা শোকে পাগলপ্রায় হয়ে আর্তনাদ করে কাঁদতেন—অমলবাবু কই? আমাদের কেশববাবু কই? অবিনয়বাবু কোথায় গেলেন? জগবন্ধুবাবু কি আর ফিরে আসবেন না?—এই বলে বলে তাঁরা বুক চাপড়ে মাটিতে মূর্ছা যেতেন। গোটা গাওলা ইউনিয়নের ঘরে ঘরে নেমে এসেছিল গভীর শোক আর কান্নার রোল।
              </p>
              <p className="oh-story-para">
                শহীদ হওয়া এই ৯ জন শিক্ষক কেবল পাঠদানই করতেন না, তাঁরা ছিলেন এলাকার সমাজ গঠন, নীতিশিক্ষা ও প্রগতির প্রাণপুরুষ। তাঁদের মধ্যে হরপ্রসাদ চক্রবর্তী, অমল কুমার বিশ্বাস, অবিনয় চন্দ্র মজুমদার, কেশব লাল মজুমদার, জগবন্ধু মুখার্জী সহ ৯ জন নিবেদিতপ্রাণ শিক্ষক আত্মাহুতি দিয়েছিলেন। একই দিনে একই ঘাটে একটি শিক্ষাপ্রতিষ্ঠানের প্রায় সকল শিক্ষকের এই ঐতিহাসিক আত্মত্যাগ বাংলাদেশের মুক্তিযুদ্ধের ইতিহাসে এক বিরল ও অবিস্মরণীয় ট্র্যাজেডি।
              </p>
              <p className="oh-story-para">
                এ কারণেই আমার ঠাকুরমা সুমতী বিশ্বাস আজীবন এই ৯ জন শিক্ষাগুরুর আত্মদানের দিনটিকে গভীর শ্রদ্ধায় ‘নবরত্ন সংহার দিবস’ বলে আখ্যায়িত করেছেন। এত বড় শোক ও ধ্বংসযজ্ঞের পরেও আমাদের পরিবার কিংবা এলাকার মানুষ দেশ ছেড়ে ভারতে পালিয়ে যায়নি। বীর মুক্তিযোদ্ধাদের গেরিলা প্রতিরোধ আর ভারতীয় মিত্রবাহিনীর যৌথ অভিযানে অবশেষে আমাদের মাতৃভূমি শত্রুমুক্ত হয়। ঠাকুরমা তাঁর ভেজা চোখে নতুন প্রজন্মকে লক্ষ্য করে আজও আশীর্বাদ করে বলেন, “আমাদের এই স্বাধীন বাংলাদেশ শহীদ শিক্ষকদের বুকের তাজা রক্তে কেনা। দেশের প্রতিটি শিক্ষার্থী যেন জ্ঞানের আলোয় এই দেশকে সুন্দরভাবে গড়ে তোলে এবং অন্যায়ের বিরুদ্ধে সবসময় মাথা উঁচু করে দাঁড়ায়।”
              </p>
              <div className="oh-story-source">সূত্র : {stories[1]?.source}</div>
            </div>
            <div className="oh-page-number">{toBanglaDigits(5)}</div>
          </div>
        </div>

        {/* Page 7: Story 3, Part 1 (Display Page ৬) */}
        <div className="oh-page-template" data-density="soft">
          <div className="oh-page-inner">
            <h3 className="oh-story-title">{stories[2]?.title}</h3>
            <div className="oh-story-meta">
              <div className="oh-meta-box oh-meta-box--narrator">
                <div className="oh-meta-label">বর্ণনাকারী</div>
                <div className="oh-meta-value">{stories[2]?.narrator.name}</div>
                <div className="oh-meta-sub">সম্পর্ক: {stories[2]?.narrator.relation}</div>
              </div>
              <div className="oh-meta-box oh-meta-box--collector">
                <div className="oh-meta-label">সংগ্রহকারী</div>
                <div className="oh-meta-value">{stories[2]?.collector.name}</div>
                <div className="oh-meta-sub">{stories[2]?.collector.school}</div>
                <div className="oh-meta-sub">
                  {stories[2]?.collector.grade}, রোল: {stories[2]?.collector.roll}
                </div>
                {stories[2]?.collector.address && (
                  <div className="oh-meta-address">{stories[2]?.collector.address}</div>
                )}
              </div>
            </div>
            <div className="oh-page-divider"></div>
            <div className="oh-story-body">
              <p className="oh-story-para">{stories[2]?.paragraphs[0]}</p>
              <p className="oh-story-para">{stories[2]?.paragraphs[1]}</p>
              <p className="oh-story-para">{stories[2]?.paragraphs[2]}</p>
              <p className="oh-story-para">{stories[2]?.paragraphs[3]}</p>
              <p className="oh-story-para">
                আমি ছিলাম ছোট বালিকা। তাই এই ভয়াবহতা আমার অনুভব হচ্ছিল না। রাজাকার প্রধান ছিল আমার আত্মীয়, তাই আমাকে বলল, “তুই এখানে কী করছিস? বাড়ি যা।” তখন আমি তাদের উঠানে একটি পাকা কলার কাঁদি দেখতে পেলাম।
              </p>
            </div>
            <div className="oh-page-number">{toBanglaDigits(6)}</div>
          </div>
        </div>

        {/* Page 8: Story 3 Conclusion (Display Page ৭) */}
        <div className="oh-page-template" data-density="soft">
          <div className="oh-page-inner">
            <div className="oh-story-body">
              <p className="oh-story-para">
                আমি তাকে নির্ভয়ে বললাম, “এই কলা না নিয়ে আমি বাড়ি যাব না।” রাজাকার আমাকে এই কলার কাঁদিটি দিয়ে দিল। বাড়ি গিয়ে বাবা-মাকে সমস্ত ঘটনা বললাম, বললাম ভাই খালের পানিতে মারা গেছে। তখন বাবা-মা খুব করে কাঁদলেন। যেহেতু আমি এসবের গুরুত্ব বুঝতাম না, তাই আমার এতটা শোক অনুভূত হলো না। পাকা কলা ভালো করে তৃপ্তি সহকারে খেয়ে একটা কলা বাবার মুখের কাছে ধরে বললাম, “বাবা, না কেঁদে কলা খান।” বাবা এমনিতেই পুত্রশোকে কাতর ও বাকরুদ্ধ, তারপর আমার এই অবুঝ কথা শুনে রাগে ও দুঃখে আমাকে লাঠি দিয়ে মারলেন। আমি কেঁদে কেঁদে ঘরের কোণে মন খারাপ করে বসে রইলাম। এর কিছুক্ষণ পরই পেছনের ভাঙা জানালা দিয়ে আমার নাম ধরে কে যেন ফিসফিস করে ডাকল। গিয়ে দেখি আমার সেই ভাই খালের কচুরিপানার ভেতর লুকিয়ে বেঁচে ফিরে এসেছে, উলঙ্গ অবস্থায় দাঁড়িয়ে কাঁপছে! সাথে সাথে বাবা-মাকে জানালাম। বাবা-মা আনন্দে বুকভরা কান্নায় ভাইকে জড়িয়ে ধরলেন। এরপর দেশ স্বাধীন হয়েছে নানা আত্মত্যাগের মধ্য দিয়ে। আজ আমরা স্বাধীন বাংলাদেশে বাস করছি।
              </p>
              <div className="oh-story-source">সূত্র : {stories[2]?.source}</div>
            </div>
            <div className="oh-page-number">{toBanglaDigits(7)}</div>
          </div>
        </div>

        {/* Page 9: Back Cover (Hard) */}
        <div className="oh-page-template oh-page--back-cover" data-density="hard">
          <div className="oh-cover-inner">
            <div className="oh-cover-border-outer">
              <div className="oh-cover-border-inner">
                <div className="oh-back-title">ইতিহাসের সত্য কথন</div>
                <div className="oh-back-desc">
                  <p>মুক্তিযুদ্ধ জাদুঘর ২০০৪ সাল থেকে এই “মৌখিক ইতিহাস সংগ্রহ” কার্যক্রম পরিচালনা করে আসছে। দেশের প্রত্যন্ত অঞ্চলের হাজার হাজার তরুন শিক্ষার্থীদের সহায়তায় এ পর্যন্ত হাজার হাজার সাধারণ মানুষের বীরত্ব ও আত্মত্যাগের প্রত্যক্ষ বিবরণ সংরক্ষিত হয়েছে জাদুঘর আর্কাইভে।</p>
                  <p>ইতিহাস বিকৃতির বিরুদ্ধে সাধারণ মানুষের এই বয়ান আমাদের সবচেয়ে শক্তিশালী হাতিয়ার।</p>
                </div>
                <div className="oh-back-divider"></div>
                <div className="oh-back-branding">
                  <span className="oh-branding-text">মুক্তিযুদ্ধ জাদুঘর</span>
                  <span className="oh-branding-web">www.liberationwarmuseum.org</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default function OralHistory() {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const bookReaderRef = useRef(null);

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
    }
  };

  const closeBook = () => {
    setSelectedDistrict(null);
    setCurrentPage(0);
  };

  const districtInfo = selectedDistrict ? oralHistoryData[selectedDistrict] : null;
  const stories = districtInfo ? districtInfo.stories : [];

  const handleFlip = (pageIndex) => {
    setCurrentPage(pageIndex);
    playPageTurnSound();
  };

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
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#cdb66c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                        </svg>
                      ) : (
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
            <div
              className="oh-modal-overlay"
              onClick={(e) => e.target === e.currentTarget && closeBook()}
            >
              <div className="oh-modal-content">
                <div className="oh-book-controls-top">
                  <button className="oh-btn-back" onClick={closeBook}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                    <span>জেলা তালিকায় ফিরুন</span>
                  </button>
                  <div className="oh-book-title-running">
                    মৌখিক ইতিহাস : {districtInfo.districtName} জেলা
                  </div>
                  <div className="oh-book-header-right">
                    {currentPage > 2 && (
                      <button
                        className="oh-btn-toc"
                        onClick={() => bookReaderRef.current?.turnToPage(2)}
                      >
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
                    onClick={() => bookReaderRef.current?.flipPrev()}
                    disabled={currentPage === 0}
                    aria-label="Previous Page"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>

                  {/* 3D Realistic Physics PageFlip Book */}
                  <div className="oh-page-flip-container">
                    <BookReader
                      ref={bookReaderRef}
                      districtInfo={districtInfo}
                      stories={stories}
                      onFlip={handleFlip}
                    />
                  </div>

                  {/* Book Navigation - Next */}
                  <button
                    className="oh-book-nav-btn oh-book-nav-btn--next"
                    onClick={() => bookReaderRef.current?.flipNext()}
                    disabled={currentPage >= 9}
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
