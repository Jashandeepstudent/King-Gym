'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from './Reveal'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
  {
    name: 'Ankush Sudan',
    text: "No 1 gym in R.S. Pura — fully trained coach and perfect machines.",
  },
  {
    name: 'Pritam Singh',
    text: "Wonderful. It's an honor to be part of such a great fitness center with world class modern equipment and coaches in a remote area.",
  },
  {
    name: 'Yesudeep Gill',
    text: "Awesome machines and coach, full facilities with no such problems faced in previous gyms.",
  },
  {
    name: 'Alka Sharma',
    text: "I absolutely love using the fitness center at The King's Gym. It is overall a good atmosphere, there is nice equipment, upbeat music, and good people.",
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % reviews.length)
  }, [])

  const prev = () => {
    setIndex((p) => (p - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 4500)
    return () => clearInterval(timer)
  }, [next, paused])

  return (
    <section id="reviews" className="relative py-24 sm:py-32 bg-onyx overflow-hidden">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold uppercase tracking-widest text-sm font-semibold">
            Community Trust
          </span>
          <h2 className="section-heading mt-3">
            What Our <span className="text-gold">Members Say</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-gold" fill="#FFD700" />
            ))}
            <span className="ml-2 text-muted text-sm">Google Reviews</span>
          </div>
        </Reveal>

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="absolute -top-6 left-1/2 -translate-x-1/2 text-gold/20" size={64} />

          <div className="relative min-h-[260px] sm:min-h-[220px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45 }}
                className="w-full bg-charcoal border border-white/5 rounded-2xl p-8 sm:p-10 text-center shadow-xl"
              >
                <div className="flex items-center justify-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-gold" fill="#FFD700" />
                  ))}
                </div>
                <p className="text-lg sm:text-xl text-offwhite leading-relaxed italic">
                  &ldquo;{reviews[index].text}&rdquo;
                </p>
                <p className="mt-6 font-heading font-bold text-gold uppercase tracking-wide">
                  {reviews[index].name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            aria-label="Previous review"
            className="absolute top-1/2 -translate-y-1/2 -left-3 sm:-left-14 w-11 h-11 rounded-full bg-charcoal border border-white/10 flex items-center justify-center text-offwhite hover:text-gold hover:border-gold/40 transition-colors"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            aria-label="Next review"
            className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-14 w-11 h-11 rounded-full bg-charcoal border border-white/10 flex items-center justify-center text-offwhite hover:text-gold hover:border-gold/40 transition-colors"
          >
            <ChevronRight size={22} />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-gold' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
