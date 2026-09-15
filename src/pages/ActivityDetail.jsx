import { useEffect, useState, useCallback, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { activitiesData } from '../data/activitiesData';

const PUBLIC_PROGRAM_PHOTOS = [
    { src: '/assets/regular-public-programs/242120.jpg', caption: 'Program Photo 01' },
    { src: '/assets/regular-public-programs/257482.jpg', caption: 'Program Photo 02' },
    { src: '/assets/regular-public-programs/278722.jpg', caption: 'Program Photo 03' },
    { src: '/assets/regular-public-programs/301166.jpg', caption: 'Program Photo 04' },
    { src: '/assets/regular-public-programs/311432.jpg', caption: 'Program Photo 05' },
    { src: '/assets/regular-public-programs/318612.jpg', caption: 'Program Photo 06' },
    { src: '/assets/regular-public-programs/322120.jpg', caption: 'Program Photo 07' },
    { src: '/assets/regular-public-programs/381766.jpg', caption: 'Program Photo 08' },
    { src: '/assets/regular-public-programs/421145.jpg', caption: 'Program Photo 09' },
    { src: '/assets/regular-public-programs/517084.jpg', caption: 'Program Photo 10' },
    { src: '/assets/regular-public-programs/528831.jpg', caption: 'Program Photo 11' },
    { src: '/assets/regular-public-programs/535251.jpg', caption: 'Program Photo 12' },
    { src: '/assets/regular-public-programs/628715.jpg', caption: 'Program Photo 13' },
    { src: '/assets/regular-public-programs/673092.jpg', caption: 'Program Photo 14' },
    { src: '/assets/regular-public-programs/695943.jpg', caption: 'Program Photo 15' },
    { src: '/assets/regular-public-programs/700489.jpg', caption: 'Program Photo 16' },
    { src: '/assets/regular-public-programs/717429.jpg', caption: 'Program Photo 17' },
    { src: '/assets/regular-public-programs/726026.jpg', caption: 'Program Photo 18' },
    { src: '/assets/regular-public-programs/741108.jpg', caption: 'Program Photo 19' },
    { src: '/assets/regular-public-programs/753867.jpg', caption: 'Program Photo 20' },
    { src: '/assets/regular-public-programs/797527.jpg', caption: 'Program Photo 21' },
    { src: '/assets/regular-public-programs/824747.jpg', caption: 'Program Photo 22' },
    { src: '/assets/regular-public-programs/870626.jpg', caption: 'Program Photo 23' },
    { src: '/assets/regular-public-programs/910600.jpg', caption: 'Program Photo 24' }
];

const REACHOUT_PROGRAM_PHOTOS = [
    { src: '/assets/reachout-program/228041.jpg', caption: 'Reachout Photo 01' },
    { src: '/assets/reachout-program/407447.jpg', caption: 'Reachout Photo 02' },
    { src: '/assets/reachout-program/557346.jpg', caption: 'Reachout Photo 03' },
    { src: '/assets/reachout-program/935683.jpg', caption: 'Reachout Photo 04' },
    { src: '/assets/reachout-program/964108.jpg', caption: 'Reachout Photo 05' },
    { src: '/assets/reachout-program/990624.jpg', caption: 'Reachout Photo 06' }
];

const OUTREACH_PROGRAM_PHOTOS = [
    { src: '/assets/about/Projects and Programs/Outreach Program/142036.jpg', caption: 'Outreach Photo 01' },
    { src: '/assets/about/Projects and Programs/Outreach Program/210002.jpg', caption: 'Outreach Photo 02' },
    { src: '/assets/about/Projects and Programs/Outreach Program/377644.jpg', caption: 'Outreach Photo 03' },
    { src: '/assets/about/Projects and Programs/Outreach Program/486784.jpg', caption: 'Outreach Photo 04' },
    { src: '/assets/about/Projects and Programs/Outreach Program/486869.jpg', caption: 'Outreach Photo 05' },
    { src: '/assets/about/Projects and Programs/Outreach Program/666686.jpg', caption: 'Outreach Photo 06' },
    { src: '/assets/about/Projects and Programs/Outreach Program/793431.jpg', caption: 'Outreach Photo 07' },
    { src: '/assets/about/Projects and Programs/Outreach Program/835399.jpg', caption: 'Outreach Photo 08' }
];

const DIGITAL_THREAD_PHOTOS = [
    { src: '/assets/exhibition/179875.jpg', caption: 'Exhibition Photo 01' },
    { src: '/assets/exhibition/245168.jpg', caption: 'Exhibition Photo 02' },
    { src: '/assets/exhibition/328361.jpg', caption: 'Exhibition Photo 03' },
    { src: '/assets/exhibition/393005.jpg', caption: 'Exhibition Photo 04' },
    { src: '/assets/exhibition/407925.jpg', caption: 'Exhibition Photo 05' },
    { src: '/assets/exhibition/578761.jpg', caption: 'Exhibition Photo 06' },
    { src: '/assets/exhibition/704050.jpg', caption: 'Exhibition Photo 07' },
    { src: '/assets/exhibition/834007.jpg', caption: 'Exhibition Photo 08' },
    { src: '/assets/exhibition/867179.jpg', caption: 'Exhibition Photo 09' },
    { src: '/assets/exhibition/881536.jpg', caption: 'Exhibition Photo 10' },
    { src: '/assets/exhibition/912752.jpg', caption: 'Exhibition Photo 11' },
    { src: '/assets/exhibition/936410.jpg', caption: 'Exhibition Photo 12' }
];

const OTHER_PUBLICATIONS_PHOTOS = [
    { src: '/assets/publications/196455.jpg', caption: 'LWM Publication Cover 01' },
    { src: '/assets/publications/240165.jpg', caption: 'LWM Publication Cover 02' },
    { src: '/assets/publications/292500.jpg', caption: 'LWM Publication Cover 03' },
    { src: '/assets/publications/312001.jpg', caption: 'LWM Publication Cover 04' },
    { src: '/assets/publications/412432.jpg', caption: 'LWM Publication Cover 05' },
    { src: '/assets/publications/443888.jpg', caption: 'LWM Publication Cover 06' },
    { src: '/assets/publications/457330.jpg', caption: 'LWM Publication Cover 07' },
    { src: '/assets/publications/479722.jpg', caption: 'LWM Publication Cover 08' },
    { src: '/assets/publications/519050.jpg', caption: 'LWM Publication Cover 09' },
    { src: '/assets/publications/628544.jpg', caption: 'LWM Publication Cover 10' },
    { src: '/assets/publications/642883.jpg', caption: 'LWM Publication Cover 11' },
    { src: '/assets/publications/655181.jpg', caption: 'LWM Publication Cover 12' },
    { src: '/assets/publications/732387.jpg', caption: 'LWM Publication Cover 13' },
    { src: '/assets/publications/744581.jpg', caption: 'LWM Publication Cover 14' },
    { src: '/assets/publications/766465.jpg', caption: 'LWM Publication Cover 15' },
    { src: '/assets/publications/769385.jpg', caption: 'LWM Publication Cover 16' },
    { src: '/assets/publications/805273.jpg', caption: 'LWM Publication Cover 17' },
    { src: '/assets/publications/827021.jpg', caption: 'LWM Publication Cover 18' },
    { src: '/assets/publications/879537.jpg', caption: 'LWM Publication Cover 19' },
    { src: '/assets/publications/881084.jpg', caption: 'LWM Publication Cover 20' },
    { src: '/assets/publications/909206.jpg', caption: 'LWM Publication Cover 21' },
    { src: '/assets/publications/997372.jpg', caption: 'LWM Publication Cover 22' },
    { src: '/assets/publications/999196.jpg', caption: 'LWM Publication Cover 23' }
];

const MOCK_NEWSLETTERS = [
    {
        id: 'news-01',
        title: 'Liberation War Museum Newsletter',
        date: 'June 2026',
        issue: 'Issue No. 112',
        pdfUrl: '/assets/sultanas-dream/818062.pdf',
        coverImage: '/assets/Virtual Tour youtube image.png'
    },
    {
        id: 'news-02',
        title: 'Liberation War Museum Newsletter',
        date: 'May 2026',
        issue: 'Issue No. 111',
        pdfUrl: '/assets/sultanas-dream/818062.pdf',
        coverImage: '/assets/history image.png'
    },
    {
        id: 'news-03',
        title: 'Liberation War Museum Newsletter',
        date: 'April 2026',
        issue: 'Issue No. 110',
        pdfUrl: '/assets/sultanas-dream/818062.pdf',
        coverImage: '/assets/homepage1image.png'
    },
    {
        id: 'news-04',
        title: 'Liberation War Museum Newsletter',
        date: 'March 2026',
        issue: 'Issue No. 109',
        pdfUrl: '/assets/sultanas-dream/818062.pdf',
        coverImage: '/assets/Virtual Tour hero image.jpg'
    }
];

const PRESS_RELEASE_PHOTOS = [
    { src: '/assets/press-release/114507.jpg', caption: 'News Clipping 01' },
    { src: '/assets/press-release/145188.jpg', caption: 'News Clipping 02' },
    { src: '/assets/press-release/149067.jpg', caption: 'News Clipping 03' },
    { src: '/assets/press-release/164687.jpg', caption: 'News Clipping 04' },
    { src: '/assets/press-release/166417.jpg', caption: 'News Clipping 05' },
    { src: '/assets/press-release/167045.jpg', caption: 'News Clipping 06' },
    { src: '/assets/press-release/167732.jpg', caption: 'News Clipping 07' },
    { src: '/assets/press-release/174707.jpg', caption: 'News Clipping 08' },
    { src: '/assets/press-release/227788.jpg', caption: 'News Clipping 09' },
    { src: '/assets/press-release/232434.jpg', caption: 'News Clipping 10' },
    { src: '/assets/press-release/259576.jpg', caption: 'News Clipping 11' },
    { src: '/assets/press-release/305087.jpg', caption: 'News Clipping 12' },
    { src: '/assets/press-release/315566.jpg', caption: 'News Clipping 13' },
    { src: '/assets/press-release/317640.jpg', caption: 'News Clipping 14' },
    { src: '/assets/press-release/328253.jpg', caption: 'News Clipping 15' },
    { src: '/assets/press-release/343995.jpg', caption: 'News Clipping 16' },
    { src: '/assets/press-release/349011.jpg', caption: 'News Clipping 17' },
    { src: '/assets/press-release/383280.jpg', caption: 'News Clipping 18' },
    { src: '/assets/press-release/388605.jpg', caption: 'News Clipping 19' },
    { src: '/assets/press-release/429516.jpg', caption: 'News Clipping 20' },
    { src: '/assets/press-release/432678.jpg', caption: 'News Clipping 21' },
    { src: '/assets/press-release/461512.jpg', caption: 'News Clipping 22' },
    { src: '/assets/press-release/472531.jpg', caption: 'News Clipping 23' },
    { src: '/assets/press-release/486905.jpg', caption: 'News Clipping 24' },
    { src: '/assets/press-release/504129.jpg', caption: 'News Clipping 25' },
    { src: '/assets/press-release/509185.jpg', caption: 'News Clipping 26' },
    { src: '/assets/press-release/514558.jpg', caption: 'News Clipping 27' },
    { src: '/assets/press-release/520770.jpg', caption: 'News Clipping 28' },
    { src: '/assets/press-release/542625.jpg', caption: 'News Clipping 29' },
    { src: '/assets/press-release/562704.jpg', caption: 'News Clipping 30' },
    { src: '/assets/press-release/572020.jpg', caption: 'News Clipping 31' },
    { src: '/assets/press-release/573024.jpg', caption: 'News Clipping 32' },
    { src: '/assets/press-release/583866.jpg', caption: 'News Clipping 33' },
    { src: '/assets/press-release/584037.jpg', caption: 'News Clipping 34' },
    { src: '/assets/press-release/585652.jpg', caption: 'News Clipping 35' },
    { src: '/assets/press-release/607085.jpg', caption: 'News Clipping 36' },
    { src: '/assets/press-release/636472.jpg', caption: 'News Clipping 37' },
    { src: '/assets/press-release/685197.jpg', caption: 'News Clipping 38' },
    { src: '/assets/press-release/728564.jpg', caption: 'News Clipping 39' },
    { src: '/assets/press-release/737053.jpg', caption: 'News Clipping 40' },
    { src: '/assets/press-release/764720.jpg', caption: 'News Clipping 41' },
    { src: '/assets/press-release/772725.jpg', caption: 'News Clipping 42' },
    { src: '/assets/press-release/777468.jpg', caption: 'News Clipping 43' },
    { src: '/assets/press-release/802058.jpg', caption: 'News Clipping 44' },
    { src: '/assets/press-release/802249.jpg', caption: 'News Clipping 45' },
    { src: '/assets/press-release/817866.jpg', caption: 'News Clipping 46' },
    { src: '/assets/press-release/827161.jpg', caption: 'News Clipping 47' },
    { src: '/assets/press-release/850116.jpg', caption: 'News Clipping 48' },
    { src: '/assets/press-release/866602.jpg', caption: 'News Clipping 49' },
    { src: '/assets/press-release/872507.jpg', caption: 'News Clipping 50' },
    { src: '/assets/press-release/941112.jpg', caption: 'News Clipping 51' },
    { src: '/assets/press-release/962737.jpg', caption: 'News Clipping 52' },
    { src: '/assets/press-release/987828.jpg', caption: 'News Clipping 53' }
];

const MOCK_CONFERENCE_PDFS = [
    {
        id: 'pdf-01',
        title: 'transitional-justice-1971.pdf',
        displayTitle: 'Transitional Justice & the Legacy of 1971 in Bangladesh',
        author: 'Dr. Mofidul Hoque',
        date: 'March 2019',
        size: '1.4 MB',
        pages: 3,
        content: [
            '<h3>Page 1: Abstract & Introduction</h3><p>The quest for justice for the mass atrocities committed during the 1971 Liberation War remains a central pillar of the national identity and legal framework of Bangladesh. This paper explores the establishment of the International Crimes Tribunal (ICT) in Dhaka and its impact on international humanitarian law.</p><p>By bringing war criminals and perpetrators of genocide to trial, the tribunal has set new benchmarks for transitional justice systems operating inside developing nations without relying exclusively on international bodies.</p>',
            '<h3>Page 2: Historical Context of the Genocide</h3><p>During the nine-month conflict in 1971, the Pakistan military junta and local collaborator groups targeted intellectuals, minorities, and political activists. The scale of the violence led to millions of refugees fleeing to India, representing one of the largest humanitarian crises of the late 20th century.</p><p>Understanding this context is critical to evaluating the modern legal frameworks developed in the country to provide recognition, restitution, and justice to survivors.</p>',
            '<h3>Page 3: Transitional Justice Frameworks</h3><p>Transitional justice aims to provide recognition to victims and establish accountability. The ICT Bangladesh represents a domestic initiative to prosecute international crimes, demonstrating that local courts can effectively address historical atrocities under global legal standards.</p><p>In conclusion, the document recommends further international support and legal research into the unique tribunals established in Dhaka.</p>'
        ]
    },
    {
        id: 'pdf-02',
        title: 'r2p-framework-south-asia.pdf',
        displayTitle: 'Responsibility to Protect (R2P) Framework in South Asia',
        author: 'Prof. Yasmin Saikia',
        date: 'October 2020',
        size: '2.1 MB',
        pages: 2,
        content: [
            '<h3>Page 1: Introduction to R2P</h3><p>The Responsibility to Protect (R2P) is a global political commitment endorsed by all UN member states to prevent genocide, war crimes, ethnic cleansing, and crimes against humanity. This paper analyzes its theoretical and practical implementation in the South Asian context.</p><p>We examine the structural barriers, sovereignty concerns, and regional conflicts that complicate multilateral security actions in the subcontinent.</p>',
            '<h3>Page 2: Lessons from 1971 and Recommendations</h3><p>The failure of the international community to intervene decisively during the 1971 atrocities served as a historical catalyst for the modern formulation of R2P. The paper argues that historical memory must inform present regional security policies.</p><p>We conclude by calling for regional dialogue forums and joint academic research on prevention models.</p>'
        ]
    },
    {
        id: 'pdf-03',
        title: 'genocide-prevention-report.pdf',
        displayTitle: 'Genocide Prevention & Early Warning Systems',
        author: 'Dr. Gregory H. Stanton',
        date: 'December 2021',
        size: '980 KB',
        pages: 2,
        content: [
            '<h3>Page 1: The Ten Stages of Genocide</h3><p>Genocide is a process that develops in ten stages that are predictable but not inexorable. At each stage, preventive measures can be taken to halt its progression. This report focuses on early indicators in conflict-prone areas.</p><p>The stages are classification, symbolization, discrimination, dehumanization, organization, polarization, preparation, persecution, extermination, and denial.</p>',
            '<h3>Page 2: Structural Prevention and Civic Museums</h3><p>Structural prevention involves building democratic institutions, promoting pluralism, and protecting human rights. The paper outlines the roles of civil society museums like the LWM in educating the public against hate speech and division.</p><p>Museums serve as memory vaults and educational anchors, ensuring "Never Again" remains a practical lesson for future generations.</p>'
        ]
    }
];

export default function ActivityDetail() {
    const { category, item } = useParams();
    const pageKey = `${category}/${item}`;
    const data = activitiesData[pageKey];

    const isPublicPrograms = pageKey === 'programs/regular-public-programs';
    const isReachoutPrograms = pageKey === 'programs/reachout-programs';
    const isOutreachPrograms = pageKey === 'programs/outreach-programs';
    const isInternationalConferences = pageKey === 'programs/international-conferences';
    const isDigitalThread = pageKey === 'exhibitions/digital-thread';
    const isSultanasDream = pageKey === 'publications/sultanas-dream';
    const isOtherPublications = pageKey === 'publications/other-publications';
    const isNewsletters = pageKey === 'media/newsletters';
    const isPressReleases = pageKey === 'media/press-releases';
    const isAudioVisualArchive = pageKey === 'media/advertisements';
    const isCsgjAbout = pageKey === 'csgj/about';
    const isCsgjSeminars = pageKey === 'csgj/seminars';
    const isCsgjResearch = pageKey === 'csgj/research';
    const isCsgjCertificateCourse = pageKey === 'csgj/certificate-course';
    const isCsgjExchangeProgram = pageKey === 'csgj/exchange-program';
    const isCsgjVolunteer = pageKey === 'csgj/volunteer';
    const isCsgjWinterSchool = pageKey === 'csgj/winter-school';

    const csgjSeminarsPhotos = isCsgjSeminars && data && data.seminarsList 
        ? data.seminarsList.flatMap((sem) => 
            sem.images.map((imgSrc) => ({ src: imgSrc, caption: sem.title }))
          )
        : [];

    const csgjResearchPhotos = isCsgjResearch && data 
        ? [
            ...(data.publications ? data.publications.map((pub) => ({ src: pub.image, caption: pub.title })) : []),
            ...(data.researchProjects && data.researchProjects[0] && data.researchProjects[0].proposalImages 
                ? data.researchProjects[0].proposalImages.map((imgSrc) => ({ src: imgSrc, caption: 'CSGJ Fellowship Selection & Process' })) 
                : [])
          ]
        : [];

    const csgjCertificateCoursePhotos = isCsgjCertificateCourse && data && data.images
        ? data.images.map((imgSrc, idx) => ({ src: imgSrc, caption: `CSGJ Certificate Course — Photo ${idx + 1}` }))
        : [];

    const csgjExchangeProgramPhotos = isCsgjExchangeProgram && data && data.images
        ? data.images.map((imgSrc, idx) => ({ src: imgSrc, caption: `CSGJ Volunteer Exchange Program — Photo ${idx + 1}` }))
        : [];

    const csgjWinterSchoolPhotos = isCsgjWinterSchool && data && data.images
        ? data.images.map((imgSrc, idx) => ({ src: imgSrc, caption: `CSGJ Winter School — Photo ${idx + 1}` }))
        : [];
    
    const activePhotos = isPublicPrograms 
        ? PUBLIC_PROGRAM_PHOTOS 
        : (isReachoutPrograms 
            ? REACHOUT_PROGRAM_PHOTOS 
            : (isOutreachPrograms 
                ? OUTREACH_PROGRAM_PHOTOS 
                : (isDigitalThread 
                    ? DIGITAL_THREAD_PHOTOS 
                    : (isOtherPublications 
                        ? OTHER_PUBLICATIONS_PHOTOS 
                        : (isPressReleases 
                            ? PRESS_RELEASE_PHOTOS 
                            : (isCsgjAbout 
                                ? (data && data.gallery ? data.gallery : []) 
                                : (isCsgjSeminars 
                                    ? csgjSeminarsPhotos 
                                    : (isCsgjResearch 
                                        ? csgjResearchPhotos 
                                        : (isCsgjCertificateCourse 
                                            ? csgjCertificateCoursePhotos 
                                            : (isCsgjExchangeProgram 
                                                ? csgjExchangeProgramPhotos 
                                                : (isCsgjWinterSchool 
                                                    ? csgjWinterSchoolPhotos 
                                                    : [])))))))))));

    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [touchStartX, setTouchStartX] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);

    // PDF viewer state
    const [activePdf, setActivePdf] = useState(null);
    const [activePage, setActivePage] = useState(0);
    const [pdfZoom, setPdfZoom] = useState(1);

    const stageRef = useRef(null);
    const filmstripRef = useRef(null);
    const activeThumbRef = useRef(null);

    // Drag refs for panning
    const isDragging = useRef(false);
    const startX = useRef(0);
    const startY = useRef(0);
    const scrollLeftStart = useRef(0);
    const scrollTopStart = useRef(0);

    // Memorial Award page states and data transformation
    const isMemorialAward = pageKey === 'awards/memorial-award';
    const [activeAwardTab, setActiveAwardTab] = useState('intro'); // 'intro', 'jury', 'awardees'
    const [activeSultanaTab, setActiveSultanaTab] = useState('english'); // 'english', 'bangla'
    const [awardSearchQuery, setAwardSearchQuery] = useState('');
    const [awardCategoryFilter, setAwardCategoryFilter] = useState('all'); // 'all', 'print', 'electronic'

    const flattenedWinners = [];
    if (isMemorialAward && data && data.winners) {
        data.winners.forEach(w => {
            if (w.print) {
                flattenedWinners.push({
                    year: w.year,
                    englishYear: w.year.split('').map(c => ({'০':'0','১':'1','২':'2','৩':'3','৪':'4','৫':'5','৬':'6','৭':'7','৮':'8','৯':'9'}[c] || c)).join(''),
                    category: 'প্রিন্ট ও অনলাইন মিডিয়া',
                    categoryKey: 'print',
                    recipient: w.print.recipient,
                    media: w.print.media,
                    topic: w.print.topic
                });
            }
            if (w.electronic) {
                flattenedWinners.push({
                    year: w.year,
                    englishYear: w.year.split('').map(c => ({'০':'0','১':'1','২':'2','৩':'3','৪':'4','৫':'5','৬':'6','৭':'7','৮':'8','৯':'9'}[c] || c)).join(''),
                    category: 'ইলেকট্রনিক মিডিয়া (টেলিভিশন/রেডিও)',
                    categoryKey: 'electronic',
                    recipient: w.electronic.recipient,
                    media: w.electronic.media,
                    topic: w.electronic.topic
                });
            }
        });
    }

    const filteredWinners = flattenedWinners.filter(item => {
        if (awardCategoryFilter !== 'all' && item.categoryKey !== awardCategoryFilter) {
            return false;
        }
        const query = awardSearchQuery.toLowerCase().trim();
        if (!query) return true;
        return item.year.includes(query) ||
               item.englishYear.includes(query) ||
               item.recipient.toLowerCase().includes(query) ||
               item.media.toLowerCase().includes(query) ||
               item.topic.toLowerCase().includes(query) ||
               item.category.toLowerCase().includes(query);
    });

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setZoomLevel(1);
        isDragging.current = false;
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = useCallback(() => {
        setLightboxIndex(null);
        setZoomLevel(1);
        isDragging.current = false;
        document.body.style.overflow = '';
    }, []);

    const goNext = useCallback(() => {
        if (isAnimating || activePhotos.length === 0) return;
        setIsAnimating(true);
        setLightboxIndex((i) => (i + 1) % activePhotos.length);
        setZoomLevel(1);
        isDragging.current = false;
        setTimeout(() => setIsAnimating(false), 250);
    }, [isAnimating, activePhotos]);

    const goPrev = useCallback(() => {
        if (isAnimating || activePhotos.length === 0) return;
        setIsAnimating(true);
        setLightboxIndex((i) => (i - 1 + activePhotos.length) % activePhotos.length);
        setZoomLevel(1);
        isDragging.current = false;
        setTimeout(() => setIsAnimating(false), 250);
    }, [isAnimating, activePhotos]);

    const handleZoomIn = (e) => {
        e.stopPropagation();
        setZoomLevel(prev => Math.min(prev + 0.25, 3));
    };

    const handleZoomOut = (e) => {
        e.stopPropagation();
        setZoomLevel(prev => Math.max(prev - 0.25, 1));
    };

    const handleMouseDown = (e) => {
        if (zoomLevel <= 1) return;
        if (e.button !== 0) return; // Left click only
        isDragging.current = true;
        startX.current = e.clientX;
        startY.current = e.clientY;
        scrollLeftStart.current = stageRef.current.scrollLeft;
        scrollTopStart.current = stageRef.current.scrollTop;
        stageRef.current.classList.add('grabbing');
        e.preventDefault();
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        const dx = e.clientX - startX.current;
        const dy = e.clientY - startY.current;
        stageRef.current.scrollLeft = scrollLeftStart.current - dx;
        stageRef.current.scrollTop = scrollTopStart.current - dy;
    };

    const handleMouseUp = () => {
        if (!isDragging.current) return;
        isDragging.current = false;
        if (stageRef.current) {
            stageRef.current.classList.remove('grabbing');
        }
    };

    // Scroll active thumbnail into view
    useEffect(() => {
        if (lightboxIndex !== null && activeThumbRef.current && filmstripRef.current) {
            activeThumbRef.current.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest',
            });
        }
    }, [lightboxIndex]);

    // Scroll wheel zoom effect
    useEffect(() => {
        const stage = stageRef.current;
        if (!stage) return;

        const handleWheel = (e) => {
            e.preventDefault();
            const zoomSpeed = 0.08;
            setZoomLevel((prev) => {
                const nextZoom = prev - e.deltaY * zoomSpeed * 0.01;
                return Math.min(Math.max(nextZoom, 1), 3);
            });
        };

        stage.addEventListener('wheel', handleWheel, { passive: false });
        return () => stage.removeEventListener('wheel', handleWheel);
    }, [lightboxIndex]);

    useEffect(() => {
        const handleKey = (e) => {
            if (lightboxIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [lightboxIndex, closeLightbox, goNext, goPrev]);

    const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);

    const handleTouchEnd = (e) => {
        if (touchStartX === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 50) dx < 0 ? goNext() : goPrev();
        setTouchStartX(null);
    };

    // PDF Handlers
    const openPdfViewer = (pdf) => {
        setActivePdf(pdf);
        setActivePage(0);
        setPdfZoom(1);
        document.body.style.overflow = 'hidden';
    };

    const closePdfViewer = () => {
        setActivePdf(null);
        document.body.style.overflow = '';
    };

    const handlePdfZoomIn = () => setPdfZoom(prev => Math.min(prev + 0.1, 1.5));
    const handlePdfZoomOut = () => setPdfZoom(prev => Math.max(prev - 0.1, 0.8));

    const triggerDownload = (pdf) => {
        const textContent = `Title: ${pdf.displayTitle}\nAuthor: ${pdf.author}\nDate: ${pdf.date}\n\n` + 
                            pdf.content.map(p => p.replace(/<[^>]*>/g, '')).join('\n\n');
        const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = pdf.title;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    useEffect(() => {
        document.body.classList.add('page-museum-story');
        return () => {
            document.body.classList.remove('page-museum-story');
            document.body.style.overflow = '';
        };
    }, [pageKey]);

    // Fallback if key not found
    if (!data) {
        return (
            <>
                <section className="hero hero--museum-story">
                    <div className="hero__inner hero__inner--bottom-left">
                        <div className="hero-card hero-card--dark-brush hero-card--wide">
                            <div className="hero-card__title">Activity Not Found</div>
                            <div className="hero-card__desc">
                                The requested activity page could not be found. Please return to the homepage or explore other sections.
                            </div>
                        </div>
                    </div>
                </section>
                <main className="museum-story-content">
                    <section className="block">
                        <div className="separator"></div>
                        <div className="block__cap">
                            <span className="cap__title">Error 404</span>
                        </div>
                        <div className="block__content">
                            <p className="p">
                                We apologize, but the sub-page you are looking for is currently unavailable or still under construction.
                            </p>
                        </div>
                    </section>
                </main>
            </>
        );
    }

    if (isMemorialAward) {
        return (
            <>
                {/* HERO SECTION */}
                <section className="hero hero--museum-story">
                    <div className="hero__inner hero__inner--bottom-left">
                        <div className="hero-card hero-card--dark-brush hero-card--wide">
                            <div className="hero-card__title">{data.title}</div>
                            <div className="hero-card__desc">{data.desc}</div>
                        </div>
                    </div>
                </section>

                {/* CONTENT SECTION */}
                <main className="museum-story-content">
                    <section className="block">
                        <div className="separator"></div>
                        <div className="block__content" style={{ marginBottom: '30px' }}>
                            <p className="p" style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#2c1e16', borderLeft: '4px solid #a62024', paddingLeft: '20px', background: '#fdfaf2', padding: '18px 24px', borderRadius: '6px', border: '1px solid #e3dec9', borderLeftWidth: '4px', textAlign: 'justify' }}>
                                {data.introduction}
                            </p>
                        </div>
                    </section>

                    {/* TABS NAVIGATION */}
                    <section className="block" style={{ paddingTop: 0, paddingBottom: 0 }}>
                        <div className="awards-tabs-nav">
                            <button 
                                className={`awards-tab-btn ${activeAwardTab === 'intro' ? 'active' : ''}`}
                                onClick={() => setActiveAwardTab('intro')}
                            >
                                পরিচিতি ও পটভূমি
                            </button>
                            <button 
                                className={`awards-tab-btn ${activeAwardTab === 'jury' ? 'active' : ''}`}
                                onClick={() => setActiveAwardTab('jury')}
                            >
                                জুরি বোর্ড ও নীতিমালা
                            </button>
                            <button 
                                className={`awards-tab-btn ${activeAwardTab === 'awardees' ? 'active' : ''}`}
                                onClick={() => setActiveAwardTab('awardees')}
                            >
                                পদকপ্রাপ্তদের তালিকা ({data.winners.length} বছর)
                            </button>
                        </div>
                    </section>

                    {/* TAB CONTENTS */}
                    {activeAwardTab === 'intro' && (
                        <section className="block" style={{ paddingTop: '20px' }}>
                            <div className="bio-grid">
                                <div className="bio-grid__image-pane">
                                    <div className="award-bio-card">
                                        <div className="award-bio-image-wrapper">
                                            <img src="/assets/Bajlur-Rahman-Smritipodok-Poriciti/531468.jpg" alt="Bazlur Rahman" className="award-bio-img" />
                                            <div className="award-bio-caption">সাংবাদিক বজলুর রহমান (১৯৪১–২০০৮)</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bio-grid__text-pane">
                                    <h3 className="award-section-title" style={{ marginTop: 0 }}>{data.biography.title}</h3>
                                    {data.biography.paragraphs.map((p, idx) => (
                                        <p key={idx} className="p" style={{ marginBottom: '15px', textAlign: 'justify' }}>{p}</p>
                                    ))}
                                    
                                    <h3 className="award-section-title" style={{ marginTop: '35px' }}>{data.inception.title}</h3>
                                    <p className="p" style={{ textAlign: 'justify' }}>{data.inception.text}</p>
                                </div>
                            </div>
                        </section>
                    )}

                    {activeAwardTab === 'jury' && (
                        <section className="block" style={{ paddingTop: '20px' }}>
                            <div className="jury-intro-section" style={{ marginBottom: '40px' }}>
                                <h3 className="award-section-title" style={{ marginTop: 0 }}>{data.juryBoard.title}</h3>
                                {data.juryBoard.paragraphs && data.juryBoard.paragraphs.map((p, idx) => (
                                    <p key={idx} className="p" style={{ marginBottom: '15px', textAlign: 'justify' }}>{p}</p>
                                ))}
                                
                                <div className="members-grid">
                                    {data.juryBoard.initialMembers && (
                                        <div style={{ background: '#fdfcf7', padding: '24px', borderRadius: '8px', border: '1px solid #e3dec9' }}>
                                            <h4 style={{ color: '#a62024', fontFamily: "'Noto Sans Bengali', sans-serif", fontSize: '1.25rem', marginBottom: '16px', borderBottom: '1px solid #e3dec9', paddingBottom: '8px' }}>গঠনকালীন জুরি বোর্ড সদস্যবৃন্দ</h4>
                                            <ul style={{ paddingLeft: '20px', color: '#2c2015', lineHeight: '1.8' }}>
                                                {data.juryBoard.initialMembers.map((member, idx) => (
                                                    <li key={idx} style={{ marginBottom: '6px' }}>{member}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {data.juryBoard.reconstitutedMembers && (
                                        <div style={{ background: '#fdfaf2', padding: '24px', borderRadius: '8px', border: '1px solid #cdb66c', height: 'fit-content' }}>
                                            <h4 style={{ color: '#a62024', fontFamily: "'Noto Sans Bengali', sans-serif", fontSize: '1.25rem', marginBottom: '16px', borderBottom: '1px solid #cdb66c', paddingBottom: '8px' }}>পুনর্গঠিত জুরি বোর্ড সদস্যবৃন্দ</h4>
                                            <ul style={{ paddingLeft: '20px', color: '#2c2015', lineHeight: '1.8' }}>
                                                {data.juryBoard.reconstitutedMembers.map((member, idx) => (
                                                    <li key={idx} style={{ marginBottom: '6px' }}><strong>{member}</strong></li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div style={{ borderTop: '1px solid #e3dec9', margin: '40px 0' }}></div>

                            <div className="policy-section">
                                <h3 className="award-section-title" style={{ marginTop: 0 }}>{data.policy.title}</h3>
                                {data.policy.intro && (
                                    <p className="p" style={{ marginBottom: '25px', textAlign: 'justify' }}>{data.policy.intro}</p>
                                )}

                                <div className="policy-grid">
                                    <div>
                                        <h4 style={{ color: '#1a1512', fontFamily: "'Noto Sans Bengali', sans-serif", fontSize: '1.25rem', marginBottom: '16px' }}>বিচার মানদণ্ড</h4>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                            <div style={{ background: '#e8f5e9', border: '1px solid #c8e6c9', borderRadius: '8px', padding: '20px' }}>
                                                <h5 style={{ color: '#2e7d32', margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 'bold' }}>প্রিন্ট ও অনলাইন মিডিয়া</h5>
                                                <p style={{ margin: 0, color: '#1b5e20', fontSize: '0.98rem', lineHeight: '1.6' }}>{data.policy.criteriaPrint}</p>
                                            </div>
                                            <div style={{ background: '#e3f2fd', border: '1px solid #bbdefb', borderRadius: '8px', padding: '20px' }}>
                                                <h5 style={{ color: '#1565c0', margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 'bold' }}>ইলেকট্রনিকস মিডিয়া</h5>
                                                <p style={{ margin: 0, color: '#0d47a1', fontSize: '0.98rem', lineHeight: '1.6' }}>{data.policy.criteriaElectronic}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 style={{ color: '#1a1512', fontFamily: "'Noto Sans Bengali', sans-serif", fontSize: '1.25rem', marginBottom: '16px' }}>মূল্যায়ন প্রক্রিয়া ও নীতিমালা</h4>
                                        <ul style={{ paddingLeft: '20px', color: '#2c2015', lineHeight: '1.85' }}>
                                            {data.policy.rules && data.policy.rules.map((rule, idx) => (
                                                <li key={idx} style={{ marginBottom: '10px', textAlign: 'justify' }}>{rule}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {activeAwardTab === 'awardees' && (
                        <section className="block" style={{ paddingTop: '20px' }}>
                            <div className="block__content" style={{ marginBottom: '25px' }}>
                                <div style={{ background: '#fdfcf7', borderLeft: '4px solid #a62024', border: '1px solid #e3dec9', borderLeftWidth: '4px', padding: '20px 24px', borderRadius: '6px', marginBottom: '25px' }}>
                                    <h4 style={{ color: '#a62024', fontFamily: "'Noto Sans Bengali', sans-serif", fontSize: '1.3rem', marginTop: 0, marginBottom: '10px' }}>পুরস্কারপ্রাপ্ত সাংবাদিকদের পটভূমি ও পরিচিতি</h4>
                                    {data.winnersListDescription.split('\n\n').map((paragraph, idx) => (
                                        <p key={idx} className="p" style={{ fontSize: '1.02rem', color: '#2c2015', lineHeight: '1.75', marginBottom: idx === data.winnersListDescription.split('\n\n').length - 1 ? 0 : '14px', textAlign: 'justify' }}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                {/* DIRECTORY CONTROLS */}
                                <div className="directory-controls">
                                    <div className="search-box-wrapper">
                                        <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8" />
                                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                        </svg>
                                        <input 
                                            type="text" 
                                            placeholder="বছর, সাংবাদিক, মিডিয়া বা বিষয় লিখে খুঁজুন..."
                                            value={awardSearchQuery}
                                            onChange={(e) => setAwardSearchQuery(e.target.value)}
                                            className="directory-search-input"
                                        />
                                        {awardSearchQuery && (
                                            <button 
                                                className="clear-search-btn"
                                                onClick={() => setAwardSearchQuery('')}
                                            >
                                                ✕
                                            </button>
                                        )}
                                    </div>
                                    <div className="filter-button-group">
                                        <button 
                                            className={`filter-btn ${awardCategoryFilter === 'all' ? 'active' : ''}`}
                                            onClick={() => setAwardCategoryFilter('all')}
                                        >
                                            সকল ক্যাটাগরি
                                        </button>
                                        <button 
                                            className={`filter-btn ${awardCategoryFilter === 'print' ? 'active' : ''}`}
                                            onClick={() => setAwardCategoryFilter('print')}
                                        >
                                            প্রিন্ট ও অনলাইন
                                        </button>
                                        <button 
                                            className={`filter-btn ${awardCategoryFilter === 'electronic' ? 'active' : ''}`}
                                            onClick={() => setAwardCategoryFilter('electronic')}
                                        >
                                            ইলেকট্রনিক মিডিয়া
                                        </button>
                                    </div>
                                </div>

                                {/* TABLE DIRECTORY */}
                                <div className="table-responsive">
                                    <table className="awards-table">
                                        <thead>
                                            <tr>
                                                <th style={{ width: '8%' }}>বছর</th>
                                                <th style={{ width: '22%' }}>ক্যাটাগরি</th>
                                                <th style={{ width: '25%' }}>পদকপ্রাপ্ত সাংবাদিক</th>
                                                <th style={{ width: '20%' }}>প্রচার মাধ্যম (মিডিয়া)</th>
                                                <th style={{ width: '25%' }}>প্রতিবেদন / ফিচারের বিষয়</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredWinners.length > 0 ? (
                                                filteredWinners.map((winner, index) => (
                                                    <tr key={index}>
                                                        <td className="year-cell"><strong>{winner.year}</strong></td>
                                                        <td className="cat-cell"><span className={`cat-tag cat-tag--${winner.categoryKey}`}>{winner.categoryKey === 'print' ? 'প্রিন্ট ও অনলাইন' : 'ইলেকট্রনিক মিডিয়া'}</span></td>
                                                        <td className="recipient-cell">{winner.recipient}</td>
                                                        <td className="media-cell"><em>{winner.media}</em></td>
                                                        <td className="topic-cell">{winner.topic}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="5" className="empty-table-cell">
                                                        কোনো তথ্য পাওয়া যায়নি।
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* TROPHY SHOWCASE */}
                    <section className="block" style={{ borderTop: '1px solid #e3dec9', paddingTop: '40px', marginTop: '40px' }}>
                        <div className="block__cap">
                            <span className="cap__title">পদক ও সম্মাননা ট্রফি</span>
                        </div>
                        <div className="award-trophy-showcase">
                            <div className="award-trophy-img-frame">
                                <img src="/assets/Bajlur-Rahman-Smritipodok-Poriciti/891175.png" alt="Bazlur Rahman Smriti Padak Trophy" className="award-trophy-img" />
                                <div className="award-trophy-caption">Figure 1: বজলুর রহমান স্মৃতিপদক ট্রফি</div>
                            </div>
                            <div className="award-trophy-details">
                                <p className="p" style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#2c2015' }}>
                                    বজলুর রহমান স্মৃতিপদক বিজয়ী সাংবাদিকদের একটি বিশেষ ধাতুনির্মিত স্মৃতিপদক, সম্মাননা সনদ ও সম্মাননা মূল্য প্রদান করা হয়। 
                                </p>
                                <p className="p" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#4a3f35', marginTop: '15px', fontStyle: 'italic' }}>
                                    এই ট্রফিটি ঢাকা বিশ্ববিদ্যালয়ের চারুকলা ইনস্টিটিউটের বিশিষ্ট ভাস্কর দ্বারা ডিজাইনকৃত, যা বাংলাদেশের মুক্তিযুদ্ধের চেতনা, প্রগতিশীল সাংবাদিকতা এবং সমাজ পরিবর্তনের লড়াইয়ের এক প্রতীকী স্মারক।
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        );
    }

    if (isSultanasDream) {
        return (
            <>
                {/* HERO SECTION */}
                <section className="hero hero--museum-story">
                    <div className="hero__inner hero__inner--bottom-left">
                        <div className="hero-card hero-card--dark-brush hero-card--wide">
                            <div className="hero-card__title">{data.title}</div>
                            <div className="hero-card__desc">{data.desc}</div>
                        </div>
                    </div>
                </section>

                {/* CONTENT SECTION */}
                <main className="museum-story-content">
                    <section className="block">
                        <div className="separator"></div>
                        
                        {/* Centered Museum Exhibition Poster Container */}
                        <div className="sd-poster-container">
                            <div className="sd-poster-frame">
                                <div className="sd-poster-header">
                                    <span className="sd-poster-subtitle">UNESCO Memory of the World Register</span>
                                    <h2 className="sd-poster-title">{data.title}</h2>
                                    <div className="sd-poster-divider"></div>
                                </div>
                                
                                <div className="sd-poster-image-wrapper">
                                    <img src={data.image} alt={data.title} className="sd-poster-img" />
                                    <div className="sd-poster-caption">{data.imageCaption}</div>
                                </div>
                                
                                <div className="sd-poster-body">
                                    <p className="sd-poster-paragraph">
                                        {data.introduction}
                                    </p>
                                    
                                    <div className="sd-poster-details">
                                        <p className="sd-poster-paragraph">
                                            <strong>Women's Liberation:</strong> Sultana's Dream and Rokeya Sakhawat Hossain have become synonymous with women's liberation in the subcontinent and beyond. Rokeya pioneered education as a vital tool to liberate Bengal's oppressed women.
                                        </p>
                                        <p className="sd-poster-paragraph">
                                            <strong>Vision for the Future:</strong> As a pioneer in Bengali Muslim education, Rokeya recognized women's inherent strength. Her ambition was that women would reach the highest positions of society through education and science.
                                        </p>
                                        <p className="sd-poster-paragraph">
                                            <strong>UNESCO Recognition:</strong> First published in 1905, Sultana’s Dream achieved prestigious global recognition in 2024 by being inscribed in the UNESCO Memory of the World Asia-Pacific Register.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* RESOURCE DASHBOARD SECTION */}
                    <section className="block" style={{ borderTop: '1px solid #e3dec9', paddingTop: '40px', marginTop: '40px' }}>
                        <div className="block__cap">
                            <span className="cap__title">eBooks & Audiobooks (ই-বুক ও শ্রুতিগ্রন্থ)</span>
                        </div>
                        
                        {/* Selector Tabs */}
                        <div className="sd-heritage-tabs">
                            <button 
                                className={`sd-heritage-tab-btn ${activeSultanaTab === 'english' ? 'sd-heritage-tab-btn--active' : ''}`}
                                onClick={() => setActiveSultanaTab('english')}
                            >
                                English Edition
                            </button>
                            <button 
                                className={`sd-heritage-tab-btn ${activeSultanaTab === 'bangla' ? 'sd-heritage-tab-btn--active' : ''}`}
                                onClick={() => setActiveSultanaTab('bangla')}
                            >
                                বাংলা সংস্করণ
                            </button>
                        </div>

                        {activeSultanaTab === 'english' ? (
                            <div className="sd-heritage-panel-grid">
                                {/* ENGLISH EDITION EBOOK */}
                                <div className="sd-heritage-resource-card">
                                    <h4 className="sd-heritage-resource-title">
                                        eBook (Digital Copy)
                                    </h4>
                                    
                                    <blockquote className="sd-heritage-quote">
                                        "Ladyland is a land of peace, where women run the affairs of the state, travel by helicopter, and harness the power of the sun."
                                        <span className="sd-heritage-quote-author">— Begum Rokeya, 1905</span>
                                    </blockquote>
                                    
                                    {/* EBOOK DOWNLOAD CARD */}
                                    <div className="sd-heritage-ebook-meta">
                                        <div className="sd-heritage-ebook-icon">
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                                <polyline points="14 2 14 8 20 8" />
                                                <line x1="16" y1="13" x2="8" y2="13" />
                                                <line x1="16" y1="17" x2="8" y2="17" />
                                            </svg>
                                        </div>
                                        <div className="sd-heritage-ebook-details">
                                            <div className="sd-heritage-ebook-title">Sultana's Dream eBook</div>
                                            <div className="sd-heritage-ebook-specs">Format: PDF | Size: {data.resources.english.pdfSize}</div>
                                        </div>
                                        <div className="sd-heritage-ebook-actions">
                                            <button 
                                                onClick={() => openPdfViewer({
                                                    isBinary: true,
                                                    pdfUrl: data.resources.english.pdf,
                                                    displayTitle: "Sultana's Dream (English Edition)",
                                                    pages: 1
                                                })}
                                                className="sd-heritage-button sd-heritage-button--primary"
                                            >
                                                Read
                                            </button>
                                            <a href={data.resources.english.pdf} download className="sd-heritage-button sd-heritage-button--secondary">Download</a>
                                        </div>
                                    </div>
                                </div>

                                {/* ENGLISH EDITION AUDIOBOOK */}
                                <div className="sd-heritage-video-card">
                                    <h5 className="sd-heritage-video-title">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                                            <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 19v4M8 23h8" />
                                        </svg>
                                        Audiobook (English Listening Edition)
                                    </h5>
                                    <div className="sd-heritage-video-frame">
                                        <div className="sd-heritage-video-container">
                                            <iframe 
                                                key="sultana-audiobook-en"
                                                src={`https://www.youtube.com/embed/${data.resources.english.audiobookYoutubeId}`} 
                                                title="Sultana's Dream English Audiobook" 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="sd-heritage-panel-grid">
                                {/* BANGLA EDITION EBOOK */}
                                <div className="sd-heritage-resource-card sd-heritage-resource-card--bangla">
                                    <h4 className="sd-heritage-resource-title">
                                        ই-বুক (ডিজিটাল সংস্করণ)
                                    </h4>
                                    
                                    <blockquote className="sd-heritage-quote">
                                        "লেডিল্যান্ডে শান্তি বিরাজ করে, যেখানে নারীরা রাজ্য শাসন করে, আকাশে উড়ে বেড়ায় এবং সূর্যের শক্তিকে কাজে লাগায়।"
                                        <span className="sd-heritage-quote-author">— বেগম রোকেয়া, ১৯০৫</span>
                                    </blockquote>
                                    
                                    {/* EBOOK DOWNLOAD CARD */}
                                    <div className="sd-heritage-ebook-meta">
                                        <div className="sd-heritage-ebook-icon">
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                                <polyline points="14 2 14 8 20 8" />
                                                <line x1="16" y1="13" x2="8" y2="13" />
                                                <line x1="16" y1="17" x2="8" y2="17" />
                                            </svg>
                                        </div>
                                        <div className="sd-heritage-ebook-details">
                                            <div className="sd-heritage-ebook-title">সুলতানার স্বপ্ন ই-বুক</div>
                                            <div className="sd-heritage-ebook-specs">ফরম্যাট: PDF | সাইজ: {data.resources.bangla.pdfSize}</div>
                                        </div>
                                        <div className="sd-heritage-ebook-actions">
                                            <button 
                                                onClick={() => openPdfViewer({
                                                    isBinary: true,
                                                    pdfUrl: data.resources.bangla.pdf,
                                                    displayTitle: "সুলতানার স্বপ্ন (বাংলা সংস্করণ)",
                                                    pages: 1
                                                })}
                                                className="sd-heritage-button sd-heritage-button--primary"
                                            >
                                                পড়ুন
                                            </button>
                                            <a href={data.resources.bangla.pdf} download className="sd-heritage-button sd-heritage-button--secondary">ডাউনলোড</a>
                                        </div>
                                    </div>
                                </div>

                                {/* BANGLA EDITION AUDIOBOOK */}
                                <div className="sd-heritage-video-card sd-heritage-video-card--bangla">
                                    <h5 className="sd-heritage-video-title">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                                            <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 19v4M8 23h8" />
                                        </svg>
                                        শ্রুতিগ্রন্থ (বাংলা সংস্করণ)
                                    </h5>
                                    <div className="sd-heritage-video-frame">
                                        <div className="sd-heritage-video-container">
                                            <iframe 
                                                key="sultana-audiobook-bn"
                                                src={`https://www.youtube.com/embed/${data.resources.bangla.audiobookYoutubeId}`} 
                                                title="Sultana's Dream Bangla Audiobook" 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>
                </main>

                {/* FULL SCREEN PDF DOCUMENT READER MODAL */}
                {activePdf !== null && (
                    <div className="pdf-viewer-modal" role="dialog" aria-modal="true" aria-label="PDF Document Viewer">
                        {/* Top Header Bar */}
                        <div className="pdf-viewer-modal__topbar">
                            <div className="pdf-viewer-modal__title">{activePdf.displayTitle}</div>
                            
                            <div className="pdf-viewer-modal__controls">
                                {/* Close button */}
                                <button className="pdf-viewer-modal__close" onClick={closePdfViewer} aria-label="Close Viewer">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Workspace wrapper */}
                        <div className="pdf-viewer-modal__workspace">
                            <div className="pdf-viewer-modal__stage" style={{ padding: '20px', background: '#2c2015', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <iframe 
                                    src={activePdf.pdfUrl} 
                                    title={activePdf.displayTitle} 
                                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px', flex: 1 }}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    }

    return (
        <>
            {/* HERO SECTION */}
            <section className="hero hero--museum-story">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">{data.title}</div>
                        <div className="hero-card__desc">{data.desc}</div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <main className="museum-story-content">
                {isNewsletters || isAudioVisualArchive || isCsgjAbout || isCsgjSeminars || isCsgjResearch || isCsgjCertificateCourse || isCsgjExchangeProgram || isCsgjVolunteer || isCsgjWinterSchool ? (
                    <div className="separator"></div>
                ) : (
                    data.blocks.map((block, index) => (
                        <section className="block" key={index}>
                            {index === 0 && <div className="separator"></div>}
                            <div className="block__cap">
                                <span className="cap__title">{block.title}</span>
                            </div>
                            <div className="block__content">
                                {block.paragraphs.map((pText, pIndex) => (
                                    <p className="p" key={pIndex} dangerouslySetInnerHTML={{ __html: pText }} />
                                ))}
                            </div>
                        </section>
                    ))
                )}

                {/* CSGJ ABOUT DETAILED SECTIONS */}
                {isCsgjAbout && (
                    <div className="csgj-about-container">
                        {/* Section 1: Intro */}
                        <section className="csgj-section">
                            <h2 className="csgj-main-title">Center for the Study of Genocide and Justice</h2>
                            <div className="csgj-intro-box">
                                <div className="csgj-intro-line"></div>
                                <div className="csgj-intro-content">
                                    {data.intro.paragraphs.map((p, idx) => (
                                        <p className="csgj-lead-p" key={idx}>{p}</p>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Objectives & Focus Areas */}
                        <section className="csgj-section">
                            <h3 className="csgj-section-header">{data.focusAreas.title}</h3>
                            <p className="csgj-section-subtitle">{data.focusAreas.introText}</p>
                            <div className="csgj-focus-grid">
                                {data.focusAreas.items.map((item, idx) => (
                                    <div className="csgj-focus-col" key={idx}>
                                        <span className="csgj-focus-num">0{idx + 1}</span>
                                        <h4 className="csgj-focus-title">{item.label}</h4>
                                        <p className="csgj-focus-desc">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 3: Major Functions */}
                        <section className="csgj-section">
                            <h3 className="csgj-section-header">{data.programs.title}</h3>
                            <p className="csgj-section-subtitle">{data.programs.introText}</p>
                            <div className="csgj-programs-grid">
                                {data.programs.items.map((item, idx) => (
                                    <div className="csgj-program-box" key={idx}>
                                        <span className="csgj-program-marker"></span>
                                        <div className="csgj-program-info">
                                            <h5 className="csgj-program-title">{item.label}</h5>
                                            <p className="csgj-program-desc">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="csgj-affiliation-banner">
                                <p className="csgj-affiliation-text">
                                    {data.affiliation.paragraphs[0]}
                                </p>
                            </div>
                        </section>

                        {/* Section 4: Vision & Mission Split Grid */}
                        <section className="csgj-section">
                            <div className="csgj-split-grid">
                                <div className="csgj-split-col">
                                    <h3 className="csgj-split-header">{data.vision.title}</h3>
                                    <p className="csgj-split-intro">{data.vision.introText}</p>
                                    <ul className="csgj-checklist">
                                        {data.vision.items.map((item, idx) => (
                                            <li key={idx} className="csgj-checklist-item">
                                                <span className="csgj-checklist-marker"></span>
                                                <span className="csgj-checklist-text">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="csgj-split-col">
                                    <h3 className="csgj-split-header">{data.mission.title}</h3>
                                    <p className="csgj-split-intro">{data.mission.introText}</p>
                                    <ul className="csgj-checklist">
                                        {data.mission.items.map((item, idx) => (
                                            <li key={idx} className="csgj-checklist-item">
                                                <span className="csgj-checklist-marker"></span>
                                                <span className="csgj-checklist-text">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Advisory Board & Current Staff */}
                        <section className="csgj-section">
                            <div className="csgj-split-grid">
                                <div className="csgj-split-col">
                                    <h3 className="csgj-split-header">{data.advisoryBoard.title}</h3>
                                    <div className="csgj-directory-list">
                                        {data.advisoryBoard.members.map((member, idx) => (
                                            <div className="csgj-directory-row" key={idx}>
                                                <div className="csgj-directory-name">{member.name}</div>
                                                <div className="csgj-directory-desc">{member.desc}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="csgj-split-col">
                                    <h3 className="csgj-split-header">{data.staff.title}</h3>
                                    <div className="csgj-directory-list">
                                        {data.staff.members.map((member, idx) => (
                                            <div className="csgj-directory-row" key={idx}>
                                                <div className="csgj-directory-name">{member.name}</div>
                                                <div className="csgj-directory-desc">{member.role}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 6: Former Employees */}
                        <section className="csgj-section">
                            <h3 className="csgj-section-header">{data.formerEmployees.title}</h3>
                            <div className="csgj-former-grid">
                                {data.formerEmployees.roles.map((group, idx) => (
                                    <div className="csgj-former-group-box" key={idx}>
                                        <h4 className="csgj-former-group-title">{group.category}</h4>
                                        <div className="csgj-former-group-list">
                                            {group.list.map((person, pIdx) => (
                                                <div className="csgj-former-row" key={pIdx}>
                                                    <span className="csgj-former-name">{person.name}</span>
                                                    <span className="csgj-former-role">{person.role}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 7: Contact Box */}
                        <section className="csgj-section csgj-contact-section">
                            <div className="csgj-contact-box">
                                <h3 className="csgj-contact-title">{data.contact.title}</h3>
                                <div className="csgj-contact-grid">
                                    <div className="csgj-contact-info-col">
                                        <p className="csgj-contact-p">
                                            <strong>Address:</strong> {data.contact.address}
                                        </p>
                                        <p className="csgj-contact-p">
                                            <strong>E-mail:</strong> <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
                                        </p>
                                        <p className="csgj-contact-p">
                                            <strong>Telephone:</strong> {data.contact.phone}
                                        </p>
                                    </div>
                                    <div className="csgj-contact-social-col">
                                        <div className="csgj-social-grid">
                                            {data.contact.socials.map((social, idx) => (
                                                <a 
                                                    href={social.url} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="csgj-social-btn" 
                                                    key={idx}
                                                >
                                                    {social.platform}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {/* CSGJ SEMINARS SECTIONS */}
                {isCsgjSeminars && (
                    <div className="csgj-seminars-container">
                        {data.seminarsList.map((sem, sIdx) => (
                            <section className="block" key={sem.id} style={{ paddingTop: 0, marginBottom: '50px' }}>
                                <div className="block__cap">
                                    <span className="cap__title">{sem.title}</span>
                                </div>
                                <div className="block__content">
                                    <p className="p" style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#5c4e3f', textAlign: 'justify', marginBottom: '25px' }}>
                                        {sem.desc}
                                    </p>

                                    {/* Speakers / Presentation points */}
                                    {sem.speakers && sem.speakers.length > 0 && (
                                        <div className="csgj-seminar-speakers" style={{ marginBottom: '30px' }}>
                                            {sem.speakers.map((spk, idx) => (
                                                <div className="csgj-speaker-row" key={idx}>
                                                    <span className="csgj-speaker-bullet"></span>
                                                    <div className="csgj-speaker-info">
                                                        <strong>{spk.name}</strong> ({spk.role}) – {spk.topic}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Inline 2-Image Row for the Seminar */}
                                    {sem.images && sem.images.length > 0 && (
                                        <div className="csgj-seminar-images-row">
                                            {sem.images.map((imgSrc, imgIdx) => (
                                                <div 
                                                    key={imgSrc} 
                                                    className="csgj-seminar-image-card"
                                                    onClick={() => {
                                                        const globalIndex = sIdx * 2 + imgIdx;
                                                        openLightbox(globalIndex);
                                                    }}
                                                >
                                                    <div className="csgj-seminar-image-frame">
                                                        <img src={imgSrc} alt={`${sem.title} Image ${imgIdx + 1}`} className="csgj-seminar-image-img" />
                                                        <div className="csgj-seminar-image-overlay">
                                                            <span className="csgj-seminar-image-zoom-icon">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                                    <circle cx="11" cy="11" r="8" />
                                                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                                                    <line x1="11" y1="8" x2="11" y2="14" />
                                                                    <line x1="8" y1="11" x2="14" y2="11" />
                                                                </svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </section>
                        ))}
                    </div>
                )}

                {/* CSGJ RESEARCH & PUBLICATIONS SECTIONS (Prologue Minimal Layout) */}
                {isCsgjResearch && (
                    <div className="csgj-research-container-minimal">
                        {/* 1. PUBLICATIONS */}
                        <div className="block" style={{ paddingBottom: '10px' }}>
                            <div className="block__cap" style={{ marginBottom: '25px' }}>
                                <span className="cap__title" style={{ fontSize: '1.8rem', color: '#8d2024', fontFamily: 'Roboto Slab, serif', textTransform: 'none' }}>Publications</span>
                            </div>
                        </div>

                        {data.publications && data.publications.map((pub, idx) => (
                            <section className="block" key={pub.id} style={{ paddingTop: 0, marginBottom: '30px' }}>
                                <div className="block__cap">
                                    <span className="cap__title" style={{ fontSize: '1.25rem', fontFamily: 'Roboto Slab, serif', textTransform: 'none' }}>
                                        {pub.title}
                                    </span>
                                </div>
                                <div className="block__content">
                                    <div style={{ display: 'flex', gap: '25px', alignItems: 'flex-start', flexWrap: 'wrap', marginTop: '15px' }}>
                                        {pub.image && (
                                            <div 
                                                onClick={() => openLightbox(idx)} 
                                                style={{ cursor: 'pointer', flexShrink: 0 }}
                                            >
                                                <img 
                                                    src={pub.image} 
                                                    alt={pub.title} 
                                                    style={{ 
                                                        width: '120px', 
                                                        height: 'auto', 
                                                        border: '1px solid #d4cbb3',
                                                        boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                                        display: 'block'
                                                    }} 
                                                />
                                            </div>
                                        )}
                                        <div style={{ flex: 1, minWidth: '280px' }}>
                                            {pub.subtitle && (
                                                <p className="p" style={{ fontStyle: 'italic', color: '#555', marginBottom: '12px' }}>
                                                    {pub.subtitle}
                                                </p>
                                            )}
                                            <ul className="p" style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                                                {pub.details && pub.details.map((detail, dIdx) => (
                                                    <li key={dIdx} style={{ fontSize: '0.98rem', marginBottom: '6px', color: '#1a1a1a' }}>
                                                        <strong style={{ color: '#8d2024' }}>{detail.label}:</strong> {detail.value}
                                                    </li>
                                                ))}
                                                {pub.topics && (
                                                    <li style={{ fontSize: '0.98rem', marginTop: '10px' }}>
                                                        <strong style={{ color: '#8d2024' }}>Topics Included:</strong>
                                                        <ul style={{ listStyle: 'square', paddingLeft: '20px', marginTop: '6px' }}>
                                                            {pub.topics.map((topic, tIdx) => (
                                                                <li key={tIdx} style={{ marginBottom: '4px' }}>{topic}</li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        ))}

                        {/* 2. RESEARCH PROJECTS */}
                        <div className="block" style={{ paddingTop: '20px', paddingBottom: '10px' }}>
                            <div className="block__cap" style={{ marginBottom: '25px' }}>
                                <span className="cap__title" style={{ fontSize: '1.8rem', color: '#8d2024', fontFamily: 'Roboto Slab, serif', textTransform: 'none' }}>Research Projects</span>
                            </div>
                        </div>

                        {data.researchProjects && data.researchProjects.map((proj, pIdx) => (
                            <section className="block" key={proj.id} style={{ paddingTop: 0, marginBottom: '40px' }}>
                                <div className="block__cap">
                                    <span className="cap__title" style={{ fontSize: '1.25rem', fontFamily: 'Roboto Slab, serif', textTransform: 'none' }}>
                                        {proj.title}
                                    </span>
                                </div>
                                <div className="block__content">
                                    {proj.timeline && (
                                        <p className="p" style={{ fontStyle: 'italic', color: '#666', marginBottom: '12px' }}>
                                            <strong>Timeline / Funding:</strong> {proj.timeline}
                                        </p>
                                    )}

                                    {proj.overview && (
                                        <p className="p" style={{ textAlign: 'justify', marginBottom: '15px' }}>{proj.overview}</p>
                                    )}

                                    {/* Priority Areas */}
                                    {proj.priorityAreas && (
                                        <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                                            <strong style={{ color: '#8d2024', fontSize: '1rem', display: 'block', marginBottom: '8px' }}>Priority Areas of Research:</strong>
                                            <ul style={{ listStyle: 'square', paddingLeft: '20px', margin: 0 }}>
                                                {proj.priorityAreas.map((area, aIdx) => (
                                                    <li key={aIdx} style={{ fontSize: '0.98rem', marginBottom: '6px', color: '#1a1a1a' }}>{area}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Rohingya Field Visits */}
                                    {proj.visits && (
                                        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                                            <strong style={{ color: '#8d2024', fontSize: '1rem', display: 'block', marginBottom: '12px' }}>Summary of Field Visits:</strong>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                                {proj.visits.map((visit, vIdx) => (
                                                    <div key={vIdx} style={{ borderLeft: '3px solid #d4cbb3', paddingLeft: '12px' }}>
                                                        <h5 style={{ fontFamily: 'Roboto Slab, serif', fontSize: '0.98rem', color: '#1a1a1a', margin: '0 0 4px 0', fontWeight: '700' }}>
                                                            {visit.title}
                                                        </h5>
                                                        <p className="p" style={{ fontSize: '0.95rem', margin: 0, color: '#444' }}>{visit.desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Purposes */}
                                    {proj.purposes && (
                                        <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                                            <strong style={{ color: '#8d2024', fontSize: '1rem', display: 'block', marginBottom: '8px' }}>Key Purposes:</strong>
                                            <ul style={{ listStyle: 'square', paddingLeft: '20px', margin: 0 }}>
                                                {proj.purposes.map((purpose, idx) => (
                                                    <li key={idx} style={{ fontSize: '0.98rem', marginBottom: '6px', color: '#1a1a1a' }}>{purpose}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Footer details (eligibility, selection, methodology, team) */}
                                    <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        {proj.eligibility && (
                                            <p className="p" style={{ fontSize: '0.98rem', margin: 0 }}>
                                                <strong style={{ color: '#8d2024' }}>Eligibility:</strong> {proj.eligibility}
                                            </p>
                                        )}
                                        {proj.selection && (
                                            <div className="p" style={{ fontSize: '0.98rem', margin: 0 }}>
                                                <strong style={{ color: '#8d2024' }}>Selection &amp; Output:</strong> {proj.selection}
                                                {proj.proposalImages && (
                                                    <div style={{ marginTop: '15px' }}>
                                                        <div className="photo-archive-grid">
                                                            {proj.proposalImages.map((imgSrc, imgIdx) => (
                                                                <button 
                                                                    key={imgSrc} 
                                                                    className="photo-archive-card"
                                                                    onClick={() => openLightbox(5 + imgIdx)}
                                                                    aria-label={`Open Proposal Process Image ${imgIdx + 1}`}
                                                                >
                                                                    <div className="photo-archive-card__frame">
                                                                        <img 
                                                                            src={imgSrc} 
                                                                            alt={`Proposal Process ${imgIdx + 1}`} 
                                                                            className="photo-archive-card__img"
                                                                            loading="lazy"
                                                                        />
                                                                        <div className="photo-archive-card__overlay">
                                                                            <span className="photo-archive-card__zoom-icon">
                                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                                                    <circle cx="11" cy="11" r="8" />
                                                                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                                                                    <line x1="11" y1="8" x2="11" y2="14" />
                                                                                    <line x1="8" y1="11" x2="14" y2="11" />
                                                                                </svg>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                        {proj.methodology && (
                                            <p className="p" style={{ fontSize: '0.98rem', margin: 0 }}>
                                                <strong style={{ color: '#8d2024' }}>Methodology:</strong> {proj.methodology}
                                            </p>
                                        )}
                                        {proj.team && (
                                            <p className="p" style={{ fontSize: '0.98rem', margin: 0 }}>
                                                <strong style={{ color: '#8d2024' }}>Research Team:</strong> {proj.team}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>
                )}

                {/* CSGJ CERTIFICATE COURSE SECTIONS (Prologue Minimal Layout) */}
                {isCsgjCertificateCourse && (
                    <div className="csgj-certificate-course-container-minimal">
                        {/* 1. OVERVIEW OF COURSES (1st to 6th) */}
                        <div className="block" style={{ paddingBottom: '10px' }}>
                            <div className="block__cap" style={{ marginBottom: '25px' }}>
                                <span className="cap__title" style={{ fontSize: '1.8rem', color: '#8d2024', fontFamily: 'Roboto Slab, serif', textTransform: 'none' }}>Overview of Courses (1st to 6th)</span>
                            </div>
                        </div>

                        {data.courses && data.courses.map((course) => (
                            <section className="block" key={course.id} style={{ paddingTop: 0, marginBottom: '30px' }}>
                                <div className="block__cap">
                                    <span className="cap__title" style={{ fontSize: '1.25rem', fontFamily: 'Roboto Slab, serif', textTransform: 'none' }}>
                                        {course.title}
                                    </span>
                                </div>
                                <div className="block__content">
                                    {course.timeline && (
                                        <p className="p" style={{ fontStyle: 'italic', color: '#666', marginBottom: '12px' }}>
                                            <strong>Timeline:</strong> {course.timeline}
                                        </p>
                                    )}
                                    <p className="p" style={{ textAlign: 'justify', margin: 0 }}>
                                        {course.details}
                                    </p>
                                </div>
                            </section>
                        ))}

                        {/* 2. 1ST ONLINE (7TH) CERTIFICATE COURSE */}
                        <div className="block" style={{ paddingTop: '20px', paddingBottom: '10px' }}>
                            <div className="block__cap" style={{ marginBottom: '25px' }}>
                                <span className="cap__title" style={{ fontSize: '1.8rem', color: '#8d2024' }}>{data.onlineCourse.title}</span>
                            </div>
                        </div>

                        <section className="block" style={{ paddingTop: 0, marginBottom: '40px' }}>
                            <div className="block__cap">
                                <span className="cap__title" style={{ fontSize: '1.25rem', fontFamily: 'Roboto Slab, serif', textTransform: 'none' }}>
                                    Course Program &amp; Lectures
                                </span>
                            </div>
                            <div className="block__content">
                                {data.onlineCourse.timeline && (
                                    <p className="p" style={{ fontStyle: 'italic', color: '#666', marginBottom: '12px' }}>
                                        <strong>Timeline:</strong> {data.onlineCourse.timeline}
                                    </p>
                                )}
                                {data.onlineCourse.format && (
                                    <p className="p" style={{ textAlign: 'justify', marginBottom: '15px' }}>
                                        <strong>Format &amp; Demographics:</strong> {data.onlineCourse.format}
                                    </p>
                                )}
                                {data.onlineCourse.inauguration && (
                                    <p className="p" style={{ textAlign: 'justify', marginBottom: '25px' }}>
                                        <strong>Inauguration:</strong> {data.onlineCourse.inauguration}
                                    </p>
                                )}

                                <strong style={{ color: '#8d2024', fontSize: '1.1rem', display: 'block', marginBottom: '18px', borderBottom: '1px dashed #d4cbb3', paddingBottom: '6px' }}>
                                    Session Details &amp; Lecture Outline:
                                </strong>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                    {data.onlineCourse.sessions.map((session, sIdx) => (
                                        <div key={sIdx} style={{ borderLeft: '3px solid #d4cbb3', paddingLeft: '15px' }}>
                                            <h5 style={{ fontFamily: 'Roboto Slab, serif', fontSize: '1.05rem', color: '#8d2024', margin: '0 0 10px 0', fontWeight: '700' }}>
                                                {session.date}
                                            </h5>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                                {session.items.map((item, iIdx) => (
                                                    <div key={iIdx}>
                                                        <h6 style={{ fontSize: '0.98rem', color: '#1a1a1a', margin: '0 0 4px 0', fontWeight: '700', lineHeight: '1.4' }}>
                                                            {item.title}
                                                        </h6>
                                                        <p className="p" style={{ fontSize: '0.95rem', margin: 0, color: '#555' }}>
                                                            {item.speaker}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {data.onlineCourse.evaluation && (
                                    <p className="p" style={{ marginTop: '30px', fontWeight: '700', color: '#1a1a1a', borderTop: '1px dashed #d4cbb3', paddingTop: '15px' }}>
                                        <strong>Evaluation:</strong> {data.onlineCourse.evaluation}
                                    </p>
                                )}
                            </div>
                        </section>

                        {/* 3. CERTIFICATE COURSE GALLERY */}
                        <div className="block" style={{ paddingTop: '20px', paddingBottom: '10px' }}>
                            <div className="block__cap" style={{ marginBottom: '25px' }}>
                                <span className="cap__title" style={{ fontSize: '1.8rem', color: '#8d2024' }}>Gallery</span>
                            </div>
                        </div>

                        <section className="block" style={{ paddingTop: 0 }}>
                            <div className="photo-archive-grid">
                                {data.images && data.images.map((imgSrc, imgIdx) => (
                                    <button 
                                        key={imgSrc} 
                                        className="photo-archive-card"
                                        onClick={() => openLightbox(imgIdx)}
                                        aria-label={`Open Course Photo ${imgIdx + 1}`}
                                    >
                                        <div className="photo-archive-card__frame">
                                            <img 
                                                src={imgSrc} 
                                                alt={`Course Photo ${imgIdx + 1}`} 
                                                className="photo-archive-card__img"
                                                loading="lazy"
                                            />
                                            <div className="photo-archive-card__overlay">
                                                <span className="photo-archive-card__zoom-icon">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <circle cx="11" cy="11" r="8" />
                                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                                        <line x1="11" y1="8" x2="11" y2="14" />
                                                        <line x1="8" y1="11" x2="14" y2="11" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </section>
                    </div>
                )}

                {/* CSGJ VOLUNTEER EXCHANGE PROGRAM SECTIONS (Prologue Minimal Layout) */}
                {isCsgjExchangeProgram && (
                    <div className="csgj-exchange-program-container-minimal">
                        {/* 1. 2018 EVENTS */}
                        <div className="block" style={{ paddingBottom: '10px' }}>
                            <div className="block__cap" style={{ marginBottom: '25px' }}>
                                <span className="cap__title" style={{ fontSize: '1.8rem', color: '#8d2024', fontFamily: 'Roboto Slab, serif', textTransform: 'none' }}>2018</span>
                            </div>
                        </div>

                        {data.events2018 && data.events2018.map((ev) => (
                            <section className="block" key={ev.id} style={{ paddingTop: 0, marginBottom: '40px' }}>
                                <div className="block__cap">
                                    <span className="cap__title" style={{ fontSize: '1.25rem', fontFamily: 'Roboto Slab, serif', textTransform: 'none' }}>
                                        {ev.title}
                                    </span>
                                </div>
                                <div className="block__content">
                                    {ev.participant && (
                                        <p className="p" style={{ fontStyle: 'italic', color: '#666', marginBottom: '8px' }}>
                                            <strong>Participant(s):</strong> {ev.participant}
                                        </p>
                                    )}
                                    {ev.event && (
                                        <p className="p" style={{ fontStyle: 'italic', color: '#666', marginBottom: '15px' }}>
                                            <strong>Event &amp; Location:</strong> {ev.event}
                                        </p>
                                    )}
                                    
                                    {ev.paragraphs && ev.paragraphs.map((para, paraIdx) => (
                                        <p key={paraIdx} className="p" style={{ textAlign: 'justify', marginBottom: '15px' }}>
                                            {para}
                                        </p>
                                    ))}

                                    {ev.details && (
                                        <>
                                            <strong style={{ color: '#8d2024', fontSize: '0.98rem', display: 'block', marginBottom: '8px' }}>Key Details:</strong>
                                            <ul style={{ listStyle: 'square', paddingLeft: '20px', margin: '0 0 20px 0' }}>
                                                {ev.details.map((detail, idx) => (
                                                    <li key={idx} style={{ fontSize: '0.98rem', marginBottom: '6px', color: '#1a1a1a' }}>{detail}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}

                                    {ev.video && (
                                        <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                                            <a 
                                                href={ev.video.url} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="btn btn--secondary" 
                                                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#8d2024', fontWeight: 'bold' }}
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <polygon points="10 8 16 12 10 16 10 8" />
                                                </svg>
                                                {ev.video.title}
                                            </a>
                                        </div>
                                    )}

                                    {/* Inline images for this event */}
                                    {ev.images && ev.images.length > 0 && (
                                        <div style={{ marginTop: '15px' }}>
                                            <div className="photo-archive-grid">
                                                {ev.images.map((imgSrc, imgIdx) => (
                                                    <button 
                                                        key={imgSrc} 
                                                        className="photo-archive-card"
                                                        onClick={() => openLightbox(ev.imageStartIndex + imgIdx)}
                                                        aria-label={`Open Event Photo ${imgIdx + 1}`}
                                                    >
                                                        <div className="photo-archive-card__frame">
                                                            <img 
                                                                src={imgSrc} 
                                                                alt={`Event Photo ${imgIdx + 1}`} 
                                                                className="photo-archive-card__img"
                                                                loading="lazy"
                                                            />
                                                            <div className="photo-archive-card__overlay">
                                                                <span className="photo-archive-card__zoom-icon">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                                        <circle cx="11" cy="11" r="8" />
                                                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                                                        <line x1="11" y1="8" x2="11" y2="14" />
                                                                        <line x1="8" y1="11" x2="14" y2="11" />
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </section>
                        ))}

                        {/* 2. 2019 EVENTS */}
                        <div className="block" style={{ paddingTop: '20px', paddingBottom: '10px' }}>
                            <div className="block__cap" style={{ marginBottom: '25px' }}>
                                <span className="cap__title" style={{ fontSize: '1.8rem', color: '#8d2024', fontFamily: 'Roboto Slab, serif', textTransform: 'none' }}>2019</span>
                            </div>
                        </div>

                        {data.events2019 && data.events2019.map((ev) => (
                            <section className="block" key={ev.id} style={{ paddingTop: 0, marginBottom: '40px' }}>
                                <div className="block__cap">
                                    <span className="cap__title" style={{ fontSize: '1.25rem', fontFamily: 'Roboto Slab, serif', textTransform: 'none' }}>
                                        {ev.title}
                                    </span>
                                </div>
                                <div className="block__content">
                                    {ev.participant && (
                                        <p className="p" style={{ fontStyle: 'italic', color: '#666', marginBottom: '8px' }}>
                                            <strong>Participant(s):</strong> {ev.participant}
                                        </p>
                                    )}
                                    {ev.event && (
                                        <p className="p" style={{ fontStyle: 'italic', color: '#666', marginBottom: '15px' }}>
                                            <strong>Event &amp; Location:</strong> {ev.event}
                                        </p>
                                    )}
                                    
                                    {ev.paragraphs && ev.paragraphs.map((para, paraIdx) => (
                                        <p key={paraIdx} className="p" style={{ textAlign: 'justify', marginBottom: '15px' }}>
                                            {para}
                                        </p>
                                    ))}

                                    {ev.details && (
                                        <>
                                            <strong style={{ color: '#8d2024', fontSize: '0.98rem', display: 'block', marginBottom: '8px' }}>Key Details:</strong>
                                            <ul style={{ listStyle: 'square', paddingLeft: '20px', margin: '0 0 20px 0' }}>
                                                {ev.details.map((detail, idx) => (
                                                    <li key={idx} style={{ fontSize: '0.98rem', marginBottom: '6px', color: '#1a1a1a' }}>{detail}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}

                                    {ev.video && (
                                        <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                                            <a 
                                                href={ev.video.url} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="btn btn--secondary" 
                                                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#8d2024', fontWeight: 'bold' }}
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <polygon points="10 8 16 12 10 16 10 8" />
                                                </svg>
                                                {ev.video.title}
                                            </a>
                                        </div>
                                    )}

                                    {/* Inline images for this event */}
                                    {ev.images && ev.images.length > 0 && (
                                        <div style={{ marginTop: '15px' }}>
                                            <div className="photo-archive-grid">
                                                {ev.images.map((imgSrc, imgIdx) => (
                                                    <button 
                                                        key={imgSrc} 
                                                        className="photo-archive-card"
                                                        onClick={() => openLightbox(ev.imageStartIndex + imgIdx)}
                                                        aria-label={`Open Event Photo ${imgIdx + 1}`}
                                                    >
                                                        <div className="photo-archive-card__frame">
                                                            <img 
                                                                src={imgSrc} 
                                                                alt={`Event Photo ${imgIdx + 1}`} 
                                                                className="photo-archive-card__img"
                                                                loading="lazy"
                                                            />
                                                            <div className="photo-archive-card__overlay">
                                                                <span className="photo-archive-card__zoom-icon">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                                        <circle cx="11" cy="11" r="8" />
                                                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                                                        <line x1="11" y1="8" x2="11" y2="14" />
                                                                        <line x1="8" y1="11" x2="14" y2="11" />
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </section>
                        ))}

                        {/* 3. 2020 EVENTS */}
                        <div className="block" style={{ paddingTop: '20px', paddingBottom: '10px' }}>
                            <div className="block__cap" style={{ marginBottom: '25px' }}>
                                <span className="cap__title" style={{ fontSize: '1.8rem', color: '#8d2024', fontFamily: 'Roboto Slab, serif', textTransform: 'none' }}>2020</span>
                            </div>
                        </div>

                        {data.events2020 && data.events2020.map((ev) => (
                            <section className="block" key={ev.id} style={{ paddingTop: 0, marginBottom: '40px' }}>
                                <div className="block__cap">
                                    <span className="cap__title" style={{ fontSize: '1.25rem', fontFamily: 'Roboto Slab, serif', textTransform: 'none' }}>
                                        {ev.title}
                                    </span>
                                </div>
                                <div className="block__content">
                                    {ev.participant && (
                                        <p className="p" style={{ fontStyle: 'italic', color: '#666', marginBottom: '8px' }}>
                                            <strong>Participant(s):</strong> {ev.participant}
                                        </p>
                                    )}
                                    {ev.event && (
                                        <p className="p" style={{ fontStyle: 'italic', color: '#666', marginBottom: '15px' }}>
                                            <strong>Event &amp; Location:</strong> {ev.event}
                                        </p>
                                    )}
                                    
                                    {ev.paragraphs && ev.paragraphs.map((para, paraIdx) => (
                                        <p key={paraIdx} className="p" style={{ textAlign: 'justify', marginBottom: '15px' }}>
                                            {para}
                                        </p>
                                    ))}

                                    {ev.details && (
                                        <>
                                            <strong style={{ color: '#8d2024', fontSize: '0.98rem', display: 'block', marginBottom: '8px' }}>Key Details:</strong>
                                            <ul style={{ listStyle: 'square', paddingLeft: '20px', margin: '0 0 20px 0' }}>
                                                {ev.details.map((detail, idx) => (
                                                    <li key={idx} style={{ fontSize: '0.98rem', marginBottom: '6px', color: '#1a1a1a' }}>{detail}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}

                                    {ev.video && (
                                        <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                                            <a 
                                                href={ev.video.url} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="btn btn--secondary" 
                                                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#8d2024', fontWeight: 'bold' }}
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <polygon points="10 8 16 12 10 16 10 8" />
                                                </svg>
                                                {ev.video.title}
                                            </a>
                                        </div>
                                    )}

                                    {/* Inline images for this event */}
                                    {ev.images && ev.images.length > 0 && (
                                        <div style={{ marginTop: '15px' }}>
                                            <div className="photo-archive-grid">
                                                {ev.images.map((imgSrc, imgIdx) => (
                                                    <button 
                                                        key={imgSrc} 
                                                        className="photo-archive-card"
                                                        onClick={() => openLightbox(ev.imageStartIndex + imgIdx)}
                                                        aria-label={`Open Event Photo ${imgIdx + 1}`}
                                                    >
                                                        <div className="photo-archive-card__frame">
                                                            <img 
                                                                src={imgSrc} 
                                                                alt={`Event Photo ${imgIdx + 1}`} 
                                                                className="photo-archive-card__img"
                                                                loading="lazy"
                                                            />
                                                            <div className="photo-archive-card__overlay">
                                                                <span className="photo-archive-card__zoom-icon">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                                        <circle cx="11" cy="11" r="8" />
                                                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                                                        <line x1="11" y1="8" x2="11" y2="14" />
                                                                        <line x1="8" y1="11" x2="14" y2="11" />
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </section>
                        ))}
                    </div>
                )}

                {/* CSGJ VOLUNTEER SECTIONS (Prologue Minimal Layout) */}
                {isCsgjVolunteer && (
                    <div className="csgj-volunteer-container-minimal">
                        <section className="block" style={{ paddingTop: 0, marginBottom: '30px' }}>
                            <div className="block__cap">
                                <span className="cap__title" style={{ fontSize: '1.25rem', fontFamily: 'Roboto Slab, serif', textTransform: 'none' }}>
                                    Join Our Volunteer Network
                                </span>
                            </div>
                            <div className="block__content">
                                {data.paragraphs && data.paragraphs.map((para, paraIdx) => (
                                    <p key={paraIdx} className="p" style={{ textAlign: 'justify', marginBottom: '20px' }}>
                                        {para}
                                    </p>
                                ))}

                                <div style={{ marginTop: '35px', padding: '25px', backgroundColor: '#fcfbf7', border: '1px solid #d4cbb3', borderRadius: '4px' }}>
                                    <h5 style={{ fontFamily: 'Roboto Slab, serif', fontSize: '1.15rem', color: '#8d2024', margin: '0 0 15px 0', fontWeight: '700' }}>
                                        For Volunteer Form Please Click Below:
                                    </h5>
                                    
                                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '25px' }}>
                                        {/* Download button */}
                                        <a 
                                            href={data.pdfUrl}
                                            download="volunteering-at-csgj.pdf"
                                            className="btn btn--primary"
                                            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: '#fff', fontWeight: 'bold', backgroundColor: '#8d2024', padding: '10px 18px', borderRadius: '4px', cursor: 'pointer' }}
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                <polyline points="7 10 12 15 17 10" />
                                                <line x1="12" y1="15" x2="12" y2="3" />
                                            </svg>
                                            Download Application Form
                                        </a>
                                    </div>

                                    {/* Document Preview Embed */}
                                    <div style={{ width: '100%', height: '700px', border: '1px solid #d4cbb3', overflow: 'hidden', borderRadius: '4px', backgroundColor: '#eee' }}>
                                        <iframe
                                            src={`${data.pdfUrl}#toolbar=1`}
                                            title="CSGJ Volunteer Application Form"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 'none' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}

                {/* CSGJ WINTER SCHOOL SECTIONS (Prologue Minimal Layout) */}
                {isCsgjWinterSchool && (
                    <div className="csgj-winter-school-container-minimal">
                        <section className="block" style={{ paddingTop: 0, marginBottom: '40px' }}>
                            <div className="block__cap">
                                <span className="cap__title" style={{ fontSize: '1.25rem', fontFamily: 'Roboto Slab, serif', textTransform: 'none' }}>
                                    Program Overview
                                </span>
                            </div>
                            <div className="block__content">
                                {data.paragraphs && data.paragraphs.map((para, paraIdx) => (
                                    <p key={paraIdx} className="p" style={{ textAlign: 'justify', marginBottom: '15px' }}>
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </section>

                        {/* 1. WINTER SCHOOL BROCHURES */}
                        <div className="block" style={{ paddingBottom: '10px' }}>
                            <div className="block__cap" style={{ marginBottom: '25px' }}>
                                <span className="cap__title" style={{ fontSize: '1.8rem', color: '#1a1512', fontFamily: 'Roboto Slab, serif', textTransform: 'none' }}>Winter School Brochures</span>
                            </div>
                        </div>

                        <section className="block" style={{ paddingTop: 0, marginBottom: '45px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px' }}>
                                {data.pdfs && data.pdfs.map((pdf) => (
                                    <div 
                                        key={pdf.id}
                                        style={{ 
                                            padding: '24px', 
                                            backgroundColor: '#fff', 
                                            border: '1px solid #e8e3d5', 
                                            borderRadius: '6px',
                                            boxShadow: '0 4px 12px rgba(26, 21, 18, 0.04)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            gap: '20px',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}
                                        className="csgj-pdf-card"
                                    >
                                        {/* Top red accent line */}
                                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', backgroundColor: '#8d2024' }}></div>

                                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                            {/* PDF File Icon with Folded Corner */}
                                            <div style={{ 
                                                position: 'relative', 
                                                width: '40px', 
                                                height: '52px', 
                                                backgroundColor: '#fcfbf7', 
                                                border: '1px solid #d4cbb3', 
                                                borderRadius: '3px',
                                                flexShrink: 0,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginTop: '2px'
                                            }}>
                                                {/* Folded corner */}
                                                <div style={{
                                                    position: 'absolute',
                                                    top: -1,
                                                    right: -1,
                                                    width: '12px',
                                                    height: '12px',
                                                    backgroundColor: '#fff',
                                                    borderLeft: '1px solid #d4cbb3',
                                                    borderBottom: '1px solid #d4cbb3',
                                                    borderBottomLeftRadius: '3px'
                                                }}></div>
                                                {/* PDF tag */}
                                                <span style={{ fontSize: '0.7rem', fontWeight: 'bold', color: '#8d2024', fontFamily: 'monospace', marginTop: '12px' }}>PDF</span>
                                            </div>

                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                                <span style={{ fontFamily: 'Roboto Slab, serif', fontSize: '1.05rem', color: '#1a1a1a', fontWeight: 'bold', lineHeight: '1.4' }}>
                                                    {pdf.title}
                                                </span>
                                                <span style={{ fontSize: '0.8rem', color: '#666' }}>Document Brochure</span>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            {/* Open inside the same page modal */}
                                            <button
                                                onClick={() => setActivePdf({ displayTitle: pdf.title, pdfUrl: pdf.url, isBinary: true })}
                                                className="btn btn--secondary"
                                                style={{ 
                                                    flex: 1,
                                                    display: 'inline-flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center',
                                                    gap: '6px', 
                                                    textDecoration: 'none', 
                                                    color: '#8d2024', 
                                                    fontWeight: 'bold', 
                                                    border: '1px solid #8d2024', 
                                                    padding: '8px 12px', 
                                                    borderRadius: '4px', 
                                                    backgroundColor: '#fff', 
                                                    cursor: 'pointer',
                                                    fontSize: '0.88rem'
                                                }}
                                            >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                    <circle cx="12" cy="12" r="3" />
                                                </svg>
                                                View Form
                                            </button>

                                            {/* Download button */}
                                            <a
                                                href={pdf.url}
                                                download={pdf.url.split('/').pop()}
                                                className="btn btn--primary"
                                                style={{ 
                                                    flex: 1,
                                                    display: 'inline-flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center',
                                                    gap: '6px', 
                                                    textDecoration: 'none', 
                                                    color: '#fff', 
                                                    fontWeight: 'bold', 
                                                    backgroundColor: '#8d2024', 
                                                    padding: '8px 12px', 
                                                    borderRadius: '4px', 
                                                    cursor: 'pointer',
                                                    fontSize: '0.88rem'
                                                }}
                                            >
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                    <polyline points="7 10 12 15 17 10" />
                                                    <line x1="12" y1="15" x2="12" y2="3" />
                                                </svg>
                                                Download
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 2. GALLERY */}
                        <div className="block" style={{ paddingTop: '20px', paddingBottom: '10px' }}>
                            <div className="block__cap" style={{ marginBottom: '25px' }}>
                                <span className="cap__title" style={{ fontSize: '1.8rem', color: '#1a1512', fontFamily: 'Roboto Slab, serif', textTransform: 'none' }}>Gallery</span>
                            </div>
                        </div>

                        <section className="block" style={{ paddingTop: 0 }}>
                            <div className="photo-archive-grid">
                                {data.images && data.images.map((imgSrc, imgIdx) => (
                                    <button 
                                        key={imgSrc} 
                                        className="photo-archive-card"
                                        onClick={() => openLightbox(imgIdx)}
                                        aria-label={`Open Winter School Photo ${imgIdx + 1}`}
                                    >
                                        <div className="photo-archive-card__frame">
                                            <img 
                                                src={imgSrc} 
                                                alt={`Winter School Photo ${imgIdx + 1}`} 
                                                className="photo-archive-card__img"
                                                loading="lazy"
                                            />
                                            <div className="photo-archive-card__overlay">
                                                <span className="photo-archive-card__zoom-icon">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <circle cx="11" cy="11" r="8" />
                                                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                                        <line x1="11" y1="8" x2="11" y2="14" />
                                                        <line x1="8" y1="11" x2="14" y2="11" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </section>
                    </div>
                )}

                {/* AUDIO VISUAL ARCHIVE FILM STRIP REEL */}
                {isAudioVisualArchive && (
                    <section className="block" style={{ paddingTop: 0 }}>
                        <div className="block__cap">
                            <span className="cap__title">Historical Audio-Visual Film Archive</span>
                        </div>
                        <div className="sd-film-container">
                            {data.videos && data.videos.map((video, index) => (
                                <div key={video.id} className="sd-film-frame">
                                    <div className="sd-film-frame__content">
                                        <div className="sd-film-frame__player-wrapper">
                                            <iframe 
                                                src={`https://www.youtube.com/embed/${video.youtubeId}`} 
                                                title={video.title} 
                                                className="sd-film-frame__iframe"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                        
                                        <div className="sd-film-frame__info">
                                            <span className="sd-film-frame__meta">LWM ARCHIVE  •  CALL NO: AV-{String(index + 1).padStart(2, '0')}</span>
                                            <h4 className="sd-film-frame__title">{video.title}</h4>
                                            <div className="sd-film-frame__stamp">ARCHIVAL RECORD</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* MONTHLY NEWSLETTERS GRID ARCHIVE */}
                {isNewsletters && (
                    <section className="block" style={{ paddingTop: 0 }}>
                        <div className="block__cap">
                            <span className="cap__title">Monthly Newsletter Releases</span>
                        </div>
                        <div className="sd-newsletter-grid" style={{ marginTop: '20px' }}>
                            {MOCK_NEWSLETTERS.map((item) => (
                                <div key={item.id} className="sd-news-card">
                                    <div className="sd-news-card__paper">
                                        <div className="sd-news-card__fold"></div>
                                        <div className="sd-news-card__header">
                                            <span className="sd-news-card__issue">{item.issue}</span>
                                            <span className="sd-news-card__date">{item.date}</span>
                                        </div>
                                        
                                        <div className="sd-news-card__cover">
                                            <img src={item.coverImage} alt={item.title} className="sd-news-card__img" />
                                        </div>
                                        
                                        <div className="sd-news-card__body">
                                            <h4 className="sd-news-card__title">{item.title}</h4>
                                            <p className="sd-news-card__desc">
                                                Official monthly report detailing museum collections, educational activities, and historical archives.
                                            </p>
                                        </div>
                                        
                                        <div className="sd-news-card__actions">
                                            <button 
                                                onClick={() => openPdfViewer({
                                                    isBinary: true,
                                                    pdfUrl: item.pdfUrl,
                                                    displayTitle: `${item.title} (${item.date})`,
                                                    pages: 1
                                                })}
                                                className="sd-news-card__btn sd-news-card__btn--read"
                                            >
                                                Read Issue
                                            </button>
                                            <a 
                                                href={item.pdfUrl} 
                                                download 
                                                className="sd-news-card__btn sd-news-card__btn--download"
                                            >
                                                Download
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* DYNAMIC PHOTO GALLERY */}
                {(isPublicPrograms || isReachoutPrograms || isOutreachPrograms || isDigitalThread || isOtherPublications || isPressReleases || isCsgjAbout) && (
                    <section className="block" style={{ paddingTop: 0 }}>
                        <div className="block__cap">
                            <span className="cap__title">
                                {isOtherPublications 
                                    ? "Publications Cover Gallery" 
                                    : (isPressReleases 
                                        ? "Press Release Archive (Newspaper Clippings)" 
                                        : (isCsgjAbout ? "Gallery" : "Photographic Record"))}
                            </span>
                        </div>
                        <div className={isCsgjAbout ? "photo-archive-grid sd-csgj-gallery-grid" : "photo-archive-grid"} style={{ marginTop: '20px' }}>
                            {activePhotos.map((photo, index) => (
                                <button
                                    key={photo.src}
                                    className={isPressReleases ? "photo-archive-card sd-news-cutting-card" : "photo-archive-card"}
                                    onClick={() => openLightbox(index)}
                                    aria-label={`Open ${photo.caption}`}
                                >
                                    <div className={isOtherPublications 
                                        ? "sd-publication-cover-frame" 
                                        : (isPressReleases ? "sd-news-cutting-frame" : "photo-archive-card__frame")}>
                                        <img
                                            src={photo.src}
                                            alt={photo.caption}
                                            className={isOtherPublications 
                                                ? "sd-publication-cover-img" 
                                                : (isPressReleases ? "sd-news-cutting-img" : "photo-archive-card__img")}
                                            loading="lazy"
                                        />
                                        <div className="photo-archive-card__overlay">
                                            <span className="photo-archive-card__zoom-icon">
                                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="11" cy="11" r="8" />
                                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                                    <line x1="11" y1="8" x2="11" y2="14" />
                                                    <line x1="8" y1="11" x2="14" y2="11" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    {(!isOtherPublications && !isPressReleases) && (
                                        <div className="photo-archive-card__caption">{photo.caption}</div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </section>
                )}

                {/* ACADEMIC PAPERS / PROCEEDINGS GRID */}
                {isInternationalConferences && (
                    <section className="block" style={{ paddingTop: 0 }}>
                        <div className="block__cap">
                            <span className="cap__title">Conference Proceedings</span>
                        </div>
                        <div className="pdf-grid">
                            {MOCK_CONFERENCE_PDFS.map((pdf) => (
                                <div className="pdf-card" key={pdf.id}>
                                    <div className="pdf-card__icon">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                            <polyline points="14 2 14 8 20 8" />
                                            <line x1="16" y1="13" x2="8" y2="13" />
                                            <line x1="16" y1="17" x2="8" y2="17" />
                                            <polyline points="10 9 9 9 8 9" />
                                        </svg>
                                    </div>
                                    <div className="pdf-card__title">{pdf.displayTitle}</div>
                                    <div className="pdf-card__filename">{pdf.title}</div>
                                    <div className="pdf-card__meta">
                                        <span><strong>Author:</strong> {pdf.author}</span>
                                        <span><strong>Published:</strong> {pdf.date}</span>
                                        <span><strong>File Size:</strong> {pdf.size} ({pdf.pages} Pages)</span>
                                    </div>
                                    <div className="pdf-card__actions">
                                        <button 
                                            className="pdf-card__btn pdf-card__btn--primary" 
                                            onClick={() => openPdfViewer(pdf)}
                                        >
                                            Read Online
                                        </button>
                                        <button 
                                            className="pdf-card__btn pdf-card__btn--secondary"
                                            onClick={() => triggerDownload(pdf)}
                                        >
                                            Download
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>

            {/* LIGHTBOX MODAL */}
            {lightboxIndex !== null && activePhotos.length > 0 && (
                <div
                    className="lightbox-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Photo lightbox"
                    onClick={(e) => e.target === e.currentTarget && closeLightbox()}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Zoom controls */}
                    <div className="lightbox-zoom-controls" onClick={(e) => e.stopPropagation()}>
                        <button onClick={handleZoomOut} disabled={zoomLevel <= 1}>−</button>
                        <span>{Math.round(zoomLevel * 100)}%</span>
                        <button onClick={handleZoomIn} disabled={zoomLevel >= 3}>+</button>
                    </div>

                    <button className="lightbox-modal__close" onClick={closeLightbox} aria-label="Close">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    <button className="lightbox-modal__prev" onClick={goPrev} aria-label="Previous photo">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    <div
                        className={`lightbox-modal__stage${zoomLevel > 1 ? ' zoomed' : ''}`}
                        ref={stageRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: zoomLevel > 1 ? 'flex-start' : 'center',
                            overflow: 'auto'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                margin: 'auto',
                                maxWidth: zoomLevel > 1 ? 'none' : '90vw',
                                maxHeight: zoomLevel > 1 ? 'none' : 'calc(100vh - 250px)'
                            }}
                        >
                            <img
                                key={lightboxIndex}
                                src={activePhotos[lightboxIndex].src}
                                alt={activePhotos[lightboxIndex].caption}
                                className="lightbox-modal__img"
                                draggable={false}
                                onDragStart={(e) => e.preventDefault()}
                                style={{
                                    height: `calc((100vh - 280px) * ${zoomLevel})`,
                                    width: 'auto',
                                    maxWidth: zoomLevel > 1 ? 'none' : '100%',
                                    maxHeight: zoomLevel > 1 ? 'none' : 'calc(100vh - 280px)',
                                    transition: 'height 0.15s ease'
                                }}
                            />
                            <div className="lightbox-modal__caption" style={{ marginTop: '15px' }}>
                                {activePhotos[lightboxIndex].caption}
                            </div>
                        </div>
                    </div>

                    <div className="lightbox-modal__dock">
                        <div className="lightbox-modal__counter">
                            Photo {lightboxIndex + 1} of {activePhotos.length}
                        </div>
                        <div className="lightbox-modal__filmstrip" ref={filmstripRef}>
                            {activePhotos.map((photo, index) => (
                                <button
                                    key={photo.src}
                                    ref={index === lightboxIndex ? activeThumbRef : null}
                                    className={`lightbox-modal__thumb${index === lightboxIndex ? ' lightbox-modal__thumb--active' : ''}`}
                                    onClick={() => setLightboxIndex(index)}
                                    aria-label={`Go to ${photo.caption}`}
                                >
                                    <img src={photo.src} alt={photo.caption} loading="lazy" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className="lightbox-modal__next" onClick={goNext} aria-label="Next photo">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                </div>
            )}

            {/* FULL SCREEN PDF DOCUMENT READER MODAL */}
            {activePdf !== null && (
                <div className="pdf-viewer-modal" role="dialog" aria-modal="true" aria-label="PDF Document Viewer">
                    {/* Top Header Bar */}
                    <div className="pdf-viewer-modal__topbar">
                        <div className="pdf-viewer-modal__title">{activePdf.displayTitle}</div>
                        
                        <div className="pdf-viewer-modal__controls">
                            {/* Zoom controls */}
                            {!activePdf.isBinary && (
                                <div className="pdf-viewer-modal__zoom">
                                    <button onClick={handlePdfZoomOut} disabled={pdfZoom <= 0.8}>−</button>
                                    <span>{Math.round(pdfZoom * 100)}%</span>
                                    <button onClick={handlePdfZoomIn} disabled={pdfZoom >= 1.5}>+</button>
                                </div>
                            )}
                            
                            {/* Page Indicator */}
                            {!activePdf.isBinary && (
                                <div style={{ fontSize: '0.85rem', color: '#c8c0a8' }}>
                                    Page {activePage + 1} of {activePdf.pages}
                                </div>
                            )}
                            
                            {/* Close button */}
                            <button className="pdf-viewer-modal__close" onClick={closePdfViewer} aria-label="Close Viewer">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Workspace wrapper */}
                    <div className="pdf-viewer-modal__workspace">
                        {activePdf.isBinary ? (
                            <div className="pdf-viewer-modal__stage" style={{ padding: '20px', background: '#2c2015', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <iframe 
                                    src={activePdf.pdfUrl} 
                                    title={activePdf.displayTitle} 
                                    style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px', flex: 1 }}
                                ></iframe>
                            </div>
                        ) : (
                            <>
                                {/* Outline Sidebar */}
                                <div className="pdf-viewer-modal__sidebar">
                                    <div className="pdf-viewer-modal__sidebar-title">Document Outline</div>
                                    {activePdf.content.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`pdf-viewer-modal__page-link${index === activePage ? ' pdf-viewer-modal__page-link--active' : ''}`}
                                            onClick={() => setActivePage(index)}
                                        >
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                                <polyline points="14 2 14 8 20 8" />
                                            </svg>
                                            Page {index + 1}
                                        </button>
                                    ))}
                                </div>

                                {/* Page Stage */}
                                <div className="pdf-viewer-modal__stage">
                                    {/* Previous Page Navigation */}
                                    {activePage > 0 && (
                                        <button 
                                            className="pdf-viewer-modal__nav pdf-viewer-modal__nav--prev"
                                            onClick={() => setActivePage(prev => prev - 1)}
                                            aria-label="Previous Page"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="15 18 9 12 15 6" />
                                            </svg>
                                        </button>
                                    )}

                                    {/* Paper sheet mimicking A4 */}
                                    <div 
                                        className="pdf-viewer-modal__sheet"
                                        style={{
                                            transform: `scale(${pdfZoom})`,
                                            transformOrigin: 'top center',
                                            marginBottom: pdfZoom > 1 ? `${(pdfZoom - 1) * 600}px` : '0px'
                                        }}
                                        dangerouslySetInnerHTML={{ __html: activePdf.content[activePage] }}
                                    />

                                    {/* Next Page Navigation */}
                                    {activePage < activePdf.pages - 1 && (
                                        <button 
                                            className="pdf-viewer-modal__nav pdf-viewer-modal__nav--next"
                                            onClick={() => setActivePage(prev => prev + 1)}
                                            aria-label="Next Page"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                        </button>
                                    )}
                                    
                                    {/* Mobile navigation row (if arrows are hidden/overlapped) */}
                                    <div className="pdf-viewer-modal__nav-row" style={{ display: 'none' }}>
                                        <button 
                                            className="pdf-card__btn pdf-card__btn--secondary" 
                                            disabled={activePage === 0}
                                            onClick={() => setActivePage(prev => prev - 1)}
                                        >
                                            Previous
                                        </button>
                                        <button 
                                            className="pdf-card__btn pdf-card__btn--primary" 
                                            disabled={activePage === activePdf.pages - 1}
                                            onClick={() => setActivePage(prev => prev + 1)}
                                        >
                                            Next Page
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
