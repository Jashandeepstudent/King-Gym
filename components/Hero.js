'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown, Star } from 'lucide-react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen min-h-[650px] w-full overflow-hidden flex items-center justify-center"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -top-20 -bottom-20"
      >
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop"
          alt="Modern gym equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/80 via-onyx/70 to-onyx" />
        <div className="absolute inset-0 bg-onyx/30" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 container-x text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-1 mb-5"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} className="text-gold" fill="#FFD700" />
          ))}
          <span className="ml-2 text-sm text-muted uppercase tracking-widest">
            R.S. Pura&apos;s Most Trusted Gym
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-heading uppercase font-extrabold leading-[1.05] text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-offwhite"
        >
          Train Like <span className="text-gold">Royalty</span>
          <br />
          in R.S. Pura
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-muted"
        >
          World-class modern equipment, expert coaching, and a premium spa
          experience — right in your neighborhood.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-gold-gradient text-onyx font-heading font-bold uppercase tracking-wide px-9 py-4 rounded-full shadow-gold-lg hover:scale-105 transition-transform duration-200 w-full sm:w-auto"
          >
            Start Your Fitness Journey
          </a>
          <a
            href="#facilities"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#facilities')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="border-2 border-white/20 text-offwhite font-heading font-bold uppercase tracking-wide px-9 py-4 rounded-full hover:border-gold hover:text-gold transition-colors duration-200 w-full sm:w-auto"
          >
            Explore Facilities
          </a>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={scrollToNext}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted hover:text-gold transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  )
}
