import { LocationTabs } from "./LocationTabs"
import { DayTabs } from "./DayTabs"
import { EventItem } from "./EventItem"

export default function ScheduleSection() {
  // Location data
  const locations = [
    {
      id: "panama",
      name: "PANAMA",
      description: "from anatolia to istanbul* featuring works by",
      isActive: true,
    },
    {
      id: "costa rica",
      name: "COSTA RICA",
      description: "from anatolia to istanbul* featuring works by",
      isActive: false,
    },
  ]

  // Day tabs data
  const days = [
    { number: 1, program: "program", isActive: true },
    { number: 2, program: "program", isActive: false },
    { number: 3, program: "program", isActive: false },
    { number: 4, program: "program", isActive: false },
    { number: 5, program: "program", isActive: false },
    { number: 6, program: "program", isActive: false },
  ]

  // Event data
  const events = [
    {
      id: "1",
      startTime: "10:00 AM",
      endTime: "6:00 PM",
      category: "Turkish Photography Exhibition",
      title: "Landscapes of Turkey",
      description:
        "From Anatolia to Istanbul* Featuring works by renowned Turkish photographers Exhibition Hall, National Theater Complex | Free admission",
    },
    {
      id: "2",
      startTime: "2:00 PM",
      endTime: "4:00 PM",
      category: "Dance Workshop",
      title: "Learn traditional Turkish",
      description: "folk dances Free with registration",
    },
    {
      id: "3",
      startTime: "7:30 PM",
      endTime: "9:30 PM",
      category: "TURKSOY Grand Performance",
      title: "Premiere Concert",
      description:
        "Recital performance featuring the complete ensemble Ticket required - VIP/Premium/Standard options available",
      icon: (
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">S</div>
      ),
    },
  ]

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Column - Location Tabs */}
        <div className="md:col-span-4">
          <LocationTabs locations={locations} />
        </div>

        {/* Right Column - Schedule */}
        <div className="md:col-span-8">
          {/* Date and Day Selector */}
          <div className="mb-8">
            <p className="text-sm font-medium mb-2">SATURDAY, NOVEMBER 8, 2025</p>
            <DayTabs days={days} />
          </div>

          {/* Event List */}
          <div className="space-y-4 divide-y divide-gray-200">
            {events.map((event) => (
              <EventItem
                key={event.id}
                startTime={event.startTime}
                endTime={event.endTime}
                category={event.category}
                title={event.title}
                description={event.description}
                icon={event.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

