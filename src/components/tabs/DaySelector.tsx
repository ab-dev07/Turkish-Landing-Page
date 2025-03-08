"use client"
interface DaySelectorProps {
  days: {
    id: number
    label: string
    program?: string
    isActive?: boolean
  }[]
  onDayChange?: (dayId: number) => void
}

export function DaySelector({ days, onDayChange }: DaySelectorProps) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {days.map((day) => (
        <button
          key={day.id}
          onClick={() => onDayChange?.(day.id)}
          className={`
            "flex flex-col items-center min-w-[80px] p-2 rounded-lg transition-colors",
           ${ day.isActive ? "bg-red-500 text-white" : "hover:bg-gray-100"}
          `}
        >
          <span className="text-sm font-medium">DAY {day.id}</span>
          {day.program && <span className="text-xs opacity-75">PROGRAM</span>}
        </button>
      ))}
    </div>
  )
}

