import { LocationTabs } from "./LocationTabs"
interface LocationSectionProps {
  locations: {
    id: string
    name: string
    description: string
    isActive: boolean
  }[]
  onLocationChange: (locationId: string) => void
}

export function LocationSection({ locations, onLocationChange }: LocationSectionProps) {
  return <LocationTabs locations={locations} onLocationChange={onLocationChange} />
}

