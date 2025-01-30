"use client"

import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google"
import { Navbar } from "@/components/Navbar"
import { Sidebar } from "@/components/Sidebar"
import { AuthProvider, useAuthContext } from "@/components/AuthProvider"
import { LoadingSpinner } from "@/components/LoadingSpinner"
// import { Toaster } from "@/components/ui/toaster";
import "./globals.css"

// Fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

function AppContent({ children }) {
  const { user, loading } = useAuthContext()

  if (loading) {
    return <LoadingSpinner />
  }

  if (!user) {
    return <>{children}</>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Manifiesto PWA */}
        <link rel="manifest" href="/manifest.json" />
        {/* Tema de color */}
        <meta name="theme-color" content="#000000" />
        {/* Ícono PWA */}
        <link rel="icon" href="/icons/icon-192x192.jpg" sizes="192x192" type="image/png" />
        <link rel="icon" href="/icons/icon-512x512.jpg" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.jpg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <AppContent>{children}</AppContent>
          {/* <Toaster /> */}
        </AuthProvider>
      </body>
    </html>
  )
}

