"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Monitor, Server, Shield, Smartphone, Wrench, Phone, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const whyChooseUsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

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

    const sections = document.querySelectorAll("section")
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
      {/* Hero Section - Completely Redesigned */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative overflow-hidden bg-white py-20"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-100 opacity-60"></div>
          <div className="absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-blue-50 opacity-60"></div>
          <div className="absolute right-1/4 top-1/3 h-40 w-40 rounded-full bg-blue-200 opacity-40"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            {/* Left Content */}
            <motion.div variants={fadeInUp} className="mb-12 max-w-2xl text-center lg:mb-0 lg:text-left">
              <div className="mb-6 flex items-center justify-center lg:justify-start">
                <Image
                  src="/images/ocera-logo.svg"
                  alt="Ocera Informatique Logo"
                  width={180}
                  height={60}
                  className="h-16 w-auto"
                />
              </div>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Your External</span>
                <span className="block text-blue-600">IT Department</span>
              </h1>
              <p className="mb-8 text-xl text-gray-600">
                Targeted IT solutions for businesses and self-employed professionals. An ocean of possibilities awaits
                you.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 rounded-full px-8"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Get Started <ArrowRight size={16} />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 rounded-full px-8"
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div variants={fadeInUp} className="relative">
              <div className="relative">
                <Image
                  src="/images/it-expert.jpg"
                  alt="IT Expert working on server hub"
                  width={650}
                  height={450}
                  className="h-auto w-[650px] transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-green-500 p-2">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">24/7 Support</p>
                    <p className="text-sm text-gray-600">Always available for you</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 -top-6 rounded-lg bg-white p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="rounded-full bg-blue-500 p-2">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Secure Solutions</p>
                    <p className="text-sm text-gray-600">Enterprise-grade security</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div variants={staggerContainer} className="mt-20 grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
            <motion.div variants={fadeInUp} className="flex flex-col">
              <span className="text-3xl font-bold text-blue-600">500+</span>
              <span className="text-gray-600">Happy Clients</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col">
              <span className="text-3xl font-bold text-blue-600">10+</span>
              <span className="text-gray-600">Years Experience</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col">
              <span className="text-3xl font-bold text-blue-600">99%</span>
              <span className="text-gray-600">Client Satisfaction</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col">
              <span className="text-3xl font-bold text-blue-600">24/7</span>
              <span className="text-gray-600">Support Available</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <motion.section
        ref={servicesRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-20 animate-out bg-gray-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">Comprehensive IT solutions tailored to your business needs</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div variants={fadeInUp}>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Monitor className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Remote Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Express troubleshooting service to help you resume business activities quickly.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Wrench className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Equipment & Installation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Complete support for your computing equipment needs and installation.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <CardHeader className="flex flex-row items-center space-x-4">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Server className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Cloud-based Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    State-of-the-art cloud solutions to simplify your business management.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        ref={whyChooseUsRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-20 animate-out"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Why Choose Ocera Informatique</h2>
            <p className="mt-4 text-lg text-gray-600">
              We provide exceptional IT services with a focus on quality and customer satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div variants={fadeInUp} className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-blue-100 p-4 transition-all duration-300 hover:bg-blue-200">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Expertise</h3>
              <p className="text-gray-600">
                Our team consists of highly skilled IT professionals with years of experience.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-blue-100 p-4 transition-all duration-300 hover:bg-blue-200">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Security</h3>
              <p className="text-gray-600">
                We prioritize the security of your data and systems with robust protection measures.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-blue-100 p-4 transition-all duration-300 hover:bg-blue-200">
                <Smartphone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Modern Solutions</h3>
              <p className="text-gray-600">
                We stay up-to-date with the latest technologies to provide cutting-edge solutions.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-blue-100 p-4 transition-all duration-300 hover:bg-blue-200">
                <Server className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Reliability</h3>
              <p className="text-gray-600">Count on us for dependable IT support whenever you need it.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-blue-600 py-20 text-white animate-out"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Contact us so that we can guide you</h2>
            <p className="mt-4 text-xl">Let us establish a personalized plan that will meet all of your needs.</p>
            <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span className="text-lg">(514) 400-1259</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
