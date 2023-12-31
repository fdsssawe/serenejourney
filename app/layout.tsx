"use client"

import Providers from '@/components/Providers'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { useEffect } from 'react'
import { useStore } from '@/store'

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

  const {checkAuth} = useStore()

  useEffect(()=>{
    if(localStorage.getItem('token')){
      checkAuth()
    }
  },[])

  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
      <Navbar/>
        {children}
      </Providers>
      </body>
    </html>
  )
}
