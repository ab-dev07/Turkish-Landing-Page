import { ExhibitForm, GetNotifiedForm, Organizers, Sponsor } from "@/components/home";
import Speakers from "@/components/home/Speakers";

export default function Home() {
  return (
    <>
      <Sponsor />
      <ExhibitForm />
      <Speakers />
      <GetNotifiedForm />
    </>
  );
}
