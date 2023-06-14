'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Link from "next/link"
import Button from "@/components/ui/Button"

const Navigation = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <div className='flex justify-center gap-x-4 items-center w-screen' >
      <Link href='/'>Home </Link>
      <Link href='/contact'>Contact </Link>
      <Link href='/services'>Services </Link>
      <Link href='/portfolio'>Portfolio </Link>
      <Link href='/team'>Team </Link>
      <Link href='/career'>Career </Link>
      <Button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        theme is {theme ? theme : "null"}
      </Button>
    </div>
  )
}

export default Navigation