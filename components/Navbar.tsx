"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="border-b sticky top-0 bg-background/30 backdrop-blur-sm z-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 max-w-6xl mx-auto">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="text-[#06ABEB]">Thay</span>Trust
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 lg:gap-6">
          <Link href="/workshop" className="text-sm font-medium hover:underline underline-offset-4">
            Workshop & Internships
          </Link>
          <Link href="/matrimony" className="text-sm font-medium hover:underline underline-offset-4">
            Matrimony Service
          </Link>
          <Link href="/testimonials" className="text-sm font-medium hover:underline underline-offset-4">
            Success Stories
          </Link>
        </nav>
        <Link href="/contact">
          <Button variant="outline" className="hidden md:flex border-[#06ABEB] text-[#06ABEB] hover:text-[#06ABEB] transition-colors w-full mt-2">
            Get Start
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <Button variant="outline" size="icon" className="md:hidden" onClick={toggleMenu}>
          <span className="sr-only">Toggle menu</span>
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 border-t bg-background">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-sm font-medium hover:text-[#06ABEB]" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="/workshop"
              className="text-sm font-medium hover:text-[#06ABEB]"
              onClick={() => setIsMenuOpen(false)}
            >
              Workshop & Internships
            </Link>
            <Link
              href="/matrimony"
              className="text-sm font-medium hover:text-[#06ABEB]"
              onClick={() => setIsMenuOpen(false)}
            >
              Matrimony Service
            </Link>
            <Link
              href="/testimonials"
              className="text-sm font-medium hover:text-[#06ABEB]"
              onClick={() => setIsMenuOpen(false)}
            >
              Success Stories
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-[#06ABEB]"
              onClick={() => setIsMenuOpen(false)}
            >
            <Button className="border-[#06ABEB] text-[#06ABEB] hover:bg-[#06ABEB] hover:text-white transition-colors w-full mt-2">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

