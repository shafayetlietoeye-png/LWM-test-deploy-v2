import { activitiesData } from './activitiesData.js';
import { supportData } from './supportData.js';
import { visitData } from './visitData.js';
import { oralHistoryData } from './oralHistoryData.js';
import { objectDonorsData } from './objectDonorsData.js';

function stripHtml(html) {
  if (!html) return '';
  return String(html)
    .replace(/<[^>]*>?/gm, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

// Static Core Museum Pages
const staticPages = [
  {
    id: 'page-home',
    title: 'Liberation War Museum | মুক্তিযুদ্ধ জাদুঘর',
    category: 'history',
    categoryLabel: 'Home & Overview',
    breadcrumb: 'LWM > Home',
    url: '/',
    content: 'Liberation War Museum Dhaka Bangladesh. Preserving the memory of 1971 Liberation War, Bangladesh independence, genocide, freedom fighters, exhibitions, galleries, visiting hours, ticket purchase, citizen donations.',
    image: '/assets/header logo.svg',
    tags: ['home', 'lwm', 'mukti', 'jadughar', 'museum', 'dhaka', 'bangladesh', '1971']
  },
  {
    id: 'page-prologue',
    title: 'Museum Prologue',
    category: 'history',
    categoryLabel: 'Museum Story',
    breadcrumb: 'LWM > About > Prologue',
    url: '/prologue',
    content: 'The Liberation War Museum in Dhaka, Bangladesh was established in 1996. It commemorates the heroic struggle of the Bengali nation for their democratic and national rights. The struggle turned into an armed conflict following the genocide unleashed by the military rulers of Islamic Republic of Pakistan and culminated with the emergence of Bangladesh as a secular, democratic state in December 1971. Communal tensions between Hindus and Muslims, partition of India in 1947, 1970 elections, March 25 1971 genocide. Member of International Coalition of Sites of Conscience, American Alliance of Museums and ICOM.',
    image: null,
    tags: ['prologue', 'history', '1996', '1971', 'genocide', 'pakistan', 'secular', 'democracy', 'icom', 'sites of conscience']
  },
  {
    id: 'page-mission',
    title: 'Mission Statement',
    category: 'history',
    categoryLabel: 'Museum Story',
    breadcrumb: 'LWM > About > Mission Statement',
    url: '/mission-statement',
    content: 'The prime objective of the museum is to make the new generations aware about the aspirations for which their forefathers had fought and the spirit of inclusiveness and tolerance that has been the hallmark of Bengal. It encourages them to take a firm stand against violations of human rights and acts of genocide carried out in 1971. To inspire democratic values, human dignity, justice and national unity.',
    image: null,
    tags: ['mission', 'vision', 'objectives', 'human rights', 'tolerance', 'democracy', 'justice', 'values']
  },
  {
    id: 'page-initial-efforts',
    title: 'Initial Efforts (1996 Inception)',
    category: 'history',
    categoryLabel: 'Museum Story',
    breadcrumb: 'LWM > About > Initial Efforts',
    url: '/initial-efforts',
    content: 'Initial efforts of Liberation War Museum starting from a rented two-storied house at 5 Segunbagicha, Dhaka. Inaugurated on 22 March 1996 by the Board of Trustees. A unique citizens endeavor that began without government funding, relying entirely on public support, collections of relics from freedom fighters, martyr families and citizens.',
    image: null,
    tags: ['initial efforts', 'segunbagicha', '1996', 'march 22', 'trustees', 'citizens initiative']
  },
  {
    id: 'page-new-museum',
    title: 'New Museum Building (Agargaon Complex)',
    category: 'history',
    categoryLabel: 'Museum Architecture',
    breadcrumb: 'LWM > About > New Museum',
    url: '/new-museum',
    content: 'The iconic modern permanent building of Liberation War Museum located at Plot F11/A & F11/B, Sher-e-Bangla Nagar Civic Centre, Agargaon, Dhaka. Designed through a national architectural competition. Eco-friendly green building architecture, modern preservation laboratories, exhibition galleries, state-of-the-art auditorium, open-air amphitheater, and research archives.',
    image: null,
    tags: ['new museum', 'building', 'agargaon', 'sher-e-bangla nagar', 'architecture', 'auditorium', 'civic centre']
  },
  {
    id: 'page-nutshell',
    title: 'Museum in a Nutshell',
    category: 'history',
    categoryLabel: 'Exhibitions & Facilities',
    breadcrumb: 'LWM > About > Museum in a Nutshell',
    url: '/museum-in-a-nutshell',
    content: 'Museum in a Nutshell gives an overview of the four permanent exhibition galleries, temporary display spaces, archival storage, research facilities, conference rooms, library, museum shop and public amphitheater.',
    image: null,
    tags: ['nutshell', 'overview', 'facilities', 'galleries', 'library', 'amphitheater', 'museum shop']
  },
  {
    id: 'page-board-trustees',
    title: 'Board of Trustees',
    category: 'history',
    categoryLabel: 'Leadership',
    breadcrumb: 'LWM > About > Board of Trustees',
    url: '/board-of-trustees',
    content: 'Founder Board of Trustees of Liberation War Museum: H. Akku Chowdhury (Corporate Entrepreneur), Late Aly Zaker (Communications Expert, Actor, Cultural Activist), Asaduzzaman Noor, MP (Cultural Personality), Mofidul Haque (Writer and Publisher), Late Ziauddin Tariq Ali (Social Activist), Late Rabiul Husain (Architect & Poet), Sara Zaker (Social Activist & Media Personality), Dr. Sarwar Ali (Medical Professional & Social Activist).',
    image: '/assets/team/founder board of trustee/1.png',
    tags: ['board of trustees', 'akku chowdhury', 'aly zaker', 'asaduzzaman noor', 'mofidul haque', 'tariq ali', 'rabiul husain', 'sara zaker', 'sarwar ali']
  },
  {
    id: 'page-annual-speeches',
    title: 'Annual Memorial Speeches',
    category: 'history',
    categoryLabel: 'Speeches & Lectures',
    breadcrumb: 'LWM > About > Annual Speeches',
    url: '/annual-speeches',
    content: 'Annual memorial speeches and foundation lectures delivered by eminent international scholars, Nobel laureates, historians, legal experts and justice advocates on the occasion of the Liberation War Museum anniversary.',
    image: null,
    tags: ['annual speeches', 'memorial lecture', 'anniversary', 'scholars', 'foundation day']
  },
  {
    id: 'page-publications',
    title: 'Publications and Research Books',
    category: 'publications',
    categoryLabel: 'Publications',
    breadcrumb: 'LWM > About > Publications',
    url: '/publications',
    content: 'Liberation War Museum research publications, monographs, historical booklets, 1971 document compilations, genocide conference proceedings, educational booklets for schools and quarterly newsletters.',
    image: '/assets/about/Publications/publications gallary/196455.jpg',
    tags: ['publications', 'books', 'research', 'monographs', 'literature', 'documents', 'history books']
  },
  {
    id: 'page-projects-programs',
    title: 'Projects and Programs',
    category: 'activities',
    categoryLabel: 'Outreach & Programs',
    breadcrumb: 'LWM > About > Projects and Programs',
    url: '/projects-and-programs',
    content: 'Educational programs, mobile museum buses carrying artifacts to schools all over rural Bangladesh, teacher training workshops, student outreach, human rights and peace education camps.',
    image: '/assets/reachout-program/228041.jpg',
    tags: ['projects', 'programs', 'mobile museum', 'bus', 'outreach', 'schools', 'peace education']
  },
  {
    id: 'page-accreditations',
    title: 'Accreditations and Affiliations',
    category: 'history',
    categoryLabel: 'Affiliations',
    breadcrumb: 'LWM > About > Accreditations',
    url: '/accreditations-and-affiliations',
    content: 'International affiliations of Liberation War Museum: Founding member of the International Coalition of Sites of Conscience (ICSC), institutional member of the International Council of Museums (ICOM), and the American Alliance of Museums (AAM).',
    image: null,
    tags: ['accreditations', 'affiliations', 'icom', 'sites of conscience', 'american alliance of museums']
  },
  {
    id: 'page-ticket-information',
    title: 'Ticket Information & Admissions',
    category: 'visit',
    categoryLabel: 'Visit & Tickets',
    breadcrumb: 'LWM > Visit > Ticket Information',
    url: '/visit/ticket-information',
    content: 'Find ticket information, pricing, admission guidelines, and purchase tickets online through the eTicket portal. General admission fee is BDT 20 for domestic visitors, BDT 500 for international visitors. Free admission for children under 5 years, war veterans, and differently-abled individuals.',
    image: null,
    tags: ['ticket information', 'buy tickets', 'admission', 'ticket price', 'fee', 'entry', 'bdt 20', 'online booking']
  },
  {
    id: 'page-opening-hours',
    title: 'Opening Hours & Visitor Schedule',
    category: 'visit',
    categoryLabel: 'Visit & Tickets',
    breadcrumb: 'LWM > Visit > Opening Hours',
    url: '/visit/opening-hours',
    content: 'Visiting hours: Monday to Saturday 10:00 AM to 6:00 PM (Summer: March to September) and 10:00 AM to 5:00 PM (Winter: October to February). The museum remains closed on Sundays for weekly maintenance. Also closed on public government holidays.',
    image: null,
    tags: ['opening hours', 'visiting time', 'timing', 'schedule', 'sunday closed', '10 am', '6 pm']
  },
  {
    id: 'page-donate',
    title: 'Make a Donation & Support',
    category: 'donors',
    categoryLabel: 'Donors & Support',
    breadcrumb: 'LWM > Support > Donate',
    url: '/donate',
    content: 'Contribute to the Liberation War Museum. Donations can be sent to Muktijuddha Jadughar bank account at Mercantile Bank Limited Main Branch Dhaka (A/C No. 210 530 51), bKash merchant payment, online debit/credit card, or artifact contributions.',
    image: null,
    tags: ['donate', 'donation', 'support', 'bank account', 'bkash', 'mercantile bank', 'funding']
  },
  {
    id: 'page-object-donors',
    title: 'Object Donor List',
    category: 'donors',
    categoryLabel: 'Donors & Collections',
    breadcrumb: 'LWM > Support > Object Donors',
    url: '/support/donation/object-donors',
    content: 'Honor roll of citizens and families who donated historical objects, martyred freedom fighters personal belongings, blood-stained clothes, letters, weapons, diary notes, and artifacts to the Liberation War Museum.',
    image: null,
    tags: ['object donors', 'artifacts', 'donations', 'relics', 'personal effects', 'martyrs']
  },
  {
    id: 'page-archive-donors',
    title: 'Archive Donors',
    category: 'donors',
    categoryLabel: 'Donors & Collections',
    breadcrumb: 'LWM > Support > Archive Donors',
    url: '/support/donation/archive-donors',
    content: 'List of individuals and institutions who donated historical paper documents, wartime newspapers, audio recordings, video reels, and photographs of 1971 to the museum archive.',
    image: null,
    tags: ['archive donors', 'documents', 'audiovisual', 'photos', 'newspaper clippings']
  },
  {
    id: 'page-friends',
    title: 'Friends of Liberation War Museum',
    category: 'donors',
    categoryLabel: 'Community',
    breadcrumb: 'LWM > Support > Friends of LWM',
    url: '/support/community/friends',
    content: 'Friends of Liberation War Museum Bangladesh is a citizen community supporting educational programs, museum preservation, fundraising initiatives, and volunteer network.',
    image: null,
    tags: ['friends', 'community', 'patrons', 'volunteers', 'membership']
  },
  {
    id: 'page-on-this-day',
    title: 'On This Day in 1971',
    category: 'history',
    categoryLabel: '1971 Chronicle',
    breadcrumb: 'LWM > Explore > On This Day',
    url: '/on-this-day',
    content: 'Daily chronicle of the 1971 Liberation War: military maneuvers, Sector operations, genocide reports, heroic battles, diplomatic struggles, and political developments from March 1971 to December 16 1971.',
    image: null,
    tags: ['on this day', '1971', 'daily chronicle', 'sector commanders', 'battles', 'victory day']
  },
  {
    id: 'page-virtual-tour',
    title: '360° Virtual Tour',
    category: 'visit',
    categoryLabel: 'Virtual Tour',
    breadcrumb: 'LWM > Visit > Virtual Tour',
    url: '/virtual-tour',
    content: 'Experience the Liberation War Museum from anywhere in the world through high-definition 360-degree interactive virtual tour of all four permanent galleries and commemorative courtyards.',
    image: null,
    tags: ['virtual tour', '360', 'online visit', 'interactive', 'galleries']
  },
  {
    id: 'page-gallery-1',
    title: 'Gallery 1: Heritage and Struggles',
    category: 'history',
    categoryLabel: 'Museum Galleries',
    breadcrumb: 'LWM > Explore > Gallery 1',
    url: '/explore/gallery-1',
    content: 'Gallery 1 traces the early heritage of Bengal, archeological relics, anti-colonial struggles against British rule, the 1947 partition of India, the historic 1952 Language Movement (Ekushey February), and the 1966 Six-Point movement of Bangabandhu Sheikh Mujibur Rahman.',
    image: null,
    tags: ['gallery 1', 'heritage', 'struggles', 'language movement', '1952', 'six point', 'bangabandhu']
  },
  {
    id: 'page-gallery-2',
    title: 'Gallery 2: Rights and Sacrifices',
    category: 'history',
    categoryLabel: 'Museum Galleries',
    breadcrumb: 'LWM > Explore > Gallery 2',
    url: '/explore/gallery-2',
    content: 'Gallery 2 displays the mass uprising of 1969, the historic 1970 general elections, the non-cooperation movement, Bangabandhu 7th March speech, Operation Searchlight genocide on 25 March 1971, and declaration of independence.',
    image: null,
    tags: ['gallery 2', 'rights', 'sacrifices', '1970 elections', 'operation searchlight', 'march 25', 'genocide']
  },
  {
    id: 'page-gallery-3',
    title: 'Gallery 3: Battles and Friends',
    category: 'history',
    categoryLabel: 'Museum Galleries',
    breadcrumb: 'LWM > Explore > Gallery 3',
    url: '/explore/gallery-3',
    content: 'Gallery 3 portrays the heroic armed struggle of the Mukti Bahini (Freedom Fighters), 11 military sectors, guerrilla warfare, international solidarity movement, refugee camps in India, Concert for Bangladesh, and global support.',
    image: null,
    tags: ['gallery 3', 'battles', 'friends', 'mukti bahini', 'sectors', 'refugees', 'concert for bangladesh']
  },
  {
    id: 'page-gallery-4',
    title: 'Gallery 4: Victory and Values',
    category: 'history',
    categoryLabel: 'Museum Galleries',
    breadcrumb: 'LWM > Explore > Gallery 4',
    url: '/explore/gallery-4',
    content: 'Gallery 4 documents the joint command offensive, the brutal killing of martyred intellectuals on 14 December 1971, the unconditional surrender of Pakistani armed forces on 16 December 1971, and the founding fundamental principles of the 1972 Constitution.',
    image: null,
    tags: ['gallery 4', 'victory', 'values', 'surrender', '16 december', 'intellectuals', 'constitution']
  },
  {
    id: 'page-historical-sites',
    title: 'Historical Sites & Jalladkhana Killing Field',
    category: 'history',
    categoryLabel: 'Historical Sites',
    breadcrumb: 'LWM > Explore > Historical Sites',
    url: '/explore/historical-sites',
    content: 'Jalladkhana Killing Field Memorial at Mirpur Dhaka, excavated human remains, mass grave preservation, historical site memorial plaque "Lest We Forget", photographic documentation of 1971 killing fields.',
    image: '/assets/historical-site/jalladkhana-historical-site/143233.jpg',
    tags: ['jalladkhana', 'killing field', 'mirpur', 'mass grave', 'memorial', 'excavated remains']
  },
  {
    id: 'page-documents',
    title: '1971 Historical Documents Archive',
    category: 'history',
    categoryLabel: 'Historical Documents',
    breadcrumb: 'LWM > Explore > Documents',
    url: '/explore/documents',
    content: 'Archive of authentic 1971 wartime documents, military dispatches, radio transcripts, letters from freedom fighters, sector command directives, telegrams, and wartime declarations.',
    image: '/assets/documents/115132.jpg',
    tags: ['documents', 'wartime archives', 'dispatches', 'letters', 'declarations', 'transcripts']
  },
  {
    id: 'page-photo-archive',
    title: '1971 Photo Archive',
    category: 'history',
    categoryLabel: 'Photo Archive',
    breadcrumb: 'LWM > Explore > Photo Archive',
    url: '/explore/photo-archive',
    content: 'Rare and iconic photographic records of the 1971 Bangladesh Liberation War, freedom fighters in combat, civilian refugees, wartime destruction, surrender ceremony, and post-war reconstruction.',
    image: '/assets/photo%20archive/207668.jpg',
    tags: ['photo archive', 'photos', '1971 images', 'war photography', 'refugees', 'freedom fighters']
  },
  {
    id: 'page-struggle-pictorial',
    title: 'Struggle of Bangladesh: Pictorial History',
    category: 'history',
    categoryLabel: 'Pictorial History',
    breadcrumb: 'LWM > Explore > Struggle Pictorial',
    url: '/explore/struggle-of-bangladesh-pictorial',
    content: 'Visual photographic history documenting the Bengali people struggle for freedom, sovereignty, democracy, cultural expression, and dignity.',
    image: '/assets/struggle-of-bangladesh-pictorial/531428.jpg',
    tags: ['pictorial', 'struggle', 'visual history', 'photo collection']
  }
];

// Helper to extract items from activitiesData
function extractActivities() {
  const items = [];
  if (!activitiesData) return items;

  Object.entries(activitiesData).forEach(([key, act]) => {
    if (!act) return;
    const keyParts = key.split('/');
    const cat = keyParts[0] || 'activities';
    const sub = keyParts[1] || '';

    // Collect all paragraph texts
    let textBody = (act.desc || '') + ' ';
    if (Array.isArray(act.blocks)) {
      act.blocks.forEach((block) => {
        if (block.title) textBody += block.title + ' ';
        if (Array.isArray(block.paragraphs)) {
          block.paragraphs.forEach((p) => {
            textBody += stripHtml(p) + ' ';
          });
        }
      });
    }

    // Determine representative photo (only verified existing files)
    let repImage = null;
    if (key.includes('winter-school')) {
      repImage = '/assets/winter-school/132243.jpg';
    } else if (key.includes('certificate')) {
      repImage = '/assets/certificate-course/164205.jpg';
    } else if (key.includes('regular-public-programs')) {
      repImage = '/assets/regular-public-programs/242120.jpg';
    } else if (key.includes('reachout') || key.includes('outreach')) {
      repImage = '/assets/reachout-program/228041.jpg';
    }

    const title = act.title || sub.replace(/-/g, ' ').toUpperCase();
    const cleanContent = stripHtml(textBody);

    items.push({
      id: `act-${key.replace(/\//g, '-')}`,
      title: title,
      category: 'activities',
      categoryLabel: 'Activities & Programs',
      breadcrumb: `LWM > Activities > ${title}`,
      url: `/activities/${key}`,
      content: cleanContent,
      image: repImage,
      tags: ['activity', 'event', 'program', cat, sub, ...title.toLowerCase().split(/\s+/)]
    });
  });

  return items;
}

// Helper to extract items from supportData
function extractSupport() {
  const items = [];
  if (!supportData) return items;

  Object.entries(supportData).forEach(([key, sup]) => {
    if (!sup) return;
    let textBody = (sup.desc || '') + ' ';
    if (Array.isArray(sup.blocks)) {
      sup.blocks.forEach((block) => {
        if (block.title) textBody += block.title + ' ';
        if (Array.isArray(block.paragraphs)) {
          block.paragraphs.forEach((p) => {
            textBody += stripHtml(p) + ' ';
          });
        }
      });
    }

    const title = sup.title || key;
    const cleanContent = stripHtml(textBody);

    items.push({
      id: `sup-${key.replace(/\//g, '-')}`,
      title: title,
      category: 'donors',
      categoryLabel: 'Donors & Support',
      breadcrumb: `LWM > Support > ${title}`,
      url: `/support/${key}`,
      content: cleanContent,
      image: null,
      tags: ['support', 'donation', 'community', ...title.toLowerCase().split(/\s+/)]
    });
  });

  return items;
}

// Helper to extract items from visitData
function extractVisit() {
  const items = [];
  if (!visitData) return items;

  Object.entries(visitData).forEach(([key, vis]) => {
    if (!vis) return;
    let textBody = (vis.desc || '') + ' ';
    if (Array.isArray(vis.blocks)) {
      vis.blocks.forEach((block) => {
        if (block.title) textBody += block.title + ' ';
        if (Array.isArray(block.paragraphs)) {
          block.paragraphs.forEach((p) => {
            textBody += stripHtml(p) + ' ';
          });
        }
      });
    }

    const title = vis.title || key;
    const cleanContent = stripHtml(textBody);

    items.push({
      id: `vis-${key.replace(/\//g, '-')}`,
      title: title,
      category: 'visit',
      categoryLabel: 'Visit & Tickets',
      breadcrumb: `LWM > Visit > ${title}`,
      url: `/visit/${key}`,
      content: cleanContent,
      image: null,
      tags: ['visit', 'ticket', 'hours', 'guidelines', ...title.toLowerCase().split(/\s+/)]
    });
  });

  return items;
}

// Helper to extract Oral History stories (Bengali rich texts)
function extractOralHistory() {
  const items = [];
  if (!oralHistoryData) return items;

  Object.entries(oralHistoryData).forEach(([distKey, distData]) => {
    const district = distData.districtName || distKey;
    const districtEn = distData.districtNameEn || distKey;

    if (Array.isArray(distData.stories)) {
      distData.stories.forEach((story, idx) => {
        const paras = (story.paragraphs || []).map(p => stripHtml(p)).join(' ');
        const narrator = story.narrator?.name ? `কথক: ${story.narrator.name}` : '';
        const collector = story.collector?.name ? `সংগ্রাহক: ${story.collector.name}` : '';

        const fullContent = `${story.title} জেলা: ${district} (${districtEn}). ${narrator} ${collector}. ${paras}`;

        items.push({
          id: `oral-${distKey}-${story.id || idx}`,
          title: `${story.title} (${district})`,
          category: 'oral_history',
          categoryLabel: 'Oral History / মৌখিক ইতিহাস',
          breadcrumb: `LWM > Explore > Oral History > ${district}`,
          url: '/explore/oral-history',
          content: fullContent,
          image: null,
          tags: ['oral history', 'মৌখিক ইতিহাস', district, districtEn, story.title, narrator, collector]
        });
      });
    }
  });

  return items;
}

// Helper to index representative Object Donors
function extractObjectDonors() {
  const items = [];
  if (!Array.isArray(objectDonorsData)) return items;

  objectDonorsData.forEach((group) => {
    if (!Array.isArray(group.donors)) return;

    group.donors.forEach((donor, idx) => {
      const donationsText = (donor.donations || []).map(d => stripHtml(d)).join('; ');
      const content = `Donor: ${donor.name}. Donated historical items: ${donationsText}`;

      items.push({
        id: `donor-${group.letter}-${idx}`,
        title: `Donor: ${donor.name}`,
        category: 'donors',
        categoryLabel: 'Object Donors',
        breadcrumb: `LWM > Support > Object Donors > ${donor.name}`,
        url: '/support/donation/object-donors',
        content: content,
        image: null,
        tags: ['object donor', 'donor', donor.name.toLowerCase(), 'artifact', 'relic']
      });
    });
  });

  return items;
}

// Build consolidated searchable index
export function getAllSearchItems() {
  const all = [
    ...staticPages,
    ...extractActivities(),
    ...extractSupport(),
    ...extractVisit(),
    ...extractOralHistory(),
    ...extractObjectDonors()
  ];
  return all;
}
