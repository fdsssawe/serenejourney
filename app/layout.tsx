"use client"

import Providers from '@/components/Providers'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { useEffect } from 'react'
import { useStore } from '@/store'


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const {checkAuth,getBlogs,getTags} = useStore()

  useEffect(()=>{
    getBlogs()
    getTags()
    if(localStorage.getItem('token')){
      checkAuth()
    }
  },[])

  return (
    <html lang="en" >
      <body className="bg-bg">
      <Providers>
      <Navbar/>
        {children}
      </Providers>
      </body>
    </html>
  )
}
