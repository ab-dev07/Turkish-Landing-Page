
import { EventCardsSection, EventsPage, ExhibitForm, GetNotifiedForm, HeroSection, MissionSection, Organizers, Sponsor, TwoLines } from "@/components/home";

import Speakers from "@/components/home/Speakers";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TwoLines />
      <MissionSection />
      <EventCardsSection />
      <EventsPage />
      <Sponsor />
      <ExhibitForm />
      <Speakers />
      <Organizers />
      <GetNotifiedForm />
    </>
  );
}
