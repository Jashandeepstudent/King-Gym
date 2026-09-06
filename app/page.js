import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Facilities from '@/components/Facilities'
import Gallery from '@/components/Gallery'
import Trainers from '@/components/Trainers'
import Testimonials from '@/components/Testimonials'
import Schedule from '@/components/Schedule'
import Membership from '@/components/Membership'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Facilities />
      <Gallery />
      <Trainers />
      <Testimonials />
      <Schedule />
      <Membership />
      <Contact />
      <Footer />
    </main>
  )
}
