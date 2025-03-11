"use client"

import type React from "react"
import { useState, useEffect } from "react"

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

interface TimingSectionProps {
  date: string
  events?: Event[] 
  eventsPerDay?: DayEvents
  selectedDay?: number
  onDaySelect?: (day: number) => void
  activeSection?: string
}

const TimingSection: React.FC<TimingSectionProps> = ({
  events = [],
  eventsPerDay = {},
  selectedDay = 1,
  onDaySelect = () => {},
  activeSection = "panama",
}) => {
  const [currentEvents, setCurrentEvents] = useState<Event[]>(eventsPerDay[selectedDay] || events || [])

  useEffect(() => {
    if (eventsPerDay && Object.keys(eventsPerDay).length > 0) {
      setCurrentEvents(eventsPerDay[selectedDay] || [])
    } else {
      setCurrentEvents(events)
    }
  }, [selectedDay, eventsPerDay, events, activeSection])

  const handleDaySelect = (day: number) => {
    onDaySelect(day)
  }

  return (
    <div className="md:w-[50%] flex flex-col">
      <div className="flex justify-center items-center flex-wrap gap-2">
        {Array.from({ length: 6 }, (_, i) => i + 1).map((day) => (
          <button
            key={day}
            onClick={() => handleDaySelect(day)}
            className={`py-2 px-4 rounded-xl text-center cursor-pointer ${
              selectedDay === day ? "bg-red-600 text-white" : "bg-slate-100 text-black"
            }`}
          >
            <div className="text-xl font-bold">DAY {day}</div>
            <div className="text-xs uppercase">
              {activeSection === "panama" ? "PANAMA" : "COSTA RICA"}
              <br />
              PROGRAM
            </div>
          </button>
        ))}
      </div>
      <div className="mt-8 border-t border-gray-200">
        {currentEvents.length > 0 ? (
          currentEvents.map((event, index) => (
            <div key={index} className="py-6 border-b border-gray-200 text-[#28303F]">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                  <div className="font-bold text-xl">{event.startTime}</div>
                  <div className="font-bold text-xl">{event.endTime}</div>
                </div>
                <div className="w-full md:w-3/4">
                  <div className="text-red-500 text-sm mb-1">{event.category}</div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-sm text-[#838490]">{event.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="py-6 text-center text-gray-500">No events scheduled for Day {selectedDay}</div>
        )}
      </div>
    </div>
  )
}

export default TimingSection

