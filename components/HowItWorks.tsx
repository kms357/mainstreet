'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, Compass, Rocket } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Discover',
    subtitle: 'Free 30-min call',
    description:
      "We start with a free discovery call to understand your business, your goals, and where AI can make the biggest immediate impact — no pressure, no pitch.",
  },
  {
    icon: Compass,
    step: '02',
    title: 'Design',
    subtitle: 'Your custom roadmap',
    description:
      "We build a tailored plan with the right tools, workflows, and automations for your business — not a one-size-fits-all template pulled from a generic playbook.",
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Deploy',
    subtitle: 'Launch & hand off',
    description:
      "We implement the solutions and train you and your team to use them confidently, so you're not dependent on us to keep things running.",
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="how-it-works" className="py-28 relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-semibold text-xs uppercase tracking-[0.18em] mb-4">
            The Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            From first call to{' '}
            <span className="text-gradient">running AI</span>
          </h2>
          <p className="text-purple-200/55 text-lg max-w-lg mx-auto">
            Simple, transparent, and designed to get you results fast.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[52px] left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 + i * 0.14 }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon block */}
              <div className="relative mb-8 z-10">
                <div className="w-[104px] h-[104px] rounded-2xl btn-primary flex items-center justify-center shadow-2xl shadow-purple-950/60">
                  <step.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
                <div className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full glass border border-purple-400/30 flex items-center justify-center">
                  <span className="text-xs font-bold text-purple-300">{i + 1}</span>
                </div>
              </div>

              {/* Card */}
              <div className="glass rounded-2xl p-6 w-full">
                <p className="text-purple-400 text-xs font-semibold uppercase tracking-widest mb-2">
                  {step.subtitle}
                </p>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-purple-200/55 text-[15px] leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
