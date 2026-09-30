import { Hero } from '@/components/kage/hero'
import { RevealObserver } from '@/components/kage/reveal-observer'
import { SiteNav } from '@/components/kage/site-nav'
import { LeadData, Signals } from '@/components/kage/signals-data'
import { Automation, Execution, GtmSystem } from '@/components/kage/system-sections'
import {
  Consultation,
  Engagement,
  FinalCta,
  Services,
  SiteFooter,
  Strategy,
} from '@/components/kage/offer-sections'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main id="top">
        <Hero />
        <Signals />
        <LeadData />
        <GtmSystem />
        <Execution />
        <Automation />
        <Services />
        <Engagement />
        <Consultation />
        <Strategy />
        <FinalCta />
      </main>
      <SiteFooter />
      <RevealObserver />
    </>
  )
}
