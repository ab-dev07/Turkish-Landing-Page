"use client"

import { useState } from "react"
import { LocationSection } from "./LocationSection"
import { EventSection } from "./EventSection"

export function ScheduleView() {
  // State for active location and day
  const [activeLocation, setActiveLocation] = useState("panama")
  const [activeDay, setActiveDay] = useState(1)

  // Location data
  const locations = [
    {
      id: "panama",
      name: "PANAMA",
      description: "from anatolia to istanbul* featuring works by",
      isActive: activeLocation === "panama",
    },
    {
      id: "costa rica",
      name: "COSTA RICA",
      description: "from anatolia to istanbul* featuring works by",
      isActive: activeLocation === "costa rica",
    },
  ]

  // Day tabs data
  const days = [
    { number: 1, program: "program", isActive: activeDay === 1 },
    { number: 2, program: "program", isActive: activeDay === 2 },
    { number: 3, program: "program", isActive: activeDay === 3 },
    { number: 4, program: "program", isActive: activeDay === 4 },
    { number: 5, program: "program", isActive: activeDay === 5 },
    { number: 6, program: "program", isActive: activeDay === 6 },
  ]

  // Event data for all days
  const allEvents = {
    1: [
      {
        id: "1-1",
        startTime: "10:00 AM",
        endTime: "6:00 PM",
        category: "Turkish Photography Exhibition",
        title: "Landscapes of Turkey",
        description:
          "From Anatolia to Istanbul* Featuring works by renowned Turkish photographers Exhibition Hall, National Theater Complex | Free admission",
      },
      {
        id: "1-2",
        startTime: "2:00 PM",
        endTime: "4:00 PM",
        category: "Dance Workshop",
        title: "Learn traditional Turkish",
        description: "folk dances Free with registration",
      },
      {
        id: "1-3",
        startTime: "7:30 PM",
        endTime: "9:30 PM",
        category: "TURKSOY Grand Performance",
        title: "Premiere Concert",
        description:
          "Recital performance featuring the complete ensemble Ticket required - VIP/Premium/Standard options available",
      
      },
    ],
    2: [
      {
        id: "2-1",
        startTime: "9:00 AM",
        endTime: "11:00 AM",
        category: "Culinary Workshop",
        title: "Turkish Breakfast Traditions",
        description:
          "Learn to prepare authentic Turkish breakfast dishes with Chef Mehmet | Cooking Studio, Cultural Center | Registration required",
      },
      {
        id: "2-2",
        startTime: "12:00 PM",
        endTime: "3:00 PM",
        category: "Film Screening",
        title: "Contemporary Turkish Cinema",
        description: "Screening of award-winning films from Turkey | Cinema Hall, Cultural Center | Free admission",
     
      },
      {
        id: "2-3",
        startTime: "5:00 PM",
        endTime: "7:00 PM",
        category: "Panel Discussion",
        title: "Cultural Exchange Initiatives",
        description:
          "Experts discuss ongoing cultural exchange programs between Turkey and Latin America | Conference Room, National Library",
      },
    ],
    3: [
      {
        id: "3-1",
        startTime: "10:00 AM",
        endTime: "1:00 PM",
        category: "Art Workshop",
        title: "Traditional Ebru Art",
        description:
          "Learn the ancient Turkish art of paper marbling | Art Studio, Cultural Center | Materials provided",
    
      },
      {
        id: "3-2",
        startTime: "3:00 PM",
        endTime: "5:00 PM",
        category: "Literary Event",
        title: "Poetry Reading: Voices from Turkey",
        description: "Contemporary Turkish poets share their works | Literary Café, National Library | Free admission",
      
      },
      {
        id: "3-3",
        startTime: "8:00 PM",
        endTime: "10:00 PM",
        category: "Music Performance",
        title: "Classical Ottoman Music",
        description: "Traditional instruments and compositions | Concert Hall, National Theater | Ticket required",
     
      },
    ],
    4: [
      {
        id: "4-1",
        startTime: "9:30 AM",
        endTime: "12:30 PM",
        category: "Business Forum",
        title: "Turkey-Panama Trade Relations",
        description:
          "Networking event for businesses interested in bilateral trade | Business Center, Convention Hall | Registration required",
      },
      {
        id: "4-2",
        startTime: "2:00 PM",
        endTime: "4:00 PM",
        category: "Academic Lecture",
        title: "Historical Connections",
        description:
          "Exploring historical ties between Turkey and Latin America | Auditorium, National University | Open to public",
      },
      {
        id: "4-3",
        startTime: "6:00 PM",
        endTime: "8:00 PM",
        category: "Culinary Event",
        title: "Turkish Coffee Ceremony",
        description: "Traditional coffee preparation and tasting | Cultural Center Café | Limited seating",
       
      },
    ],
    5: [
      {
        id: "5-1",
        startTime: "10:00 AM",
        endTime: "4:00 PM",
        category: "Craft Fair",
        title: "Turkish Artisan Showcase",
        description: "Handcrafted goods, textiles, and ceramics | Exhibition Hall, Convention Center | Free admission",
      },
      {
        id: "5-2",
        startTime: "5:00 PM",
        endTime: "7:00 PM",
        category: "Fashion Show",
        title: "Contemporary Turkish Design",
        description:
          "Featuring works by emerging Turkish designers | Fashion Pavilion, Convention Center | Ticket required",
       
      },
      {
        id: "5-3",
        startTime: "8:30 PM",
        endTime: "11:00 PM",
        category: "Gala Dinner",
        title: "Turkish Gastronomy Experience",
        description:
          "Five-course dinner featuring regional Turkish cuisine | Grand Ballroom, Intercontinental Hotel | Formal attire",
      },
    ],
    6: [
      {
        id: "6-1",
        startTime: "11:00 AM",
        endTime: "1:00 PM",
        category: "Community Event",
        title: "Turkish Cultural Festival",
        description: "Family-friendly activities, performances, and food | City Park | Free admission",
       
      },
      {
        id: "6-2",
        startTime: "3:00 PM",
        endTime: "5:00 PM",
        category: "Closing Ceremony",
        title: "Cultural Week Highlights",
        description:
          "Recap of events and announcement of future collaborations | Main Hall, Cultural Center | Open to public",
      },
      {
        id: "6-3",
        startTime: "7:00 PM",
        endTime: "10:00 PM",
        category: "Farewell Concert",
        title: "Fusion of Traditions",
        description:
          "Turkish and Panamanian musicians perform together | Outdoor Amphitheater, City Park | Free admission",
      
      },
    ],
  }

  // Get events for the active day
  const activeEvents = allEvents[activeDay as keyof typeof allEvents] || []

  // Handle location change
  const handleLocationChange = (locationId: string) => {
    setActiveLocation(locationId)
  }

  // Handle day change
  const handleDayChange = (day: number) => {
    setActiveDay(day)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      {/* Left Column - Location Section */}
      <div className="md:col-span-4">
        <LocationSection locations={locations} onLocationChange={handleLocationChange} />
      </div>

      {/* Right Column - Event Section */}
      <div className="md:col-span-8">
        <EventSection
          date="SATURDAY, NOVEMBER 8, 2025"
          days={days}
          events={activeEvents}
          onDayChange={handleDayChange}
        />
      </div>
    </div>
  )
}

