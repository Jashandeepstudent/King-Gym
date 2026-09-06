'use client'

import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { Utensils, Target, Repeat } from 'lucide-react'

const programs = [
  {
    icon: Target,
    title: 'Goal-Based Training',
    desc: 'Whether it is weight loss, muscle gain, or general fitness, your coach builds a plan around your specific goal.',
  },
  {
    icon: Utensils,
    title: 'Diet Planning',
    desc: 'Nutrition guidance that fits your lifestyle — practical, sustainable, and built to support your training.',
  },
  {
    icon: Repeat,
    title: 'Consistent Guidance',
    desc: 'Ongoing form correction and workout adjustments so you keep progressing safely, session after session.',
  },
]

export default function Trainers() {
  return (
    <section id="trainers" className="relative py-24 sm:py-32 bg-charcoal overflow-hidden">
      <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
        <div className="order-2 lg:order-1">
          <Reveal>
            <span className="text-gold uppercase tracking-widest text-sm font-semibold">
              Expert Coaching
            </span>
            <h2 className="section-heading mt-3">
              Guidance From People Who <span className="text-gold">Know the Grind</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed">
              Members consistently point to our coaching as a standout — practical
              knowledge, honest feedback, and real attention paid to form and
              progress, not just a headcount on the gym floor.
            </p>
          </Reveal>

          <div className="mt-10 space-y-5">
            {programs.map((item, i) => (
              <Reveal key={item.title} delay={0.15 + i * 0.1}>
                <motion.div
                  whileHover={{ x: 6 }}
                  className="flex gap-4 bg-onyx border border-white/5 rounded-xl p-5 hover:border-gold/40 transition-colors duration-200"
                >
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                    <item.icon className="text-gold" size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold uppercase tracking-wide text-offwhite">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="order-1 lg:order-2">
          <div className="relative">
            <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop"
              alt="Personal trainer coaching a client"
              className="relative rounded-2xl w-full h-[460px] object-cover shadow-2xl border border-white/5"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
