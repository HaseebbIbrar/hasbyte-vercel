import Image from 'next/image'
import { ChapterLabel, ChapterTitle } from './chapter'

const services = [
  {
    name: 'GTM Systems',
    body: 'The infrastructure connecting every stage of outbound.',
    flow: 'data → enrichment → outreach → CRM → reporting',
  },
  { name: 'Lead Data', body: 'Verified contact data, enrichment and buying and signal intelligence.' },
  { name: 'Custom Automation', body: "Workflows built around your team's existing GTM process." },
  { name: 'GTM Consultation', body: 'Strategic clarity for companies that need direction before implementation.' },
]

const engagements = [
  {
    name: 'Fixed Retainer',
    price: '$750',
    unit: '/month',
    body: 'For teams that need ongoing GTM systems, automation and execution support.',
  },
  {
    name: 'Hire by the Hour',
    price: '$30',
    unit: '/hour',
    body: 'For focused implementation, troubleshooting, workflow building and GTM support.',
  },
  {
    name: 'Hybrid Compensation',
    price: '$400',
    unit: '/month',
    extra: '+ 10% commission per deal',
    body: 'For teams that want a lower fixed commitment combined with performance-linked compensation.',
  },
]

const consultation = [
  'ICP definition',
  'Segmentation',
  'Positioning',
  '90-day GTM roadmap',
  'GTM model recommendations',
  'Channel strategy',
  'Outbound sequence templates',
]

const strategy = ['Define', 'Research', 'Enrich', 'Personalize', 'Execute', 'Automate', 'Measure']

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-16 px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <ChapterLabel index="06" name="Services" />
        <ChapterTitle id="services-title">Four ways into the system.</ChapterTitle>
        <ul className="mt-16 border-t border-border">
          {services.map((s, i) => (
            <li
              key={s.name}
              className="reveal group grid gap-3 border-b border-border py-8 md:grid-cols-[4rem_1fr_1.2fr] md:items-baseline md:gap-8 md:py-10"
            >
              <span className="text-[11px] text-primary">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-serif text-3xl transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                {s.name}
              </h3>
              <div className="text-sm leading-relaxed text-foreground/65">
                <p>{s.body}</p>
                {s.flow && <p className="mt-2 text-xs text-primary">{s.flow}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Engagement() {
  return (
    <section
      id="engagement"
      aria-labelledby="engagement-title"
      className="scroll-mt-16 border-t border-border bg-card px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <ChapterLabel index="07" name="Engagement" />
        <ChapterTitle id="engagement-title">Choose how we work together.</ChapterTitle>
        <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
          {engagements.map((e, i) => (
            <article
              key={e.name}
              className="reveal flex flex-col bg-card p-6 md:p-8"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="text-[11px] tracking-[0.3em] text-muted-foreground uppercase">{e.name}</h3>
              <p className="mt-10 flex items-baseline gap-1">
                <span className="font-serif text-6xl">{e.price}</span>
                <span className="text-sm text-muted-foreground">{e.unit}</span>
              </p>
              <p className="mt-2 h-5 text-sm text-primary">{e.extra}</p>
              <p className="mt-8 flex-1 text-sm leading-relaxed text-foreground/65">{e.body}</p>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center justify-between border-t border-border pt-5 text-xs tracking-[0.2em] uppercase transition-colors hover:text-primary"
              >
                Start here <span aria-hidden="true">{'→'}</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Consultation() {
  return (
    <section id="consultation" aria-labelledby="consultation-title" className="scroll-mt-16 px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <ChapterLabel index="08" name="Consultation" />
          <ChapterTitle id="consultation-title">Clarity before implementation.</ChapterTitle>
          <div className="reveal mt-10 flex items-baseline gap-6 border-t border-border pt-8">
            <p>
              <span className="font-serif text-6xl">$100</span>
              <span className="text-sm text-muted-foreground"> /hour</span>
            </p>
            <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Typical session
              <span className="block pt-1 text-foreground">60–90 minutes</span>
            </p>
          </div>
          <a
            href="#contact"
            className="reveal mt-10 inline-flex items-center gap-3 bg-primary px-6 py-4 text-xs tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-[#c01d17]"
          >
            Book a GTM Consultation <span aria-hidden="true">{'→'}</span>
          </a>
        </div>
        <div className="self-end">
          <p className="reveal mb-4 text-[11px] tracking-[0.3em] text-muted-foreground uppercase">What we cover</p>
          <ul className="border-t border-border">
            {consultation.map((c, i) => (
              <li key={c} className="reveal flex items-baseline gap-4 border-b border-border py-4 text-sm">
                <span className="text-[11px] text-primary">{String(i + 1).padStart(2, '0')}</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Strategy() {
  return (
    <section aria-labelledby="strategy-title" className="border-t border-border px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <ChapterLabel index="09" name="Strategy" />
        <ChapterTitle id="strategy-title">Build the system before you scale the volume.</ChapterTitle>
        <p className="reveal mt-8 max-w-lg text-sm leading-relaxed text-foreground/65">
          More volume on a weak foundation only produces more noise. We focus on the infrastructure underneath outbound
          growth first.
        </p>
        <ol className="mt-16 grid grid-cols-2 gap-px bg-border sm:grid-cols-4 lg:grid-cols-7">
          {strategy.map((s, i) => (
            <li
              key={s}
              className="reveal flex aspect-square flex-col justify-between bg-background p-4 md:p-5"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="font-serif text-4xl text-primary">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-sm tracking-wide">{s}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function FinalCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="grain relative isolate flex min-h-svh scroll-mt-16 items-center overflow-hidden px-5 py-28 md:px-10"
    >
      <div className="absolute inset-0 -z-10">
        <Image src="/images/kage-moonwater.png" alt="" fill sizes="100vw" className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/30 to-background" />
      </div>
      <div className="mx-auto w-full max-w-7xl text-center">
        <p className="reveal text-[11px] tracking-[0.3em] text-muted-foreground uppercase">10 / Begin</p>
        <h2
          id="contact-title"
          className="reveal mx-auto mt-6 max-w-4xl font-serif text-5xl leading-[1.03] tracking-tight text-balance md:text-7xl"
        >
          Your outbound should run like a system.
        </h2>
        <p className="reveal mx-auto mt-8 max-w-md text-sm leading-relaxed text-foreground/70">
          Let&apos;s build the infrastructure behind your next stage of growth.
        </p>
        <div className="reveal mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="mailto:hello@hasbyte.com?subject=Build%20my%20GTM%20system"
            className="inline-flex w-full items-center justify-center gap-3 bg-primary px-6 py-4 text-xs tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-[#c01d17] sm:w-auto"
          >
            Build My GTM System <span aria-hidden="true">{'→'}</span>
          </a>
          <a
            href="mailto:hello@hasbyte.com?subject=GTM%20consultation"
            className="inline-flex w-full items-center justify-center border border-foreground/25 px-6 py-4 text-xs tracking-[0.2em] uppercase transition-colors hover:border-foreground sm:w-auto"
          >
            Book a GTM Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-[11px] tracking-[0.25em] text-muted-foreground uppercase md:flex-row">
        <p className="flex items-center gap-2 text-foreground">
          <span aria-hidden="true" className="size-2 bg-primary" />
          HasByte
        </p>
        <p>GTM systems for modern B2B teams</p>
        <p>{`© ${new Date().getFullYear()} HasByte`}</p>
      </div>
    </footer>
  )
}
