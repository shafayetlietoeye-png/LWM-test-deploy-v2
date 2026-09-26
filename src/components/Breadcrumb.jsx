import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Fallback category destinations for any breadcrumb trail
export const DEFAULT_CATEGORY_LINKS = {
  "About": "/prologue",
  "Explore": "/explore/gallery-1",
  "Activities": "/activities/events",
  "Support": "/support/membership/overview",
  "Visit": "/visit/ticket-information",
  "Museum Story": "/museum-story",
  "Museum Galleries": "/explore/gallery-1",
  "Bangladesh & Liberation War": "/explore/bengalis-and-bengal",
  "Museum Experience": "/virtual-tour",
  "Archives & Resources": "/explore/documents",
  "Programs & Conferences": "/activities/programs/regular-public-programs",
  "Awards": "/activities/awards/memorial-award",
  "Exhibitions": "/activities/exhibitions/digital-thread",
  "Publications": "/publications",
  "Media": "/activities/media/newsletters",
  "The Center for the Study of Genocide and Justice (CSGJ)": "/activities/csgj/about",
  "CSGJ": "/activities/csgj/about",
  "Administrative": "/activities/administrative/rfqs",
  "Donation": "/donate",
  "Campaigns": "/support/campaigns/fund-collection-campaign",
  "Fund Collection Campaign": "/support/campaigns/fund-collection-campaign",
  "Community": "/support/community/friends",
  "Tickets": "/visit/ticket-information",
  "Ticket Information": "/visit/ticket-information"
};

