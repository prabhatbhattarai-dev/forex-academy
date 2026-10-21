import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forex Academy',
  description: 'A risk-free demo trading simulator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
