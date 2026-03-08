const navLinks = [
  { label: 'Why Us', href: '#why' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
]

import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-purple-900/40 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Logo */}
          <a href="#">
            <Image
              src="/logo.png"
              alt="Mainstreet AI"
              width={200}
              height={60}
              className="h-40 w-auto"
            />
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-purple-300/50 hover:text-purple-200 text-sm transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex items-center gap-5 text-sm text-purple-300/50">
            <a href="tel:+16178522117" className="hover:text-purple-300 transition-colors duration-150">
              +1 617-852-2117
            </a>
            <a
              href="mailto:hello@mainstreetaico.com"
              className="hover:text-purple-300 transition-colors duration-150"
            >
              Email Us
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-900/30 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-purple-300/25">
          <p>© {year} Mainstreet AI. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
