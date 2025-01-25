import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/src/lib/utils'

const services = [
  {
    id: 'detailing',
    title: 'Auto Detailing',
    description: 'Our comprehensive detailing services will restore your vehicle\'s appearance inside and out.',
    image: 'https://placehold.co/1200x800/0066ff/ffffff?text=Auto+Detailing',
    features: [
      'Exterior hand wash and wax',
      'Interior deep cleaning',
      'Leather conditioning',
      'Paint correction',
      'Ceramic coating',
      'Engine bay cleaning',
    ],
    pricing: [
      {
        name: 'Basic Detail',
        price: 25000,
        includes: ['Exterior wash', 'Interior vacuum', 'Dashboard cleaning', 'Window cleaning'],
      },
      {
        name: 'Premium Detail',
        price: 45000,
        includes: ['Basic detail services', 'Paint decontamination', 'One-step paint correction', 'Sealant application'],
      },
      {
        name: 'Ultimate Detail',
        price: 75000,
        includes: ['Premium detail services', 'Two-step paint correction', 'Ceramic coating', 'Engine bay detail'],
      },
    ],
  },
  {
    id: 'maintenance',
    title: 'Maintenance Services',
    description: 'Keep your vehicle running at its best with our comprehensive maintenance services.',
    image: 'https://placehold.co/1200x800/0066ff/ffffff?text=Maintenance+Services',
    features: [
      'Oil changes',
      'Brake service',
      'Tire rotation',
      'Filter replacement',
      'Fluid checks',
      'Multi-point inspection',
    ],
    pricing: [
      {
        name: 'Basic Service',
        price: 15000,
        includes: ['Oil change', 'Filter replacement', 'Fluid level check', 'Basic inspection'],
      },
      {
        name: 'Intermediate Service',
        price: 35000,
        includes: ['Basic service', 'Brake inspection', 'Tire rotation', 'Battery test'],
      },
      {
        name: 'Full Service',
        price: 55000,
        includes: ['Intermediate service', 'Spark plug replacement', 'Transmission service', 'Cooling system service'],
      },
    ],
  },
  {
    id: 'repairs',
    title: 'Auto Repairs',
    description: 'Expert repair services for all makes and models, using quality parts and skilled technicians.',
    image: 'https://placehold.co/1200x800/0066ff/ffffff?text=Auto+Repairs',
    features: [
      'Diagnostic services',
      'Engine repairs',
      'Transmission work',
      'Brake repairs',
      'Electrical systems',
      'AC service',
    ],
    pricing: [
      {
        name: 'Diagnostic Service',
        price: 10000,
        includes: ['Computer diagnostic', 'Visual inspection', 'Test drive', 'Written report'],
      },
      {
        name: 'Minor Repairs',
        price: 25000,
        includes: ['Basic repairs', 'Parts replacement', 'System testing', 'Safety check'],
      },
      {
        name: 'Major Repairs',
        price: 100000,
        includes: ['Complex repairs', 'Major component replacement', 'Extended testing', 'Warranty service'],
      },
    ],
  },
  {
    id: 'protection',
    title: 'Paint Protection',
    description: 'Protect your vehicle\'s finish with our advanced paint protection solutions.',
    image: 'https://placehold.co/1200x800/0066ff/ffffff?text=Paint+Protection',
    features: [
      'Paint protection film',
      'Ceramic coating',
      'Vinyl wraps',
      'Window tinting',
      'Paint sealants',
      'Clear bra installation',
    ],
    pricing: [
      {
        name: 'Basic Protection',
        price: 35000,
        includes: ['Paint sealant', 'Basic ceramic coating', 'One-year protection'],
      },
      {
        name: 'Premium Protection',
        price: 75000,
        includes: ['Advanced ceramic coating', 'Partial PPF', 'Five-year protection'],
      },
      {
        name: 'Ultimate Protection',
        price: 150000,
        includes: ['Premium ceramic coating', 'Full PPF', 'Ten-year protection'],
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent">
          <Image
            src="https://placehold.co/1920x1080/0066ff/ffffff?text=Our+Services"
            alt="Auto services hero image"
            fill
            className="object-cover object-center -z-10 scale-105 animate-ken-burns"
            priority
          />
        </div>
        <div className="container relative h-full">
          <div className="flex h-full flex-col justify-center max-w-2xl text-white">
            <h1 className="text-5xl font-bold leading-tight mb-6 animate-fade-in-up">
              Our Services
            </h1>
            <p className="text-xl mb-8 text-gray-200 animate-fade-in-up animation-delay-200">
              Experience premium auto care services tailored to your vehicle\'s needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 transform hover:scale-105" asChild>
                    <Link href={`/booking?service=${service.id}`}>Book Now</Link>
                  </Button>
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
            <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Ready to Experience Premium Auto Care?</h2>
            <p className="text-xl mb-8 opacity-90 animate-fade-in-up animation-delay-200">
              Book your appointment today and give your vehicle the care it deserves.
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-fade-in-up animation-delay-400" 
              asChild
            >
              <Link href="/booking">Schedule Service</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
} 