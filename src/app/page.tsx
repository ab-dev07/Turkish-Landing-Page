
import HeroSection from "@/components/HeroSection";
import EventCardsSection from "@/components/EventsCardsSection";
import MissionSection from "@/components/MissionSection";
import EventsPage from "@/components/EventsPage";
import TwoLines from "@/components/TwoLines";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
                <HeroSection/>
               
<TwoLines/>
                <MissionSection/>
                <EventCardsSection/>
                <EventsPage/>
 

    </div>
  );
}
