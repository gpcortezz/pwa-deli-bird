import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Manifiesto PWA */}
        <link rel="manifest" href="/manifest.json" />
        {/* Tema de color */}
        <meta name="theme-color" content="#000000" />
        {/* Ícono PWA */}
        <link rel="icon" href="/icons/icon-192x192.jpg" sizes="192x192" type="image/png" />
        <link rel="icon" href="/icons/icon-512x512.jpg" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/icon-192x192.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
