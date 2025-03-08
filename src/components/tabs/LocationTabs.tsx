"use client"
interface LocationTabsProps {
  locations: {
    id: string
    name: string
    description: string
    isActive: boolean
  }[]
  onLocationChange?: (locationId: string) => void
}

export function LocationTabs({ locations, onLocationChange }: LocationTabsProps) {
  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        {locations.map((location) => (
          <button
            key={location.id}
            onClick={() => onLocationChange?.(location.id)}
            className={`
              "px-3 py-1 text-xs font-medium rounded-full",
             ${ location.isActive ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"},
            `}
          >
            {location.id.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="space-y-8">
        {locations.map((location) => (
          <div key={`name-${location.id}`} className="space-y-1">
            <h2
              className={`"text-5xl font-bold cursor-pointer", ${location.isActive ? "text-black" : "text-gray-300"}`}
              onClick={() => onLocationChange?.(location.id)}
            >
              {location.name}
            </h2>
            <p className="text-sm text-gray-600">{location.description}</p>
          </div>
        ))}
      </div>

      <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-sm">
        <span>Download Agenda</span>
        <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" >
<circle cx="20.3523" cy="20.1897" r="19.4285" fill="#ED1E24"/>
</svg>

        </div>
      </button>
    </div>
  )
}

