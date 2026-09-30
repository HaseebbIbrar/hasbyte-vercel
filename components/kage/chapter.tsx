import type { CSSProperties, ReactNode } from 'react'

export function ChapterLabel({ index, name }: { index: string; name: string }) {
  return (
    <p className="reveal flex items-center gap-3 text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
      <span className="text-primary">{index}</span>
      <span className="h-px w-8 bg-foreground/20" aria-hidden="true" />
      {name}
    </p>
  )
}

export function ChapterTitle({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="reveal mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-balance md:text-5xl lg:text-6xl"
    >
      {children}
    </h2>
  )
}

export function FlowSequence({ steps }: { steps: string[] }) {
  return (
    <ol
      className="reveal grid grid-cols-1 gap-px border-y border-border bg-border md:grid-cols-4 xl:grid-cols-[repeat(var(--steps),minmax(0,1fr))]"
      style={{ '--steps': steps.length } as CSSProperties}
    >
      {steps.map((step, i) => (
        <li
          key={step}
          className="group relative flex items-center gap-4 bg-background/70 px-1 py-4 backdrop-blur-sm md:flex-col md:items-start md:gap-6 md:px-4 md:py-6"
        >
          <span className="text-[11px] text-primary tabular-nums">{String(i + 1).padStart(2, '0')}</span>
          <span className="text-sm tracking-wide">{step}</span>
          <span aria-hidden="true" className="flow-line absolute inset-x-0 top-0 hidden h-px md:block" style={{ animationDelay: `${i * 0.4}s` }} />
        </li>
      ))}
    </ol>
  )
}
