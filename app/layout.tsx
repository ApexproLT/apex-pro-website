import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageProvider';
import { CookieConsent } from '@/components/CookieConsent';
import { Analytics } from '@/components/Analytics';

export const metadata: Metadata = {
  title: 'APEX PRO | Premium Commercial Vehicles | Komerciniai Automobiliai',
  description: 'Premium commercial vehicles sourced from Germany. Mercedes Sprinter, VW Crafter, Ford Transit - inspected, prepared, and delivered to your fleet in Lithuania.',
  keywords: 'commercial vehicles, Mercedes Sprinter, VW Crafter, Ford Transit, Lithuania, komerciniai automobiliai, furgonai, Lietuva, import, Germany',
  authors: [{ name: 'Apex Pro' }],
  creator: 'Apex Pro',
  publisher: 'Apex Pro',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'lt_LT',
    alternateLocale: 'en_US',
    url: 'https://apexpro.lt',
    siteName: 'APEX PRO',
    title: 'APEX PRO | Premium Commercial Vehicles',
    description: 'Premium commercial vehicles sourced from Germany. Quality that works.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'APEX PRO - Premium Commercial Vehicles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'APEX PRO | Premium Commercial Vehicles',
    description: 'Premium commercial vehicles sourced from Germany. Quality that works.',
    images: ['/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0A0A0A',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'APEX PRO',
  description: 'Premium commercial vehicles import and sales in Lithuania',
  url: 'https://apexpro.lt',
  telephone: process.env.NEXT_PUBLIC_PHONE || '+370 XXX XXXXX',
  email: process.env.NEXT_PUBLIC_EMAIL || 'info@apexpro.lt',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vilnius',
    addressCountry: 'LT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '54.6872',
    longitude: '25.2797',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: [
    'https://www.facebook.com/apexpro',
    'https://www.instagram.com/apexpro',
    'https://www.linkedin.com/company/apexpro',
  ],
  priceRange: '€€',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="lt" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-apex-black text-apex-platinum antialiased">
        <LanguageProvider>
          {children}
          <CookieConsent />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
