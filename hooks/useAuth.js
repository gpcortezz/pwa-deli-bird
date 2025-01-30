"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { config } from "@/config"
import axios from "axios"

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

  const login = async (email, password) => {
    try {
      // Aquí haces una solicitud al endpoint real
      const response = await axios.post(`${config.API_URL}/login`, { email, password })
      setUser(response.data)
      localStorage.setItem("user", JSON.stringify(response.data))
      router.push("/dashboard")
    }
    catch (err) {
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