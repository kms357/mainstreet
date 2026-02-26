'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Phone, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[-5%] w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-violet-800/15 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[10%] left-[30%] w-[400px] h-[400px] bg-purple-900/25 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />

        {/* Top gradient fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#1A0A2E] to-transparent" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 pt-36 pb-24 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-purple-300 mb-10"
        >
          <Sparkles size={14} className="text-purple-400" />
          AI Consulting Built for Main Street Businesses
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-7"
        >
          Think AI Isn&apos;t <br className="hidden sm:block" />
          for Your Business?{' '}
          <br className="hidden sm:block" />
          <span className="text-gradient">Think Again.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-lg md:text-xl text-purple-200/60 max-w-2xl mx-auto leading-relaxed mb-11"
        >
          We bring enterprise-grade AI to small businesses — affordable, practical, and tailored to
          you. No tech background needed. No big budgets required.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2.5 btn-primary text-white px-8 py-4 rounded-xl font-semibold text-base shadow-xl shadow-purple-950/60 w-full sm:w-auto justify-center"
          >
            Book Your Free Discovery Call
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-150" />
          </a>
          <a
            href="#services"
            className="flex items-center gap-2.5 glass hover:border-purple-500/40 text-purple-200 hover:text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 w-full sm:w-auto justify-center"
          >
            See Our Services
          </a>
        </motion.div>

        {/* Contact strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-purple-300/40"
        >
          <span className="flex items-center gap-1.5">
            <Phone size={13} />
            +1 617-852-2117
          </span>
          <span className="hidden sm:inline text-purple-700">·</span>
          <span>Free 30-minute call</span>
          <span className="hidden sm:inline text-purple-700">·</span>
          <span>No commitment</span>
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#1A0A2E] to-transparent pointer-events-none" />
    </section>
  )
}
