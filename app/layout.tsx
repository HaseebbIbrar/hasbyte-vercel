import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Shippori_Mincho, Geist_Mono } from 'next/font/google'
import './globals.css'

const display = Shippori_Mincho({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
})

const mono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono-body',
  display: 'swap',
})

const title = 'HasByte | GTM Systems for Modern B2B Teams'
const description =
  'HasByte builds GTM systems, lead data workflows, automation and outbound infrastructure for modern B2B teams.'

export const metadata: Metadata = {
  title,
  description,
  generator: 'v0.app',
  openGraph: {
    title,
    description,
    type: 'website',
    siteName: 'HasByte',
    images: [{ url: '/images/kage-approach.png', width: 1536, height: 864, alt: 'HasByte GTM systems' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/images/kage-approach.png'] },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#070707',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
