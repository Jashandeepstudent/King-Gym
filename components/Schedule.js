'use client'

import Reveal from './Reveal'
import { Clock, PartyPopper } from 'lucide-react'

const days = [
  { day: 'Monday', hours: '6:00 AM – 10:00 PM' },
  { day: 'Tuesday', hours: '6:00 AM – 10:00 PM' },
  { day: 'Wednesday', hours: '6:00 AM – 10:00 PM' },
  { day: 'Thursday', hours: '6:00 AM – 10:00 PM' },
  { day: 'Friday', hours: '6:00 AM – 10:00 PM' },
  { day: 'Saturday', hours: '6:00 AM – 10:00 PM' },
  { day: 'Sunday', hours: 'Closed', closed: true },
]

export default function Schedule() {
  return (
    <section id="schedule" className="relative py-24 sm:py-32 bg-charcoal">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold uppercase tracking-widest text-sm font-semibold">
            Schedule
          </span>
          <h2 className="section-heading mt-3">
            Train On <span className="text-gold">Your Time</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Hours table */}
          <Reveal className="lg:col-span-3">
            <div className="bg-onyx border border-white/5 rounded-2xl p-6 sm:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-gold" size={24} />
                <h3 className="font-heading font-bold text-xl uppercase tracking-wide text-offwhite">
                  Regular Hours
                </h3>
              </div>
              <div className="divide-y divide-white/5">
                {days.map((d) => (
                  <div
                    key={d.day}
                    className="flex items-center justify-between py-3.5"
                  >
                    <span className="text-muted font-medium">{d.day}</span>
                    <span
                      className={`font-heading font-semibold tracking-wide ${
                        d.closed ? 'text-crimson' : 'text-offwhite'
                      }`}
                    >
                      {d.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Happy hours highlight */}
          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="relative h-full bg-gold-gradient rounded-2xl p-8 sm:p-10 flex flex-col justify-center overflow-hidden shadow-gold-lg">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10" />
              <div className="absolute -left-6 -bottom-10 w-32 h-32 rounded-full bg-white/10" />
              <div className="relative z-10">
                <PartyPopper className="text-onyx mb-4" size={36} />
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase tracking-wide text-onyx">
                  Saturday Happy Hours
                </h3>
                <p className="text-onyx/80 font-medium mt-3">
                  Exclusive member perks and offers every Saturday.
                </p>
                <p className="font-heading font-extrabold text-3xl sm:text-4xl text-onyx mt-6">
                  9:00 AM – 5:00 PM
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
