"use client"

import User from '@/components/User'
import { useEffect , useState } from 'react'
import { useStore } from '@/store'

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
    <div>
      <User/>
    </div>
  )
}