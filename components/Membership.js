'use client'

import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { Check, Crown } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: '₹1,200',
    period: '/month',
    features: ['Full gym floor access', 'Locker facility', 'Standard hours access'],
    highlight: false,
  },
  {
    name: 'Royal',
    price: '₹2,000',
    period: '/month',
    features: [
      'Full gym floor access',
      'Personal coaching sessions',
      'Diet planning consultation',
      'Priority equipment access',
    ],
    highlight: true,
  },
  {
    name: 'King\u2019s Elite',
    price: '₹2,800',
    period: '/month',
    features: [
      'Everything in Royal',
      'Unlimited spa access',
      'Saturday happy hour perks',
      'Progress tracking with coach',
    ],
    highlight: false,
  },
]

export default function Membership() {
  return (
    <section className="relative py-24 sm:py-32 bg-onyx">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold uppercase tracking-widest text-sm font-semibold">
            Membership
          </span>
          <h2 className="section-heading mt-3">
            Pick Your <span className="text-gold">Kingdom Pass</span>
          </h2>
          <p className="text-muted mt-4">
            Simple, transparent plans. Ask us in person about student and family discounts.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className={`relative rounded-2xl p-8 h-full border ${
                  plan.highlight
                    ? 'bg-charcoal border-gold shadow-gold-lg scale-100 md:scale-105'
                    : 'bg-charcoal border-white/5'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-gradient text-onyx text-xs font-heading font-bold uppercase tracking-wide px-4 py-1.5 rounded-full flex items-center gap-1">
                    <Crown size={14} fill="#121212" /> Most Popular
                  </div>
                )}
                <h3 className="font-heading font-bold text-2xl uppercase tracking-wide text-offwhite text-center">
                  {plan.name}
                </h3>
                <div className="text-center mt-4 mb-8">
                  <span className="font-heading font-extrabold text-4xl text-gold">
                    {plan.price}
                  </span>
                  <span className="text-muted">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-muted text-sm">
                      <Check className="text-gold shrink-0 mt-0.5" size={18} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`block text-center font-heading font-bold uppercase tracking-wide py-3 rounded-full transition-transform duration-200 hover:scale-105 ${
                    plan.highlight
                      ? 'bg-gold-gradient text-onyx shadow-gold'
                      : 'border-2 border-white/20 text-offwhite hover:border-gold hover:text-gold'
                  }`}
                >
                  Choose Plan
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
