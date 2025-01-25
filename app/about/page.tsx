import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const team = [
  {
    name: 'John Smith',
    role: 'Owner & Master Technician',
    bio: 'With over 20 years of experience in the automotive industry, John brings his expertise from Lagos, Nigeria to provide premium auto care services in Providence.',
  },
  {
    name: 'Mike Johnson',
    role: 'Service Manager',
    bio: 'Mike ensures that every service meets our high standards of quality and customer satisfaction with his 15 years of automotive experience.',
  },
  {
    name: 'David Chen',
    role: 'Lead Technician',
    bio: 'David specializes in diagnostics and repairs, bringing 12 years of expertise in working with both domestic and imported vehicles.',
  },
  {
    name: 'Lisa Rodriguez',
    role: 'Customer Relations',
    bio: 'Lisa is dedicated to providing exceptional customer service and ensuring a smooth experience for every client.',
  },
]

const milestones = [
  {
    year: '2015',
    title: 'Company Founded',
    description: 'Lagos Auto PVD was established with a vision to revolutionize auto care services in Lagos.',
  },
  {
    year: '2017',
    title: 'Service Expansion',
    description: 'Expanded our services to include premium detailing and paint protection solutions.',
  },
  {
    year: '2019',
    title: 'New Facility',
    description: 'Opened our state-of-the-art service center with modern equipment and amenities.',
  },
  {
    year: '2021',
    title: 'Industry Recognition',
    description: 'Received multiple awards for excellence in auto care and customer service.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
          <Image
            src="https://placehold.co/1920x1080/0066ff/ffffff?text=Our+Modern+Facility"
            alt="Our workshop"
            fill
            className="object-cover object-center -z-10"
            priority
          />
        </div>
        <div className="container relative text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Lagos Auto PVD</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your trusted partner in premium automotive care in Providence since 2015.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Lagos Auto PVD was founded in 2015 with a simple mission: to provide exceptional auto care services that exceed expectations. What started as a small workshop has grown into Providence's premier automotive care facility.
                </p>
                <p>
                  Our commitment to quality, attention to detail, and customer satisfaction has earned us a reputation as the go-to destination for discerning vehicle owners in Providence and beyond.
                </p>
                <p>
                  Today, we continue to invest in the latest technology and training to ensure we provide the best possible service to our valued clients.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://placehold.co/1200x800/0066ff/ffffff?text=Our+Modern+Facility"
                alt="Our modern facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl font-bold text-blue-600 mb-4">{milestone.year}</div>
                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of experienced professionals is dedicated to providing the highest quality service and care for your vehicle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={`https://placehold.co/600x800/0066ff/ffffff?text=${encodeURIComponent(member.name)}`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-300">
                We strive for excellence in everything we do, from the quality of our work to customer service.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-300">
                We operate with complete transparency and honesty in all our dealings with customers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-300">
                We continuously invest in the latest technology and techniques to provide better service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Experience the Difference</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join our growing family of satisfied customers and give your vehicle the care it deserves.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                <Link href="/booking">Book a Service</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 