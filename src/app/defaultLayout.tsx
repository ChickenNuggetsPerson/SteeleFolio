import './globals.css'
import type { Metadata } from 'next'
import { useState, useEffect } from 'react'
import { Inter } from 'next/font/google'
import Navigation from "./components/navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SteeleFolio',
  description: "Hayden Steele's Portfoloio",
}

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <html lang="en">

      <body className={inter.className}>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
