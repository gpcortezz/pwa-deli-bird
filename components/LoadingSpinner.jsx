import { Truck } from "lucide-react"

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative">
        <Truck size={48} className="text-primary animate-bounce" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300 rounded-full overflow-hidden">
          <div className="h-full bg-primary animate-loading-bar"></div>
        </div>
      </div>
      <p className="mt-4 text-lg font-semibold text-gray-700">Cargando su envío...</p>
    </div>
  )
}

