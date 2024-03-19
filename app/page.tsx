"use client"

import User from '@/components/User'
import { useEffect , useState } from 'react'
import { useStore } from '@/store'
import Carousel from '@/components/Carousel'

export default function Home() {

  const {user} = useStore()
  const [isMounted, setIsMounted] = useState(false);

  useEffect(()=>{
    setIsMounted(true);
},[])
  
  if (!isMounted) {
    null
  }

  return (
    <div className='bg-bg h-full'>
      <Carousel/>
    </div>
  )
}