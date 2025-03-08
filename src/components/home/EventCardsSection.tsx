
import EventCards from './EventCards';
import TransparentButton from './TransparentButton';

export default function EventCardsSection() {
  const events = [
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
     
      image: "/images/event5.png",location: "costa Rica",
      time: "10:00 AM-6:00 PM",
      date: "30 NOV",
      badge: "M"
    },
  ];

  return (
    <div className="min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-8">
     

      <main className="max-w-7xl mx-auto">
        <h1 className="text-center font-[#222222] text-5xl md:text-[83px] font-bold mb-16">
          BOOK YOUR 
          <span className="text-transparent" style={{ WebkitTextStroke: '2px #FF0000' }}> EVENTS</span></h1>
        
        <div className="
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
  gap-6 justify-center mx-auto"
>
  {events.map((event) => (
    <EventCards 
      key={event.id} 
      event={event} 
    />
  ))}
</div>


        

        <div className="mt-21 mb-7 flex justify-center">
          <TransparentButton href='/' text='Turkish Art Event in Costa Rica' textColor="#222222"/>
        </div>
      </main>
    </div>
  );
}