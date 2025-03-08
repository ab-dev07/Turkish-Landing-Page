"use client"
interface TabGroupProps {
  tabs: {
    id: string
    label: string
    isActive?: boolean
  }[]
  onTabChange?: (tabId: string) => void
}

export function TabGroup({ tabs, onTabChange }: TabGroupProps) {
  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange?.(tab.id)}
          className={`
            "px-4 py-1 text-sm font-medium rounded-full transition-colors",
            ${tab.isActive ? "bg-red-500 absolute text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

