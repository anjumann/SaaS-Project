import Navigation from '@/components/Navigation'
import './globals.css'
import PageWrapper from '@/components/PageWrapper'

import {Unbounded} from 'next/font/google'

export const metadata = {
  title: 'Insiprante | Home',
  description: 'A SaaS based Startup run by students for students.',
}
const unbounded = Unbounded({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-unbounded',
})
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${unbounded.variable} transition-all duration-150 ease-linear `} >
      <body >
        <PageWrapper>
          <Navigation />
          {children}
        </PageWrapper>
      </body>
    </html>
  )
}
