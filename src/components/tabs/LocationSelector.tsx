"use client"

interface LocationSelectorProps {
  locations: {
    id: string
    name: string
    description: string
    isActive?: boolean
  }[]
  onLocationChange?: (locationId: string) => void
}

export function LocationSelector({ locations, onLocationChange }: LocationSelectorProps) {
  return (
    <div className="space-y-8">
      {locations.map((location) => (
        <div key={location.id} className={`cursor-pointer ${location.isActive ? "" : "opacity-50"}`}>
          <div className="flex gap-2 mb-2">
            {location.isActive && (
              <div className="bg-red-500 text-white text-xs px-2 py-1 rounded">{location.id.toUpperCase()}</div>
            )}
            <div className={`text-xs px-2 py-1 rounded ${!location.isActive ? "bg-gray-200 text-gray-700" : "hidden"}`}>
              {location.id.toUpperCase()}
            </div>
          </div>
          <h2
            className={`text-4xl font-bold mb-2 ${location.isActive ? "text-black" : "text-gray-300"}`}
            onClick={() => onLocationChange?.(location.id)}
          >
            {location.name}
          </h2>
          <p className="text-sm text-gray-600">{location.description}</p>
        </div>
      ))}
      <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-sm">
        <span>Download Agenda</span>
        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">↓</div>
      </button>
    </div>
  )
}
