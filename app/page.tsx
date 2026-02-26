import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Why from '@/components/Why'
import HowItWorks from '@/components/HowItWorks'
import Services from '@/components/Services'
import About from '@/components/About'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <Why />
      <HowItWorks />
      <Services />
      <About />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  )
}
