
import HeroSection from "@/components/HeroSection";
import EventCardsSection from "@/components/EventsCardsSection";
import MissionSection from "@/components/MissionSection";
import EventsPage from "@/components/EventsPage";
import TwoLines from "@/components/TwoLines";
import { ExhibitForm, GetNotifiedForm, Organizers, Sponsor } from "@/components/home";
import Speakers from "@/components/home/Speakers";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
                <HeroSection/>
               
<TwoLines/>
                <MissionSection/>
                <EventCardsSection/>
                <EventsPage/>
    <Sponsor />
      <ExhibitForm />
      <Speakers />
      <GetNotifiedForm />

    </div>
  );
}
