
import { EventCardsSection, EventsPage, ExhibitForm, GetNotifiedForm, HeroSection, MissionSection, Sponsor, TwoLines } from "@/components/home";

import Speakers from "@/components/home/Speakers";

export default function Home() {
  return (
    <>
     {/* <div className="overflow-x-hidden"> */}
                <HeroSection/>
               
<TwoLines/>
                <MissionSection/>
                <EventCardsSection/>
                <EventsPage/>
    <Sponsor />
      <ExhibitForm />
      <Speakers />
      <GetNotifiedForm />

   {/* </div> */}
    </>
  );
}
