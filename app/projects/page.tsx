'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/SectionTitle'
import ProjectCard from '@/components/ProjectCard'
import { 
  Building2, 
  Home, 
  Factory, 
  ShoppingBag, 
  GraduationCap, 
  Filter,
  Search,
  Eye,
  Calendar,
  MapPin,
  ArrowRight
} from 'lucide-react'


export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Educational', 'Mixed Use']

  const projects = [
    {
      title: 'Modern Luxury Villa',
      description: 'A stunning 4-BHK luxury villa with contemporary design, premium finishes, and smart home features in a prime location.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Residential',
      location: 'Pune, Maharashtra',
      year: '2023',
      size: '4500 sq ft',
      features: ['4 BHK', 'Modern Design', 'Smart Home', 'Premium Finishes']
    },
    {
      title: 'Corporate Office Complex',
      description: 'Multi-story corporate office building with modern amenities, energy-efficient design, and flexible workspace solutions.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Commercial',
      location: 'Pune, Maharashtra',
      year: '2023',
      size: '25,000 sq ft',
      features: ['Glass Facade', 'Energy Efficient', 'Flexible Layout', 'Modern Amenities']
    },
    {
      title: 'Apartment Complex',
      description: 'Premium residential apartment complex with 2 and 3 BHK units, modern amenities, and landscaped gardens.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Residential',
      location: 'Pune, Maharashtra',
      year: '2022',
      size: '1,00,000 sq ft',
      features: ['2 & 3 BHK', 'Landscaped Gardens', 'Modern Amenities', 'Premium Location']
    },
    {
      title: 'Shopping Mall',
      description: 'Modern shopping mall with retail spaces, food court, entertainment zones, and ample parking facilities.',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Commercial',
      location: 'Pune, Maharashtra',
      year: '2022',
      size: '2,50,000 sq ft',
      features: ['Retail Spaces', 'Food Court', 'Entertainment', 'Ample Parking']
    },
    {
      title: 'Industrial Warehouse',
      description: 'Large-scale industrial warehouse facility with modern loading systems, climate control, and security features.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Industrial',
      location: 'Pune, Maharashtra',
      year: '2021',
      size: '1,50,000 sq ft',
      features: ['Climate Control', 'Loading Systems', 'Security Features', 'Modern Infrastructure']
    },
    {
      title: 'Educational Campus',
      description: 'Modern educational campus with classrooms, laboratories, library, sports facilities, and administrative buildings.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Educational',
      location: 'Pune, Maharashtra',
      year: '2021',
      size: '3,00,000 sq ft',
      features: ['Modern Classrooms', 'Laboratories', 'Library', 'Sports Facilities']
    },
    {
      title: 'Luxury Penthouse',
      description: 'Exclusive penthouse with panoramic views, premium finishes, private terrace, and luxury amenities.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Residential',
      location: 'Pune, Maharashtra',
      year: '2023',
      size: '3500 sq ft',
      features: ['Panoramic Views', 'Private Terrace', 'Luxury Amenities', 'Premium Finishes']
    },
    {
      title: 'Mixed-Use Development',
      description: 'Integrated mixed-use development combining residential, commercial, and recreational spaces in a modern setting.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Mixed Use',
      location: 'Pune, Maharashtra',
      year: '2022',
      size: '5,00,000 sq ft',
      features: ['Residential Units', 'Commercial Spaces', 'Recreation Areas', 'Integrated Design']
    },
    {
      title: 'Healthcare Facility',
      description: 'Modern healthcare facility with patient rooms, operation theaters, diagnostic centers, and administrative areas.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Commercial',
      location: 'Pune, Maharashtra',
      year: '2021',
      size: '75,000 sq ft',
      features: ['Patient Rooms', 'Operation Theaters', 'Diagnostic Center', 'Modern Equipment']
    }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const categoryIcons = {
    'All': Building2,
    'Residential': Home,
    'Commercial': ShoppingBag,
    'Industrial': Factory,
    'Educational': GraduationCap,
    'Mixed Use': Building2
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-primary-600">Project Portfolio</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Explore our diverse portfolio of completed projects showcasing our expertise in residential, 
                commercial, industrial, and educational construction across Pune and Maharashtra.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = categoryIcons[category as keyof typeof categoryIcons]
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-primary-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-primary-600">{filteredProjects.length}</span> projects
              {selectedCategory !== 'All' && (
                <span> in <span className="font-semibold text-primary-600">{selectedCategory}</span></span>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary-200"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        {project.year}
                      </span>
                    </div>

                    {/* View Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200 flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Project Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Completed: {project.year}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Building2 className="w-4 h-4 mr-2" />
                        <span>Size: {project.size}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">
                          +{project.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Projects Found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                }}
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">100</div>
              <div className="text-primary-100">Projects Completed</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">300+</div>
              <div className="text-primary-100">Happy Clients</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">10+</div>
              <div className="text-primary-100">Years Experience</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-100">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let us bring your vision to life with our expertise in architectural design and construction. 
              Contact us today for a free consultation.
            </p>
            <a
              href="/contact"
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
