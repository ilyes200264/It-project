"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Award, Target, Clock } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
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
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold sm:text-5xl">About Us</h1>
            <p className="mt-4 text-xl">Your success is our reason for being</p>
          </div>
        </div>
      </motion.section>

      {/* About Us Content */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <motion.div variants={fadeInUp} className="flex flex-col justify-center space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-lg text-gray-600">
                Ocera Informatique is a proud Quebec-based company, specialized in information technology and digital
                transformation. Founded with a vision to provide exceptional IT services to businesses and self-employed
                professionals, we have grown to become a trusted partner for organizations of all sizes.
              </p>
              <p className="text-lg text-gray-600">
                We professionally assist businesses and self-employed workers in setting up computer tools, solving
                problems and unforeseen technical issues. Our team of experienced IT professionals is dedicated to
                helping you navigate the complex world of technology and find solutions that work for your specific
                needs.
              </p>
              <p className="text-lg text-gray-600">
                We excel at integrating the processes and equipments needed to optimize the performance and realization
                of your ambitious projects. Our approach is always client-centered, focusing on delivering practical
                solutions that drive real business results.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Ocera Team"
                width={600}
                height={500}
                className="rounded-lg shadow-xl object-cover h-[500px] hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Mission */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-gray-50 py-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="mt-6 text-lg text-gray-600">
              At Ocera Informatique, our mission is to empower businesses and self-employed professionals with reliable,
              efficient, and innovative IT solutions that drive growth and success. We are committed to providing
              exceptional service, building lasting relationships, and delivering technology solutions that make a real
              difference.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Our Values</h2>
            <p className="mt-4 text-lg text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div variants={fadeInUp}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-blue-100 p-3">
                    <CheckCircle className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for excellence in everything we do, from customer service to technical solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-blue-100 p-3">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Client-Centered</h3>
                  <p className="text-gray-600">
                    Our clients' needs are at the heart of our business. We listen, understand, and deliver.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-blue-100 p-3">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Integrity</h3>
                  <p className="text-gray-600">
                    We operate with honesty, transparency, and ethical standards in all our interactions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-blue-100 p-3">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">Innovation</h3>
                  <p className="text-gray-600">
                    We embrace new technologies and creative solutions to stay ahead in a rapidly evolving industry.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Approach */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="bg-gray-50 py-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <motion.div variants={fadeInUp} className="flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Our Approach"
                width={600}
                height={500}
                className="rounded-lg shadow-xl object-cover h-[500px] hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col justify-center space-y-6">
              <h2 className="text-3xl font-bold">Our Approach</h2>
              <p className="text-lg text-gray-600">
                Aware of today's trends and corporate reality, our notable IT experience translates into a quality,
                proactive and affordable approach. We understand that every business is unique, which is why we take the
                time to understand your specific needs and challenges before recommending solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300">
                  <div className="mt-1 rounded-full bg-blue-100 p-1">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Personalized Solutions</h3>
                    <p className="text-gray-600">We tailor our services to meet your specific business needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300">
                  <div className="mt-1 rounded-full bg-blue-100 p-1">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Proactive Support</h3>
                    <p className="text-gray-600">
                      We identify and address potential issues before they become problems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300">
                  <div className="mt-1 rounded-full bg-blue-100 p-1">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Long-term Partnership</h3>
                    <p className="text-gray-600">
                      We build lasting relationships with our clients, becoming a trusted extension of their team.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Why Choose Ocera Informatique</h2>
            <p className="mt-4 text-lg text-gray-600">What sets us apart from other IT service providers</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div variants={fadeInUp}>
              <div className="flex flex-col space-y-4 rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="rounded-full bg-blue-100 p-3 w-fit">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Quick Response Time</h3>
                <p className="text-gray-600">
                  We understand that IT issues can disrupt your business operations. That's why we prioritize quick
                  response times to minimize downtime.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="flex flex-col space-y-4 rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="rounded-full bg-blue-100 p-3 w-fit">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Experienced Team</h3>
                <p className="text-gray-600">
                  Our team consists of highly skilled IT professionals with years of experience in various aspects of
                  information technology.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="flex flex-col space-y-4 rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="rounded-full bg-blue-100 p-3 w-fit">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Customized Solutions</h3>
                <p className="text-gray-600">
                  We don't believe in one-size-fits-all solutions. We work closely with you to develop customized IT
                  strategies that align with your business goals.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Commitment */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-blue-600 py-16 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold">Our Commitment to You</h2>
            <p className="mt-6 text-xl">
              At Ocera Informatique, we are committed to providing exceptional IT services that help your business
              thrive. We promise to be responsive, reliable, and dedicated to your success.
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
  )
}
