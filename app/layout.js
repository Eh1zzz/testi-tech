import './globals.css';
import { BIZ } from '@/lib/data';

export const metadata = {
  metadataBase: new URL(BIZ.url),
  title: 'Testi-Tech Global — Buy · Sell · Swap',
  description:
    'Testi-Tech Global — Buy, Sell & Swap premium gadgets. iPhones, Android phones, laptops, tablets. Expert repair & unlocking services in Benin City, Edo State.',
  keywords: [
    'buy iPhone Benin City',
    'sell phone Nigeria',
    'swap gadgets',
    'phone repair Benin City',
    'iCloud unlock',
    'Testi-Tech',
  ],
  openGraph: {
    title: 'Testi-Tech Global — Buy · Sell · Swap',
    description: 'Premium gadgets marketplace & repair hub in Benin City.',
    url: BIZ.url,
    siteName: BIZ.name,
    locale: 'en_NG',
    type: 'website',
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#0a0e1a',
  width: 'device-width',
  initialScale: 1,
};

// LocalBusiness structured data → helps Google/Maps surface the shop.
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ElectronicsStore',
  name: BIZ.name,
  description: 'Buy, sell & swap gadgets + expert phone repair and unlocking.',
  url: BIZ.url,
  telephone: `+234${BIZ.phones[0].replace(/^0/, '')}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${BIZ.address.street}, ${BIZ.address.landmark}`,
    addressLocality: BIZ.address.city,
    addressRegion: BIZ.address.region,
    addressCountry: 'NG',
  },
  areaServed: 'Benin City, Edo State, Nigeria',
  openingHours: ['Mo-Sa 09:00-19:00', 'Su 12:00-17:00'],
  priceRange: '₦₦',
};

// Set the saved theme before first paint (no flash of the wrong theme).
const noFlashTheme = `(function(){try{var t=localStorage.getItem('tt-theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: noFlashTheme }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
