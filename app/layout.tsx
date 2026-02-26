import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mainstreet AI — AI Consulting for Small Businesses',
  description:
    'We make AI accessible and affordable for Main Street businesses. No tech background needed. Practical tools, real results. Book a free discovery call.',
  keywords: ['AI consulting', 'small business AI', 'AI automation', 'affordable AI', 'business AI', 'AI strategy'],
  openGraph: {
    title: 'Mainstreet AI — AI Consulting for Small Businesses',
    description: 'We bring enterprise-grade AI to Main Street businesses — affordable, practical, and tailored to you.',
    type: 'website',
    url: 'https://mainstreetaico.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#1A0A2E] text-white antialiased">{children}</body>
    </html>
  )
}
