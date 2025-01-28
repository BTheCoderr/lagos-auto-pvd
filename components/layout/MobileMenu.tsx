'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [inventoryOpen, setInventoryOpen] = useState(false)
  const [financingOpen, setFinancingOpen] = useState(false)
  const [storeOpen, setStoreOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        className="p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg p-4">
          {/* Contact Information */}
          <div className="mb-6 border-b pb-4">
            <div className="space-y-3">
              <a
                href="tel:+14015377630"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                (401) 537-7630
              </a>
              <Link
                href="https://maps.google.com/?q=702+Douglas+Avenue+Providence+RI"
                target="_blank"
                className="flex items-center text-gray-700 hover:text-blue-600"
              >
                <svg
                  className="w-5 h-5 mr-2"
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
                702 Douglas Avenue, Providence, RI
              </Link>
              <div className="flex items-center text-gray-700">
                <svg
                  className="w-5 h-5 mr-2"
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
                <div className="flex flex-col">
                  <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
                  <span>Sat: 9:00 AM - 2:00 PM</span>
                  <span>Sun: Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <div>
              <button
                className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setInventoryOpen(!inventoryOpen)}
              >
                <span>Inventory</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    inventoryOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {inventoryOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/inventory"
                    className="block text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Browse Inventory
                  </Link>
                  <Link
                    href="/vehicle-finder"
                    className="block text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Vehicle Finder
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setFinancingOpen(!financingOpen)}
              >
                <span>Financing</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    financingOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {financingOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/financing#calculator"
                    className="block text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Loan Calculator
                  </Link>
                  <Link
                    href="/financing#apply"
                    className="block text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Apply Online
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/services"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/reviews"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Reviews
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <div>
              <button
                className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setStoreOpen(!storeOpen)}
              >
                <span>Our Store</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    storeOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {storeOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/store"
                    className="block text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Store Info
                  </Link>
                  <Link
                    href="/blog"
                    className="block text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/about"
                    className="block text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/staff"
                    className="block text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Meet Our Staff
                  </Link>
                  <Link
                    href="/privacy"
                    className="block text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Privacy Policy
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/es"
              className="block text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              En Español
            </Link>

            <Link
              href="/booking"
              className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </div>
  )
} 