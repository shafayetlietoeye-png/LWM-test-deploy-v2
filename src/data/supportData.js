const membershipData = {
  title: 'Donations and Memberships',
  desc: 'Support the museum through memberships, bank transfers, or physical artifact contributions.',
  blocks: [
    {
      title: 'Donations and Memberships',
      paragraphs: [
        'Membership fees and other donations can be sent to our office or directly to accounts Muktijuddha Jadughar, A/C No. 210 530 51 of Mercantile Bank Limited, Main Branch, Dhaka.',
        'Members receive a Membership Card allowing free entrance to the museum, invitation to museum programmes and museum publications. The name of Sponsor Member and Charter Members appear at the museum entrance and they receive the Liberation War Museum crest.'
      ],
      cta: {
        label: 'Make A Donation',
        link: '/donate'
      }
    },
    {
      title: 'Object Collections',
      paragraphs: [
        'The main assets of the museum are objects relating to the Bengali nation’s struggle for democracy and national rights and liberation war that led to the emergence of independent Bangladesh. If you have in your possession or have knowledge of where such objects could be available please inform our office at your convenience. Such objects will enrich the display and the archive of LWM.'
      ],
      cta: {
        label: 'Donate an Object',
        link: '/support/donation/object-donors'
      }
    },
    {
      title: 'Other Supports',
      paragraphs: [
        '<strong>Professional Expertise:</strong> The Museum welcomes all professional support for improving museum displays and programs. For instance ‘International Consortium for Energy Development’ helped the museum with solar energy to cut down electricity costs.',
        '<strong>Programme Support:</strong> This can be in the form of project financing e.g. Freedom Foundation in Student’s Outreach Program and Manusher Jonno (Care Bangladesh fund) in upholding liberation history and promoting Human Rights and Peace Education for Students. The museum also welcomes your suggestions and help for further improving its existing programs.',
        '<strong>Exchange Program:</strong> Liberation War Museum is interested in building partnerships with organizations, institutions and individuals with similar objectives through exchange of views and information.'
      ]
    }
  ]
};

export const supportData = {
  'donation/all-donors': {
    title: 'All Donors',
    desc: 'We express our deepest gratitude to the thousands of citizens, institutions, and organizations whose generous contributions sustain the museum.',
    blocks: [
      {
        title: 'Community & Citizen Funding',
        paragraphs: [
          'The Liberation War Museum is a unique citizens\' initiative. It was built and is maintained through the collective contributions of people from all walks of life. From school students donating their pocket money to major philanthropic foundations, every donation helps preserve our heritage.',
          'A complete list of our general donors, corporate partners, and institutional sponsors is updated annually and displayed in our digital roll of honor at the museum lobby.'
        ]
      }
    ]
  },
  'donation/object-donors': {
    title: 'Object Donor List',
    desc: 'Honoring the families and individuals who have donated historical artifacts, letters, and personal effects of the 1971 martyrs.',
    blocks: [
      {
        title: 'Preserving Tangible History',
        paragraphs: [
          'The core of the museum\'s collection comprises artifacts donated by the citizens of Bangladesh. These include diaries, blood-stained clothes, letters written to loved ones, operational weapons, and rare photographs of the war.',
          'We maintain a meticulous record of every object donor who has entrusted us with their family heirlooms to ensure they are preserved for future generations.'
        ]
      }
    ]
  },
  'donation/archive-donors': {
    title: 'Archive Donors',
    desc: 'Recognizing those who have contributed critical historical documents, government files, and media footage to our archives.',
    blocks: [
      {
        title: 'Documentary Heritage Archives',
        paragraphs: [
          'Our archives hold thousands of rare historical papers, newspaper clippings, military telegrams, and audio-visual recordings. These documents have been contributed by researchers, journalists, and international allies.',
          'These archival donations form the foundation of our research center, enabling scholars to compile the definitive history of the 1971 genocide.'
        ]
      }
    ]
  },
  'campaigns/leaflet': {
    title: 'Campaign Leaflets',
    desc: 'Access our informative leaflets, brochures, and print campaign materials raising awareness for museum funding and artifact preservation.',
    blocks: [
      {
        title: 'Print Campaign Materials',
        paragraphs: [
          'The museum publishes brochures and leaflets to keep the public informed about our preservation campaigns, fundraising drives, and traveling museum programs.',
          'You can download digital copies of our current leaflets to share with your school, college, or community group, helping spread awareness about our mission.'
        ]
      }
    ]
  },
  'campaigns/tvc': {
    title: 'TVC & Video Campaigns',
    desc: 'Watch our television commercials, documentary promos, and digital video campaigns raising awareness for the museum\'s activities.',
    blocks: [
      {
        title: 'Audio-Visual Awareness Campaigns',
        paragraphs: [
          'The museum produces television commercials (TVCs) and digital video campaigns to appeal for public support, artifact donations, and volunteer engagement.',
          'Our video campaigns feature testimonies of freedom fighters and highlights of our educational initiatives, showing how your support directly impacts young minds.'
        ]
      }
    ]
  },
  'community/friends': {
    title: 'Friends of Liberation War Museum',
    desc: 'Join the global network of volunteers, cultural activists, and friends supporting our mission.',
    blocks: [
      {
        title: 'Friends of LWM Bangladesh',
        paragraphs: [
          'The "Friends of Liberation War Museum" is a voluntary organization of citizens dedicated to promoting the museum\'s values. They organize cultural events, raise funds, and assist in regional school programs.',
          'Members of the Friends network act as ambassadors of the museum, ensuring that the progressive and secular spirit of 1971 remains vibrant in their local communities.'
        ]
      }
    ]
  },
  'membership': membershipData,
  'membership/overview': membershipData
};