// Comprehensive path-to-breadcrumb hierarchy mapping
// Every breadcrumb level is fully clickable and navigable.
export const BREADCRUMB_MAP = {
  "/initial-efforts": [
    {
      "label": "About",
      "to": "/prologue"
    },
    {
      "label": "Museum Story",
      "to": "/museum-story"
    },
    {
      "label": "Initial Efforts",
      "to": "/initial-efforts"
    }
  ],
  "/new-museum": [
    {
      "label": "About",
      "to": "/prologue"
    },
    {
      "label": "Museum Story",
      "to": "/museum-story"
    },
    {
      "label": "New Museum",
      "to": "/new-museum"
    }
  ],
  "/museum-in-a-nutshell": [
    {
      "label": "About",
      "to": "/prologue"
    },
    {
      "label": "Museum Story",
      "to": "/museum-story"
    },
    {
      "label": "Museum in a Nutshell",
      "to": "/museum-in-a-nutshell"
    }
  ],
  "/explore/gallery-1": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Museum Galleries",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Gallery 1: Heritage and Struggles",
      "to": "/explore/gallery-1"
    }
  ],
  "/explore/gallery-2": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Museum Galleries",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Gallery 2: Rights and Sacrifices",
      "to": "/explore/gallery-2"
    }
  ],
  "/explore/gallery-3": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Museum Galleries",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Gallery 3: Battles and Friends",
      "to": "/explore/gallery-3"
    }
  ],
  "/explore/gallery-4": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Museum Galleries",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Gallery 4: Victory and Values",
      "to": "/explore/gallery-4"
    }
  ],
  "/explore/bengalis-and-bengal": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Bangladesh & Liberation War",
      "to": "/explore/bengalis-and-bengal"
    },
    {
      "label": "Bengalis and Bengal",
      "to": "/explore/bengalis-and-bengal"
    }
  ],
  "/explore/history-of-bangladesh": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Bangladesh & Liberation War",
      "to": "/explore/bengalis-and-bengal"
    },
    {
      "label": "History of Bangladesh",
      "to": "/explore/history-of-bangladesh"
    }
  ],
  "/explore/emergence-of-bangladesh": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Bangladesh & Liberation War",
      "to": "/explore/bengalis-and-bengal"
    },
    {
      "label": "Emergence of Bangladesh",
      "to": "/explore/emergence-of-bangladesh"
    }
  ],
  "/explore/proclamation-of-independence": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Bangladesh & Liberation War",
      "to": "/explore/bengalis-and-bengal"
    },
    {
      "label": "Proclamation of Independence",
      "to": "/explore/proclamation-of-independence"
    }
  ],
  "/explore/liberation-forces-and-commanders": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Bangladesh & Liberation War",
      "to": "/explore/bengalis-and-bengal"
    },
    {
      "label": "Liberation Armed Forces and Sector Commanders",
      "to": "/explore/liberation-forces-and-commanders"
    }
  ],
  "/explore/liberation-war-forces": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Bangladesh & Liberation War",
      "to": "/explore/bengalis-and-bengal"
    },
    {
      "label": "Liberation War Forces",
      "to": "/explore/liberation-war-forces"
    }
  ],
  "/explore/evolution-of-principles-1972": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Bangladesh & Liberation War",
      "to": "/explore/bengalis-and-bengal"
    },
    {
      "label": "Evolution of Fundamental Principles of 1972",
      "to": "/explore/evolution-of-principles-1972"
    }
  ],
  "/explore/concert-for-bangladesh": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Bangladesh & Liberation War",
      "to": "/explore/bengalis-and-bengal"
    },
    {
      "label": "Concert for Bangladesh and other Cultural Activities",
      "to": "/explore/concert-for-bangladesh"
    }
  ],
  "/virtual-tour": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Museum Experience",
      "to": "/virtual-tour"
    },
    {
      "label": "Virtual Tour",
      "to": "/virtual-tour"
    }
  ],
  "/explore/museum-map": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Museum Experience",
      "to": "/virtual-tour"
    },
    {
      "label": "Museum Map",
      "to": "/explore/museum-map"
    }
  ],
  "/explore/facilities-and-amenities": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Museum Experience",
      "to": "/virtual-tour"
    },
    {
      "label": "Facilities and Amenities",
      "to": "/explore/facilities-and-amenities"
    }
  ],
  "/facilities-and-amenities": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Museum Experience",
      "to": "/virtual-tour"
    },
    {
      "label": "Facilities and Amenities",
      "to": "/facilities-and-amenities"
    }
  ],
  "/facilities-amenities": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Museum Experience",
      "to": "/virtual-tour"
    },
    {
      "label": "Facilities and Amenities",
      "to": "/facilities-amenities"
    }
  ],
  "/explore/library": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Museum Experience",
      "to": "/virtual-tour"
    },
    {
      "label": "Library",
      "to": "/explore/library"
    }
  ],
  "/explore/kiosk": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Museum Experience",
      "to": "/virtual-tour"
    },
    {
      "label": "Kiosk",
      "to": "/explore/kiosk"
    }
  ],
  "/explore/exhibition-gallery": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Museum Experience",
      "to": "/virtual-tour"
    },
    {
      "label": "Exhibition Gallery",
      "to": "/explore/exhibition-gallery"
    }
  ],
  "/explore/cafes": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Museum Experience",
      "to": "/virtual-tour"
    },
    {
      "label": "Cafes",
      "to": "/explore/cafes"
    }
  ],
  "/explore/documents": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Archives & Resources",
      "to": "/explore/documents"
    },
    {
      "label": "Documents",
      "to": "/explore/documents"
    }
  ],
  "/on-this-day": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Archives & Resources",
      "to": "/explore/documents"
    },
    {
      "label": "On This Day in 1971",
      "to": "/on-this-day"
    }
  ],
  "/explore/oral-history": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Archives & Resources",
      "to": "/explore/documents"
    },
    {
      "label": "Oral History",
      "to": "/explore/oral-history"
    }
  ],
  "/annual-speeches": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Archives & Resources",
      "to": "/explore/documents"
    },
    {
      "label": "Annual Speeches",
      "to": "/annual-speeches"
    }
  ],
  "/explore/audio-visual-archive": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Archives & Resources",
      "to": "/explore/documents"
    },
    {
      "label": "Audio Visual Archive",
      "to": "/explore/audio-visual-archive"
    }
  ],
  "/explore/historical-sites": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Archives & Resources",
      "to": "/explore/documents"
    },
    {
      "label": "Historical Sites",
      "to": "/explore/historical-sites"
    }
  ],
  "/explore/photo-archive": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Archives & Resources",
      "to": "/explore/documents"
    },
    {
      "label": "Photo Archive",
      "to": "/explore/photo-archive"
    }
  ],
  "/explore/struggle-of-bangladesh-pictorial": [
    {
      "label": "Explore",
      "to": "/explore/gallery-1"
    },
    {
      "label": "Archives & Resources",
      "to": "/explore/documents"
    },
    {
      "label": "Struggle of Bangladesh: Pictorial",
      "to": "/explore/struggle-of-bangladesh-pictorial"
    }
  ],
  "/activities/programs/regular-public-programs": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "Programs & Conferences",
      "to": "/activities/programs/regular-public-programs"
    },
    {
      "label": "Regular Public Programs",
      "to": "/activities/programs/regular-public-programs"
    }
  ],
  "/activities/programs/school-programs": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "Programs & Conferences",
      "to": "/activities/programs/regular-public-programs"
    },
    {
      "label": "School Programs",
      "to": "/activities/programs/school-programs"
    }
  ],
  "/activities/programs/reachout-programs": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "Programs & Conferences",
      "to": "/activities/programs/regular-public-programs"
    },
    {
      "label": "Reachout Programs",
      "to": "/activities/programs/reachout-programs"
    }
  ],
  "/activities/programs/outreach-programs": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "Programs & Conferences",
      "to": "/activities/programs/regular-public-programs"
    },
    {
      "label": "Outreach Programs",
      "to": "/activities/programs/outreach-programs"
    }
  ],
  "/activities/programs/international-conferences": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "Programs & Conferences",
      "to": "/activities/programs/regular-public-programs"
    },
    {
      "label": "International Conferences",
      "to": "/activities/programs/international-conferences"
    }
  ],
  "/activities/awards/memorial-award": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "Awards",
      "to": "/activities/awards/memorial-award"
    },
    {
      "label": "Memorial Award (বজলুর রহমান স্মৃতিপদক)",
      "to": "/activities/awards/memorial-award"
    }
  ],
  "/activities/exhibitions/digital-thread": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "Exhibitions",
      "to": "/activities/exhibitions/digital-thread"
    },
    {
      "label": "Digital Thread Exhibit",
      "to": "/activities/exhibitions/digital-thread"
    }
  ],
  "/activities/exhibitions/liberation-docfest": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "Exhibitions",
      "to": "/activities/exhibitions/digital-thread"
    },
    {
      "label": "Liberation Docfest Bangladesh",
      "to": "/activities/exhibitions/liberation-docfest"
    }
  ],
  "/activities/programs/liberation-docfest": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "Exhibitions",
      "to": "/activities/exhibitions/digital-thread"
    },
    {
      "label": "Liberation Docfest Bangladesh",
      "to": "/activities/programs/liberation-docfest"
    }
  ],
  "/activities/publications/sultanas-dream": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "Publications",
      "to": "/publications"
    },
    {
      "label": "Sultana's Dream",
      "to": "/activities/publications/sultanas-dream"
    }
  ],
  "/activities/publications/other-publications": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "Publications",
      "to": "/publications"
    },
    {
      "label": "Other Notable Publications",
      "to": "/activities/publications/other-publications"
    }
  ],
  "/activities/media/newsletters": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "Media",
      "to": "/activities/media/newsletters"
    },
    {
      "label": "Newsletters",
      "to": "/activities/media/newsletters"
    }
  ],
  "/activities/media/press-coverage": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "Media",
      "to": "/activities/media/newsletters"
    },
    {
      "label": "Press Coverage",
      "to": "/activities/media/press-coverage"
    }
  ],
  "/activities/media/press-releases": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "Media",
      "to": "/activities/media/newsletters"
    },
    {
      "label": "Press Coverage",
      "to": "/activities/media/press-releases"
    }
  ],
  "/activities/media/advertisements": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "Media",
      "to": "/activities/media/newsletters"
    },
    {
      "label": "Audio Visual Archive",
      "to": "/activities/media/advertisements"
    }
  ],
  "/activities/csgj/about": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "The Center for the Study of Genocide and Justice (CSGJ)",
      "to": "/activities/csgj/about"
    },
    {
      "label": "About CSGJ",
      "to": "/activities/csgj/about"
    }
  ],
  "/activities/csgj/seminars": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "The Center for the Study of Genocide and Justice (CSGJ)",
      "to": "/activities/csgj/about"
    },
    {
      "label": "Seminar and Webinar",
      "to": "/activities/csgj/seminars"
    }
  ],
  "/activities/csgj/research": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "The Center for the Study of Genocide and Justice (CSGJ)",
      "to": "/activities/csgj/about"
    },
    {
      "label": "Research and Publications",
      "to": "/activities/csgj/research"
    }
  ],
  "/activities/csgj/certificate-course": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "The Center for the Study of Genocide and Justice (CSGJ)",
      "to": "/activities/csgj/about"
    },
    {
      "label": "Certificate Course",
      "to": "/activities/csgj/certificate-course"
    }
  ],
  "/activities/csgj/exchange-program": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "The Center for the Study of Genocide and Justice (CSGJ)",
      "to": "/activities/csgj/about"
    },
    {
      "label": "Voluntary Exchange Program",
      "to": "/activities/csgj/exchange-program"
    }
  ],
  "/activities/csgj/volunteer": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "The Center for the Study of Genocide and Justice (CSGJ)",
      "to": "/activities/csgj/about"
    },
    {
      "label": "Volunteer at CSGJ",
      "to": "/activities/csgj/volunteer"
    }
  ],
  "/activities/csgj/winter-school": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "The Center for the Study of Genocide and Justice (CSGJ)",
      "to": "/activities/csgj/about"
    },
    {
      "label": "Winter School",
      "to": "/activities/csgj/winter-school"
    }
  ],
  "/activities/administrative/rfqs": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "Administrative",
      "to": "/activities/administrative/rfqs"
    },
    {
      "label": "RFQs",
      "to": "/activities/administrative/rfqs"
    }
  ],
  "/activities/administrative/venue-hire": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "Administrative",
      "to": "/activities/administrative/rfqs"
    },
    {
      "label": "Venue hire",
      "to": "/activities/administrative/venue-hire"
    }
  ],
  "/activities/administrative/citizen-charter": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "Administrative",
      "to": "/activities/administrative/rfqs"
    },
    {
      "label": "Citizen Charter",
      "to": "/activities/administrative/citizen-charter"
    }
  ],
  "/activities/administrative/integrity-action-plan": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "Administrative",
      "to": "/activities/administrative/rfqs"
    },
    {
      "label": "Strategic Action Plan for Integrity",
      "to": "/activities/administrative/integrity-action-plan"
    }
  ],
  "/activities/administrative/purchase-plan": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "Administrative",
      "to": "/activities/administrative/rfqs"
    },
    {
      "label": "Annual Purchase Plan",
      "to": "/activities/administrative/purchase-plan"
    }
  ],
  "/activities/administrative/performance-report": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "Administrative",
      "to": "/activities/administrative/rfqs"
    },
    {
      "label": "Annual Performance Report",
      "to": "/activities/administrative/performance-report"
    }
  ],
  "/activities/administrative/audit-reports": [
    {
      "label": "Activities",
      "to": "/activities/events"
    },
    {
      "label": "Administrative",
      "to": "/activities/administrative/rfqs"
    },
    {
      "label": "Audit Reports",
      "to": "/activities/administrative/audit-reports"
    }
  ],
  "/donate": [
    {
      "label": "Support",
      "to": "/support/membership/overview"
    },
    {
      "label": "Donation",
      "to": "/donate"
    },
    {
      "label": "Make a Donation",
      "to": "/donate"
    }
  ],
  "/support/membership/overview": [
    {
      "label": "Support",
      "to": "/support/membership/overview"
    },
    {
      "label": "Donations and Memberships",
      "to": "/support/membership/overview"
    }
  ],
  "/support/membership": [
    {
      "label": "Support",
      "to": "/support/membership/overview"
    },
    {
      "label": "Donations and Memberships",
      "to": "/support/membership/overview"
    }
  ],
  "/support/donation/all-donors": [
    {
      "label": "Support",
      "to": "/support/membership/overview"
    },
    {
      "label": "Donation",
      "to": "/donate"
    },
    {
      "label": "All Donors",
      "to": "/support/donation/all-donors"
    }
  ],
  "/support/donation/object-donors": [
    {
      "label": "Support",
      "to": "/support/membership/overview"
    },
    {
      "label": "Donation",
      "to": "/donate"
    },
    {
      "label": "Object Donor List",
      "to": "/support/donation/object-donors"
    }
  ],
  "/support/donation/archive-donors": [
    {
      "label": "Support",
      "to": "/support/membership/overview"
    },
    {
      "label": "Donation",
      "to": "/donate"
    },
    {
      "label": "Archive Donors",
      "to": "/support/donation/archive-donors"
    }
  ],
  "/support/campaigns": [
    {
      "label": "Support",
      "to": "/donate"
    },
    {
      "label": "Campaigns",
      "to": "/support/campaigns/fund-collection-campaign"
    },
    {
      "label": "Fund Collection Campaign",
      "to": "/support/campaigns/fund-collection-campaign"
    }
  ],
  "/support/campaigns/fund-collection-campaign": [
    {
      "label": "Support",
      "to": "/donate"
    },
    {
      "label": "Campaigns",
      "to": "/support/campaigns/fund-collection-campaign"
    },
    {
      "label": "Fund Collection Campaign",
      "to": "/support/campaigns/fund-collection-campaign"
    }
  ],
  "/support/campaigns/leaflet": [
    {
      "label": "Support",
      "to": "/donate"
    },
    {
      "label": "Campaigns",
      "to": "/support/campaigns/fund-collection-campaign"
    },
    {
      "label": "Fund Collection Campaign",
      "to": "/support/campaigns/fund-collection-campaign"
    }
  ],
  "/support/campaigns/tvc": [
    {
      "label": "Support",
      "to": "/donate"
    },
    {
      "label": "Campaigns",
      "to": "/support/campaigns/fund-collection-campaign"
    },
    {
      "label": "Fund Collection Campaign",
      "to": "/support/campaigns/fund-collection-campaign"
    }
  ],
  "/support/community/friends": [
    {
      "label": "Support",
      "to": "/support/membership/overview"
    },
    {
      "label": "Community",
      "to": "/support/community/friends"
    },
    {
      "label": "Friends of Liberation War Museum Bangladesh",
      "to": "/support/community/friends"
    }
  ],
  "/visit/ticket-information": [
    {
      "label": "Visit",
      "to": "/visit/ticket-information"
    },
    {
      "label": "Ticket Information",
      "to": "/visit/ticket-information"
    }
  ],
  "/visit/tickets": [
    {
      "label": "Visit",
      "to": "/visit/ticket-information"
    },
    {
      "label": "Ticket Information",
      "to": "/visit/ticket-information"
    }
  ],
  "/visit/tickets/buy": [
    {
      "label": "Visit",
      "to": "/visit/ticket-information"
    },
    {
      "label": "Ticket Information",
      "to": "/visit/ticket-information"
    }
  ],
  "/visit/tickets/information": [
    {
      "label": "Visit",
      "to": "/visit/ticket-information"
    },
    {
      "label": "Ticket Information",
      "to": "/visit/ticket-information"
    }
  ],
  "/visit/plan-your-visit": [
    {
      "label": "Visit",
      "to": "/visit/ticket-information"
    },
    {
      "label": "Plan Your Visit",
      "to": "/visit/plan-your-visit"
    }
  ],
  "/visit/opening-hours": [
    {
      "label": "Visit",
      "to": "/visit/ticket-information"
    },
    {
      "label": "Plan Your Visit",
      "to": "/visit/plan-your-visit"
    },
    {
      "label": "Opening Hours",
      "to": "/visit/opening-hours"
    }
  ],
  "/visit/visitor-guidelines": [
    {
      "label": "Visit",
      "to": "/visit/ticket-information"
    },
    {
      "label": "Plan Your Visit",
      "to": "/visit/plan-your-visit"
    },
    {
      "label": "Visitor Guidelines",
      "to": "/visit/visitor-guidelines"
    }
  ],
  "/visit/photography-filming": [
    {
      "label": "Visit",
      "to": "/visit/ticket-information"
    },
    {
      "label": "Plan Your Visit",
      "to": "/visit/plan-your-visit"
    },
    {
      "label": "Photography & Filming",
      "to": "/visit/photography-filming"
    }
  ],
  "/visit/maps-directions": [
    {
      "label": "Visit",
      "to": "/visit/ticket-information"
    },
    {
      "label": "Maps and Direction",
      "to": "/visit/maps-directions"
    }
  ],
  "/visit/maps-and-direction": [
    {
      "label": "Visit",
      "to": "/visit/ticket-information"
    },
    {
      "label": "Maps and Direction",
      "to": "/visit/maps-directions"
    }
  ]
};

