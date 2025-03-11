"use client"
import type React from "react"
import { useState } from "react"
import TimingSection from "./TimingSection"
import AnimatedText from "./AnimatedText"
import TransparentButton from "./TransparentButton"

interface Event {
  startTime: string
  endTime: string
  category: string
  title: string
  description: string
}

interface DayEvents {
  [key: number]: Event[]
}

const EventsPage: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(1)
  const [activeSection, setActiveSection] = useState<string>("panama")
  const panamaEventsPerDay: DayEvents = {
    1: [
      {
        startTime: "10:00 AM",
        endTime: "6:00 PM",
        category: "Turkish Photography Exhibition",
        title: "Landscapes of Turkey",
        description:
          "From Anatolia to Istanbul Featuring works by renowned Turkish photographers Exhibition Hall, National Theater Complex Free admission",
      },
      {
        startTime: "2:00 PM",
        endTime: "4:00 PM",
        category: "Dance Workshop",
        title: "Learn traditional Turkish",
        description: "folk dances Free with registration",
      },
      {
        startTime: "7:30 PM",
        endTime: "9:30 PM",
        category: "TURKSOY Grand Performance",
        title: "Premiere Panama",
        description:
          "Rican performance featuring the complete ensemble Ticket required - VIP/Premium/Standard options available",
      },
    ],
    2: [
      {
        startTime: "9:00 AM",
        endTime: "11:00 AM",
        category: "Culinary Demonstration",
        title: "Turkish Cuisine Masterclass",
        description:
          "Learn to prepare authentic Turkish dishes with Chef Mehmet Gurs. Cultural Center Kitchen. Registration required.",
      },
      {
        startTime: "1:00 PM",
        endTime: "3:00 PM",
        category: "Film Screening",
        title: "Modern Turkish Cinema",
        description: "Screening of award-winning Turkish films with English subtitles. Cine Panama. Free admission.",
      },
    ],
    3: [
      {
        startTime: "10:30 AM",
        endTime: "12:30 PM",
        category: "Literary Event",
        title: "Turkish Authors Forum",
        description:
          "Discussion with contemporary Turkish writers about their work and influences. City Library. Free admission.",
      },
      {
        startTime: "4:00 PM",
        endTime: "7:00 PM",
        category: "Art Workshop",
        title: "Traditional Ebru Water Marbling",
        description:
          "Learn the ancient Turkish art of paper marbling. All materials provided. Community Arts Center. Registration required.",
      },
    ],
    4: [
      {
        startTime: "11:00 AM",
        endTime: "1:00 PM",
        category: "Historical Lecture",
        title: "Ottoman Empire Legacy",
        description:
          "Lecture by Professor Ayşe Deniz on the historical connections between Turkey and Latin America. University Auditorium. Free admission.",
      },
      {
        startTime: "6:00 PM",
        endTime: "8:00 PM",
        category: "Musical Performance",
        title: "Classical Turkish Instruments",
        description:
          "Concert featuring traditional instruments including oud, ney, and kanun. Concert Hall. Ticket required.",
      },
    ],
    5: [
      {
        startTime: "9:00 AM",
        endTime: "5:00 PM",
        category: "Cultural Exchange",
        title: "Turkey-Panama Business Forum",
        description:
          "Networking event for businesses and entrepreneurs from both countries. Convention Center. Registration required.",
      },
      {
        startTime: "7:00 PM",
        endTime: "10:00 PM",
        category: "Gala Dinner",
        title: "Turkish-Panamanian Fusion",
        description:
          "Exclusive dinner featuring fusion cuisine from top chefs of both countries. Grand Hotel Ballroom. Ticket required.",
      },
    ],
    6: [
      {
        startTime: "10:00 AM",
        endTime: "2:00 PM",
        category: "Family Day",
        title: "Turkish Cultural Festival",
        description: "Family-friendly activities including crafts, music, dance, and food. City Park. Free admission.",
      },
      {
        startTime: "8:00 PM",
        endTime: "10:00 PM",
        category: "Closing Ceremony",
        title: "Farewell Performance",
        description: "Final performance combining Turkish and Panamanian artists. National Theater. Ticket required.",
      },
    ],
  }

  const costaRicaEventsPerDay: DayEvents = {
    1: [
      {
        startTime: "9:00 AM",
        endTime: "5:00 PM",
        category: "Art Exhibition",
        title: "Turkish Artistry",
        description:
          "Contemporary Turkish art exhibition featuring works from emerging artists. Costa Rica National Gallery. Free admission.",
      },
      {
        startTime: "3:00 PM",
        endTime: "5:00 PM",
        category: "Music Workshop",
        title: "Turkish Instruments",
        description:
          "Introduction to traditional Turkish musical instruments. San José Cultural Center. Registration required.",
      },
    ],
    2: [
      {
        startTime: "10:00 AM",
        endTime: "12:00 PM",
        category: "Coffee Culture",
        title: "Turkish Coffee Experience",
        description:
          "Learn about the traditions of Turkish coffee in the land of Costa Rican coffee. Includes tasting session. Barrio Escalante. Ticket required.",
      },
      {
        startTime: "6:00 PM",
        endTime: "8:00 PM",
        category: "Film Night",
        title: "Contemporary Turkish Cinema",
        description: "Screening of award-winning Turkish films with Spanish subtitles. Cine Magaly. Free admission.",
      },
    ],
    3: [
      {
        startTime: "11:00 AM",
        endTime: "1:00 PM",
        category: "Culinary Exchange",
        title: "Fusion Cooking Class",
        description:
          "Learn to combine Turkish and Costa Rican flavors with Chef Ahmet. Mercado Central. Registration required.",
      },
      {
        startTime: "7:00 PM",
        endTime: "9:00 PM",
        category: "Dance Performance",
        title: "Rhythms of Anatolia",
        description: "Traditional Turkish folk dance performance. National Theater of Costa Rica. Ticket required.",
      },
    ],
    4: [
      {
        startTime: "9:30 AM",
        endTime: "11:30 AM",
        category: "Academic Lecture",
        title: "Turkey-Costa Rica Relations",
        description:
          "Historical and contemporary connections between Turkey and Costa Rica. University of Costa Rica. Free admission.",
      },
      {
        startTime: "5:00 PM",
        endTime: "7:00 PM",
        category: "Poetry Reading",
        title: "Verses from Istanbul",
        description: "Bilingual reading of Turkish poetry with Costa Rican poets. Casa de la Cultura. Free admission.",
      },
    ],
    5: [
      {
        startTime: "10:00 AM",
        endTime: "4:00 PM",
        category: "Trade Exhibition",
        title: "Turkish Products Showcase",
        description:
          "Exhibition of Turkish exports and business opportunities. Convention Center. Registration required.",
      },
      {
        startTime: "8:00 PM",
        endTime: "10:00 PM",
        category: "Concert",
        title: "Turkish Classical Music",
        description: "Performance by visiting Turkish orchestra. Eugene O'Neill Theater. Ticket required.",
      },
    ],
    6: [
      {
        startTime: "11:00 AM",
        endTime: "3:00 PM",
        category: "Family Festival",
        title: "Turkish Culture Day",
        description: "Family activities, food stalls, and performances. La Sabana Park. Free admission.",
      },
      {
        startTime: "7:30 PM",
        endTime: "10:00 PM",
        category: "Closing Gala",
        title: "Farewell Celebration",
        description: "Final celebration with performances and speeches. Gran Hotel Costa Rica. Ticket required.",
      },
    ],
  }

  const handleDaySelect = (day: number): void => {
    setSelectedDay(day)
    console.log(`Day ${day} selected`)
  }

  const handleViewChange = (section: string): void => {
    setActiveSection(section)
    console.log(`Section changed to: ${section}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-10 justify-evenly">
        <div className="gap-2 mb-6">
         
          <div className="text-xl mb-2">SATURDAY, NOVEMBER 8, 2025</div>
          <AnimatedText
            heading={{ heading1: "PANAMA", heading2: "COSTA RICA" }}
            paragraph="from anatolia to istanbul* featuring works by"
            onViewChange={handleViewChange}
          />
          <div className="flex items-start gap-2">
            <TransparentButton text="Download Agenda" textColor="black" />
          </div>
        </div>

        <TimingSection
          date="SATURDAY, NOVEMBER 8, 2025"
          eventsPerDay={activeSection === "panama" ? panamaEventsPerDay : costaRicaEventsPerDay}
          selectedDay={selectedDay}
          onDaySelect={handleDaySelect}
          activeSection={activeSection}
        />
      </div>
    </div>
  )
}

export default EventsPage

