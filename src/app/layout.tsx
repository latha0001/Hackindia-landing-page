import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HackIndia 2025 - India's Biggest Web3 & AI Hackathon",
  description: "Join HackIndia 2025 - India's Biggest Web3 & AI Hackathon with $150+ prize pool, 150+ universities and 25,000+ students participating.",
}

export default function RootLayout({ 
  children,

}: {
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}