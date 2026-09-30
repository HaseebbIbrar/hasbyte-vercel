import Image from 'next/image'
import { ChapterLabel, ChapterTitle, FlowSequence } from './chapter'

const systemSteps = ['Data', 'Enrichment', 'Qualification', 'Personalization', 'Outreach', 'Follow-up', 'CRM', 'Feedback']
const executionSteps = ['ICP', 'Lists', 'Research', 'Personalization', 'Email', 'LinkedIn', 'Calls', 'Follow-up', 'CRM']
const tools = ['Clay', 'Prospeo', 'Apollo', 'n8n', 'Lemlist', 'Instantly', 'HeyReach', 'Dripify', 'HubSpot', 'Zapier', 'Claude']
const automations = [
  'Lead enrichment',
  'Data cleanup',
  'Research',
  'Qualification',
  'Personalization',
  'Routing',
  'Notifications',
  'CRM updates',
  'Outreach workflows',
  'Reporting',
]

export function GtmSystem() {
  return (
    <section id="system" aria-labelledby="system-title" className="grain relative isolate scroll-mt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image src="/images/kage-lantern-court.png" alt="" fill sizes="100vw" className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
      </div>
      <div className="mx-auto max-w-7xl px-5 py-28 md:px-10 md:py-44">
        <ChapterLabel index="03" name="GTM System" />
        <ChapterTitle id="system-title">From scattered tools to one operating system.</ChapterTitle>
        <p className="reveal mt-8 max-w-lg text-sm leading-relaxed text-foreground/70">
          Most teams already own the tools. What they lack is the wiring between them. We connect every stage, so a
          signal becomes a qualified conversation and every result flows back into the next decision.
        </p>
        <div className="mt-20 md:mt-32">
          <FlowSequence steps={systemSteps} />
        </div>
        <p className="reveal mt-10 max-w-3xl text-xs leading-loose text-muted-foreground">
          <span className="mr-2 tracking-[0.25em] text-foreground/50 uppercase">Built on</span>
          {tools.join(' · ')}
        </p>
      </div>
    </section>
  )
}

export function Execution() {
  return (
    <section aria-labelledby="execution-title" className="relative px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <div>
            <ChapterLabel index="04" name="Execution" />
            <ChapterTitle id="execution-title">Strategy is only useful when it runs.</ChapterTitle>
          </div>
          <p className="reveal max-w-md text-sm leading-relaxed text-foreground/65 md:justify-self-end">
            We don&apos;t hand over a deck. We operate the layer where plans turn into lists, messages, calls and
            pipeline, across email, LinkedIn and phone.
          </p>
        </div>
        <div className="mt-16">
          <FlowSequence steps={executionSteps} />
        </div>
      </div>
    </section>
  )
}

export function Automation() {
  return (
    <section aria-labelledby="automation-title" className="relative border-y border-border px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <ChapterLabel index="05" name="Automation" />
          <ChapterTitle id="automation-title">Automate the work. Keep the judgment.</ChapterTitle>
          <p className="reveal mt-8 max-w-md text-sm leading-relaxed text-foreground/65">
            n8n workflows and AI agents take over the repetitive layer. People stay on what needs judgment: who to
            target, what to say, when to push.
          </p>
        </div>
        <ul className="reveal grid grid-cols-2 gap-px self-end bg-border">
          {automations.map((a, i) => (
            <li key={a} className="flex items-center gap-3 bg-background px-4 py-5 text-sm">
              <span
                aria-hidden="true"
                className="size-1.5 shrink-0 bg-primary motion-safe:animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
