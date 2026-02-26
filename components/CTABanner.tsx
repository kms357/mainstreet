'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, ArrowRight } from 'lucide-react'

export default function CTABanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-purple-800/12 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent" />
        {/* Decorative ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-purple-500/8" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-purple-500/6" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-purple-400 font-semibold text-xs uppercase tracking-[0.18em] mb-5">
            Get Started Today
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.08]">
            Ready to bring AI
            <br />
            <span className="text-gradient">to your business?</span>
          </h2>
          <p className="text-purple-200/55 text-lg max-w-xl mx-auto mb-11 leading-relaxed">
            Start with a free 30-minute discovery call. No pressure, no pitch — just an honest
            conversation about where AI can make a real difference for you.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="tel:+16178522117"
              className="group flex items-center gap-2.5 btn-primary text-white px-8 py-4 rounded-xl font-semibold text-base shadow-xl shadow-purple-950/60 w-full sm:w-auto justify-center"
            >
              <Phone size={17} />
              Call +1 617-852-2117
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform duration-150"
              />
            </a>
            <a
              href="mailto:hello@mainstreetaico.com"
              className="flex items-center gap-2.5 glass hover:border-purple-500/40 text-purple-200 hover:text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <Mail size={17} />
              Send an Email
            </a>
          </div>

          {/* Trust line */}
          <p className="text-purple-300/30 text-sm tracking-wide">
            Free 30-min call &nbsp;·&nbsp; No commitment &nbsp;·&nbsp; No tech background needed
          </p>
        </motion.div>
      </div>
    </section>
  )
}
