'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const links = [
  { label: 'Why Us', href: '#why' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-dark shadow-xl shadow-purple-950/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="Mainstreet AI"
            width={200}
            height={60}
            className="h-20 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-purple-200/70 hover:text-white text-sm font-medium transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden lg:flex btn-primary items-center gap-1.5 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-purple-900/40"
        >
          Book a Free Call
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-purple-300 hover:text-white transition-colors p-1"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden glass-dark border-t border-purple-500/20 px-6 py-5 space-y-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-purple-200/70 hover:text-white text-sm font-medium py-2.5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block btn-primary text-white text-sm font-semibold text-center py-3 rounded-xl mt-4"
          >
            Book a Free Call
          </a>
        </div>
      )}
    </nav>
  )
}
