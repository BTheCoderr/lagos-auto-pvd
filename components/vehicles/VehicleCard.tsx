'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { addToRecentlyViewed } from '@/lib/recentlyViewed'
import { Button } from '@/components/ui/Button'

interface VehicleCardProps {
  vehicle: {
    id: string
    make: string
    model: string
    year: number
    price: number
    mileage: number
    images: { url: string; alt?: string }[]
    transmission: string
    exteriorColor: string
    status: string
  }
  showPriceDropAlert?: boolean
}

export default function VehicleCard({ vehicle, showPriceDropAlert = false }: VehicleCardProps) {
  useEffect(() => {
    // Add to recently viewed when the card is rendered
    addToRecentlyViewed({
      id: vehicle.id,
      make: vehicle.make,
      model: vehicle.model,
      year: vehicle.year,
      price: vehicle.price,
      image: vehicle.images[0]?.url,
      viewedAt: new Date().toISOString(),
    })
  }, [vehicle])

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={vehicle.images[0]?.url || 'https://placehold.co/800x600/0066ff/ffffff?text=No+Image'}
          alt={vehicle.images[0]?.alt || `${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          fill
          className="object-cover"
        />
        {vehicle.status === 'sold' && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">SOLD</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </h3>
        <div className="space-y-2 mb-4">
          <p className="text-2xl font-bold text-blue-600">
            ${vehicle.price.toLocaleString()}
          </p>
          <p className="text-gray-600">
            {vehicle.mileage.toLocaleString()} miles
          </p>
          <div className="flex gap-4 text-sm text-gray-600">
            <span>{vehicle.transmission}</span>
            <span>{vehicle.exteriorColor}</span>
          </div>
        </div>
        <div className="space-y-2">
          <Button className="w-full" asChild>
            <Link href={`/inventory/${vehicle.id}`}>View Details</Link>
          </Button>
          {showPriceDropAlert && vehicle.status !== 'sold' && (
            <Button variant="outline" className="w-full">
              Set Price Alert
            </Button>
          )}
        </div>
      </div>
    </div>
  )
} 