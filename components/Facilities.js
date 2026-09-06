'use client'

import { motion } from 'framer-motion'
import Reveal from './Reveal'
import {
  Dumbbell,
  HeartPulse,
  ClipboardList,
  Sparkles,
  Accessibility,
  Music4,
} from 'lucide-react'

const facilities = [
  {
    icon: Dumbbell,
    title: 'Advanced Equipment',
    desc: 'Diverse machines focusing on all muscle groups, from free weights to precision-engineered strength stations.',
  },
  {
    icon: HeartPulse,
    title: 'Cardio Zone',
    desc: 'A dedicated cardio floor with treadmills, ellipticals, and cycles to build endurance and torch calories.',
  },
  {
    icon: ClipboardList,
    title: 'Expert Coaching',
    desc: 'Practical knowledge, personalized diet planning, and hands-on workout guidance from trained coaches.',
  },
  {
    icon: Sparkles,
    title: 'Premium Spa',
    desc: 'Relax and recover after a hard workout with our in-house spa experience — recovery is part of the program.',
  },
  {
    icon: Accessibility,
    title: 'Fully Accessible',
    desc: 'Wheelchair-accessible entrance and car park, with modern, comfortable restrooms for every member.',
  },
  {
    icon: Music4,
    title: 'Upbeat Atmosphere',
    desc: 'Great music, good energy, and an encouraging community that keeps you coming back for more.',
  },
]

export default function Facilities() {
  return (
    <section id="facilities" className="relative py-24 sm:py-32 bg-charcoal">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold uppercase tracking-widest text-sm font-semibold">
            Facilities &amp; Amenities
          </span>
          <h2 className="section-heading mt-3">
            Everything You Need, <span className="text-gold">Under One Roof</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group bg-onyx border border-white/5 rounded-2xl p-8 h-full hover:shadow-gold hover:border-gold/40 transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <item.icon className="text-gold" size={26} />
                </div>
                <h3 className="font-heading font-bold text-xl uppercase tracking-wide text-offwhite mb-3">
                  {item.title}
                </h3>
                <p className="text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
