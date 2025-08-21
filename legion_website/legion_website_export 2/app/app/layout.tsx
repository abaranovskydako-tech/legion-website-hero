
import './globals.css'
import { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import StickyCTA from '@/components/sticky-cta'

export const metadata: Metadata = {
  title: {
    default: 'LegioN - Персонал от 350 ₽/час для среднего бизнеса',
    template: '%s | LegioN - Аутсорсинг персонала'
  },
  description: 'LegioN - ведущая компания по аутсорсингу линейного персонала для среднего бизнеса. Грузчики, упаковщики, разнорабочие от 350 ₽/час. Быстрая подача персонала, официальное оформление.',
  keywords: 'аутсорсинг персонала, грузчики, упаковщики, разнорабочие, персонал для склада, рабочая сила, LegioN',
  robots: 'index, follow',
  openGraph: {
    title: 'LegioN - Персонал от 350 ₽/час',
    description: 'Аутсорсинг линейного персонала для среднего бизнеса. Быстрая подача, официальное оформление.',
    siteName: 'LegioN',
    locale: 'ru_RU',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
  other: {
    'msapplication-TileColor': '#0A1F44',
    'theme-color': '#0A1F44',
  }
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "LegioN",
              "description": "Аутсорсинг линейного персонала для среднего бизнеса",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+7-800-700-00-00",
                "contactType": "customer service",
                "availableLanguage": "Russian"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "RU"
              }
            })
          }}
        />
        <script src="/js/forms.js" defer></script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  )
}
