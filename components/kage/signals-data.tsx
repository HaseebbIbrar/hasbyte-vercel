import { ChapterLabel, ChapterTitle } from './chapter'

const signals = [
  { name: 'Company', note: 'Size, growth, funding, footprint' },
  { name: 'People', note: 'Role changes, seniority, new owners' },
  { name: 'Hiring', note: 'Open roles that reveal priorities' },
  { name: 'Technology', note: 'Stack adoption and migrations' },
  { name: 'Intent', note: 'Research activity around a problem' },
  { name: 'Buying', note: 'Moments when budget moves' },
  { name: 'Market', note: 'Category shifts and timing' },
]

const pricing = [
  { item: 'Verified Email', price: '$0.10', unit: '/ lead', note: '500-lead minimum' },
  { item: 'Signal Data', price: '$0.10', unit: '/ lead / signal' },
  { item: 'Phone Basic', price: '$0.25', unit: '/ lead' },
  { item: 'Phone P1-P4', price: '$0.40', unit: '/ lead' },
  { item: 'Email + Phone Basic', price: '$0.32', unit: '/ lead' },
  { item: 'Email + Phone P1-P4', price: '$0.45', unit: '/ lead' },
  { item: 'Email + Phone Basic + Signal', price: '$0.41', unit: '/ lead' },
  { item: 'Email + Phone P1-P4 + Signal', price: '$0.54', unit: '/ lead' },
]

export function Signals() {
  return (
    <section id="signals" aria-labelledby="signals-title" className="relative scroll-mt-16 px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <ChapterLabel index="01" name="The Signal" />
          <ChapterTitle id="signals-title">The right opportunity leaves signals.</ChapterTitle>
          <p className="reveal mt-8 max-w-md text-sm leading-relaxed text-foreground/65">
            Before a company buys, it moves. It hires, changes tools, raises, restructures. We capture those signals and
            route them into the system, so your team reaches out when it matters.
          </p>
        </div>
        <ul className="border-t border-border">
          {signals.map((s, i) => (
            <li
              key={s.name}
              className="reveal group grid grid-cols-[2.5rem_1fr] items-baseline gap-4 border-b border-border py-6 md:grid-cols-[3rem_12rem_1fr]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="text-[11px] text-primary tabular-nums">{`S.${String(i + 1).padStart(2, '0')}`}</span>
              <span className="font-serif text-2xl md:text-3xl">{s.name} signals</span>
              <span className="col-start-2 text-xs text-muted-foreground md:col-start-3 md:text-right">{s.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function LeadData() {
  return (
    <section id="data" aria-labelledby="data-title" className="relative scroll-mt-16 px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <ChapterLabel index="02" name="Lead Data" />
            <ChapterTitle id="data-title">Better data. Better conversations.</ChapterTitle>
          </div>
          <p className="reveal max-w-sm text-sm leading-relaxed text-foreground/65">
            Structured lead intelligence, verified contact data and signal enrichment, delivered ready for your
            workflows.
          </p>
        </div>

        <div className="reveal mt-16 overflow-hidden border border-border">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Lead data pricing</caption>
            <thead className="bg-secondary text-[11px] tracking-[0.25em] text-muted-foreground uppercase">
              <tr>
                <th scope="col" className="px-4 py-4 font-normal md:px-6">
                  Data product
                </th>
                <th scope="col" className="px-4 py-4 text-right font-normal md:px-6">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((p) => (
                <tr key={p.item} className="border-t border-border transition-colors hover:bg-secondary/60">
                  <th scope="row" className="px-4 py-5 font-normal md:px-6">
                    {p.item}
                    {p.note && <span className="mt-1 block text-xs text-primary">{p.note}</span>}
                  </th>
                  <td className="px-4 py-5 text-right whitespace-nowrap md:px-6">
                    <span className="font-serif text-2xl">{p.price}</span>{' '}
                    <span className="text-xs text-muted-foreground">{p.unit}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="reveal mt-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Volume pricing available on request.
        </p>
      </div>
    </section>
  )
}
