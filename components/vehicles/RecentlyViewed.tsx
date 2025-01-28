'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getRecentlyViewed } from '@/lib/recentlyViewed'

interface RecentVehicle {
  id: string
  make: string
  model: string
  year: number
  price: number
  image?: string
  viewedAt: string
}

export default function RecentlyViewed() {
  const [vehicles, setVehicles] = useState<RecentVehicle[]>([])

  useEffect(() => {
    // Get recently viewed vehicles from localStorage
    const recentVehicles = getRecentlyViewed()
    setVehicles(recentVehicles)

    // Set up an interval to refresh the list periodically
    const interval = setInterval(() => {
      const updated = getRecentlyViewed()
      setVehicles(updated)
    }, 60000) // Refresh every minute

    return () => clearInterval(interval)
  }, [])

  if (vehicles.length === 0) return null

  return (
    <div className="bg-gray-50 py-12">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">Recently Viewed Vehicles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <Link
              key={vehicle.id}
              href={`/inventory/${vehicle.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-40">
                <Image
                  src={vehicle.image || 'https://placehold.co/800x600/0066ff/ffffff?text=No+Image'}
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">
                  {vehicle.year} {vehicle.make} {vehicle.model}
                </h3>
                <p className="text-lg font-bold text-blue-600">
                  ${vehicle.price.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Viewed {new Date(vehicle.viewedAt).toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 