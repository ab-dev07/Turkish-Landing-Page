"use client"
import React, {  useState } from 'react';
import TimingSection from './TimingSection';

interface Event {
  startTime: string;
  endTime: string;
  category: string;
  title: string;
  description: string;
}

const EventsPage: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  
  const sampleEvents: Event[] = [
    {
      startTime: "10:00 AM",
      endTime: "6:00 PM",
      category: "Turkish Photography Exhibition",
      title: "Landscapes of Turkey",
      description: "From Anatolia to Istanbul Featuring works by renowned Turkish photographers Exhibition Hall, National Theater Complex Free admission"
    },
    {
      startTime: "2:00 PM",
      endTime: "4:00 PM",
      category: "Dance Workshop",
      title: "Learn traditional Turkish",
      description: "folk dances Free with registration"
    },
    {
      startTime: "7:30 PM",
      endTime: "9:30 PM",
      category: "TURKSOY Grand Performance",
      title: "Premiere Costa",
      description: "Rican performance featuring the complete ensemble Ticket required - VIP/Premium/Standard options available"
    }
  ];
  
  const handleDaySelect = (day: number): void => {
    setSelectedDay(day);
    console.log(`Day ${day} selected`);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <TimingSection 
        date="SATURDAY, NOVEMBER 8, 2025"
        events={sampleEvents}
        selectedDay={selectedDay}
        onDaySelect={handleDaySelect}
      />
    </div>
  );
};

export default EventsPage;