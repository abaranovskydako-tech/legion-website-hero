
import { Metadata } from 'next'
import AboutHero from '@/components/about-hero'
import AboutHistory from '@/components/about-history'
import AboutTeam from '@/components/about-team'
import AboutAchievements from '@/components/about-achievements'
import AboutValues from '@/components/about-values'
import CTA from '@/components/cta'

export const metadata: Metadata = {
  title: 'О компании LegioN - 5+ лет в аутсорсинге персонала',
  description: 'LegioN - ведущая компания по аутсорсингу персонала с 2019 года. 5000+ довольных клиентов, 99.5% SLA выполнения, официальная работа по всей России.',
  keywords: 'о компании LegioN, аутсорсинг персонала история, компания аутстаффинга, опыт работы персонал'
}

const AboutPage = () => {
  return (
    <div className="pt-20">
      <AboutHero />
      <AboutHistory />
      <AboutAchievements />
      <AboutValues />
      <AboutTeam />
      <CTA />
    </div>
  )
}

export default AboutPage
