'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Map, Wrench, Zap, Users, Settings } from 'lucide-react'

interface Service {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  title: string
  price: string
  description: string
  features: string[]
}

const services: Service[] = [
  {
    icon: Map,
    title: 'Quick-Start Action Plan',
    price: 'From $400',
    description:
      'Your personalized AI roadmap. We audit your business, identify the highest-impact opportunities, and deliver a step-by-step plan you can start executing immediately.',
    features: ['Business AI audit', 'Prioritized opportunity list', 'Tool recommendations', 'Implementation roadmap'],
  },
  {
    icon: Wrench,
    title: 'AI Essentials Toolkit',
    price: 'From $350',
    description:
      'Get the right tools set up and configured for your business, with custom prompts and workflows built around how you actually work day-to-day.',
    features: ['Tool selection & setup', 'Custom prompts library', 'Workflow templates', 'Quick-start training'],
  },
  {
    icon: Zap,
    title: 'Automation Starter Pack',
    price: 'From $500',
    description:
      'Your first working AI automation — fully built, tested, and handed off. We handle the technical setup so you can focus on running your business.',
    features: ['1 complete automation', 'No-code/low-code tools', 'Full documentation', '30-day support'],
  },
  {
    icon: Users,
    title: 'Live AI Workshop',
    price: 'From $450',
    description:
      'A hands-on training session for you and your team. Walk away knowing exactly how to use AI tools effectively in your daily work.',
    features: ['Up to 5 team members', '2–3 hour live session', 'Practical exercises', 'Recording + resources'],
  },
  {
    icon: Settings,
    title: 'Custom Consulting',
    price: 'Per project',
    description:
      'For businesses with more complex needs. Full-scope AI strategy, multi-system integrations, and ongoing advisory — scoped to your situation.',
    features: ['Full needs assessment', 'Multi-system integrations', 'Ongoing advisory support', 'Dedicated contact'],
  },
]

function ServiceCard({ service, i, isInView }: { service: Service; i: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08 + i * 0.09 }}
      className="glass rounded-2xl p-7 flex flex-col hover:border-purple-500/35 hover:glow transition-all duration-300 group"
    >
      {/* Header row */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-11 h-11 rounded-xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/25 transition-colors">
          <service.icon className="w-5 h-5 text-purple-400" strokeWidth={1.75} />
        </div>
        <span className="text-purple-300 font-semibold text-xs bg-purple-500/10 border border-purple-500/20 px-3 py-1.5 rounded-full">
          {service.price}
        </span>
      </div>

      <h3 className="text-lg font-bold mb-3 text-white leading-snug">{service.title}</h3>
      <p className="text-purple-200/55 text-[14px] leading-relaxed mb-6 flex-1">{service.description}</p>

      {/* Feature list */}
      <ul className="space-y-2 mb-7">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5 text-[13px] text-purple-200/70">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-purple-500/25 hover:border-purple-500/50 hover:bg-purple-500/10 text-purple-300 hover:text-white text-sm font-medium transition-all duration-200 group/btn"
      >
        Get Started
        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-150" />
      </a>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-semibold text-xs uppercase tracking-[0.18em] mb-4">
            Services &amp; Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Everything you need to
            <br />
            <span className="text-gradient">get started with AI</span>
          </h2>
          <p className="text-purple-200/55 text-lg max-w-xl mx-auto">
            Transparent pricing. No retainers. No surprises. Start with whatever makes sense
            for your business right now.
          </p>
        </motion.div>

        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, i) => (
            <ServiceCard key={service.title} service={service} i={i} isInView={isInView} />
          ))}
        </div>

        {/* Bottom row: 2 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 lg:max-w-[calc(66.67%+12px)] lg:mx-auto">
          {services.slice(3).map((service, i) => (
            <ServiceCard key={service.title} service={service} i={i + 3} isInView={isInView} />
          ))}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center text-purple-300/35 text-xs mt-10"
        >
          * Prices are starting points — final pricing depends on project scope.
          Book a free call for a precise quote.
        </motion.p>
      </div>
    </section>
  )
}
