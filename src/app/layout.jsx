import '@/index.css';
import { ClientLayout } from './client-layout';

export const metadata = {
  title: 'KASI Ranaweera - Software Engineer',
  description: 'K.A.S.I. Ranaweera (Sithija Ranaweera) - Software Engineer specialized in AI, ML, and Full-Stack Development',
  keywords: [
    'Software Engineer',
    'AI Developer',
    'Machine Learning',
    'Full-Stack Development',
    'Python',
    'React',
    'Web Development',
  ],
  authors: [{ name: 'Kasi Ranaweera' }],
  creator: 'Kasi Ranaweera',
  openGraph: {
    title: 'KASI Ranaweera - Software Engineer',
    description: 'Experienced software engineer specializing in AI, ML, and full-stack development',
    url: 'https://kasiranaweera.vercel.app',
    siteName: 'Kasi Ranaweera Portfolio',
    images: [
      {
        url: 'https://kasiranaweera.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kasi Ranaweera - Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KASI Ranaweera - Software Engineer',
    description: 'Experienced software engineer specializing in AI, ML, and full-stack development',
    images: ['https://kasiranaweera.vercel.app/og-image.png'],
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
    google: 'FIG9y5d1ZovxTZBlRFuZJ0hgTP5jeENMd3rtl2V2wWE',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="google-site-verification" content="FIG9y5d1ZovxTZBlRFuZJ0hgTP5jeENMd3rtl2V2wWE" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
