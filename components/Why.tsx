'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Zap, DollarSign, TrendingUp } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'No Tech Background Needed',
    description:
      "We translate AI out of jargon and into plain English. You don't need to know how it works under the hood — just how it helps your business today.",
  },
  {
    icon: DollarSign,
    title: 'Built for Real Budgets',
    description:
      'Most of our engagements start under $500. We use the same no-code, low-cost tools we trust to run our own business — not expensive enterprise software.',
  },
  {
    icon: TrendingUp,
    title: 'Practical, Real-World Results',
    description:
      "Every recommendation is grounded in what actually works for small businesses — not theoretical frameworks or enterprise playbooks that don't translate.",
  },
]

export default function Why() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-semibold text-xs uppercase tracking-[0.18em] mb-4">
            Why Mainstreet AI
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            AI that actually works
            <br />
            <span className="text-gradient">for your business</span>
          </h2>
          <p className="text-purple-200/55 text-lg max-w-xl mx-auto leading-relaxed">
            The same tools used by Fortune 500s are now available to everyone.
            They just need the right guide to put them to work.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className="glass rounded-2xl p-8 group hover:border-purple-500/35 hover:glow transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:bg-purple-500/25 transition-colors duration-200">
                <reason.icon className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{reason.title}</h3>
              <p className="text-purple-200/55 leading-relaxed text-[15px]">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
