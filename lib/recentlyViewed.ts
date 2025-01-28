const RECENTLY_VIEWED_KEY = 'recently_viewed_vehicles'
const MAX_RECENT_VEHICLES = 10

interface RecentVehicle {
  id: string
  make: string
  model: string
  year: number
  price: number
  image?: string
  viewedAt: string
}

export function addToRecentlyViewed(vehicle: RecentVehicle): void {
  if (typeof window === 'undefined') return

  try {
    // Get existing recently viewed vehicles
    const existing = getRecentlyViewed()

    // Remove if already exists
    const filtered = existing.filter(v => v.id !== vehicle.id)

    // Add new vehicle to the beginning
    const updated = [
      { ...vehicle, viewedAt: new Date().toISOString() },
      ...filtered
    ].slice(0, MAX_RECENT_VEHICLES)

    // Save to localStorage
    localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(updated))
  } catch (error) {
    console.error('Error adding to recently viewed:', error)
  }
}

export function getRecentlyViewed(): RecentVehicle[] {
  if (typeof window === 'undefined') return []

  try {
    const stored = localStorage.getItem(RECENTLY_VIEWED_KEY)
    if (!stored) return []

    const vehicles = JSON.parse(stored) as RecentVehicle[]
    return vehicles.sort((a, b) => 
      new Date(b.viewedAt).getTime() - new Date(a.viewedAt).getTime()
    )
  } catch (error) {
    console.error('Error getting recently viewed:', error)
    return []
  }
}

export function clearRecentlyViewed(): void {
  if (typeof window === 'undefined') return

  try {
    localStorage.removeItem(RECENTLY_VIEWED_KEY)
  } catch (error) {
    console.error('Error clearing recently viewed:', error)
  }
} 