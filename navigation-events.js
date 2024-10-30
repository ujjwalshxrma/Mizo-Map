'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `http://localhost:3000${pathname}?${searchParams.toString()}`
    console.log(url)
    // You can now use the current URL for whatever purpose you need
  }, [pathname, searchParams])

  return null
}