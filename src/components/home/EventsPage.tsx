"use client"
import React, { useState } from 'react';
import TimingSection from './TimingSection';

interface Event {
  startTime: string;
  endTime: string;
  category: string;
  title: string;
  description: string;
}

interface DayEvents {
  [key: number]: Event[];
}

const EventsPage: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  
  // Events for each day
  const eventsPerDay: DayEvents = {
    1: [
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
    ],
    2: [
      {
        startTime: "9:00 AM",
        endTime: "11:00 AM",
        category: "Culinary Demonstration",
        title: "Turkish Cuisine Masterclass",
        description: "Learn to prepare authentic Turkish dishes with Chef Mehmet Gurs. Cultural Center Kitchen. Registration required."
      },
      {
        startTime: "1:00 PM",
        endTime: "3:00 PM",
        category: "Film Screening",
        title: "Modern Turkish Cinema",
        description: "Screening of award-winning Turkish films with English subtitles. Cine Panama. Free admission."
      }
    ],
    3: [
      {
        startTime: "10:30 AM",
        endTime: "12:30 PM",
        category: "Literary Event",
        title: "Turkish Authors Forum",
        description: "Discussion with contemporary Turkish writers about their work and influences. City Library. Free admission."
      },
      {
        startTime: "4:00 PM",
        endTime: "7:00 PM",
        category: "Art Workshop",
        title: "Traditional Ebru Water Marbling",
        description: "Learn the ancient Turkish art of paper marbling. All materials provided. Community Arts Center. Registration required."
      }
    ],
    4: [
      {
        startTime: "11:00 AM",
        endTime: "1:00 PM",
        category: "Historical Lecture",
        title: "Ottoman Empire Legacy",
        description: "Lecture by Professor Ayşe Deniz on the historical connections between Turkey and Latin America. University Auditorium. Free admission."
      },
      {
        startTime: "6:00 PM",
        endTime: "8:00 PM",
        category: "Musical Performance",
        title: "Classical Turkish Instruments",
        description: "Concert featuring traditional instruments including oud, ney, and kanun. Concert Hall. Ticket required."
      }
    ],
    5: [
      {
        startTime: "9:00 AM",
        endTime: "5:00 PM",
        category: "Cultural Exchange",
        title: "Turkey-Panama Business Forum",
        description: "Networking event for businesses and entrepreneurs from both countries. Convention Center. Registration required."
      },
      {
        startTime: "7:00 PM",
        endTime: "10:00 PM",
        category: "Gala Dinner",
        title: "Turkish-Panamanian Fusion",
        description: "Exclusive dinner featuring fusion cuisine from top chefs of both countries. Grand Hotel Ballroom. Ticket required."
      }
    ],
    6: [
      {
        startTime: "10:00 AM",
        endTime: "2:00 PM",
        category: "Family Day",
        title: "Turkish Cultural Festival",
        description: "Family-friendly activities including crafts, music, dance, and food. City Park. Free admission."
      },
      {
        startTime: "8:00 PM",
        endTime: "10:00 PM",
        category: "Closing Ceremony",
        title: "Farewell Performance",
        description: "Final performance combining Turkish and Panamanian artists. National Theater. Ticket required."
      }
    ]
  };

  const handleDaySelect = (day: number): void => {
    setSelectedDay(day);
    console.log(`Day ${day} selected`);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <TimingSection 
        date="SATURDAY, NOVEMBER 8, 2025"
        eventsPerDay={eventsPerDay}
        selectedDay={selectedDay}
        onDaySelect={handleDaySelect}
      />
    </div>
  );
};

export default EventsPage;