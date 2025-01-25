import Link from 'next/link'

export default function BookingSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 text-center text-green-500 text-5xl">
            ✓
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Booking Successful!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Thank you for choosing Lagos Auto PVD. We have received your booking request.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <p className="text-center text-gray-700">
            We will contact you shortly to confirm your appointment.
          </p>
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Return to Home
            </Link>
            <Link
              href="/services"
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 