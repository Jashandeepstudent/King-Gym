'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Crown } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Trainers', href: '#trainers' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-onyx/95 backdrop-blur-md shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#home')
          }}
          className="flex items-center gap-2 font-heading text-xl sm:text-2xl font-bold tracking-wide text-offwhite"
        >
          <Crown className="text-gold" size={28} fill="#FFD700" />
          THE KING&apos;S <span className="text-gold">GYM</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
              className="text-sm font-medium text-muted hover:text-gold transition-colors duration-200 uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#contact')
          }}
          className="hidden lg:inline-block bg-gold-gradient text-onyx font-heading font-bold uppercase tracking-wide text-sm px-6 py-2.5 rounded-full shadow-gold hover:scale-105 transition-transform duration-200"
        >
          Join the Kingdom
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-offwhite"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-charcoal border-t border-white/5"
          >
            <div className="container-x py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="text-base font-medium text-muted hover:text-gold transition-colors uppercase tracking-wide"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('#contact')
                }}
                className="bg-gold-gradient text-onyx font-heading font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full text-center shadow-gold"
              >
                Join the Kingdom
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
