import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abhishek Mehta - Python Backend Engineer',
  description: 'Portfolio of Abhishek Mehta - Python Backend Engineer specializing in Django, FastAPI, and scalable backend systems',
  keywords: ['Python', 'Backend Engineer', 'Django', 'FastAPI', 'Portfolio'],
  authors: [{ name: 'Abhishek Mehta' }],
  openGraph: {
    title: 'Abhishek Mehta - Python Backend Engineer',
    description: 'Portfolio showcasing backend development expertise',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
