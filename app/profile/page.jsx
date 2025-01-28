"use client"

import { useAuthContext } from "@/components/AuthProvider"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// import { useToast } from "@/components/ui/use-toast"

export default function Profile() {
  const { user } = useAuthContext()
  const router = useRouter()
  // const { toast } = useToast()

  useEffect(() => {
    if (!user) {
      router.push("/")
    }
  }, [user, router])

  if (!user) {
    return null
  }

  const handleUpdateProfile = () => {
    // Aquí iría la lógica para actualizar el perfil
    toast({
      title: "Perfil actualizado",
      description: "Tus cambios han sido guardados exitosamente.",
    })
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Perfil de Usuario</h1>
      <Card>
        <CardHeader>
          <CardTitle>Información Personal</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Nombre: {user.name}</p>
          <p>Email: {user.email}</p>
          <Button onClick={handleUpdateProfile} className="mt-4">
            Actualizar Perfil
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

