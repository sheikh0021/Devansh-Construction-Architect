'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/SectionTitle'
import ContactForm from '@/components/ContactForm'
import RippleButton from '@/components/RippleButton'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  ArrowRight,
  Building2,
  Users,
  Award,
  Clock as ClockIcon
} from 'lucide-react'


export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our experts',
      action: 'tel:7249400319',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Come to our office',
      value: 'Office No.09,C-Wing,Yogin Belva,Santnagar,Lohegaon,Pune-411047',
      action: '#',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick chat with our team',
      action: 'https://wa.me/917249400319',
      color: 'bg-green-100 text-green-600'
    }
  ]

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ]

  const whyContactUs = [
    {
      icon: Building2,
      title: 'Expert Consultation',
      description: 'Get professional advice from our experienced architects and engineers'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Work with our committed team of construction professionals'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Ensure your project meets the highest quality standards'
    },
    {
      icon: ClockIcon,
      title: 'Timely Delivery',
      description: 'Projects completed on schedule with regular progress updates'
    }
  ]

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
                Get in <span className="text-primary-600">Touch</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ready to start your next construction or architectural project? Contact us today for a free consultation. 
                Our expert team is here to help bring your vision to life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Contact Information"
            subtitle="Get In Touch"
            description="Choose your preferred way to reach us. We're here to help with all your construction and architectural needs."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-primary-200 text-center flex flex-col h-full"
              >
                <div className={`w-16 h-16 ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <method.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{method.description}</p>
                {method.value ? (
                  <p className="text-primary-600 font-medium mb-4">{method.value}</p>
                ) : null}
                <div className="mt-auto">
                  <RippleButton href={method.action} className="w-full">
                    <method.icon className="w-4 h-4" />
                    <span>{method.title === 'Call Us' ? 'Call Now' : method.title === 'WhatsApp' ? 'Chat Now' : 'Visit'}</span>
                  </RippleButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Send Us a Message"
            subtitle="Contact Form"
            description="Fill out the form below and we'll get back to you within 24 hours with a detailed response to your inquiry."
            center={true}
          />
          
          <div className="mt-16">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Why Contact Us?"
            subtitle="Our Commitment"
            description="When you contact Devansh Constro & Architect, you get more than just a construction service - you get a partner committed to your success."
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {whyContactUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="Working Hours"
              subtitle="When We're Available"
              description="Our team is available during these hours to assist you with your construction and architectural needs."
              center={true}
            />
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {workingHours.map((schedule, index) => (
                <motion.div
                  key={schedule.day}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
                >
                  <span className="font-medium text-gray-900">{schedule.day}</span>
                  <span className="text-primary-600 font-semibold">{schedule.hours}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 max-w-2xl mx-auto p-6 bg-primary-50 rounded-xl border border-primary-200"
            >
              <div className="flex items-center space-x-3 mb-3">
                <Clock className="w-6 h-6 text-primary-600" />
                <h4 className="font-semibold text-primary-800">Emergency Support</h4>
              </div>
              <p className="text-primary-700 text-sm leading-relaxed">
                For urgent matters outside working hours, please use the contact button above. 
                We provide emergency support for critical construction issues.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Find Us"
            subtitle="Our Location"
            description="Visit our office in Lohegaon, Pune. We're conveniently located and easily accessible."
            center={true}
          />
          
          <div className="mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-[16/9] w-full">
                {/* Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278876!2d73.85674391541647!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c065144d8edf%3A0x3703b8095866c54b!2sLohegaon%2C%20Pune%2C%20Maharashtra%20411047!5e0!3m2!1sen!2sin!4v1628000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Devansh Construction Location"
                />
              </div>
            </motion.div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Don&apos;t wait! Contact us today and let&apos;s discuss how we can bring your construction or architectural vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <RippleButton href="tel:7249400319" className="bg-white text-primary-600 hover:bg-gray-100">
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </RippleButton>
              <RippleButton href="https://wa.me/917249400319" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </RippleButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
