import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const services = [
  {
    title: 'Auto Detailing',
    description: 'Professional interior and exterior detailing services to keep your vehicle looking its best.',
    icon: '🚗',
    href: '/services#detailing',
  },
  {
    title: 'State Inspection',
    description: 'Complete state inspection services to ensure your vehicle meets all safety and emissions requirements.',
    icon: '🔍',
    href: '/services#inspection',
  },
  {
    title: 'Maintenance',
    description: 'Regular maintenance services to keep your vehicle running smoothly and efficiently.',
    icon: '🔧',
    href: '/services#maintenance',
  },
  {
    title: 'Repairs',
    description: 'Expert repair services for all makes and models, from minor fixes to major repairs.',
    icon: '⚡',
    href: '/services#repairs',
  },
  {
    title: 'Paint Protection',
    description: 'Premium paint protection solutions to preserve your vehicle\'s appearance.',
    icon: '🎨',
    href: '/services#protection',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60">
          <img
            src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80"
            alt="Luxury car being detailed"
            className="absolute inset-0 object-cover object-center -z-10 scale-105 animate-ken-burns w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
        <div className="container relative h-full">
          <div className="flex h-full flex-col justify-center max-w-3xl text-white">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-600/90 rounded-lg text-sm font-semibold tracking-wider uppercase animate-fade-in-up">
                  Professional Auto Care
                </span>
              </div>
              <h1 className="text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
                Experience Excellence in <br />
                <span className="text-blue-400">Automotive Care</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200 animate-fade-in-up animation-delay-200 leading-relaxed">
                Where precision meets passion. Our expert team delivers exceptional detailing, 
                maintenance, and repair services to keep your vehicle in pristine condition.
              </p>
              <div className="flex gap-4 animate-fade-in-up animation-delay-400">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg" 
                  asChild
                >
                  <Link href="/booking">Schedule Service</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 px-8 py-6 text-lg" 
                  asChild
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 animate-fade-in-up">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-blue-400">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Expert Technicians</h3>
              <p className="text-gray-400">Our certified professionals bring years of experience and dedication to every service.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 animate-fade-in-up animation-delay-200">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-blue-400">★</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Premium Service</h3>
              <p className="text-gray-400">Exceptional attention to detail and premium products for outstanding results.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 animate-fade-in-up animation-delay-400">
              <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl text-blue-400">♦</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Satisfaction Guaranteed</h3>
              <p className="text-gray-400">We stand behind our work with a 100% satisfaction guarantee on all services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of automotive services to keep your vehicle in perfect condition.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group block bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Lagos Auto PVD?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
                    <p className="text-gray-600">Our certified technicians bring years of experience and expertise to every service.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Premium Service</h3>
                    <p className="text-gray-600">We use only the highest quality products and equipment for superior results.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
                    <p className="text-gray-600">Your satisfaction is our priority, backed by our service guarantee.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
                alt="Our modern workshop"
                className="absolute inset-0 object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Premium Auto Care?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Book your appointment today and give your vehicle the care it deserves.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
              <Link href="/booking">Schedule Service</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
} 