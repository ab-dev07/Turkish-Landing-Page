import type React from "react"
import { EventItem } from "./EventItem"
import { DayTabs } from "./DayTabs"

interface EventSectionProps {
  date: string
  days: {
    number: number
    program: string
    isActive: boolean
  }[]
  events: {
    id: string
    startTime: string
    endTime: string
    category: string
    title: string
    description: string
    icon?: React.ReactNode
  }[]
  onDayChange: (day: number) => void
}

export function EventSection({ date, days, events, onDayChange }: EventSectionProps) {
  return (
    <div>
      {/* Date and Day Selector */}
      <div className="mb-8">
        <p className="text-sm font-medium mb-2">{date}</p>
        <DayTabs days={days} onDayChange={onDayChange} />
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
  )
}