export default function Breadcrumb({ items, customTrail, className = '' }) {
  const location = useLocation();
  const currentPath = (location.pathname || '').replace(/\/$/, '') || '/';

  // Use explicitly passed trail, or look up in BREADCRUMB_MAP
  const trail = customTrail || items || BREADCRUMB_MAP[currentPath];

  // If this page is not registered in breadcrumb map, render nothing
  if (!trail || !Array.isArray(trail) || trail.length === 0) {
    return null;
  }

  return (
    <nav className={`lwm-breadcrumb-container ${className}`} aria-label="Breadcrumb navigation">
      <ol className="lwm-breadcrumb-list">
        {/* Always start with Home */}
        <li className="lwm-breadcrumb-crumb">
          <Link
            to="/"
            className="lwm-breadcrumb-link lwm-breadcrumb-link--home"
            title="Go to Liberation War Museum Home"
          >
            <svg
              className="lwm-breadcrumb-home-icon"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 9.5L12 3l9 6.5V20a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 13 20v-5h-2v5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 3 20V9.5z" />
            </svg>
            <span>Home</span>
          </Link>
        </li>

        {trail.map((item, idx) => {
          const isLast = idx === trail.length - 1;
          const targetUrl = item.to || (isLast ? currentPath : DEFAULT_CATEGORY_LINKS[item.label]);

          return (
            <React.Fragment key={idx}>
              <li className="lwm-breadcrumb-divider" aria-hidden="true">
                ›
              </li>
              <li
                className={`lwm-breadcrumb-crumb ${isLast ? 'lwm-breadcrumb-crumb--current' : ''}`}
                aria-current={isLast ? 'page' : undefined}
              >
                {targetUrl ? (
                  <Link
                    to={targetUrl}
                    className={`lwm-breadcrumb-link ${isLast ? 'lwm-breadcrumb-link--current' : ''}`}
                    title={isLast ? `Current page: ${item.label}` : `Go to ${item.label}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className={isLast ? 'lwm-breadcrumb-active' : 'lwm-breadcrumb-category'}>
                    {item.label}
                  </span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
