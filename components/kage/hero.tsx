'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { SignalField } from './signal-field'

export function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    const target = { x: 0, y: 0 }
    const current = { x: 0, y: 0 }
    let scroll = window.scrollY

    const onPointer = (e: PointerEvent) => {
      target.x = e.clientX / window.innerWidth - 0.5
      target.y = e.clientY / window.innerHeight - 0.5
    }
    const onScroll = () => {
      scroll = window.scrollY
    }

    const loop = () => {
      current.x += (target.x - current.x) * 0.05
      current.y += (target.y - current.y) * 0.05
      const vh = window.innerHeight
      if (scroll < vh * 1.2) {
        const p = Math.min(scroll / vh, 1)
        if (sceneRef.current) {
          sceneRef.current.style.transform = `translate3d(${current.x * -18}px, ${current.y * -12 + scroll * 0.35}px, 0) scale(${1.08 + p * 0.12})`
        }
        if (copyRef.current) {
          copyRef.current.style.transform = `translate3d(0, ${scroll * -0.15}px, 0)`
          copyRef.current.style.opacity = String(1 - p * 1.3)
        }
      }
      frame = requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', onPointer, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    frame = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onPointer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section aria-labelledby="hero-title" className="grain relative isolate flex min-h-svh flex-col overflow-hidden">
      <div ref={sceneRef} className="absolute inset-0 -z-20 scale-[1.08] will-change-transform">
        <Image
          src="/images/kage-approach.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_40%] opacity-80"
        />
      </div>
      <div className="absolute inset-0 -z-10">
        <SignalField />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_40%,transparent_20%,#070707_85%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-gradient-to-t from-background to-transparent" />

      <div ref={copyRef} className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pt-32 pb-16 md:px-10 md:pb-24">
        <p className="mb-6 flex items-center gap-3 text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
          <span className="h-px w-8 bg-primary" aria-hidden="true" />
          HasByte
          <span className="text-foreground/30" aria-hidden="true">
            /
          </span>
          GTM systems for modern B2B teams
        </p>
        <h1
          id="hero-title"
          className="max-w-4xl font-serif text-5xl leading-[1.02] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Turn your outbound into a <em className="text-primary not-italic">system.</em>
        </h1>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-pretty text-foreground/70 md:text-base">
          We build the data, workflows, automation and execution systems that help B2B teams generate and convert
          better opportunities.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-3 bg-primary px-6 py-4 text-xs tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-[#c01d17]"
          >
            Build My GTM System
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              {'→'}
            </span>
          </a>
          <a
            href="#signals"
            className="inline-flex items-center justify-center gap-3 border border-foreground/20 px-6 py-4 text-xs tracking-[0.2em] uppercase transition-colors hover:border-foreground/60 sm:border-0 sm:px-0"
          >
            Explore the System
            <span aria-hidden="true">{'↓'}</span>
          </a>
        </div>

        <dl className="mt-16 hidden grid-cols-5 border-t border-border pt-6 text-[11px] tracking-[0.25em] text-muted-foreground uppercase md:grid">
          {['Data', 'Signals', 'Systems', 'Execution', 'Automation'].map((word, i) => (
            <div key={word} className="flex gap-3">
              <dt className="text-primary">{String(i + 1).padStart(2, '0')}</dt>
              <dd>{word}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
