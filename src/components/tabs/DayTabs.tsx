"use client"
// import { cn } from "@/lib/utils"

interface DayTabsProps {
  days: {
    number: number
    program: string
    isActive: boolean
  }[]
  onDayChange?: (day: number) => void
}

export function DayTabs({ days, onDayChange }: DayTabsProps) {
  return (
    <div className="flex overflow-x-auto">
      {days.map((day) => (
        <button
          key={day.number}
          onClick={() => onDayChange?.(day.number)}
          className={`
            "flex flex-col items-center justify-center px-4 py-2 min-w-[80px]",
           ${ day.isActive ? "bg-red-500 text-white" : "bg-white text-black hover:bg-gray-100"}
         ` }
        >
          <div className="font-medium text-sm">DAY {day.number}</div>
          <div className="text-[10px] uppercase">{day.program}</div>
        </button>
      ))}
    </div>
  )
}

