'use client'

import { useEffect, useState } from 'react'

const links = [
  { href: '#system', label: 'System' },
  { href: '#services', label: 'Services' },
  { href: '#data', label: 'Data' },
  { href: '#engagement', label: 'Engagement' },
  { href: '#consultation', label: 'Consultation' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? 'border-b border-border bg-background/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#top" className="flex items-center gap-2 text-sm tracking-[0.3em] uppercase">
          <span aria-hidden="true" className="size-2 bg-primary" />
          HasByte
        </a>
        <ul className="hidden items-center gap-8 text-[11px] tracking-[0.25em] text-foreground/60 uppercase lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden border border-primary/60 px-4 py-2 text-[11px] tracking-[0.25em] uppercase transition-colors hover:bg-primary lg:inline-block"
        >
          Build your system
        </a>
        <button
          type="button"
          className="flex h-10 items-center gap-2 text-[11px] tracking-[0.25em] uppercase lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
          <span aria-hidden="true" className={`block h-px w-5 bg-foreground transition-transform ${open ? 'rotate-45' : ''}`} />
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-border px-5 pt-4 pb-8 lg:hidden">
          <ul className="flex flex-col">
            {links.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 border-b border-border py-4 font-serif text-2xl"
                >
                  <span className="font-mono text-[11px] text-primary">{String(i + 1).padStart(2, '0')}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 block bg-primary px-5 py-4 text-center text-xs tracking-[0.2em] uppercase"
          >
            Build your system
          </a>
        </div>
      )}
    </header>
  )
}
