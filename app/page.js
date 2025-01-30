"use client"

import { LoginForm } from "@/components/LoginForm"
import { LoginBackground } from "@/components/LoginBackground"
import { useAuthContext } from "@/components/AuthProvider"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const { user, loading } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard")
    }
  }, [user, loading, router])

  if (loading) return <p>Cargando...</p>

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <LoginBackground />
      <LoginForm />
    </div>
  )
}