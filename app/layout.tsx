import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './components/Sidebar/Sidebar'
import GlobalStyleProvider from './providers/GlobalStyleProvider'
import ContextProviders from './providers/ContextProviders'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProviders>

          <GlobalStyleProvider>
            <Sidebar />
            <div className='w-full'>{children}</div>
          </GlobalStyleProvider>
        </ContextProviders>
      </body>
    </html>
  )
}
