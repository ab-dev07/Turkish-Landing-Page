import type * as React from "react"

interface EventCardProps {
  startTime: string
  endTime: string
  title: string
  description: string
  additionalInfo?: string
  icon?: React.ReactNode
}

export function EventCard({ startTime, endTime, title, description, additionalInfo, icon }: EventCardProps) {
  return (
    <div className="flex gap-6 py-6 border-b last:border-b-0">
      <div className="flex flex-col items-end min-w-[120px]">
        <span className="text-red-500 font-medium">{startTime}</span>
        <span className="text-gray-500">{endTime}</span>
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-lg mb-1">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        {additionalInfo && <p className="text-sm text-gray-500">{additionalInfo}</p>}
      </div>
      {icon && <div className="flex items-center">{icon}</div>}
    </div>
  )
}

