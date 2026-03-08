'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, Brain, Linkedin } from 'lucide-react'
import Image from 'next/image'

const credentials = [
  {
    icon: Building2,
    label: 'Former Management Consultant',
    sub: 'Oliver Wyman',
  },
  {
    icon: Brain,
    label: 'AI Leader at Fortune 500 Firms',
    sub: 'Enterprise AI strategy & implementation',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/15 rounded-full blur-[120px]" />
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
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Meet the <span className="text-gradient">founder</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative w-full max-w-[340px] mx-auto">
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/20 to-purple-900/10 rounded-[2rem] blur-2xl" />
              {/* Card */}
              <div className="relative glass rounded-3xl overflow-hidden aspect-[4/5]">
                <Image
                  src="/ashish.jpg"
                  alt="Ashish Bhargava"
                  fill
                  className="object-cover object-top"
                  sizes="340px"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            <h3 className="text-3xl font-bold mb-1">Ashish Bhargava</h3>
            <p className="text-purple-400 font-medium text-base mb-7">
              Founder &amp; Principal AI Consultant
            </p>

            <p className="text-purple-200/60 leading-relaxed mb-5 text-[15px]">
              Ashish spent years helping Fortune 500 companies navigate AI transformation — as a
              management consultant at Oliver Wyman and as an AI leader at some of the world&apos;s
              largest firms. He saw firsthand how powerful these tools could be, and how out of
              reach they felt for everyone else.
            </p>

            <p className="text-purple-200/60 leading-relaxed mb-9 text-[15px]">
              Mainstreet AI exists to close that gap. Ashish brings the same rigor and strategic
              thinking he applied at the enterprise level to businesses of any size — without the
              enterprise price tag or the corporate jargon.
            </p>

            {/* Credentials */}
            <div className="space-y-3 mb-9">
              {credentials.map((cred) => (
                <div key={cred.label} className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/12 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <cred.icon className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium leading-tight">{cred.label}</p>
                    <p className="text-purple-300/50 text-xs mt-0.5">{cred.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://linkedin.com/in/ashishbhargava"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 glass border-purple-500/25 hover:border-purple-500/50 text-purple-300 hover:text-white px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200"
            >
              <Linkedin size={15} />
              Connect on LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
