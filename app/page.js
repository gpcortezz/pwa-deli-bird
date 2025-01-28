"use client"

import { LoginForm } from "../components/LoginForm"
import { useAuthContext } from "../components/AuthProvider"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  const { user } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push("/dashboard")
    }
  }, [user, router])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <LoginForm />
    </div>
  )
}

