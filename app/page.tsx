"use client"
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Image from "next/image";


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
  
    </>

  )
}



