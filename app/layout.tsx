import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import MobileMenu from '@/components/layout/MobileMenu'
import { Toaster } from '@/components/ui/Toaster'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: 'Lagos Auto PVD - Professional Auto Services',
  description: 'Premier auto repair and maintenance services in Providence. Specializing in professional vehicle detailing, repairs, and maintenance.',
  metadataBase: new URL('http://localhost:3000'),
  keywords: 'auto repair, car maintenance, vehicle detailing, Providence auto services, car repair shop',
  authors: [{ name: 'Lagos Auto PVD' }],
  openGraph: {
    title: 'Lagos Auto PVD - Professional Auto Services',
    description: 'Premier auto repair and maintenance services in Providence, RI',
    type: 'website',
    locale: 'en_US',
    siteName: 'Lagos Auto PVD',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lagos Auto PVD - Professional Auto Services',
    description: 'Premier auto repair and maintenance services in Providence, RI',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {/* Top Contact Bar */}
        <div className="bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center py-2 text-sm">
              <div className="flex items-center space-x-4 mb-2 md:mb-0">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <Link href="https://maps.google.com/?q=702+Douglas+Avenue+Providence+RI" target="_blank" className="hover:text-blue-400">
                    702 Douglas Avenue, Providence, RI
                  </Link>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a href="tel:+14015377630" className="hover:text-blue-400">
                    (401) 537-7630
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="hidden md:inline">Mon-Fri: 9:00 AM - 5:00 PM | Sat: 9:00 AM - 2:00 PM</span>
                  <span className="md:hidden">Open Today</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="sticky top-0 z-50 bg-white shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-xl font-bold text-blue-600">
                Lagos Auto PVD
              </Link>
              <div className="hidden lg:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Home
                </Link>
                <div className="relative group">
                  <Link href="/inventory" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Inventory
                  </Link>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                    <Link href="/vehicle-finder" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Vehicle Finder
                    </Link>
                  </div>
                </div>
                <div className="relative group">
                  <Link href="/financing" className="text-gray-700 hover:text-blue-600 transition-colors">
                    Financing
                  </Link>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                    <Link href="/financing#calculator" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Loan Calculator
                    </Link>
                    <Link href="/financing#apply" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Apply Online
                    </Link>
                  </div>
                </div>
                <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Services
                </Link>
                <Link href="/reviews" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Reviews
                </Link>
                <div className="relative group">
                  <button className="text-gray-700 hover:text-blue-600 transition-colors">
                    OUR STORE
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                    <Link href="/store" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Store Info
                    </Link>
                    <Link href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Blog
                    </Link>
                    <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      About Us
                    </Link>
                    <Link href="/staff" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Meet Our Staff
                    </Link>
                    <Link href="/privacy" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Privacy Policy
                    </Link>
                  </div>
                </div>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
                <Link href="/es" className="text-gray-700 hover:text-blue-600 transition-colors">
                  En Español
                </Link>
              </div>
              <div className="hidden lg:block">
                <Link
                  href="/booking"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                  Book Now
                </Link>
              </div>
              <MobileMenu />
            </div>
          </div>
        </nav>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Lagos Auto PVD</h3>
                <p>Professional auto services you can trust.</p>
                <div className="mt-4 space-x-4">
                  <a
                    href="https://www.facebook.com/LagosAutoPVD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/lagos_auto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/inventory" className="text-gray-400 hover:text-white transition-colors">
                      Browse Inventory
                    </Link>
                  </li>
                  <li>
                    <Link href="/financing" className="text-gray-400 hover:text-white transition-colors">
                      Financing Options
                    </Link>
                  </li>
                  <li>
                    <Link href="/vehicle-finder" className="text-gray-400 hover:text-white transition-colors">
                      Vehicle Finder
                    </Link>
                  </li>
                  <li>
                    <Link href="/reviews" className="text-gray-400 hover:text-white transition-colors">
                      Customer Reviews
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p>Phone: (401) 537-7630</p>
                <p>Email: Lagosauto702@gmail.com</p>
                <p className="mt-2">702 Douglas Avenue</p>
                <p>Providence, RI, United States</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Hours</h3>
                <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                <p>Sat: 9:00 AM - 2:00 PM</p>
                <p>Sun: Closed</p>
                <Link 
                  href="/booking" 
                  className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
                >
                  Schedule Service
                </Link>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p>&copy; {new Date().getFullYear()} Lagos Auto PVD. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  )
} 