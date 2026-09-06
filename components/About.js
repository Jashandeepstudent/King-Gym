'use client'

import Reveal from './Reveal'
import { Award, Users, Accessibility, Sparkles } from 'lucide-react'

const stats = [
  { icon: Award, label: '#1 Rated', sub: 'in R.S. Pura' },
  { icon: Users, label: '500+', sub: 'Happy Members' },
  { icon: Accessibility, label: '100%', sub: 'Accessible' },
  { icon: Sparkles, label: 'Premium', sub: 'Spa Included' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-onyx overflow-hidden">
      <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 bg-gold/10 rounded-3xl blur-2xl" />
            <img
              src="/gym-1.jpeg"
              alt="Inside The King's Gym training floor"
              className="relative rounded-2xl w-full h-[420px] object-cover shadow-2xl border border-white/5"
            />
            <div className="absolute -bottom-6 -right-6 bg-charcoal border border-gold/30 rounded-2xl px-6 py-4 shadow-gold hidden sm:block">
              <p className="font-heading text-3xl font-bold text-gold">4.8★</p>
              <p className="text-xs text-muted uppercase tracking-wide">Google Rating</p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-gold uppercase tracking-widest text-sm font-semibold">
              About The King&apos;s Gym
            </span>
            <h2 className="section-heading mt-3">
              A Local Cornerstone of <span className="text-gold">Fitness</span> & Wellness
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-muted text-base sm:text-lg leading-relaxed">
              Nestled in the heart of R.S. Pura, The King&apos;s UNISEX GYM &amp; SPA
              has become a trusted name for members who want more than just a
              workout. We&apos;ve built a space with genuinely world-class modern
              equipment, real coaching expertise, and a warm, welcoming
              atmosphere — proving that premium fitness doesn&apos;t need to be
              confined to the big city.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-4 text-muted text-base sm:text-lg leading-relaxed">
              From diverse strength machines to a fully accessible layout with
              a wheelchair-friendly entrance and car park, every detail is
              designed so that anyone — beginner or seasoned athlete — feels
              at home the moment they walk in.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-charcoal border border-white/5 rounded-xl p-4 text-center hover:border-gold/40 transition-colors duration-200"
                >
                  <stat.icon className="mx-auto text-gold mb-2" size={22} />
                  <p className="font-heading font-bold text-lg text-offwhite">
                    {stat.label}
                  </p>
                  <p className="text-xs text-muted">{stat.sub}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
