"use client"
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
    
        <Link href="/" className="text-xl font-bold text-gray-800">
        <Image
        src="/images/company.png" // ✅ public folder ke andar path dena hai
        alt="Logo"
        width={120}
        height={60}
      />        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-gray-600 hover:text-black">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-black">
            About
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-black">
            Services
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-black">
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-600 hover:text-black"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-2">
          <Link href="/" className="block py-2 text-gray-700 hover:text-black">
            Home
          </Link>
          <Link href="/about" className="block py-2 text-gray-700 hover:text-black">
            About
          </Link>
          <Link href="/services" className="block py-2 text-gray-700 hover:text-black">
            Services
          </Link>
          <Link href="/contact" className="block py-2 text-gray-700 hover:text-black">
            Contact
          </Link>
        </div>
      )}
    </header>
    <Carousel className="w-full max-w-5xl mx-auto mt-10">
  <CarouselContent>
    <CarouselItem className="flex flex-col items-center justify-center text-center bg-gray-100 rounded-xl p-10 shadow-lg">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Cloud Stacking Services</h2>
      <p className="text-lg text-gray-700 mb-6">
        Boost your online presence with powerful and SEO-friendly cloud stacking techniques.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
        Learn More
      </button>
    </CarouselItem>

    <CarouselItem className="flex flex-col items-center justify-center text-center bg-gray-100 rounded-xl p-10 shadow-lg">
      <h2 className="text-3xl font-bold text-green-600 mb-4">SEO Optimization</h2>
      <p className="text-lg text-gray-700 mb-6">
        Improve your Google rankings with expert SEO strategies and content stacking.
      </p>
      <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
        Explore SEO
      </button>
    </CarouselItem>

    <CarouselItem className="flex flex-col items-center justify-center text-center bg-gray-100 rounded-xl p-10 shadow-lg">
      <h2 className="text-3xl font-bold text-purple-600 mb-4">Digital Authority</h2>
      <p className="text-lg text-gray-700 mb-6">
        Establish your brand as a trusted leader through cloud authority links.
      </p>
      <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition">
        Build Authority
      </button>
    </CarouselItem>
  </CarouselContent>

  <CarouselPrevious className="ml-2 mt-4" />
  <CarouselNext className="mr-2 mt-4" />
</Carousel>

    </>

  )
}



