"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/ocera-logo.png"
            alt="Ocera Informatique Logo"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-blue-600">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-blue-600">
            Services
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-blue-600">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-blue-600">
            Contact Us
          </Link>
          <Button asChild variant="default" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/contact">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container mx-auto px-4 py-4 sm:px-6">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-sm font-medium transition-colors hover:text-blue-600" onClick={toggleMenu}>
                Home
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium transition-colors hover:text-blue-600"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium transition-colors hover:text-blue-600"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium transition-colors hover:text-blue-600"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
              <Button asChild variant="default" className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href="/contact" onClick={toggleMenu}>
                  Get Started
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
