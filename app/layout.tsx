import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aurex Consultancy - Your Strategic Partner for Success in Dubai',
  description: 'Expert Dubai business consulting, Golden Visa services, and real estate investment advisory. 15+ years experience, 500+ clients, comprehensive solutions.',
  keywords: [
    'Dubai business consulting',
    'Golden Visa UAE',
    'Dubai real estate investment',
    'business setup Dubai',
    'management consulting Dubai',
    'HNWI services',
    'wealth management Dubai',
  ],
  authors: [{ name: 'Aurex Consultancy' }],
  creator: 'Aurex Consultancy',
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://aurex-consultancy.com',
    siteName: 'Aurex Consultancy',
    title: 'Aurex Consultancy - Your Strategic Partner for Success in Dubai',
    description: 'Expert Dubai business consulting, Golden Visa services, and real estate investment advisory.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aurex Consultancy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@aurexconsult',
    creator: '@aurexconsult',
    title: 'Aurex Consultancy - Your Strategic Partner for Success in Dubai',
    description: 'Expert Dubai business consulting, Golden Visa services, and real estate investment advisory.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0284c7" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          async
          src="https://cdn.jsdelivr.net/npm/hotjar@6/hj.js"
        ></script>
      </head>
      <body className="bg-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
