import Navigation from '@/components/Navigation'
import './globals.css'
import PageWrapper from '@/components/PageWrapper'
import { ClerkProvider } from '@clerk/nextjs'
import { Analytics } from '@vercel/analytics/react';


import { Unbounded, Prompt } from '@next/font/google'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'site-crafter | Home',
  description: 'A SaaS based Startup run by students for students.',
}
const unbounded = Unbounded({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-unbounded',
})

const prompt = Prompt({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-prompt',
})

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${unbounded.variable} ${prompt.variable} transition-all duration-150 ease-linear `} >
        <body >
          <PageWrapper>
            <Navigation />
            {children}
            <Analytics />
            <Footer />
          </PageWrapper>
        </body>
      </html>
    </ClerkProvider>
  )
}
