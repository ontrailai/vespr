import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const fontSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"]
})

const fontSerif = Fraunces({ 
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: 'vespr. | We Build AI That Works',
  description: 'vespr. builds AI systems that actually work. Scout, our AI operating system, connects your tools, learns your business, and runs your operations autonomously.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontSerif.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
