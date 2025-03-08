import type * as React from "react"

interface EventItemProps {
  startTime: string
  endTime: string
  category: string
  title: string
  description: string
  icon?: React.ReactNode
}

export function EventItem({ startTime, endTime, category, title, description, icon }: EventItemProps) {
  return (
    <div className="flex py-6">
      {/* Time Column */}
      <div className="w-[100px] flex flex-col items-end pr-4">
        <div className="text-red-500 font-medium">{startTime}</div>
        <div className="text-gray-500">{endTime}</div>
      </div>

      {/* Content Column */}
      <div className="flex-1">
        <div className="text-sm mb-1">{category}</div>
        <h3 className="text-xl font-medium mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {/* Icon Column (if present) */}
      {icon && <div className="ml-4 flex items-center">{icon}</div>}
    </div>
  )
}

