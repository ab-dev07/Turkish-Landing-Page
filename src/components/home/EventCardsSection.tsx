import Image from 'next/image';
import EventCards from './EventCards';
import TransparentButton from './TransparentButton';

interface Event {
  id: number;
  title: string;
  image: string;
  location: string;
  time: string;
  date: string;
  additionalTime?: string;
  badge?: string;
}

export default function EventCardsSection() {
  const events: Event[] = [
    {
      id: 1,
      title: "TURKSOY DANCE SHOW",
      image: "/images/event1.png",
      location: "In panama and costa rica",
      time: "10:00 AM-6:00 PM",
      date: "30 NOV",
    },
    {
      id: 2,
      title: "FASHION SHOW",
      image: "/images/event2.png",
      location: "Costa Rica",
      time: "10:00 AM-6:00 PM",
      date: "30 NOV",
    },
    {
      id: 3,
      title: "TURKISH FOOD TESTING",
      image: "/images/event3.png",
      location: "Event in Costa Rica",
      time: "10:00 AM-6:00 PM",
      date: "30 NOV",
      additionalTime: "10:00 AM-6:00 PM",
    },
    {
      id: 4,
      title: "B2B: EXPLORE TURKISH MANUFACTURING",
      image: "/images/event4.png",
      location: "Event in Costa Rica meet with turkish quality",
      time: "10:00 AM-6:00 PM",
      date: "30 NOV",
    },
    {
      id: 5,
      title: "TURKISH FASHION SHOW",
      image: "/images/event5.png",
      location: "costa Rica",
      time: "10:00 AM-6:00 PM",
      date: "30 NOV",
      badge: "M"
    },
  ];

  return (
    <div className="relative min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image 
          alt="Background lines"
          src='/images/bgLines.png'
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-center text-[#222222] text-5xl md:text-[83px] font-bold mb-16">
          BOOK YOUR 
          <span className="text-transparent" style={{ WebkitTextStroke: '2px #ED1E24' }}> EVENTS</span>
        </h1>

        <div className="flex flex-wrap gap-6 justify-center mx-auto">
          {events.map((event) => (
            <div 
              key={event.id} 
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <EventCards 
                event={event} 
              />
            </div>
          ))}
        </div>

        <div className="mt-21 mb-7 flex justify-center">
          <TransparentButton href='/' text='Turkish Art Event in Costa Rica' textColor="#222222"/>
        </div>
      </main>
    </div>
  );
}