'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { ImageWithLightbox } from '@/components/ui/ImageWithLightbox'
import Link from 'next/link'

type Category = 'all' | 'detailing' | 'protection' | 'maintenance' | 'repairs'

const categories: { value: Category; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'detailing', label: 'Detailing' },
  { value: 'protection', label: 'Protection' },
  { value: 'maintenance', label: 'Maintenance' },
  { value: 'repairs', label: 'Repairs' },
]

const galleryItems = [
  {
    title: 'Professional Detailing',
    description: 'Expert detailing service for luxury vehicles',
    src: 'https://placehold.co/800x800/0066ff/ffffff?text=Professional+Detailing',
    alt: 'Car detailing service',
    category: 'detailing',
  },
  {
    title: 'Paint Protection',
    description: 'Premium paint protection application',
    src: 'https://placehold.co/800x800/0066ff/ffffff?text=Paint+Protection',
    alt: 'Paint protection service',
    category: 'protection',
  },
  {
    title: 'Engine Maintenance',
    description: 'Comprehensive engine maintenance service',
    src: 'https://placehold.co/800x800/0066ff/ffffff?text=Engine+Maintenance',
    alt: 'Engine maintenance',
    category: 'maintenance',
  },
  {
    title: 'Brake Service',
    description: 'Professional brake system repairs',
    src: 'https://placehold.co/800x800/0066ff/ffffff?text=Brake+Service',
    alt: 'Brake repair service',
    category: 'repairs',
  },
  {
    title: 'Interior Detailing',
    description: 'Thorough interior cleaning and restoration',
    src: 'https://placehold.co/800x800/0066ff/ffffff?text=Interior+Detailing',
    alt: 'Interior detailing service',
    category: 'detailing',
  },
  {
    title: 'Ceramic Coating',
    description: 'Advanced ceramic coating protection',
    src: 'https://placehold.co/800x800/0066ff/ffffff?text=Ceramic+Coating',
    alt: 'Ceramic coating application',
    category: 'protection',
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  )

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent">
          <Image
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
            alt="Gallery hero image"
            fill
            className="object-cover object-center -z-10 scale-105 animate-ken-burns"
            priority
          />
        </div>
        <div className="container relative h-full">
          <div className="flex h-full flex-col justify-center max-w-2xl text-white">
            <h1 className="text-5xl font-bold leading-tight mb-6 animate-fade-in-up">
              Our Work
            </h1>
            <p className="text-xl mb-8 text-gray-200 animate-fade-in-up animation-delay-200">
              Browse through our portfolio of premium auto care services.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-400">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={activeCategory === category.value ? "default" : "outline"}
                onClick={() => setActiveCategory(category.value)}
                className="min-w-[100px] transition-all duration-300 transform hover:scale-105"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${(index + 4) * 200}ms` }}
              >
                <ImageWithLightbox
                  src={item.src}
                  alt={item.alt}
                  className="aspect-square object-cover transform group-hover:scale-105 transition-transform duration-500"
                  width={800}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Ready to Transform Your Vehicle?</h2>
            <p className="text-xl mb-8 opacity-90 animate-fade-in-up animation-delay-200">
              Experience our premium auto care services firsthand.
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400" 
              asChild
            >
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
} 