"use client"

import User from '@/components/User'
import { useEffect } from 'react'
import { useStore } from '@/store'

export default function Home() {

  const {checkAuth} = useStore()

  useEffect(()=>{
    if(localStorage.getItem('token')){
      checkAuth()
    }
  },[])

  return (
    <div>
      <User/>
    </div>
  )
}