import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: 'Badminton Scoring App',
  description: 'Created by Yash Patil',
  generator: 'Yash Patil',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
