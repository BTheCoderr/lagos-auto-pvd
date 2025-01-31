import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/contact"
            className="block w-full border border-gray-300 text-gray-700 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
} 