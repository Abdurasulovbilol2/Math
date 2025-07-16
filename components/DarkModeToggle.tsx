// components/DarkModeToggle.tsx
'use client'

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function DarkModeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [dark])

  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  )
}
