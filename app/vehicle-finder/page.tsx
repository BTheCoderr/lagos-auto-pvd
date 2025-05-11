import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export default function VehicleFinderPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
          <Image
            src="https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?auto=format&fit=crop&w=800&q=80"
            alt="Vehicle Finder"
            fill
            className="object-cover object-center -z-10"
            priority
          />
        </div>
        <div className="container relative text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Vehicle Finder</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Let us help you find your perfect vehicle.
          </p>
        </div>
      </section>

      {/* Vehicle Finder Form */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Make
                    </label>
                    <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select Make</option>
                      <option value="toyota">Toyota</option>
                      <option value="honda">Honda</option>
                      <option value="ford">Ford</option>
                      {/* Add more options */}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Model
                    </label>
                    <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select Model</option>
                      {/* Models will be populated based on make */}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Year Range
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">From</option>
                        {[...Array(20)].map((_, i) => (
                          <option key={i} value={2024 - i}>
                            {2024 - i}
                          </option>
                        ))}
                      </select>
                      <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">To</option>
                        {[...Array(20)].map((_, i) => (
                          <option key={i} value={2024 - i}>
                            {2024 - i}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price Range
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="number"
                        placeholder="Min"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="number"
                        placeholder="Max"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Body Style
                    </label>
                    <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select Body Style</option>
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV</option>
                      <option value="truck">Truck</option>
                      <option value="coupe">Coupe</option>
                      <option value="van">Van</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Transmission
                    </label>
                    <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select Transmission</option>
                      <option value="automatic">Automatic</option>
                      <option value="manual">Manual</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Features
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Leather Seats
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Navigation
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Sunroof
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Bluetooth
                    </label>
                  </div>
                </div>

                <Button className="w-full">Find Vehicles</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-gray-600 mb-8">
              Let our team help you find the perfect vehicle. Contact us directly and we'll do the searching for you.
            </p>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  )
} 