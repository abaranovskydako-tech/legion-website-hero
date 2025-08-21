
import HeroClassic from '@/components/hero-classic'
import KpiSection from '@/components/kpi-section'
import CalculatorClassic from '@/components/calculator-classic'
import ServicePackages from '@/components/service-packages'
import SocialProof from '@/components/social-proof'
import LeadSection from '@/components/lead-section'
import ScrollToTop from '@/components/scroll-to-top'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LegioN — Персонал от 350 ₽/час за 3 часа | Аутсорсинг персонала',
  description: 'Аутсорсинг линейного персонала в Новосибирске: грузчики, комплектовщики, уборщики. Персонал от 350 ₽/час, выезд за 3 часа или в течение 2 дней. 24/7 поддержка.',
  keywords: 'персонал от 350 рублей, аутсорсинг грузчиков, упаковщики склад, разнорабочие цена, подача персонала быстро, Новосибирск персонал'
}

export default function HomePage() {
  return (
    <>
      <HeroClassic />
      <KpiSection />
      <CalculatorClassic />
      <ServicePackages />
      <SocialProof />
      <LeadSection />
      <ScrollToTop />
    </>
  )
}
