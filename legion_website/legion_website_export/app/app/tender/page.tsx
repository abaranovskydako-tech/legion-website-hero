
import { Metadata } from 'next'
import TenderHero from '@/components/tender-hero'
import TenderDocuments from '@/components/tender-documents'
import TenderRequirements from '@/components/tender-requirements'
import TenderProcess from '@/components/tender-process'
import TenderForm from '@/components/tender-form'

export const metadata: Metadata = {
  title: 'Тендерная документация LegioN - Документы для участия в тендерах',
  description: 'Скачайте полный пакет тендерной документации LegioN: устав, лицензии, сертификаты, финансовая отчетность. Официальные документы для участия в тендерах.',
  keywords: 'тендерная документация LegioN, документы для тендера, устав компании, лицензии аутсорсинг, сертификаты персонал'
}

const TenderPage = () => {
  return (
    <div className="pt-20">
      <TenderHero />
      <TenderDocuments />
      <TenderRequirements />
      <TenderProcess />
      <TenderForm />
    </div>
  )
}

export default TenderPage
