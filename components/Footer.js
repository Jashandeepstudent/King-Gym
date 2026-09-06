'use client'

import { Crown, MapPin, CreditCard, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-onyx border-t border-white/5 pt-16 pb-8">
      <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('#home')
            }}
            className="flex items-center gap-2 font-heading text-xl font-bold tracking-wide text-offwhite"
          >
            <Crown className="text-gold" size={24} fill="#FFD700" />
            THE KING&apos;S <span className="text-gold">GYM</span>
          </a>
          <p className="text-muted text-sm mt-4 leading-relaxed">
            R.S. Pura&apos;s premium unisex gym &amp; spa. Train like royalty,
            recover like one too.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-charcoal border border-white/10 flex items-center justify-center text-muted hover:text-gold hover:border-gold/40 transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-charcoal border border-white/10 flex items-center justify-center text-muted hover:text-gold hover:border-gold/40 transition-colors"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold uppercase tracking-wide text-offwhite text-sm mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {['About', 'Facilities', 'Reviews', 'Schedule', 'Contact'].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo(`#${link.toLowerCase()}`)
                  }}
                  className="text-muted text-sm hover:text-gold transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold uppercase tracking-wide text-offwhite text-sm mb-4">
            Location
          </h4>
          <div className="flex gap-3 text-muted text-sm">
            <MapPin className="text-gold shrink-0" size={18} />
            <p>
              Kotli Shah Daula, R.S. Pura
              <br />
              (Jammu–Sialkot border road)
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold uppercase tracking-wide text-offwhite text-sm mb-4">
            Payments Accepted
          </h4>
          <div className="flex gap-3 text-muted text-sm">
            <CreditCard className="text-gold shrink-0" size={18} />
            <p>We accept Debit Cards &amp; NFC Mobile Payments.</p>
          </div>
        </div>
      </div>

      <div className="container-x mt-12 pt-6 border-t border-white/5 text-center">
        <p className="text-muted text-xs">
          © 2026 The King&apos;s UNISEX GYM &amp; SPA. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
