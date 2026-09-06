'use client'

import { motion } from 'framer-motion'
import Reveal from './Reveal'

const images = [
  {
    src: '/gym-2.jpeg',
    alt: 'Cardio equipment near the sunlit windows',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop',
    alt: 'Free weights rack',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop',
    alt: 'Barbell training',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop',
    alt: 'Group fitness energy',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop',
    alt: 'Spa relaxation area',
    span: '',
  },
]

export default function Gallery() {
  return (
    <section className="relative py-24 sm:py-32 bg-onyx">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold uppercase tracking-widest text-sm font-semibold">
            Inside The Kingdom
          </span>
          <h2 className="section-heading mt-3">
            Take a Look <span className="text-gold">Around</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 grid-rows-2 gap-4 h-auto sm:h-[520px]">
          {images.map((img, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              className={`relative rounded-2xl overflow-hidden group h-64 sm:h-auto ${img.span}`}
            >
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
