'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Is AI actually relevant to a small business like mine?',
    answer:
      "Absolutely. AI tools today can handle tasks like drafting emails, answering customer questions, summarizing documents, automating repetitive data entry, and generating marketing content — for any business, any size. The question isn't whether AI applies to you; it's where to start.",
  },
  {
    question: 'Do I need any technical knowledge to work with you?',
    answer:
      "None at all. We handle all the technical setup and explain everything in plain English. Our goal is to make you self-sufficient — not to create dependency on us.",
  },
  {
    question: 'How long does a typical project take?',
    answer:
      "Our packaged services are built to deliver results fast. The Quick-Start Action Plan and AI Essentials Toolkit typically complete in 1–2 weeks. Automations and workshops usually run 2–4 weeks from kickoff. We'll set clear timelines on our first call.",
  },
  {
    question: 'What kinds of businesses do you work with?',
    answer:
      'We work with small and mid-sized businesses across all industries — retail, professional services, healthcare, real estate, hospitality, and more. If you have repetitive tasks, customer communications, or content needs, there is almost certainly an AI tool that can help.',
  },
  {
    question: 'What AI tools do you use?',
    answer:
      'We work with the leading no-code and low-cost AI platforms — including ChatGPT, Claude, Zapier, Make (Integromat), Notion AI, and others. We recommend tools based on your needs and budget, with no affiliations or commissions influencing our advice.',
  },
  {
    question: 'Can I start with just one service and add more later?',
    answer:
      "Yes — and we encourage it. Many clients begin with the Quick-Start Action Plan to understand the landscape, then return for implementation. There's no obligation to commit to a bundle upfront.",
  },
  {
    question: 'Will this actually save me time or money?',
    answer:
      "That's always the goal, and we won't recommend something without a clear return. In our free discovery call we'll identify where AI can realistically save you time or increase revenue — and we'll be honest with you if something isn't worth pursuing.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faq" className="py-28 relative">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-purple-400 font-semibold text-xs uppercase tracking-[0.18em] mb-4">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Common <span className="text-gradient">questions</span>
          </h2>
          <p className="text-purple-200/55 text-lg">
            Still curious? Book a free call and ask us directly.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 + i * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full text-left glass rounded-xl px-6 py-5 transition-all duration-200 ${
                    isOpen ? 'border-purple-500/35' : 'hover:border-purple-500/25'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-semibold text-white text-[15px] leading-snug text-left">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-500/15 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                    </span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-purple-200/55 text-[14px] leading-relaxed mt-4">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
