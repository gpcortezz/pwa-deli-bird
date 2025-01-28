"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    if (email === "gio@gmail.com" && password === "password") {
      const user = { name: "Giovanni", email }
      localStorage.setItem("user", JSON.stringify(user))
      setUser(user)
      router.push("/dashboard")
    } else {
      throw new Error("Credenciales inválidas")
    }
  }

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
    router.push("/")
  }

  return { user, login, logout, loading }
}

