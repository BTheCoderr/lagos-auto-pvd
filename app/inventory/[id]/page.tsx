import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import PriceDropAlert from '@/components/vehicles/PriceDropAlert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'

// This would normally come from your database
const vehicleDetails = {
  id: '1',
  make: 'Toyota',
  model: 'Camry',
  year: 2022,
  price: 25999,
  mileage: 15000,
  vin: '1HGCM82633A123456',
  exteriorColor: 'Silver',
  interiorColor: 'Black',
  transmission: 'Automatic',
  fuelType: 'Gasoline',
  bodyStyle: 'Sedan',
  engine: '2.5L 4-Cylinder',
  drivetrain: 'Front-Wheel Drive',
  status: 'available',
  features: [
    'Bluetooth',
    'Backup Camera',
    'Lane Departure Warning',
    'Apple CarPlay',
    'Android Auto',
    'Keyless Entry',
    'Power Windows',
    'Power Locks',
    'Cruise Control'
  ],
  description: 'This 2022 Toyota Camry is in excellent condition with low mileage. It comes with a clean CARFAX report and includes many modern safety and convenience features.',
  images: [
    {
      url: 'https://placehold.co/800x600/0066ff/ffffff?text=Toyota+Camry+Front',
      alt: '2022 Toyota Camry Front View'
    },
    {
      url: 'https://placehold.co/800x600/0066ff/ffffff?text=Toyota+Camry+Side',
      alt: '2022 Toyota Camry Side View'
    },
    {
      url: 'https://placehold.co/800x600/0066ff/ffffff?text=Toyota+Camry+Interior',
      alt: '2022 Toyota Camry Interior'
    }
  ],
  warranty: {
    basic: '36 months/36,000 miles',
    powertrain: '60 months/60,000 miles'
  }
}

export default function VehicleDetailPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Vehicle Title Section */}
      <div className="bg-white border-b">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">
                {vehicleDetails.year} {vehicleDetails.make} {vehicleDetails.model}
              </h1>
              <p className="text-gray-600">VIN: {vehicleDetails.vin}</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-blue-600">
                ${vehicleDetails.price.toLocaleString()}
              </p>
              <div className="mt-2 space-x-2">
                <Button asChild>
                  <Link href="#contact">Contact Dealer</Link>
                </Button>
                <PriceDropAlert
                  vehicleId={vehicleDetails.id}
                  currentPrice={vehicleDetails.price}
                  onSetAlert={async () => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="relative h-[400px] mb-4">
                <Image
                  src={vehicleDetails.images[0].url}
                  alt={vehicleDetails.images[0].alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {vehicleDetails.images.slice(1).map((image, index) => (
                  <div key={index} className="relative h-24">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Vehicle Details Tabs */}
            <div className="mt-8">
              <Tabs defaultValue="overview">
                <TabsList className="w-full">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="warranty">Warranty</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="bg-white rounded-lg shadow-md p-6 mt-4">
                  <h3 className="text-xl font-bold mb-4">Vehicle Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600">Exterior Color</p>
                      <p className="font-semibold">{vehicleDetails.exteriorColor}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Interior Color</p>
                      <p className="font-semibold">{vehicleDetails.interiorColor}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Transmission</p>
                      <p className="font-semibold">{vehicleDetails.transmission}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Fuel Type</p>
                      <p className="font-semibold">{vehicleDetails.fuelType}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Engine</p>
                      <p className="font-semibold">{vehicleDetails.engine}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Drivetrain</p>
                      <p className="font-semibold">{vehicleDetails.drivetrain}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-bold mb-2">Description</h4>
                    <p className="text-gray-600">{vehicleDetails.description}</p>
                  </div>
                </TabsContent>
                <TabsContent value="features" className="bg-white rounded-lg shadow-md p-6 mt-4">
                  <h3 className="text-xl font-bold mb-4">Features & Options</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {vehicleDetails.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
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
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="warranty" className="bg-white rounded-lg shadow-md p-6 mt-4">
                  <h3 className="text-xl font-bold mb-4">Warranty Information</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-600">Basic Coverage</p>
                      <p className="font-semibold">{vehicleDetails.warranty.basic}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Powertrain Coverage</p>
                      <p className="font-semibold">{vehicleDetails.warranty.powertrain}</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Right Column - Actions */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Mileage</span>
                  <span className="font-semibold">{vehicleDetails.mileage.toLocaleString()} miles</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Body Style</span>
                  <span className="font-semibold">{vehicleDetails.bodyStyle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Stock #</span>
                  <span className="font-semibold">ST{vehicleDetails.id}</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact" className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Contact Dealer</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md"
                    defaultValue={`I'm interested in the ${vehicleDetails.year} ${vehicleDetails.make} ${vehicleDetails.model}`}
                    required
                  />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="space-y-3">
                <Button variant="outline" className="w-full">
                  Schedule Test Drive
                </Button>
                <Button variant="outline" className="w-full">
                  View CARFAX Report
                </Button>
                <Button variant="outline" className="w-full">
                  Calculate Payment
                </Button>
                <Button variant="outline" className="w-full">
                  Share Vehicle
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 