'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/SectionTitle'
import { 
  Target, 
  Users, 
  Award, 
  Building2, 
  CheckCircle, 
  Lightbulb,
  Shield,
  Clock,
  Heart,
  TrendingUp
} from 'lucide-react'


export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Quality Focus',
      description: 'We maintain the highest standards in every project, ensuring exceptional quality that exceeds client expectations.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Our approach revolves around understanding and fulfilling our clients\' unique needs and visions.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in design, construction, and service delivery, setting industry benchmarks.'
    },
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'We build lasting relationships based on trust, transparency, and unwavering integrity in all our dealings.'
    }
  ]

  const achievements = [
    {
      icon: Building2,
      title: '100 Projects',
      description: 'Successfully completed residential and commercial projects'
    },
    {
      icon: Users,
      title: '300+ Clients',
      description: 'Satisfied clients who trust us with their projects'
    },
    {
      icon: Clock,
      title: '10+ Years',
      description: 'Of experience in construction and architecture'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'All projects delivered with superior craftsmanship'
    }
  ]


  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Building Dreams with <span className="text-primary-600">Precision & Trust</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  At Devansh Construction & Architect, we have been transforming visions into reality for over a decade. 
                  Our commitment to quality, innovation, and client satisfaction has made us a trusted name in the 
                  construction and architecture industry.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
                  >
                    Get Consultation
                  </a>
                  <a
                    href="/projects"
                    className="bg-white hover:bg-gray-50 text-primary-600 font-semibold px-8 py-3 rounded-lg border-2 border-primary-600 transition-colors duration-200"
                  >
                    View Our Work
                  </a>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Construction Site"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Our Story"
            subtitle="Who We Are"
            description="Founded with a vision to deliver exceptional construction and architectural services, Devansh Construction & Architect has grown to become a trusted name in the industry."
            center={true}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To deliver quality construction and innovative architectural designs that exceed client expectations 
                while maintaining the highest standards of craftsmanship and professionalism. We believe in building 
                not just structures, but lasting relationships with our clients.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading construction and architectural firm recognized for our innovative designs, 
                quality construction, and exceptional client service. We aim to set new benchmarks in the 
                industry while contributing to sustainable and beautiful built environments.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Innovation</h4>
                </div>
                <p className="text-gray-600">
                  We embrace new technologies and innovative design solutions to create modern, efficient, and sustainable structures.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Passion</h4>
                </div>
                <p className="text-gray-600">
                  Our team is passionate about creating beautiful, functional spaces that enhance the quality of life for our clients.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Growth</h4>
                </div>
                <p className="text-gray-600">
                  We continuously evolve and improve our services to stay ahead of industry trends and client needs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Our Core Values"
            subtitle="What Drives Us"
            description="Our values guide every decision we make and every project we undertake, ensuring consistent quality and client satisfaction."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Our Achievements"
            subtitle="Track Record"
            description="Our success is measured by the satisfaction of our clients and the quality of projects we deliver."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary-600 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss your project and see how we can bring your vision to life with our expertise and commitment to quality.
            </p>
            <a
              href="/contact"
              className="bg-white hover:bg-gray-100 text-primary-600 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <CheckCircle className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
