'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { MapPin, Phone, CreditCard, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Hook this up to your backend / form service (e.g. Formspree, EmailJS) later.
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-charcoal">
      <div className="container-x grid lg:grid-cols-2 gap-14">
        <div>
          <Reveal>
            <span className="text-gold uppercase tracking-widest text-sm font-semibold">
              Visit Us
            </span>
            <h2 className="section-heading mt-3">
              Start Your <span className="text-gold">Journey Today</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5">
              <div className="flex gap-4 items-start bg-onyx border border-white/5 rounded-xl p-5">
                <MapPin className="text-gold shrink-0 mt-0.5" size={22} />
                <div>
                  <p className="font-heading font-bold uppercase tracking-wide text-offwhite text-sm">
                    Location
                  </p>
                  <p className="text-muted mt-1">
                    Kotli Shah Daula, R.S. Pura
                    <br />
                    Jammu–Sialkot Border Road
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-onyx border border-white/5 rounded-xl p-5">
                <Phone className="text-gold shrink-0 mt-0.5" size={22} />
                <div>
                  <p className="font-heading font-bold uppercase tracking-wide text-offwhite text-sm">
                    Get In Touch
                  </p>
                  <p className="text-muted mt-1">
                    Walk in during business hours or send us a message and
                    we&apos;ll get back to you.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start bg-onyx border border-white/5 rounded-xl p-5">
                <CreditCard className="text-gold shrink-0 mt-0.5" size={22} />
                <div>
                  <p className="font-heading font-bold uppercase tracking-wide text-offwhite text-sm">
                    Payments
                  </p>
                  <p className="text-muted mt-1">
                    We accept Debit Cards &amp; NFC Mobile Payments.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="bg-onyx border border-white/5 rounded-2xl p-8 sm:p-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <CheckCircle2 className="text-gold mb-4" size={48} />
                <h3 className="font-heading font-bold text-xl uppercase text-offwhite">
                  Message Sent!
                </h3>
                <p className="text-muted mt-2">
                  We&apos;ll be in touch shortly. See you at the gym!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-heading font-bold text-xl uppercase tracking-wide text-offwhite mb-2">
                  Send Us a Message
                </h3>
                <div>
                  <label className="block text-sm text-muted mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-offwhite placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-offwhite placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your fitness goals..."
                    className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-offwhite placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold-gradient text-onyx font-heading font-bold uppercase tracking-wide py-3.5 rounded-full shadow-gold hover:scale-[1.02] transition-transform duration-200 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
