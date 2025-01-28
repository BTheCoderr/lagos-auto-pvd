import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// This would normally come from your database or comparison state
const comparedVehicles = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    price: 25999,
    mileage: 15000,
    engine: '2.5L 4-Cylinder',
    transmission: 'Automatic',
    exteriorColor: 'Silver',
    interiorColor: 'Black',
    fuelType: 'Gasoline',
    mpgCity: 28,
    mpgHighway: 39,
    features: [
      'Bluetooth',
      'Backup Camera',
      'Lane Departure Warning',
      'Apple CarPlay'
    ],
    image: 'https://placehold.co/800x600/0066ff/ffffff?text=Toyota+Camry'
  },
  {
    id: '2',
    make: 'Honda',
    model: 'Accord',
    year: 2021,
    price: 23999,
    mileage: 28000,
    engine: '1.5L Turbo 4-Cylinder',
    transmission: 'Automatic',
    exteriorColor: 'Black',
    interiorColor: 'Gray',
    fuelType: 'Gasoline',
    mpgCity: 30,
    mpgHighway: 38,
    features: [
      'Bluetooth',
      'Backup Camera',
      'Lane Departure Warning',
      'Apple CarPlay',
      'Sunroof'
    ],
    image: 'https://placehold.co/800x600/0066ff/ffffff?text=Honda+Accord'
  }
]

const allFeatures = Array.from(
  new Set(comparedVehicles.flatMap(vehicle => vehicle.features))
).sort()

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="p-6 border-b">
            <h1 className="text-2xl font-bold">Compare Vehicles</h1>
            <p className="text-gray-600">Compare features and specifications side by side</p>
          </div>

          {/* Comparison Grid */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 text-left w-1/4">Vehicle</th>
                  {comparedVehicles.map(vehicle => (
                    <th key={vehicle.id} className="p-4 text-left">
                      <div className="space-y-4">
                        <div className="relative h-48">
                          <Image
                            src={vehicle.image}
                            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl">
                            {vehicle.year} {vehicle.make} {vehicle.model}
                          </h3>
                          <p className="text-2xl font-bold text-blue-600">
                            ${vehicle.price.toLocaleString()}
                          </p>
                        </div>
                        <div className="space-x-2">
                          <Button asChild>
                            <Link href={`/inventory/${vehicle.id}`}>View Details</Link>
                          </Button>
                          <Button variant="outline">Remove</Button>
                        </div>
                      </div>
                    </th>
                  ))}
                  <th className="p-4 text-left">
                    <div className="h-48 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
                      <Button variant="outline">Add Vehicle</Button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Basic Info */}
                <tr className="border-t">
                  <td colSpan={4} className="p-4 bg-gray-50">
                    <h3 className="font-bold">Basic Information</h3>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 text-gray-600">Mileage</td>
                  {comparedVehicles.map(vehicle => (
                    <td key={vehicle.id} className="p-4">
                      {vehicle.mileage.toLocaleString()} miles
                    </td>
                  ))}
                  <td className="p-4"></td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 text-gray-600">Engine</td>
                  {comparedVehicles.map(vehicle => (
                    <td key={vehicle.id} className="p-4">{vehicle.engine}</td>
                  ))}
                  <td className="p-4"></td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 text-gray-600">Transmission</td>
                  {comparedVehicles.map(vehicle => (
                    <td key={vehicle.id} className="p-4">{vehicle.transmission}</td>
                  ))}
                  <td className="p-4"></td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 text-gray-600">Exterior Color</td>
                  {comparedVehicles.map(vehicle => (
                    <td key={vehicle.id} className="p-4">{vehicle.exteriorColor}</td>
                  ))}
                  <td className="p-4"></td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 text-gray-600">Interior Color</td>
                  {comparedVehicles.map(vehicle => (
                    <td key={vehicle.id} className="p-4">{vehicle.interiorColor}</td>
                  ))}
                  <td className="p-4"></td>
                </tr>

                {/* Fuel Economy */}
                <tr className="border-t">
                  <td colSpan={4} className="p-4 bg-gray-50">
                    <h3 className="font-bold">Fuel Economy</h3>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 text-gray-600">Fuel Type</td>
                  {comparedVehicles.map(vehicle => (
                    <td key={vehicle.id} className="p-4">{vehicle.fuelType}</td>
                  ))}
                  <td className="p-4"></td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 text-gray-600">City MPG</td>
                  {comparedVehicles.map(vehicle => (
                    <td key={vehicle.id} className="p-4">{vehicle.mpgCity} MPG</td>
                  ))}
                  <td className="p-4"></td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 text-gray-600">Highway MPG</td>
                  {comparedVehicles.map(vehicle => (
                    <td key={vehicle.id} className="p-4">{vehicle.mpgHighway} MPG</td>
                  ))}
                  <td className="p-4"></td>
                </tr>

                {/* Features */}
                <tr className="border-t">
                  <td colSpan={4} className="p-4 bg-gray-50">
                    <h3 className="font-bold">Features</h3>
                  </td>
                </tr>
                {allFeatures.map(feature => (
                  <tr key={feature} className="border-t">
                    <td className="p-4 text-gray-600">{feature}</td>
                    {comparedVehicles.map(vehicle => (
                      <td key={vehicle.id} className="p-4">
                        {vehicle.features.includes(feature) ? (
                          <svg
                            className="w-6 h-6 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-6 h-6 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}
                      </td>
                    ))}
                    <td className="p-4"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
} 