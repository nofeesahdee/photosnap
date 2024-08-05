import './globals.css'
import DM_Sans from "next/font/google"

export const metadata = {
  title: 'Photosnap Website',
  description: 'Generated by Next.js',
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
