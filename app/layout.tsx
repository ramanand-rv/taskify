import { ClerkProvider, auth } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import Sidebar from './components/Sidebar/Sidebar'
import './globals.css'
import ContextProviders from './providers/ContextProviders'
import GlobalStyleProvider from './providers/GlobalStyleProvider'

const nunito = Nunito({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Taskify | Daily Task Manager',
  description: 'Simplifying your day with efficient daily task management app.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = auth();
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={nunito.className}>
          <NextTopLoader
            height={4}
            color="#27ae60"
            easing='cubic-bezier(0.53, 0.21, 0, 1)'
          />
          <ContextProviders>

            <GlobalStyleProvider>
              {userId && <Sidebar />}
              <div className='w-full'>{children}</div>
            </GlobalStyleProvider>
          </ContextProviders>
        </body>
      </html>
    </ClerkProvider>
  )
}
