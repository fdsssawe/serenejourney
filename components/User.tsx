'use client'

import { useStore } from "@/store"


export default function User() {
  const {user} = useStore()
  return (
    <div>
        {user.email}
    </div>
  )
}