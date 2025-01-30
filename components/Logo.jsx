import { Truck } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center justify-center space-x-2 text-primary">
      <Truck size={32} />
      <span className="text-2xl font-bold">Deli-Bird</span>
    </div>
  )
}

