"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Headphones, Wrench, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

export default function ServicesPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll(".service-section")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">Our Services</h1>
            <p className="mt-4 text-xl">Comprehensive IT solutions tailored to your business needs</p>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Remote Support */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 service-section"
          >
            <motion.div variants={fadeInUp} className="flex flex-col justify-center space-y-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <Headphones className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold">Remote Support</h2>
              <p className="text-lg text-gray-600">
                In the face of everyday IT unforeseen events, our remote expertise is an express troubleshooting service
                so that you can resume your business activities as quickly as possible.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 text-blue-600">•</div>
                  <span>Technical logistical problems (Outlook, Zoom, Google Meets, Google Drive etc)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 text-blue-600">•</div>
                  <span>Network technical problems (Internet connectivity, server, Wi-Fi, Bluetooth etc)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 text-blue-600">•</div>
                  <span>
                    Explanations and help regarding the operation of technological tools (desktop computer/laptop,
                    cellphone, tablet, surveillance camera systems, router, printer etc)
                  </span>
                </li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
                alt="Remote Support"
                width={500}
                height={400}
                className="rounded-lg shadow-xl object-cover h-[400px] hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>

          {/* Equipment and Installation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 service-section"
          >
            <motion.div variants={fadeInUp} className="order-2 flex flex-col justify-center space-y-6 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=2070&auto=format&fit=crop"
                alt="Equipment and Installation"
                width={500}
                height={400}
                className="rounded-lg shadow-xl object-cover h-[400px] hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="order-1 flex flex-col justify-center space-y-6 md:order-2">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <Wrench className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold">Equipment and Installation</h2>
              <p className="text-lg text-gray-600">
                Whether it is to obtain computer equipment for the purpose of making a project a reality or to replace
                outdated or defective tools, we provide all the necessary support for your stock of computing equipment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 text-blue-600">•</div>
                  <span>IT Diagnostic (assessment of your technology equipment needs and pricing)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 text-blue-600">•</div>
                  <span>Replacement of obsolete or defective tools</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 text-blue-600">•</div>
                  <span>Workstation building (purchase of computer parts and related accessories)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 text-blue-600">•</div>
                  <span>
                    Installation of technological tools (workstation, surveillance system, router, printer etc)
                  </span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Training */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-20 grid grid-cols-1 gap-12 md:grid-cols-2 service-section"
          >
            <motion.div variants={fadeInUp} className="flex flex-col justify-center space-y-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold">Training</h2>
              <p className="text-lg text-gray-600">
                We help your team become familiar with the use of a vast selection of softwares or technological
                equipment, all of that to optimize the performance and productivity of your business.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 text-blue-600">•</div>
                  <span>Software training (Outlook, Zoom, Google Meets, Google Drive, Word, Excel etc)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0 text-blue-600">•</div>
                  <span>
                    Technology training (new workstations, new printer, new cellphone, new tablet, new payment system
                    etc)
                  </span>
                </li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                alt="Training"
                width={500}
                height={400}
                className="rounded-lg shadow-xl object-cover h-[400px] hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>

          {/* Other service sections... */}
          {/* CTA Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="bg-blue-600 py-16 text-white mt-16 rounded-lg"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold sm:text-4xl">Ready to get started?</h2>
                <p className="mt-4 text-xl">
                  Contact us today to discuss your IT needs and how we can help your business thrive.
                </p>
                <div className="mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </section>
    </div>
  )
}
