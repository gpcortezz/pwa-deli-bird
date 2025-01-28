"use client"

import { useAuthContext } from "@/components/AuthProvider"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  const { user } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/")
    }
  }, [user, router])

  if (!user) {
    return null
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Bienvenido, {user.name}!</h1>
      <Card>
        <CardHeader>
          <CardTitle>Resumen de la cuenta</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Email: {user.email}</p>
          <p>Último inicio de sesión: {new Date().toLocaleString()}</p>
        </CardContent>
      </Card>
    </div>
  )
}

