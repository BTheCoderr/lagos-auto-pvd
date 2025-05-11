import Image from 'next/image'
import VehicleCard from '@/components/vehicles/VehicleCard'
import RecentlyViewed from '@/components/vehicles/RecentlyViewed'

// This would normally come from your database
const sampleVehicles = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    price: 25999,
    mileage: 15000,
    transmission: 'Automatic',
    exteriorColor: 'Silver',
    status: 'available',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80',
        alt: '2022 Toyota Camry'
      }
    ]
  },
  {
    id: '2',
    make: 'Honda',
    model: 'Accord',
    year: 2021,
    price: 23999,
    mileage: 28000,
    transmission: 'Automatic',
    exteriorColor: 'Black',
    status: 'available',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
        alt: '2021 Honda Accord'
      }
    ]
  },
  {
    id: '3',
    make: 'Ford',
    model: 'F-150',
    year: 2020,
    price: 32999,
    mileage: 45000,
    transmission: 'Automatic',
    exteriorColor: 'Red',
    status: 'available',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1605893477799-b99e3b400891?auto=format&fit=crop&w=800&q=80',
        alt: '2020 Ford F-150'
      }
    ]
  }
]

export default function InventoryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
          <Image
            src="https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&w=2000&q=80"
            alt="Car inventory"
            fill
            className="object-cover object-center -z-10"
            priority
          />
        </div>
        <div className="container relative text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Inventory</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Browse our selection of quality pre-owned vehicles.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container">
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <div className="flex-1 min-w-[300px]">
              <input
                type="search"
                placeholder="Search vehicles..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Make</option>
                <option value="toyota">Toyota</option>
                <option value="honda">Honda</option>
                <option value="ford">Ford</option>
              </select>
              <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Model</option>
              </select>
              <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Year</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={2024 - i}>
                    {2024 - i}
                  </option>
                ))}
              </select>
              <select className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Price Range</option>
                <option value="0-15000">Under $15,000</option>
                <option value="15000-25000">$15,000 - $25,000</option>
                <option value="25000-35000">$25,000 - $35,000</option>
                <option value="35000+">Over $35,000</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Grid */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                showPriceDropAlert={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Recently Viewed Section */}
      <RecentlyViewed />
    </>
  )
} 