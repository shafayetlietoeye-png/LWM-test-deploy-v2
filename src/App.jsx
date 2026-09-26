import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import OnThisDay from './pages/OnThisDay';
import VirtualTour from './pages/VirtualTour';
import MuseumStory from './pages/MuseumStory';
import Prologue from './pages/Prologue';
import MissionStatement from './pages/MissionStatement';
import InitialEfforts from './pages/InitialEfforts';
import NewMuseum from './pages/NewMuseum';
import MuseumInNutshell from './pages/MuseumInNutshell';
import BoardOfTrustees from './pages/BoardOfTrustees';
import AnnualSpeeches from './pages/AnnualSpeeches';
import Publications from './pages/Publications';
import ProjectsAndPrograms from './pages/ProjectsAndPrograms';
import Accreditations from './pages/Accreditations';
import FacilitiesAmenities from './pages/FacilitiesAmenities';
import Events from './pages/Events';
import Donate from './pages/Donate';
import ExplorePage from './pages/ExplorePage';
import ActivityDetail from './pages/ActivityDetail';
import SupportDetail from './pages/SupportDetail';
import ObjectDonors from './pages/ObjectDonors';
import VisitDetail from './pages/VisitDetail';
import ArchiveDonors from './pages/ArchiveDonors';
import CampaignLeaflets from './pages/CampaignLeaflets';
import CampaignTVC from './pages/CampaignTVC';
import FundCollectionCampaign from './pages/FundCollectionCampaign';
import FriendsOfLWM from './pages/FriendsOfLWM';
import BuyTickets from './pages/BuyTickets';
import TicketInformation from './pages/TicketInformation';
import OpeningHours from './pages/OpeningHours';
import PlanYourVisit from './pages/PlanYourVisit';
import MapsAndDirections from './pages/MapsAndDirections';
import Search from './pages/Search';
import ScrollToTop from './components/ScrollToTop';
import { SearchProvider } from './context/SearchContext.jsx';

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <ScrollToTop />
        <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/prologue" element={<Prologue />} />
          <Route path="/mission-statement" element={<MissionStatement />} />
          <Route path="/initial-efforts" element={<InitialEfforts />} />
          <Route path="/new-museum" element={<NewMuseum />} />
          <Route path="/museum-in-a-nutshell" element={<MuseumInNutshell />} />
          <Route path="/on-this-day" element={<OnThisDay />} />
          <Route path="/virtual-tour" element={<VirtualTour />} />
          <Route path="/museum-story" element={<MuseumStory />} />
          <Route path="/board-of-trustees" element={<BoardOfTrustees />} />
          <Route path="/annual-speeches" element={<AnnualSpeeches />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects-and-programs" element={<ProjectsAndPrograms />} />
          <Route path="/accreditations-and-affiliations" element={<Accreditations />} />
          <Route path="/facilities-and-amenities" element={<FacilitiesAmenities />} />
          <Route path="/facilities-amenities" element={<FacilitiesAmenities />} />
          <Route path="/activities/events" element={<Events />} />
          <Route path="/activities/events/upcoming" element={<Events initialTab="upcoming" />} />
          <Route path="/activities/events/past" element={<Events initialTab="past" />} />
          <Route path="/activities/events/:eventId" element={<Events />} />
          <Route path="/events" element={<Events />} />
          <Route path="/explore/:pageKey" element={<ExplorePage />} />
          <Route path="/activities/:category/:item" element={<ActivityDetail />} />
          <Route path="/support/donation/object-donors" element={<ObjectDonors />} />
          <Route path="/support/donation/archive-donors" element={<ArchiveDonors />} />
          <Route path="/support/campaigns" element={<FundCollectionCampaign />} />
          <Route path="/support/campaigns/fund-collection-campaign" element={<FundCollectionCampaign />} />
          <Route path="/support/campaigns/leaflet" element={<FundCollectionCampaign initialTab="leaflet" />} />
          <Route path="/support/campaigns/tvc" element={<FundCollectionCampaign initialTab="tvc" />} />
          <Route path="/support/community/friends" element={<FriendsOfLWM />} />
          <Route path="/support/:category" element={<SupportDetail />} />
          <Route path="/support/:category/:item" element={<SupportDetail />} />
          <Route path="/visit/plan-your-visit" element={<PlanYourVisit />} />
          <Route path="/visit/opening-hours" element={<PlanYourVisit initialTab="hours" />} />
          <Route path="/visit/visitor-guidelines" element={<PlanYourVisit initialTab="guidelines" />} />
          <Route path="/visit/photography-filming" element={<PlanYourVisit initialTab="photography" />} />
          <Route path="/visit/maps-directions" element={<MapsAndDirections />} />
          <Route path="/visit/maps-and-direction" element={<MapsAndDirections />} />
          <Route path="/visit/ticket-information" element={<TicketInformation />} />
          <Route path="/visit/tickets" element={<TicketInformation />} />
          <Route path="/visit/tickets/buy" element={<TicketInformation />} />
          <Route path="/visit/tickets/information" element={<TicketInformation />} />
          <Route path="/visit/tickets/:item" element={<VisitDetail category="tickets" />} />
          <Route path="/visit/:item" element={<VisitDetail />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
