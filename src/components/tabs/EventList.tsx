import type * as React from "react"
import { EventCard } from "./EventCard"

interface Event {
  id: string
  startTime: string
  endTime: string
  title: string
  description: string
  additionalInfo?: string
  icon?: React.ReactNode
}

interface EventListProps {
  events: Event[]
}

export function EventList({ events }: EventListProps) {
  return (
    <div className="space-y-2">
      {events.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  )
}

