import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HEGAL GROUP',
  description: 'Experience transformative growth with HEGAL, the dynamic business advisory firm that overcomes marketplace challenges.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}
